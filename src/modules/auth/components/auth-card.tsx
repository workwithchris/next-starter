"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LoginForm } from "./login-form";
import { Lock } from "lucide-react";

export function AuthCard() {
  const t = useTranslations("Auth");

  return (
    <div className="mx-auto w-full max-w-md p-4 sm:p-6">
      <Card className="border border-border/80 bg-card/80 shadow-2xl backdrop-blur-md">
        <CardHeader className="text-center space-y-2 pb-6">
          <div className="mx-auto flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Lock className="size-5" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight">
            {t("title")}
          </CardTitle>
          <CardDescription className="text-sm">
            {t("description")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
