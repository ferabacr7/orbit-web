"use client";

import {
  ArrowLeft,
  ArrowRight,
  Box,
  Cross,
  Droplets,
  PawPrint,
  Scissors,
  Snowflake,
  Utensils,
  Wrench,
  Waves,
  Hammer,
} from "lucide-react";
import { useRef, useState } from "react";
import Image from "next/image";

import type { LucideIcon } from "lucide-react";

type Service = {
  name: string;
  description: string;
  Icon: LucideIcon;
  className: string;
  image?: string;
};

const services: Service[] = [
  {
    name: "Mechanics",
    description: "Keep moving.",
    Icon: Wrench,
    className: "service-mechanic",
    image: "/images/services/mechanics.png",
  },
  {
    name: "Restaurants",
    description: "Good food, local people.",
    Icon: Utensils,
    className: "service-food",
    image: "/images/services/restaurants.png",
  },
  {
    name: "Tours & Activities",
    description: "Explore Guanacaste.",
    Icon: Waves,
    className: "service-tour",
    image: "/images/services/tours-activities.png",
  },
  {
    name: "Delivery",
    description: "From here to you.",
    Icon: Box,
    className: "service-delivery",
    image: "/images/services/delivery.png",
  },
  {
    name: "Pharmacies",
    description: "Health, closer to you.",
    Icon: Cross,
    className: "service-pharmacy",
    image: "/images/services/pharmacies.png",
  },
  {
    name: "A/C Services",
    description: "Stay comfortable.",
    Icon: Snowflake,
    className: "service-ac",
    image: "/images/services/ac-services.png",
  },
  {
    name: "Pools",
    description: "Care for your pool.",
    Icon: Droplets,
    className: "service-pools",
    image: "/images/services/pools.png",
  },
  {
    name: "Handyman",
    description: "Help around your home.",
    Icon: Hammer,
    className: "service-handyman",
    image: "/images/services/handyman.png",
  },
  {
    name: "Barbers & Personal Care",
    description: "Look and feel your best.",
    Icon: Scissors,
    className: "service-personal-care",
    image: "/images/services/barbers-personal-care.png",
  },
  {
    name: "Pet Care",
    description: "For happy companions.",
    Icon: PawPrint,
    className: "service-pet",
    image: "/images/services/pet-care.png",
  },
];

const locations = [
  "Las Catalinas",
  "Playa Potrero",
  "Flamingo",
  "Brasilito",
  "Huacas",
];

export function ServiceCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;

    if (!container) return;

    container.scrollBy({
      left: direction === "right" ? 520 : -520,
      behavior: "smooth",
    });
  };

  const revealCard = (index: number) => {
    setActiveIndex(index);

    const container = scrollRef.current;
    const track = container?.firstElementChild as HTMLElement | null;
    const card = track?.children[index] as HTMLElement | undefined;

    if (!container || !card) return;

    const containerRect = container.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    if (cardRect.right > containerRect.right - 72) {
      container.scrollBy({
        left: cardRect.right - containerRect.right + 110,
        behavior: "smooth",
      });
    }

    if (cardRect.left < containerRect.left + 72) {
      container.scrollBy({
        left: cardRect.left - containerRect.left - 110,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="services-section overflow-hidden pb-20"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-[1440px] px-6 pt-14 lg:px-12">
        <div className="services-panel overflow-hidden">
          {/* HEADER */}
          <div className="px-8 pb-7 pt-8 lg:px-14">
            <h2
              id="services-title"
              className="font-editorial text-3xl tracking-[-0.035em]"
            >
              Explore locally
            </h2>
          </div>

          {/* SERVICES CAROUSEL */}
          <div className="relative">
            {/* LEFT ARROW */}
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous services"
              className="absolute left-4 top-1/2 z-30 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white backdrop-blur-md transition duration-300 hover:border-white/70 hover:bg-white hover:text-black"
            >
              <ArrowLeft size={17} strokeWidth={1.7} />
            </button>

            {/* SCROLLABLE VIEWPORT */}
            <div
              ref={scrollRef}
              className="service-scroll overflow-x-auto pb-7"
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* CENTERED TRACK */}
              <div className="mx-auto flex w-max min-w-full snap-x snap-mandatory items-end justify-center gap-2 px-16">
                {services.map(
                  ({ name, description, Icon, className, image }, index) => {
                    const isActive = activeIndex === index;

                    return (
                      <article
                        key={name}
                        tabIndex={0}
                        onMouseEnter={() => revealCard(index)}
                        onFocus={() => revealCard(index)}
                        onBlur={() => setActiveIndex(null)}
                        className={[
                          "service-card group relative shrink-0 snap-start overflow-hidden",
                          className,
                          isActive ? "service-card-active" : "",
                        ].join(" ")}
                      >
                        <div className="service-card-image absolute inset-0">
                          {image && (
                            <Image
                              src={image}
                              alt=""
                              fill
                              sizes="(max-width: 768px) 70vw, 180px"
                              className="object-cover"
                            />
                          )}
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                        <div className="absolute inset-x-0 bottom-0 z-10 px-3 pb-8 text-center text-white">
                          <Icon
                            size={24}
                            strokeWidth={1.6}
                            aria-hidden="true"
                            className="service-icon mx-auto"
                          />

                          <h3 className="mx-auto mt-4 max-w-[180px] text-xs font-semibold uppercase leading-5 tracking-[0.14em]">
                            {name}
                          </h3>

                          <div
                            className={[
                              "service-description overflow-hidden",
                              isActive ? "service-description-active" : "",
                            ].join(" ")}
                          >
                            <p className="pt-2 text-sm text-white/70">
                              {description}
                            </p>

                            <span className="mt-3 inline-flex items-center gap-2 text-xs font-medium">
                              Explore
                              <ArrowRight size={14} />
                            </span>
                          </div>
                        </div>
                      </article>
                    );
                  },
                )}
              </div>
            </div>

            {/* RIGHT ARROW */}
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next services"
              className="absolute right-4 top-1/2 z-30 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white backdrop-blur-md transition duration-300 hover:border-white/70 hover:bg-white hover:text-black"
            >
              <ArrowRight size={17} strokeWidth={1.7} />
            </button>
          </div>

          {/* LOCATIONS */}
          <div className="px-8 pb-8 pt-2 lg:px-14">
            <div className="flex items-center justify-between gap-4">
              {locations.map((location, index) => (
                <div key={location} className="contents">
                  <span className="shrink-0 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">
                    {location}
                  </span>

                  {index !== locations.length - 1 && (
                    <span
                      className="h-px min-w-6 flex-1 bg-white/25"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
