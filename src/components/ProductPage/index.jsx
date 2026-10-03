"use client";

import { useMemo, useState } from "react";
import Layout from "../Partials/Layout";
import BreadcrumbCom from "../BreadcrumbCom";
import { useLanguage } from "../../i18n/LanguageProvider";
import { stockText } from "../Helpers/ProductFacts";

export default function ProductPage({ product }) {
  const { t, itemTitle } = useLanguage();
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
        <BreadcrumbCom
          paths={[
            { name: "home", path: "/" },
            { name: "single product", path: `/product/${product.id}` },
          ]}
        />
        <div className="bg-white p-6 lg:p-10 grid lg:grid-cols-2 gap-10">
          <div className="bg-[#f7f7f7] flex items-center justify-center min-h-[360px]">
            <img
              src={`/assets/images/${product.image}`}
              alt=""
              className="max-h-[420px] w-full object-contain"
            />
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
