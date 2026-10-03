import { createHmac, timingSafeEqual } from "crypto";

function password() {
  return process.env.ADMIN_PASSWORD || "service-shop";
}

function sessionToken() {
  const secret = process.env.ADMIN_SECRET || "service-shop-secret";
  return createHmac("sha256", secret).update(`ok:${password()}`).digest("hex");
}

function same(left, right) {
  const a = Buffer.from(String(left));
  const b = Buffer.from(String(right));
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function passwordMatches(input) {
  return same(input, password());
}

export function isAdminRequest(request) {
  return same(request.cookies.get("admin_session")?.value || "", sessionToken());
}

export function adminCookie() {
  return {
    name: "admin_session",
    value: sessionToken(),
    options: {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 14,
    },
  };
}
