-- Каталог локального магазину. Фото цим файлом не переносяться.
-- На хостингу, у папці сайту:
--   psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f catalog.sql
BEGIN;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-gazovyh-kotlov/predohranitelnye-klapany') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-gazovyh-kotlov/predohranitelnye-klapany';
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-gazovyh-kotlov/teploobmenniki') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-gazovyh-kotlov/teploobmenniki';
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-gazovyh-kotlov/tsirkulyatsionnye-nasosy-i-korpusa') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-gazovyh-kotlov/tsirkulyatsionnye-nasosy-i-korpusa';
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-holodilnikov/kompressory') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-holodilnikov/kompressory';
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-holodilnikov/teny-ottayki') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-holodilnikov/teny-ottayki';
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-holodilnikov/termostaty') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-holodilnikov/termostaty';
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-holodilnikov/uplotnitelnaya-rezina') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-holodilnikov/uplotnitelnaya-rezina';
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-plit-i-duhovok/konforki') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-plit-i-duhovok/konforki';
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-plit-i-duhovok/teny-dlya-duhovok-i-griley') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-plit-i-duhovok/teny-dlya-duhovok-i-griley';
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-plit-i-duhovok/uplotniteli-dveri') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-plit-i-duhovok/uplotniteli-dveri';
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/amortizatory') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/amortizatory';
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/klapany') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/klapany';
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/manzhety-rezina-lyuka') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/manzhety-rezina-lyuka';
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/nasosy-pompy') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/nasosy-pompy';
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/podshipniki') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/podshipniki';
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/remni') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/remni';
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/salniki') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/salniki';
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/smazki-dlya-salnikov-i-podshipnikov') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/smazki-dlya-salnikov-i-podshipnikov';
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/teny') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/teny';
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/termostaty') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/termostaty';
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vodonagrevateley/anody') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-vodonagrevateley/anody';
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/bloki-upravleniya') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/bloki-upravleniya';
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/dvigateli') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/dvigateli';
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/filtry') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/filtry';
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/krylchatki') THEN
    RAISE EXCEPTION 'На хостингу немає категорії %', 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/krylchatki';
  END IF;
END $$;

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  '8185a7cd876b6683598cf424', 'SM-07376', 'blok-keruvannya-mehanichniy-dlya-vityazhki-pyramida-876101-kq35-1-kh50-60-90', 'Блок керування механічний для витяжки Pyramida 876101 КQ35-1 KH50/60/90', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/bloki-upravleniya'),
  'Pyramida', 'Pyramida', 39500, NULL,
  'in', 0, '', 'Блок керування механічний КQ35-1 KH50/60/90 для витяжки Pyramida Pyramida 876101.', '',
  '[{"name":"Бренд","value":"Pyramida"},{"name":"Виробник","value":"Pyramida"}]', 'Блок керування механічний для витяжки Pyramida 876101 КQ35-1 KH50/60/90. Купити Pyramida 876101-1 в Україні в інтернет-магазині Сервіс-Маркет', 'Купити Блок керування механічний для витяжки Pyramida 876101 КQ35-1 KH50/60/90 ✔ ціна 395 грн грн ✔ Артикул: 876101-1 ✔ Код товару в каталозі Блоки керування Pyramida: 07376   ✔ Доставка по Україні. Пункти видачі замовлень: Київ, Одеса, Харків Телефон для замовлення: 0 (800) 752.....',
  'dec1a9b5132bc02774789e65d3aee216_photo_0.webp', 'active', '2026-10-12T17:33:32.633Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'sm000000000000000000001', 'SM-1001', 'zlivniy-nasos-30-vt', 'Зливний насос 30 Вт для пральної машини', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/nasosy-pompy'),
  'Bosch', 'Askoll', 115000, 89000,
  'in', 12, '1–2 дні', 'Насос для зливу води з баку пральної машини. Підходить для заміни помпи з такою самою посадкою і потужністю.', '12 місяців',
  '[{"name":"Потужність","value":"30 Вт"},{"name":"Тип","value":"зливний"}]'::jsonb, 'Зливний насос 30 Вт', 'Насос для пральної машини, 30 Вт.',
  'part-pump.jpg', 'active', '2026-10-11T10:19:22.554Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'sm000000000000000000002', 'SM-1002', 'zlivniy-nasos-40-vt', 'Зливний насос 40 Вт у зборі з равликом', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/nasosy-pompy'),
  'Samsung', 'Askoll', 158000, 124000,
  'in', 7, '1–2 дні', 'Помпа в зборі з корпусом-равликом. Перед замовленням звірте розташування патрубків.', '12 місяців',
  '[{"name":"Потужність","value":"40 Вт"},{"name":"Комплект","value":"насос і равлик"}]'::jsonb, 'Зливний насос 40 Вт', 'Помпа з равликом для пральної машини.',
  'part-pump.jpg', 'active', '2026-10-11T10:19:22.554Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'sm000000000000000000003', 'SM-1003', 'ten-pralnoyi-1900', 'ТЕН пральної машини 1900 Вт', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/teny'),
  'Indesit', 'Thermowatt', 56000, 42000,
  'in', 18, '1–2 дні', 'Нагрівач води з отвором під датчик. Довжину і вигин перевіряйте за старою деталлю.', '12 місяців',
  '[{"name":"Потужність","value":"1900 Вт"},{"name":"Датчик","value":"отвір є"}]'::jsonb, 'ТЕН 1900 Вт', 'ТЕН для пральної машини з отвором під датчик.',
  'part-heater.jpg', 'active', '2026-10-11T10:19:22.554Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'sm000000000000000000004', 'SM-1004', 'ten-pralnoyi-1700', 'ТЕН пральної машини 1700 Вт прямий', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/teny'),
  'Beko', 'Thermowatt', 51000, 39000,
  'in', 9, '1–2 дні', 'Прямий ТЕН для нагріву води в баку. Кріплення під гайку.', '12 місяців',
  '[{"name":"Потужність","value":"1700 Вт"},{"name":"Форма","value":"прямий"}]'::jsonb, 'ТЕН 1700 Вт', 'Прямий ТЕН для пральної машини.',
  'part-heater.jpg', 'active', '2026-10-11T10:19:22.554Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'sm000000000000000000005', 'SM-1005', 'remin-privodu-1195', 'Ремінь приводу барабана 1195 H7', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/remni'),
  'Whirlpool', 'Megadyne', 28000, NULL,
  'in', 24, '1–2 дні', 'Поліклиновий ремінь між двигуном і шківом барабана.', '6 місяців',
  '[{"name":"Профіль","value":"H7"},{"name":"Довжина","value":"1195 мм"}]'::jsonb, 'Ремінь 1195 H7', 'Ремінь приводу барабана пральної машини.',
  'part-belt.jpg', 'active', '2026-10-11T10:19:22.554Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'sm000000000000000000006', 'SM-1006', 'amortyzator-100n', 'Амортизатор бака 100 Н', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/amortizatory'),
  'LG', 'Suspa', 34000, 29000,
  'in', 16, '1–2 дні', 'Гасить коливання бака під час віджиму. Міняють парою.', '12 місяців',
  '[{"name":"Зусилля","value":"100 Н"},{"name":"Кількість","value":"1 шт"}]'::jsonb, 'Амортизатор 100 Н', 'Амортизатор бака пральної машини.',
  'part-shock.jpg', 'active', '2026-10-11T10:19:22.554Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'sm000000000000000000007', 'SM-1007', 'manzhet-lyuka', 'Манжета люка пральної машини', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/manzhety-rezina-lyuka'),
  'Bosch', '', 72000, NULL,
  'in', 6, '2–4 дні', 'Гумова манжета між баком і люком. Перед заміною зніміть хомути і перевірте патрубок зливу.', '12 місяців',
  '[{"name":"Матеріал","value":"гума"},{"name":"Вузол","value":"люк"}]'::jsonb, 'Манжета люка', 'Ущільнення люка пральної машини.',
  'part-gasket.jpg', 'active', '2026-10-11T10:19:22.554Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'sm000000000000000000008', 'SM-1008', 'pidshypnyk-6203', 'Підшипник барабана 6203 ZZ', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/podshipniki'),
  'Samsung', 'SKF', 18000, NULL,
  'in', 40, '1–2 дні', 'Закритий підшипник для опори барабана. Разом із ним зазвичай міняють сальник.', '12 місяців',
  '[{"name":"Номер","value":"6203 ZZ"}]'::jsonb, 'Підшипник 6203 ZZ', 'Підшипник барабана пральної машини.',
  'part-bearing.jpg', 'active', '2026-10-11T10:19:22.554Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'sm000000000000000000009', 'SM-1009', 'klapan-zalyvu-2', 'Клапан заливу води на 2 виходи', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/klapany'),
  'Candy', '', 31000, 26000,
  'in', 11, '1–2 дні', 'Електромагнітний клапан подачі води. Два виходи, котушки 220 В.', '12 місяців',
  '[{"name":"Виходи","value":"2"},{"name":"Напруга","value":"220 В"}]'::jsonb, 'Клапан заливу на 2 виходи', 'Клапан подачі води для пральної машини.',
  'part-valve.jpg', 'active', '2026-10-11T10:19:22.554Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'sm000000000000000000010', 'SM-1010', 'termostat-pralnoyi', 'Термостат пральної машини 40 °C', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/termostaty'),
  'Ariston', '', 15000, NULL,
  'order', 0, '5–7 днів', 'Контролює температуру води. Замовляється під конкретну посадку датчика.', '6 місяців',
  '[{"name":"Поріг","value":"40 °C"}]'::jsonb, 'Термостат 40 °C', 'Термостат для пральної машини.',
  'part-thermostat.jpg', 'active', '2026-10-11T10:19:22.554Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'sm000000000000000000011', 'SM-1011', 'salnyk-30-52-10', 'Сальник бака 30×52×10', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/salniki'),
  'Indesit', '', 12000, NULL,
  'in', 30, '1–2 дні', 'Ущільнює вісь барабана. Ставиться разом із підшипниками.', '6 місяців',
  '[{"name":"Розмір","value":"30×52×10 мм"}]'::jsonb, 'Сальник 30×52×10', 'Сальник бака пральної машини.',
  'part-seal.jpg', 'active', '2026-10-11T10:19:22.554Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'sm000000000000000000012', 'SM-1012', 'kompresor-holodylnyka', 'Компресор холодильника середньої потужності', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-holodilnikov/kompressory'),
  'Atlant', '', 285000, NULL,
  'order', 2, '7–10 днів', 'Холодильний компресор для заміни агрегату тієї самої холодопродуктивності. Фреон і масло підбирає майстер.', '12 місяців',
  '[{"name":"Призначення","value":"холодильник"}]'::jsonb, 'Компресор холодильника', 'Компресор для побутового холодильника.',
  'part-circpump.jpg', 'active', '2026-10-11T10:19:22.554Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'sm000000000000000000013', 'SM-1013', 'rezyna-dverey-holod', 'Ущільнювальна гума дверей холодильника', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-holodilnikov/uplotnitelnaya-rezina'),
  'Gorenje', '', 64000, 54000,
  'in', 8, '2–4 дні', 'Магнітний ущільнювач дверцят. Тримає холод і прибирає конденсат по контуру.', '12 місяців',
  '[{"name":"Тип","value":"магнітний ущільнювач"}]'::jsonb, 'Ущільнювач дверей холодильника', 'Гума дверей холодильника.',
  'part-gasket.jpg', 'active', '2026-10-11T10:19:22.554Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'sm000000000000000000014', 'SM-1014', 'termostat-holodylnyka', 'Термостат холодильної камери', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-holodilnikov/termostaty'),
  'Nord', '', 22000, NULL,
  'in', 14, '1–2 дні', 'Регулює температуру в камері. Довжину капіляра звірте зі старим термостатом.', '12 місяців',
  '[{"name":"Вузол","value":"холодильна камера"}]'::jsonb, 'Термостат холодильника', 'Термостат для холодильної камери.',
  'part-thermostat.jpg', 'active', '2026-10-11T10:19:22.554Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'sm000000000000000000015', 'SM-1015', 'ten-vidtayky', 'ТЕН відтайки випарника', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-holodilnikov/teny-ottayki'),
  'Samsung', '', 27000, NULL,
  'in', 10, '1–2 дні', 'Гріє випарник під час циклу відтайки No Frost.', '12 місяців',
  '[{"name":"Призначення","value":"відтайка"}]'::jsonb, 'ТЕН відтайки', 'Нагрівач відтайки для холодильника.',
  'part-heater.jpg', 'active', '2026-10-11T10:19:22.554Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'sm000000000000000000016', 'SM-1016', 'konforka-gazova', 'Конфорка газової плити середня', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-plit-i-duhovok/konforki'),
  'Gefest', '', 19000, NULL,
  'in', 20, '1–2 дні', 'Чавунна конфорка для газової поверхні. Діаметр посадки перевірте лінійкою.', '6 місяців',
  '[{"name":"Матеріал","value":"чавун"}]'::jsonb, 'Конфорка газової плити', 'Середня конфорка для газової плити.',
  'part-heater.jpg', 'active', '2026-10-11T10:19:22.554Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'sm000000000000000000017', 'SM-1017', 'ten-duhovky-1600', 'ТЕН духовки 1600 Вт', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-plit-i-duhovok/teny-dlya-duhovok-i-griley'),
  'Electrolux', '', 48000, 41000,
  'in', 5, '2–4 дні', 'Нижній нагрівач духовки. Клеми і радіус вигину мають збігатися зі штатним ТЕНом.', '12 місяців',
  '[{"name":"Потужність","value":"1600 Вт"},{"name":"Положення","value":"нижній"}]'::jsonb, 'ТЕН духовки 1600 Вт', 'Нагрівач для електричної духовки.',
  'part-heater.jpg', 'active', '2026-10-11T10:19:22.554Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'sm000000000000000000018', 'SM-1018', 'uplotnennya-duhovky', 'Ущільнювач дверцят духовки', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-plit-i-duhovok/uplotniteli-dveri'),
  'Bosch', '', 36000, NULL,
  'in', 9, '1–2 дні', 'Тримає жар у камері. Кріпиться в паз по периметру дверцят.', '6 місяців',
  '[{"name":"Вузол","value":"дверцята духовки"}]'::jsonb, 'Ущільнювач духовки', 'Ущільнювач дверцят духовки.',
  'part-gasket.jpg', 'active', '2026-10-11T10:19:22.554Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'sm000000000000000000019', 'SM-1019', 'nasos-kotla', 'Циркуляційний насос котла', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-gazovyh-kotlov/tsirkulyatsionnye-nasosy-i-korpusa'),
  'Ariston', 'Wilo', 245000, 219000,
  'in', 4, '2–4 дні', 'Ганяє теплоносій через теплообмінник. Монтажна довжина 130 мм.', '12 місяців',
  '[{"name":"Довжина","value":"130 мм"},{"name":"Призначення","value":"газовий котел"}]'::jsonb, 'Циркуляційний насос котла', 'Насос для газового котла.',
  'part-circpump.jpg', 'active', '2026-10-11T10:19:22.554Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'sm000000000000000000020', 'SM-1020', 'teploobminnyk-kotla', 'Теплообмінник газового котла', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-gazovyh-kotlov/teploobmenniki'),
  'Baxi', '', 312000, NULL,
  'order', 1, '7–14 днів', 'Основний теплообмінник. Підбір лише за моделлю котла і кількістю секцій.', '12 місяців',
  '[{"name":"Вузол","value":"основний теплообмінник"}]'::jsonb, 'Теплообмінник котла', 'Теплообмінник для газового котла.',
  'part-heater.jpg', 'active', '2026-10-11T10:19:22.554Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'sm000000000000000000021', 'SM-1021', 'anod-boylera', 'Магнієвий анод для бойлера', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vodonagrevateley/anody'),
  'Atlantic', '', 24000, NULL,
  'in', 22, '1–2 дні', 'Захищає бак водонагрівача від корозії. Різьба і довжина мають збігатися з посадкою фланця.', '6 місяців',
  '[{"name":"Матеріал","value":"магній"},{"name":"Довжина","value":"200 мм"}]'::jsonb, 'Магнієвий анод', 'Анод для бойлера.',
  'part-anode.jpg', 'active', '2026-10-11T10:19:22.554Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'sm000000000000000000022', 'SM-1022', 'klapan-kotla', 'Запобіжний клапан котла 3 бар', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-gazovyh-kotlov/predohranitelnye-klapany'),
  'Vaillant', '', 21000, NULL,
  'in', 15, '1–2 дні', 'Скидає тиск, якщо він піднімається вище трьох бар.', '12 місяців',
  '[{"name":"Тиск","value":"3 бар"}]'::jsonb, 'Запобіжний клапан 3 бар', 'Клапан скидання тиску для котла.',
  'part-valve.jpg', 'active', '2026-10-11T10:19:22.554Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'sm000000000000000000023', 'SM-1023', 'mastylо-salnykiv', 'Мастило для сальників і підшипників', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/smazki-dlya-salnikov-i-podshipnikov'),
  'Service Shop', '', 9000, NULL,
  'in', 50, '1–2 дні', 'Наноситься на сальник перед встановленням, щоб кромка не пересохла.', '—',
  '[{"name":"Фасування","value":"20 г"}]'::jsonb, 'Мастило для сальників', 'Мастило для сальника пральної машини.',
  'part-tools.jpg', 'active', '2026-10-11T10:19:22.554Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'sm000000000000000000024', 'SM-1024', 'nasos-vuzkoyi-mashyny', 'Зливний насос для вузької машини 34 Вт', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-stiralnyh-mashin/nasosy-pompy'),
  'LG', 'Askoll', 129000, 98000,
  'out', 0, 'немає в наявності', 'Помпа для вузького баку. Зараз позиції немає, можна залишити заявку через магазин пізніше.', '12 місяців',
  '[{"name":"Потужність","value":"34 Вт"}]'::jsonb, 'Зливний насос 34 Вт', 'Насос для вузької пральної машини.',
  'part-pump.jpg', 'active', '2026-10-11T10:19:22.554Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  '49d933815a78f4caf543f835', 'SM-12851', 'dvigun-motor-dlya-vityazhki-65002733037-k271896f-135w-220-240v-3-shvidkosti', 'Двигун (мотор) для витяжки 65002733037 K271896F 135W 220-240V (3 швидкості)', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/dvigateli'),
  'Універсальні, Fime', 'Fime', 165000, NULL,
  'in', 0, '', 'Універсальний двигун (мотор) для витяжки K271896F 65002733037.

