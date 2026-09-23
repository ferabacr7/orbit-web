import { ArrowRight, Search } from "lucide-react";
import { useTranslations } from "next-intl";

export function SearchBar() {
  const t = useTranslations("SearchBar");

  return (
    <form
      role="search"
      className="
        group
        flex h-[60px] w-full items-center
        rounded-full
        border border-white/70
        bg-white/90
        py-[6px] pl-5 pr-[6px]
        shadow-[0_16px_45px_rgba(0,0,0,0.14)]
        backdrop-blur-xl
        transition-all duration-300
        focus-within:border-white
        focus-within:bg-white/95
        focus-within:shadow-[0_18px_55px_rgba(0,0,0,0.16),0_0_0_3px_rgba(255,100,38,0.10)]
      "
    >
      <Search
        size={19}
        strokeWidth={1.5}
        className="
          shrink-0
          text-black/60
          transition-colors duration-300
          group-focus-within:text-black/80
        "
        aria-hidden="true"
      />

      <input
        type="search"
        aria-label={t("inputLabel")}
        placeholder={t("placeholder")}
        className="
          h-full min-w-0 flex-1
          bg-transparent
          px-4
          text-[15px] font-medium
          text-[#101318]
          outline-none
          placeholder:font-normal
          placeholder:text-black/45
        "
      />

      <button
        type="submit"
        aria-label={t("submitLabel")}
        className="
          flex size-[47px] shrink-0
          items-center justify-center
          rounded-full
          bg-orbit-orange
          text-white
          shadow-[0_7px_20px_rgba(255,100,38,0.30)]
          transition-all duration-300
          hover:scale-[1.04]
          hover:shadow-[0_9px_24px_rgba(255,100,38,0.38)]
          active:scale-95
        "
      >
        <ArrowRight
          size={19}
          strokeWidth={1.6}
          className="transition-transform duration-300 group-hover:translate-x-[1px]"
          aria-hidden="true"
        />
      </button>
    </form>
  );
}