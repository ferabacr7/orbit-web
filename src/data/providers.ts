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

    serviceAreaIds: ["potrero", "flamingo", "brasilito", "surfside", "huacas"],

    location: "Guanacaste",

    image: "/images/providers/mechanics-demo.png",

    rating: 4.8,
    reviewCount: 24,

    services: ["Diagnostics", "Maintenance", "Repairs"],

    description:
      "Local automotive service offering diagnostics, preventive maintenance and repairs across the Guanacaste area.",

    gallery: ["/images/providers/mechanics-demo.png"],

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
    serviceAreaIds: ["potrero", "surfside"],
    location: "Potrero, Guanacaste",
    image: "/images/providers/restaurants-demo.png",
    rating: 4.7,
    reviewCount: 18,
    services: ["Local Food", "Lunch", "Dinner"],
    description:
      "Local restaurant serving fresh food in a relaxed Guanacaste atmosphere, with lunch and dinner options for locals and visitors.",
    gallery: ["/images/providers/restaurants-demo.png"],
    businessHours: {
      monday: "11:00 AM – 9:00 PM",
      tuesday: "11:00 AM – 9:00 PM",
      wednesday: "11:00 AM – 9:00 PM",
      thursday: "11:00 AM – 9:00 PM",
      friday: "11:00 AM – 10:00 PM",
      saturday: "11:00 AM – 10:00 PM",
      sunday: "11:00 AM – 9:00 PM",
    },
    isSample: true,
  },

  {
    id: "tours-sample",
    slug: "tours-sample",
    name: "Sample Provider",
    categoryId: "tours",
    areaId: "flamingo",
    serviceAreaIds: ["flamingo", "potrero", "brasilito", "las-catalinas"],
    location: "Flamingo, Guanacaste",
    image: "/images/providers/tours-demo.png",
    rating: 4.9,
    reviewCount: 31,
    services: ["Tours", "Activities", "Experiences"],
    description:
      "Local tour company offering outdoor activities and experiences across Guanacaste, including ocean, nature and adventure tours.",
    gallery: ["/images/providers/tours-demo.png"],
    businessHours: {
      monday: "8:00 AM – 5:00 PM",
      tuesday: "8:00 AM – 5:00 PM",
      wednesday: "8:00 AM – 5:00 PM",
      thursday: "8:00 AM – 5:00 PM",
      friday: "8:00 AM – 5:00 PM",
      saturday: "8:00 AM – 5:00 PM",
      sunday: "8:00 AM – 4:00 PM",
    },
    isSample: true,
  },

  {
    id: "delivery-sample",
    slug: "delivery-sample",
    name: "Sample Provider",
    categoryId: "delivery",
    areaId: "potrero",
    serviceAreaIds: ["potrero", "flamingo", "brasilito", "surfside", "huacas"],
    location: "Potrero, Guanacaste",
    image: "/images/providers/delivery-demo.png",
    rating: 4.8,
    reviewCount: 22,
    services: ["Delivery", "Courier", "Local Service"],
    description:
      "Local delivery and courier service helping move packages, purchases and everyday items across nearby communities in Guanacaste.",
    gallery: ["/images/providers/delivery-demo.png"],
    businessHours: {
      monday: "8:00 AM – 6:00 PM",
      tuesday: "8:00 AM – 6:00 PM",
      wednesday: "8:00 AM – 6:00 PM",
      thursday: "8:00 AM – 6:00 PM",
      friday: "8:00 AM – 6:00 PM",
      saturday: "9:00 AM – 5:00 PM",
      sunday: "9:00 AM – 2:00 PM",
    },
    isSample: true,
  },

  {
    id: "pharmacies-sample",
    slug: "pharmacies-sample",
    name: "Sample Provider",
    categoryId: "pharmacies",
    areaId: "brasilito",
    serviceAreaIds: ["brasilito", "huacas", "flamingo"],
    location: "Brasilito, Guanacaste",
    image: "/images/providers/pharmacy-demo.png",
    rating: 4.7,
    reviewCount: 19,
    services: ["Pharmacy", "Personal Care", "Essentials"],
    description:
      "Local pharmacy offering everyday health, personal care and essential products for nearby communities in Guanacaste.",
    gallery: ["/images/providers/pharmacy-demo.png"],
    businessHours: {
      monday: "8:00 AM – 7:00 PM",
      tuesday: "8:00 AM – 7:00 PM",
      wednesday: "8:00 AM – 7:00 PM",
      thursday: "8:00 AM – 7:00 PM",
      friday: "8:00 AM – 7:00 PM",
      saturday: "8:00 AM – 6:00 PM",
      sunday: "9:00 AM – 2:00 PM",
    },
    isSample: true,
  },

  {
    id: "ac-sample",
    slug: "ac-sample",
    name: "Sample Provider",
    categoryId: "ac",
    areaId: "huacas",
    serviceAreaIds: ["huacas", "tamarindo", "brasilito", "flamingo", "potrero"],
    location: "Huacas, Guanacaste",
    image: "/images/providers/ac-demo.png",
    rating: 4.8,
    reviewCount: 27,
    services: ["Installation", "Maintenance", "Repair"],
    description:
      "Local air conditioning service providing installation, preventive maintenance and repairs for homes and businesses across Guanacaste.",
    gallery: ["/images/providers/ac-demo.png"],
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
    id: "pools-sample",
    slug: "pools-sample",
    name: "Sample Provider",
    categoryId: "pools",
    areaId: "potrero",
    serviceAreaIds: ["potrero", "flamingo", "surfside", "las-catalinas"],
    location: "Potrero, Guanacaste",
    image: "/images/providers/pools-demo.png",
    rating: 4.9,
    reviewCount: 21,
    services: ["Cleaning", "Maintenance", "Pool Care"],
    description:
      "Local pool service providing cleaning, routine maintenance and general pool care for homes and properties across Guanacaste.",
    gallery: ["/images/providers/pools-demo.png"],
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
    id: "handyman-sample",
    slug: "handyman-sample",
    name: "Sample Provider",
    categoryId: "handyman",
    areaId: "surfside",
    serviceAreaIds: ["surfside", "potrero", "flamingo", "brasilito"],
    location: "Surfside, Guanacaste",
    image: "/images/providers/handyman-demo.png",
    rating: 4.8,
    reviewCount: 23,
    services: ["Repairs", "Maintenance", "Installation"],
    description:
      "Local handyman service providing home repairs, maintenance and installations for properties across the Guanacaste area.",
    gallery: ["/images/providers/handyman-demo.png"],
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
    id: "personal-care-sample",
    slug: "personal-care-sample",
    name: "Sample Provider",
    categoryId: "personalCare",
    areaId: "tamarindo",
    serviceAreaIds: ["tamarindo", "huacas", "brasilito"],
    location: "Tamarindo, Guanacaste",
    image: "/images/providers/barbershop-demo.png",
    rating: 4.9,
    reviewCount: 26,
    services: ["Haircuts", "Grooming", "Personal Care"],
    description:
      "Local barbershop offering haircuts, grooming and personal care services in a relaxed and professional atmosphere.",
    gallery: ["/images/providers/barbershop-demo.png"],
    businessHours: {
      monday: "9:00 AM – 6:00 PM",
      tuesday: "9:00 AM – 6:00 PM",
      wednesday: "9:00 AM – 6:00 PM",
      thursday: "9:00 AM – 6:00 PM",
      friday: "9:00 AM – 7:00 PM",
      saturday: "9:00 AM – 7:00 PM",
      sunday: "10:00 AM – 3:00 PM",
    },
    isSample: true,
  },

  {
    id: "pet-care-sample",
    slug: "pet-care-sample",
    name: "Sample Provider",
    categoryId: "petCare",

    areaId: "huacas",

    serviceAreaIds: ["huacas", "tamarindo", "brasilito", "flamingo"],

    location: "Huacas, Guanacaste",

    image: "/images/providers/pet-care-demo.png",

    rating: 4.9,
    reviewCount: 29,

    services: ["Pet Care", "Pet Supplies", "Veterinary Services"],

    description:
      "Local pet care and veterinary service offering professional attention, pet essentials and general care for animals across nearby communities in Guanacaste.",

    gallery: ["/images/providers/pet-care-demo.png"],

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
];
