import Image from "next/image";

type CommunitySectionProps = {
  locale: string;
};

export function CommunitySection({ locale }: CommunitySectionProps) {
 const communityImage =
  locale === "es"
    ? "/images/community/orbit-community-es.png"
    : "/images/community/orbit-community-en.png";

  return (
    <section className="relative w-full bg-[#f7f4ef] pt-2">
      <div className="relative h-[250px] w-full overflow-hidden">
        {/* COMMUNITY IMAGE */}
        <Image
          src={communityImage}
          alt=""
          fill
          sizes="100vw"
          className="
            object-cover
            object-center
            saturate-[0.92]
            contrast-[0.98]
          "
        />

        {/* LEFT → RIGHT DARK GRADIENT */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-y-0 left-0
            z-[1]
            w-[62%]
            bg-gradient-to-r
            from-black/65
            via-black/30
            via-[45%]
            to-transparent
          "
        />

        {/* COMMUNITY CONTENT */}
        <div
          className="
            absolute
            left-[clamp(32px,5vw,76px)]
            top-1/2
            z-10
            -translate-y-1/2
          "
        >
          {/* EYEBROW */}
          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.38em]
              text-white/90
            "
          >
            {locale === "es" ? "MÁS QUE UN SERVICIO" : "MORE THAN A SERVICE"}
          </p>

          {/* TITLE */}
          <h2
            className="
              mt-3
              font-editorial
              text-[clamp(2.5rem,3.7vw,4.2rem)]
              leading-[0.94]
              tracking-[-0.02em]
              text-white
            "
          >
            {locale === "es" ? "Un Guanacaste" : "A connected"}

            <span className="mt-1 block italic text-orbit-orange">
              {locale === "es" ? "conectado." : "Guanacaste."}
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}