import Image from "next/image";
import { ArrowRight, BarChart3, MapPin, UserRound } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

export async function ProviderCTA() {
  const t = await getTranslations("ProviderCTA");

  return (
    <section className="pb-16 pt-4">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* IMAGE */}
          <div className="relative h-[390px] md:h-[440px] lg:h-[490px]">
            <Image
              src="/images/providers/provider-growth-ecosystem2.png"
              alt={t("imageAlt")}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain scale-[1.12]"
              loading="eager"
            />
          </div>

          {/* CONTENT */}
          <div className="flex items-center">
            <div className="w-full max-w-[680px]">
             <p
  className="eyebrow text-[11px] text-black/85"
  style={{ fontWeight: 750 }}
>
  {t("eyebrow")}
</p>

              <h2 className="mt-4 font-editorial text-[52px] leading-[0.94] tracking-[-0.035em] [text-shadow:0_2px_8px_rgba(0,0,0,0.08)] md:text-[64px] lg:text-[70px]">
                {" "}
                {t("titleLine1")}
                <br />
                {t("titleLine2")}{" "}
                <span className="italic text-orbit-orange">
                  {t("titleHighlight")}
                </span>
              </h2>

              <p className="mt-6 max-w-[600px] text-[16px] font-medium leading-7 text-black/70">
                {t("description")}
              </p>

              {/* BENEFITS */}
              <div className="mt-9 grid max-w-[620px] grid-cols-3 divide-x divide-black/15">
                <div className="flex flex-col items-center px-4 text-center">
                  <BarChart3
                    size={26}
                    strokeWidth={1.8}
                    className="mb-3 text-orbit-orange"
                  />

                  <p className="text-sm font-semibold">
                    {t("benefits.visibility")}
                  </p>
                </div>

                <div className="flex flex-col items-center px-4 text-center">
                  <MapPin
                    size={26}
                    strokeWidth={1.8}
                    className="mb-3 text-orbit-orange"
                  />

                  <p className="text-sm font-medium">{t("benefits.local")}</p>
                </div>

                <div className="flex flex-col items-center px-4 text-center">
                  <UserRound
                    size={26}
                    strokeWidth={1.8}
                    className="mb-3 text-orbit-orange"
                  />

                  <p className="text-sm font-medium">{t("benefits.simple")}</p>
                </div>
              </div>

              {/* MAIN CTA */}
              <div className="mt-10 flex justify-center">
                <Link
                  href="/for-businesses"
                  className="group flex h-[64px] min-w-[290px] items-center justify-between rounded-full bg-orbit-orange py-2 pl-9 pr-2 text-base font-bold text-white shadow-[0_15px_35px_rgba(243,107,33,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(243,107,33,0.38)]"
                >
                  <span>{t("cta")}</span>

                  <span className="flex size-12 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight size={20} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
