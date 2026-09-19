import { CommunitySection } from "@/components/home/CommunitySection";
import { Hero } from "@/components/home/Hero";
import { ProviderCTA } from "@/components/home/ProviderCTA";
import { ServiceCategories } from "@/components/home/ServiceCategories";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceCategories />
      <ProviderCTA />
      <CommunitySection />
    </main>
  );
}
