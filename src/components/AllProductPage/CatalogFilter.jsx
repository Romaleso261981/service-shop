"use client";

import { useState } from "react";
import { categories } from "../../data/categories";
import { useLanguage } from "../../i18n/LanguageProvider";

function Plus({ open }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <rect y="4" width="10" height="2" fill="#C4C4C4" />
      {!open && (
        <rect x="6" width="10" height="2" transform="rotate(90 6 0)" fill="#C4C4C4" />
      )}
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
            <div className="flex justify-between items-center gap-3">
              <span className="text-xs font-400 text-qblack leading-5">
                {category(item.name)}
              </span>
              {item.children && (
                <button
                  type="button"
                  aria-label={category(item.name)}
                  onClick={() => toggle(item.name)}
                  className="shrink-0"
                >
                  <Plus open={partsOpen} />
                </button>
              )}
            </div>
            {item.children && partsOpen && (
              <ul className="mt-3 ml-3">
                {item.children.map((child) => {
                  const name = childName(child);
                  const parts = childParts(child);
                  const key = `${item.name}/${name}`;
                  const nestedOpen = Boolean(open[key]);
                  return (
                    <li key={name} className="mb-3">
                      <div className="flex justify-between items-center gap-3">
                        <span className="text-xs font-400 text-qgray leading-5">
                          {category(name)}
                        </span>
                        {parts.length > 0 && (
                          <button
                            type="button"
                            aria-label={category(name)}
                            onClick={() => toggle(key)}
                            className="shrink-0"
                          >
                            <Plus open={nestedOpen} />
                          </button>
                        )}
                      </div>
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
