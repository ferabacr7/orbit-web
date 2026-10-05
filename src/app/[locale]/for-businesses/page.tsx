import Image from "next/image";
import { Link } from "@/i18n/navigation";

import {
  ArrowRight,
  BarChart3,
  Check,
  FileText,
  ImageIcon,
  Megaphone,
  Target,
} from "lucide-react";

type ForBusinessesPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const content = {
  es: {
    eyebrow: "PLANES PARA NEGOCIOS",
    titleStart: "Elegí el plan ideal para",
    titleAccent: "hacer crecer tu negocio.",
    benefits: ["+ ventas", "+ clientes", "+ oportunidades"],

    plans: [
      {
        id: "free",
        name: "FREE",
        subtitle: "Presencia básica",
        price: "$0",
        suffix: "",
        popular: false,
        offer: null,
        features: [
          "1 foto del negocio",
          "Nombre del negocio",
          "Ubicación principal",
          "Rating de Google + reseñas (si está verificado)",
          "Presencia en su categoría de servicio",
          "Visibilidad en inglés y español",
          "Visibilidad básica dentro de ORBIT",
        ],
        cta: "Comenzar gratis",
        note: "Sin landing page ni promoción.",
      },
      {
        id: "pro",
        name: "PRO",
        subtitle: "Descubrimiento y contacto",
        price: "$24.99",
        suffix: "/ mes",
        popular: true,
        offer: "10 semanas gratis",
        features: [
          "Todo lo incluido en Free",
          "Hasta 5 fotos del negocio",
          "Landing page básica del negocio",
          "Servicios, horarios y áreas de servicio",
          "Contacto directo por WhatsApp",
          "Mayor visibilidad en búsquedas de ORBIT",
          "Soporte para reviews de Google",
          "Insights básicos de rendimiento",
        ],
        cta: "Empezar con Pro",
        note: "Ideal para negocios que quieren convertir visitas en contactos.",
      },
      {
        id: "premium",
        name: "PREMIUM",
        subtitle: "Promoción y crecimiento",
        price: "$79.99",
        suffix: "/ mes",
        popular: false,
        offer: null,
        features: [
          "Todo lo incluido en Pro",
          "Ubicación destacada en ORBIT",
          "Prioridad en listados de categoría",
          "Exposición en campañas publicitarias de ORBIT",
          "Oportunidades de contenido promocional",
          "Análisis de rendimiento",
          "Recomendaciones de crecimiento",
          "Apoyo para conseguir más reviews",
          "Soporte prioritario",
        ],
        cta: "Hablar con ORBIT",
        note: "Para negocios que quieren más exposición.",
      },
    ],

    growth: {
      eyebrow: "SERVICIO ADICIONAL",
      title: "¿Necesitás marketing dedicado?",
      accent: "ORBIT Growth.",
      description:
        "Un servicio personalizado para negocios que quieren ir más allá, con campañas individuales y un acompañamiento más profundo.",
      items: [
        {
          label: "Campañas personalizadas",
          icon: "target",
        },
        {
          label: "Media buying",
          icon: "megaphone",
        },
        {
          label: "Creativos y optimización",
          icon: "image",
        },
        {
          label: "Reportes y recomendaciones",
          icon: "report",
        },
      ],
      price: "Desde $199/mes + pauta",
      cta: "Solicitar información",
    },
  },

  en: {
    eyebrow: "PLANS FOR BUSINESSES",
    titleStart: "Choose the right plan to",
    titleAccent: "grow your business.",
    benefits: ["+ sales", "+ customers", "+ opportunities"],

    plans: [
      {
        id: "free",
        name: "FREE",
        subtitle: "Basic presence",
        price: "$0",
        suffix: "",
        popular: false,
        offer: null,
        features: [
          "1 business photo",
          "Business name",
          "Main location",
          "Google rating + reviews (when verified)",
          "Listed in your service category",
          "English & Spanish visibility",
          "Basic visibility across ORBIT",
        ],
        cta: "Start free",
        note: "No landing page or promotion.",
      },
      {
        id: "pro",
        name: "PRO",
        subtitle: "Discovery and contact",
        price: "$24.99",
        suffix: "/ month",
        popular: true,
        offer: "10 weeks free",
        features: [
          "Everything included in Free",
          "Up to 5 business photos",
          "Basic business landing page",
          "Services, hours and service areas",
          "Direct WhatsApp contact",
          "Enhanced visibility in ORBIT search",
          "Google review support",
          "Basic performance insights",
        ],
        cta: "Start with Pro",
        note: "Ideal for businesses that want to turn visits into contacts.",
      },
      {
        id: "premium",
        name: "PREMIUM",
        subtitle: "Promotion and growth",
        price: "$79.99",
        suffix: "/ month",
        popular: false,
        offer: null,
        features: [
          "Everything included in Pro",
          "Featured placement across ORBIT",
          "Priority in category listings",
          "Exposure in ORBIT advertising campaigns",
          "Promotional content opportunities",
          "Performance analysis",
          "Growth recommendations",
          "Review growth support",
          "Priority support",
        ],
        cta: "Talk to ORBIT",
        note: "For businesses looking for greater exposure.",
      },
    ],

    growth: {
      eyebrow: "ADDITIONAL SERVICE",
      title: "Need dedicated marketing?",
      accent: "ORBIT Growth.",
      description:
        "A personalized service for businesses that want to go further, with individual campaigns and deeper marketing support.",
      items: [
        {
          label: "Custom campaigns",
          icon: "target",
        },
        {
          label: "Media buying",
          icon: "megaphone",
        },
        {
          label: "Creatives & optimization",
          icon: "image",
        },
        {
          label: "Reports & recommendations",
          icon: "report",
        },
      ],
      price: "Starting at $199/month + ad spend",
      cta: "Request information",
    },
  },
} as const;

