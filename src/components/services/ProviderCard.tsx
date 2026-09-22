import Image from "next/image";
import { MapPin, Star } from "lucide-react";

import type { Provider } from "@/data/providers";

type ProviderCardProps = {
  provider: Provider;
};

export function ProviderCard({
  provider,
}: ProviderCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-black/10 bg-white">
      {/* IMAGE */}
      <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
        <Image
          src={provider.image}
          alt={provider.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h2 className="font-editorial text-2xl tracking-[-0.025em] text-black">
          {provider.name}
        </h2>

        {/* RATING */}
        <div className="mt-3 flex items-center gap-2 text-sm text-black/70">
          <Star
            size={18}
            strokeWidth={1.8}
            className="fill-[var(--orbit-orange)] text-[var(--orbit-orange)]"
            aria-hidden="true"
          />

          <span className="font-medium text-black">
            {provider.rating.toFixed(1)}
          </span>

          <span>
            ({provider.reviewCount}) on Google
          </span>
        </div>

        {/* LOCATION */}
        <div className="mt-3 flex items-center gap-2 text-sm text-black/60">
          <MapPin
            size={17}
            strokeWidth={2}
            className="text-black"
            aria-hidden="true"
          />

          <span>{provider.location}</span>
        </div>

        {/* SERVICES */}
        <div className="mt-5 flex flex-wrap gap-2">
          {provider.services.map((service) => (
            <span
              key={service}
              className="rounded-full bg-black/[0.05] px-3 py-2 text-xs text-black/70"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}