"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { moneyToInput } from "../../lib/money";

const inputClass = "w-full h-11 border border-qgray-border px-3 outline-none focus:border-qyellow";

const emptyForm = {
  id: null,
  title: "",
  sku: "",
  slug: "",
  category_id: "",
  brand: "",
  manufacturer: "",
  price: "",
  sale_price: "",
  stock_status: "in",
  stock_qty: 0,
  lead_time: "",
  warranty: "",
  description: "",
  specs: [{ name: "", value: "" }],
  compatibility: [{ brand: "", model: "" }],
  seo_title: "",
  seo_description: "",
  status: "active",
  images: [],
};

function flatten(nodes, depth = 0, list = []) {
  nodes.forEach((node) => {
    list.push({ ...node, depth });
    flatten(node.children || [], depth + 1, list);
  });
  return list;
}

function formFromProduct(product) {
  return {
    id: product.id,
    title: product.title || "",
    sku: product.sku || "",
    slug: product.slug || "",
    category_id: product.category_id || "",
    brand: product.brand || "",
    manufacturer: product.manufacturer || "",
    price: moneyToInput(product.price_amount),
    sale_price: moneyToInput(product.sale_price_amount),
    stock_status: product.stock || "in",
    stock_qty: product.stock_qty ?? 0,
    lead_time: product.lead_time || "",
    warranty: product.warranty || "",
    description: product.description || "",
    specs: product.specs?.length ? product.specs : [{ name: "", value: "" }],
    compatibility: product.compatibility?.length ? product.compatibility : [{ brand: "", model: "" }],
    seo_title: product.seo_title || "",
    seo_description: product.seo_description || "",
    status: product.status || "active",
    images: product.images || [],
  };
}

