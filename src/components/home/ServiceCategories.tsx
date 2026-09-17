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

const services = [
  {
    name: "Mechanics",
    description: "Keep moving.",
    Icon: Wrench,
    className: "service-mechanic",
  },
  {
    name: "Restaurants",
    description: "Good food, local people.",
    Icon: Utensils,
    className: "service-food",
  },
  {
    name: "Tours & Activities",
    description: "Explore Guanacaste.",
    Icon: Waves,
    className: "service-tour",
  },
  {
    name: "Delivery",
    description: "From here to you.",
    Icon: Box,
    className: "service-delivery",
  },
  {
    name: "Pharmacies",
    description: "Health, closer to you.",
    Icon: Cross,
    className: "service-pharmacy",
  },
  {
    name: "A/C Services",
    description: "Stay comfortable.",
    Icon: Snowflake,
    className: "service-ac",
  },
  {
    name: "Pools",
    description: "Care for your pool.",
    Icon: Droplets,
    className: "service-pools",
  },
  {
    name: "Handyman",
    description: "Help around your home.",
    Icon: Hammer,
    className: "service-handyman",
  },
  {
    name: "Barbers & Personal Care",
    description: "Look and feel your best.",
    Icon: Scissors,
    className: "service-personal-care",
  },
  {
    name: "Pet Care",
    description: "For happy companions.",
    Icon: PawPrint,
    className: "service-pet",
  },
];

export function ServiceCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "right" ? 520 : -520,
      behavior: "smooth",
    });
  };

  const revealCard = (index: number) => {
    setActiveIndex(index);

    const container = scrollRef.current;
    const card = container?.children[index] as HTMLElement | undefined;

    if (!container || !card) return;

    const containerRect = container.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    if (cardRect.right > containerRect.right - 24) {
      container.scrollBy({
        left: cardRect.right - containerRect.right + 90,
        behavior: "smooth",
      });
    }

    if (cardRect.left < containerRect.left + 24) {
      container.scrollBy({
        left: cardRect.left - containerRect.left - 90,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="overflow-hidden pb-20" aria-labelledby="services-title">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-7 flex items-end justify-between px-6 lg:px-12">
          <div>
            <p className="eyebrow text-black/50">Explore locally</p>

            <h2
              id="services-title"
              className="mt-2 font-editorial text-4xl tracking-[-0.035em] md:text-5xl"
            >
              Explore our services
            </h2>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous services"
              className="service-arrow"
            >
              <ArrowLeft size={19} />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next services"
              className="service-arrow"
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="service-scroll flex snap-x snap-mandatory gap-2 overflow-x-auto px-6 pb-7 lg:px-12"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {services.map(
            ({ name, description, Icon, className }, index) => {
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
                  <div className="service-card-image absolute inset-0" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-12 text-center text-white">
                    <Icon
                      size={28}
                      strokeWidth={1.6}
                      aria-hidden="true"
                      className="service-icon mx-auto"
                    />

                    <h3 className="mt-4 max-w-[180px] text-xs font-semibold uppercase leading-5 tracking-[0.14em]">
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

        <div className="grid items-center gap-5 px-6 lg:grid-cols-[auto_1fr_auto_1fr_auto] lg:px-12">
          <div className="flex items-center gap-3">
            <span className="relative size-6 rounded-full border border-black/70">
              <span className="absolute left-[3px] top-[3px] size-2 rounded-full bg-orbit-orange" />
            </span>

            <span className="text-[10px] uppercase tracking-[0.28em]">
              10 Services
            </span>
          </div>

          <div className="hidden h-px bg-black/25 lg:block" />

          <span className="hidden text-center text-[10px] uppercase leading-5 tracking-[0.28em] text-black/55 lg:block">
            All you need
            <br />
            in Guanacaste
          </span>

          <div className="hidden h-px bg-black/25 lg:block" />

          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous services"
              className="service-arrow"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next services"
              className="service-arrow"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}