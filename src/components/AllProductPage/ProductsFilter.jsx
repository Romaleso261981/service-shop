"use client";

import { useLanguage } from "../../i18n/LanguageProvider";
import CatalogFilter from "./CatalogFilter";

const inputClass = "h-10 w-full border border-qgray-border px-3 text-xs outline-none focus:border-qyellow";

export default function ProductsFilter({ brands = [], query = {} }) {
  const { t } = useLanguage();
  return (
    <form action="/all-products" className="filter-widget mb-[30px] bg-white px-[30px] pt-[40px] pb-10">
      {query.category ? <input type="hidden" name="category" value={query.category} /> : null}
      <div className="filter-subject-item pb-10 border-b border-qgray-border">
        <h2 className="mb-[30px] text-base font-500 text-black">{t("productCategories")}</h2>
        <CatalogFilter />
      </div>
      <div className="filter-subject-item mt-10 border-b border-qgray-border pb-10">
        <h2 className="mb-4 text-base font-500 text-black">{t("search")}</h2>
        <input name="q" defaultValue={query.q || ""} placeholder={t("searchProduct")} className={inputClass} />
      </div>
      <div className="filter-subject-item mt-10 border-b border-qgray-border pb-10">
        <h2 className="mb-4 text-base font-500 text-black">{t("priceRange")}</h2>
        <div className="grid grid-cols-2 gap-2">
          <input name="min" defaultValue={query.min || ""} placeholder="₴" className={inputClass} />
          <input name="max" defaultValue={query.max || ""} placeholder="₴" className={inputClass} />
        </div>
      </div>
      <div className="filter-subject-item mt-10 border-b border-qgray-border pb-10">
        <h2 className="mb-4 text-base font-500 text-black">{t("brands")}</h2>
        <select name="brand" defaultValue={query.brand || ""} className={inputClass}>
          <option value="">{t("allCategories")}</option>
          {brands.map((item) => (
            <option key={item.brand} value={item.brand}>
              {item.brand} ({item.total})
            </option>
          ))}
        </select>
      </div>
      <div className="filter-subject-item mt-10 pb-6">
        <h2 className="mb-4 text-base font-500 text-black">{t("inStock")}</h2>
        <select name="stock" defaultValue={query.stock || ""} className={inputClass}>
          <option value="">{t("allCategories")}</option>
          <option value="in">{t("inStock")}</option>
          <option value="order">{t("onOrder")}</option>
          <option value="out">{t("outOfStock")}</option>
        </select>
      </div>
      <button type="submit" className="h-11 w-full bg-qyellow text-sm font-600">
        {t("search")}
      </button>
    </form>
  );
}
