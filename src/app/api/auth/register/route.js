import { NextResponse } from "next/server";
import { createUser, publicUser } from "@/lib/users";
import { sessionCookie } from "@/lib/userSession";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const password = String(body.password || "");
  if (!name || !email || password.length < 6) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
  const result = createUser({
    name,
    email,
    phone: body.phone,
    password,
    role: body.role,
  });
  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: 409 });
  }
  const cookie = sessionCookie(result.user.id);
  const response = NextResponse.json({ user: publicUser(result.user) });
  response.cookies.set(cookie.name, cookie.value, cookie.options);
  return response;
}
