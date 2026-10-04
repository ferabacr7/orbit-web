type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function ForBusinessesPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  return (
    <main className="bg-[#f7f4ef]">
      <section className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-12 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--orbit-orange)]">
          ORBIT FOR BUSINESSES
        </p>

        <h1 className="font-editorial mt-5 max-w-4xl text-5xl tracking-[-0.04em] text-black sm:text-6xl lg:text-7xl">
          {isEs
            ? "Hacé que más personas encuentren tu negocio."
            : "Help more people find your business."}
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
          {isEs
            ? "Mostrá tus servicios y facilitá el contacto directo con clientes locales."
            : "Show your services and make it easier for local customers to contact you directly."}
        </p>
      </section>
    </main>
  );
}