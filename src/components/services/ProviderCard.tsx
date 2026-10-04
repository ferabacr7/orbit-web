import Image from "next/image";
import Link from "next/link";
import { MapPin, Star } from "lucide-react";

import type { Provider } from "@/data/providers";

type ProviderCardProps = {
  provider: Provider;
  locale: string;
};

export function ProviderCard({
  provider,
  locale,
}: ProviderCardProps) {
  const hasReviews = provider.reviewCount > 0;

  const reviewsLabel =
    locale === "es" ? "en Google" : "on Google";

  return (
    <article>
      <Link
        href={`/${locale}/providers/${provider.slug}`}
        className="group block overflow-hidden rounded-[24px] border border-black/[0.08] bg-white/95 shadow-[0_18px_45px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.015] hover:border-[var(--orbit-orange)]/30 hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)] hover:ring-2 hover:ring-[var(--orbit-orange)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orbit-orange)]/40"
      >
        {/* PROVIDER IMAGE */}
        <div className="relative aspect-[4/3] overflow-hidden bg-black/[0.04]">
          <Image
            src={provider.image}
            alt={provider.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />

          {/* SUBTLE IMAGE OVERLAY */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-70" />

          {/* DEMO BADGE */}
          {provider.isSample && (
            <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[var(--orbit-orange)] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_8px_20px_rgba(0,0,0,0.18)]">
              Demo
            </span>
          )}
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <h2 className="font-editorial text-[1.7rem] tracking-[-0.03em] text-black transition-colors duration-300 group-hover:text-black/85">
            {provider.name}
          </h2>

          {/* GOOGLE REVIEWS */}
          {hasReviews && (
            <div className="mt-3 flex items-center gap-2 text-sm text-black/65">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--orbit-orange)]/10">
                <Star
                  size={16}
                  strokeWidth={1.8}
                  className="fill-[var(--orbit-orange)] text-[var(--orbit-orange)]"
                  aria-hidden="true"
                />
              </div>

              <span className="font-semibold text-black">
                {provider.rating.toFixed(1)}
              </span>

              <span className="text-black/55">
                ({provider.reviewCount}) {reviewsLabel}
              </span>
            </div>
          )}

          {/* LOCATION */}
          <div className="mt-3 flex items-center gap-2 text-sm text-black/55">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black/[0.04]">
              <MapPin
                size={15}
                strokeWidth={2}
                className="text-black/75"
                aria-hidden="true"
              />
            </div>

            <span>{provider.location}</span>
          </div>

          {/* DIVIDER */}
          <div className="my-5 h-px bg-gradient-to-r from-black/[0.08] via-black/[0.04] to-transparent" />

          {/* SERVICES */}
          <div className="flex flex-wrap gap-2">
            {provider.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-black/[0.06] bg-black/[0.035] px-3.5 py-2 text-xs font-medium text-black/65 transition-colors duration-200 group-hover:border-black/[0.09] group-hover:bg-black/[0.05]"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}