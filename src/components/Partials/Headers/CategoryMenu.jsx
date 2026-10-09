"use client";
import { useState } from "react";
import Link from "next/link";
import { categories } from "../../../data/categories";
import { useLanguage } from "../../../i18n/LanguageProvider";
import { categorySlug } from "../../../lib/categorySlug";
import CategoryIcon from "./CategoryIcon";

function catalogHref(name) {
  return `/catalog/${categorySlug(name)}`;
}

function partName(part) {
  return typeof part === "string" ? part : part.name;
}

function Chevron() {
  return (
    <svg
      className="fill-current shrink-0"
      width="6"
      height="9"
      viewBox="0 0 6 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="1.49805"
        y="0.818359"
        width="5.78538"
        height="1.28564"
        transform="rotate(45 1.49805 0.818359)"
      />
      <rect
        x="5.58984"
        y="4.90918"
        width="5.78538"
        height="1.28564"
        transform="rotate(135 5.58984 4.90918)"
      />
    </svg>
  );
}

function rowClass(active) {
  return `flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-xs leading-4 text-qblack ${
    active ? "bg-[#f3f3f5]" : "hover:bg-[#f7f7f8]"
  }`;
}

function MegaMenu() {
  const { category: label } = useLanguage();
  const initial = categories.find((item) => item.children?.length) || categories[0];
  const initialChild =
    initial.children?.find((item) => item.children?.length) || initial.children?.[0];
  const [activeName, setActiveName] = useState(initial.name);
  const [activeChildName, setActiveChildName] = useState(initialChild?.name || "");
  const active = categories.find((item) => item.name === activeName) || initial;
  const activeChild = active.children?.find((item) => item.name === activeChildName);
  const parts = activeChild?.children || [];

  function chooseCategory(item) {
    setActiveName(item.name);
    const nextChild = item.children?.find((child) => child.children?.length) || item.children?.[0];
    setActiveChildName(nextChild?.name || "");
  }

  return (
    <div className="flex max-h-[75vh] overflow-hidden rounded-b-md bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
      <ul className="w-[270px] shrink-0 overflow-y-auto border-r border-[#efefef] py-2">
        {categories.map((item) => (
          <li key={item.name}>
            <Link
              href={catalogHref(item.name)}
              className={rowClass(item.name === active.name)}
              onMouseEnter={() => chooseCategory(item)}
            >
              <span className="flex min-w-0 items-center gap-2.5">
                <CategoryIcon name={item.name} />
                <span>{label(item.name)}</span>
              </span>
              {item.children?.length ? <Chevron /> : null}
            </Link>
          </li>
        ))}
      </ul>
      {active.children?.length ? (
        <ul className="w-[250px] shrink-0 overflow-y-auto border-r border-[#efefef] py-2">
          {active.children.map((child) => (
            <li key={child.name}>
              <Link
                href={catalogHref(child.name)}
                className={rowClass(child.name === activeChildName)}
                onMouseEnter={() => setActiveChildName(child.name)}
              >
                <span>{label(child.name)}</span>
                {child.children?.length ? <Chevron /> : null}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="w-[620px] overflow-y-auto px-6 py-4">
        {parts.length ? (
          <ul className="columns-3 gap-x-8">
            {parts.map((part) => {
              const name = partName(part);
              return (
                <li key={name} className="mb-2 break-inside-avoid">
                  <Link href={catalogHref(name)} className="text-xs leading-5 text-qblack hover:text-qred">
                    {label(name)}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

function MobileMenu({ type }) {
  const { category: label } = useLanguage();
  const [openCategory, setOpenCategory] = useState(null);
  const [openChild, setOpenChild] = useState(null);
  const hover = type === 3 ? "hover:bg-qh3-blue hover:text-white" : "hover:bg-qyellow";

  return (
    <ul className="categories-list">
      {categories.map((item) => {
        const categoryOpen = openCategory === item.name;
        return (
          <li key={item.name}>
            {item.children?.length ? (
              <div className={`flex min-h-9 w-full items-center justify-between gap-3 bg-white text-left text-xs text-qblack ${hover}`}>
                <Link href={catalogHref(item.name)} className="flex min-w-0 flex-1 items-center gap-2.5 px-5 py-2">
                  <CategoryIcon name={item.name} />
                  {label(item.name)}
                </Link>
                <button
                  type="button"
                  className="px-4 py-2"
                  aria-expanded={categoryOpen}
                  onClick={() => setOpenCategory((current) => (current === item.name ? null : item.name))}
                >
                  <Chevron />
                </button>
              </div>
            ) : (
              <Link href={catalogHref(item.name)} className={`flex min-h-9 items-center gap-2.5 bg-white px-5 py-2 text-xs text-qblack ${hover}`}>
                <CategoryIcon name={item.name} />
                {label(item.name)}
              </Link>
            )}
            {item.children && categoryOpen && (
              <ul>
                {item.children.map((child) => {
                  const childOpen = openChild === child.name;
                  return (
                    <li key={child.name}>
                      {child.children?.length ? (
                        <div className={`flex min-h-9 w-full items-center justify-between gap-3 bg-white text-left text-xs text-qblack ${hover}`}>
                          <Link href={catalogHref(child.name)} className="min-w-0 flex-1 px-5 py-2">
                            {label(child.name)}
                          </Link>
                          <button
                            type="button"
                            className="px-4 py-2"
                            aria-expanded={childOpen}
                            onClick={() => setOpenChild((current) => (current === child.name ? null : child.name))}
                          >
                            <Chevron />
                          </button>
                        </div>
                      ) : (
                        <Link href={catalogHref(child.name)} className={`block bg-white px-5 py-2 text-xs text-qblack ${hover}`}>
                          {label(child.name)}
                        </Link>
                      )}
                      {child.children && childOpen && (
                        <ul>
                          {child.children.map((part) => {
                            const name = partName(part);
                            return (
                              <li key={name}>
                                <Link href={catalogHref(name)} className={`block bg-white px-5 py-2 text-xs text-qblack ${hover}`}>
                                  {label(name)}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function CategoryMenu({ type, variant = "desktop" }) {
  if (variant === "mobile") return <MobileMenu type={type} />;
  return <MegaMenu />;
}
