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
  isSample?: boolean;
};

export const providers: Provider[] = [
{
  id: "mechanics-sample",
  slug: "mechanics-sample",
  name: "Sample Provider",
  categoryId: "mechanics",
  areaId: "potrero",
  location: "Guanacaste",
  image: "/images/providers/mechanics-demo.png",
  rating: 4.8,
  reviewCount: 24,
  services: ["Diagnostics", "Maintenance", "Repairs"],
  isSample: true,
},
  {
    id: "restaurants-sample",
    slug: "restaurants-sample",
    name: "Sample Provider",
    categoryId: "restaurants",
    areaId: "potrero",
    location: "Guanacaste",
    image: "/images/providers/provider-placeholder.png",
    rating: 0,
    reviewCount: 0,
    services: ["Local Food", "Lunch", "Dinner"],
    isSample: true,
  },
  {
    id: "tours-sample",
    slug: "tours-sample",
    name: "Sample Provider",
    categoryId: "tours",
    areaId: "flamingo",
    location: "Guanacaste",
    image: "/images/providers/provider-placeholder.png",
    rating: 0,
    reviewCount: 0,
    services: ["Tours", "Activities", "Experiences"],
    isSample: true,
  },
  {
    id: "delivery-sample",
    slug: "delivery-sample",
    name: "Sample Provider",
    categoryId: "delivery",
    areaId: "potrero",
    location: "Guanacaste",
    image: "/images/providers/provider-placeholder.png",
    rating: 0,
    reviewCount: 0,
    services: ["Delivery", "Courier", "Local Service"],
    isSample: true,
  },
  {
    id: "pharmacies-sample",
    slug: "pharmacies-sample",
    name: "Sample Provider",
    categoryId: "pharmacies",
    areaId: "brasilito",
    location: "Guanacaste",
    image: "/images/providers/provider-placeholder.png",
    rating: 0,
    reviewCount: 0,
    services: ["Pharmacy", "Personal Care", "Essentials"],
    isSample: true,
  },
  {
    id: "ac-sample",
    slug: "ac-sample",
    name: "Sample Provider",
    categoryId: "ac",
    areaId: "huacas",
    location: "Guanacaste",
    image: "/images/providers/provider-placeholder.png",
    rating: 0,
    reviewCount: 0,
    services: ["Installation", "Maintenance", "Repair"],
    isSample: true,
  },
  {
    id: "pools-sample",
    slug: "pools-sample",
    name: "Sample Provider",
    categoryId: "pools",
    areaId: "potrero",
    location: "Guanacaste",
    image: "/images/providers/provider-placeholder.png",
    rating: 0,
    reviewCount: 0,
    services: ["Cleaning", "Maintenance", "Pool Care"],
    isSample: true,
  },
  {
    id: "handyman-sample",
    slug: "handyman-sample",
    name: "Sample Provider",
    categoryId: "handyman",
    areaId: "surfside",
    location: "Guanacaste",
    image: "/images/providers/provider-placeholder.png",
    rating: 0,
    reviewCount: 0,
    services: ["Repairs", "Maintenance", "Installation"],
    isSample: true,
  },
  {
    id: "personal-care-sample",
    slug: "personal-care-sample",
    name: "Sample Provider",
    categoryId: "personalCare",
    areaId: "tamarindo",
    location: "Guanacaste",
    image: "/images/providers/provider-placeholder.png",
    rating: 0,
    reviewCount: 0,
    services: ["Haircuts", "Grooming", "Personal Care"],
    isSample: true,
  },
  {
    id: "pet-care-sample",
    slug: "pet-care-sample",
    name: "Sample Provider",
    categoryId: "petCare",
    areaId: "huacas",
    location: "Guanacaste",
    image: "/images/providers/provider-placeholder.png",
    rating: 0,
    reviewCount: 0,
    services: ["Pet Care", "Pet Supplies", "Veterinary Services"],
    isSample: true,
  },
];
