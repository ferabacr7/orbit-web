"use client";

import { ChevronRight } from "lucide-react";
import { useRef } from "react";

import { Link } from "@/i18n/navigation";

type HeroQuickFiltersProps = {
  locale: string;
};

export function HeroQuickFilters({ locale }: HeroQuickFiltersProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const filters = [
    {
      label: locale === "es" ? "Restaurantes" : "Restaurants",
      slug: "restaurants",
    },
    {
      label: locale === "es" ? "Mecánica" : "Mechanics",
      slug: "mechanics",
    },
    {
      label: locale === "es" ? "Tours" : "Tours",
      slug: "tours-activities",
    },
    {
      label: locale === "es" ? "Farmacias" : "Pharmacies",
      slug: "pharmacies",
    },
    {
      label: locale === "es" ? "Aire acondicionado" : "Air Conditioning",
      slug: "air-conditioning",
    },
    {
      label: locale === "es" ? "Piscinas" : "Pools",
      slug: "pools",
    },
    {
      label: locale === "es" ? "Mantenimiento" : "Handyman",
      slug: "handyman",
    },
    {
      label: locale === "es" ? "Barberías" : "Barbershops",
      slug: "barbershops",
    },
    {
      label: locale === "es" ? "Mascotas" : "Pet Services",
      slug: "pet-services",
    },
    {
      label: locale === "es" ? "Delivery" : "Delivery",
      slug: "delivery",
    },
  ];

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 260,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative mt-3 flex w-full items-center gap-2">
      <div
        ref={scrollRef}
        className="
          flex
          min-w-0
          flex-1
          gap-2
          overflow-x-auto
          pb-1
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {filters.map((filter) => (
          <Link
            key={filter.slug}
            href={`/services/${filter.slug}`}
            className="
              shrink-0
              rounded-full
              border
              border-black/[0.07]
              bg-[#e3e3e1]/85
              px-5
              py-[9px]
              text-[13px]
              font-medium
              text-[#3f3f3d]
              shadow-[inset_0_1px_0_rgba(255,255,255,0.60)]
              backdrop-blur-md
              transition-all
              duration-200
              hover:-translate-y-[1px]
              hover:border-black/[0.12]
              hover:bg-[#d9d9d7]/95
              hover:text-black
              hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)]
            "
          >
            {filter.label}
          </Link>
        ))}
      </div>

      <button
        type="button"
        onClick={scrollRight}
        aria-label={
          locale === "es"
            ? "Ver más categorías"
            : "View more categories"
        }
        className="
          flex
          h-[38px]
          w-[38px]
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-black/[0.08]
          bg-white/90
          text-black/65
          shadow-[0_5px_18px_rgba(0,0,0,0.08)]
          backdrop-blur-md
          transition-all
          duration-200
          hover:scale-[1.04]
          hover:bg-white
          hover:text-black
          active:scale-95
        "
      >
        <ChevronRight size={18} strokeWidth={1.8} />
      </button>
    </div>
  );
}