"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ThinPeople from "../../../Helpers/icons/ThinPeople";
import { useLanguage } from "../../../../i18n/LanguageProvider";

function RetailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" stroke="#E4572E" strokeWidth="1.8" />
      <path d="M6 19c1.2-3 3.3-4.5 6-4.5S16.8 16 18 19" stroke="#E4572E" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16.5 8.5l1.2 1.2 2.3-2.4" stroke="#E4572E" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function WholesaleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 9.5 12 5l8 4.5v8L12 22l-8-4.5v-8Z" stroke="#E4572E" strokeWidth="1.7" />
      <path d="M12 13.2V22M4 9.5l8 4.2 8-4.2" stroke="#E4572E" strokeWidth="1.7" />
    </svg>
  );
}

function RegisterIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="10" cy="8" r="3" stroke="#E4572E" strokeWidth="1.8" />
      <path d="M4.5 19c1-2.6 2.8-4 5.5-4s4.5 1.4 5.5 4" stroke="#E4572E" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18 8v6M15 11h6" stroke="#E4572E" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const links = [
  { href: "/login?role=retail", label: "retailLogin", icon: RetailIcon },
  { href: "/login?role=wholesale", label: "wholesaleLogin", icon: WholesaleIcon },
  { href: "/signup", label: "register", icon: RegisterIcon },
];

export default function AccountMenu() {
  const { t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((response) => response.json())
      .then((data) => setUser(data.user || null))
      .catch(() => setUser(null));
  }, [pathname]);

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    router.refresh();
  }

  return (
    <div className="account-wrapper group relative flex items-center gap-3 py-4">
      {user?.status === "admin" && (
        <Link
          href="/admin"
          className="inline-flex h-9 items-center bg-qyellow px-3 text-xs font-600 text-qblack"
        >
          {t("admin")}
        </Link>
      )}
      <span className="cursor-pointer">
        <ThinPeople />
      </span>
      <div className="absolute right-0 top-11 z-50 hidden w-[250px] bg-white shadow-lg group-hover:block">
        {user ? (
          <div className="p-4">
            <p className="text-sm font-600 text-qblack">{user.name}</p>
            <p className="text-xs text-qgray mt-1 mb-3">
              {user.role === "wholesale" ? t("wholesale") : t("retail")}
              {user.status === "admin" ? ` · ${t("admin")}` : ""}
            </p>
            {user.status === "admin" && (
              <Link href="/admin" className="mb-3 block text-sm font-600 text-qblack">
                {t("admin")}
              </Link>
            )}
            <button type="button" onClick={logout} className="text-sm text-qred">
              {t("logout")}
            </button>
          </div>
        ) : (
          <ul>
            {links.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.href} className="border-b border-[#F1F1F4] last:border-b-0">
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-qblack hover:bg-[#F7F7F8]"
                  >
                    <Icon />
                    <span>{t(item.label)}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
