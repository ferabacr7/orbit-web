import { useTranslations } from "next-intl";

import { SearchBar } from "@/components/ui/SearchBar";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="hero bg-background pt-3">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="relative min-h-[650px] overflow-hidden rounded-[34px]">
          {/* HERO PHOTOGRAPHY */}
          <div className="hero-background absolute inset-0" />

          {/* EDITORIAL READABILITY LAYER */}
          <div className="hero-overlay absolute inset-0" />

          {/* HERO CONTENT */}
          <div className="relative z-10 min-h-[650px] px-6 md:px-10 lg:px-14">
            <div className="flex min-h-[650px] items-center pt-[70px]">
              <div className="w-full max-w-[570px] py-16">
                <p className="eyebrow font-semibold text-black/80">
                  {t("eyebrow")}
                </p>

                <h1 className="mt-5 font-editorial text-[clamp(3.8rem,5.7vw,6.5rem)] leading-[0.84] tracking-[-0.055em] text-[#101318] [text-shadow:0_2px_8px_rgba(0,0,0,0.10)]">
                  {" "}
                  {t("titleLine1")}
                  <span className="mt-2 block italic">
                    {t("titleConnector")}{" "}
                    <span className="text-orbit-orange">
                      {t("titleHighlight")}
                    </span>
                  </span>
                </h1>

                <div className="mt-8 max-w-[560px]">
                  <SearchBar />
                </div>

                <p className="mt-6 max-w-[450px] text-[17px] font-medium leading-7 text-black/75">
                  {t("description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
