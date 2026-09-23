import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { SearchBar } from "@/components/ui/SearchBar";

type HeroProps = {
  locale: string;
};

export async function Hero({ locale }: HeroProps) {
  const t = await getTranslations({
    locale,
    namespace: "Hero",
  });

  const heroImage =
    locale === "es"
      ? "/images/backgrounds/orbit-hero-es.png"
      : "/images/backgrounds/orbit-hero-en.png";

  const proOfferImage =
    locale === "es"
      ? "/images/hero/orbit-pro-offer-es.png"
      : "/images/hero/orbit-pro-offer-en.png";

  const quickFilters = [
    {
      label: locale === "es" ? "Restaurantes" : "Restaurants",
      slug: "restaurants",
    },
    {
      label: locale === "es" ? "Mecánica" : "Mechanics",
      slug: "mechanics",
    },
    {
      label: "Tours",
      slug: "tours-activities",
    },
    {
      label: locale === "es" ? "Farmacias" : "Pharmacies",
      slug: "pharmacies",
    },
    {
      label: locale === "es" ? "Más" : "More",
      slug: "more",
    },
  ];

  return (
    <section
      className="
        relative
        h-[760px]
        w-full
        overflow-hidden
        bg-[#f7f4ef]
        md:h-[clamp(610px,72vh,760px)]
      "
    >
      {/* HERO IMAGE */}
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="
          object-cover
          object-[58%_center]
          saturate-[0.82]
          contrast-[0.96]
          md:object-[center_63%]
        "
      />

      {/* EDITORIAL READABILITY LAYER */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-[linear-gradient(90deg,#f7f4ef_0%,rgba(247,244,239,0.97)_30%,rgba(247,244,239,0.78)_55%,rgba(247,244,239,0.18)_82%,transparent_100%)]
          md:inset-y-0
          md:left-0
          md:w-[78%]
          md:bg-[linear-gradient(90deg,#f7f4ef_0%,rgba(247,244,239,0.99)_20%,rgba(247,244,239,0.96)_38%,rgba(247,244,239,0.82)_52%,rgba(247,244,239,0.48)_65%,rgba(247,244,239,0.15)_78%,transparent_100%)]
        "
      />

      {/* PRO OFFER */}
      <div
        className="
          absolute
          right-[18px]
          top-[18px]
          z-20
          w-[145px]
          -rotate-[4deg]

          min-[430px]:right-[28px]
          min-[430px]:w-[160px]

          md:left-[36%]
          md:right-auto
          md:top-[2%]
          md:w-[clamp(210px,17vw,280px)]
        "
      >
        <Image
          src={proOfferImage}
          alt={locale === "es" ? "10 semanas de Pro" : "10 weeks of Pro"}
          width={500}
          height={500}
          className="h-auto w-full"
        />
      </div>

      {/* HERO CONTENT */}
      <div
        className="
          absolute
          inset-x-0
          top-[185px]
          z-10
          px-6

          min-[430px]:top-[180px]
          min-[430px]:px-8

          md:left-[clamp(32px,5vw,76px)]
          md:right-auto
          md:top-[53%]
          md:w-[min(570px,44vw)]
          md:-translate-y-1/2
          md:px-0
        "
      >
        {/* EYEBROW */}
        <p
          className="
            mb-4
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.28em]
            text-black/70

            md:mb-5
            md:text-[10px]
            md:tracking-[0.32em]
          "
        >
          {locale === "es" ? "SOLUCIONES REALES" : "REAL SOLUTIONS"}
        </p>

        {/* TITLE */}
        <h1
          className="
            mt-0
            max-w-[330px]
            font-editorial
            text-[clamp(3rem,14vw,4rem)]
            leading-[0.9]
            tracking-[-0.03em]
            text-[#101318]
            [text-shadow:0_2px_8px_rgba(0,0,0,0.10)]

            min-[430px]:max-w-[360px]

            md:max-w-none
            md:text-[clamp(3.5rem,5.2vw,6rem)]
            md:leading-[0.92]
            md:tracking-[-0.025em]
          "
        >
          {t("titleLine1")}

          <span
            className="
              mt-2
              block
              italic
              text-orbit-orange

              md:mt-3
            "
          >
            {t("titleConnector")} {t("titleHighlight")}
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            mt-5
            max-w-[285px]
            text-[15px]
            font-medium
            leading-6
            text-black/75

            min-[430px]:max-w-[320px]

            md:mt-6
            md:max-w-[450px]
            md:text-[17px]
            md:leading-7
          "
        >
          {t("description")}
        </p>

        {/* SEARCH + QUICK FILTERS */}
        <div
          className="
            mt-5
            w-full
            max-w-[360px]

            min-[430px]:max-w-[390px]

            md:mt-6
            md:max-w-[560px]
          "
        >
          <SearchBar />

          {/* QUICK FILTERS */}
          <div
            className="
              mt-3
              flex
              w-full
              gap-2
              overflow-x-auto
              pb-1
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden

              md:flex-nowrap
md:overflow-visible              lg:pb-0
            "
          >
            {quickFilters.map((filter) => (
              <button
                key={filter.slug}
                type="button"
                className="
                  shrink-0
                  rounded-full
                  border
                  border-black/[0.06]
                  bg-[#e3e3e1]/80
                  px-4
                  py-[7px]
                  text-[11px]
                  font-medium
                  text-[#4a4a48]
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]
                  backdrop-blur-md
                  transition-all
                  duration-200
                  hover:border-black/[0.10]
                  hover:bg-[#d9d9d7]/90
                  hover:text-black
                  hover:shadow-[0_5px_16px_rgba(0,0,0,0.07)]
                "
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* HERO → SERVICES TRANSITION */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[90px]
          bg-gradient-to-b
          from-transparent
          via-[#f7f4ef]/20
          to-[#f7f4ef]

          md:h-[70px]
        "
      />
    </section>
  );
}
