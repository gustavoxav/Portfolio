import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Your Name",
  description: "Personal portfolio website showcasing my work and skills",
  generator: "v0.dev",
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }
}

export default async function LocaleLayout({ 
  children,
  params
}: {
  readonly children: React.ReactNode;
  readonly params: Promise<{ lng: string }>;
}) {
  const { lng } = await params
  const messages = await getMessages(lng);

  console.log("locale", lng);
  console.log("messages", messages);
  return (
    <html lang={lng} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider locale={lng} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="portfolio-theme">
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