Призначений для приводу вентилятора кухонної витяжки та забезпечення ефективного видалення повітря, пари й запахів із робочої зони. Забезпечує стабільну циркуляцію повітря та підтримання комфортного мікроклімату в приміщенні.

Напруга та частота: 220-240 В, 50/60 Гц.

Потужність: 135 Вт.

Кількість швидкостей: 3.

Висота основи: 98 мм.

Діаметр основи: 187 мм.

Діаметр крильчатки: 142 мм.

Напрям обертання: проти годинникової стрілки.

Постачається у зборі.

Використовується для заміни несправного двигуна. У разі його виходу з ладу можливі зниження тяги, сторонні шуми, перегрів або повна зупинка роботи витяжки.', '',
  '[{"name":"Бренд","value":"Універсальні, Fime"},{"name":"Колір","value":"Чорний"},{"name":"Виробник","value":"Fime"},{"name":"Висота, mm","value":"98"},{"name":"Діаметр крильчатки, mm","value":"142"},{"name":"Діаметр, mm","value":"187"},{"name":"Кількість швидкостей","value":"3"},{"name":"Напруга, V","value":"220-240"},{"name":"Обертання","value":"проти годинникової стрілки"},{"name":"Потужність, W","value":"135"}]', 'Двигун (мотор) для витяжки 65002733037 K271896F 135W 220-240V (3 швидкості). Купити Fime 65002733037 в Україні в інтернет-магазині Сервіс-Маркет', 'Купити Двигун (мотор) для витяжки 65002733037 K271896F 135W 220-240V (3 швидкості) ✔ ціна 1650 грн грн ✔ Артикул: 65002733037 ✔ Код товару в каталозі Двигуни Fime: 12851   ✔ Доставка по Україні. Пункти видачі замовлень: Київ, Одеса, Харків Телефон для замовлення: 0 (800) 752.....',
  '500c23415f23dece7b119df34e15f025_photo_0.webp', 'active', '2026-10-12T17:20:27.816Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  '74633b49c61c944efbd2c880', 'SM-30009', 'filtr-zhiroviy-dlya-vityazhki-470x970mm-wpro-484000008523-tekstilniy', 'Фільтр жировий для витяжки 470x970mm Wpro 484000008523 (текстильний)', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/filtry'),
  'Philips, Bauknecht, Whirlpool, Ariston, Indesit, IKEA, Ignis', 'Whirlpool', 29500, NULL,
  'in', 0, '', 'Текстильний жировий фільтр для витяжки Wpro 484000008523 (універсальний).

