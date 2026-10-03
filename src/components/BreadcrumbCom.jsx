"use client";
import Link from "next/link";
import { useLanguage } from "../i18n/LanguageProvider";

const crumbKeys = {
  home: "home",
  blogs: "blog",
  contact: "contact",
  profile: "profile",
  cart: "cart",
  wishlist: "wishlist",
  checkout: "checkout",
  "About us": "aboutUs",
  "Terms and condition": "termsAndConditions",
  Sallers: "sellers",
  "Become Saller": "becomeSeller",
  FAQ: "faq",
  "single product": "singleProduct",
  "blog details": "blogDetails",
  "Privacy Policy": "privacyPolicy",
  compaire: "compare",
  "Track Order": "trackOrder",
};

export default function BreadcrumbCom({
  paths = [{ name: "home", path: "/" }],
}) {
  const { t } = useLanguage();
  return (
    <>
      {paths && paths.length > 0 && (
        <div className="breadcrumb-wrapper font-400 text-[13px] text-qblack mb-[23px]">
          {paths.map((path) => (
            <span key={path.name}>
              <Link href={path.path}>
                <span className="mx-1 capitalize">
                  {t(crumbKeys[path.name] || path.name)}
                </span>
              </Link>
              <span className="sperator">/</span>
            </span>
          ))}
        </div>
      )}
    </>
  );
}
