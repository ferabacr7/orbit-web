"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { Link, usePathname, useRouter } from "@/i18n/navigation";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const changeLanguage = (nextLocale: "en" | "es") => {
    if (nextLocale === locale) return;

    router.replace(pathname, {
      locale: nextLocale,
    });
  };

  return (
    <>
      <header
        className={[
          "orbit-navbar inset-x-0 z-50",
          isHome
            ? "orbit-navbar-overlay absolute top-3"
            : "orbit-navbar-solid relative top-0",
        ].join(" ")}
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-8">
          <div className="flex h-[100px] items-center justify-between px-4 lg:px-8">
            {/* LOGO */}
            <Link href="/" aria-label={t("homeLabel")} className="shrink-0">
              <Image
                src="/images/transparent-logo.png"
                alt="ORBIT"
                width={180}
                height={60}
                priority
                className="h-auto w-[125px]"
              />
            </Link>
            {/* LANGUAGE + MENU */}
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.1em] text-white">
                <button
                  type="button"
                  onClick={() => changeLanguage("es")}
                  aria-pressed={locale === "es"}
                  className="navbar-language"
                >
                  ES
                </button>

                <span className="text-white/40">|</span>

                <button
                  type="button"
                  onClick={() => changeLanguage("en")}
                  aria-pressed={locale === "en"}
                  className="navbar-language"
                >
                  EN
                </button>
              </div>

              <button
                type="button"
                aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((prev) => !prev)}
                className="premium-menu-button"
              >
                {menuOpen ? (
                  <X size={21} strokeWidth={1.5} />
                ) : (
                  <Menu size={21} strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="orbit-menu">
          <button
            type="button"
            aria-label={t("closeMenu")}
            className="orbit-menu-backdrop"
            onClick={() => setMenuOpen(false)}
          />

          <aside className="orbit-menu-panel">
            <p className="orbit-menu-eyebrow">{t("exploreOrbit")}</p>

            <nav className="orbit-menu-navigation">
              <Link href="/services" onClick={() => setMenuOpen(false)}>
                {t("services")}
              </Link>

              <Link href="/for-businesses" onClick={() => setMenuOpen(false)}>
                {t("forBusinesses")}
              </Link>

              <Link href="/about" onClick={() => setMenuOpen(false)}>
                {t("about")}
              </Link>

              <Link href="/privacy" onClick={() => setMenuOpen(false)}>
                {t("privacy")}
              </Link>

              <Link href="/terms" onClick={() => setMenuOpen(false)}>
                {t("terms")}
              </Link>
            </nav>

            <div className="orbit-menu-footer">
              <span>{t("guanacaste")}</span>
              <span>{t("costaRica")}</span>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
