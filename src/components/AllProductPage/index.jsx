"use client";

import Link from "next/link";
import BreadcrumbCom from "../BreadcrumbCom";
import ProductCardStyleOne from "../Helpers/Cards/ProductCardStyleOne";
import Layout from "../Partials/Layout";
import ProductsFilter from "./ProductsFilter";
import { useLanguage } from "../../i18n/LanguageProvider";

function pageHref(query, page) {
  const params = new URLSearchParams();
  ["q", "brand", "min", "max", "stock", "category"].forEach((key) => {
    if (query?.[key]) params.set(key, query[key]);
  });
  if (page > 1) params.set("page", String(page));
  const text = params.toString();
  return text ? `/all-products?${text}` : "/all-products";
}

export default function AllProductPage({
  products = [],
  total = 0,
  page = 1,
  limit = 24,
  brands = [],
  query = {},
}) {
  const { t } = useLanguage();
  const from = total ? (page - 1) * limit + 1 : 0;
  const to = Math.min(total, page * limit);
  const pages = Math.max(1, Math.ceil(total / limit));

  return (
    <Layout>
      <div className="products-page-wrapper w-full">
        <div className="container-x mx-auto">
          <BreadcrumbCom />
          <div className="w-full lg:flex lg:space-x-[30px]">
            <div className="lg:w-[270px]">
              <ProductsFilter brands={brands} query={query} />
            </div>
            <div className="flex-1">
              <div className="products-sorting w-full bg-white md:h-[70px] flex md:flex-row flex-col md:space-y-0 space-y-5 md:justify-between md:items-center p-[30px] mb-[40px]">
                <p className="font-400 text-[13px]">
                  <span className="text-qgray">{t("showing")}</span> {from}–{to} {t("of")} {total}{" "}
                  {t("results")}
                </p>
              </div>
              {products.length ? (
                <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5 mb-[40px]">
                  {products.map((product) => (
                    <ProductCardStyleOne key={product.id} datas={product} />
                  ))}
                </div>
              ) : (
                <p className="mb-10 text-sm text-qgray">{t("emptyCategory")}</p>
              )}
              {pages > 1 ? (
                <div className="flex gap-2 mb-[40px]">
                  {Array.from({ length: pages }, (_, index) => index + 1)
                    .slice(0, 12)
                    .map((number) => (
                      <Link
                        key={number}
                        href={pageHref(query, number)}
                        className={`flex h-10 w-10 items-center justify-center border ${
                          number === page ? "border-qyellow bg-qyellow" : "border-qgray-border bg-white"
                        }`}
                      >
                        {number}
                      </Link>
                    ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
