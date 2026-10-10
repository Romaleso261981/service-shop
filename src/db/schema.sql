CREATE TABLE IF NOT EXISTS users (
  id text PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  phone text NOT NULL DEFAULT '',
  password text NOT NULL,
  role text NOT NULL DEFAULT 'retail',
  status text NOT NULL DEFAULT 'customer',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS schema_meta (
  key text PRIMARY KEY,
  value text NOT NULL
);

CREATE TABLE IF NOT EXISTS categories (
  id text PRIMARY KEY,
  parent_id text REFERENCES categories (id) ON DELETE RESTRICT,
  name text NOT NULL,
  slug text NOT NULL,
  path text NOT NULL UNIQUE,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS categories_parent_idx ON categories (parent_id);

CREATE TABLE IF NOT EXISTS products (
  id text PRIMARY KEY,
  sku text NOT NULL,
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  category_id text REFERENCES categories (id) ON DELETE RESTRICT,
  brand text NOT NULL DEFAULT '',
  manufacturer text NOT NULL DEFAULT '',
  price_amount integer NOT NULL,
  sale_price_amount integer,
  stock_status text NOT NULL DEFAULT 'in',
  stock_qty integer NOT NULL DEFAULT 0,
  lead_time text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  warranty text NOT NULL DEFAULT '',
  specs jsonb NOT NULL DEFAULT '[]'::jsonb,
  seo_title text NOT NULL DEFAULT '',
  seo_description text NOT NULL DEFAULT '',
  image text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'active',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT products_stock_status_check CHECK (stock_status IN ('in', 'out', 'order')),
  CONSTRAINT products_status_check CHECK (status IN ('active', 'inactive')),
  CONSTRAINT products_price_check CHECK (price_amount >= 0),
  CONSTRAINT products_sale_check CHECK (sale_price_amount IS NULL OR sale_price_amount >= 0),
  CONSTRAINT products_qty_check CHECK (stock_qty >= 0)
);

CREATE UNIQUE INDEX IF NOT EXISTS products_sku_ci_idx ON products (lower(sku));
CREATE INDEX IF NOT EXISTS products_category_idx ON products (category_id);
CREATE INDEX IF NOT EXISTS products_status_idx ON products (status);
CREATE INDEX IF NOT EXISTS products_brand_idx ON products (brand);

CREATE TABLE IF NOT EXISTS product_images (
  id text PRIMARY KEY,
  product_id text NOT NULL REFERENCES products (id) ON DELETE CASCADE,
  filename text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  alt text NOT NULL DEFAULT ''
);

CREATE INDEX IF NOT EXISTS product_images_product_idx ON product_images (product_id);

CREATE TABLE IF NOT EXISTS product_compatibility (
  id text PRIMARY KEY,
  product_id text NOT NULL REFERENCES products (id) ON DELETE CASCADE,
  brand text NOT NULL DEFAULT '',
  model text NOT NULL
);

CREATE INDEX IF NOT EXISTS product_compatibility_product_idx ON product_compatibility (product_id);
CREATE INDEX IF NOT EXISTS product_compatibility_model_idx ON product_compatibility (lower(model));
