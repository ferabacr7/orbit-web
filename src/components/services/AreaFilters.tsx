"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";

import {
  serviceAreas,
  type ServiceAreaId,
} from "@/data/serviceAreas";

type AreaFilter = "all" | ServiceAreaId;

type AreaFiltersProps = {
  allAreasLabel: string;
};

export function AreaFilters({
  allAreasLabel,
}: AreaFiltersProps) {
  const [activeArea, setActiveArea] = useState<AreaFilter>("all");

  return (
    <div
      className="mx-auto w-full max-w-[1440px] px-6 lg:px-12"
      aria-label={allAreasLabel}
    >
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setActiveArea("all")}
          aria-pressed={activeArea === "all"}
          className={[
            "inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium backdrop-blur-md transition-all duration-300 ease-out",
            activeArea === "all"
              ? "border-[var(--orbit-orange)] bg-[var(--orbit-orange)] text-white shadow-[0_10px_28px_rgba(255,112,35,0.30)] ring-1 ring-[var(--orbit-orange)]/20"
              : "border-black/[0.08] bg-white/75 text-black/70 shadow-[0_6px_18px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:border-black/[0.12] hover:bg-white hover:text-black hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)]",
          ].join(" ")}
        >
          <MapPin
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />

          {allAreasLabel}
        </button>

        {serviceAreas.map((area) => {
          const isActive = activeArea === area.id;

          return (
            <button
              key={area.id}
              type="button"
              onClick={() => setActiveArea(area.id)}
              aria-pressed={isActive}
              className={[
                "rounded-full border px-5 py-3 text-sm font-medium backdrop-blur-md transition-all duration-300 ease-out",
                isActive
                  ? "border-[var(--orbit-orange)] bg-[var(--orbit-orange)] text-white shadow-[0_10px_28px_rgba(255,112,35,0.30)] ring-1 ring-[var(--orbit-orange)]/20"
                  : "border-black/[0.08] bg-white/75 text-black/70 shadow-[0_6px_18px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:border-black/[0.12] hover:bg-white hover:text-black hover:shadow-[0_14px_30px_rgba(0,0,0,0.10)]",
              ].join(" ")}
            >
              {area.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}