"use client";

import { useLanguage } from "../../i18n/LanguageProvider";

export function stockText(stock, t) {
  if (stock === "out") return t("outOfStock");
  if (stock === "order") return t("onOrder");
  if (stock === "in") return t("inStock");
  return "";
}

export default function ProductFacts({ datas, compact = false }) {
  const { t } = useLanguage();
  if (!datas?.code && !datas?.sku && !datas?.stock) return null;
  const stock = stockText(datas.stock, t);
  if (compact) {
    return (
      <p className="mb-1 truncate text-xs leading-5">
        {datas.sku ? (
          <span className="text-qgray">
            {t("article")}: {datas.sku}
          </span>
        ) : null}
        {stock ? (
          <span className={datas.stock === "out" ? "text-qred" : "text-[#1a7f37]"}>
            {datas.sku ? " · " : ""}
            {stock}
          </span>
        ) : null}
      </p>
    );
  }
  return (
    <div className="mb-2 text-xs text-qgray leading-5">
      {datas.code ? (
        <p>
          {t("productCode")}: {datas.code}
        </p>
      ) : null}
      {datas.sku ? (
        <p>
          {t("article")}: {datas.sku}
        </p>
      ) : null}
      {stock ? (
        <p className={datas.stock === "out" ? "text-qred" : "text-[#1a7f37]"}>{stock}</p>
      ) : null}
      {Number.isInteger(datas.stock_qty) ? (
        <p>
          {t("stockQty")}: {datas.stock_qty}
        </p>
      ) : null}
      {datas.lead_time ? (
        <p>
          {t("leadTime")}: {datas.lead_time}
        </p>
      ) : null}
    </div>
  );
}
