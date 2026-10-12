import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const WRITE_FLAGS = ["--apply", "--write", "--commit", "--execute"];

if (process.argv.some((arg) => WRITE_FLAGS.includes(arg))) {
  console.error("Цей скрипт лише перевіряє JSON. Запис у базу вимкнено.");
  process.exit(1);
}

function text(value) {
  return String(value ?? "").trim();
}

function sameName(left, right) {
  return text(left).toLowerCase() === text(right).toLowerCase();
}

function loadModule(file) {
  const source = fs.readFileSync(path.join(root, file), "utf8");
  return import(`data:text/javascript,${encodeURIComponent(source)}`);
}

function loadSlug() {
  const source = fs
    .readFileSync(path.join(root, "src/lib/categorySlug.js"), "utf8")
    .replace(/^import\s+\{[^}]+\}\s+from\s+["'][^"']+["'];\r?\n/, "")
    .replace(/\nfunction nodeName[\s\S]*$/, "\n");
  return import(`data:text/javascript,${encodeURIComponent(source)}`);
}

function moneyFromKopecks(value) {
  if (value == null || value === "") return { amount: null, empty: true };
  if (typeof value === "number" && Number.isInteger(value) && value >= 0) {
    return { amount: value, empty: false };
  }
  return { amount: null, empty: false, error: true };
}

function moneyFromHryvnia(value) {
  if (value == null || value === "") return { amount: null, empty: true };
  const raw = String(value).trim().replace(/\s/g, "").replace("₴", "").replace(",", ".");
  if (!/^\d+(\.\d{1,2})?$/.test(raw)) return { amount: null, empty: false, error: true };
  const [whole, fraction = ""] = raw.split(".");
  return {
    amount: Number(whole) * 100 + Number((fraction + "00").slice(0, 2)),
    empty: false,
  };
}

function formatMoney(amount) {
  if (amount == null) return "null";
  const whole = Math.floor(amount / 100);
  const fraction = amount % 100;
  const grouped = whole.toLocaleString("uk-UA").replace(/\u00A0/g, " ");
  if (!fraction) return `${grouped} грн (${amount} коп.)`;
  return `${grouped},${String(fraction).padStart(2, "0")} грн (${amount} коп.)`;
}

function clip(value, limit = 140) {
  const clean = text(value).replace(/\s+/g, " ");
  if (clean.length <= limit) return clean || "—";
  return `${clean.slice(0, limit)}…`;
}

function categoryNames(row) {
  if (Array.isArray(row.category_path)) {
    return row.category_path.map((item) => text(item)).filter(Boolean);
  }
  const rawPath = text(row.category_path || row.path);
  if (rawPath) return rawPath.split("/").map((item) => text(item)).filter(Boolean);
  return [text(row.category), text(row.subcategory), text(row.part || row.group)].filter(Boolean);
}

function imageRows(row) {
  const source = Array.isArray(row.product_images)
    ? row.product_images
    : Array.isArray(row.images)
      ? row.images
      : [];
  const images = source
    .map((item, index) => {
      if (typeof item === "string") {
        return { filename: text(item), sort_order: index, alt: "" };
      }
      return {
        filename: text(item?.filename || item?.image),
        sort_order: Number.isInteger(item?.sort_order) ? item.sort_order : index,
        alt: text(item?.alt || item?.caption),
      };
    })
    .filter((item) => item.filename);
  const main = text(row.image);
  if (main && !images.some((item) => item.filename === main)) {
    images.unshift({ filename: main, sort_order: 0, alt: "" });
  }
  return images.sort((left, right) => left.sort_order - right.sort_order);
}

function specRows(row) {
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

function compatibilityRows(row) {
  const source = row.product_compatibility || row.compatibility || row.compatible || row.models;
  if (!Array.isArray(source)) return [];
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

function flattenCategories(nodes, categorySlug, parentPath = "", list = []) {
  nodes.forEach((entry) => {
    const name = typeof entry === "string" ? entry : entry?.name || "";
    if (!name) return;
    const slug = categorySlug(name);
    const nodePath = parentPath ? `${parentPath}/${slug}` : slug;
    const children = typeof entry === "string" || !Array.isArray(entry.children) ? [] : entry.children;
    list.push({ name, slug, path: nodePath, parentPath });
    flattenCategories(children, categorySlug, nodePath, list);
  });
  return list;
}

function resolveInput() {
  const fileFlag = process.argv.indexOf("--file");
  if (fileFlag >= 0) return process.argv[fileFlag + 1] ? [process.argv[fileFlag + 1]] : [];
  const dir = path.join(root, "import-data");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".json"))
    .sort()
    .map((name) => path.join(dir, name));
}

