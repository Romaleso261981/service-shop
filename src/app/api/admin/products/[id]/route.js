import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { readProducts, writeProducts } from "@/lib/catalog";
import { normalizeProduct } from "@/lib/productRecord";

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
  const result = normalizeProduct(body, params.id);
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
