"use client";

import { useLanguage } from "../../i18n/LanguageProvider";
import InputCom from "../Helpers/InputCom";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
import Thumbnail from "./Thumbnail";

export default function TrackingOrder() {
  const { t } = useLanguage();
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="tracking-page-wrapper w-full">
        <div className="page-title mb-[40px]">
          <PageTitle
            title={t("trackOrder")}
            breadcrumb={[
              { name: "home", path: "/" },
              { name: "Track Order", path: "/tracking-order" },
            ]}
          />
        </div>
        <div className="content-wrapper w-full mb-[40px]">
          <div className="container-x mx-auto">
            <h1 className="text-[22px] text-qblack font-semibold leading-9">
              {t("trackYourOrder")}
            </h1>
            <p className="text-[15px] text-qgraytwo leading-8 mb-5">
              {t("trackHint")}
            </p>
            <div className="w-full bg-white lg:px-[30px] px-5 py-[23px] lg:flex items-center">
              <div className="lg:w-[642px] w-full">
                <div className="mb-3">
                  <InputCom
                    placeholder={t("orderNumber")}
                    label={t("orderNumber")}
                    inputClasses="w-full h-[50px]"
                  />
                </div>
                <div className="mb-[30px]">
                  <InputCom
                    placeholder="23/09/2026"
                    label={t("deliveryDate")}
                    inputClasses="w-full h-[50px]"
                  />
                </div>

                <a href="#">
                  <div className="w-[142px] h-[50px] black-btn flex justify-center items-center">
                    <span>{t("trackNow")}</span>
                  </div>
                </a>
              </div>
              <div className="flex-1 flex justify-center mt-5 lg:mt-0">
                <Thumbnail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
