import type { ServiceAreaId } from "@/data/serviceAreas";
import type { ServiceCategory } from "@/data/serviceCategories";

export type Provider = {
  id: string;
  slug: string;
  name: string;
  categoryId: ServiceCategory["id"];
  areaId: ServiceAreaId;
  location: string;
  image: string;
  rating: number;
  reviewCount: number;
  services: string[];
};

export const providers: Provider[] = [
  {
    id: "mechanics-placeholder",
    slug: "mechanics-placeholder",
    name: "Proveedor",
    categoryId: "mechanics",
    areaId: "potrero",
    location: "Guanacaste",
    image: "/images/providers/provider-placeholder.png",
    rating: 0,
    reviewCount: 0,
    services: [],
  },
];