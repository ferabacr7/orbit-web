import Image from "next/image";

import { ProviderCard } from "@/components/services/ProviderCard";
import type { Provider } from "@/data/providers";
import { ProviderPlaceholderCard } from "@/components/services/ProviderPlaceholderCard";

type ProviderGridProps = {
  providers: Provider[];
  locale: string;
};

export function ProviderGrid({ providers, locale }: ProviderGridProps) {
  const showDemoVisuals = providers.length === 1 && providers[0]?.isSample;

  const offerImage =
    locale === "es"
      ? "/images/providers/provider-pro-offer-es.png"
      : "/images/providers/provider-pro-offer-en.png";

  return (
    <section className="relative mx-auto w-full max-w-[1440px] overflow-visible px-6 pb-20 pt-10 lg:px-12">
      {/* ORBIT WATERMARK BACKGROUND */}
      {showDemoVisuals && (
        <div className="pointer-events-none absolute inset-0 hidden overflow-visible lg:block">
          <div className="absolute left-1/2 top-1/2 h-[760px] w-[110%] max-w-none -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/backgrounds/orbit-watermark.png"
              alt=""
              fill
              sizes="100vw"
              className="scale-[1.08] object-contain object-center opacity-[0.13]"
            />
          </div>
        </div>
      )}

      {/* ORBIT PRO OFFER */}
      {showDemoVisuals && (
        <div className="pointer-events-none absolute inset-0 z-20 hidden overflow-visible lg:block">
          <div className="absolute right-[20%] top-[-330px] h-[290px] w-[390px]">
            <Image
              src={offerImage}
              alt=""
              fill
              sizes="390px"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* PROVIDER CARDS */}
      <div className="relative z-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {providers.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} locale={locale} />
        ))}

        <ProviderPlaceholderCard locale={locale} />
        <ProviderPlaceholderCard locale={locale} />
      </div>
    </section>
  );
}
