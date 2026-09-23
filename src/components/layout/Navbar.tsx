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

  const changeLanguage = (nextLocale: "en" | "es") => {
    if (nextLocale === locale) return;

    router.replace(pathname, {
      locale: nextLocale,
    });
  };

  return (
    <>
      <header className="relative z-50 w-full bg-black">
        {" "}
        <div className="mx-auto w-full px-[clamp(32px,5vw,76px)]">
          <div className="flex h-[92px] items-center justify-between">
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

            {/* RIGHT NAVIGATION */}
            <div className="flex items-center gap-7">
              {/* FOR BUSINESSES */}
              <Link
                href="/for-businesses"
                className="
    hidden
    text-[12px]
    font-medium
    tracking-[0.02em]
    !text-white
    transition-colors
    duration-200
    hover:!text-orbit-orange
    md:block
  "
              >
                {t("forBusinesses")}
              </Link>

              {/* LANGUAGE */}
              <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.1em]">
                <button
                  type="button"
                  onClick={() => changeLanguage("es")}
                  aria-pressed={locale === "es"}
                  className={
                    locale === "es"
                      ? "text-white"
                      : "text-white/45 transition-colors hover:text-white"
                  }
                >
                  ES
                </button>

                <span className="text-white/30">|</span>
                <button
                  type="button"
                  onClick={() => changeLanguage("en")}
                  aria-pressed={locale === "en"}
                  className={
                    locale === "en"
                      ? "text-white"
                      : "text-white/45 transition-colors hover:text-white"
                  }
                >
                  EN
                </button>
              </div>

              {/* MENU BUTTON */}
              <button
                type="button"
                aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((prev) => !prev)}
                className="
  flex
  size-11
  items-center
  justify-center
  rounded-full
  border
  border-white/15
  bg-white/[0.06]
  text-white
  transition-all
  duration-200
  hover:border-white/30
  hover:bg-white/[0.10]
"
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

      {/* MOBILE / SIDE MENU */}
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
