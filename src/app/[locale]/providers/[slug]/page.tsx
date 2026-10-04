import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  Clock3,
  MapPin,
  MessageCircle,
  Star,
} from "lucide-react";
import { notFound } from "next/navigation";

import { providers } from "@/data/providers";
import { serviceAreas } from "@/data/serviceAreas";
import { serviceCategories } from "@/data/serviceCategories";

type ProviderProfilePageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

const serviceTranslations: Record<
  string,
  {
    es: string;
    en: string;
  }
> = {
  Diagnostics: {
    es: "Diagnóstico",
    en: "Diagnostics",
  },
  Maintenance: {
    es: "Mantenimiento",
    en: "Maintenance",
  },
  Repairs: {
    es: "Reparaciones",
    en: "Repairs",
  },
  Installation: {
    es: "Instalación",
    en: "Installation",
  },
  Repair: {
    es: "Reparación",
    en: "Repair",
  },
  Cleaning: {
    es: "Limpieza",
    en: "Cleaning",
  },
  "Pool Care": {
    es: "Cuidado de piscinas",
    en: "Pool Care",
  },
  "Local Food": {
    es: "Comida local",
    en: "Local Food",
  },
  Lunch: {
    es: "Almuerzo",
    en: "Lunch",
  },
  Dinner: {
    es: "Cena",
    en: "Dinner",
  },
  Tours: {
    es: "Tours",
    en: "Tours",
  },
  Activities: {
    es: "Actividades",
    en: "Activities",
  },
  Experiences: {
    es: "Experiencias",
    en: "Experiences",
  },
  Delivery: {
    es: "Entregas",
    en: "Delivery",
  },
  Courier: {
    es: "Mensajería",
    en: "Courier",
  },
  "Local Service": {
    es: "Servicio local",
    en: "Local Service",
  },
  Pharmacy: {
    es: "Farmacia",
    en: "Pharmacy",
  },
  "Personal Care": {
    es: "Cuidado personal",
    en: "Personal Care",
  },
  Essentials: {
    es: "Productos esenciales",
    en: "Essentials",
  },
  Haircuts: {
    es: "Cortes de cabello",
    en: "Haircuts",
  },
  Grooming: {
    es: "Cuidado personal",
    en: "Grooming",
  },
  "Pet Care": {
    es: "Cuidado de mascotas",
    en: "Pet Care",
  },
  "Pet Supplies": {
    es: "Productos para mascotas",
    en: "Pet Supplies",
  },
  "Veterinary Services": {
    es: "Servicios veterinarios",
    en: "Veterinary Services",
  },
};

const dayOrder = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;

