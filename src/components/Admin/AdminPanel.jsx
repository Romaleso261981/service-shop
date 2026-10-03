"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const emptyForm = {
  id: null,
  title: "",
  title_en: "",
  title_ru: "",
  brand: "",
  price: "",
  offer_price: "",
  image: "",
  review: 5,
  campaingn_product: false,
  cam_product_available: "",
  cam_product_sale: "",
  product_type: "",
};

function formFromProduct(product) {
  return {
    id: product.id,
    title: product.title || "",
    title_en: product.title_en || "",
    title_ru: product.title_ru || "",
    brand: product.brand || "",
    price: product.price || "",
    offer_price: product.offer_price || "",
    image: product.image || "",
    review: product.review ?? 5,
    campaingn_product: Boolean(product.campaingn_product),
    cam_product_available: product.cam_product_available ?? "",
    cam_product_sale: product.cam_product_sale ?? "",
    product_type: product.product_type || "",
  };
}

export default function AdminPanel() {
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [form, setForm] = useState(null);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  async function load() {
    const response = await fetch("/api/admin/products");
    if (response.status === 401) {
      setAuthed(false);
      setReady(true);
      return;
    }
    const data = await response.json();
    setProducts(data.products || []);
    setImages(data.images || []);
    setAuthed(true);
    setReady(true);
  }

  useEffect(() => {
    load();
  }, []);

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return products;
    return products.filter((product) =>
      `${product.title} ${product.brand}`.toLowerCase().includes(needle)
    );
  }, [products, query]);

  const brands = useMemo(
    () => [...new Set(products.map((product) => product.brand).filter(Boolean))],
    [products]
  );

  async function login(event) {
    event.preventDefault();
    setError("");
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      setError(data.error || "Не вдалося увійти");
      return;
    }
    setPassword("");
    await load();
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthed(false);
    setForm(null);
    setProducts([]);
  }

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function upload(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    setError("");
    const body = new FormData();
    body.append("file", file);
    const response = await fetch("/api/admin/upload", { method: "POST", body });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      setError(data.error || "Не вдалося завантажити фото");
      return;
    }
    setImages((current) => [data.image, ...current.filter((name) => name !== data.image)]);
    update("image", data.image);
  }

  async function save(event) {
    event.preventDefault();
    setSaving(true);
    setError("");
    const response = await fetch(
      form.id ? `/api/admin/products/${form.id}` : "/api/admin/products",
      {
        method: form.id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );
    const data = await response.json().catch(() => ({}));
    setSaving(false);
    if (!response.ok) {
      setError(data.error || "Не вдалося зберегти");
      return;
    }
    setForm(null);
    await load();
  }

  async function remove(product) {
    if (!window.confirm(`Видалити «${product.title}»?`)) return;
    setError("");
    const response = await fetch(`/api/admin/products/${product.id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      setError(data.error || "Не вдалося видалити");
      return;
    }
    if (form?.id === product.id) setForm(null);
    await load();
  }

  if (!ready) {
    return <main className="min-h-screen bg-[#f7f7f7] p-10 text-qblack">Завантаження…</main>;
  }

  if (!authed) {
    return (
      <main className="min-h-screen bg-[#f7f7f7] flex items-center justify-center px-4">
        <form onSubmit={login} className="w-full max-w-md bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-600 mb-2">Адмінка</h1>
          <p className="text-sm text-qgray mb-6">Вхід, щоб керувати товарами магазину.</p>
          <label className="block text-sm mb-2" htmlFor="password">
            Пароль
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full h-12 border border-qgray-border px-4 mb-4 outline-none focus:border-qyellow"
          />
          {error && <p className="text-sm text-qred mb-4">{error}</p>}
          <button type="submit" className="w-full h-12 bg-qyellow font-600">
            Увійти
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f7f7] text-qblack">
      <header className="bg-white border-b border-qgray-border">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-600">Товари</h1>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/" className="hover:text-qyellow">
              До магазину
            </Link>
            <button type="button" onClick={logout} className="hover:text-qyellow">
              Вийти
            </button>
          </div>
        </div>
      </header>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {error && <p className="mb-4 text-sm text-qred">{error}</p>}
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-5">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Пошук за назвою або брендом"
            className="h-11 sm:w-80 border border-qgray-border px-4 outline-none focus:border-qyellow"
          />
          <button
            type="button"
            onClick={() => {
              setError("");
              setForm({
                ...emptyForm,
                image: images.find((name) => name.startsWith("part-")) || images[0] || "",
              });
            }}
            className="h-11 px-5 bg-qyellow font-600"
          >
            Додати товар
          </button>
        </div>

        {form && (
          <form onSubmit={save} className="bg-white p-6 mb-6 shadow-sm grid md:grid-cols-2 gap-4">
            <h2 className="md:col-span-2 text-lg font-600">
              {form.id ? "Редагувати товар" : "Новий товар"}
            </h2>
            <Field label="Назва">
              <input
                required
                value={form.title}
                onChange={(event) => update("title", event.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Бренд">
              <input
                required
                list="brands"
                value={form.brand}
                onChange={(event) => update("brand", event.target.value)}
                className={inputClass}
              />
              <datalist id="brands">
                {brands.map((brand) => (
                  <option key={brand} value={brand} />
                ))}
              </datalist>
            </Field>
            <Field label="Назва англійською">
              <input
                value={form.title_en}
                onChange={(event) => update("title_en", event.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Назва російською">
              <input
                value={form.title_ru}
                onChange={(event) => update("title_ru", event.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Стара ціна">
              <input
                value={form.price}
                onChange={(event) => update("price", event.target.value)}
                placeholder="1150"
                className={inputClass}
              />
            </Field>
            <Field label="Ціна продажу">
              <input
                required
                value={form.offer_price}
                onChange={(event) => update("offer_price", event.target.value)}
                placeholder="890"
                className={inputClass}
              />
            </Field>
            <Field label="Фото">
              <select
                value={form.image}
                onChange={(event) => update("image", event.target.value)}
                className={inputClass}
              >
                <option value="">Оберіть фото</option>
                {images.map((image) => (
                  <option key={image} value={image}>
                    {image}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Або завантажити нове фото">
              <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={upload} />
            </Field>
            {form.image && (
              <div className="md:col-span-2">
                <img
                  src={`/assets/images/${form.image}`}
                  alt=""
                  className="h-28 w-28 object-cover border border-qgray-border"
                />
              </div>
            )}
            <Field label="Оцінка, 0–5">
              <input
                type="number"
                min="0"
                max="5"
                value={form.review}
                onChange={(event) => update("review", event.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Мітка">
              <select
                value={form.product_type}
                onChange={(event) => update("product_type", event.target.value)}
                className={inputClass}
              >
                <option value="">Без мітки</option>
                <option value="popular">Popular</option>
                <option value="new">New</option>
              </select>
            </Field>
            <label className="flex items-center gap-2 text-sm md:col-span-2">
              <input
                type="checkbox"
                checked={form.campaingn_product}
                onChange={(event) => update("campaingn_product", event.target.checked)}
              />
              Показати смугу наявності
            </label>
            {form.campaingn_product && (
              <>
                <Field label="Залишок">
                  <input
                    type="number"
                    min="0"
                    value={form.cam_product_available}
                    onChange={(event) => update("cam_product_available", event.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field label="Продано">
                  <input
                    type="number"
                    min="0"
                    value={form.cam_product_sale}
                    onChange={(event) => update("cam_product_sale", event.target.value)}
                    className={inputClass}
                  />
                </Field>
              </>
            )}
            <div className="md:col-span-2 flex gap-3">
              <button type="submit" disabled={saving} className="h-11 px-5 bg-qyellow font-600">
                {saving ? "Збереження…" : "Зберегти"}
              </button>
              <button type="button" onClick={() => setForm(null)} className="h-11 px-5 border border-qgray-border">
                Скасувати
              </button>
            </div>
          </form>
        )}

        <div className="bg-white shadow-sm overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#fafafa] text-left">
              <tr>
                <th className="p-3 font-500">Фото</th>
                <th className="p-3 font-500">Назва</th>
                <th className="p-3 font-500">Бренд</th>
                <th className="p-3 font-500">Ціна</th>
                <th className="p-3 font-500"></th>
              </tr>
            </thead>
            <tbody>
              {visible.map((product) => (
                <tr key={product.id} className="border-t border-qgray-border">
                  <td className="p-3">
                    <img
                      src={`/assets/images/${product.image}`}
                      alt=""
                      className="h-14 w-14 object-cover"
                    />
                  </td>
                  <td className="p-3 max-w-xs">{product.title}</td>
                  <td className="p-3">{product.brand}</td>
                  <td className="p-3 whitespace-nowrap">
                    <span className="text-qgray line-through mr-2">{product.price}</span>
                    <span className="text-qred">{product.offer_price}</span>
                  </td>
                  <td className="p-3 whitespace-nowrap text-right">
                    <button
                      type="button"
                      onClick={() => {
                        setError("");
                        setForm(formFromProduct(product));
                      }}
                      className="mr-3 hover:text-qyellow"
                    >
                      Змінити
                    </button>
                    <button
                      type="button"
                      onClick={() => remove(product)}
                      className="text-qred"
                    >
                      Видалити
                    </button>
                  </td>
                </tr>
              ))}
              {visible.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-6 text-qgray">
                    Нічого не знайдено
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

const inputClass = "w-full h-11 border border-qgray-border px-3 outline-none focus:border-qyellow";

function Field({ label, children }) {
  return (
    <label className="block text-sm">
      <span className="block mb-1">{label}</span>
      {children}
    </label>
  );
}
