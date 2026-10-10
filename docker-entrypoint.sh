#!/bin/sh
set -eu

mkdir -p /app/public/assets/images /data
cp -an /seed/images/. /app/public/assets/images/
if [ ! -s /data/products.json ]; then
  cp /seed/data/products.json /data/products.json
fi

node <<'JS'
const postgres = require("postgres");
const sql = postgres(process.env.DATABASE_URL, { max: 1, connect_timeout: 5 });
(async () => {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      await sql`select 1`;
      await sql.end({ timeout: 1 });
      process.exit(0);
    } catch (error) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
  console.error("Database is not ready");
  process.exit(1);
})();
JS

node src/db/migrate.cjs
exec npx next start -H 0.0.0.0 -p 3000
