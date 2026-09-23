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

  const serviceAreas = [
    "LAS CATALINAS",
    "PLAYA POTRERO",
    "FLAMINGO",
    "BRASILITO",
    "HUACAS",
  ];

  const orderedCategories = displayOrder
    .map((slug) => serviceCategories.find((category) => category.slug === slug))
    .filter((category): category is (typeof serviceCategories)[number] =>
      Boolean(category),
    );

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;

    if (!container) return;

    const amount = container.clientWidth * 0.5;

    container.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full">
      {/* CAROUSEL */}
      <div className="relative">
        {/* LEFT ARROW */}
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label={t("previous")}
          className="
            absolute left-5 top-1/2 z-30
            flex size-10 -translate-y-1/2
            items-center justify-center
            rounded-full border border-black/20
            bg-[#f7f4ef]/90 text-black
            backdrop-blur-sm
            transition
            hover:border-black hover:bg-black hover:text-white
          "
        >
          <ArrowLeft size={17} strokeWidth={1.5} />
        </button>

        {/* CARDS VIEWPORT */}
        <div className="px-12 lg:px-[60px]">
          {/* SCROLL AREA */}
          <div
            ref={scrollRef}
            className="
              overflow-x-auto scroll-smooth
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {/* CARDS TRACK */}
            <div className="flex w-max items-end gap-[8px]">
              {orderedCategories.map((category, index) => (
                <div
                  key={category.id}
                  className="
                    w-[140px] shrink-0
                    sm:w-[145px]
                    lg:w-[calc((100vw-176px)/8)]
                  "
                >
                  <ServiceCard
                    category={category}
                    name={t(`services.${category.translationKey}.name`)}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label={t("next")}
          className="
            absolute right-5 top-1/2 z-30
            flex size-10 -translate-y-1/2
            items-center justify-center
            rounded-full border border-black/20
            bg-[#f7f4ef]/90 text-black
            backdrop-blur-sm
            transition
            hover:border-black hover:bg-black hover:text-white
          "
        >
          <ArrowRight size={17} strokeWidth={1.5} />
        </button>
      </div>

      {/* SERVICE AREAS */}
      <div className="mt-8 hidden w-full px-12 lg:block lg:px-[60px]">
        <div className="grid w-full grid-cols-5 items-center">
          {serviceAreas.map((area, index) => (
            <div
              key={area}
              className="flex min-w-0 items-center justify-center"
            >
              {/* LEFT DIVIDER */}
              {index > 0 && (
                <span className="mr-5 h-px min-w-0 flex-1 bg-black/25" />
              )}

              {/* LOCATION */}
              <span
                className="
            shrink-0
            text-center
            text-[9px] font-semibold uppercase
            tracking-[0.24em]
            text-black/65
          "
              >
                {area}
              </span>

              {/* RIGHT DIVIDER */}
              {index < serviceAreas.length - 1 && (
                <span className="ml-5 h-px min-w-0 flex-1 bg-black/25" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
