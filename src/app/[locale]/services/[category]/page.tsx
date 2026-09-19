import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import { CategoryHeader } from "@/components/services/CategoryHeader";
import { serviceCategories } from "@/data/serviceCategories";

type CategoryPageProps = {
  params: Promise<{
    locale: string;
    category: string;
  }>;
};

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { category } = await params;

  const serviceCategory = serviceCategories.find(
    (item) => item.slug === category,
  );

  if (!serviceCategory) {
    notFound();
  }

  const categoryTranslations = await getTranslations("CategoryListing");
  const serviceTranslations = await getTranslations("ServiceCategories");

  const name = serviceTranslations(
    `services.${serviceCategory.translationKey}.name`,
  );

  const description = categoryTranslations(
    `categories.${serviceCategory.translationKey}.description`,
  );

  return (
    <main>
      <CategoryHeader
        name={name}
        description={description}
        homeLabel={categoryTranslations("breadcrumb.home")}
        servicesLabel={categoryTranslations("breadcrumb.services")}
        eyebrow={categoryTranslations("eyebrow")}
      />
    </main>
  );
}