function GrowthIcon({ name }: { name: string }) {
  const className = "h-5 w-5 stroke-[1.8] text-[#f26a2e]";

  switch (name) {
    case "target":
      return <Target className={className} />;

    case "megaphone":
      return <Megaphone className={className} />;

    case "image":
      return <ImageIcon className={className} />;

    case "report":
      return <FileText className={className} />;

    default:
      return <BarChart3 className={className} />;
  }
}

export default async function ForBusinessesPage({
  params,
}: ForBusinessesPageProps) {
  const { locale } = await params;

  const copy = locale === "es" ? content.es : content.en;

  return (
    <main className="bg-[#f7f4ef] text-[#111111]">
      {/* PRICING */}
      <section className="px-5 pb-10 pt-14 sm:px-8 lg:px-12 lg:pb-14 lg:pt-16">
        <div className="mx-auto max-w-[1180px]">
          {/* Heading */}
          <div className="mb-10 lg:mb-12">
            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-start lg:gap-10">
              {" "}
              <div className="max-w-[780px]">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-black/60">
                  {copy.eyebrow}
                </p>

                <div className="mb-4 h-[2px] w-10 bg-[#f26a2e]" />

                <h1
                  className="
                    max-w-[820px]
                    font-[family-name:var(--font-editorial)]
                    text-[42px]
                    font-medium
                    leading-[0.98]
                    tracking-[-0.035em]
                    sm:text-[54px]
                    lg:text-[68px]
                  "
                >
                  {copy.titleStart}{" "}
                  <span className="italic text-[#f26a2e]">
                    {copy.titleAccent}
                  </span>
                </h1>
              </div>
              <div className="flex shrink-0 flex-nowrap items-center gap-5 pt-2 lg:justify-end lg:pt-5">
                {copy.benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex shrink-0 items-center gap-5"
                  >
                    <span className="whitespace-nowrap text-sm font-medium tracking-[0.08em] text-black/70">
                      {benefit}
                    </span>

                    {index < copy.benefits.length - 1 && (
                      <span className="h-7 w-px shrink-0 bg-[#f26a2e]/60" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid items-stretch gap-5 lg:grid-cols-3">
            {copy.plans.map((plan) => (
              <article
                key={plan.id}
                className={[
                  "relative flex min-h-[650px] flex-col rounded-[28px] bg-white px-7 pb-7 pt-8",
                  "transition-all duration-300 ease-out",
                  plan.popular
                    ? "border-[1.5px] border-[#f26a2e] shadow-[0_18px_55px_rgba(242,106,46,0.10)] hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_24px_70px_rgba(242,106,46,0.18)]"
                    : "border border-black/[0.045] shadow-[0_18px_55px_rgba(0,0,0,0.055)]",
                ].join(" ")}
              >
                {plan.popular && (
                  <div
                    className="
                      absolute left-1/2 top-0
                      -translate-x-1/2 -translate-y-1/2
                      rounded-full bg-[#f26a2e]
                      px-5 py-2
                      text-[10px] font-bold uppercase
                      tracking-[0.14em] text-white
                    "
                  >
                    {locale === "es" ? "MÁS POPULAR" : "MOST POPULAR"}
                  </div>
                )}

                {/* Plan header */}
                <div className="border-b border-black/10 pb-5">
                  <h2 className="text-[18px] font-bold tracking-[0.14em]">
                    {plan.name}
                  </h2>

                  <p className="mt-1 text-[17px] text-black/55">
                    {plan.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="pt-5">
                  <div className="flex items-end gap-2">
                    <span
                      className="
                        font-[family-name:var(--font-editorial)]
                        text-[48px]
                        font-medium
                        leading-none
                        tracking-[-0.035em]
                      "
                    >
                      {plan.price}
                    </span>

                    {plan.suffix && (
                      <span className="pb-1 text-[16px] text-black/55">
                        {plan.suffix}
                      </span>
                    )}
                  </div>

                  {plan.offer && (
                    <div
                      className="
                        mt-4 inline-flex items-center gap-2
                        rounded-full bg-[#fff0e8]
                        px-4 py-2
                        text-sm font-semibold text-[#f26a2e]
                      "
                    >
                      <span>🎁</span>
                      {plan.offer}
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="mt-8 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-[15px] leading-[1.45] text-black/70"
                    >
                      <span
                        className="
                          mt-[2px] flex h-[18px] w-[18px]
                          shrink-0 items-center justify-center
                          rounded-full bg-[#f26a2e]
                        "
                      >
                        <Check className="h-3 w-3 stroke-[3] text-white" />
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto pt-8">
                  <Link
                    href="/for-businesses/apply"
                    className={[
                      "group flex h-[58px] w-full items-center justify-center gap-4 rounded-full",
                      "text-[15px] font-semibold transition-all duration-300",
                      plan.popular
                        ? "bg-[#f26a2e] text-white shadow-[0_14px_30px_rgba(242,106,46,0.22)] hover:-translate-y-0.5 hover:bg-[#e85f26]"
                        : "border border-black/20 bg-white text-black hover:-translate-y-0.5 hover:border-black/35",
                    ].join(" ")}
                  >
                    {plan.cta}

                    <ArrowRight
                      className="
      h-4 w-4
      transition-transform duration-300
      group-hover:translate-x-1
    "
                    />
                  </Link>

                  <p className="mx-auto mt-4 max-w-[260px] text-center text-[13px] leading-relaxed text-black/45">
                    {plan.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ORBIT GROWTH */}
      <section className="px-5 pb-16 sm:px-8 lg:px-12 lg:pb-20">
        <div
          className="
            mx-auto grid max-w-[1180px]
            overflow-hidden rounded-[30px]
            border border-black/[0.05]
            bg-white
            shadow-[0_18px_55px_rgba(0,0,0,0.045)]
            lg:grid-cols-[1.05fr_0.95fr]
          "
        >
          {/* Copy */}
          <div className="flex flex-col justify-center px-7 py-9 sm:px-10 lg:px-12 lg:py-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-black/60">
              {copy.growth.eyebrow}
            </p>

            <div className="mb-5 mt-3 h-[2px] w-10 bg-[#f26a2e]" />

            <h2
              className="
                max-w-[600px]
                font-[family-name:var(--font-editorial)]
                text-[37px]
                font-medium
                leading-[1]
                tracking-[-0.025em]
                sm:text-[45px]
              "
            >
              {copy.growth.title}{" "}
              <span className="italic text-[#f26a2e]">
                {copy.growth.accent}
              </span>
            </h2>

            <p className="mt-5 max-w-[610px] text-[16px] leading-7 text-black/60">
              {copy.growth.description}
            </p>

            <div className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {copy.growth.items.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <GrowthIcon name={item.icon} />

                  <span className="text-sm font-medium text-black/65">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-full bg-[#fff0e8]
                  text-lg font-semibold text-[#f26a2e]
                "
              >
                $
              </span>

              <span className="text-sm font-medium text-black/65">
                {copy.growth.price}
              </span>
            </div>

            <Link
              href="/for-businesses/apply"
              className="
    group mt-8 flex h-[56px] w-fit
    min-w-[245px] items-center justify-center gap-4
    rounded-full bg-[#f26a2e]
    px-7 text-sm font-semibold text-white
    shadow-[0_14px_30px_rgba(242,106,46,0.2)]
    transition-all duration-300
    hover:-translate-y-0.5 hover:bg-[#e85f26]
  "
            >
              {copy.growth.cta}

              <ArrowRight
                className="
      h-4 w-4
      transition-transform duration-300
      group-hover:translate-x-1
    "
              />
            </Link>
          </div>

          {/* Image */}
          <div className="relative min-h-[310px] lg:min-h-[430px]">
            <Image
              src="/images/providers/provider-growth-office.png"
              alt="ORBIT Growth"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />

            <div
              className="
                pointer-events-none
                absolute inset-y-0 left-0
                hidden w-28
                bg-gradient-to-r from-white to-transparent
                lg:block
              "
            />
          </div>
        </div>
      </section>
    </main>
  );
}
