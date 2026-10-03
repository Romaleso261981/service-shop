import { createHmac, timingSafeEqual } from "crypto";

function secret() {
  return process.env.AUTH_SECRET || "service-shop-users";
}

function sign(value) {
  return createHmac("sha256", secret()).update(value).digest("hex");
}

export function sessionCookie(userId) {
  const payload = Buffer.from(JSON.stringify({ id: userId })).toString("base64url");
  return {
    name: "user_session",
    value: `${payload}.${sign(payload)}`,
    options: {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    },
  };
}

export function userIdFromRequest(request) {
  const raw = request.cookies.get("user_session")?.value || "";
  const [payload, signature] = raw.split(".");
  if (!payload || !signature) return null;
  const expected = sign(payload);
  const left = Buffer.from(signature);
  const right = Buffer.from(expected);
  if (left.length !== right.length || !timingSafeEqual(left, right)) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return data.id || null;
  } catch {
    return null;
  }
}
