import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { SearchBar } from "@/components/ui/SearchBar";
import { ServiceCarousel } from "@/components/services/ServiceCarousel";

type LabPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function LabPage({ params }: LabPageProps) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Hero",
  });

  const heroImage =
    locale === "es"
      ? "/images/backgrounds/orbit-hero-es.png"
      : "/images/backgrounds/orbit-hero-en.png";

  return (
    <main className="min-h-screen bg-[#f7f4ef]">
      {/* HERO */}
      <section className="relative w-full bg-[#f7f4ef]">
        {/* HERO IMAGE */}
        <Image
          src={heroImage}
          alt=""
          width={1536}
          height={1024}
          priority
          sizes="100vw"
          className="block h-auto w-full"
        />

        {/* LEFT READABILITY LAYER */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-y-0 left-0
            w-[58%]
            bg-gradient-to-r
            from-white/50
            via-white/20
            to-transparent
          "
        />

        {/* HERO CONTENT */}
        <div
          className="
            absolute
            left-[5%]
            top-[43%]
            z-10
            w-full
            max-w-[570px]
            -translate-y-1/2
          "
        >
          {/* EYEBROW */}
          <p className="eyebrow font-semibold text-black/80">
            {t("eyebrow")}
          </p>

          {/* TITLE */}
          <h1
            className="
              mt-5
              font-editorial
              text-[clamp(3.8rem,5.7vw,6.5rem)]
              leading-[0.84]
              tracking-[-0.055em]
              text-[#101318]
              [text-shadow:0_2px_8px_rgba(0,0,0,0.10)]
            "
          >
            {t("titleLine1")}

            <span className="mt-2 block italic">
              {t("titleConnector")}{" "}
              <span className="text-orbit-orange">
                {t("titleHighlight")}
              </span>
            </span>
          </h1>

          {/* SEARCH */}
          <div className="mt-8 max-w-[560px]">
            <SearchBar />
          </div>

          {/* DESCRIPTION */}
          <p
            className="
              mt-6
              max-w-[450px]
              text-[17px]
              font-medium
              leading-7
              text-black/75
            "
          >
            {t("description")}
          </p>
        </div>

        {/* HERO → SERVICES TRANSITION */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-x-0 bottom-0
            h-[70px]
            bg-gradient-to-b
            from-transparent
            via-[#f7f4ef]/20
            to-[#f7f4ef]
          "
        />
      </section>

      {/* SERVICES */}
      <section
        className="
          relative z-20
          -mt-[85px]
          bg-transparent
          pb-20
        "
      >
        <ServiceCarousel />
      </section>
    </main>
  );
}