"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { BANNER_ROTATE_MS } from "../../lib/bannerRotate";
import { variantPath } from "../../lib/imageSizes";

const homeBanners = [
  { src: "/assets/images/banner-washers.jpg", alt: "Запчастини для пральних машин" },
  { src: "/assets/images/banner-vacuums.jpg", alt: "Запчастини для пилососів" },
  { src: "/assets/images/banner-conditioners.jpg", alt: "Запчастини для кондиціонера" },
  { src: "/assets/images/banner-boilers.jpg", alt: "Запчастини для бойлера" },
  { src: "/assets/images/banner-microwaves.jpg", alt: "Запчастини для мікрохвильовки" },
  { src: "/assets/images/banner-fridges.jpg", alt: "Запчастини для холодильника" },
];

function pick(products, index) {
  if (!products.length) return null;
  return products[((index % products.length) + products.length) % products.length];
}

export default function Banner({ className, products = [], initialOffset = 0 }) {
  const { t, itemTitle } = useLanguage();
  const [index, setIndex] = useState(
    ((initialOffset % homeBanners.length) + homeBanners.length) % homeBanners.length
  );

  useEffect(() => {
    if (homeBanners.length < 2) return undefined;
    let intervalId;
    const advance = () => setIndex((current) => (current + 1) % homeBanners.length);
    const timeoutId = window.setTimeout(() => {
      advance();
      intervalId = window.setInterval(advance, BANNER_ROTATE_MS);
    }, BANNER_ROTATE_MS - (Date.now() % BANNER_ROTATE_MS));
    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, []);

  const slide = homeBanners[index];
  const top = pick(products, 1);
  const bottom = pick(products, 2);
  return (
    <>
      <div className={`w-full ${className || ""}`}>
        <div className="container-x mx-auto">
          <div className="main-wrapper w-full">
            <div className="banner-card xl:flex xl:items-start xl:space-x-[30px] mb-[30px]">
              <div
                data-aos="fade-right"
                data-banner-slot={index}
                className="relative w-full shrink-0 self-start xl:w-[740px]"
              >
                <Link href="/all-products">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="block h-auto w-full"
                  />
                </Link>
                <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
                  {homeBanners.map((banner, dot) => (
                    <button
                      key={banner.src}
                      type="button"
                      aria-label={banner.alt}
                      aria-current={dot === index ? "true" : undefined}
                      onClick={() => setIndex(dot)}
                      className={`h-2.5 w-2.5 rounded-full bg-black ${
                        dot === index ? "opacity-100" : "opacity-45"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div
                data-aos="fade-left"
                className="flex flex-1 flex-row xl:flex-col xl:space-y-[30px]"
              >
                <div className="h-[220px] w-full xl:h-[197px]">
                  <Link href={top ? `/product/${top.id}` : "/all-products"}>
                    <img
                      src={
                        top
                          ? variantPath(top.image, 400, 285)
                          : "/assets/images/banner-2.png"
                      }
                      alt={top ? itemTitle(top) : ""}
                      className="w-full h-full object-contain bg-white"
                    />
                  </Link>
                </div>
                <div className="h-[220px] w-full xl:h-[197px]">
                  <Link href={bottom ? `/product/${bottom.id}` : "/all-products"}>
                    <img
                      src={
                        bottom
                          ? variantPath(bottom.image, 400, 286)
                          : "/assets/images/banner-3.png"
                      }
                      alt={bottom ? itemTitle(bottom) : ""}
                      className="w-full h-full object-contain bg-white"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="best-services w-full bg-white flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center lg:h-[110px] px-10 lg:py-0 py-10"
            >
              <div className="item">
                <div className="flex space-x-5 items-center">
                  <div>
                    <span>
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1H5.63636V24.1818H35"
                          stroke="#FFBB38"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="square"
                        />
                        <path
                          d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
                          stroke="#FFBB38"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="square"
                        />
                        <path
                          d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
                          stroke="#FFBB38"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="square"
                        />
                        <path
                          d="M34.9982 1H11.8164V18H34.9982V1Z"
                          stroke="#FFBB38"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="square"
                        />
                        <path
                          d="M11.8164 7.18164H34.9982"
                          stroke="#FFBB38"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                      {t("freeShipping")}
                    </p>
                    <p className="text-sm text-qgray">
                      {t("freeShippingNote")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="flex space-x-5 items-center">
                  <div>
                    <span>
                      <svg
                        width="32"
                        height="34"
                        viewBox="0 0 32 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
                          stroke="#FFBB38"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M30.7 2L29.5 10.85L20.5 9.65"
                          stroke="#FFBB38"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                      {t("freeReturn")}
                    </p>
                    <p className="text-sm text-qgray">
                      {t("freeReturnNote")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="flex space-x-5 items-center">
                  <div>
                    <span>
                      <svg
                        width="32"
                        height="38"
                        viewBox="0 0 32 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
                          stroke="#FFBB38"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="square"
                        />
                        <path
                          d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
                          stroke="#FFBB38"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="square"
                        />
                        <path
                          d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
                          stroke="#FFBB38"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                      {t("securePayment")}
                    </p>
                    <p className="text-sm text-qgray">
                      {t("securePaymentNote")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="flex space-x-5 items-center">
                  <div>
                    <span>
                      <svg
                        width="32"
                        height="35"
                        viewBox="0 0 32 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
                          stroke="#FFBB38"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
                          stroke="#FFBB38"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M16 28V22"
                          stroke="#FFBB38"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
                          stroke="#FFBB38"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="square"
                        />
                        <path
                          d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
                          stroke="#FFBB38"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                      {t("bestQuality")}
                    </p>
                    <p className="text-sm text-qgray">
                      {t("bestQualityNote")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
