import { createHash, randomBytes } from "crypto";
import fs from "fs";
import path from "path";
import { sql } from "../db";
import { categoryNodes, categorySlug } from "./categorySlug";
import { formatMoney } from "./money";

const STOCK = ["in", "out", "order"];
const STATUS = ["active", "inactive"];

let readyPromise;

function statements(text) {
  return text
    .split(/;\s*(?:\n|$)/)
    .map((part) => part.trim())
    .filter((part) => part && !part.startsWith("--"));
}

function newId() {
  return randomBytes(12).toString("hex");
}

function categoryId(categoryPath) {
  return createHash("sha256").update(categoryPath).digest("hex").slice(0, 24);
}

async function applySchema() {
  const file = fs.readFileSync(path.join(process.cwd(), "src/db/schema.sql"), "utf8");
  for (const statement of statements(file)) {
    await sql.unsafe(statement);
  }
}

async function insertNode(tx, node, parentId) {
  await tx`
    insert into categories (id, parent_id, name, slug, path, sort_order)
    values (${categoryId(node.path)}, ${parentId}, ${node.name}, ${node.slug}, ${node.path}, ${node.sort})
    on conflict (path) do nothing
  `;
  for (const child of node.children) {
    await insertNode(tx, child, categoryId(node.path));
  }
}

async function seedCategories() {
  const existing = await sql`select value from schema_meta where key = 'categories_seeded'`;
  if (existing.length) return;
  await sql.begin(async (tx) => {
    await tx`select pg_advisory_xact_lock(714001)`;
    const again = await tx`select value from schema_meta where key = 'categories_seeded'`;
    if (again.length) return;
    for (const node of categoryNodes()) {
      await insertNode(tx, node, null);
    }
    await tx`
      insert into schema_meta (key, value)
      values ('categories_seeded', '1')
      on conflict (key) do nothing
    `;
  });
}

export function ready() {
  if (!readyPromise) {
    readyPromise = applySchema()
      .then(seedCategories)
      .catch((error) => {
        readyPromise = null;
        throw error;
      });
  }
  return readyPromise;
}

function filenames(images, image) {
  const list = Array.isArray(images) ? images : [];
  return list
    .map((item) => (typeof item === "string" ? item : item?.filename))
    .map((item) => String(item || "").trim())
    .filter(Boolean)
    .filter((item, index, all) => all.indexOf(item) === index)
    .concat(image && !list.length ? [image] : [])
    .filter((item, index, all) => all.indexOf(item) === index);
}

export function toPublicProduct(row) {
  const regular = formatMoney(row.price_amount);
  const sale = row.sale_price_amount == null ? "" : formatMoney(row.sale_price_amount);
  const photos = filenames(row.images, row.image);
  const compatibility = Array.isArray(row.compatibility) ? row.compatibility : [];
  return {
    id: row.id,
    sku: row.sku,
    slug: row.slug,
    title: row.title,
    brand: row.brand || "",
    manufacturer: row.manufacturer || "",
    image: row.image || photos[0] || "",
    images: photos,
    price: sale ? regular : "",
    offer_price: sale || regular,
    price_amount: row.price_amount,
    sale_price_amount: row.sale_price_amount,
    review: 0,
    campaingn_product: false,
    cam_product_available: null,
    cam_product_sale: null,
    product_type: null,
    stock: row.stock_status,
    stock_qty: row.stock_qty,
    lead_time: row.lead_time || "",
    description: row.description || "",
    warranty: row.warranty || "",
    specs: Array.isArray(row.specs) ? row.specs : [],
    compatibility,
    compatible: compatibility
      .map((item) => [item.brand, item.model].filter(Boolean).join(" "))
      .join("\n"),
    seo_title: row.seo_title || "",
    seo_description: row.seo_description || "",
    status: row.status,
    category_id: row.category_id,
    category_chain: row.category_chain || [],
  };
}

const PRODUCT_SELECT = `
  select p.*,
    coalesce((
      select json_agg(json_build_object('filename', i.filename, 'alt', i.alt) order by i.sort_order, i.filename)
      from product_images i where i.product_id = p.id
    ), '[]'::json) as images,
    coalesce((
      select json_agg(json_build_object('brand', c.brand, 'model', c.model) order by c.brand, c.model)
      from product_compatibility c where c.product_id = p.id
    ), '[]'::json) as compatibility
  from products p
`;

async function categoryChain(categoryId) {
  if (!categoryId) return [];
  const rows = await sql`
    with recursive chain as (
      select id, parent_id, name, path, 0 as depth
      from categories where id = ${categoryId}
      union all
      select c.id, c.parent_id, c.name, c.path, chain.depth + 1
      from categories c
      join chain on c.id = chain.parent_id
    )
    select name, path from chain order by depth desc
  `;
  return rows;
}

