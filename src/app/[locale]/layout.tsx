import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";

const editorial = Playfair_Display({
  weight: "500",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-editorial",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ORBIT",
    template: "%s | ORBIT",
  },
  description:
    "Discover local services and businesses in Guanacaste, Costa Rica.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${geist.variable} ${editorial.variable} min-h-screen antialiased`}
      >
        <NextIntlClientProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />

            <div className="flex flex-1 flex-col">{children}</div>

            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