export default function AdminPanel() {
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [form, setForm] = useState(null);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [tab, setTab] = useState("products");
  const [categoryName, setCategoryName] = useState("");
  const [categoryParent, setCategoryParent] = useState("");
  const [importFile, setImportFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [importing, setImporting] = useState(false);

  const flat = useMemo(() => flatten(categories), [categories]);

  async function load(search = query) {
    const [productsResponse, usersResponse] = await Promise.all([
      fetch(`/api/admin/products?q=${encodeURIComponent(search)}`),
      fetch("/api/admin/users"),
    ]);
    if (productsResponse.status === 401) {
      setAuthed(false);
      setReady(true);
      return;
    }
    const data = await productsResponse.json();
    const usersData = await usersResponse.json().catch(() => ({}));
    setProducts(data.products || []);
    setTotal(data.total || 0);
    setImages(data.images || []);
    setCategories(data.categories || []);
    setCustomers(usersData.users || []);
    setAuthed(true);
    setReady(true);
  }

  useEffect(() => {
    load("");
  }, []);

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
    await load("");
  }

  async function changeStatus(user, status) {
    setError("");
    const response = await fetch(`/api/admin/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      setError(data.error || "Не вдалося змінити статус");
      return;
    }
    setCustomers((current) =>
      current.map((item) => (item.id === user.id ? { ...item, status: data.user.status } : item))
    );
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
    if (!file || !form) return;
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
    update("images", [...form.images, data.image].filter((name, index, all) => all.indexOf(name) === index));
  }

  async function save(event) {
    event.preventDefault();
    setSaving(true);
    setError("");
    const response = await fetch(form.id ? `/api/admin/products/${form.id}` : "/api/admin/products", {
      method: form.id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        price: form.price,
        sale_price: form.sale_price,
        category_id: form.category_id || null,
      }),
    });
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
    const response = await fetch(`/api/admin/products/${product.id}`, { method: "DELETE" });
    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      setError(data.error || "Не вдалося видалити");
      return;
    }
    if (form?.id === product.id) setForm(null);
    await load();
  }

  async function addCategory(event) {
    event.preventDefault();
    setError("");
    const response = await fetch("/api/admin/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: categoryName, parent_id: categoryParent || null }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      setError(data.error || "Не вдалося додати категорію");
      return;
    }
    setCategoryName("");
    await load();
  }

  async function renameCategory(item) {
    const name = window.prompt("Нова назва", item.name);
    if (!name || name === item.name) return;
    const response = await fetch(`/api/admin/categories/${item.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      setError(data.error || "Не вдалося перейменувати");
      return;
    }
    await load();
  }

  async function removeCategory(item) {
    if (!window.confirm(`Видалити категорію «${item.name}»?`)) return;
    const response = await fetch(`/api/admin/categories/${item.id}`, { method: "DELETE" });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      setError(data.error || "Не вдалося видалити категорію");
      return;
    }
    await load();
  }

  async function sendImport(mode) {
    if (!importFile) return;
    setImporting(true);
    setError("");
    const body = new FormData();
    body.append("file", importFile);
    body.append("mode", mode);
    const response = await fetch("/api/admin/import", { method: "POST", body });
    const data = await response.json().catch(() => ({}));
    setImporting(false);
    if (!response.ok) {
      setError(data.error || "Імпорт не вдався");
      return;
    }
    if (mode === "apply") {
      setPreview(null);
      setImportFile(null);
      setTab("products");
      await load("");
      setError("");
      window.alert(`Створено: ${data.applied.created}. Оновлено: ${data.applied.updated}. Помилок: ${data.applied.failed.length}.`);
      return;
    }
    setPreview(data);
  }

  if (!ready) return <main className="min-h-screen bg-[#f7f7f7] p-10 text-qblack">Завантаження…</main>;

  if (!authed) {
    return (
      <main className="min-h-screen bg-[#f7f7f7] flex items-center justify-center px-4">
        <form onSubmit={login} className="w-full max-w-md bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-600 mb-2">Адмінка</h1>
          <p className="text-sm text-qgray mb-6">Вхід, щоб керувати товарами магазину.</p>
          <label className="block text-sm mb-2" htmlFor="password">Пароль</label>
          <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full h-12 border border-qgray-border px-4 mb-4 outline-none focus:border-qyellow" />
          {error && <p className="text-sm text-qred mb-4">{error}</p>}
          <button type="submit" className="w-full h-12 bg-qyellow font-600">Увійти</button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f7f7] text-qblack">
      <header className="bg-white border-b border-qgray-border">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-600">Каталог</h1>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/" className="hover:text-qyellow">До магазину</Link>
            <button type="button" onClick={logout} className="hover:text-qyellow">Вийти</button>
          </div>
        </div>
      </header>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {error && <p className="mb-4 text-sm text-qred">{error}</p>}
        <div className="mb-6 flex gap-2">
          {[
            ["products", "Товари"],
            ["categories", "Категорії"],
            ["import", "Імпорт"],
          ].map(([id, label]) => (
            <button key={id} type="button" onClick={() => setTab(id)} className={`h-10 px-4 ${tab === id ? "bg-qyellow" : "bg-white border border-qgray-border"}`}>
              {label}
            </button>
          ))}
        </div>

        {tab === "products" && (
          <>
            <section className="bg-white border border-qgray-border mb-8">
              <div className="px-4 py-4 border-b border-qgray-border flex items-center justify-between">
                <h2 className="text-lg font-600">Користувачі</h2>
                <p className="text-sm text-qgray">Зареєстровано: {customers.length}</p>
              </div>
              {customers.length === 0 ? (
                <p className="px-4 py-6 text-sm text-qgray">Поки ніхто не зареєструвався.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="text-left text-qgray">
                      <tr>
                        <th className="px-4 py-3 font-500">Імʼя</th>
                        <th className="px-4 py-3 font-500">Пошта</th>
                        <th className="px-4 py-3 font-500">Телефон</th>
                        <th className="px-4 py-3 font-500">Тип</th>
                        <th className="px-4 py-3 font-500">Статус</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customers.map((user) => (
                        <tr key={user.id} className="border-t border-qgray-border">
                          <td className="px-4 py-3">{user.name}</td>
                          <td className="px-4 py-3">{user.email}</td>
                          <td className="px-4 py-3">{user.phone || "—"}</td>
                          <td className="px-4 py-3">{user.role === "wholesale" ? "Опт" : "Роздріб"}</td>
                          <td className="px-4 py-3">
                            <select value={user.status === "admin" ? "admin" : "customer"} onChange={(event) => changeStatus(user, event.target.value)} className="h-9 border border-qgray-border px-2 bg-white">
                              <option value="customer">Клієнт</option>
                              <option value="admin">Адмін</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-5">
              <form
                className="flex gap-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  load(query);
                }}
              >
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Пошук за назвою, артикулом або брендом" className="h-11 sm:w-80 border border-qgray-border px-4 outline-none focus:border-qyellow" />
                <button type="submit" className="h-11 px-4 border border-qgray-border bg-white">Знайти</button>
              </form>
              <button type="button" onClick={() => { setError(""); setForm({ ...emptyForm }); }} className="h-11 px-5 bg-qyellow font-600">Додати товар</button>
            </div>
            <p className="mb-4 text-sm text-qgray">У базі: {total}. Показано: {products.length}.</p>
            {form && (
              <form onSubmit={save} className="bg-white p-6 mb-6 shadow-sm grid md:grid-cols-2 gap-4">
                <h2 className="md:col-span-2 text-lg font-600">{form.id ? "Редагувати товар" : "Новий товар"}</h2>
                <Field label="Назва"><input required value={form.title} onChange={(event) => update("title", event.target.value)} className={inputClass} /></Field>
                <Field label="Артикул"><input required value={form.sku} onChange={(event) => update("sku", event.target.value)} className={inputClass} /></Field>
                <Field label="Адреса (slug)"><input value={form.slug} onChange={(event) => update("slug", event.target.value)} placeholder="Заповниться з назви" className={inputClass} /></Field>
                <Field label="Категорія">
                  <select value={form.category_id} onChange={(event) => update("category_id", event.target.value)} className={inputClass}>
                    <option value="">Без категорії</option>
                    {flat.map((item) => (
                      <option key={item.id} value={item.id}>{"— ".repeat(item.depth)}{item.name}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Бренд"><input value={form.brand} onChange={(event) => update("brand", event.target.value)} className={inputClass} /></Field>
                <Field label="Виробник"><input value={form.manufacturer} onChange={(event) => update("manufacturer", event.target.value)} className={inputClass} /></Field>
                <Field label="Ціна, грн"><input required value={form.price} onChange={(event) => update("price", event.target.value)} placeholder="1150 або 1150.50" className={inputClass} /></Field>
                <Field label="Акційна ціна, грн"><input value={form.sale_price} onChange={(event) => update("sale_price", event.target.value)} className={inputClass} /></Field>
                <Field label="Наявність">
                  <select value={form.stock_status} onChange={(event) => update("stock_status", event.target.value)} className={inputClass}>
                    <option value="in">В наявності</option>
                    <option value="order">Під замовлення</option>
                    <option value="out">Немає в наявності</option>
                  </select>
                </Field>
                <Field label="Залишок"><input type="number" min="0" value={form.stock_qty} onChange={(event) => update("stock_qty", event.target.value)} className={inputClass} /></Field>
                <Field label="Термін поставки"><input value={form.lead_time} onChange={(event) => update("lead_time", event.target.value)} placeholder="1–3 дні" className={inputClass} /></Field>
                <Field label="Гарантія"><input value={form.warranty} onChange={(event) => update("warranty", event.target.value)} className={inputClass} /></Field>
                <Field label="Статус">
                  <select value={form.status} onChange={(event) => update("status", event.target.value)} className={inputClass}>
                    <option value="active">Активний</option>
                    <option value="inactive">Неактивний</option>
                  </select>
                </Field>
                <Field label="SEO title"><input value={form.seo_title} onChange={(event) => update("seo_title", event.target.value)} className={inputClass} /></Field>
                <label className="block text-sm md:col-span-2">
                  <span className="block mb-1">SEO description</span>
                  <textarea value={form.seo_description} onChange={(event) => update("seo_description", event.target.value)} rows={2} className="w-full border border-qgray-border px-3 py-2 outline-none focus:border-qyellow" />
                </label>
                <label className="block text-sm md:col-span-2">
                  <span className="block mb-1">Опис</span>
                  <textarea value={form.description} onChange={(event) => update("description", event.target.value)} rows={4} className="w-full border border-qgray-border px-3 py-2 outline-none focus:border-qyellow" />
                </label>
                <div className="md:col-span-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Фото</span>
                    <label className="text-sm cursor-pointer hover:text-qyellow">
                      Завантажити
                      <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={upload} className="hidden" />
                    </label>
                  </div>
                  <div className="flex gap-2 mb-3">
                    <select value="" onChange={(event) => event.target.value && update("images", [...form.images, event.target.value])} className={inputClass}>
                      <option value="">Додати з наявних файлів</option>
                      {images.map((image) => <option key={image} value={image}>{image}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {form.images.map((image, index) => (
                      <div key={image} className="w-24">
                        <img src={`/assets/images/${image}`} alt="" className="h-24 w-24 object-contain border border-qgray-border bg-white" />
                        <button type="button" className="mt-1 text-xs hover:text-qyellow" onClick={() => update("images", [image, ...form.images.filter((item) => item !== image)])}>
                          {index === 0 ? "Головне" : "Зробити головним"}
                        </button>
                        <button type="button" className="block text-xs text-qred" onClick={() => update("images", form.images.filter((item) => item !== image))}>Прибрати</button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Характеристики</span>
                    <button type="button" className="text-sm hover:text-qyellow" onClick={() => update("specs", [...form.specs, { name: "", value: "" }])}>Додати рядок</button>
                  </div>
                  <div className="space-y-2">
                    {form.specs.map((row, index) => (
                      <div key={index} className="grid grid-cols-[1fr_1fr_auto] gap-2">
                        <input value={row.name} placeholder="Назва" onChange={(event) => update("specs", form.specs.map((item, itemIndex) => itemIndex === index ? { ...item, name: event.target.value } : item))} className={inputClass} />
                        <input value={row.value} placeholder="Значення" onChange={(event) => update("specs", form.specs.map((item, itemIndex) => itemIndex === index ? { ...item, value: event.target.value } : item))} className={inputClass} />
                        <button type="button" className="px-3 text-qred" onClick={() => update("specs", form.specs.length === 1 ? [{ name: "", value: "" }] : form.specs.filter((_, itemIndex) => itemIndex !== index))}>×</button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Сумісні моделі</span>
                    <button type="button" className="text-sm hover:text-qyellow" onClick={() => update("compatibility", [...form.compatibility, { brand: "", model: "" }])}>Додати модель</button>
                  </div>
                  <div className="space-y-2">
                    {form.compatibility.map((row, index) => (
                      <div key={index} className="grid grid-cols-[1fr_1fr_auto] gap-2">
                        <input value={row.brand} placeholder="Бренд техніки" onChange={(event) => update("compatibility", form.compatibility.map((item, itemIndex) => itemIndex === index ? { ...item, brand: event.target.value } : item))} className={inputClass} />
                        <input value={row.model} placeholder="Модель" onChange={(event) => update("compatibility", form.compatibility.map((item, itemIndex) => itemIndex === index ? { ...item, model: event.target.value } : item))} className={inputClass} />
                        <button type="button" className="px-3 text-qred" onClick={() => update("compatibility", form.compatibility.length === 1 ? [{ brand: "", model: "" }] : form.compatibility.filter((_, itemIndex) => itemIndex !== index))}>×</button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2 flex gap-3">
                  <button type="submit" disabled={saving} className="h-11 px-5 bg-qyellow font-600">{saving ? "Збереження…" : "Зберегти"}</button>
                  <button type="button" onClick={() => setForm(null)} className="h-11 px-5 border border-qgray-border">Скасувати</button>
                </div>
              </form>
            )}
            <div className="bg-white shadow-sm overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#fafafa] text-left">
                  <tr>
                    <th className="p-3 font-500">Фото</th>
                    <th className="p-3 font-500">Назва</th>
                    <th className="p-3 font-500">Артикул</th>
                    <th className="p-3 font-500">Ціна</th>
                    <th className="p-3 font-500"></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-t border-qgray-border">
                      <td className="p-3">{product.image ? <img src={`/assets/images/${product.image}`} alt="" className="h-14 w-14 object-contain" /> : null}</td>
                      <td className="p-3 max-w-xs">
                        <p>{product.title}</p>
                        {product.status === "inactive" && <p className="text-xs text-qred">Неактивний</p>}
                      </td>
                      <td className="p-3">{product.sku}</td>
                      <td className="p-3 whitespace-nowrap">
                        {product.price ? <span className="text-qgray line-through mr-2">{product.price}</span> : null}
                        <span className="text-qred">{product.offer_price}</span>
                      </td>
                      <td className="p-3 whitespace-nowrap text-right">
                        <button type="button" onClick={() => { setError(""); setForm(formFromProduct(product)); }} className="mr-3 hover:text-qyellow">Змінити</button>
                        <button type="button" onClick={() => remove(product)} className="text-qred">Видалити</button>
                      </td>
                    </tr>
                  ))}
                  {products.length === 0 && (
                    <tr><td colSpan="5" className="p-6 text-qgray">Товарів ще немає. Додайте вручну або імпортуйте JSON.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}

        {tab === "categories" && (
          <section className="bg-white p-6 shadow-sm">
            <form onSubmit={addCategory} className="grid md:grid-cols-[1fr_1fr_auto] gap-3 mb-6">
              <input value={categoryName} onChange={(event) => setCategoryName(event.target.value)} placeholder="Назва категорії" className={inputClass} required />
              <select value={categoryParent} onChange={(event) => setCategoryParent(event.target.value)} className={inputClass}>
                <option value="">Корінь меню</option>
                {flat.map((item) => <option key={item.id} value={item.id}>{"— ".repeat(item.depth)}{item.name}</option>)}
              </select>
              <button type="submit" className="h-11 px-5 bg-qyellow font-600">Додати</button>
            </form>
            <ul className="divide-y divide-qgray-border">
              {flat.map((item) => (
                <li key={item.id} className="flex items-center justify-between gap-3 py-2" style={{ paddingLeft: item.depth * 16 }}>
                  <span className="text-sm">{item.name}</span>
                  <span className="flex gap-3 text-sm">
                    <button type="button" onClick={() => renameCategory(item)} className="hover:text-qyellow">Перейменувати</button>
                    <button type="button" onClick={() => removeCategory(item)} className="text-qred">Видалити</button>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {tab === "import" && (
          <section className="bg-white p-6 shadow-sm">
            <h2 className="text-lg font-600 mb-2">Імпорт JSON</h2>
            <p className="text-sm text-qgray mb-4">
              Файл з полем products. Однаковий артикул оновлює товар, новий артикул створює. Ціна — число в гривнях. Категорія — назва з меню, або category, subcategory і part, або category_path.
            </p>
            <pre className="mb-4 overflow-x-auto bg-[#f7f7f7] p-4 text-xs leading-5">{`{
  "products": [{
    "sku": "PUMP-30",
    "title": "Зливний насос 30 Вт",
    "category": "Для крупной техники",
    "subcategory": "Запчасти для стиральных машин",
    "part": "Насосы (помпы)",
    "brand": "Bosch",
    "price": 1150,
    "sale_price": 890,
    "stock_status": "in",
    "stock_qty": 4,
    "lead_time": "1-2 дні",
    "images": ["part-pump.jpg"],
    "specs": [{ "name": "Потужність", "value": "30 Вт" }],
    "compatibility": [{ "brand": "Bosch", "model": "WAT 2040" }]
  }]
}`}</pre>
            <input type="file" accept="application/json,.json" onChange={(event) => { setImportFile(event.target.files?.[0] || null); setPreview(null); }} className="mb-4 block" />
            <div className="flex gap-3 mb-6">
              <button type="button" disabled={!importFile || importing} onClick={() => sendImport("preview")} className="h-11 px-5 border border-qgray-border">Перевірити</button>
              <button type="button" disabled={!preview || preview.summary.invalid === preview.summary.total || importing} onClick={() => sendImport("apply")} className="h-11 px-5 bg-qyellow font-600">Імпортувати коректні</button>
            </div>
            {preview && (
              <div>
                <p className="mb-3 text-sm">
                  Усього {preview.summary.total}. Нових {preview.summary.create}. Оновлень {preview.summary.update}. З помилками {preview.summary.invalid}. Попереджень {preview.summary.warnings}.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody>
                      {preview.rows.map((row) => (
                        <tr key={`${row.line}-${row.sku}`} className="border-t border-qgray-border">
                          <td className="py-2 pr-3">{row.line}</td>
                          <td className="py-2 pr-3">{row.sku}</td>
                          <td className="py-2 pr-3">{row.title}</td>
                          <td className="py-2 pr-3">{row.action}</td>
                          <td className="py-2 text-qred">{row.errors.join("; ")}</td>
                          <td className="py-2 text-qgray">{row.warnings.join("; ")}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}

function Field({ label, children }) {
  return (
    <label className="block text-sm">
      <span className="block mb-1">{label}</span>
      {children}
    </label>
  );
}