async function withChain(rows) {
  const chains = new Map();
  for (const row of rows) {
    if (!row.category_id || chains.has(row.category_id)) continue;
    chains.set(row.category_id, await categoryChain(row.category_id));
  }
  return rows.map((row) => ({
    ...row,
    category_chain: chains.get(row.category_id) || [],
  }));
}

export async function categoryTree() {
  await ready();
  const rows = await sql`
    select id, parent_id, name, slug, path, sort_order
    from categories
    order by sort_order, name
  `;
  const grouped = new Map();
  rows.forEach((row) => {
    const key = row.parent_id || "";
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(row);
  });
  function build(parentId) {
    return (grouped.get(parentId || "") || []).map((row) => ({
      id: row.id,
      name: row.name,
      slug: row.slug,
      path: row.path,
      children: build(row.id),
    }));
  }
  return build("");
}

export async function getCategoryByPath(categoryPath) {
  await ready();
  const rows = await sql`
    select id, parent_id, name, slug, path
    from categories
    where path = ${categoryPath}
  `;
  return rows[0] || null;
}

export async function categoriesBySuffix(suffix) {
  await ready();
  return sql`
    select id, name, path
    from categories
    where path = ${suffix} or path like ${`%/${suffix}`}
  `;
}

export async function categoryBreadcrumb(categoryId) {
  await ready();
  return categoryChain(categoryId);
}

export async function listChildCategories(parentId) {
  await ready();
  return sql`
    select id, name, slug, path
    from categories
    where parent_id = ${parentId}
    order by sort_order, name
  `;
}

function descendantCondition(categoryIds) {
  if (!categoryIds?.length) return sql`true`;
  return sql`p.category_id in ${sql(categoryIds)}`;
}

export async function descendantIds(categoryId) {
  await ready();
  const rows = await sql`
    with recursive tree as (
      select id from categories where id = ${categoryId}
      union all
      select c.id from categories c join tree on c.parent_id = tree.id
    )
    select id from tree
  `;
  return rows.map((row) => row.id);
}

function productFilters({ q, brand, stock, min, max, status, categoryIds }) {
  const like = q ? `%${q.replace(/[%_]/g, "")}%` : null;
  return sql`
    ${status ? sql`p.status = ${status}` : sql`true`}
    ${brand ? sql`and lower(p.brand) = lower(${brand})` : sql``}
    ${stock ? sql`and p.stock_status = ${stock}` : sql``}
    ${min != null ? sql`and coalesce(p.sale_price_amount, p.price_amount) >= ${min}` : sql``}
    ${max != null ? sql`and coalesce(p.sale_price_amount, p.price_amount) <= ${max}` : sql``}
    ${categoryIds?.length ? sql`and ${descendantCondition(categoryIds)}` : sql``}
    ${
      like
        ? sql`and (
            p.title ilike ${like}
            or p.sku ilike ${like}
            or p.brand ilike ${like}
            or p.manufacturer ilike ${like}
            or exists (
              select 1 from product_compatibility c
              where c.product_id = p.id and (c.model ilike ${like} or c.brand ilike ${like})
            )
          )`
        : sql``
    }
  `;
}

export async function searchProducts(options = {}) {
  await ready();
  const limit = Math.min(48, Math.max(1, Number(options.limit) || 24));
  const page = Math.max(1, Number(options.page) || 1);
  const offset = (page - 1) * limit;
  const where = productFilters(options);
  const rows = await sql`
    ${sql.unsafe(PRODUCT_SELECT)}
    where ${where}
    order by p.updated_at desc
    limit ${limit} offset ${offset}
  `;
  const totalRows = await sql`select count(*)::int as total from products p where ${where}`;
  const products = (await withChain(rows)).map(toPublicProduct);
  return { products, total: totalRows[0]?.total || 0, page, limit };
}

export async function listBrands() {
  await ready();
  const rows = await sql`
    select brand, count(*)::int as total
    from products
    where status = 'active' and brand <> ''
    group by brand
    order by brand
  `;
  return rows;
}

export async function getPublicProduct(idOrSlug) {
  await ready();
  const rows = await sql`
    ${sql.unsafe(PRODUCT_SELECT)}
    where (p.id = ${idOrSlug} or p.slug = ${idOrSlug}) and p.status = 'active'
    limit 1
  `;
  if (!rows[0]) return null;
  const [row] = await withChain(rows);
  return toPublicProduct(row);
}

export async function getAdminProduct(id) {
  await ready();
  const rows = await sql`
    ${sql.unsafe(PRODUCT_SELECT)}
    where p.id = ${id}
    limit 1
  `;
  if (!rows[0]) return null;
  const [row] = await withChain(rows);
  return toPublicProduct(row);
}

