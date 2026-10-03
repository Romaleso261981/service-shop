"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import InputCom from "../../Helpers/InputCom";
import Layout from "../../Partials/Layout";
import Thumbnail from "./Thumbnail";
import { useLanguage } from "../../../i18n/LanguageProvider";

export default function Signup() {
  const { t } = useLanguage();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "retail",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await response.json().catch(() => ({}));
    setLoading(false);
    if (!response.ok) {
      setError(data.error === "exists" ? t("emailTaken") : t("fillAuth"));
      return;
    }
    router.push("/");
    router.refresh();
  }

  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="login-page-wrapper w-full py-10">
        <div className="container-x mx-auto">
          <div className="lg:flex items-center relative">
            <div className="lg:w-[572px] w-full bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]">
              <div className="title-area flex flex-col justify-center items-center relative text-center mb-7">
                <h1 className="text-[34px] font-bold leading-[74px] text-qblack">
                  {t("register")}
                </h1>
              </div>
              <form onSubmit={submit}>
                <div className="mb-5">
                  <InputCom
                    label={`${t("name")}*`}
                    name="name"
                    type="text"
                    inputClasses="h-[50px]"
                    value={form.name}
                    inputHandler={(event) => update("name", event.target.value)}
                  />
                </div>
                <div className="mb-5">
                  <InputCom
                    label="Email*"
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    inputClasses="h-[50px]"
                    value={form.email}
                    inputHandler={(event) => update("email", event.target.value)}
                  />
                </div>
                <div className="mb-5">
                  <InputCom
                    label={t("phone")}
                    name="phone"
                    type="text"
                    inputClasses="h-[50px]"
                    value={form.phone}
                    inputHandler={(event) => update("phone", event.target.value)}
                  />
                </div>
                <div className="mb-5">
                  <InputCom
                    label={`${t("password")}*`}
                    name="password"
                    type="password"
                    inputClasses="h-[50px]"
                    value={form.password}
                    inputHandler={(event) => update("password", event.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <p className="text-[13px] text-qgray mb-2">{t("customerType")}</p>
                  <div className="flex gap-4 text-sm">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="role"
                        checked={form.role === "retail"}
                        onChange={() => update("role", "retail")}
                      />
                      {t("retail")}
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="role"
                        checked={form.role === "wholesale"}
                        onChange={() => update("role", "wholesale")}
                      />
                      {t("wholesale")}
                    </label>
                  </div>
                </div>
                {error && <p className="text-sm text-qred mb-4">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="black-btn text-sm text-white w-full h-[50px] font-semibold flex justify-center items-center"
                >
                  {loading ? "..." : t("createAccount")}
                </button>
                <p className="text-base text-qgraytwo text-center mt-5">
                  {t("haveAccount")}
                  <Link href="/login?role=retail" className="ml-2 text-qblack">
                    {t("retailLogin")}
                  </Link>
                </p>
              </form>
            </div>
            <div className="flex-1 lg:flex hidden transform scale-60 xl:scale-100 xl:justify-center">
              <div className="absolute xl:-right-20 -right-[138px]" style={{ top: "calc(50% - 258px)" }}>
                <Thumbnail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
