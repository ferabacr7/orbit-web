import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { ProviderGrid } from "@/components/services/ProviderGrid";
import { providers } from "@/data/providers";
import { AreaFilters } from "@/components/services/AreaFilters";
import { CategoryHeader } from "@/components/services/CategoryHeader";
import { serviceCategories } from "@/data/serviceCategories";

type CategoryPageProps = {
  params: Promise<{
    locale: string;
    category: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  const serviceCategory = serviceCategories.find(
    (item) => item.slug === category,
  );

  if (!serviceCategory) {
    notFound();
  }

  const categoryProviders = providers.filter(
    (provider) => provider.categoryId === serviceCategory.id,
  );

  const categoryTranslations = await getTranslations("CategoryListing");
  const serviceTranslations = await getTranslations("ServiceCategories");

  const name = serviceTranslations(
    `services.${serviceCategory.translationKey}.name`,
  );

  const description = categoryTranslations(
    `categories.${serviceCategory.translationKey}.description`,
  );

  return (
    <main
      className="flex-1 bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage:
          "url('/images/backgrounds/orbit-services-background.png')",
      }}
    >
      <CategoryHeader
        name={name}
        description={description}
        homeLabel={categoryTranslations("breadcrumb.home")}
        servicesLabel={categoryTranslations("breadcrumb.services")}
        eyebrow={categoryTranslations("eyebrow")}
      />

      <AreaFilters allAreasLabel={categoryTranslations("allAreas")} />

      <ProviderGrid providers={categoryProviders} />
    </main>
  );
}
