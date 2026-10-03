import fs from "fs";
import path from "path";

const dataPath = path.join(process.cwd(), "src/data/products.json");
const imageDir = path.join(process.cwd(), "public/assets/images");

export function readProducts() {
  const raw = fs.readFileSync(dataPath, "utf8");
  const data = JSON.parse(raw);
  return Array.isArray(data.products) ? data.products : [];
}

export function writeProducts(products) {
  const temporary = `${dataPath}.tmp`;
  fs.writeFileSync(temporary, `${JSON.stringify({ products }, null, 2)}\n`);
  fs.renameSync(temporary, dataPath);
}

export function listImages() {
  return fs
    .readdirSync(imageDir)
    .filter((name) => /\.(jpe?g|png|webp|gif)$/i.test(name))
    .sort((a, b) => {
      const rank = (name) => (name.startsWith("part-") ? 0 : 1);
      return rank(a) - rank(b) || a.localeCompare(b);
    });
}

export function saveImage(filename, bytes) {
  const safe = filename.replace(/[^a-zA-Z0-9._-]/g, "");
  const stored = `${Date.now()}-${safe || "photo.jpg"}`;
  fs.writeFileSync(path.join(imageDir, stored), bytes);
  return stored;
}

export function formatPrice(value) {
  const digits = String(value ?? "").replace(/[^\d]/g, "");
  if (!digits) return "";
  const grouped = Number(digits)
    .toLocaleString("uk-UA")
    .replace(/\u00A0/g, " ");
  return `₴${grouped}`;
}
