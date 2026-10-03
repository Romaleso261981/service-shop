import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone").notNull().default(""),
  password: text("password").notNull(),
  role: text("role").notNull().default("retail"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