Фільтр жировий допомагає запобігти потраплянню жирових частинок всередину вентиляційної системи. Жир, який утворюється під час готування, може осідати в повітряних каналах і на вентиляційних компонентах, що з часом може призвести до погіршення продуктивності витяжки.

ОСНОВНІ ХАРАКТЕРИСТИКИ:

• довжина фільтра 970 мм;

• ширина фільтра 470 мм.', '',
  '[{"name":"Бренд","value":"Philips, Bauknecht, Whirlpool, Ariston, Indesit, IKEA, Ignis"},{"name":"Виробник","value":"Whirlpool"},{"name":"Вид запчастини","value":"Фільтр"},{"name":"Тип фільтру","value":"жировий"},{"name":"Матеріал","value":"Тканина"},{"name":"Довжина, mm","value":"970"},{"name":"Ширина, mm","value":"470"}]', 'Фільтр жировий для витяжки 470x970mm Wpro 484000008523 (текстильний). Купити Whirlpool 484000008523 в Україні в інтернет-магазині Сервіс-Маркет', 'Купити Фільтр жировий для витяжки 470x970mm Wpro 484000008523 (текстильний) ✔ ціна 295 грн грн ✔ Артикул: 484000008523 ✔ Код товару в каталозі Фільтри Whirlpool: 30009   ✔ Доставка по Україні. Пункти видачі замовлень: Київ, Одеса, Харків Телефон для замовлення: 0 (800) 752.....',
  'a0fcde4292581792a3160870cd6d9b03_photo_0.webp', 'active', '2026-10-12T17:33:32.633Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  '3fc68dd68ff8384679e5e9e0', 'SM-41859', 'zhiroviy-filtr-dlya-vityazhki-235x170mm-electrolux-80872856', 'Жировий фільтр для витяжки 235x170mm Electrolux 80872856', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/filtry'),
  'Electrolux, Best, Savo, Airlux, Broan', 'Electrolux', 67000, NULL,
  'in', 0, '', 'Алюмінієвий жировий фільтр для витяжки Electrolux 80872856.

Фільтр жировий допомагає запобігти потраплянню жирових частинок всередину вентиляційної системи. Жир, який утворюється під час готування, може осідати в повітряних каналах і на вентиляційних компонентах, що з часом може призвести до погіршення продуктивності витяжки.

ОСНОВНІ ХАРАКТЕРИСТИКИ:

• довжина фільтра 170 мм;

• ширина фільтра 235 мм.', '',
  '[{"name":"Бренд","value":"Electrolux, Best, Savo, Airlux, Broan"},{"name":"Виробник","value":"Electrolux"},{"name":"Вид запчастини","value":"Фільтр"},{"name":"Тип фільтру","value":"жировий"},{"name":"Матеріал","value":"Алюміній"},{"name":"Довжина, mm","value":"170"},{"name":"Ширина, mm","value":"235"}]', 'Жировий фільтр для витяжки 235x170mm Electrolux 80872856. Купити Electrolux 80872856 в Україні в інтернет-магазині Сервіс-Маркет', 'Купити Жировий фільтр для витяжки 235x170mm Electrolux 80872856 ✔ ціна 670 грн грн ✔ Артикул: 80872856 ✔ Код товару в каталозі Фільтри Electrolux: 41859   ✔ Доставка по Україні. Пункти видачі замовлень: Київ, Одеса, Харків Телефон для замовлення: 0 (800) 752.....',
  '8cb9bae7a53c42860163a91fa7b67563_photo_0.webp', 'active', '2026-10-12T17:33:32.633Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  '9828bb24f5acc491b3bb3e35', 'SM-53366', 'krilchatka-dlya-vityazhki-d-130mm-h-110mm-d-valu-5mm-za-godinnikovoyu-strilkoyu-pid-gayku', 'Крильчатка для витяжки D=130mm H=110mm d валу = 5mm (за годинниковою стрілкою. під гайку)', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/krylchatki'),
  '', '', 42500, NULL,
  'in', 0, '', 'Крильчатка (турбіна, вентилятор обдування) для витяжки.

Крильчатка є ключовим компонентом у витяжці, відіграючи важливу роль у видаленні диму, неприємних запахів та інших частинок з повітря. Основна функція цього елемента полягає у заборі забрудненого повітря з приміщення та його подальшому виведенні назовні. Через цю активну роботу крильчатка часто піддається зносу і поломкам більше, ніж інші частини пристрою.

Діаметр: 130 мм.

Висота: 110 мм.

Діаметр валу: 5 мм.

Напрямок обертання: за годинниковою стрілкою.

Кріплення: затискач під гайку.', '',
  '[{"name":"Колір","value":"Чорний"},{"name":"Діаметр, mm","value":"130"},{"name":"Обертання","value":"за годинниковою стрілкою"},{"name":"Висота, mm","value":"110"},{"name":"Діаметр валу, mm","value":"5"}]', 'Крильчатка для витяжки D=130mm H=110mm d валу = 5mm (за годинниковою стрілкою. під гайку). Купити в Україні в інтернет-магазині Сервіс-Маркет', 'Купити Крильчатка для витяжки D=130mm H=110mm d валу = 5mm (за годинниковою стрілкою. під гайку) ✔ ціна 425 грн грн ✔ Артикул:  ✔ Код товару в каталозі Крильчатки : 53366   ✔ Доставка по Україні. Пункти видачі замовлень: Київ, Одеса, Харків Телефон для замовлення: 0 (800) 752.....',
  'f6a4a2b3a093f2d9cd0143e27e10ef10_photo_0.webp', 'active', '2026-10-12T17:33:32.633Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  '126fcb3d32b8b1de1f1eef4f', 'SM-56104', 'filtr-zhiroviy-dlya-vityazhki-250x300x8mm-45mm-126mm', 'Фільтр жировий для витяжки 250x300x8mm(45mm/126mm)', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/filtry'),
  'Універсальні', 'Universal', 76500, NULL,
  'in', 0, '', 'Алюмінієвий жировий фільтр для витяжки.

Фільтр жировий допомагає запобігти потраплянню жирових частинок всередину вентиляційної системи. Жир, який утворюється під час готування, може осідати в повітряних каналах і на вентиляційних компонентах, що з часом може призвести до погіршення продуктивності витяжки.

ОСНОВНІ ХАРАКТЕРИСТИКИ:

• довжина фільтра 300 мм;

• ширина фільтра 250 мм;

• товщина фільтра 8 мм;

• внутрішня відстань між фіксаторами засувки 45 мм;

• внутрішня відстань між направляючими 126 мм.', '',
  '[{"name":"Бренд","value":"Універсальні"},{"name":"Виробник","value":"Universal"},{"name":"Вид запчастини","value":"Фільтр"},{"name":"Тип фільтру","value":"жировий"},{"name":"Матеріал","value":"Алюміній"},{"name":"Довжина, mm","value":"300"},{"name":"Ширина, mm","value":"250"},{"name":"Товщина, mm","value":"8"},{"name":"Внутрішня відстань між фіксаторами засувки, mm","value":"45"},{"name":"Внутрішня відстань між направляючими, mm","value":"126"}]', 'Фільтр жировий для витяжки 250x300x8mm(45mm/126mm). Купити Universal в Україні в інтернет-магазині Сервіс-Маркет', 'Купити Фільтр жировий для витяжки 250x300x8mm(45mm/126mm) ✔ ціна 765 грн грн ✔ Артикул:  ✔ Код товару в каталозі Фільтри Universal: 56104   ✔ Доставка по Україні. Пункти видачі замовлень: Київ, Одеса, Харків Телефон для замовлення: 0 (800) 752.....',
  'fc9d2129b0ed5ad604eee6fdea28c8d1_photo_0.webp', 'active', '2026-10-12T17:33:32.633Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  '8d991f702b2ee171a6f55770', 'SM-56105', 'filtr-zhiroviy-dlya-vityazhki-186x515x8mm-100mm', 'Фільтр жировий для витяжки 186x515x8mm(100mm)', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/filtry'),
  'Bosch, Siemens', 'Universal', 69500, NULL,
  'in', 0, '', 'Алюмінієвий жировий фільтр для витяжки.

Фільтр жировий допомагає запобігти потраплянню жирових частинок всередину вентиляційної системи. Жир, який утворюється під час готування, може осідати в повітряних каналах і на вентиляційних компонентах, що з часом може призвести до погіршення продуктивності витяжки.

ОСНОВНІ ХАРАКТЕРИСТИКИ:

• довжина фільтра 515 мм;

• ширина фільтра 186 мм;

• товщина фільтра 8 мм;

• внутрішня відстань між направляючими 100 мм.', '',
  '[{"name":"Бренд","value":"Bosch, Siemens"},{"name":"Виробник","value":"Universal"},{"name":"Вид запчастини","value":"Фільтр"},{"name":"Тип фільтру","value":"жировий"},{"name":"Матеріал","value":"Алюміній"},{"name":"Довжина, mm","value":"515"},{"name":"Ширина, mm","value":"186"},{"name":"Товщина, mm","value":"8"},{"name":"Внутрішня відстань між направляючими, mm","value":"100"}]', 'Фільтр жировий для витяжки 186x515x8mm(100mm). Купити Universal в Україні в інтернет-магазині Сервіс-Маркет', 'Купити Фільтр жировий для витяжки 186x515x8mm(100mm) ✔ ціна 695 грн грн ✔ Артикул:  ✔ Код товару в каталозі Фільтри Universal: 56105   ✔ Доставка по Україні. Пункти видачі замовлень: Київ, Одеса, Харків Телефон для замовлення: 0 (800) 752.....',
  'dcfb14ac0eb960a4ae2423c90e364abc_photo_0.webp', 'active', '2026-10-12T17:33:32.633Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'a95787db87d69e9c709921fa', 'SM-56106', 'filtr-zhiroviy-dlya-vityazhki-283x355x8mm-45mm-126mm', 'Фільтр жировий для витяжки 283x355x8mm(45mm/126mm)', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/filtry'),
  'Універсальні', 'Universal', 69500, NULL,
  'in', 0, '', 'Алюмінієвий жировий фільтр для витяжки.

Фільтр жировий допомагає запобігти потраплянню жирових частинок всередину вентиляційної системи. Жир, який утворюється під час готування, може осідати в повітряних каналах і на вентиляційних компонентах, що з часом може призвести до погіршення продуктивності витяжки.

ОСНОВНІ ХАРАКТЕРИСТИКИ:

• довжина фільтра 355 мм;

• ширина фільтра 283 мм;

• товщина фільтра 8 мм;

• внутрішня відстань між фіксаторами засувки 45 мм;

