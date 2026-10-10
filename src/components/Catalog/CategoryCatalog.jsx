"use client";

import Link from "next/link";
import Layout from "../Partials/Layout";
import ProductCardStyleOne from "../Helpers/Cards/ProductCardStyleOne";
import { useLanguage } from "../../i18n/LanguageProvider";
import PartIcon from "./PartIcon";

export default function CategoryCatalog({ name, path, crumbs = [], children = [], products = [], total = 0 }) {
  const { t, category } = useLanguage();

  return (
    <Layout>
      <div className="container-x mx-auto">
        <nav className="mb-3 text-[13px] leading-5 text-qgray" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-qblack">
            {t("home")}
          </Link>
          {crumbs.map((crumb) => (
            <span key={crumb.path}>
              <span className="mx-1.5">/</span>
              <Link href={`/catalog/${crumb.path}`} className="hover:text-qblack">
                {category(crumb.name)}
              </Link>
            </span>
          ))}
          <span className="mx-1.5">/</span>
          <span>{category(name)}</span>
        </nav>
        <h1 className="mb-8 text-[24px] font-500 leading-tight text-qblack">{category(name)}</h1>
        {children.length ? (
          <ul className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
            {children.map((child) => (
              <li key={child.path} className="min-w-0">
                <Link
                  href={`/catalog/${child.path}`}
                  className="flex h-full min-h-[158px] flex-col items-center justify-center rounded-md border border-[#e6e6ea] bg-white px-3 py-5 text-center shadow-[0_1px_2px_rgba(17,17,17,0.04)] transition hover:border-qred hover:shadow-[0_0_0_1px_#EF262C]"
                >
                  <PartIcon name={child.name} />
                  <span className="mt-3 line-clamp-3 text-[12px] leading-4 text-qblack">
                    {category(child.name)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
        {products.length ? (
          <>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-500">{t("products")}</h2>
              {total > products.length ? (
                <Link href={`/all-products?category=${path}`} className="text-sm hover:text-qred">
                  {t("showAll")} ({total})
                </Link>
              ) : null}
            </div>
            <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
              {products.map((product) => (
                <ProductCardStyleOne key={product.id} datas={product} />
              ))}
            </div>
          </>
        ) : (
          <p className="text-sm text-qgray">{children.length ? "" : t("emptyCategory")}</p>
        )}
      </div>
    </Layout>
  );
}
