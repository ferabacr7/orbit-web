import Image from "next/image";
import { ArrowRight, Search, ListChecks, MessageCircle } from "lucide-react";

import { Link } from "@/i18n/navigation";

type AboutPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const content = {
  es: {
    heroEyebrow: "SOBRE ORBIT",
    heroTitleA: "Personas locales.",
    heroTitleB: "Soluciones reales.",
    heroText:
      "Conectamos personas con negocios, servicios y experiencias locales de confianza en Guanacaste.",

    whatEyebrow: "QUÉ ES ORBIT",
    whatTitle: "Tu conexión local en Guanacaste.",
    whatText:
      "ORBIT es una plataforma bilingüe que te ayuda a descubrir negocios, servicios y experiencias locales en un solo lugar. Desde servicios para el hogar y profesionales independientes hasta tours, bienestar y más. ORBIT está construido para Guanacaste. Creemos en apoyar el talento local, impulsar el crecimiento sostenible y facilitar que residentes y visitantes encuentren proveedores de confianza.",

    whyEyebrow: "POR QUÉ EXISTE ORBIT",
    whyTitle: "Encontrar servicios locales debería ser fácil.",
    whyText:
      "Muchas veces las personas tienen que buscar entre varias plataformas, redes sociales o recomendaciones para encontrar proveedores confiables. ORBIT nació para simplificar ese proceso, conectar mejor a la comunidad y darle más visibilidad a los negocios y profesionales que hacen único a Guanacaste.",

    howEyebrow: "CÓMO FUNCIONA",
    howTitle: "Descubrí. Compará. Contactá.",
    howSubtitle: "Encontrá lo que necesitás en pocos pasos.",

    steps: [
      {
        title: "1. Descubrí",
        text: "Explorá negocios, servicios y experiencias locales en Guanacaste.",
      },
      {
        title: "2. Compará",
        text: "Revisá perfiles, servicios, fotos y detalles para encontrar la mejor opción.",
      },
      {
        title: "3. Contactá",
        text: "Ponete en contacto directamente con proveedores locales.",
      },
    ],

    ctaTitle: "Explorá Guanacaste con ORBIT.",
    ctaText:
      "Encontrá servicios, experiencias y proveedores locales de confianza.",
    ctaPrimary: "Explorar servicios",
    ctaSecondary: "Para negocios",
  },

  en: {
    heroEyebrow: "ABOUT ORBIT",
    heroTitleA: "Local people.",
    heroTitleB: "Real solutions.",
    heroText:
      "We connect people with trusted local businesses, services and experiences across Guanacaste.",

    whatEyebrow: "WHAT ORBIT IS",
    whatTitle: "Your local connection in Guanacaste.",
    whatText:
      "ORBIT is a bilingual platform that helps you discover local businesses, services and experiences in one place. From home services and independent professionals to tours, wellness and more. ORBIT is built for Guanacaste. We believe in supporting local talent, promoting sustainable growth and making it easier for residents and visitors to connect with trusted providers.",

    whyEyebrow: "WHY ORBIT EXISTS",
    whyTitle: "Finding local services should be easy.",
    whyText:
      "Too often, people have to search across multiple platforms, social media or word of mouth to find reliable local providers. ORBIT was created to simplify that process, connect the community and give more visibility to the businesses and professionals that make Guanacaste unique.",

    howEyebrow: "HOW IT WORKS",
    howTitle: "Discover. Compare. Contact.",
    howSubtitle: "Find what you need in just a few steps.",

    steps: [
      {
        title: "1. Discover",
        text: "Explore local businesses, services and experiences across Guanacaste.",
      },
      {
        title: "2. Compare",
        text: "Check profiles, services, photos and details to find the right fit.",
      },
      {
        title: "3. Contact",
        text: "Get in touch directly with local providers.",
      },
    ],

    ctaTitle: "Explore Guanacaste with ORBIT.",
    ctaText: "Find local services, experiences and trusted providers.",
    ctaPrimary: "Explore services",
    ctaSecondary: "For businesses",
  },
} as const;

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  const copy = locale === "es" ? content.es : content.en;

  return (
    <main className="bg-[#f7f4ef] text-[#111111]">
      {/* HERO */}
      <section className="relative min-h-[420px] overflow-hidden">
        <Image
          src="/images/backgrounds/guanacaste-tree-hero.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/58" />

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1280px] items-center px-6 py-16 lg:px-[60px]">
          <div className="max-w-[680px] text-white">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/80">
              {copy.heroEyebrow}
            </p>

            <div className="mt-3 h-[2px] w-10 bg-orbit-orange" />

            <h1 className="mt-5 font-editorial text-[clamp(3rem,6vw,5.8rem)] leading-[0.95] tracking-[-0.03em]">
              {copy.heroTitleA}

              <span className="block italic text-orbit-orange">
                {copy.heroTitleB}
              </span>
            </h1>

            <p className="mt-6 max-w-[600px] text-[18px] leading-8 text-white/90">
              {copy.heroText}
            </p>
          </div>
        </div>
      </section>

      {/* WHAT ORBIT IS */}
      <section className="px-6 pb-10 pt-12 lg:px-[60px] lg:pb-12 lg:pt-14">
        {" "}
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto w-full max-w-[500px] overflow-hidden rounded-[30px]">
            <Image
              src="/images/backgrounds/orbit-provider-growth.png"
              alt={
                locale === "es"
                  ? "ORBIT conectando personas con servicios locales en Guanacaste"
                  : "ORBIT connecting people with local services in Guanacaste"
              }
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-black/55">
              {copy.whatEyebrow}
            </p>

            <div className="mt-3 h-[2px] w-10 bg-orbit-orange" />

            <h2 className="mt-5 font-editorial text-[clamp(2.1rem,3.4vw,3.4rem)] leading-[1] tracking-[-0.025em]">
              {copy.whatTitle}
            </h2>

            <p className="mt-6 text-[17px] leading-8 text-black/65">
              {copy.whatText}
            </p>
          </div>
        </div>
      </section>

      {/* WHY ORBIT EXISTS */}
      <section className="px-6 pb-10 pt-2 lg:px-[60px] lg:pb-12 lg:pt-4">
        {" "}
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-black/55">
              {copy.whyEyebrow}
            </p>

            <div className="mt-3 h-[2px] w-10 bg-orbit-orange" />

            <h2 className="mt-5 font-editorial text-[clamp(2.1rem,3.4vw,3.4rem)] leading-[1] tracking-[-0.025em]">
              {copy.whyTitle}
            </h2>

            <p className="mt-6 text-[17px] leading-8 text-black/65">
              {copy.whyText}
            </p>
          </div>

          <div className="order-1 mx-auto w-full max-w-[500px] overflow-hidden rounded-[30px] lg:order-2">
            <Image
              src="/images/backgrounds/about-why-orbit-map.png"
              alt={
                locale === "es"
                  ? "Mapa de Costa Rica destacando Guanacaste y sus servicios locales"
                  : "Map of Costa Rica highlighting Guanacaste and local services"
              }
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-black/[0.05] bg-white/45 px-6 pb-8 pt-8 lg:px-[60px] lg:pb-10 lg:pt-10">
        {" "}
        <div className="mx-auto max-w-[1000px] text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-black/55">
            {copy.howEyebrow}
          </p>

          <div className="mx-auto mt-3 h-[2px] w-10 bg-orbit-orange" />

          <h2 className="mt-4 font-editorial text-[clamp(2rem,3.2vw,3.2rem)] leading-[1] tracking-[-0.025em]">
            {copy.howTitle}
          </h2>

          <p className="mt-3 text-[15px] text-black/55">{copy.howSubtitle}</p>

          <div className="mt-9 grid gap-8 md:grid-cols-3">
            {copy.steps.map((step, index) => {
              const icons = [Search, ListChecks, MessageCircle];

              const Icon = icons[index];

              return (
                <div key={step.title} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fff0e8] text-orbit-orange">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-4 text-[17px] font-semibold">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-[260px] text-[14px] leading-6 text-black/60">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-14 pt-8 lg:px-[60px] lg:pb-16 lg:pt-10">
        {" "}
        <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[30px]">
          <Image
            src="/images/backgrounds/about-cta-guanacaste-banner.png"
            alt={
              locale === "es"
                ? "Guanacaste y Costa Rica representados en ORBIT"
                : "Guanacaste and Costa Rica represented through ORBIT"
            }
            fill
            sizes="(min-width: 1024px) 1180px, 100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 flex min-h-[290px] flex-col items-center justify-center px-6 py-12 text-center text-white">
            <h2 className="font-editorial text-[clamp(2.2rem,3.5vw,3.5rem)] leading-[1]">
              {copy.ctaTitle}
            </h2>

            <p className="mt-4 max-w-[620px] text-[16px] leading-7 text-white/85">
              {copy.ctaText}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#services"
                className="
                  group
                  inline-flex
                  h-[52px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-orbit-orange
                  px-6
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                {copy.ctaPrimary}

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <Link
                href="/for-businesses"
                className="
                  inline-flex
                  h-[52px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/60
                  bg-white/10
                  px-6
                  font-semibold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/15
                "
              >
                {copy.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