• внутрішня відстань між направляючими 126 мм.', '',
  '[{"name":"Бренд","value":"Універсальні"},{"name":"Виробник","value":"Universal"},{"name":"Вид запчастини","value":"Фільтр"},{"name":"Тип фільтру","value":"жировий"},{"name":"Матеріал","value":"Алюміній"},{"name":"Довжина, mm","value":"355"},{"name":"Ширина, mm","value":"283"},{"name":"Товщина, mm","value":"8"},{"name":"Внутрішня відстань між фіксаторами засувки, mm","value":"45"},{"name":"Внутрішня відстань між направляючими, mm","value":"126"}]', 'Фільтр жировий для витяжки 283x355x8mm(45mm/126mm). Купити Universal в Україні в інтернет-магазині Сервіс-Маркет', 'Купити Фільтр жировий для витяжки 283x355x8mm(45mm/126mm) ✔ ціна 695 грн грн ✔ Артикул:  ✔ Код товару в каталозі Фільтри Universal: 56106   ✔ Доставка по Україні. Пункти видачі замовлень: Київ, Одеса, Харків Телефон для замовлення: 0 (800) 752.....',
  'adf26dcd88111dc9d88f8bb3ebd6732d_photo_0.webp', 'active', '2026-10-12T17:33:32.633Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  '8935869ecc293c05f2c0557e', 'SM-56109', 'filtr-zhiroviy-dlya-vityazhki-205x483x8mm-45mm-45mm', 'Фільтр жировий для витяжки 205x483x8mm(45mm/45mm)', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/filtry'),
  'Універсальні', 'Universal', 69500, NULL,
  'in', 0, '', 'Алюмінієвий жировий фільтр для витяжки.

Фільтр жировий допомагає запобігти потраплянню жирових частинок всередину вентиляційної системи. Жир, який утворюється під час готування, може осідати в повітряних каналах і на вентиляційних компонентах, що з часом може призвести до погіршення продуктивності витяжки.

ОСНОВНІ ХАРАКТЕРИСТИКИ:

• довжина фільтра 483 мм;

• ширина фільтра 205 мм;

• товщина фільтра 8 мм;

• внутрішня відстань між фіксаторами засувки 45 мм;

• внутрішня відстань між направляючими 45 мм.', '',
  '[{"name":"Бренд","value":"Універсальні"},{"name":"Виробник","value":"Universal"},{"name":"Вид запчастини","value":"Фільтр"},{"name":"Тип фільтру","value":"жировий"},{"name":"Матеріал","value":"Алюміній"},{"name":"Довжина, mm","value":"483"},{"name":"Ширина, mm","value":"205"},{"name":"Товщина, mm","value":"8"},{"name":"Внутрішня відстань між фіксаторами засувки, mm","value":"45"},{"name":"Внутрішня відстань між направляючими, mm","value":"45"}]', 'Фільтр жировий для витяжки 205x483x8mm(45mm/45mm). Купити Universal в Україні в інтернет-магазині Сервіс-Маркет', 'Купити Фільтр жировий для витяжки 205x483x8mm(45mm/45mm) ✔ ціна 695 грн грн ✔ Артикул:  ✔ Код товару в каталозі Фільтри Universal: 56109   ✔ Доставка по Україні. Пункти видачі замовлень: Київ, Одеса, Харків Телефон для замовлення: 0 (800) 752.....',
  '59977d5fed04f1b6d543ee2fae933792_photo_0.webp', 'active', '2026-10-12T17:20:27.816Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'd3dda76edf67be482d4a1378', 'SM-56111', 'filtr-zhiroviy-dlya-vityazhki-200x490x8mm-45mm-45mm', 'Фільтр жировий для витяжки 200x490x8mm(45mm/45mm)', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/filtry'),
  'Універсальні', 'Universal', 69500, NULL,
  'in', 0, '', 'Алюмінієвий жировий фільтр для витяжки.

Фільтр жировий допомагає запобігти потраплянню жирових частинок всередину вентиляційної системи. Жир, який утворюється під час готування, може осідати в повітряних каналах і на вентиляційних компонентах, що з часом може призвести до погіршення продуктивності витяжки.

ОСНОВНІ ХАРАКТЕРИСТИКИ:

• довжина фільтра 490 мм;

• ширина фільтра 200 мм;

• товщина фільтра 8 мм;

• внутрішня відстань між фіксаторами засувки 45 мм;

• внутрішня відстань між направляючими 45 мм.', '',
  '[{"name":"Бренд","value":"Універсальні"},{"name":"Виробник","value":"Universal"},{"name":"Вид запчастини","value":"Фільтр"},{"name":"Тип фільтру","value":"жировий"},{"name":"Матеріал","value":"Алюміній"},{"name":"Довжина, mm","value":"490"},{"name":"Ширина, mm","value":"200"},{"name":"Товщина, mm","value":"8"},{"name":"Внутрішня відстань між фіксаторами засувки, mm","value":"45"},{"name":"Внутрішня відстань між направляючими, mm","value":"45"}]', 'Фільтр жировий для витяжки 200x490x8mm(45mm/45mm). Купити Universal в Україні в інтернет-магазині Сервіс-Маркет', 'Купити Фільтр жировий для витяжки 200x490x8mm(45mm/45mm) ✔ ціна 695 грн грн ✔ Артикул:  ✔ Код товару в каталозі Фільтри Universal: 56111   ✔ Доставка по Україні. Пункти видачі замовлень: Київ, Одеса, Харків Телефон для замовлення: 0 (800) 752.....',
  'dbeed44e29c197d2ec1a73d8782bf58e_photo_0.webp', 'active', '2026-10-12T17:33:32.633Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  '0a4d82858de3332ad2e69ca6', 'SM-56113', 'zhiroviy-filtr-dlya-vityazhki-274x350x8mm-45mm-97mm', 'Жировий фільтр для витяжки 274x350x8mm (45mm/97mm)', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/filtry'),
  'Універсальні', 'Universal', 54000, NULL,
  'in', 0, '', 'Алюмінієвий жировий фільтр для витяжки.

Фільтр жировий допомагає запобігти потраплянню жирових частинок всередину вентиляційної системи. Жир, який утворюється під час готування, може осідати в повітряних каналах і на вентиляційних компонентах, що з часом може призвести до погіршення продуктивності витяжки.

ОСНОВНІ ХАРАКТЕРИСТИКИ:

• довжина фільтра 350 мм;

• ширина фільтра 274 мм;

• товщина фільтра 8 мм;

• внутрішня відстань між фіксаторами засувки 45 мм;

• внутрішня відстань між направляючими 97 мм.', '',
  '[{"name":"Бренд","value":"Універсальні"},{"name":"Виробник","value":"Universal"},{"name":"Вид запчастини","value":"Фільтр"},{"name":"Тип фільтру","value":"жировий"},{"name":"Матеріал","value":"Алюміній"},{"name":"Довжина, mm","value":"350"},{"name":"Ширина, mm","value":"274"},{"name":"Товщина, mm","value":"8"},{"name":"Внутрішня відстань між фіксаторами засувки, mm","value":"45"},{"name":"Внутрішня відстань між направляючими, mm","value":"97"}]', 'Жировий фільтр для витяжки 274x350x8mm (45mm/97mm). Купити Universal в Україні в інтернет-магазині Сервіс-Маркет', 'Купити Жировий фільтр для витяжки 274x350x8mm (45mm/97mm) ✔ ціна 540 грн грн ✔ Артикул:  ✔ Код товару в каталозі Фільтри Universal: 56113   ✔ Доставка по Україні. Пункти видачі замовлень: Київ, Одеса, Харків Телефон для замовлення: 0 (800) 752.....',
  'bac1729244e3fb10d36b251e7e598a24_photo_0.webp', 'active', '2026-10-12T17:33:32.633Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  '5062faee3e2d8dacbcf73c86', 'SM-56116', 'filtr-zhiroviy-dlya-vityazhki-285x340x8mm-45mm-126mm', 'Фільтр жировий для витяжки 285x340x8mm (45mm/126mm)', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/filtry'),
  'Універсальні', 'Universal', 59500, NULL,
  'in', 0, '', 'Алюмінієвий жировий фільтр для витяжки.

Фільтр жировий допомагає запобігти потраплянню жирових частинок всередину вентиляційної системи. Жир, який утворюється під час готування, може осідати в повітряних каналах і на вентиляційних компонентах, що з часом може призвести до погіршення продуктивності витяжки.

ОСНОВНІ ХАРАКТЕРИСТИКИ:

• довжина фільтра 340 мм;

• ширина фільтра 285 мм;

• товщина фільтра 8 мм;

• внутрішня відстань між фіксаторами засувки 45 мм;

• внутрішня відстань між направляючими 126 мм.', '',
  '[{"name":"Бренд","value":"Універсальні"},{"name":"Виробник","value":"Universal"},{"name":"Вид запчастини","value":"Фільтр"},{"name":"Тип фільтру","value":"жировий"},{"name":"Матеріал","value":"Алюміній"},{"name":"Довжина, mm","value":"340"},{"name":"Ширина, mm","value":"285"},{"name":"Товщина, mm","value":"8"},{"name":"Внутрішня відстань між фіксаторами засувки, mm","value":"45"},{"name":"Внутрішня відстань між направляючими, mm","value":"126"}]', 'Фільтр жировий для витяжки 285x340x8mm (45mm/126mm). Купити Universal в Україні в інтернет-магазині Сервіс-Маркет', 'Купити Фільтр жировий для витяжки 285x340x8mm (45mm/126mm) ✔ ціна 595 грн грн ✔ Артикул:  ✔ Код товару в каталозі Фільтри Universal: 56116   ✔ Доставка по Україні. Пункти видачі замовлень: Київ, Одеса, Харків Телефон для замовлення: 0 (800) 752.....',
  '0f0541863d91fd1e5f510285617b2716_photo_0.webp', 'active', '2026-10-12T17:33:32.633Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'c5eedc2006eeba5a7193688e', 'SM-56117', 'filtr-zhiroviy-dlya-vityazhki-270x340x8mm-45mm-125mm', 'Фільтр жировий для витяжки 270x340x8mm (45mm/125mm)', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/filtry'),
  'Універсальні', 'Universal', 75000, NULL,
  'in', 0, '', 'Алюмінієвий жировий фільтр для витяжки.

Фільтр жировий допомагає запобігти потраплянню жирових частинок всередину вентиляційної системи. Жир, який утворюється під час готування, може осідати в повітряних каналах і на вентиляційних компонентах, що з часом може призвести до погіршення продуктивності витяжки.

ОСНОВНІ ХАРАКТЕРИСТИКИ:

