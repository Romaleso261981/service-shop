import { randomBytes, scryptSync, timingSafeEqual } from "crypto";
import { eq } from "drizzle-orm";
import { db } from "../db";
import { users } from "../db/schema";

export function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 32).toString("hex");
  return `${salt}:${hash}`;
}

export function passwordMatches(password, stored) {
  const [salt, hash] = String(stored || "").split(":");
  if (!salt || !hash) return false;
  const next = scryptSync(password, salt, 32);
  const current = Buffer.from(hash, "hex");
  if (next.length !== current.length) return false;
  return timingSafeEqual(next, current);
}

export function publicUser(user) {
  if (!user) return null;
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone || "",
    role: user.role,
  };
}

export async function findUserByEmail(email) {
  const needle = String(email || "").trim().toLowerCase();
  if (!needle) return null;
  const rows = await db.select().from(users).where(eq(users.email, needle)).limit(1);
  return rows[0] || null;
}

export async function findUserById(id) {
  if (!id) return null;
  const rows = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return rows[0] || null;
}

export async function createUser({ name, email, phone, password, role }) {
  const normalized = String(email || "").trim().toLowerCase();
  const existing = await findUserByEmail(normalized);
  if (existing) return { error: "exists" };

  const user = {
    id: randomBytes(12).toString("hex"),
    name: String(name || "").trim(),
    email: normalized,
    phone: String(phone || "").trim(),
    password: hashPassword(password),
    role: role === "wholesale" ? "wholesale" : "retail",
  };

  try {
    await db.insert(users).values(user);
  } catch (error) {
    const code = error?.code || error?.cause?.code;
    if (code === "23505") return { error: "exists" };
    throw error;
  }

  return { user };
}
