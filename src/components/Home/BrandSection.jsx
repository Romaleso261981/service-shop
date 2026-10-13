"use client";
import Link from "next/link";
import { useLanguage } from "../../i18n/LanguageProvider";

const brands = [
  { name: "Electrolux", src: "/assets/images/brands/electrolux.svg" },
  { name: "Bosch", src: "/assets/images/brands/bosch.svg" },
  { name: "Samsung", src: "/assets/images/brands/samsung.svg" },
  { name: "Gorenje", src: "/assets/images/brands/gorenje.svg" },
  { name: "Whirlpool", src: "/assets/images/brands/whirlpool.svg" },
  { name: "Zanussi", src: "/assets/images/brands/zanussi.svg" },
  { name: "AEG", src: "/assets/images/brands/aeg.svg" },
  { name: "Indesit", src: "/assets/images/brands/indesit.svg" },
  { name: "Beko", src: "/assets/images/brands/beko.svg" },
  { name: "Siemens", src: "/assets/images/brands/siemens.svg" },
  { name: "LG", src: "/assets/images/brands/lg.svg" },
  { name: "Candy", src: "/assets/images/brands/candy.svg" },
];

export default function BrandSection({ className, sectionTitle, bg }) {
  const { t } = useLanguage();
  return (
    <div data-aos="fade-up" className={`w-full ${className || ""}`}>
      <div className="container-x mx-auto">
        <div className="section-title flex justify-between items-center mb-5">
          <h1 className="sm:text-3xl text-xl font-600 text-qblacktext">{t(sectionTitle)}</h1>
        </div>
        <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2">
          {brands.map((brand) => (
            <Link key={brand.name} href={`/all-products?q=${encodeURIComponent(brand.name)}`} className="item">
              <div
                className={`w-full h-[130px] ${bg || "bg-white"} border border-[#F1F3F8] flex justify-center items-center px-4`}
              >
                <img src={brand.src} alt={brand.name} className="max-h-10 w-auto max-w-[150px] object-contain" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
