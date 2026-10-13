import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { listImages } from "@/lib/catalog";
import { productInput } from "@/lib/productInput";
import { categoryTree, descendantIds, saveProduct, searchProducts } from "@/lib/store";

export const dynamic = "force-dynamic";

export async function GET(request) {
  if (!(await isAdminRequest(request))) {
    return NextResponse.json({ error: "Потрібен вхід" }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || "";
  const result = await searchProducts({
    q: searchParams.get("q") || "",
    status: "",
    page: searchParams.get("page") || 1,
    limit: 20,
    sort: searchParams.get("sort") || "category",
    uncategorized: category === "none",
    categoryIds: category && category !== "none" ? await descendantIds(category) : null,
  });
  return NextResponse.json({
    products: result.products,
    total: result.total,
    page: result.page,
    limit: result.limit,
    pages: result.pages,
    images: listImages(),
    categories: await categoryTree(),
  });
}

export async function POST(request) {
  if (!(await isAdminRequest(request))) {
    return NextResponse.json({ error: "Потрібен вхід" }, { status: 401 });
  }
  const body = await request.json().catch(() => ({}));
  const parsed = productInput(body);
  if (parsed.error) return NextResponse.json({ error: parsed.error }, { status: 400 });
  const result = await saveProduct(parsed.input);
  if (result.error) return NextResponse.json({ error: result.error }, { status: 400 });
  return NextResponse.json({ product: result.product });
}
