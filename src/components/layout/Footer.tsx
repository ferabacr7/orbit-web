import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-orbit-black text-white">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between lg:px-12">
        <Link
          href="/"
          className="text-xl font-semibold tracking-[.18em]"
          aria-label="ORBIT home"
        >
          <span className="text-orbit-orange">O</span>RBIT
        </Link>

        <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/65">
          <Link href="/services">Services</Link>
          <Link href="/for-businesses">For Businesses</Link>
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>

        <span className="text-xs text-white/45">Guanacaste, Costa Rica</span>
      </div>
    </footer>
  );
}