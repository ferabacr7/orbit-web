import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CommunitySection() {
  return (
    <section className="pb-16">
      <div className="community-photo relative mx-auto min-h-[440px] max-w-[1440px] overflow-hidden lg:rounded-tr-[170px]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />

        <div className="relative flex min-h-[440px] items-center px-7 py-16 text-white lg:px-16">
          <div>
            <p className="text-[11px] uppercase tracking-[.3em] text-white/75">
              More than a service
            </p>

            <h2 className="mt-5 max-w-xl font-editorial text-5xl leading-[.9] tracking-[-.04em] md:text-7xl">
              A connected
              <br />
              <span className="italic text-orbit-orange">Guanacaste.</span>
            </h2>

            <p className="mt-7 max-w-md leading-7 text-white/75">
              Discover local services, support local businesses and help build
              a more connected community.
            </p>

            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold"
            >
              Explore ORBIT
              <span className="flex size-10 items-center justify-center rounded-full bg-orbit-orange">
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}