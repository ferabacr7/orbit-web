import { ArrowRight, Search } from "lucide-react";

export function SearchBar() {
  return (
    <form
      role="search"
      className="flex h-[58px] w-full items-center rounded-full bg-white px-5 shadow-[0_12px_35px_rgba(0,0,0,.08)]"
    >
      <Search size={19} strokeWidth={1.8} />

      <input
        type="search"
        aria-label="Search local services"
        placeholder="What do you need today?"
        className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-black/50"
      />

      <button
        type="submit"
        aria-label="Search"
        className="flex size-11 shrink-0 items-center justify-center rounded-full bg-orbit-orange text-white transition-transform hover:scale-105"
      >
        <ArrowRight size={19} />
      </button>
    </form>
  );
}