import { ServiceCarousel } from "@/components/services/ServiceCarousel";

export default function LabPage() {
  return (
    <main className="min-h-screen bg-[#f3f0e8]">
      <section className="py-16">
        <div className="mx-auto mb-10 w-full max-w-[1440px] px-6 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
            ORBIT LAB
          </p>

          <h1 className="font-editorial mt-3 text-4xl tracking-[-0.035em] text-black">
            Service Card Test
          </h1>
        </div>

        <ServiceCarousel />
      </section>
    </main>
  );
}