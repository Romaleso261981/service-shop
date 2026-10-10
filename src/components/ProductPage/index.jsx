"use client";

import { useMemo, useState } from "react";
import Layout from "../Partials/Layout";
import { useLanguage } from "../../i18n/LanguageProvider";
import { stockText } from "../Helpers/ProductFacts";

export default function ProductPage({ product }) {
  const { t, itemTitle, category } = useLanguage();
  const photos = product.images?.length ? product.images : product.image ? [product.image] : [];
  const [photo, setPhoto] = useState(photos[0] || "");
  const [modelQuery, setModelQuery] = useState("");
  const models = useMemo(
    () =>
      String(product.compatible || "")
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
    [product.compatible]
  );
  const visibleModels = models.filter((line) =>
    line.toLowerCase().includes(modelQuery.trim().toLowerCase())
  );
  const stock = stockText(product.stock, t);

  return (
    <Layout>
      <div className="container-x mx-auto pb-16">
        <nav className="mb-3 text-[13px] leading-5 text-qgray" aria-label="Breadcrumb">
          <a href="/" className="hover:text-qblack">
            {t("home")}
          </a>
          {(product.category_chain || []).map((crumb) => (
            <span key={crumb.path}>
              <span className="mx-1.5">/</span>
              <a href={`/catalog/${crumb.path}`} className="hover:text-qblack">
                {category(crumb.name)}
              </a>
            </span>
          ))}
        </nav>
        <div className="bg-white p-6 lg:p-10 grid lg:grid-cols-2 gap-10">
          <div>
            <div className="bg-[#f7f7f7] flex items-center justify-center min-h-[360px]">
              {photo ? (
                <img src={`/assets/images/${photo}`} alt="" className="max-h-[420px] w-full object-contain" />
              ) : null}
            </div>
            {photos.length > 1 ? (
              <div className="mt-3 flex gap-2 flex-wrap">
                {photos.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setPhoto(item)}
                    className={`h-[88px] w-[88px] border bg-white p-2 ${item === photo ? "border-qred" : "border-qgray-border"}`}
                  >
                    <img src={`/assets/images/${item}`} alt="" className="h-full w-full object-contain" />
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          <div>
            <h1 className="text-2xl font-600 leading-8 mb-4">{itemTitle(product)}</h1>
            <div className="text-sm text-qgray space-y-1 mb-5">
              {stock && (
                <p className={product.stock === "out" ? "text-qred" : "text-[#1a7f37]"}>
                  {stock}
                </p>
              )}
              {product.sku && (
                <p>
                  {t("article")}: {product.sku}
                </p>
              )}
              {product.code && (
                <p>
                  {t("productCode")}: {product.code}
                </p>
              )}
              {product.brand && (
                <p>
                  {t("brand")}: {product.brand}
                </p>
              )}
              {product.manufacturer && (
                <p>
                  {t("manufacturer")}: {product.manufacturer}
                </p>
              )}
              {product.warranty && (
                <p>
                  {t("warranty")}: {product.warranty}
                </p>
              )}
              {Number.isInteger(product.stock_qty) ? (
                <p>
                  {t("stockQty")}: {product.stock_qty}
                </p>
              ) : null}
              {product.lead_time ? (
                <p>
                  {t("leadTime")}: {product.lead_time}
                </p>
              ) : null}
            </div>
            <div className="flex items-end gap-3 mb-6">
              {product.price && product.price !== product.offer_price && (
                <span className="text-qgray line-through text-lg">{product.price}</span>
              )}
              <span className="text-qred text-3xl font-600">{product.offer_price}</span>
            </div>
            <button type="button" className="h-12 px-8 bg-qyellow font-600">
              {t("buy")}
            </button>
          </div>
        </div>

        {(product.description || product.specs?.length > 0) && (
          <div className="bg-white mt-8 p-6 lg:p-10">
            <h2 className="text-xl font-600 mb-6">{t("descriptionAndSpecs")}</h2>
            {product.description && (
              <div className="mb-8">
                <h3 className="font-600 mb-3">{t("description")}</h3>
                <p className="text-sm text-qgray leading-7 whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            )}
            {product.specs?.length > 0 && (
              <div>
                <h3 className="font-600 mb-3">{t("specifications")}</h3>
                <div className="border border-qgray-border">
                  {product.specs.map((row) => (
                    <div
                      key={`${row.name}-${row.value}`}
                      className="grid sm:grid-cols-2 border-b border-qgray-border last:border-b-0"
                    >
                      <p className="p-3 text-sm font-500">{row.name}</p>
                      <p className="p-3 text-sm text-qgray">{row.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {models.length > 0 && (
          <div className="bg-white mt-8 p-6 lg:p-10">
            <h2 className="text-xl font-600 mb-4">{t("compatibility")}</h2>
            <input
              value={modelQuery}
              onChange={(event) => setModelQuery(event.target.value)}
              placeholder={t("modelSearch")}
              className="h-11 w-full sm:w-96 border border-qgray-border px-4 mb-4 outline-none focus:border-qyellow"
            />
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {visibleModels.map((line) => (
                <li key={line} className="border border-qgray-border px-3 py-2 text-sm">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Layout>
  );
}
