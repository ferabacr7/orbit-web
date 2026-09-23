import { CommunitySection } from "@/components/home/CommunitySection";
import { Hero } from "@/components/home/Hero";
import { ProviderGrowth } from "@/components/home/ProviderGrowth";
import { ServiceCarousel } from "@/components/services/ServiceCarousel";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f4ef]">
      {/* HERO */}
      <Hero locale={locale} />

      {/* SERVICES */}
      <section
        className="
          relative z-20
          -mt-[85px]
          bg-transparent
          pb-0
        "
      >
        <ServiceCarousel />
      </section>

      {/* PROVIDER GROWTH */}
      <ProviderGrowth locale={locale} />

      {/* COMMUNITY */}
      <CommunitySection locale={locale} />
    </main>
  );
}