import {
  Box,
  Cross,
  Droplets,
  Hammer,
  PawPrint,
  Scissors,
  Snowflake,
  Utensils,
  Waves,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceCategory = {
  id:
    | "mechanics"
    | "restaurants"
    | "tours"
    | "delivery"
    | "pharmacies"
    | "ac"
    | "pools"
    | "handyman"
    | "personalCare"
    | "petCare";
  slug:
    | "mechanics"
    | "restaurants"
    | "tours-activities"
    | "delivery"
    | "pharmacies"
    | "air-conditioning"
    | "pools"
    | "handyman"
    | "barbershops"
    | "pet-services";
  translationKey:
    | "mechanics"
    | "restaurants"
    | "tours"
    | "delivery"
    | "pharmacies"
    | "ac"
    | "pools"
    | "handyman"
    | "personalCare"
    | "petCare";
  Icon: LucideIcon;
  className: string;
  image: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "mechanics",
    slug: "mechanics",
    translationKey: "mechanics",
    Icon: Wrench,
    className: "service-mechanic",
    image: "/images/services/mechanics.png",
  },
  {
    id: "restaurants",
    slug: "restaurants",
    translationKey: "restaurants",
    Icon: Utensils,
    className: "service-food",
    image: "/images/services/restaurants.png",
  },
  {
    id: "tours",
    slug: "tours-activities",
    translationKey: "tours",
    Icon: Waves,
    className: "service-tour",
    image: "/images/services/tours-activities.png",
  },
  {
    id: "delivery",
    slug: "delivery",
    translationKey: "delivery",
    Icon: Box,
    className: "service-delivery",
    image: "/images/services/delivery.png",
  },
  {
    id: "pharmacies",
    slug: "pharmacies",
    translationKey: "pharmacies",
    Icon: Cross,
    className: "service-pharmacy",
    image: "/images/services/pharmacies.png",
  },
  {
    id: "ac",
    slug: "air-conditioning",
    translationKey: "ac",
    Icon: Snowflake,
    className: "service-ac",
    image: "/images/services/ac-services.png",
  },
  {
    id: "pools",
    slug: "pools",
    translationKey: "pools",
    Icon: Droplets,
    className: "service-pools",
    image: "/images/services/pools.png",
  },
  {
    id: "handyman",
    slug: "handyman",
    translationKey: "handyman",
    Icon: Hammer,
    className: "service-handyman",
    image: "/images/services/handyman.png",
  },
  {
    id: "personalCare",
    slug: "barbershops",
    translationKey: "personalCare",
    Icon: Scissors,
    className: "service-personal-care",
    image: "/images/services/barbers-personal-care.png",
  },
  {
    id: "petCare",
    slug: "pet-services",
    translationKey: "petCare",
    Icon: PawPrint,
    className: "service-pet",
    image: "/images/services/pet-care.png",
  },
];