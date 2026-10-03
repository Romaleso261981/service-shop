"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../../../i18n/LanguageProvider";

const MAIN = { label: "0 (800) 752 110", href: "tel:0800752110" };
const LINES = [
  { label: "(067) 468-33-55", href: "tel:+380674683355", color: "#2F80ED" },
  { label: "(099) 468-33-55", href: "tel:+380994683355", color: "#F2B705" },
  { label: "(050) 468-33-55", href: "tel:+380504683355", color: "#E24B4B" },
];

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.2 3.8h2.2l1.2 3.1-1.5 1.1a12.4 12.4 0 0 0 5.9 5.9l1.1-1.5 3.1 1.2v2.2c0 .8-.6 1.5-1.4 1.6A15.2 15.2 0 0 1 6.6 5.2c.1-.8.8-1.4 1.6-1.4Z"
        stroke="#222"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 8.5 12 4l8 4.5v9L12 22l-8-4.5v-9Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 12.4V22M4 8.5l8 4 8-4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function PhoneMenu() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    function onPointer(event) {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative hidden lg:block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-start gap-2">
        <span className="mt-0.5">
          <PhoneIcon />
        </span>
        <div>
          <a href={MAIN.href} className="block text-sm font-600 leading-5 text-qblack">
            {MAIN.label}
          </a>
          <span className={`text-[11px] leading-4 ${open ? "text-qred" : "text-qgray"}`}>
            {t("showAllNumbers")}
          </span>
        </div>
      </div>
      {open && (
        <div className="absolute right-0 top-full z-50 w-[280px] pt-2">
          <div className="rounded-md bg-white p-4 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
          <div className="mb-3 flex items-start justify-between gap-3">
            <p className="text-sm font-600 text-qblack">{t("callCenter")}</p>
            <button
              type="button"
              aria-label="close"
              className="text-lg leading-none text-qgray hover:text-qblack"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
          <a href={MAIN.href} className="block text-base font-600 text-qblack">
            {MAIN.label}
          </a>
          <p className="mb-3 text-[11px] leading-4 text-qgray">{t("freeMobile")}</p>
          <ul className="space-y-2 border-t border-qgray-border py-3">
            {LINES.map((line) => (
              <li key={line.href}>
                <a href={line.href} className="flex items-center gap-2 text-sm text-qblack">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: line.color }}
                  />
                  {line.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="border-t border-qgray-border py-3 text-xs leading-5 text-qblack">
            <p className="font-600">{t("workHours")}</p>
            <p>{t("weekdays")}</p>
            <p>{t("weekend")}</p>
          </div>
          <Link
            href="/tracking-order"
            className="flex items-center gap-2 border-t border-qgray-border pt-3 text-sm text-qred"
            onClick={() => setOpen(false)}
          >
            <BoxIcon />
            {t("trackOrder")}
          </Link>
          </div>
        </div>
      )}
    </div>
  );
}
