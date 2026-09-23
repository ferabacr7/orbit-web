import Image from "next/image";
import { ArrowRight } from "lucide-react";

type ProviderGrowthProps = {
  locale: string;
};

export function ProviderGrowth({ locale }: ProviderGrowthProps) {
  return (
    <section
      className="
        relative
        bg-[#f7f4ef]
        px-6
        py-10
        lg:px-[60px]
        lg:py-12
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1280px]
          items-center
          gap-12
          lg:grid-cols-[0.95fr_1.05fr]
          lg:gap-14
        "
      >
        {/* IMAGE */}
        <div className="flex items-center justify-center lg:justify-start">
          <div
            className="
              relative
              w-full
              max-w-[560px]
              overflow-hidden
              rounded-[30px]
            "
          >
            <Image
              src="/images/providers/provider-growth-office.png"
              alt=""
              width={1536}
              height={1024}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="
                h-auto
                w-full
                object-cover
                brightness-[1.45]
              "
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-[500px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-black/60">
            {locale === "es" ? "PARA NEGOCIOS" : "FOR BUSINESSES"}
          </p>

          <div className="mt-3 h-[2px] w-10 bg-orbit-orange" />

          <h2
            className="
              mt-5
              font-editorial
              text-[clamp(2.8rem,4.1vw,4.8rem)]
              leading-[0.94]
              tracking-[-0.02em]
              text-[#101318]
            "
          >
            {locale === "es"
              ? "Profesionales reales."
              : "Real professionals."}

            <span className="mt-1 block">
              {locale === "es" ? (
                <>
                  Impacto{" "}
                  <span className="italic text-orbit-orange">real.</span>
                </>
              ) : (
                <>
                  Real{" "}
                  <span className="italic text-orbit-orange">impact.</span>
                </>
              )}
            </span>
          </h2>

          <p className="mt-6 max-w-[470px] text-[16px] leading-7 text-black/70">
            {locale === "es"
              ? "ORBIT ayuda a los negocios de Guanacaste a conectar mejor con su comunidad."
              : "ORBIT helps businesses in Guanacaste connect better with their community."}
          </p>

          <button
            type="button"
            className="
              mt-7
              inline-flex
              h-[54px]
              items-center
              gap-8
              rounded-full
              bg-white
              py-[5px]
              pl-6
              pr-[5px]
              text-[14px]
              font-semibold
              text-black
              shadow-[0_12px_35px_rgba(0,0,0,0.08)]
              transition-all
              duration-300
              hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]
            "
          >
            {locale === "es" ? "Incluí tu negocio" : "List Your Business"}

            <span
              className="
                flex
                size-11
                items-center
                justify-center
                rounded-full
                bg-orbit-orange
                text-white
              "
            >
              <ArrowRight size={18} strokeWidth={1.6} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}