function readProducts(files) {
  const products = [];
  for (const file of files) {
    const payload = JSON.parse(fs.readFileSync(file, "utf8"));
    const rows = Array.isArray(payload) ? payload : payload?.products;
    if (!Array.isArray(rows)) {
      throw new Error(`У файлі ${file} немає масиву товарів`);
    }
    rows.forEach((row) => products.push({ file, row }));
  }
  return products;
}

function limitOf() {
  const flag = process.argv.indexOf("--limit");
  if (flag < 0) return Infinity;
  const value = Number(process.argv[flag + 1]);
  if (!Number.isInteger(value) || value < 1) {
    throw new Error("Параметр --limit має бути цілим числом від 1");
  }
  return value;
}

const { categorySlug } = await loadSlug();
const { categories } = await loadModule("src/data/categories.js");
const menu = flattenCategories(categories, categorySlug);
const planned = new Map();

function placeCategory(names) {
  let parentPath = "";
  const chain = [];
  for (const name of names) {
    const key = `${parentPath}\u0000${name.toLowerCase()}`;
    const existing = menu.find((item) => item.parentPath === parentPath && sameName(item.name, name));
    if (existing) {
      chain.push({ action: "exists", ...existing });
      parentPath = existing.path;
      continue;
    }
    if (!planned.has(key)) {
      const slug = categorySlug(name);
      const nodePath = parentPath ? `${parentPath}/${slug}` : slug;
      planned.set(key, {
        action: "create",
        name,
        slug,
        path: nodePath,
        parentPath: parentPath || null,
      });
    }
    const created = planned.get(key);
    chain.push(created);
    parentPath = created.path;
  }
  return chain;
}

const files = resolveInput();
if (!files.length) {
  console.error("JSON не знайдено. Покладіть файл у import-data або передайте --file.");
  process.exit(1);
}

let products;
try {
  products = readProducts(files);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}

const limit = limitOf();
const selected = products.slice(0, limit);
const imageDir = path.join(root, "public/assets/images");
const seenSku = new Set();
const report = [];

for (const item of selected) {
  const source = item.row || {};
  const errors = [];
  const warnings = [];
  const sku = text(source.sku);
  const title = text(source.title);
  if (!sku) errors.push("Немає артикула");
  if (!title) errors.push("Немає назви");
  if (sku && seenSku.has(sku.toLowerCase())) errors.push("Артикул повторюється у файлі");
  if (sku) seenSku.add(sku.toLowerCase());

  const price = Object.prototype.hasOwnProperty.call(source, "price_amount")
    ? moneyFromKopecks(source.price_amount)
    : moneyFromHryvnia(source.price);
  const saleSource = Object.prototype.hasOwnProperty.call(source, "sale_price_amount")
    ? source.sale_price_amount
    : source.sale_price;
  const sale = Object.prototype.hasOwnProperty.call(source, "sale_price_amount")
    ? moneyFromKopecks(saleSource)
    : moneyFromHryvnia(saleSource);
  if (price.error || price.empty) errors.push("Некоректна ціна");
  if (sale.error) errors.push("Некоректна акційна ціна");

  const names = categoryNames(source);
  const chain = names.length ? placeCategory(names) : [];
  if (!chain.length) errors.push("Вкажіть категорію");

  const stock = text(source.stock_status || source.stock || "in");
  const status = text(source.status || "active");
  if (!["in", "out", "order"].includes(stock)) errors.push("Наявність має бути in, out або order");
  if (!["active", "inactive"].includes(status)) errors.push("Статус має бути active або inactive");

  let stockQty = 0;
  if (source.stock_qty == null || source.stock_qty === "") {
    warnings.push("Залишок порожній, у products.stock_qty було б 0");
  } else if (!Number.isInteger(source.stock_qty) || source.stock_qty < 0) {
    errors.push("Залишок має бути цілим числом від 0");
  } else {
    stockQty = source.stock_qty;
  }

  const images = imageRows(source);
  images.forEach((image) => {
    if (!fs.existsSync(path.join(imageDir, image.filename))) {
      warnings.push(`Фото немає локально: ${image.filename}`);
    }
  });
  const compatibility = compatibilityRows(source);
  const specs = specRows(source);
  if (source.source != null) warnings.push("Поля source у схемі немає, його не записували б");

  report.push({
    file: item.file,
    sku,
    title,
    errors,
    warnings,
    chain,
    product: {
      sku,
      slug: text(source.slug) || categorySlug(title),
      title,
      category_path: chain.at(-1)?.path || "",
      brand: text(source.brand),
      manufacturer: text(source.manufacturer),
      price_amount: price.amount,
      sale_price_amount: sale.empty ? null : sale.amount,
      stock_status: stock,
      stock_qty: stockQty,
      lead_time: text(source.lead_time),
      description: text(source.description),
      warranty: text(source.warranty),
      specs,
      seo_title: text(source.seo_title),
      seo_description: text(source.seo_description),
      image: images[0]?.filename || text(source.image),
      status,
    },
    images,
    compatibility,
  });
}

