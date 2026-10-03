import { randomBytes } from "crypto";
import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { formatPrice, listImages, readProducts, writeProducts } from "@/lib/catalog";
import { productTitle } from "@/i18n/productTitles";

function translated(product) {
  const english = product.title_en || productTitle(product.title, "en");
  const russian = product.title_ru || productTitle(product.title, "rus");
  return {
    ...product,
    title_en: english && english !== product.title ? english : product.title_en || "",
    title_ru: russian && russian !== product.title ? russian : product.title_ru || "",
  };
}

function cleanProduct(body, id) {
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
  const product = {
    id,
    image,
    brand,
    review,
    title,
    offer_price: offer,
    price: price || offer,
    campaingn_product: campaign,
    cam_product_available: campaign ? Number(body.cam_product_available) || 0 : null,
    cam_product_sale: campaign ? Number(body.cam_product_sale) || 0 : null,
    product_type: body.product_type === "popular" || body.product_type === "new"
      ? body.product_type
      : null,
  };
  const titleEn = String(body.title_en || "").trim();
  const titleRu = String(body.title_ru || "").trim();
  if (titleEn) product.title_en = titleEn;
  if (titleRu) product.title_ru = titleRu;
  return { product };
}

export async function GET(request) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Потрібен вхід" }, { status: 401 });
  }
  return NextResponse.json({
    products: readProducts().map(translated),
    images: listImages(),
  });
}

export async function POST(request) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Потрібен вхід" }, { status: 401 });
  }
  const body = await request.json().catch(() => ({}));
  const result = cleanProduct(body, randomBytes(12).toString("hex"));
  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }
  const products = readProducts();
  products.unshift(result.product);
  writeProducts(products);
  return NextResponse.json({ product: result.product });
}
