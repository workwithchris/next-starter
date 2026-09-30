import { auth } from "@/core/auth";
import { redirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export default async function ProtectedLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const session = await auth();

  if (!session?.user) {
    redirect(`/${locale}/login`);
  }

  return <>{children}</>;
}