export default async function ProviderProfilePage({
  params,
}: ProviderProfilePageProps) {
  const { locale, slug } = await params;

  const currentLocale = locale === "es" ? "es" : "en";

  const provider = providers.find((item) => item.slug === slug);

  if (!provider) {
    notFound();
  }

  const category = serviceCategories.find(
    (item) => item.id === provider.categoryId,
  );

  if (!category) {
    notFound();
  }

  const areasServed = serviceAreas.filter((area) =>
    provider.serviceAreaIds?.includes(area.id),
  );

  const hasReviews = provider.reviewCount > 0;

  const copy =
    currentLocale === "es"
      ? {
          back: "Volver a proveedores",
          about: "Sobre este proveedor",
          services: "Servicios",
          areas: "Áreas de servicio",
          gallery: "Galería",
          contact: "Contactar por WhatsApp",
          demoContact: "Contactar por WhatsApp",
          demoContactNote: "Disponible cuando el proveedor esté publicado",
          reviews: "en Google",
          demo: "Demo",
          providerLabel: "Proveedor ORBIT",
          sampleProvider: "Proveedor de muestra",
          hours: "Horario de atención",
          viewHours: "Ver horario completo",
          closed: "Cerrado",
          days: {
            monday: "Lunes",
            tuesday: "Martes",
            wednesday: "Miércoles",
            thursday: "Jueves",
            friday: "Viernes",
            saturday: "Sábado",
            sunday: "Domingo",
          },
          fallbackDescription:
            "La información del proveedor estará disponible aquí.",
        }
      : {
          back: "Back to providers",
          about: "About this provider",
          services: "Services",
          areas: "Service areas",
          gallery: "Gallery",
          contact: "Contact on WhatsApp",
          demoContact: "Contact on WhatsApp",
          demoContactNote: "Available when the provider is published",
          reviews: "on Google",
          demo: "Demo",
          providerLabel: "ORBIT Provider",
          sampleProvider: "Sample Provider",
          hours: "Business hours",
          viewHours: "View full hours",
          closed: "Closed",
          days: {
            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday",
            saturday: "Saturday",
            sunday: "Sunday",
          },
          fallbackDescription: "Provider information will be available here.",
        };

  const displayName = provider.isSample ? copy.sampleProvider : provider.name;

  const localizedDescription =
    provider.slug === "mechanics-sample"
      ? currentLocale === "es"
        ? "Servicio automotriz local especializado en diagnóstico, mantenimiento preventivo y reparaciones en Guanacaste."
        : "Local automotive service specializing in diagnostics, preventive maintenance and repairs across Guanacaste."
      : (provider.description ?? copy.fallbackDescription);

  const localizedServices = provider.services.map(
    (service) => serviceTranslations[service]?.[currentLocale] ?? service,
  );

  const localizeHours = (hours: string) => {
    if (hours === "Closed") {
      return copy.closed;
    }

    if (currentLocale === "es") {
      return hours.replaceAll("AM", "a. m.").replaceAll("PM", "p. m.");
    }

    return hours;
  };

  const showGallery = provider.gallery && provider.gallery.length > 1;

  return (
    <main className="bg-[#f7f4ef]">
      {" "}
      <div className="mx-auto w-full max-w-[1440px] px-6 pb-12 pt-10 lg:px-12">
        {/* BACK */}
        <Link
          href={`/${locale}/services/${category.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-black/55 transition-all duration-300 hover:-translate-x-1 hover:text-[var(--orbit-orange)]"
        >
          <ArrowLeft size={17} aria-hidden="true" />

          {copy.back}
        </Link>

        {/* HERO */}
        <section className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          {/* MAIN IMAGE */}
          <div className="group relative h-[420px] overflow-hidden rounded-[32px] border border-black/[0.08] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.10)] sm:h-[520px] lg:h-[620px]">
            <Image
              src={provider.image}
              alt={displayName}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

            {provider.isSample && (
              <span className="absolute left-6 top-6 rounded-full border border-white/20 bg-[var(--orbit-orange)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.20)]">
                {copy.demo}
              </span>
            )}
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative flex flex-col gap-4 lg:h-[620px]">
            {/* PROVIDER INFO */}
            <div className="relative z-20 flex flex-col overflow-visible rounded-[32px] border border-black/[0.08] bg-white/95 p-7 shadow-[0_24px_70px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:p-9 lg:h-[500px] lg:p-10">
              {/* ORANGE ACCENT */}
              <div className="absolute inset-x-0 top-0 h-[4px] rounded-t-[32px] bg-gradient-to-r from-[var(--orbit-orange)] via-[var(--orbit-orange)]/70 to-transparent" />

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--orbit-orange)]">
                  {copy.providerLabel}
                </p>

                <h1 className="mt-4 whitespace-nowrap font-editorial text-4xl leading-[0.95] tracking-[-0.04em] text-black sm:text-5xl lg:text-[3.25rem]">
                  {displayName}
                </h1>

                {/* REVIEWS */}
                {hasReviews && (
                  <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-black/65">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--orbit-orange)]/10">
                      <Star
                        size={17}
                        strokeWidth={1.8}
                        className="fill-[var(--orbit-orange)] text-[var(--orbit-orange)]"
                        aria-hidden="true"
                      />
                    </div>

                    <span className="font-semibold text-black">
                      {provider.rating.toFixed(1)}
                    </span>

                    <span>
                      ({provider.reviewCount}) {copy.reviews}
                    </span>
                  </div>
                )}

                {/* LOCATION */}
                <div className="mt-4 flex items-center gap-2 text-sm text-black/55">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--orbit-orange)]/[0.07]">
                    <MapPin
                      size={16}
                      className="text-[var(--orbit-orange)]"
                      aria-hidden="true"
                    />
                  </div>

                  <span>{provider.location}</span>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-6 max-w-xl text-base leading-7 text-black/60">
                  {localizedDescription}
                </p>

                {/* BUSINESS HOURS */}
                {provider.businessHours && (
                  <div className="relative mt-6 border-t border-black/[0.07] pt-5">
                    <details className="group relative">
                      <summary className="flex cursor-pointer list-none items-center justify-between rounded-[20px] border border-[var(--orbit-orange)]/20 bg-[var(--orbit-orange)]/[0.05] px-4 py-3 transition-all duration-300 hover:border-[var(--orbit-orange)]/40 hover:bg-[var(--orbit-orange)]/[0.09] [&::-webkit-details-marker]:hidden">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--orbit-orange)]/10">
                            <Clock3
                              size={17}
                              className="text-[var(--orbit-orange)]"
                              aria-hidden="true"
                            />
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-black">
                              {copy.hours}
                            </p>

                            <p className="mt-0.5 text-xs text-black/45">
                              {copy.viewHours}
                            </p>
                          </div>
                        </div>

                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                          <ChevronDown
                            size={17}
                            className="text-black/45 transition-transform duration-300 group-open:rotate-180"
                            aria-hidden="true"
                          />
                        </div>
                      </summary>

                      {/* FLOATING HOURS DROPDOWN */}
                      <div className="absolute left-0 right-0 top-full z-50 mt-3 max-h-[260px] overflow-y-auto rounded-[20px] border border-black/[0.08] bg-white px-4 py-2 shadow-[0_24px_65px_rgba(0,0,0,0.18)]">
                        {dayOrder.map((day, index) => {
                          const hours = provider.businessHours?.[day];

                          if (!hours) {
                            return null;
                          }

                          return (
                            <div
                              key={day}
                              className={[
                                "flex items-center justify-between gap-6 py-3 text-sm",
                                index !== dayOrder.length - 1
                                  ? "border-b border-black/[0.055]"
                                  : "",
                              ].join(" ")}
                            >
                              <span className="font-medium text-black/65">
                                {copy.days[day]}
                              </span>

                              <span
                                className={
                                  hours === "Closed"
                                    ? "font-semibold text-[var(--orbit-orange)]"
                                    : "text-right text-black/50"
                                }
                              >
                                {localizeHours(hours)}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </details>
                  </div>
                )}
              </div>
            </div>

            {/* WHATSAPP CTA */}
            {provider.whatsappNumber ? (
              <a
                href={`https://wa.me/${provider.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="group relative z-10 flex flex-1 items-center justify-between overflow-hidden rounded-[28px] bg-[var(--orbit-orange)] px-7 py-5 text-white shadow-[0_18px_45px_rgba(255,112,35,0.30)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(255,112,35,0.46)] active:translate-y-0 active:scale-[0.985]"
              >
                {/* LIGHT EFFECT */}
                <div className="pointer-events-none absolute -right-10 -top-14 h-36 w-36 rounded-full bg-white/15 blur-2xl" />
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-white/35" />

                <div className="relative flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/15 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <MessageCircle
                      size={23}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="text-base font-semibold tracking-[-0.01em]">
                      {copy.contact}
                    </p>

                    <p className="mt-1 text-xs text-white/75">WhatsApp</p>
                  </div>
                </div>

                <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
                  <span className="text-xl">→</span>
                </div>
              </a>
            ) : (
              <div className="group relative z-10 flex flex-1 items-center justify-between overflow-hidden rounded-[28px] bg-[var(--orbit-orange)] px-7 py-5 text-white shadow-[0_18px_45px_rgba(255,112,35,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(255,112,35,0.42)]">
                {/* LIGHT EFFECT */}
                <div className="pointer-events-none absolute -right-10 -top-14 h-36 w-36 rounded-full bg-white/15 blur-2xl" />
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-white/35" />

                <div className="relative flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/15 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <MessageCircle
                      size={23}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="text-base font-semibold tracking-[-0.01em]">
                      {copy.demoContact}
                    </p>

                    <p className="mt-1 text-xs text-white/75">
                      {copy.demoContactNote}
                    </p>
                  </div>
                </div>

                <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
                  <span className="text-xl">→</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* DETAILS */}
        <section className="mt-10 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {/* SERVICES */}
          <div className="group relative h-full overflow-hidden rounded-[28px] border border-black/[0.08] bg-white/90 p-7 shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[var(--orbit-orange)]/25 hover:shadow-[0_26px_65px_rgba(0,0,0,0.12)]">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[var(--orbit-orange)] to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

            <h2 className="font-editorial text-2xl tracking-[-0.03em] text-black">
              {copy.services}
            </h2>

            <div className="mt-6 space-y-3">
              {localizedServices.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 text-sm text-black/65"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--orbit-orange)]/10 transition-all duration-300 group-hover:bg-[var(--orbit-orange)]/15">
                    <Check
                      size={15}
                      className="text-[var(--orbit-orange)]"
                      aria-hidden="true"
                    />
                  </div>

                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* AREAS */}
          <div className="group relative h-full overflow-hidden rounded-[28px] border border-black/[0.08] bg-white/90 p-7 shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[var(--orbit-orange)]/25 hover:shadow-[0_26px_65px_rgba(0,0,0,0.12)]">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[var(--orbit-orange)] to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

            <h2 className="font-editorial text-2xl tracking-[-0.03em] text-black">
              {copy.areas}
            </h2>

            <div className="mt-6 flex flex-wrap gap-2">
              {areasServed.map((area) => (
                <span
                  key={area.id}
                  className="rounded-full border border-[var(--orbit-orange)]/10 bg-[var(--orbit-orange)]/[0.04] px-4 py-2 text-sm text-black/65 transition-all duration-300 hover:border-[var(--orbit-orange)]/25 hover:bg-[var(--orbit-orange)]/[0.10]"
                >
                  {area.name}
                </span>
              ))}
            </div>
          </div>

          {/* ABOUT */}
          <div className="group relative h-full overflow-hidden rounded-[28px] border border-black/[0.08] bg-white/90 p-7 shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[var(--orbit-orange)]/25 hover:shadow-[0_26px_65px_rgba(0,0,0,0.12)]">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[var(--orbit-orange)] to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

            <h2 className="font-editorial text-2xl tracking-[-0.03em] text-black">
              {copy.about}
            </h2>

            <p className="mt-6 text-sm leading-7 text-black/60">
              {localizedDescription}
            </p>
          </div>
        </section>

        {/* GALLERY */}
        {showGallery && (
          <section className="mt-12">
            <h2 className="font-editorial text-3xl tracking-[-0.035em] text-black">
              {copy.gallery}
            </h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {provider.gallery?.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="group relative aspect-[4/3] overflow-hidden rounded-[24px] border border-black/[0.08] bg-white shadow-[0_16px_40px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-2 hover:border-[var(--orbit-orange)]/25 hover:shadow-[0_24px_60px_rgba(0,0,0,0.13)]"
                >
                  <Image
                    src={image}
                    alt={`${displayName} ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
