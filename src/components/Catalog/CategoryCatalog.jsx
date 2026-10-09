"use client";

import Link from "next/link";
import Layout from "../Partials/Layout";
import { useLanguage } from "../../i18n/LanguageProvider";
import { categorySlug } from "../../lib/categorySlug";
import PartIcon from "./PartIcon";

export default function CategoryCatalog({ name, parent, childNames }) {
  const { t, category } = useLanguage();
  const children = childNames || [];

  return (
    <Layout>
      <div className="container-x mx-auto">
        <nav className="mb-3 text-[13px] leading-5 text-qgray" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-qblack">
            {t("home")}
          </Link>
          {parent ? (
            <>
              <span className="mx-1.5">/</span>
              <Link href={`/catalog/${parent.slug}`} className="hover:text-qblack">
                {category(parent.name)}
              </Link>
            </>
          ) : null}
          <span className="mx-1.5">/</span>
          <span>{category(name)}</span>
        </nav>
        <h1 className="mb-8 text-[24px] font-500 leading-tight text-qblack">{category(name)}</h1>
        {children.length ? (
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
            {children.map((child) => (
              <li key={child} className="min-w-0">
                <Link
                  href={`/catalog/${categorySlug(child)}`}
                  className="flex h-full min-h-[158px] flex-col items-center justify-center rounded-md border border-[#e6e6ea] bg-white px-3 py-5 text-center shadow-[0_1px_2px_rgba(17,17,17,0.04)] transition hover:border-qred hover:shadow-[0_0_0_1px_#EF262C]"
                >
                  <PartIcon name={child} />
                  <span className="mt-3 line-clamp-3 text-[12px] leading-4 text-qblack">
                    {category(child)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-qgray">{t("noSubcategories")}</p>
        )}
      </div>
    </Layout>
  );
}
