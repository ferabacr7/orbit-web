import { Link } from "@/i18n/navigation";

type CategoryHeaderProps = {
  name: string;
  description: string;
  homeLabel: string;
  servicesLabel: string;
  eyebrow: string;
};

export function CategoryHeader({
  name,
  description,
  homeLabel,
  servicesLabel,
  eyebrow,
}: CategoryHeaderProps) {
  return (
    <header className="mx-auto w-full max-w-[1440px] px-6 pb-8 pt-8 lg:px-12 lg:pb-10 lg:pt-10">
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 text-sm text-black/45"
      >
        <Link
          href="/"
          className="transition-colors duration-200 hover:text-[var(--orbit-orange)]"
        >
          {homeLabel}
        </Link>

        <span aria-hidden="true">›</span>

        <Link
          href="/#services"
          className="transition-colors duration-200 hover:text-[var(--orbit-orange)]"
        >
          {servicesLabel}
        </Link>

        <span aria-hidden="true">›</span>

        <span className="font-medium text-black">{name}</span>
      </nav>

      <div className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orbit-orange">
          {eyebrow}
        </p>

        <h1 className="font-editorial mt-3 text-5xl tracking-[-0.04em] text-black sm:text-6xl">
          {name}
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-black/60 sm:text-lg">
          {description}
        </p>
      </div>
    </header>
  );
}
