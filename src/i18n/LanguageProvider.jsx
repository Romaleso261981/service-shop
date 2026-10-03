"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { messages } from "./messages";
import { categoryLabel } from "./categoryLabels";
import { productTitle } from "./productTitles";

export const LANGUAGE_OPTIONS = [
  { code: "en", label: "🇬🇧 en" },
  { code: "rus", label: "🇷🇺 rus" },
  { code: "uk", label: "🇺🇦 uk" },
];

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("shop-lang");
    if (saved === "en" || saved === "rus" || saved === "uk") {
      setLangState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang =
      lang === "rus" ? "ru" : lang === "uk" ? "uk" : "en";
  }, [lang]);

  const setLang = (code) => {
    setLangState(code);
    window.localStorage.setItem("shop-lang", code);
  };

  const value = useMemo(() => {
    const t = (key) => messages[lang]?.[key] || messages.en[key] || key;
    return {
      lang,
      setLang,
      t,
      category: (name) => categoryLabel(name, lang),
      product: (title) => productTitle(title, lang),
    };
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    const t = (key) => messages.en[key] || key;
    return {
      lang: "en",
      setLang: () => {},
      t,
      category: (name) => categoryLabel(name, "en"),
      product: (title) => productTitle(title, "en"),
    };
  }
  return context;
}
