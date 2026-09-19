import { ArrowRight, Search } from "lucide-react";
import { useTranslations } from "next-intl";

export function SearchBar() {
  const t = useTranslations("SearchBar");

  return (
    <form
      role="search"
      className="flex h-[58px] w-full items-center rounded-full bg-white px-5 shadow-[0_12px_35px_rgba(0,0,0,.08)]"
    >
      <Search size={19} strokeWidth={1.8} />

      <input
        type="search"
        aria-label={t("inputLabel")}
        placeholder={t("placeholder")}
        className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-black/50"
      />

      <button
        type="submit"
        aria-label={t("submitLabel")}
        className="flex size-11 shrink-0 items-center justify-center rounded-full bg-orbit-orange text-white transition-transform hover:scale-105"
      >
        <ArrowRight size={19} />
      </button>
    </form>
  );
}