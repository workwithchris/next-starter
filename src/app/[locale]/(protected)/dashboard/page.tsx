import { setRequestLocale } from "next-intl/server";
import { DashboardModule } from "@/modules/protected/dashboard/dashboard";

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <DashboardModule />;
}
