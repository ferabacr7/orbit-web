"use client";

import { ArrowRight, Search } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { FormEvent, useMemo, useState } from "react";

import { useRouter } from "@/i18n/navigation";

type SearchCategory = {
  slug: string;
  en: string;
  es: string;
  keywords: string[];
};

const categories: SearchCategory[] = [
  {
    slug: "mechanics",
    en: "Mechanics",
    es: "Mecánica",
    keywords: [
      "mechanic",
      "mechanics",
      "auto",
      "car",
      "cars",
      "repair",
      "mecanico",
      "mecánico",
      "mecanica",
      "mecánica",
      "carro",
      "carros",
      "taller",
      "vehiculo",
      "vehículo",
    ],
  },
  {
    slug: "restaurants",
    en: "Restaurants",
    es: "Restaurantes",
    keywords: [
      "restaurant",
      "restaurants",
      "food",
      "eat",
      "dinner",
      "lunch",
      "comida",
      "restaurante",
      "restaurantes",
      "comer",
      "almuerzo",
      "cena",
    ],
  },
  {
    slug: "tours-activities",
    en: "Tours & Activities",
    es: "Tours y actividades",
    keywords: [
      "tour",
      "tours",
      "activity",
      "activities",
      "adventure",
      "excursion",
      "excursions",
      "actividad",
      "actividades",
      "excursion",
      "excursión",
      "aventura",
    ],
  },
  {
    slug: "delivery",
    en: "Delivery",
    es: "Delivery / Courier",
    keywords: [
      "delivery",
      "courier",
      "shipping",
      "send",
      "package",
      "entrega",
      "entregas",
      "repartidor",
      "repartidores",
      "mensajeria",
      "mensajería",
      "paquete",
    ],
  },
  {
    slug: "pharmacies",
    en: "Pharmacies",
    es: "Farmacias",
    keywords: [
      "pharmacy",
      "pharmacies",
      "medicine",
      "medication",
      "farmacia",
      "farmacias",
      "medicina",
      "medicamentos",
    ],
  },
  {
    slug: "air-conditioning",
    en: "Air Conditioning",
    es: "Aire acondicionado",
    keywords: [
      "air conditioning",
      "air conditioner",
      "ac",
      "a/c",
      "cooling",
      "aire",
      "aire acondicionado",
      "clima",
    ],
  },
  {
    slug: "pools",
    en: "Pools",
    es: "Piscinas",
    keywords: [
      "pool",
      "pools",
      "pool cleaning",
      "pool maintenance",
      "piscina",
      "piscinas",
      "limpieza piscina",
      "mantenimiento piscina",
    ],
  },
  {
    slug: "handyman",
    en: "Handyman",
    es: "Mantenimiento",
    keywords: [
      "handyman",
      "maintenance",
      "repair",
      "home repair",
      "fix",
      "mantenimiento",
      "reparacion",
      "reparación",
      "arreglo",
      "arreglos",
      "casa",
    ],
  },
  {
    slug: "barbershops",
    en: "Barbershops",
    es: "Barberías",
    keywords: [
      "barber",
      "barbershop",
      "barbershops",
      "haircut",
      "hair",
      "barberia",
      "barbería",
      "barberias",
      "barberías",
      "corte",
      "cabello",
    ],
  },
  {
    slug: "pet-services",
    en: "Pet Services",
    es: "Servicios para mascotas",
    keywords: [
      "pet",
      "pets",
      "dog",
      "dogs",
      "cat",
      "cats",
      "grooming",
      "veterinary",
      "mascota",
      "mascotas",
      "perro",
      "perros",
      "gato",
      "gatos",
      "veterinario",
      "veterinaria",
    ],
  },
];

