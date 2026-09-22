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
            "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors",
            activeArea === "all"
              ? "bg-[var(--orbit-orange)] text-white"
              : "bg-black/[0.04] text-black/70 hover:bg-black/[0.08]",
          ].join(" ")}
        >
          <MapPin size={16} strokeWidth={2} aria-hidden="true" />
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
                "rounded-full px-5 py-3 text-sm font-medium transition-colors",
                isActive
                  ? "bg-[var(--orbit-orange)] text-white"
                  : "bg-black/[0.04] text-black/70 hover:bg-black/[0.08]",
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