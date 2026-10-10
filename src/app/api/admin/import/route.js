import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { parseImportPayload, planImport, runImport } from "@/lib/importCatalog";

export const dynamic = "force-dynamic";

async function payloadFrom(request) {
  const type = request.headers.get("content-type") || "";
  if (type.includes("multipart/form-data")) {
    const form = await request.formData();
    const file = form.get("file");
    if (!file || typeof file === "string") return { error: "Оберіть JSON-файл" };
    if (file.size > 30 * 1024 * 1024) return { error: "Файл більший за 30 МБ" };
    const mode = String(form.get("mode") || "preview");
    try {
      return { mode, payload: JSON.parse(await file.text()) };
    } catch {
      return { error: "Файл не є коректним JSON" };
    }
  }
  const body = await request.json().catch(() => null);
  if (!body) return { error: "Файл не є коректним JSON" };
  return { mode: body.mode || "preview", payload: body };
}

export async function POST(request) {
  if (!(await isAdminRequest(request))) {
    return NextResponse.json({ error: "Потрібен вхід" }, { status: 401 });
  }
  const incoming = await payloadFrom(request);
  if (incoming.error) return NextResponse.json({ error: incoming.error }, { status: 400 });
  const parsed = parseImportPayload(incoming.payload);
  if (parsed.error) return NextResponse.json({ error: parsed.error }, { status: 400 });
  if (incoming.mode === "apply") {
    const result = await runImport(parsed.products);
    return NextResponse.json(result);
  }
  const plan = await planImport(parsed.products);
  return NextResponse.json({
    summary: plan.summary,
    rows: plan.rows
      .filter((row) => row.errors.length || row.warnings.length || row.action !== "invalid")
      .slice(0, 80)
      .map(({ line, sku, title, action, errors, warnings }) => ({
        line,
        sku,
        title,
        action,
        errors,
        warnings,
      })),
  });
}
