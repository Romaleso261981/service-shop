"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import InputCom from "../../Helpers/InputCom";
import Layout from "../../Partials/Layout";
import Thumbnail from "./Thumbnail";
import Link from "next/link";
import { useLanguage } from "../../../i18n/LanguageProvider";

export default function Login({ role = "retail" }) {
  const { t } = useLanguage();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role }),
    });
    const data = await response.json().catch(() => ({}));
    setLoading(false);
    if (!response.ok) {
      setError(data.error === "role" ? t("wrongRole") : t("invalidLogin"));
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
            <div className="lg:w-[572px] w-full h-[783px] bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]">
              <div className="w-full">
                <div className="title-area flex flex-col justify-center items-center relative text-center mb-7">
                  <h1 className="text-[34px] font-bold leading-[74px] text-qblack">
                    {role === "wholesale" ? t("wholesaleLogin") : t("retailLogin")}
                  </h1>
                  <div className="shape -mt-6">
                    <svg
                      width="172"
                      height="29"
                      viewBox="0 0 172 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.08742C17.6667 19.0972 30.5 31.1305 62.5 27.2693C110.617 21.4634 150 -10.09 171 5.08727"
                        stroke="#FFBB38"
                      />
                    </svg>
                  </div>
                </div>
                <form className="input-area" onSubmit={submit}>
                  <div className="input-item mb-5">
                    <InputCom
                      placeholder="email@example.com"
                      label="Email*"
                      name="email"
                      type="email"
                      inputClasses="h-[50px]"
                      value={email}
                      inputHandler={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <div className="input-item mb-5">
                    <InputCom
                      placeholder="● ● ● ● ● ●"
                      label={`${t("password")}*`}
                      name="password"
                      type="password"
                      inputClasses="h-[50px]"
                      value={password}
                      inputHandler={(event) => setPassword(event.target.value)}
                    />
                  </div>
                  {error && <p className="text-sm text-qred mb-4">{error}</p>}
                  <div className="signin-area mb-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-qyellow text-qblack text-sm w-full h-[50px] font-semibold flex justify-center items-center"
                    >
                      <span>
                        {loading
                          ? "..."
                          : role === "wholesale"
                          ? t("wholesaleLogin")
                          : t("retailLogin")}
                      </span>
                    </button>
                  </div>
                  <div className="signup-area flex justify-center">
                    <p className="text-base text-qgraytwo font-normal">
                      {t("noAccount")}
                      <Link href="/signup" className="ml-2 text-qblack">
                        {t("register")}
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex-1 lg:flex hidden transform scale-60 xl:scale-100   xl:justify-center ">
              <div
                className="absolute xl:-right-20 -right-[138px]"
                style={{ top: "calc(50% - 258px)" }}
              >
                <Thumbnail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
