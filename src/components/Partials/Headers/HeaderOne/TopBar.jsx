"use client";
import Link from "next/link";
import Arrow from "../../../Helpers/icons/Arrow";
import Selectbox from "../../../Helpers/Selectbox";
import { LANGUAGE_OPTIONS, useLanguage } from "../../../../i18n/LanguageProvider";

export default function TopBar({ className }) {
  const { lang, setLang, t } = useLanguage();
  const current = LANGUAGE_OPTIONS.find((option) => option.code === lang);
  return (
    <>
      <div
        className={`w-full bg-white h-10 border-b border-qgray-border ${
          className || ""
        }`}
      >
        <div className="container-x mx-auto h-full">
          <div className="flex justify-between items-center h-full">
            <div className="topbar-nav">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/">
                    <span className="text-xs leading-6 text-qblack font-500">
                      {t("account")}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/tracking-order">
                    <span className="text-xs leading-6 text-qblack font-500">
                      {t("trackOrder")}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <span className="text-xs leading-6 text-qblack font-500">
                      {t("support")}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="topbar-dropdowns sm:block hidden">
              <div className="flex space-x-6">
                <div className="language-select flex space-x-1 items-center">
                  <Selectbox
                    className="w-fit"
                    datas={LANGUAGE_OPTIONS.map((option) => option.label)}
                    value={current?.label}
                    action={(label) => {
                      const next = LANGUAGE_OPTIONS.find(
                        (option) => option.label === label
                      );
                      if (next) setLang(next.code);
                    }}
                  />
                  <div>
                    <Arrow className="fill-current qblack" />
                  </div>
                </div>
                <div className="currency-select flex space-x-1 items-center">
                  <Selectbox className="w-fit" datas={["USD", "BDT"]} />
                  <Arrow className="fill-current qblack" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
