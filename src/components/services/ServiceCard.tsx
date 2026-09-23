import Image from "next/image";

import { Link } from "@/i18n/navigation";
import type { ServiceCategory } from "@/data/serviceCategories";
import { ServiceCardShape } from "@/components/services/ServiceCardShape";

type ServiceCardProps = {
  category: ServiceCategory;
  name: string;
  index: number;
};

type CardShape = "left" | "right" | "arch";

type CardLayout = {
  shape: CardShape;
  height: number;
};

const cardLayouts: CardLayout[] = [
  { shape: "left", height: 360 },  // Handyman
  { shape: "left", height: 370 },  // Restaurants
  { shape: "left", height: 360 },  // Pools

  { shape: "right", height: 352 }, // Mechanics
  { shape: "right", height: 368 }, // Pharmacies

  { shape: "left", height: 358 },  // Pet Care
  { shape: "left", height: 364 },  // Delivery

  { shape: "right", height: 354 }, // Tours
  { shape: "right", height: 364 }, // A/C

  { shape: "left", height: 358 },  // Barbers
];

export function ServiceCard({ category, name, index }: ServiceCardProps) {
  const Icon = category.Icon;
  const clipId = `service-card-${index}`;

 const layout = cardLayouts[index] ?? {
  shape: "left",
  height: 370,
};

  return (
    <Link
      href={`/services/${category.slug}`}
      className="group block shrink-0"
      aria-label={name}
    >
      <ServiceCardShape id={clipId} mirrored={layout.shape === "right"} />

      <article
        className="relative w-full overflow-hidden bg-black"
       style={{
  height: `${layout.height}px`,
  clipPath: `url(#${clipId})`,
}}
      >
        <Image
          src={category.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 12vw, 150px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/5" />

        <div className="absolute inset-x-0 bottom-6 z-10 flex flex-col items-center px-3 text-center text-white">
          <Icon size={24} strokeWidth={1.6} aria-hidden="true" />

          <h3 className="mt-3 text-[10px] font-semibold uppercase leading-[1.45] tracking-[0.17em]">
            {name}
          </h3>
        </div>
      </article>
    </Link>
  );
}
