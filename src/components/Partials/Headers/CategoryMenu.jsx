"use client";
import { useState } from "react";
import Link from "next/link";
import { categories } from "../../../data/categories";
import { useLanguage } from "../../../i18n/LanguageProvider";

function Chevron() {
  return (
    <svg
      className="fill-current shrink-0"
      width="6"
      height="9"
      viewBox="0 0 6 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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

function itemClass(type, compact) {
  const hover =
    type === 3 ? "hover:bg-qh3-blue hover:text-white" : "hover:bg-qyellow";
  return `flex justify-between items-center gap-3 px-5 bg-white transition-all duration-300 ease-in-out cursor-pointer text-qblack ${hover} ${
    compact ? "min-h-9 py-2" : "min-h-10 py-2"
  }`;
}

function Leaf({ name, type, compact }) {
  const { category } = useLanguage();
  return (
    <Link href="/all-products">
      <div className={itemClass(type, compact)}>
        <span className="text-xs font-400 leading-4">{category(name)}</span>
      </div>
    </Link>
  );
}

export default function CategoryMenu({ type, variant = "desktop" }) {
  const compact = variant === "mobile";
  const { category: label } = useLanguage();
  const [openCategory, setOpenCategory] = useState(null);
  const [openChild, setOpenChild] = useState(null);

  return (
    <ul className="categories-list">
      {categories.map((category) => {
        const categoryOpen = compact && openCategory === category.name;
        return (
          <li key={category.name} className="category-item group/cat relative">
            {category.children ? (
              <div
                className={itemClass(type, compact)}
                onClick={
                  compact
                    ? () =>
                        setOpenCategory((current) =>
                          current === category.name ? null : category.name
                        )
                    : undefined
                }
              >
                <span className="text-xs font-400 leading-4">
                  {label(category.name)}
                </span>
                <Chevron />
              </div>
            ) : (
              <Leaf name={category.name} type={type} compact={compact} />
            )}
            {category.children && (
              <div
                className={`z-40 bg-white shadow-lg ${
                  compact
                    ? categoryOpen
                      ? "block"
                      : "hidden"
                    : "absolute left-full top-0 hidden w-[340px] group-hover/cat:block"
                }`}
              >
                <ul className={compact ? "" : "max-h-[70vh] overflow-y-auto"}>
                  {category.children.map((child) => {
                    const childOpen = compact && openChild === child.name;
                    return (
                      <li key={child.name} className="group/sub relative">
                        {child.children ? (
                          <div
                            className={itemClass(type, true)}
                            onClick={
                              compact
                                ? () =>
                                    setOpenChild((current) =>
                                      current === child.name ? null : child.name
                                    )
                                : undefined
                            }
                          >
                            <span className="text-xs font-400 leading-4">
                              {label(child.name)}
                            </span>
                            <Chevron />
                          </div>
                        ) : (
                          <Leaf name={child.name} type={type} compact />
                        )}
                        {child.children && (
                          <div
                            className={`z-50 bg-white shadow-lg ${
                              compact
                                ? childOpen
                                  ? "block"
                                  : "hidden"
                                : "absolute left-full top-0 hidden w-[320px] group-hover/sub:block"
                            }`}
                          >
                            <ul className="max-h-[70vh] overflow-y-auto">
                              {child.children.map((part) => (
                                <li key={part}>
                                  <Leaf name={part} type={type} compact />
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
