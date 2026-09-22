import type { Provider } from "@/data/providers";
import { ProviderCard } from "@/components/services/ProviderCard";

type ProviderGridProps = {
  providers: Provider[];
};

export function ProviderGrid({
  providers,
}: ProviderGridProps) {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 pb-20 pt-10 lg:px-12">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {providers.map((provider) => (
          <ProviderCard
            key={provider.id}
            provider={provider}
          />
        ))}
      </div>
    </section>
  );
}