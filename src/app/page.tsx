import { BusinessSpotlight } from "@/components/home/BusinessSpotlight";
import { CommunitySection } from "@/components/home/CommunitySection";
import { Hero } from "@/components/home/Hero";
import { ServiceCategories } from "@/components/home/ServiceCategories";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceCategories />
      <BusinessSpotlight />
      <CommunitySection />
    </main>
  );
}