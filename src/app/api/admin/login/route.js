import { NextResponse } from "next/server";
import { adminCookie, passwordMatches } from "@/lib/adminAuth";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  if (!passwordMatches(body.password || "")) {
    return NextResponse.json({ error: "Невірний пароль" }, { status: 401 });
  }
  const cookie = adminCookie();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(cookie.name, cookie.value, cookie.options);
  return response;
}
