import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { exportProducts } from "@/lib/store";

export const dynamic = "force-dynamic";

export async function GET(request) {
  if (!(await isAdminRequest(request))) {
    return NextResponse.json({ error: "Потрібен вхід" }, { status: 401 });
  }
  const products = await exportProducts();
  return new NextResponse(JSON.stringify(products, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Disposition": 'attachment; filename="products.json"',
    },
  });
}
