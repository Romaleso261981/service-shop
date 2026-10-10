import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { deleteCategory, updateCategory } from "@/lib/store";

export const dynamic = "force-dynamic";

export async function PUT(request, { params }) {
  if (!(await isAdminRequest(request))) {
    return NextResponse.json({ error: "Потрібен вхід" }, { status: 401 });
  }
  const body = await request.json().catch(() => ({}));
  const result = await updateCategory(params.id, body.name);
  if (result.error) return NextResponse.json({ error: result.error }, { status: 400 });
  return NextResponse.json(result);
}

export async function DELETE(request, { params }) {
  if (!(await isAdminRequest(request))) {
    return NextResponse.json({ error: "Потрібен вхід" }, { status: 401 });
  }
  const result = await deleteCategory(params.id);
  if (result.error) return NextResponse.json({ error: result.error }, { status: 400 });
  return NextResponse.json(result);
}