• довжина фільтра 340 мм;

• ширина фільтра 270 мм;

• товщина фільтра 8 мм;

• внутрішня відстань між фіксаторами засувки 45 мм;

• внутрішня відстань між направляючими 125 мм.', '',
  '[{"name":"Бренд","value":"Універсальні"},{"name":"Виробник","value":"Universal"},{"name":"Вид запчастини","value":"Фільтр"},{"name":"Тип фільтру","value":"жировий"},{"name":"Матеріал","value":"Алюміній"},{"name":"Довжина, mm","value":"340"},{"name":"Ширина, mm","value":"270"},{"name":"Товщина, mm","value":"8"},{"name":"Внутрішня відстань між фіксаторами засувки, mm","value":"45"},{"name":"Внутрішня відстань між направляючими, mm","value":"125"}]', 'Фільтр жировий для витяжки 270x340x8mm (45mm/125mm). Купити Universal в Україні в інтернет-магазині Сервіс-Маркет', 'Купити Фільтр жировий для витяжки 270x340x8mm (45mm/125mm) ✔ ціна 750 грн грн ✔ Артикул:  ✔ Код товару в каталозі Фільтри Universal: 56117   ✔ Доставка по Україні. Пункти видачі замовлень: Київ, Одеса, Харків Телефон для замовлення: 0 (800) 752.....',
  '707fe9f8143ee0be4922f2c15b8772f2_photo_0.webp', 'active', '2026-10-12T17:33:32.633Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  '10696eb9c87e9c4d8ff09ebc', 'SM-56129', 'filtr-zhiroviy-dlya-vityazhki-205x475x8mm-45mm-45mm', 'Фільтр жировий для витяжки 205x475x8mm (45mm/45mm)', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/filtry'),
  'Універсальні', 'Universal', 76500, NULL,
  'in', 0, '', 'Алюмінієвий жировий фільтр для витяжки.

Фільтр жировий допомагає запобігти потраплянню жирових частинок всередину вентиляційної системи. Жир, який утворюється під час готування, може осідати в повітряних каналах і на вентиляційних компонентах, що з часом може призвести до погіршення продуктивності витяжки.

ОСНОВНІ ХАРАКТЕРИСТИКИ:

• довжина фільтра 475 мм;

• ширина фільтра 205 мм;

• товщина фільтра 8 мм;

• внутрішня відстань між фіксаторами засувки 45 мм;

• внутрішня відстань між направляючими 45 мм.', '',
  '[{"name":"Бренд","value":"Універсальні"},{"name":"Виробник","value":"Universal"},{"name":"Вид запчастини","value":"Фільтр"},{"name":"Тип фільтру","value":"жировий"},{"name":"Матеріал","value":"Алюміній"},{"name":"Довжина, mm","value":"475"},{"name":"Ширина, mm","value":"205"},{"name":"Товщина, mm","value":"8"},{"name":"Внутрішня відстань між фіксаторами засувки, mm","value":"45"},{"name":"Внутрішня відстань між направляючими, mm","value":"45"}]', 'Фільтр жировий для витяжки 205x475x8mm (45mm/45mm). Купити Universal в Україні в інтернет-магазині Сервіс-Маркет', 'Купити Фільтр жировий для витяжки 205x475x8mm (45mm/45mm) ✔ ціна 765 грн грн ✔ Артикул:  ✔ Код товару в каталозі Фільтри Universal: 56129   ✔ Доставка по Україні. Пункти видачі замовлень: Київ, Одеса, Харків Телефон для замовлення: 0 (800) 752.....',
  '1691a734cdcbeff38d890ccf92543693_photo_0.webp', 'active', '2026-10-12T17:20:27.816Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  '1521a6fcf0196bfe5e738910', 'SM-56134', 'filtr-zhiroviy-dlya-vityazhki-166x515x8mm-100mm', 'Фільтр жировий для витяжки 166x515x8mm (100mm)', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/filtry'),
  'Electrolux, Zanussi, Beko, Bosch, Siemens, Zanker, Універсальні, Altus', 'Universal', 69500, NULL,
  'in', 0, '', 'Алюмінієвий жировий фільтр для витяжки.

Фільтр жировий допомагає запобігти потраплянню жирових частинок всередину вентиляційної системи. Жир, який утворюється під час готування, може осідати в повітряних каналах і на вентиляційних компонентах, що з часом може призвести до погіршення продуктивності витяжки.

ОСНОВНІ ХАРАКТЕРИСТИКИ:

• довжина фільтра 515 мм;

• ширина фільтра 166 мм;

• товщина фільтра 8 мм;

• внутрішня відстань між направляючими 100 мм.', '',
  '[{"name":"Бренд","value":"Electrolux, Zanussi, Beko, Bosch, Siemens, Zanker, Універсальні, Altus"},{"name":"Виробник","value":"Universal"},{"name":"Вид запчастини","value":"Фільтр"},{"name":"Тип фільтру","value":"жировий"},{"name":"Матеріал","value":"Алюміній"},{"name":"Довжина, mm","value":"515"},{"name":"Ширина, mm","value":"166"},{"name":"Товщина, mm","value":"8"},{"name":"Внутрішня відстань між направляючими, mm","value":"100"}]', 'Фільтр жировий для витяжки 166x515x8mm (100mm). Купити Universal в Україні в інтернет-магазині Сервіс-Маркет', 'Купити Фільтр жировий для витяжки 166x515x8mm (100mm) ✔ ціна 695 грн грн ✔ Артикул:  ✔ Код товару в каталозі Фільтри Universal: 56134   ✔ Доставка по Україні. Пункти видачі замовлень: Київ, Одеса, Харків Телефон для замовлення: 0 (800) 752.....',
  '08926021448340e25da7bcb04094aff9_photo_0.webp', 'active', '2026-10-12T17:33:32.633Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'b5f4ef1284b9fbfacdac92dd', 'SM-56140', 'zhiroviy-filtr-dlya-vityazhki-205x472x8mm-45mm-45mm', 'Жировий фільтр для витяжки 205x472x8mm (45mm/45mm)', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/filtry'),
  'Універсальні', 'Universal', 76500, NULL,
  'in', 0, '', 'Алюмінієвий жировий фільтр для витяжки.

Фільтр жировий допомагає запобігти потраплянню жирових частинок всередину вентиляційної системи. Жир, який утворюється під час готування, може осідати в повітряних каналах і на вентиляційних компонентах, що з часом може призвести до погіршення продуктивності витяжки.

ОСНОВНІ ХАРАКТЕРИСТИКИ:

• довжина фільтра 472 мм;

• ширина фільтра 205 мм;

• товщина фільтра 8 мм;

• внутрішня відстань між фіксаторами засувки 45 мм;

• внутрішня відстань між направляючими 45 мм.', '',
  '[{"name":"Бренд","value":"Універсальні"},{"name":"Виробник","value":"Universal"},{"name":"Вид запчастини","value":"Фільтр"},{"name":"Тип фільтру","value":"жировий"},{"name":"Матеріал","value":"Алюміній"},{"name":"Довжина, mm","value":"472"},{"name":"Ширина, mm","value":"205"},{"name":"Товщина, mm","value":"8"},{"name":"Внутрішня відстань між фіксаторами засувки, mm","value":"45"},{"name":"Внутрішня відстань між направляючими, mm","value":"45"}]', 'Жировий фільтр для витяжки 205x472x8mm (45mm/45mm). Купити Universal в Україні в інтернет-магазині Сервіс-Маркет', 'Купити Жировий фільтр для витяжки 205x472x8mm (45mm/45mm) ✔ ціна 765 грн грн ✔ Артикул:  ✔ Код товару в каталозі Фільтри Universal: 56140   ✔ Доставка по Україні. Пункти видачі замовлень: Київ, Одеса, Харків Телефон для замовлення: 0 (800) 752.....',
  'f48191dc2cf67efc397b2edf97318991_photo_0.webp', 'active', '2026-10-12T17:33:32.633Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'b44def465450e2f4ad9b263e', 'SM-56148', 'filtr-zhiroviy-dlya-vityazhki-258x320x8mm-45mm-94mm', 'Фільтр жировий для витяжки 258x320x8mm (45mm/94mm)', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/filtry'),
  'Bauknecht, Whirlpool, Ariston, Hotpoint-Ariston, Ignis, Універсальні', 'Universal', 76500, NULL,
  'in', 0, '', 'Алюмінієвий жировий фільтр для витяжки.

Фільтр жировий допомагає запобігти потраплянню жирових частинок всередину вентиляційної системи. Жир, який утворюється під час готування, може осідати в повітряних каналах і на вентиляційних компонентах, що з часом може призвести до погіршення продуктивності витяжки.

ОСНОВНІ ХАРАКТЕРИСТИКИ:

• довжина фільтра 320 мм;

• ширина фільтра 258 мм;

• товщина фільтра 8 мм;

• внутрішня відстань між фіксаторами засувки 45 мм;

• внутрішня відстань між направляючими 94 мм.', '',
  '[{"name":"Бренд","value":"Bauknecht, Whirlpool, Ariston, Hotpoint-Ariston, Ignis, Універсальні"},{"name":"Виробник","value":"Universal"},{"name":"Вид запчастини","value":"Фільтр"},{"name":"Тип фільтру","value":"жировий"},{"name":"Матеріал","value":"Алюміній"},{"name":"Довжина, mm","value":"320"},{"name":"Ширина, mm","value":"258"},{"name":"Товщина, mm","value":"8"},{"name":"Внутрішня відстань між фіксаторами засувки, mm","value":"45"},{"name":"Внутрішня відстань між направляючими, mm","value":"94"}]', 'Фільтр жировий для витяжки 258x320x8mm (45mm/94mm). Купити Universal в Україні в інтернет-магазині Сервіс-Маркет', 'Купити Фільтр жировий для витяжки 258x320x8mm (45mm/94mm) ✔ ціна 765 грн грн ✔ Артикул:  ✔ Код товару в каталозі Фільтри Universal: 56148   ✔ Доставка по Україні. Пункти видачі замовлень: Київ, Одеса, Харків Телефон для замовлення: 0 (800) 752.....',
  'b56eedc13f4b1c6a63007044097891d9_photo_0.webp', 'active', '2026-10-12T17:20:27.816Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'e5af036ca24f22588e515cfa', 'SM-56149', 'filtr-zhiroviy-dlya-vityazhki-177x533x8mm-45mm-45mm', 'Фільтр жировий для витяжки 177x533x8mm (45mm/45mm)', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/filtry'),
  'Whirlpool, Ariston, Hotpoint-Ariston, Indesit, IKEA, Ignis, Універсальні', 'Universal', 69500, NULL,
  'in', 0, '', 'Алюмінієвий жировий фільтр для витяжки.

