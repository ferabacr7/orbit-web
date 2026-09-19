import Image from "next/image";
import { Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

export async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="bg-orbit-black text-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="grid min-h-[130px] items-center gap-8 py-7 md:grid-cols-[1fr_auto_1fr]">
          {/* LOGO */}
          <div className="flex justify-center md:justify-start">
            <Link href="/" aria-label={t("homeLabel")} className="inline-flex">
              <Image
                src="/images/letra.jpg"
                alt="ORBIT"
                width={190}
                height={60}
                className="h-auto w-[160px] object-contain"
              />
            </Link>
          </div>

          {/* SOCIAL / CONTACT */}
          <div className="flex items-center justify-center gap-3">
            <a
              href="#"
              aria-label={t("instagram")}
              className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-orbit-orange hover:bg-orbit-orange hover:text-white"
            >
              <FaInstagram size={17} />
            </a>

            <a
              href="#"
              aria-label={t("facebook")}
              className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-orbit-orange hover:bg-orbit-orange hover:text-white"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="#"
              aria-label={t("email")}
              className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-orbit-orange hover:bg-orbit-orange hover:text-white"
            >
              <Mail size={17} strokeWidth={1.7} />
            </a>

            <a
              href="#"
              aria-label={t("whatsapp")}
              className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-orbit-orange hover:bg-orbit-orange hover:text-white"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>

          {/* LOCATION */}
          <div className="text-center md:text-right">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
              {t("location")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
