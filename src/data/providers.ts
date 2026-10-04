import type { ServiceAreaId } from "@/data/serviceAreas";
import type { ServiceCategory } from "@/data/serviceCategories";

export type BusinessHours = {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
};

export type Provider = {
  id: string;
  slug: string;
  name: string;
  categoryId: ServiceCategory["id"];
  areaId: ServiceAreaId;
  serviceAreaIds?: ServiceAreaId[];
  location: string;
  image: string;
  rating: number;
  reviewCount: number;
  services: string[];
  description?: string;
  gallery?: string[];
  whatsappNumber?: string;
  businessHours?: BusinessHours;
  isSample?: boolean;
};

export const providers: Provider[] = [
  {
    id: "mechanics-sample",
    slug: "mechanics-sample",
    name: "Sample Provider",
    categoryId: "mechanics",

    areaId: "potrero",

    serviceAreaIds: [
      "potrero",
      "flamingo",
      "brasilito",
      "surfside",
      "huacas",
    ],

    location: "Guanacaste",

    image: "/images/providers/mechanics-demo.png",

    rating: 4.8,
    reviewCount: 24,

    services: [
      "Diagnostics",
      "Maintenance",
      "Repairs",
    ],

    description:
      "Local automotive service offering diagnostics, preventive maintenance and repairs across the Guanacaste area.",

    gallery: [
      "/images/providers/mechanics-demo.png",
    ],

    businessHours: {
      monday: "8:00 AM – 5:00 PM",
      tuesday: "8:00 AM – 5:00 PM",
      wednesday: "8:00 AM – 5:00 PM",
      thursday: "8:00 AM – 5:00 PM",
      friday: "8:00 AM – 5:00 PM",
      saturday: "8:00 AM – 1:00 PM",
      sunday: "Closed",
    },

    isSample: true,
  },

  {
    id: "restaurants-sample",
    slug: "restaurants-sample",
    name: "Sample Provider",
    categoryId: "restaurants",

    areaId: "potrero",

    serviceAreaIds: [
      "potrero",
      "surfside",
    ],

    location: "Guanacaste",

    image: "/images/providers/provider-placeholder.png",

    rating: 0,
    reviewCount: 0,

    services: [
      "Local Food",
      "Lunch",
      "Dinner",
    ],

    isSample: true,
  },

  {
    id: "tours-sample",
    slug: "tours-sample",
    name: "Sample Provider",
    categoryId: "tours",

    areaId: "flamingo",

    serviceAreaIds: [
      "flamingo",
      "potrero",
      "brasilito",
      "las-catalinas",
    ],

    location: "Guanacaste",

    image: "/images/providers/provider-placeholder.png",

    rating: 0,
    reviewCount: 0,

    services: [
      "Tours",
      "Activities",
      "Experiences",
    ],

    isSample: true,
  },

  {
    id: "delivery-sample",
    slug: "delivery-sample",
    name: "Sample Provider",
    categoryId: "delivery",

    areaId: "potrero",

    serviceAreaIds: [
      "potrero",
      "flamingo",
      "brasilito",
      "surfside",
      "huacas",
    ],

    location: "Guanacaste",

    image: "/images/providers/provider-placeholder.png",

    rating: 0,
    reviewCount: 0,

    services: [
      "Delivery",
      "Courier",
      "Local Service",
    ],

    isSample: true,
  },

  {
    id: "pharmacies-sample",
    slug: "pharmacies-sample",
    name: "Sample Provider",
    categoryId: "pharmacies",

    areaId: "brasilito",

    serviceAreaIds: [
      "brasilito",
      "huacas",
      "flamingo",
    ],

    location: "Guanacaste",

    image: "/images/providers/provider-placeholder.png",

    rating: 0,
    reviewCount: 0,

    services: [
      "Pharmacy",
      "Personal Care",
      "Essentials",
    ],

    isSample: true,
  },

  {
    id: "ac-sample",
    slug: "ac-sample",
    name: "Sample Provider",
    categoryId: "ac",

    areaId: "huacas",

    serviceAreaIds: [
      "huacas",
      "tamarindo",
      "brasilito",
      "flamingo",
      "potrero",
    ],

    location: "Guanacaste",

    image: "/images/providers/provider-placeholder.png",

    rating: 0,
    reviewCount: 0,

    services: [
      "Installation",
      "Maintenance",
      "Repair",
    ],

    isSample: true,
  },

  {
    id: "pools-sample",
    slug: "pools-sample",
    name: "Sample Provider",
    categoryId: "pools",

    areaId: "potrero",

    serviceAreaIds: [
      "potrero",
      "flamingo",
      "surfside",
      "las-catalinas",
    ],

    location: "Guanacaste",

    image: "/images/providers/provider-placeholder.png",

    rating: 0,
    reviewCount: 0,

    services: [
      "Cleaning",
      "Maintenance",
      "Pool Care",
    ],

    isSample: true,
  },

  {
    id: "handyman-sample",
    slug: "handyman-sample",
    name: "Sample Provider",
    categoryId: "handyman",

    areaId: "surfside",

    serviceAreaIds: [
      "surfside",
      "potrero",
      "flamingo",
      "brasilito",
    ],

    location: "Guanacaste",

    image: "/images/providers/provider-placeholder.png",

    rating: 0,
    reviewCount: 0,

    services: [
      "Repairs",
      "Maintenance",
      "Installation",
    ],

    isSample: true,
  },

  {
    id: "personal-care-sample",
    slug: "personal-care-sample",
    name: "Sample Provider",
    categoryId: "personalCare",

    areaId: "tamarindo",

    serviceAreaIds: [
      "tamarindo",
    ],

    location: "Guanacaste",

    image: "/images/providers/provider-placeholder.png",

    rating: 0,
    reviewCount: 0,

    services: [
      "Haircuts",
      "Grooming",
      "Personal Care",
    ],

    isSample: true,
  },

  {
    id: "pet-care-sample",
    slug: "pet-care-sample",
    name: "Sample Provider",
    categoryId: "petCare",

    areaId: "huacas",

    serviceAreaIds: [
      "huacas",
      "tamarindo",
      "brasilito",
      "flamingo",
    ],

    location: "Guanacaste",

    image: "/images/providers/provider-placeholder.png",

    rating: 0,
    reviewCount: 0,

    services: [
      "Pet Care",
      "Pet Supplies",
      "Veterinary Services",
    ],

    isSample: true,
  },
];