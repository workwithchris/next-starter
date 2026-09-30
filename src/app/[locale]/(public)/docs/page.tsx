import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/core/i18n/routing";
import { Docs } from "@/modules/public/docs/docs";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://next-starter.dev";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Docs" });

  const title = `${t("title")} | next-starter Documentation`;
  const description = t("description");

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `${baseUrl}/${loc}/docs`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/docs`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/docs`,
      siteName: "next-starter",
      locale: locale === "en" ? "en_US" : locale,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@workwithchris",
    },
  };
}

export default async function DocsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <Docs />;
}
