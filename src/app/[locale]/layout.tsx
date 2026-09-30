import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/core/i18n/routing";
import { ThemeProvider, QueryProvider } from "@/core/providers";
import { Toaster } from "@/components/ui/sonner";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: "next-starter — Modern Next.js 16 Production Blueprint",
    template: "%s | next-starter",
  },
  description:
    "An enterprise-ready Next.js 16 starter template & CLI built with React 19, Tailwind CSS v4, Base UI, Auth.js v5, and next-intl.",
  keywords: [
    "Next.js 16",
    "React 19",
    "Next.js Starter",
    "create-starter-next",
    "Tailwind CSS v4",
    "Auth.js",
    "NextAuth v5",
    "Base UI",
    "Shadcn UI",
    "TypeScript",
    "Zod",
    "TanStack Query",
    "Zustand",
    "next-intl",
    "Turbopack",
  ],
  authors: [{ name: "workwithchris", url: "https://github.com/workwithchris" }],
  creator: "workwithchris",
  publisher: "workwithchris",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: appUrl,
    title: "next-starter — Modern Next.js 16 Production Blueprint",
    description:
      "Enterprise Next.js 16 starter template preconfigured with React 19, Turbopack, Tailwind v4, Auth.js v5, and Geist design language.",
    siteName: "next-starter",
  },
  twitter: {
    card: "summary_large_image",
    title: "next-starter — Modern Next.js 16 Production Blueprint",
    description:
      "Enterprise Next.js 16 starter template preconfigured with React 19, Turbopack, Tailwind v4, Auth.js v5, and Geist design language.",
    creator: "@workwithchris",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <QueryProvider>
              {children}
              <Toaster />
            </QueryProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
