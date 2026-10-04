"use client";

import { useLanguage } from "../../i18n/LanguageProvider";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";

const sections = ["1", "2", "3", "4"];

export default function TermsCondition() {
  const { t } = useLanguage();
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="terms-condition-page w-full bg-white pb-[30px]">
        <div className="w-full mb-[30px]">
          <PageTitle
            breadcrumb={[
              { name: "home", path: "/" },
              { name: "Terms and condition", path: "/terms-condition" },
            ]}
            title={t("termsAndConditions")}
          />
        </div>
        <div className="w-full">
          <div className="container-x mx-auto">
            {sections.map((n) => (
              <div key={n} className="content-item w-full mb-10">
                <h2 className="text-[18px] font-medium text-qblack mb-5">
                  {t(`terms${n}Title`)}
                </h2>
                <p className="text-[15px] text-qgraytwo leading-7">
                  {t(`terms${n}Text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
