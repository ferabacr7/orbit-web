"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef } from "react";

import { ServiceCard } from "@/components/services/ServiceCard";
import { serviceCategories } from "@/data/serviceCategories";

export function ServiceCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("ServiceCategories");

  const displayOrder = [
    "handyman",
    "restaurants",
    "pools",
    "mechanics",
    "pharmacies",
    "pet-services",
    "delivery",
    "tours-activities",
    "air-conditioning",
    "barbershops",
  ];

  const orderedCategories = displayOrder
    .map((slug) => serviceCategories.find((category) => category.slug === slug))
    .filter((category): category is (typeof serviceCategories)[number] =>
      Boolean(category),
    );

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;

    if (!container) return;

    container.scrollBy({
      left: direction === "right" ? 500 : -500,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full">
      <button
        type="button"
        onClick={() => scroll("left")}
        aria-label={t("previous")}
        className="absolute left-5 top-1/2 z-30 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
      >
        <ArrowLeft size={17} strokeWidth={1.7} />
      </button>

      <div
        ref={scrollRef}
        className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex w-max items-center gap-[6px] px-16">
          {" "}
          {orderedCategories.map((category, index) => (
            <ServiceCard
              key={category.id}
              category={category}
              name={t(`services.${category.translationKey}.name`)}
              index={index}
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => scroll("right")}
        aria-label={t("next")}
        className="absolute right-5 top-1/2 z-30 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
      >
        <ArrowRight size={17} strokeWidth={1.7} />
      </button>
    </section>
  );
}
