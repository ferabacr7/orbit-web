import Image from "next/image";

type CategoryProviderCTAProps = {
  locale: string;
};

export function CategoryProviderCTA({ locale }: CategoryProviderCTAProps) {
  const isSpanish = locale === "es";

  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 pb-20 lg:px-12">
      <div className="relative overflow-hidden rounded-[28px] border border-black/15 bg-[#f7f4ef] shadow-[0_12px_35px_rgba(0,0,0,0.06)]">
        {" "}
        <div className="relative z-10 max-w-xl px-8 py-12 sm:px-12 sm:py-14 lg:px-14 lg:py-16">
          {" "}
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--orbit-orange)]">
            {isSpanish ? "PARA PROVEEDORES" : "FOR PROVIDERS"}
          </p>
          <h2 className="font-editorial mt-4 text-4xl leading-[0.95] tracking-[-0.04em] text-black sm:text-5xl">
            {isSpanish ? (
              <>
                Poné tu negocio
                <br />
                <span className="italic text-[var(--orbit-orange)]">
                  en ORBIT.
                </span>
              </>
            ) : (
              <>
                Get your business
                <br />
                <span className="italic text-[var(--orbit-orange)]">
                  on ORBIT.
                </span>
              </>
            )}
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-black/65 sm:text-lg">
            {isSpanish
              ? "Mostrá tus servicios, llegá a más personas y conseguí más oportunidades."
              : "Show your services, reach more people, and get more opportunities."}
          </p>
          <button
            type="button"
            className="mt-8 inline-flex min-w-[245px] items-center justify-between rounded-full bg-[var(--orbit-orange)] px-7 py-4 font-semibold text-black transition-transform hover:scale-[1.02]"
          >
            <span>
              {isSpanish ? "Enlistá tu negocio" : "Enlist your business"}
            </span>

            <span aria-hidden="true" className="text-2xl leading-none">
              →
            </span>
          </button>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[66%] overflow-hidden rounded-r-[28px] lg:block">
          <Image
            src="/images/providers/provider-cta-guanacaste.png"
            alt=""
            fill
            sizes="66vw"
            className="scale-[1.02] object-cover object-right"
          />

          <div className="absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-[#f7f4ef] via-[#f7f4ef]/90 to-transparent" />
        </div>
        <div className="pointer-events-none relative h-[250px] w-full overflow-hidden rounded-[28px] lg:hidden">
          {" "}
          <Image
            src="/images/providers/provider-cta-guanacaste.png"
            alt=""
            fill
            sizes="100vw"
            className="scale-[1.02] object-cover object-right"
          />
        </div>
      </div>
    </section>
  );
}
