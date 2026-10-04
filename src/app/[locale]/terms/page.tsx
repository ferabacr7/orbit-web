type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  return (
    <main className="bg-[#f7f4ef]">
      <section className="mx-auto w-full max-w-[1100px] px-6 py-20 lg:px-12 lg:py-28">
        <h1 className="font-editorial text-5xl tracking-[-0.04em] text-black sm:text-6xl">
          {isEs ? "Términos de servicio" : "Terms of Service"}
        </h1>

        <p className="mt-7 text-lg leading-8 text-black/60">
          {isEs
            ? "Los términos de servicio de ORBIT estarán disponibles en esta página."
            : "ORBIT's terms of service will be available on this page."}
        </p>
      </section>
    </main>
  );
}