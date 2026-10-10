import { parseMoney } from "./money";

export function productInput(body) {
  const price = parseMoney(body.price ?? body.price_amount);
  if (price == null) return { error: "Вкажіть коректну ціну" };
  const saleRaw = body.sale_price ?? body.sale_price_amount;
  let sale = null;
  if (saleRaw != null && saleRaw !== "") {
    sale = parseMoney(saleRaw);
    if (sale == null) return { error: "Вкажіть коректну акційну ціну" };
  }
  const compatibility = Array.isArray(body.compatibility)
    ? body.compatibility
    : String(body.compatible || "")
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => {
          const [brand, model] = line.split("|").map((part) => part.trim());
          return model ? { brand, model } : { brand: "", model: line };
        });
  return {
    input: {
      title: body.title,
      sku: body.sku,
      slug: body.slug,
      category_id: body.category_id || null,
      brand: body.brand,
      manufacturer: body.manufacturer,
      price_amount: price,
      sale_price_amount: sale,
      stock_status: body.stock_status || body.stock,
      stock_qty: body.stock_qty,
      lead_time: body.lead_time,
      description: body.description,
      warranty: body.warranty,
      specs: body.specs,
      compatibility,
      seo_title: body.seo_title,
      seo_description: body.seo_description,
      status: body.status,
      images: body.images,
      image: body.image,
    },
  };
}
