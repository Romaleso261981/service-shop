import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { saveImage } from "@/lib/catalog";

export async function POST(request) {
  if (!(await isAdminRequest(request))) {
    return NextResponse.json({ error: "Потрібен вхід" }, { status: 401 });
  }
  const form = await request.formData();
  const file = form.get("file");
  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "Оберіть файл" }, { status: 400 });
  }
  if (!/^image\/(jpeg|png|webp|gif)$/.test(file.type)) {
    return NextResponse.json({ error: "Потрібне фото jpg, png або webp" }, { status: 400 });
  }
  if (file.size > 5 * 1024 * 1024) {
    return NextResponse.json({ error: "Фото більше за 5 МБ" }, { status: 400 });
  }
  const bytes = Buffer.from(await file.arrayBuffer());
  const image = saveImage(file.name || "photo.jpg", bytes);
  return NextResponse.json({ image });
}
