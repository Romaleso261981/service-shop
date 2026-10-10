"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../i18n/LanguageProvider";
import { categoryNodes } from "../../lib/categorySlug";
import CategoryIcon from "../Partials/Headers/CategoryIcon";

function Chevron({ open }) {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition ${open ? "rotate-90" : ""}`}
    >
      <path d="M2 1.5 5.5 4 2 6.5" stroke="#222" strokeWidth="1.2" />
    </svg>
  );
}

export default function CatalogFilter() {
  const { category } = useLanguage();
  const [tree, setTree] = useState(categoryNodes);
  const [open, setOpen] = useState({});

  useEffect(() => {
    let cancelled = false;
    fetch("/api/categories")
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (!cancelled && data?.categories?.length) setTree(data.categories);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const toggle = (key) => {
    setOpen((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <ul>
      {tree.map((item) => {
        const partsOpen = Boolean(open[item.path]);
        return (
          <li key={item.path} className="mb-4">
            <div className="flex w-full items-center justify-between gap-3">
              <Link href={`/catalog/${item.path}`} className="flex min-w-0 items-center gap-2.5 text-xs leading-5 text-qblack">
                <CategoryIcon name={item.name} />
                {category(item.name)}
              </Link>
              {item.children?.length ? (
                <button type="button" onClick={() => toggle(item.path)} aria-label={item.name}>
                  <Chevron open={partsOpen} />
                </button>
              ) : null}
            </div>
            {item.children?.length && partsOpen ? (
              <ul className="ml-3 mt-3">
                {item.children.map((child) => (
                  <li key={child.path} className="mb-2">
                    <Link href={`/catalog/${child.path}`} className="text-xs leading-5 text-qgray hover:text-qblack">
                      {category(child.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
