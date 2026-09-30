import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/core/i18n/routing";
import { Home } from "@/modules/public/home/home";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://next-starter.dev";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Hero" });

  const title = `${t("title")} | next-starter`;
  const description = t("description");

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `${baseUrl}/${loc}`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}`,
      siteName: "next-starter",
      locale: locale === "en" ? "en_US" : locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@workwithchris",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <Home />;
}
