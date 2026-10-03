"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import InputCom from "../../Helpers/InputCom";
import Layout from "../../Partials/Layout";
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

  const field =
    "h-[52px] rounded-xl bg-transparent px-4 text-[15px] placeholder:text-[#B0B0B8]";

  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="flex w-full items-center justify-center bg-[#f3f3f5] px-4 py-16">
        <div className="w-full max-w-[440px] rounded-[28px] bg-[#16161d] p-3 shadow-[0_18px_50px_rgba(22,22,29,0.18)]">
        <div className="w-full rounded-2xl bg-white px-6 py-8 sm:px-10 sm:py-10">
          <h1 className="mb-8 text-center text-[32px] font-bold text-qblack">
            {t("register")}
          </h1>
          <form
            onSubmit={submit}
            className="[&_.input-label]:mb-1.5 [&_.input-label]:text-xs [&_.input-label]:font-medium [&_.input-label]:normal-case [&_.input-label]:tracking-wide [&_.input-wrapper]:rounded-xl [&_.input-wrapper]:border-[#E2E2E8] [&_.input-wrapper]:bg-[#F7F7F8] [&_.input-wrapper]:transition [&_.input-wrapper]:focus-within:border-[#FFBB38] [&_.input-wrapper]:focus-within:bg-white [&_.input-wrapper]:focus-within:shadow-[0_0_0_4px_rgba(255,187,56,0.28)]"
          >
            <div className="mb-4">
              <InputCom
                label={`${t("name")}*`}
                name="name"
                type="text"
                inputClasses={field}
                value={form.name}
                inputHandler={(event) => update("name", event.target.value)}
              />
            </div>
            <div className="mb-4">
              <InputCom
                label="Email*"
                name="email"
                type="email"
                placeholder="email@example.com"
                inputClasses={field}
                value={form.email}
                inputHandler={(event) => update("email", event.target.value)}
              />
            </div>
            <div className="mb-4">
              <InputCom
                label={t("phone")}
                name="phone"
                type="text"
                inputClasses={field}
                value={form.phone}
                inputHandler={(event) => update("phone", event.target.value)}
              />
            </div>
            <div className="mb-5">
              <InputCom
                label={`${t("password")}*`}
                name="password"
                type="password"
                inputClasses={field}
                value={form.password}
                inputHandler={(event) => update("password", event.target.value)}
              />
            </div>
            <p className="mb-2 text-xs font-medium tracking-wide text-qgray">
              {t("customerType")}
            </p>
            <div className="mb-6 grid grid-cols-2 gap-3">
              {[
                ["retail", t("retail")],
                ["wholesale", t("wholesale")],
              ].map(([value, label]) => (
                <label
                  key={value}
                  className={`flex h-12 cursor-pointer items-center justify-center rounded-xl border text-sm font-medium transition ${
                    form.role === value
                      ? "border-qblack bg-qblack text-white"
                      : "border-[#E2E2E8] bg-[#F7F7F8] text-qblack hover:border-[#C8C8D0]"
                  }`}
                >
                  <input
                    type="radio"
                    name="role"
                    className="sr-only"
                    checked={form.role === value}
                    onChange={() => update("role", value)}
                  />
                  {label}
                </label>
              ))}
            </div>
            {error && <p className="mb-4 text-sm text-qred">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="black-btn flex h-[52px] w-full items-center justify-center rounded-xl text-sm font-semibold text-white"
            >
              {loading ? "..." : t("createAccount")}
            </button>
            <p className="mt-5 text-center text-sm text-qgraytwo">
              {t("haveAccount")}
              <Link href="/login?role=retail" className="ml-2 font-medium text-qblack">
                {t("retailLogin")}
              </Link>
            </p>
          </form>
        </div>
        </div>
      </div>
    </Layout>
  );
}
