"use client";
import Link from "next/link";
import Compair from "../icons/Compair";
import QuickViewIco from "../icons/QuickViewIco";
import Star from "../icons/Star";
import ThinLove from "../icons/ThinLove";
import { useLanguage } from "../../../i18n/LanguageProvider";
import ProductFacts from "../ProductFacts";

export default function ProductCardRowStyleTwo({ className, datas, type }) {
  const { t, itemTitle } = useLanguage();
  return (
    <div
      data-aos="fade-left"
      className={`product-row-card-style-one group relative w-full overflow-hidden bg-white ${
        className || ""
      }`}
    >
      <div className="flex w-full items-center gap-4 p-4 sm:p-5">
        <div className="h-[120px] w-[120px] shrink-0">
          {datas.image ? (
            <img
              src={`/assets/images/${datas.image}`}
              alt=""
              className="h-full w-full object-contain"
            />
          ) : null}
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <div>
            <div className="mb-2 flex space-x-1">
              {Array.from(Array(datas.review), () => (
                <span key={datas.review + Math.random()}>
                  <Star />
                </span>
              ))}
            </div>
            <Link href={`/product/${datas.id}`}>
              <p className="title mb-2 text-[13px] font-600 leading-[24px] text-qblack line-clamp-2 hover:text-blue-600 sm:text-[15px]">
                {itemTitle(datas)}
              </p>
            </Link>
            <ProductFacts datas={datas} compact />
            <p className="price mb-4">
              {datas.price && datas.price !== datas.offer_price ? (
                <span className="main-price text-qgray line-through font-600 sm:text-[18px] text-base">
                  {datas.price}
                </span>
              ) : null}
              <span className="offer-price text-qred font-600 sm:text-[18px] text-base ml-2">
                {datas.offer_price}
              </span>
            </p>
            <button type="button" className="min-w-[110px] h-[30px] px-3">
              <span
                className={
                  type === 3
                    ? "blue-btn"
                    : type === 7
                    ? "yellow-btn !bg-[#FFEFF2] hover:!bg-qh7-pink transition-all duration-300"
                    : "yellow-btn"
                }
              >
                {t("addToCart")}
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* quick-access-btns */}
      <div className="quick-access-btns flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-[30px]  transition-all duration-300 ease-in-out">
        <a href="#">
          <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
            <QuickViewIco />
          </span>
        </a>
        <a href="#">
          <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
            <ThinLove />
          </span>
        </a>
        <a href="#">
          <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
            <Compair />
          </span>
        </a>
      </div>
    </div>
  );
}
