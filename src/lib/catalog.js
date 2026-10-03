import fs from "fs";
import path from "path";
import sharp from "sharp";
import { IMAGE_SIZES, isVariantName, variantName } from "./imageSizes.js";

const dataPath = process.env.CATALOG_FILE || path.join(process.cwd(), "src/data/products.json");
const imageDir = process.env.IMAGE_DIR || path.join(process.cwd(), "public/assets/images");

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
    .filter((name) => /\.(jpe?g|png|webp|gif)$/i.test(name) && !isVariantName(name))
    .sort((a, b) => {
      const rank = (name) => (name.startsWith("part-") ? 0 : 1);
      return rank(a) - rank(b) || a.localeCompare(b);
    });
}

async function writeVariants(filename, input) {
  await Promise.all(
    IMAGE_SIZES.map(({ width, height }) =>
      sharp(input)
        .rotate()
        .resize(width, height, {
          fit: "contain",
          background: { r: 255, g: 255, b: 255, alpha: 1 },
        })
        .webp({ quality: 82 })
        .toFile(path.join(imageDir, variantName(filename, width, height)))
    )
  );
}

export async function saveImage(filename, bytes) {
  const safe = filename.replace(/[^a-zA-Z0-9._-]/g, "");
  const stored = `${Date.now()}-${safe || "photo.jpg"}`;
  fs.writeFileSync(path.join(imageDir, stored), bytes);
  await writeVariants(stored, bytes);
  return stored;
}

export async function ensureProductVariants(filenames) {
  const unique = [...new Set(filenames.filter((name) => name && !isVariantName(name)))];
  for (const name of unique) {
    const source = path.join(imageDir, path.basename(name));
    if (!fs.existsSync(source)) continue;
    const missing = IMAGE_SIZES.some(
      ({ width, height }) => !fs.existsSync(path.join(imageDir, variantName(name, width, height)))
    );
    if (missing) await writeVariants(name, source);
  }
}

export function formatPrice(value) {
  const digits = String(value ?? "").replace(/[^\d]/g, "");
  if (!digits) return "";
  const grouped = Number(digits)
    .toLocaleString("uk-UA")
    .replace(/\u00A0/g, " ");
  return `₴${grouped}`;
}