async function uniqueSlug(tx, title, sku, ignoreId) {
  const base = categorySlug(title) || categorySlug(sku) || "product";
  let slug = base;
  let index = 2;
  while (true) {
    const rows = await tx`
      select id from products where slug = ${slug} and id is distinct from ${ignoreId}
    `;
    if (!rows.length) return slug;
    slug = `${base}-${index}`;
    index += 1;
  }
}

export async function saveProduct(input, id) {
  await ready();
  const title = String(input.title || "").trim();
  const sku = String(input.sku || "").trim();
  if (!title || !sku) return { error: "Вкажіть назву і артикул" };
  if (!Number.isInteger(input.price_amount) || input.price_amount < 0) {
    return { error: "Вкажіть коректну ціну" };
  }
  if (
    input.sale_price_amount != null &&
    (!Number.isInteger(input.sale_price_amount) || input.sale_price_amount < 0)
  ) {
    return { error: "Вкажіть коректну акційну ціну" };
  }
  const stock = STOCK.includes(input.stock_status) ? input.stock_status : "in";
  const status = STATUS.includes(input.status) ? input.status : "active";
  const images = filenames(input.images, input.image);
  const compatibility = (Array.isArray(input.compatibility) ? input.compatibility : [])
    .map((item) => ({
      brand: String(item?.brand || "").trim(),
      model: String(item?.model || "").trim(),
    }))
    .filter((item) => item.model);
  const specs =
    input.specs == null
      ? null
      : JSON.stringify(
          (Array.isArray(input.specs) ? input.specs : [])
            .map((item) => ({
              name: String(item?.name || "").trim(),
              value: String(item?.value || "").trim(),
            }))
            .filter((item) => item.name && item.value)
        );

  try {
    const productId = await sql.begin(async (tx) => {
      const sameSku = await tx`
        select id from products where lower(sku) = lower(${sku}) and id is distinct from ${id || null}
      `;
      if (sameSku.length) throw new Error("Артикул уже існує");
      if (input.category_id) {
        const category = await tx`select id from categories where id = ${input.category_id}`;
        if (!category.length) throw new Error("Категорію не знайдено");
      }
      let slug = String(input.slug || "").trim();
      if (!slug && id) {
        const current = await tx`select slug from products where id = ${id}`;
        slug = current[0]?.slug || "";
      }
      if (!slug) slug = await uniqueSlug(tx, title, sku, id || null);
      const sameSlug = await tx`
        select id from products where slug = ${slug} and id is distinct from ${id || null}
      `;
      if (sameSlug.length) throw new Error("Така адреса товару вже є");
      const fields = {
        sku,
        slug,
        title,
        category_id: input.category_id || null,
        brand: String(input.brand || "").trim(),
        manufacturer: String(input.manufacturer || "").trim(),
        price_amount: input.price_amount,
        sale_price_amount: input.sale_price_amount,
        stock_status: stock,
        stock_qty: Math.max(0, Number(input.stock_qty) || 0),
        lead_time: String(input.lead_time || "").trim(),
        description: String(input.description || "").trim(),
        warranty: String(input.warranty || "").trim(),
        specs,
        seo_title: String(input.seo_title || "").trim(),
        seo_description: String(input.seo_description || "").trim(),
        image: Array.isArray(input.images) || input.image ? images[0] || "" : null,
        status,
      };
      let savedId = id;
      if (id) {
        const updated = await tx`
          update products set
            sku = ${fields.sku},
            slug = ${fields.slug},
            title = ${fields.title},
            category_id = ${fields.category_id},
            brand = ${fields.brand},
            manufacturer = ${fields.manufacturer},
            price_amount = ${fields.price_amount},
            sale_price_amount = ${fields.sale_price_amount},
            stock_status = ${fields.stock_status},
            stock_qty = ${fields.stock_qty},
            lead_time = ${fields.lead_time},
            description = ${fields.description},
            warranty = ${fields.warranty},
            specs = coalesce(${fields.specs}::jsonb, specs),
            seo_title = ${fields.seo_title},
            seo_description = ${fields.seo_description},
            image = coalesce(${fields.image}, image),
            status = ${fields.status},
            updated_at = now()
          where id = ${id}
          returning id
        `;
        if (!updated.length) throw new Error("Товар не знайдено");
      } else {
        savedId = newId();
        await tx`
          insert into products (
            id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
            stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
            image, status
          ) values (
            ${savedId}, ${fields.sku}, ${fields.slug}, ${fields.title}, ${fields.category_id},
            ${fields.brand}, ${fields.manufacturer}, ${fields.price_amount}, ${fields.sale_price_amount},
            ${fields.stock_status}, ${fields.stock_qty}, ${fields.lead_time}, ${fields.description},
            ${fields.warranty}, ${fields.specs ?? "[]"}::jsonb, ${fields.seo_title}, ${fields.seo_description},
            ${fields.image || ""}, ${fields.status}
          )
        `;
      }
      if (Array.isArray(input.images) || input.image) {
        await tx`delete from product_images where product_id = ${savedId}`;
        for (let index = 0; index < images.length; index += 1) {
          await tx`
            insert into product_images (id, product_id, filename, sort_order)
            values (${newId()}, ${savedId}, ${images[index]}, ${index})
          `;
        }
      }
      if (Array.isArray(input.compatibility)) {
        await tx`delete from product_compatibility where product_id = ${savedId}`;
        for (const item of compatibility) {
          await tx`
            insert into product_compatibility (id, product_id, brand, model)
            values (${newId()}, ${savedId}, ${item.brand}, ${item.model})
          `;
        }
      }
      return savedId;
    });
    return { product: await getAdminProduct(productId) };
  } catch (error) {
    return { error: error.message || "Не вдалося зберегти товар" };
  }
}