function normalizeSearchValue(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export function SearchBar() {
  const t = useTranslations("SearchBar");
  const locale = useLocale();
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const normalizedQuery = normalizeSearchValue(query);

  const results = useMemo(() => {
    if (!normalizedQuery) {
      return [];
    }

    return categories.filter((category) => {
      const searchableValues = [
        category.en,
        category.es,
        ...category.keywords,
      ];

      return searchableValues.some((value) =>
        normalizeSearchValue(value).includes(normalizedQuery)
      );
    });
  }, [normalizedQuery]);

  const showResults =
    isFocused && normalizedQuery.length > 0;

  const goToCategory = (slug: string) => {
    setQuery("");
    setIsFocused(false);

    router.push(`/services/${slug}`);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (results.length === 0) {
      return;
    }

    goToCategory(results[0].slug);
  };

  return (
    <div className="relative w-full">
      <form
        role="search"
        onSubmit={handleSubmit}
        className="
          group
          flex h-[60px] w-full items-center
          rounded-full
          border border-white/70
          bg-white/90
          py-[6px] pl-5 pr-[6px]
          shadow-[0_16px_45px_rgba(0,0,0,0.14)]
          backdrop-blur-xl
          transition-all duration-300
          focus-within:border-white
          focus-within:bg-white/95
          focus-within:shadow-[0_18px_55px_rgba(0,0,0,0.16),0_0_0_3px_rgba(255,100,38,0.10)]
        "
      >
        <Search
          size={19}
          strokeWidth={1.5}
          className="
            shrink-0
            text-black/60
            transition-colors duration-300
            group-focus-within:text-black/80
          "
          aria-hidden="true"
        />

        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            window.setTimeout(() => {
              setIsFocused(false);
            }, 150);
          }}
          aria-label={t("inputLabel")}
          aria-autocomplete="list"
          aria-expanded={showResults}
          placeholder={t("placeholder")}
          autoComplete="off"
          className="
            h-full min-w-0 flex-1
            bg-transparent
            px-4
            text-[15px] font-medium
            text-[#101318]
            outline-none
            placeholder:font-normal
            placeholder:text-black/45
          "
        />

        <button
          type="submit"
          aria-label={t("submitLabel")}
          className="
            flex size-[47px] shrink-0
            items-center justify-center
            rounded-full
            bg-orbit-orange
            text-white
            shadow-[0_7px_20px_rgba(255,100,38,0.30)]
            transition-all duration-300
            hover:scale-[1.04]
            hover:shadow-[0_9px_24px_rgba(255,100,38,0.38)]
            active:scale-95
          "
        >
          <ArrowRight
            size={19}
            strokeWidth={1.6}
            className="transition-transform duration-300 group-hover:translate-x-[1px]"
            aria-hidden="true"
          />
        </button>
      </form>

      {showResults && (
        <div
          className="
            absolute left-0 right-0 top-[68px]
            z-50
            overflow-hidden
            rounded-[22px]
            border border-black/[0.07]
            bg-white
            shadow-[0_18px_50px_rgba(0,0,0,0.14)]
          "
        >
          {results.length > 0 ? (
            <div className="p-2">
              {results.map((category) => (
                <button
                  key={category.slug}
                  type="button"
                  onMouseDown={(event) => {
                    event.preventDefault();
                  }}
                  onClick={() =>
                    goToCategory(category.slug)
                  }
                  className="
                    group/result
                    flex w-full items-center
                    justify-between gap-4
                    rounded-[16px]
                    px-4 py-3
                    text-left
                    transition-colors
                    hover:bg-[#f7f4ef]
                  "
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className="
                        flex h-9 w-9 shrink-0
                        items-center justify-center
                        rounded-full
                        bg-[#fff0e8]
                        text-orbit-orange
                      "
                    >
                      <Search
                        size={16}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>

                    <span className="truncate text-sm font-semibold text-[#101318]">
                      {locale === "es"
                        ? category.es
                        : category.en}
                    </span>
                  </div>

                  <ArrowRight
                    size={16}
                    strokeWidth={1.6}
                    className="
                      shrink-0
                      text-black/35
                      transition-transform
                      group-hover/result:translate-x-1
                      group-hover/result:text-orbit-orange
                    "
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          ) : (
            <div className="px-5 py-5">
              <p className="text-sm font-medium text-black/55">
                {locale === "es"
                  ? "No encontramos una categoría para esa búsqueda."
                  : "We couldn't find a category for that search."}
              </p>

              <p className="mt-1 text-xs leading-5 text-black/40">
                {locale === "es"
                  ? "Probá con mecánica, restaurantes, piscinas, mascotas u otro servicio."
                  : "Try mechanics, restaurants, pools, pets, or another service."}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}