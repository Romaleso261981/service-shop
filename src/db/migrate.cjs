const fs = require("fs");
const path = require("path");
const postgres = require("postgres");

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error("DATABASE_URL is not set");
  process.exit(1);
}

function statements(text) {
  return text
    .split(/;\s*(?:\n|$)/)
    .map((part) => part.trim())
    .filter((part) => part && !part.startsWith("--"));
}

async function main() {
  const sql = postgres(connectionString, { max: 1 });
  const file = fs.readFileSync(path.join(__dirname, "schema.sql"), "utf8");
  try {
    for (const statement of statements(file)) {
      await sql.unsafe(statement);
    }
  } finally {
    await sql.end({ timeout: 2 });
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
