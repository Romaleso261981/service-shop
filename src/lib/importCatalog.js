import fs from "fs";
import path from "path";
import { parseMoney } from "./money";
import { applyImportedProduct, findProductBySku, flatCategories } from "./store";

const STOCK = ["in", "out", "order"];
const STATUS = ["active", "inactive"];
const MAX_ROWS = 20000;
const BATCH = 100;

function text(value) {
  return String(value ?? "").trim();
}

function imageNames(row) {
  const images = [];
  if (Array.isArray(row.images)) {
    row.images.forEach((item) => {
      const name = text(typeof item === "string" ? item : item?.filename || item?.image);
      if (name) images.push(name);
    });
  }
  const main = text(row.image);
  if (main) images.unshift(main);
  return images.filter((name, index) => images.indexOf(name) === index);
}

function specsOf(row) {
  if (Array.isArray(row.specs)) {
    return row.specs
      .map((item) => ({ name: text(item?.name), value: text(item?.value) }))
      .filter((item) => item.name && item.value);
  }
  if (row.specs && typeof row.specs === "object") {
    return Object.entries(row.specs)
      .map(([name, value]) => ({ name: text(name), value: text(value) }))
      .filter((item) => item.name && item.value);
  }
  return [];
}

function compatibilityOf(row) {
  const source = row.compatibility || row.compatible || row.models;
  if (Array.isArray(source)) {
    return source
      .map((item) => {
        if (typeof item === "string") {
          const [brand, model] = item.split("|").map((part) => part.trim());
          return model ? { brand: brand || "", model } : { brand: "", model: item.trim() };
        }
        return { brand: text(item?.brand), model: text(item?.model) };
      })
      .filter((item) => item.model);
  }
  if (typeof source === "string") {
    return source
      .split("\n")
      .map((line) => text(line))
      .filter(Boolean)
      .map((line) => {
        const [brand, model] = line.split("|").map((part) => part.trim());
        return model ? { brand: brand || "", model } : { brand: "", model: line };
      });
  }
  return [];
}

function sameName(left, right) {
  return text(left).toLowerCase() === text(right).toLowerCase();
}

function resolveCategory(categories, row) {
  const categoryPath = text(row.category_path || row.path);
  if (categoryPath) {
    const found = categories.find((item) => item.path === categoryPath);
    return found ? { id: found.id } : { error: `Категорію не знайдено: ${categoryPath}` };
  }
  const names = [text(row.category), text(row.subcategory), text(row.part || row.group)].filter(Boolean);
  if (!names.length) return { error: "Вкажіть категорію" };
  let candidates = categories.filter((item) => !item.parent_id && sameName(item.name, names[0]));
  if (!candidates.length) candidates = categories.filter((item) => sameName(item.name, names[0]));
  if (!candidates.length) return { error: `Категорію не знайдено: ${names[0]}` };
  if (candidates.length > 1) {
    return { error: `Назва «${names[0]}» є в кількох гілках. Вкажіть category_path` };
  }
  let node = candidates[0];
  for (const name of names.slice(1)) {
    const children = categories.filter((item) => item.parent_id === node.id && sameName(item.name, name));
    if (children.length !== 1) return { error: `Підкатегорію не знайдено: ${name}` };
    node = children[0];
  }
  return { id: node.id };
}

function fileExists(name) {
  if (!name || name.includes("/") || name.includes("\\")) return false;
  const dir = process.env.IMAGE_DIR || path.join(process.cwd(), "public/assets/images");
  return fs.existsSync(path.join(dir, name));
}

export function parseImportPayload(payload) {
  const products = Array.isArray(payload) ? payload : payload?.products;
  if (!Array.isArray(products)) {
    return { error: "JSON має містити масив products" };
  }
  if (products.length > MAX_ROWS) {
    return { error: `За один раз можна імпортувати не більше ${MAX_ROWS} товарів` };
  }
  return { products };
}

export async function planImport(products) {
  const categories = await flatCategories();
  const seen = new Set();
  const rows = [];
  for (let index = 0; index < products.length; index += 1) {
    const source = products[index] || {};
    const sku = text(source.sku);
    const title = text(source.title);
    const errors = [];
    const warnings = [];
    if (!sku) errors.push("Немає артикула");
    if (!title) errors.push("Немає назви");
    if (sku && seen.has(sku.toLowerCase())) errors.push("Артикул повторюється у файлі");
    if (sku) seen.add(sku.toLowerCase());
    const price = parseMoney(source.price ?? source.price_amount);
    const sale = source.sale_price == null || source.sale_price === ""
      ? null
      : parseMoney(source.sale_price ?? source.sale_price_amount);
    if (price == null) errors.push("Некоректна ціна");
    if (source.sale_price != null && source.sale_price !== "" && sale == null) {
      errors.push("Некоректна акційна ціна");
    }
    const category = resolveCategory(categories, source);
    if (category.error) errors.push(category.error);
    const stock = text(source.stock_status || source.stock || "in");
    const status = text(source.status || "active");
    if (!STOCK.includes(stock)) errors.push("Наявність має бути in, out або order");
    if (!STATUS.includes(status)) errors.push("Статус має бути active або inactive");
    const images = imageNames(source);
    images.forEach((name) => {
      if (!fileExists(name)) warnings.push(`Фото немає в каталозі файлів: ${name}`);
    });
    const qty = source.stock_qty == null || source.stock_qty === "" ? 0 : Number(source.stock_qty);
    if (!Number.isInteger(qty) || qty < 0) errors.push("Залишок має бути цілим числом від 0");
    rows.push({
      line: index + 1,
      sku,
      title,
      action: errors.length ? "invalid" : "pending",
      errors,
      warnings,
      input: errors.length
        ? null
        : {
            sku,
            title,
            slug: text(source.slug),
            category_id: category.id,
            brand: text(source.brand),
            manufacturer: text(source.manufacturer),
            price_amount: price,
            sale_price_amount: sale,
            stock_status: stock,
            stock_qty: qty,
            lead_time: text(source.lead_time),
            description: text(source.description),
            warranty: text(source.warranty),
            ...(source.specs != null ? { specs: specsOf(source) } : {}),
            seo_title: text(source.seo_title),
            seo_description: text(source.seo_description),
            status,
            ...(source.image != null || source.images != null ? { images } : {}),
            ...(source.compatibility != null || source.compatible != null || source.models != null
              ? { compatibility: compatibilityOf(source) }
              : {}),
          },
    });
  }

  for (const row of rows) {
    if (row.action === "invalid" || !row.sku) continue;
    const existing = await findProductBySku(row.sku);
    row.action = existing ? "update" : "create";
    row.existingId = existing?.id || null;
  }

  const summary = rows.reduce(
    (result, row) => {
      result[row.action] += 1;
      result.warnings += row.warnings.length;
      return result;
    },
    { create: 0, update: 0, invalid: 0, warnings: 0, total: rows.length }
  );
  return { summary, rows };
}

export async function runImport(products) {
  const plan = await planImport(products);
  const applied = { created: 0, updated: 0, invalid: plan.summary.invalid, failed: [] };
  const valid = plan.rows.filter((row) => row.action === "create" || row.action === "update");
  for (let index = 0; index < valid.length; index += BATCH) {
    const chunk = valid.slice(index, index + BATCH);
    for (const row of chunk) {
      const result = await applyImportedProduct({ input: row.input, existingId: row.existingId });
      if (result.error) {
        applied.failed.push({ line: row.line, sku: row.sku, error: result.error });
        continue;
      }
      if (row.action === "update") applied.updated += 1;
      else applied.created += 1;
    }
  }
  return { summary: plan.summary, applied };
}
