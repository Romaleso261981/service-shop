import { NextResponse } from "next/server";
import { findUserByEmail, passwordMatches, publicUser } from "@/lib/users";
import { sessionCookie } from "@/lib/userSession";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const role = body.role === "wholesale" ? "wholesale" : "retail";
  const user = findUserByEmail(body.email);
  if (!user || !passwordMatches(String(body.password || ""), user.password)) {
    return NextResponse.json({ error: "invalid" }, { status: 401 });
  }
  if (user.role !== role) {
    return NextResponse.json({ error: "role" }, { status: 403 });
  }
  const cookie = sessionCookie(user.id);
  const response = NextResponse.json({ user: publicUser(user) });
  response.cookies.set(cookie.name, cookie.value, cookie.options);
  return response;
}
