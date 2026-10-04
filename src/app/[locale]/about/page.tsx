type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  return (
    <main className="bg-[#f7f4ef]">
      <section className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-12 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orbit-orange)]">
          ABOUT ORBIT
        </p>

        <h1 className="font-editorial mt-5 text-5xl tracking-[-0.04em] text-black sm:text-6xl">
          {isEs ? "Acerca de ORBIT" : "About ORBIT"}
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
          {isEs
            ? "ORBIT conecta personas con servicios y negocios locales en Guanacaste."
            : "ORBIT connects people with local services and businesses across Guanacaste."}
        </p>
      </section>
    </main>
  );
}