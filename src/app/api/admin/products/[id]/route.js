import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { formatPrice, readProducts, writeProducts } from "@/lib/catalog";

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

export async function PUT(request, { params }) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Потрібен вхід" }, { status: 401 });
  }
  const body = await request.json().catch(() => ({}));
  const products = readProducts();
  const index = products.findIndex((item) => item.id === params.id);
  if (index === -1) {
    return NextResponse.json({ error: "Товар не знайдено" }, { status: 404 });
  }
  const result = cleanProduct(body, params.id);
  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }
  products[index] = result.product;
  writeProducts(products);
  return NextResponse.json({ product: result.product });
}

export async function DELETE(request, { params }) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Потрібен вхід" }, { status: 401 });
  }
  const products = readProducts();
  const next = products.filter((item) => item.id !== params.id);
  if (next.length === products.length) {
    return NextResponse.json({ error: "Товар не знайдено" }, { status: 404 });
  }
  writeProducts(next);
  return NextResponse.json({ ok: true });
}