Фільтр жировий допомагає запобігти потраплянню жирових частинок всередину вентиляційної системи. Жир, який утворюється під час готування, може осідати в повітряних каналах і на вентиляційних компонентах, що з часом може призвести до погіршення продуктивності витяжки.

ОСНОВНІ ХАРАКТЕРИСТИКИ:

• довжина фільтра 533 мм;

• ширина фільтра 177 мм;

• товщина фільтра 8 мм;

• внутрішня відстань між фіксаторами засувки 45 мм;

• внутрішня відстань між направляючими 45 мм.', '',
  '[{"name":"Бренд","value":"Whirlpool, Ariston, Hotpoint-Ariston, Indesit, IKEA, Ignis, Універсальні"},{"name":"Виробник","value":"Universal"},{"name":"Вид запчастини","value":"Фільтр"},{"name":"Тип фільтру","value":"жировий"},{"name":"Матеріал","value":"Алюміній"},{"name":"Довжина, mm","value":"533"},{"name":"Ширина, mm","value":"177"},{"name":"Товщина, mm","value":"8"},{"name":"Внутрішня відстань між фіксаторами засувки, mm","value":"45"},{"name":"Внутрішня відстань між направляючими, mm","value":"45"}]', 'Фільтр жировий для витяжки 177x533x8mm (45mm/45mm). Купити Universal в Україні в інтернет-магазині Сервіс-Маркет', 'Купити Фільтр жировий для витяжки 177x533x8mm (45mm/45mm) ✔ ціна 695 грн грн ✔ Артикул:  ✔ Код товару в каталозі Фільтри Universal: 56149   ✔ Доставка по Україні. Пункти видачі замовлень: Київ, Одеса, Харків Телефон для замовлення: 0 (800) 752.....',
  'c0dd93ad9107fcdb79275a1517eda572_photo_0.webp', 'active', '2026-10-12T17:33:32.633Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'b6a9a0878de3c0899f3e0ddf', 'SM-56152', 'filtr-zhiroviy-dlya-vityazhki-257x318x8mm-45mm-76mm', 'Фільтр жировий для витяжки 257x318x8mm (45mm/76mm)', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/filtry'),
  'Ariston, Hotpoint-Ariston, Indesit, Універсальні', 'Universal', 69500, NULL,
  'in', 0, '', 'Алюмінієвий жировий фільтр для витяжки.

Фільтр жировий допомагає запобігти потраплянню жирових частинок всередину вентиляційної системи. Жир, який утворюється під час готування, може осідати в повітряних каналах і на вентиляційних компонентах, що з часом може призвести до погіршення продуктивності витяжки.

ОСНОВНІ ХАРАКТЕРИСТИКИ:

• довжина фільтра 318 мм;

• ширина фільтра 257 мм;

• товщина фільтра 8 мм;

• внутрішня відстань між фіксаторами засувки 45 мм;

• внутрішня відстань між направляючими 76 мм.', '',
  '[{"name":"Бренд","value":"Ariston, Hotpoint-Ariston, Indesit, Універсальні"},{"name":"Виробник","value":"Universal"},{"name":"Вид запчастини","value":"Фільтр"},{"name":"Тип фільтру","value":"жировий"},{"name":"Матеріал","value":"Алюміній"},{"name":"Довжина, mm","value":"318"},{"name":"Ширина, mm","value":"257"},{"name":"Товщина, mm","value":"8"},{"name":"Внутрішня відстань між фіксаторами засувки, mm","value":"45"},{"name":"Внутрішня відстань між направляючими, mm","value":"76"}]', 'Фільтр жировий для витяжки 257x318x8mm (45mm/76mm). Купити Universal в Україні в інтернет-магазині Сервіс-Маркет', 'Купити Фільтр жировий для витяжки 257x318x8mm (45mm/76mm) ✔ ціна 695 грн грн ✔ Артикул:  ✔ Код товару в каталозі Фільтри Universal: 56152   ✔ Доставка по Україні. Пункти видачі замовлень: Київ, Одеса, Харків Телефон для замовлення: 0 (800) 752.....',
  '55810a26362cb58343edc6d905c95ca5_photo_0.webp', 'active', '2026-10-12T17:33:32.633Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

