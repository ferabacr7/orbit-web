import Image from "next/image";

type ProviderPlaceholderCardProps = {
  locale: string;
};

export function ProviderPlaceholderCard({
  locale,
}: ProviderPlaceholderCardProps) {
  const copy =
    locale === "es"
      ? {
          title: "Próximamente",
          description: "Más negocios locales aparecerán aquí.",
        }
      : {
          title: "Provider coming soon",
          description: "More local businesses will be added here.",
        };

  return (
    <article className="overflow-hidden rounded-[24px] border border-black/[0.08] bg-white/70 shadow-[0_14px_35px_rgba(0,0,0,0.05)]">
      {/* IMAGE */}
      <div className="relative aspect-[4/3] overflow-hidden bg-black/[0.03]">
        <Image
          src="/images/providers/provider-placeholder.png"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-black/[0.05]" />

        <div className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-black/45 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
          ORBIT
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-6 py-6">
        <h3 className="font-editorial text-2xl tracking-[-0.03em] text-black/70">
          {copy.title}
        </h3>

        <p className="mt-3 max-w-[260px] text-sm leading-6 text-black/45">
          {copy.description}
        </p>

        <div className="mt-6 h-px bg-black/[0.06]" />

        <p className="mt-5 text-xs font-medium uppercase tracking-[0.12em] text-black/30">
          ORBIT Services
        </p>
      </div>
    </article>
  );
}