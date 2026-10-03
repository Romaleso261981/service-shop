import { randomBytes } from "crypto";
import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { listImages, readProducts, writeProducts } from "@/lib/catalog";
import { normalizeProduct } from "@/lib/productRecord";
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

export async function GET(request) {
  if (!(await isAdminRequest(request))) {
    return NextResponse.json({ error: "Потрібен вхід" }, { status: 401 });
  }
  return NextResponse.json({
    products: readProducts().map(translated),
    images: listImages(),
  });
}

export async function POST(request) {
  if (!(await isAdminRequest(request))) {
    return NextResponse.json({ error: "Потрібен вхід" }, { status: 401 });
  }
  const body = await request.json().catch(() => ({}));
  const result = normalizeProduct(body, randomBytes(12).toString("hex"));
  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }
  const products = readProducts();
  products.unshift(result.product);
  writeProducts(products);
  return NextResponse.json({ product: result.product });
}
