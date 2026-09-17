import { SearchBar } from "@/components/ui/SearchBar";

const quickLinks = ["Restaurants", "Mechanics", "Tours", "Pharmacies", "More"];

export function Hero() {
  return (
    <section className="hero relative min-h-[650px] overflow-hidden">
      {" "}
      {/* Full hero photography */}
      <div className="hero-background absolute inset-0" />
      {/* Soft editorial readability layer */}
      <div className="hero-overlay absolute inset-0" />
      {/* Hero content */}
      <div className="relative z-10 mx-auto min-h-[650px] max-w-[1440px] px-6 lg:px-12">
        {" "}
        <div className="flex min-h-[650px] items-center pt-[70px]">
          {" "}
          <div className="w-full max-w-[570px] py-16">
            <p className="eyebrow text-black/75">
              Local people. Real solutions.
            </p>

            <h1 className="mt-5 font-editorial text-[clamp(3.8rem,5.7vw,6.5rem)] leading-[0.84] tracking-[-0.055em] text-[#101318]">
              Guanacaste
              <span className="mt-2 block italic">
                in <span className="text-orbit-orange">one place.</span>
              </span>
            </h1>

            <p className="mt-8 max-w-[450px] text-[17px] leading-7 text-black/70">
              Find trusted local services, businesses and experiences — all
              around you.
            </p>

            <div className="mt-8 max-w-[560px]">
              <SearchBar />

              <div className="mt-4 flex flex-wrap gap-2">
                {quickLinks.map((item) => (
                  <button type="button" key={item} className="hero-quick-link">
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
