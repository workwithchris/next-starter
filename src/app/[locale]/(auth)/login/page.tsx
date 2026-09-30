import { setRequestLocale } from "next-intl/server";
import { AuthModule } from "@/modules/auth/auth";

export default async function LoginPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AuthModule />;
}