INSERT INTO products (
  id, sku, slug, title, category_id, brand, manufacturer, price_amount, sale_price_amount,
  stock_status, stock_qty, lead_time, description, warranty, specs, seo_title, seo_description,
  image, status, created_at, updated_at
) VALUES (
  'a942a652529c00bf0f622285', 'SM-56189', 'filtr-zhiroviy-dlya-vityazhki-226x312x8mm-45mm-126mm', 'Фільтр жировий для витяжки 226x312x8mm (45mm/126mm)', (SELECT id FROM categories WHERE path = 'dlya-krupnoy-tehniki/zapchasti-dlya-vytyazhek/filtry'),
  'Універсальні', 'Universal', 76500, NULL,
  'in', 0, '', 'Алюмінієвий жировий фільтр для витяжки.

Фільтр жировий допомагає запобігти потраплянню жирових частинок всередину вентиляційної системи. Жир, який утворюється під час готування, може осідати в повітряних каналах і на вентиляційних компонентах, що з часом може призвести до погіршення продуктивності витяжки.

ОСНОВНІ ХАРАКТЕРИСТИКИ:

• довжина фільтра 312 мм;

• ширина фільтра 226 мм;

• товщина фільтра 8 мм;

• внутрішня відстань між фіксаторами засувки 45 мм;

• внутрішня відстань між направляючими 126 мм.', '',
  '[{"name":"Бренд","value":"Універсальні"},{"name":"Виробник","value":"Universal"},{"name":"Вид запчастини","value":"Фільтр"},{"name":"Тип фільтру","value":"жировий"},{"name":"Матеріал","value":"Алюміній"},{"name":"Довжина, mm","value":"312"},{"name":"Ширина, mm","value":"226"},{"name":"Товщина, mm","value":"8"},{"name":"Внутрішня відстань між фіксаторами засувки, mm","value":"45"},{"name":"Внутрішня відстань між направляючими, mm","value":"126"}]', 'Фільтр жировий для витяжки 226x312x8mm (45mm/126mm). Купити Universal в Україні в інтернет-магазині Сервіс-Маркет', 'Купити Фільтр жировий для витяжки 226x312x8mm (45mm/126mm) ✔ ціна 765 грн грн ✔ Артикул:  ✔ Код товару в каталозі Фільтри Universal: 56189   ✔ Доставка по Україні. Пункти видачі замовлень: Київ, Одеса, Харків Телефон для замовлення: 0 (800) 752.....',
  '9001fef26d95d0a01e3222263c1bd8e3_photo_0.webp', 'active', '2026-10-12T17:20:27.816Z', now()
)
ON CONFLICT ((lower(sku))) DO UPDATE SET
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  category_id = EXCLUDED.category_id,
  brand = EXCLUDED.brand,
  manufacturer = EXCLUDED.manufacturer,
  price_amount = EXCLUDED.price_amount,
  sale_price_amount = EXCLUDED.sale_price_amount,
  stock_status = EXCLUDED.stock_status,
  stock_qty = EXCLUDED.stock_qty,
  lead_time = EXCLUDED.lead_time,
  description = EXCLUDED.description,
  warranty = EXCLUDED.warranty,
  specs = EXCLUDED.specs,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description,
  image = EXCLUDED.image,
  status = EXCLUDED.status,
  updated_at = now();

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-07376'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('67905ccb34f6fb7ebb1e01e8', (SELECT id FROM products WHERE lower(sku) = lower('SM-07376')), 'dec1a9b5132bc02774789e65d3aee216_photo_0.webp', 0, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('502a859cc3ebc86534fafc98', (SELECT id FROM products WHERE lower(sku) = lower('SM-07376')), 'dec1a9b5132bc02774789e65d3aee216_photo_1.webp', 1, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('48e2124f342ef401b5ee26c2', (SELECT id FROM products WHERE lower(sku) = lower('SM-07376')), 'dec1a9b5132bc02774789e65d3aee216_photo_2.webp', 2, '');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1001'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('sm000000000000000000001img', (SELECT id FROM products WHERE lower(sku) = lower('SM-1001')), 'part-pump.jpg', 0, 'Зливний насос 30 Вт для пральної машини');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1002'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('sm000000000000000000002img', (SELECT id FROM products WHERE lower(sku) = lower('SM-1002')), 'part-pump.jpg', 0, 'Зливний насос 40 Вт у зборі з равликом');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1003'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('sm000000000000000000003img', (SELECT id FROM products WHERE lower(sku) = lower('SM-1003')), 'part-heater.jpg', 0, 'ТЕН пральної машини 1900 Вт');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1004'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('sm000000000000000000004img', (SELECT id FROM products WHERE lower(sku) = lower('SM-1004')), 'part-heater.jpg', 0, 'ТЕН пральної машини 1700 Вт прямий');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1005'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('sm000000000000000000005img', (SELECT id FROM products WHERE lower(sku) = lower('SM-1005')), 'part-belt.jpg', 0, 'Ремінь приводу барабана 1195 H7');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1006'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('sm000000000000000000006img', (SELECT id FROM products WHERE lower(sku) = lower('SM-1006')), 'part-shock.jpg', 0, 'Амортизатор бака 100 Н');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1007'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('sm000000000000000000007img', (SELECT id FROM products WHERE lower(sku) = lower('SM-1007')), 'part-gasket.jpg', 0, 'Манжета люка пральної машини');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1008'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('sm000000000000000000008img', (SELECT id FROM products WHERE lower(sku) = lower('SM-1008')), 'part-bearing.jpg', 0, 'Підшипник барабана 6203 ZZ');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1009'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('sm000000000000000000009img', (SELECT id FROM products WHERE lower(sku) = lower('SM-1009')), 'part-valve.jpg', 0, 'Клапан заливу води на 2 виходи');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1010'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('sm000000000000000000010img', (SELECT id FROM products WHERE lower(sku) = lower('SM-1010')), 'part-thermostat.jpg', 0, 'Термостат пральної машини 40 °C');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1011'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('sm000000000000000000011img', (SELECT id FROM products WHERE lower(sku) = lower('SM-1011')), 'part-seal.jpg', 0, 'Сальник бака 30×52×10');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1012'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('sm000000000000000000012img', (SELECT id FROM products WHERE lower(sku) = lower('SM-1012')), 'part-circpump.jpg', 0, 'Компресор холодильника середньої потужності');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1013'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('sm000000000000000000013img', (SELECT id FROM products WHERE lower(sku) = lower('SM-1013')), 'part-gasket.jpg', 0, 'Ущільнювальна гума дверей холодильника');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1014'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('sm000000000000000000014img', (SELECT id FROM products WHERE lower(sku) = lower('SM-1014')), 'part-thermostat.jpg', 0, 'Термостат холодильної камери');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1015'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('sm000000000000000000015img', (SELECT id FROM products WHERE lower(sku) = lower('SM-1015')), 'part-heater.jpg', 0, 'ТЕН відтайки випарника');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1016'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('sm000000000000000000016img', (SELECT id FROM products WHERE lower(sku) = lower('SM-1016')), 'part-heater.jpg', 0, 'Конфорка газової плити середня');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1017'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('sm000000000000000000017img', (SELECT id FROM products WHERE lower(sku) = lower('SM-1017')), 'part-heater.jpg', 0, 'ТЕН духовки 1600 Вт');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1018'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('sm000000000000000000018img', (SELECT id FROM products WHERE lower(sku) = lower('SM-1018')), 'part-gasket.jpg', 0, 'Ущільнювач дверцят духовки');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1019'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('sm000000000000000000019img', (SELECT id FROM products WHERE lower(sku) = lower('SM-1019')), 'part-circpump.jpg', 0, 'Циркуляційний насос котла');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1020'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('sm000000000000000000020img', (SELECT id FROM products WHERE lower(sku) = lower('SM-1020')), 'part-heater.jpg', 0, 'Теплообмінник газового котла');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1021'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('sm000000000000000000021img', (SELECT id FROM products WHERE lower(sku) = lower('SM-1021')), 'part-anode.jpg', 0, 'Магнієвий анод для бойлера');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1022'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('sm000000000000000000022img', (SELECT id FROM products WHERE lower(sku) = lower('SM-1022')), 'part-valve.jpg', 0, 'Запобіжний клапан котла 3 бар');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1023'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('sm000000000000000000023img', (SELECT id FROM products WHERE lower(sku) = lower('SM-1023')), 'part-tools.jpg', 0, 'Мастило для сальників і підшипників');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1024'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('sm000000000000000000024img', (SELECT id FROM products WHERE lower(sku) = lower('SM-1024')), 'part-pump.jpg', 0, 'Зливний насос для вузької машини 34 Вт');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-12851'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('5c6f2b31987909ba0be58327', (SELECT id FROM products WHERE lower(sku) = lower('SM-12851')), '500c23415f23dece7b119df34e15f025_photo_0.webp', 0, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('7f419fe66af668e5a00ab0bf', (SELECT id FROM products WHERE lower(sku) = lower('SM-12851')), '500c23415f23dece7b119df34e15f025_photo_1.webp', 1, '');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-30009'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('08915b459b3d2a2450d75ea2', (SELECT id FROM products WHERE lower(sku) = lower('SM-30009')), 'a0fcde4292581792a3160870cd6d9b03_photo_0.webp', 0, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('ec7a7fb9369c606ddb7e1f17', (SELECT id FROM products WHERE lower(sku) = lower('SM-30009')), 'a0fcde4292581792a3160870cd6d9b03_photo_1.webp', 1, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('67870366ff26ed42d8161c2f', (SELECT id FROM products WHERE lower(sku) = lower('SM-30009')), 'a0fcde4292581792a3160870cd6d9b03_photo_2.webp', 2, '');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-41859'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('d7f3bc85e1d4ae3f1f5d89af', (SELECT id FROM products WHERE lower(sku) = lower('SM-41859')), '8cb9bae7a53c42860163a91fa7b67563_photo_0.webp', 0, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('b81ddd3e991401c17e49a65d', (SELECT id FROM products WHERE lower(sku) = lower('SM-41859')), '8cb9bae7a53c42860163a91fa7b67563_photo_1.webp', 1, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('742c75e02634465a3d2f5dba', (SELECT id FROM products WHERE lower(sku) = lower('SM-41859')), '8cb9bae7a53c42860163a91fa7b67563_photo_2.webp', 2, '');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-53366'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('32f20c4f9fd9e9751f561ce5', (SELECT id FROM products WHERE lower(sku) = lower('SM-53366')), 'f6a4a2b3a093f2d9cd0143e27e10ef10_photo_0.webp', 0, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('87693973ed0fa579b429622b', (SELECT id FROM products WHERE lower(sku) = lower('SM-53366')), 'f6a4a2b3a093f2d9cd0143e27e10ef10_photo_1.webp', 1, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('7fe791c0eb03f68f3c2be641', (SELECT id FROM products WHERE lower(sku) = lower('SM-53366')), 'f6a4a2b3a093f2d9cd0143e27e10ef10_photo_2.webp', 2, '');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-56104'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('6721db7563e9652e8132ee00', (SELECT id FROM products WHERE lower(sku) = lower('SM-56104')), 'fc9d2129b0ed5ad604eee6fdea28c8d1_photo_0.webp', 0, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('76fc1ba96a38f76ba2d83be2', (SELECT id FROM products WHERE lower(sku) = lower('SM-56104')), 'fc9d2129b0ed5ad604eee6fdea28c8d1_photo_2.webp', 1, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('bd276fa4f7f286ed504071df', (SELECT id FROM products WHERE lower(sku) = lower('SM-56104')), '00a148c87ba6b6aa3cb7c2411f3b9c1d_photo_3.webp', 2, '');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-56105'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('8598c68fe119421fc43bf07f', (SELECT id FROM products WHERE lower(sku) = lower('SM-56105')), 'dcfb14ac0eb960a4ae2423c90e364abc_photo_0.webp', 0, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('8e7488fca730133630c7fce1', (SELECT id FROM products WHERE lower(sku) = lower('SM-56105')), 'dcfb14ac0eb960a4ae2423c90e364abc_photo_2.webp', 1, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('247836e9e1529aa03c894acf', (SELECT id FROM products WHERE lower(sku) = lower('SM-56105')), 'dcfb14ac0eb960a4ae2423c90e364abc_photo_3.webp', 2, '');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-56106'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('6a943572cbd1881a8c5ab7bb', (SELECT id FROM products WHERE lower(sku) = lower('SM-56106')), 'adf26dcd88111dc9d88f8bb3ebd6732d_photo_0.webp', 0, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('875a5e4a8d4bde00b264a1e6', (SELECT id FROM products WHERE lower(sku) = lower('SM-56106')), 'adf26dcd88111dc9d88f8bb3ebd6732d_photo_2.webp', 1, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('a0ccd1f9c3daa84ee06f27e6', (SELECT id FROM products WHERE lower(sku) = lower('SM-56106')), 'adf26dcd88111dc9d88f8bb3ebd6732d_photo_3.webp', 2, '');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-56109'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('eedb69547b30e77f5cff1434', (SELECT id FROM products WHERE lower(sku) = lower('SM-56109')), '59977d5fed04f1b6d543ee2fae933792_photo_0.webp', 0, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('3fbc5c3882f9203d9f4142c3', (SELECT id FROM products WHERE lower(sku) = lower('SM-56109')), '59977d5fed04f1b6d543ee2fae933792_photo_2.webp', 1, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('368fa4ddea49ed0efe1af1b4', (SELECT id FROM products WHERE lower(sku) = lower('SM-56109')), '59977d5fed04f1b6d543ee2fae933792_photo_3.webp', 2, '');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-56111'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('cd4f080cf4e4517f42fe11ba', (SELECT id FROM products WHERE lower(sku) = lower('SM-56111')), 'dbeed44e29c197d2ec1a73d8782bf58e_photo_0.webp', 0, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('2bb7cc32314e53c0d8c2605b', (SELECT id FROM products WHERE lower(sku) = lower('SM-56111')), 'dbeed44e29c197d2ec1a73d8782bf58e_photo_2.webp', 1, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('52de06150134f32ca28ae080', (SELECT id FROM products WHERE lower(sku) = lower('SM-56111')), 'dbeed44e29c197d2ec1a73d8782bf58e_photo_3.webp', 2, '');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-56113'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('dd636a6dc079cf7e90bb7d76', (SELECT id FROM products WHERE lower(sku) = lower('SM-56113')), 'bac1729244e3fb10d36b251e7e598a24_photo_0.webp', 0, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('28dc696bf9730e214d6609a3', (SELECT id FROM products WHERE lower(sku) = lower('SM-56113')), 'bac1729244e3fb10d36b251e7e598a24_photo_2.webp', 1, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('8f3a68e42b61e9f2b74f391e', (SELECT id FROM products WHERE lower(sku) = lower('SM-56113')), 'bac1729244e3fb10d36b251e7e598a24_photo_3.webp', 2, '');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-56116'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('841507bb717fac1f608e8a42', (SELECT id FROM products WHERE lower(sku) = lower('SM-56116')), '0f0541863d91fd1e5f510285617b2716_photo_0.webp', 0, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('007c8af3e4e2ebb44a5e5425', (SELECT id FROM products WHERE lower(sku) = lower('SM-56116')), '0f0541863d91fd1e5f510285617b2716_photo_2.webp', 1, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('3a8d9649f438251c9c08b3f1', (SELECT id FROM products WHERE lower(sku) = lower('SM-56116')), '0f0541863d91fd1e5f510285617b2716_photo_3.webp', 2, '');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-56117'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('b8a4c264e5778da77b8df88e', (SELECT id FROM products WHERE lower(sku) = lower('SM-56117')), '707fe9f8143ee0be4922f2c15b8772f2_photo_0.webp', 0, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('cc01b99626437be014ec28f5', (SELECT id FROM products WHERE lower(sku) = lower('SM-56117')), '707fe9f8143ee0be4922f2c15b8772f2_photo_2.webp', 1, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('14eaa0ac18786288d8218572', (SELECT id FROM products WHERE lower(sku) = lower('SM-56117')), '707fe9f8143ee0be4922f2c15b8772f2_photo_3.webp', 2, '');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-56129'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('73e79166fce72745513f1b40', (SELECT id FROM products WHERE lower(sku) = lower('SM-56129')), '1691a734cdcbeff38d890ccf92543693_photo_0.webp', 0, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('26b4ec258b8f68531501f11d', (SELECT id FROM products WHERE lower(sku) = lower('SM-56129')), '1691a734cdcbeff38d890ccf92543693_photo_2.webp', 1, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('625f189ea07c57d92c7227c5', (SELECT id FROM products WHERE lower(sku) = lower('SM-56129')), '1691a734cdcbeff38d890ccf92543693_photo_3.webp', 2, '');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-56134'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('e3274d8951ca88c28ed31c51', (SELECT id FROM products WHERE lower(sku) = lower('SM-56134')), '08926021448340e25da7bcb04094aff9_photo_0.webp', 0, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('81c081ee9035a8cc12dbd984', (SELECT id FROM products WHERE lower(sku) = lower('SM-56134')), '08926021448340e25da7bcb04094aff9_photo_2.webp', 1, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('075e972851e4dbe5bbc4b863', (SELECT id FROM products WHERE lower(sku) = lower('SM-56134')), '08926021448340e25da7bcb04094aff9_photo_3.webp', 2, '');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-56140'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('4e47af0eb1c59df3a50484f7', (SELECT id FROM products WHERE lower(sku) = lower('SM-56140')), 'f48191dc2cf67efc397b2edf97318991_photo_0.webp', 0, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('dae89f2b4d175a4c8adfe5d9', (SELECT id FROM products WHERE lower(sku) = lower('SM-56140')), 'f48191dc2cf67efc397b2edf97318991_photo_2.webp', 1, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('6336524b59040dec6edba56b', (SELECT id FROM products WHERE lower(sku) = lower('SM-56140')), 'f48191dc2cf67efc397b2edf97318991_photo_3.webp', 2, '');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-56148'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('ff8ed906d05888108ccecade', (SELECT id FROM products WHERE lower(sku) = lower('SM-56148')), 'b56eedc13f4b1c6a63007044097891d9_photo_0.webp', 0, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('64e7a2343ee5a3aeac8bc0a5', (SELECT id FROM products WHERE lower(sku) = lower('SM-56148')), 'b56eedc13f4b1c6a63007044097891d9_photo_2.webp', 1, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('fab36883446a8eda7a498cde', (SELECT id FROM products WHERE lower(sku) = lower('SM-56148')), 'b56eedc13f4b1c6a63007044097891d9_photo_3.webp', 2, '');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-56149'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('5363b0e035a98daa39d0d063', (SELECT id FROM products WHERE lower(sku) = lower('SM-56149')), 'c0dd93ad9107fcdb79275a1517eda572_photo_0.webp', 0, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('cee162e3f0b93e2682e1ec19', (SELECT id FROM products WHERE lower(sku) = lower('SM-56149')), 'c0dd93ad9107fcdb79275a1517eda572_photo_2.webp', 1, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('b919709e9ab897c58b50420c', (SELECT id FROM products WHERE lower(sku) = lower('SM-56149')), 'c0dd93ad9107fcdb79275a1517eda572_photo_3.webp', 2, '');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-56152'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('0bfc4bb39f46abb8348a57af', (SELECT id FROM products WHERE lower(sku) = lower('SM-56152')), '55810a26362cb58343edc6d905c95ca5_photo_0.webp', 0, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('0f3e01e7743aa119eacbfe08', (SELECT id FROM products WHERE lower(sku) = lower('SM-56152')), '55810a26362cb58343edc6d905c95ca5_photo_2.webp', 1, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('66886645cebfbbbef944fc83', (SELECT id FROM products WHERE lower(sku) = lower('SM-56152')), 'b0144f8b2d9a207b44f05fe9f3bf1c24_photo_3.webp', 2, '');

DELETE FROM product_images WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-56189'));
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('e51d959c5edf69f2b53f6181', (SELECT id FROM products WHERE lower(sku) = lower('SM-56189')), '9001fef26d95d0a01e3222263c1bd8e3_photo_0.webp', 0, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('2cfd787f245e781c3ac2b63c', (SELECT id FROM products WHERE lower(sku) = lower('SM-56189')), '9001fef26d95d0a01e3222263c1bd8e3_photo_2.webp', 1, '');
INSERT INTO product_images (id, product_id, filename, sort_order, alt) VALUES ('6650a5c4397792aff22ea1c9', (SELECT id FROM products WHERE lower(sku) = lower('SM-56189')), '9001fef26d95d0a01e3222263c1bd8e3_photo_3.webp', 2, '');

DELETE FROM product_compatibility WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1001'));
INSERT INTO product_compatibility (id, product_id, brand, model) VALUES ('sm000000000000000000001c1', (SELECT id FROM products WHERE lower(sku) = lower('SM-1001')), 'Bosch', 'WAN 24260');

DELETE FROM product_compatibility WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1002'));
INSERT INTO product_compatibility (id, product_id, brand, model) VALUES ('sm000000000000000000002c1', (SELECT id FROM products WHERE lower(sku) = lower('SM-1002')), 'Samsung', 'WW70J');

DELETE FROM product_compatibility WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1003'));
INSERT INTO product_compatibility (id, product_id, brand, model) VALUES ('sm000000000000000000003c1', (SELECT id FROM products WHERE lower(sku) = lower('SM-1003')), 'Indesit', 'WIU 81');

DELETE FROM product_compatibility WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1004'));
INSERT INTO product_compatibility (id, product_id, brand, model) VALUES ('sm000000000000000000004c1', (SELECT id FROM products WHERE lower(sku) = lower('SM-1004')), 'Beko', 'WKB 51031');

DELETE FROM product_compatibility WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1005'));
INSERT INTO product_compatibility (id, product_id, brand, model) VALUES ('sm000000000000000000005c1', (SELECT id FROM products WHERE lower(sku) = lower('SM-1005')), 'Whirlpool', 'AWO 5100');

DELETE FROM product_compatibility WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1006'));
INSERT INTO product_compatibility (id, product_id, brand, model) VALUES ('sm000000000000000000006c1', (SELECT id FROM products WHERE lower(sku) = lower('SM-1006')), 'LG', 'F12B8');

DELETE FROM product_compatibility WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1007'));
INSERT INTO product_compatibility (id, product_id, brand, model) VALUES ('sm000000000000000000007c1', (SELECT id FROM products WHERE lower(sku) = lower('SM-1007')), 'Bosch', 'WAN 24260');

DELETE FROM product_compatibility WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1008'));
INSERT INTO product_compatibility (id, product_id, brand, model) VALUES ('sm000000000000000000008c1', (SELECT id FROM products WHERE lower(sku) = lower('SM-1008')), 'Samsung', 'WW80J');

DELETE FROM product_compatibility WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1009'));
INSERT INTO product_compatibility (id, product_id, brand, model) VALUES ('sm000000000000000000009c1', (SELECT id FROM products WHERE lower(sku) = lower('SM-1009')), 'Candy', 'CS34');

DELETE FROM product_compatibility WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1010'));
INSERT INTO product_compatibility (id, product_id, brand, model) VALUES ('sm000000000000000000010c1', (SELECT id FROM products WHERE lower(sku) = lower('SM-1010')), 'Ariston', 'ABS VLS');

DELETE FROM product_compatibility WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1011'));
INSERT INTO product_compatibility (id, product_id, brand, model) VALUES ('sm000000000000000000011c1', (SELECT id FROM products WHERE lower(sku) = lower('SM-1011')), 'Indesit', 'WIU 81');

DELETE FROM product_compatibility WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1012'));
INSERT INTO product_compatibility (id, product_id, brand, model) VALUES ('sm000000000000000000012c1', (SELECT id FROM products WHERE lower(sku) = lower('SM-1012')), 'Atlant', 'МХМ 2826');

DELETE FROM product_compatibility WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1013'));
INSERT INTO product_compatibility (id, product_id, brand, model) VALUES ('sm000000000000000000013c1', (SELECT id FROM products WHERE lower(sku) = lower('SM-1013')), 'Gorenje', 'NRK 6192');

DELETE FROM product_compatibility WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1014'));
INSERT INTO product_compatibility (id, product_id, brand, model) VALUES ('sm000000000000000000014c1', (SELECT id FROM products WHERE lower(sku) = lower('SM-1014')), 'Nord', 'ДХ 241');

DELETE FROM product_compatibility WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1015'));
INSERT INTO product_compatibility (id, product_id, brand, model) VALUES ('sm000000000000000000015c1', (SELECT id FROM products WHERE lower(sku) = lower('SM-1015')), 'Samsung', 'RB37');

DELETE FROM product_compatibility WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1016'));
INSERT INTO product_compatibility (id, product_id, brand, model) VALUES ('sm000000000000000000016c1', (SELECT id FROM products WHERE lower(sku) = lower('SM-1016')), 'Gefest', 'ПГ 3200');

DELETE FROM product_compatibility WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1017'));
INSERT INTO product_compatibility (id, product_id, brand, model) VALUES ('sm000000000000000000017c1', (SELECT id FROM products WHERE lower(sku) = lower('SM-1017')), 'Electrolux', 'EZB 3410');

DELETE FROM product_compatibility WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1018'));
INSERT INTO product_compatibility (id, product_id, brand, model) VALUES ('sm000000000000000000018c1', (SELECT id FROM products WHERE lower(sku) = lower('SM-1018')), 'Bosch', 'HBN 211');

DELETE FROM product_compatibility WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1019'));
INSERT INTO product_compatibility (id, product_id, brand, model) VALUES ('sm000000000000000000019c1', (SELECT id FROM products WHERE lower(sku) = lower('SM-1019')), 'Ariston', 'CLAS 24');

DELETE FROM product_compatibility WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1020'));
INSERT INTO product_compatibility (id, product_id, brand, model) VALUES ('sm000000000000000000020c1', (SELECT id FROM products WHERE lower(sku) = lower('SM-1020')), 'Baxi', 'Eco Four 24');

DELETE FROM product_compatibility WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1021'));
INSERT INTO product_compatibility (id, product_id, brand, model) VALUES ('sm000000000000000000021c1', (SELECT id FROM products WHERE lower(sku) = lower('SM-1021')), 'Atlantic', 'O''Pro 80');

DELETE FROM product_compatibility WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1022'));
INSERT INTO product_compatibility (id, product_id, brand, model) VALUES ('sm000000000000000000022c1', (SELECT id FROM products WHERE lower(sku) = lower('SM-1022')), 'Vaillant', 'turboTEC plus');

DELETE FROM product_compatibility WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1023'));
INSERT INTO product_compatibility (id, product_id, brand, model) VALUES ('sm000000000000000000023c1', (SELECT id FROM products WHERE lower(sku) = lower('SM-1023')), 'Service Shop', 'універсальне');

DELETE FROM product_compatibility WHERE product_id = (SELECT id FROM products WHERE lower(sku) = lower('SM-1024'));
INSERT INTO product_compatibility (id, product_id, brand, model) VALUES ('sm000000000000000000024c1', (SELECT id FROM products WHERE lower(sku) = lower('SM-1024')), 'LG', 'F12A8');

COMMIT;