export async function deleteProduct(id) {
  await ready();
  const rows = await sql`delete from products where id = ${id} returning id`;
  return rows.length > 0;
}

export async function createCategory({ name, parentId }) {
  await ready();
  const trimmed = String(name || "").trim();
  if (!trimmed) return { error: "Вкажіть назву категорії" };
  const parent = parentId
    ? (await sql`select id, path from categories where id = ${parentId}`)[0]
    : null;
  if (parentId && !parent) return { error: "Батьківську категорію не знайдено" };
  const slug = categorySlug(trimmed);
  const categoryPath = parent?.path ? `${parent.path}/${slug}` : slug;
  const clash = await sql`select id from categories where path = ${categoryPath}`;
  if (clash.length) return { error: "Така адреса категорії вже є" };
  const sortRows = await sql`
    select coalesce(max(sort_order), -1) + 1 as sort
    from categories
    where parent_id is not distinct from ${parentId || null}
  `;
  const id = newId();
  await sql`
    insert into categories (id, parent_id, name, slug, path, sort_order)
    values (${id}, ${parentId || null}, ${trimmed}, ${slug}, ${categoryPath}, ${sortRows[0].sort})
  `;
  return { category: { id, name: trimmed, slug, path: categoryPath, parent_id: parentId || null } };
}

export async function updateCategory(id, name) {
  await ready();
  const trimmed = String(name || "").trim();
  if (!trimmed) return { error: "Вкажіть назву категорії" };
  const node = (await sql`select id, parent_id, path from categories where id = ${id}`)[0];
  if (!node) return { error: "Категорію не знайдено" };
  const parent = node.parent_id
    ? (await sql`select path from categories where id = ${node.parent_id}`)[0]
    : null;
  const slug = categorySlug(trimmed);
  const nextPath = parent?.path ? `${parent.path}/${slug}` : slug;
  const clash = await sql`select id from categories where path = ${nextPath} and id <> ${id}`;
  if (clash.length) return { error: "Така адреса категорії вже є" };
  const descendants = await sql`
    select id, path from categories
    where path = ${node.path} or path like ${`${node.path}/%`}
    order by length(path) desc
  `;
  await sql.begin(async (tx) => {
    for (const item of descendants) {
      const path = item.path === node.path ? nextPath : `${nextPath}${item.path.slice(node.path.length)}`;
      const itemSlug = path.split("/").pop();
      if (item.id === id) {
        await tx`update categories set name = ${trimmed}, slug = ${itemSlug}, path = ${path} where id = ${item.id}`;
      } else {
        await tx`update categories set slug = ${itemSlug}, path = ${path} where id = ${item.id}`;
      }
    }
  });
  return { ok: true };
}

export async function deleteCategory(id) {
  await ready();
  const children = await sql`select id from categories where parent_id = ${id} limit 1`;
  if (children.length) return { error: "Спочатку видаліть або перенесіть підкатегорії" };
  const products = await sql`select id from products where category_id = ${id} limit 1`;
  if (products.length) return { error: "У категорії є товари" };
  const deleted = await sql`delete from categories where id = ${id} returning id`;
  if (!deleted.length) return { error: "Категорію не знайдено" };
  return { ok: true };
}

export async function flatCategories() {
  await ready();
  return sql`
    select id, parent_id, name, slug, path
    from categories
    order by path
  `;
}

export async function findProductBySku(sku) {
  await ready();
  const rows = await sql`select id, slug from products where lower(sku) = lower(${sku}) limit 1`;
  return rows[0] || null;
}

export async function applyImportedProduct(record) {
  return saveProduct(record.input, record.existingId || null);
}
