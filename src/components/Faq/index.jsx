"use client";

import { useLanguage } from "../../i18n/LanguageProvider";
import Accodion from "../Helpers/Accodion";
import InputCom from "../Helpers/InputCom";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";

export default function Faq() {
  const { t } = useLanguage();
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="faq-page-wrapper w-full mb-10">
        <div className="page-title w-full">
          <PageTitle
            title={t("faqTitle")}
            breadcrumb={[
              { name: "home", path: "/" },
              { name: "FAQ", path: "/faq" },
            ]}
          />
        </div>
      </div>
      <div className="contact-wrapper w-full mb-10">
        <div className="container-x mx-auto">
          <div className="main-wrapper w-full lg:flex lg:space-x-[30px]">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
              <h1 className="text-qblack font-bold text-[22px] mb-4">
                {t("faqTitle")}
              </h1>
              <div className="flex flex-col space-y-7 justify-between">
                {["1", "2", "3", "4", "5"].map((n) => (
                  <Accodion
                    key={n}
                    init={n === "1"}
                    title={`${n}. ${t(`faqQ${n}`)}`}
                    des={t(`faqA${n}`)}
                  />
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white sm:p-10 p-5">
                <div className="title flex flex-col items-center">
                  <h1 className="lg:text-[34px] text-xl font-bold text-qblack">
                    {t("faqAsk")}
                  </h1>
                  <span className="-mt-5 block">
                    <svg
                      width="354"
                      height="30"
                      viewBox="0 0 354 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1"
                        stroke="#FFBB38"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="inputs mt-5">
                  <div className="mb-4">
                    <InputCom
                      label={t("firstName")}
                      placeholder={t("yourName")}
                      name="first_name"
                      inputClasses="h-[50px]"
                    />
                  </div>
                  <div className="mb-4">
                    <InputCom
                      label={t("emailAddress")}
                      placeholder="name@email.com"
                      name="email"
                      inputClasses="h-[50px]"
                    />
                  </div>
                  <div className="mb-5">
                    <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">
                      {t("message")}
                    </h6>
                    <textarea
                      placeholder={t("yourMessage")}
                      className="w-full h-[105px] focus:ring-0 focus:outline-none p-3 border border-qgray-border placeholder:text-sm"
                    ></textarea>
                  </div>
                  <div>
                    <a href="#">
                      <div className="black-btn text-sm font-semibold w-full h-[50px] flex justify-center items-center">
                        <span>{t("sendNow")}</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
