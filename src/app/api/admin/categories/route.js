import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { categoryTree, createCategory } from "@/lib/store";

export const dynamic = "force-dynamic";

export async function GET(request) {
  if (!(await isAdminRequest(request))) {
    return NextResponse.json({ error: "Потрібен вхід" }, { status: 401 });
  }
  return NextResponse.json({ categories: await categoryTree() });
}

export async function POST(request) {
  if (!(await isAdminRequest(request))) {
    return NextResponse.json({ error: "Потрібен вхід" }, { status: 401 });
  }
  const body = await request.json().catch(() => ({}));
  const result = await createCategory({ name: body.name, parentId: body.parent_id });
  if (result.error) return NextResponse.json({ error: result.error }, { status: 400 });
  return NextResponse.json(result);
}
