import { NextResponse } from "next/server";
import { categoryTree } from "@/lib/store";

export const dynamic = "force-dynamic";

export async function GET() {
  const categories = await categoryTree();
  return NextResponse.json({ categories });
}
