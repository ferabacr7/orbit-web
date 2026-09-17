"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="orbit-navbar absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex h-[92px] max-w-[1440px] items-center justify-between px-8 lg:px-12">
          <Link href="/" aria-label="ORBIT home">
            <Image
              src="/images/transparent-logo.png"
              alt="ORBIT"
              width={180}
              height={60}
              priority
              className="relative top-[14px] h-auto w-[150px]"
            />
          </Link>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.1em] text-white">
              <button type="button" className="navbar-language">
                ES
              </button>

              <span className="text-white/40">|</span>

              <button type="button" className="navbar-language">
                EN
              </button>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="premium-menu-button"
            >
              {menuOpen ? (
                <X size={21} strokeWidth={1.5} />
              ) : (
                <Menu size={21} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="orbit-menu">
          <button
            type="button"
            aria-label="Close menu"
            className="orbit-menu-backdrop"
            onClick={() => setMenuOpen(false)}
          />

          <aside className="orbit-menu-panel">
            <p className="orbit-menu-eyebrow">Explore ORBIT</p>

            <nav className="orbit-menu-navigation">
              <Link href="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>

              <Link href="/for-businesses" onClick={() => setMenuOpen(false)}>
                For Businesses
              </Link>

              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </nav>

            <div className="orbit-menu-footer">
              <span>Guanacaste</span>
              <span>Costa Rica</span>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
