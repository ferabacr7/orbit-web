import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BusinessSpotlight() {
  return (
    <section className="pb-20">
      <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-12">
        <div className="business-photo min-h-[390px] rounded-[38px]" />

        <div className="grid gap-8 md:grid-cols-[1fr_.45fr]">
          <div>
            <p className="eyebrow">Local businesses</p>

            <h2 className="mt-4 font-editorial text-5xl leading-[.9] tracking-[-.04em] md:text-6xl">
              Real people.
              <br />
              Real <span className="italic text-orbit-orange">impact.</span>
            </h2>

            <p className="mt-6 max-w-md leading-7 text-black/70">
              From family businesses to growing brands, ORBIT helps local
              businesses connect with more customers in their community.
            </p>

            <Link
              href="/for-businesses"
              className="mt-8 inline-flex h-12 items-center gap-6 rounded-full bg-white pl-6 pr-2 text-sm font-semibold shadow-[0_8px_30px_rgba(0,0,0,.08)]"
            >
              List Your Business
              <span className="flex size-9 items-center justify-center rounded-full bg-orbit-orange text-white">
                <ArrowRight size={17} />
              </span>
            </Link>
          </div>

          <div className="hidden self-center font-editorial text-3xl italic leading-tight lg:block">
            A stronger
            <br />
            Guanacaste
            <br />
            together.
            <div className="mt-3 h-0.5 w-16 rotate-[-8deg] bg-orbit-orange" />
          </div>
        </div>
      </div>
    </section>
  );
}