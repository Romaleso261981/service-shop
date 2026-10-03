import { randomBytes, scryptSync, timingSafeEqual } from "crypto";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/data/users.json");

function readUsers() {
  if (!fs.existsSync(filePath)) return [];
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return Array.isArray(data.users) ? data.users : [];
}

function writeUsers(users) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  const temporary = `${filePath}.tmp`;
  fs.writeFileSync(temporary, `${JSON.stringify({ users }, null, 2)}\n`);
  fs.renameSync(temporary, filePath);
}

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

export function findUserByEmail(email) {
  const needle = String(email || "").trim().toLowerCase();
  return readUsers().find((user) => user.email === needle) || null;
}

export function findUserById(id) {
  return readUsers().find((user) => user.id === id) || null;
}

export function createUser({ name, email, phone, password, role }) {
  const users = readUsers();
  const normalized = String(email || "").trim().toLowerCase();
  if (users.some((user) => user.email === normalized)) {
    return { error: "exists" };
  }
  const user = {
    id: randomBytes(12).toString("hex"),
    name: String(name || "").trim(),
    email: normalized,
    phone: String(phone || "").trim(),
    password: hashPassword(password),
    role: role === "wholesale" ? "wholesale" : "retail",
  };
  users.push(user);
  writeUsers(users);
  return { user };
}
