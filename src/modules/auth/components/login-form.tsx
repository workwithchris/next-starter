"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "@/core/i18n/routing";
import { useAuthForm } from "../hooks/use-auth-form";
import { SocialAuthButtons } from "./social-auth-buttons";
import { Separator } from "@/components/ui/separator";

export function LoginForm() {
  const t = useTranslations("Auth");
  const { form, isLoading, onSubmit } = useAuthForm();
  const { register, formState: { errors } } = form;

  return (
    <div className="space-y-6">
      <SocialAuthButtons />

      <div className="relative flex items-center justify-center">
        <Separator className="w-full" />
        <span className="absolute bg-card px-2 font-mono text-xs uppercase text-muted-foreground">
          {t("orContinueWith")}
        </span>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="email">{t("emailLabel")}</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            autoComplete="email"
            {...register("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">{t("passwordLabel")}</Label>
            <Link
              href="/login"
              className="text-xs text-primary hover:underline"
            >
              {t("forgotPassword")}
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
            {...register("password")}
            aria-invalid={!!errors.password}
          />
          {errors.password && (
            <p className="text-xs text-destructive">{errors.password.message}</p>
          )}
        </div>

        <div className="flex items-center space-x-2 pt-1">
          <Checkbox id="rememberMe" {...register("rememberMe")} />
          <Label htmlFor="rememberMe" className="text-xs font-normal text-muted-foreground">
            {t("rememberMe")}
          </Label>
        </div>

        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? t("signingIn") : t("signInButton")}
        </Button>
      </form>
    </div>
  );
}
