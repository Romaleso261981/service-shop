import { formatPrice } from "./catalog";

const STOCK = ["in", "out", "order"];

export function normalizeProduct(body, id) {
  const title = String(body.title || "").trim();
  const offer = formatPrice(body.offer_price);
  const price = formatPrice(body.price);
  const image = String(body.image || "").trim();
  const brand = String(body.brand || "").trim();
  if (!title || !offer || !image || !brand) {
    return { error: "Заповніть назву, бренд, фото і ціну продажу" };
  }

  const review = Math.min(5, Math.max(0, Number(body.review) || 0));
  const campaign = Boolean(body.campaingn_product);
  const specs = Array.isArray(body.specs)
    ? body.specs
        .map((row) => ({
          name: String(row?.name || "").trim(),
          value: String(row?.value || "").trim(),
        }))
        .filter((row) => row.name && row.value)
    : [];

  const product = {
    id,
    image,
    brand,
    manufacturer: String(body.manufacturer || "").trim(),
    sku: String(body.sku || "").trim(),
    code: String(body.code || "").trim(),
    stock: STOCK.includes(body.stock) ? body.stock : "in",
    warranty: String(body.warranty || "").trim(),
    description: String(body.description || "").trim(),
    compatible: String(body.compatible || "").trim(),
    specs,
    review,
    title,
    offer_price: offer,
    price: price || offer,
    campaingn_product: campaign,
    cam_product_available: campaign ? Number(body.cam_product_available) || 0 : null,
    cam_product_sale: campaign ? Number(body.cam_product_sale) || 0 : null,
    product_type:
      body.product_type === "popular" || body.product_type === "new"
        ? body.product_type
        : null,
  };

  const titleEn = String(body.title_en || "").trim();
  const titleRu = String(body.title_ru || "").trim();
  if (titleEn) product.title_en = titleEn;
  if (titleRu) product.title_ru = titleRu;
  return { product };
}
