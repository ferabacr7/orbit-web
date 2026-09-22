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
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-white/45">
          <li>
            <Link
              href="/"
              className="transition-colors hover:text-white"
            >
              {homeLabel}
            </Link>
          </li>

          <li aria-hidden="true" className="text-white/30">
            ›
          </li>

          <li>
            <span>{servicesLabel}</span>
          </li>

          <li aria-hidden="true" className="text-white/30">
            ›
          </li>

          <li aria-current="page" className="text-white/75">
            {name}
          </li>
        </ol>
      </nav>

      <div className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orbit-orange">
          {eyebrow}
        </p>

        <h1 className="font-editorial mt-3 text-5xl tracking-[-0.04em] text-white sm:text-6xl">
          {name}
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
          {description}
        </p>
      </div>
    </header>
  );
}