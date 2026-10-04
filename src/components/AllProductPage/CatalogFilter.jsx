"use client";

import { useState } from "react";
import { categories } from "../../data/categories";
import { useLanguage } from "../../i18n/LanguageProvider";
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

function childName(child) {
  return typeof child === "string" ? child : child.name;
}

function childParts(child) {
  if (typeof child === "string" || !child.children) return [];
  return child.children;
}

export default function CatalogFilter() {
  const { category } = useLanguage();
  const [open, setOpen] = useState({});

  const toggle = (key) => {
    setOpen((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <ul>
      {categories.map((item) => {
        const partsOpen = Boolean(open[item.name]);
        return (
          <li key={item.name} className="mb-4">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 text-left"
              onClick={() => item.children && toggle(item.name)}
            >
              <span className="flex min-w-0 items-center gap-2.5 text-xs font-400 text-qblack leading-5">
                <CategoryIcon name={item.name} />
                {category(item.name)}
              </span>
              {item.children && <Chevron open={partsOpen} />}
            </button>
            {item.children && partsOpen && (
              <ul className="mt-3 ml-3">
                {item.children.map((child) => {
                  const name = childName(child);
                  const parts = childParts(child);
                  const key = `${item.name}/${name}`;
                  const nestedOpen = Boolean(open[key]);
                  return (
                    <li key={name} className="mb-3">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between gap-3 text-left"
                        onClick={() => parts.length > 0 && toggle(key)}
                      >
                        <span className="text-xs font-400 text-qgray leading-5">
                          {category(name)}
                        </span>
                        {parts.length > 0 && <Chevron open={nestedOpen} />}
                      </button>
                      {nestedOpen && (
                        <ul className="mt-2 ml-3">
                          {parts.map((part) => (
                            <li key={part} className="mb-2 text-xs text-qgray leading-5">
                              {category(part)}
                            </li>
                          ))}
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
