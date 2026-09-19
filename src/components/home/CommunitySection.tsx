"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const newsCards = [
  {
    id: 0,
    image: "/images/community/community-news-1.png",
    alt: "Community news 1",
  },
  {
    id: 1,
    image: "/images/community/community-news-1.png",
    alt: "Community news 2",
  },
  {
    id: 2,
    image: "/images/community/community-news-1.png",
    alt: "Community news 3",
  },
];

export function CommunitySection() {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % newsCards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentCard = newsCards[activeCard];

  const t = useTranslations("CommunitySection");

  return (
    <section className="pb-16">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="relative h-[450px] overflow-hidden rounded-[34px]">
          {/* WAVE BANNER */}
          <Image
            src="/images/community/community-wave-banner.png"
            alt=""
            fill
            sizes="100vw"
            className="object-contain object-right"
            priority
          />

          {/* NEWS AREA */}
          <div className="absolute left-6 top-3 z-10 w-[70%] max-w-[910px] md:left-8 lg:left-10">
            {" "}
            {/* LABEL */}
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[2px] w-10 bg-orbit-orange" />

              <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-black">
                {t("latestNews")}
              </p>
            </div>
            {/* IMAGE CARD */}
            <div className="overflow-hidden rounded-[28px] border border-black/10 bg-black/45 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <div className="relative h-[285px] w-full md:h-[310px] lg:h-[325px]">
                <Image
                  src={currentCard.image}
                  alt={currentCard.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 880px"
                  className="object-cover"
                />
              </div>

              {/* DOTS */}
              <div className="flex justify-center gap-2 py-4">
                {newsCards.map((card, index) => (
                  <button
                    key={card.id}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setActiveCard(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeCard
                        ? "w-8 bg-orbit-orange"
                        : "w-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