const created = [...planned.values()];
const invalid = report.filter((row) => row.errors.length).length;

console.log("Режим: dry-run");
console.log("База: не підключався, жоден рядок не записано");
console.log(`Файли: ${files.join(", ")}`);
console.log(`Товарів у файлі: ${products.length}`);
console.log(`У звіті: ${report.length}`);
console.log("");
console.log(`Категорії, які були б створені (${created.length}):`);
if (!created.length) {
  console.log("  немає, усі назви вже є в меню");
}
created.forEach((category) => {
  console.log(`  categories`);
  console.log(`    name: ${category.name}`);
  console.log(`    slug: ${category.slug}`);
  console.log(`    path: ${category.path}`);
  console.log(`    parent: ${category.parentPath || "корінь"}`);
});
console.log("");
console.log("Назви звірено з меню в src/data/categories.js. Меню російською, тож українська назва вважається новою категорією.");
console.log("");

report.forEach((row, index) => {
  console.log(`Товар ${index + 1}: ${row.sku || "без артикула"}`);
  console.log(`  файл: ${row.file}`);
  console.log(`  дія: ${row.errors.length ? "пропущено" : "було б створено"}`);
  if (row.errors.length) console.log(`  помилки: ${row.errors.join("; ")}`);
  if (row.warnings.length) console.log(`  зауваження: ${row.warnings.join("; ")}`);
  console.log("  категорія:");
  if (!row.chain.length) console.log("    немає");
  row.chain.forEach((category) => {
    const label = category.action === "exists" ? "вже є" : "нова";
    console.log(`    ${label}: ${category.name} → ${category.path}`);
  });
  if (row.errors.length) {
    console.log("");
    return;
  }
  const product = row.product;
  console.log("  products");
  console.log(`    sku: ${product.sku}`);
  console.log(`    slug: ${product.slug}`);
  console.log(`    title: ${product.title}`);
  console.log(`    category_id: категорія ${product.category_path}`);
  console.log(`    brand: ${product.brand || "—"}`);
  console.log(`    manufacturer: ${product.manufacturer || "—"}`);
  console.log(`    price_amount: ${formatMoney(product.price_amount)}`);
  console.log(`    sale_price_amount: ${formatMoney(product.sale_price_amount)}`);
  console.log(`    stock_status: ${product.stock_status}`);
  console.log(`    stock_qty: ${product.stock_qty}`);
  console.log(`    lead_time: ${product.lead_time || "—"}`);
  console.log(`    warranty: ${product.warranty || "—"}`);
  console.log(`    status: ${product.status}`);
  console.log(`    image: ${product.image || "—"}`);
  console.log(`    description: ${clip(product.description)}`);
  console.log(`    specs: ${product.specs.length} характеристик`);
  product.specs.forEach((spec) => console.log(`      ${spec.name}: ${spec.value}`));
  console.log(`    seo_title: ${clip(product.seo_title)}`);
  console.log(`    seo_description: ${clip(product.seo_description)}`);
  console.log(`  product_images: ${row.images.length}`);
  row.images.forEach((image) => {
    console.log(`    ${image.sort_order}. ${image.filename}${image.alt ? ` (${image.alt})` : ""}`);
  });
  console.log(`  product_compatibility: ${row.compatibility.length}`);
  row.compatibility.forEach((item) => console.log(`    ${item.brand || "—"} | ${item.model}`));
  console.log("");
});

console.log(
  `Підсумок: товарів ${report.length}, готових ${report.length - invalid}, з помилками ${invalid}, нових категорій ${created.length}. Запис не виконувався.`
);
