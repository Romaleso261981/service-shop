"use client";
import Link from "next/link";
import { useLanguage } from "../../../i18n/LanguageProvider";
import ProductFacts from "../ProductFacts";

export default function ProductCardRowStyleTwo({ className, datas }) {
  const { itemTitle } = useLanguage();
  return (
    <div
      data-aos="fade-up"
      className={`product-card-row-two w-full  ${className || ""}`}
    >
      <div className="w-full min-h-[105px] overflow-hidden border border-primarygray bg-white px-4 py-3">
        <div className="flex w-full items-center gap-4">
          <div className="h-[75px] w-[75px] shrink-0">
            {datas.image ? (
              <img
                src={`/assets/images/${datas.image}`}
                alt=""
                className="h-full w-full object-contain"
              />
            ) : null}
          </div>
          <div className="flex min-w-0 flex-1 flex-col justify-center">
            <Link href={`/product/${datas.id}`}>
              <p className="title mb-1 text-[13px] font-600 leading-5 text-qblack line-clamp-2 hover:text-blue-600 sm:text-[15px]">
                {itemTitle(datas)}
              </p>
            </Link>
            <ProductFacts datas={datas} compact />
            <p className="price">
              {datas.price && datas.price !== datas.offer_price ? (
                <span className="main-price text-qgray line-through font-600 text-[18px]">
                  {datas.price}
                </span>
              ) : null}
              <span
                className={`offer-price text-qred font-600 text-[18px]${
                  datas.price && datas.price !== datas.offer_price ? " ml-2" : ""
                }`}
              >
                {datas.offer_price}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
