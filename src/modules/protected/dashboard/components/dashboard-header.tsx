"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Plus, LayoutDashboard, RefreshCw, LogOut } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { signOut } from "next-auth/react";
import { useAuthStore } from "@/core/store";
import { dashboardKeys } from "../data/use-dashboard-queries";

interface DashboardHeaderProps {
  onOpenCreateDialog: () => void;
}

export function DashboardHeader({ onOpenCreateDialog }: DashboardHeaderProps) {
  const t = useTranslations("Dashboard");
  const queryClient = useQueryClient();
  const logout = useAuthStore((s) => s.logout);

  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: dashboardKeys.all });
  };

  const handleLogout = async () => {
    logout();
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-6">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <LayoutDashboard className="size-4" />
          </div>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {t("overviewBadge")}
          </span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {t("title")}
        </h1>
        <p className="text-sm text-muted-foreground">
          {t("description")}
        </p>
      </div>

      <div className="flex items-center gap-2.5">
        <Button
          variant="outline"
          size="sm"
          onClick={handleRefresh}
          className="gap-2"
        >
          <RefreshCw className="size-3.5" />
          {t("refreshButton")}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleLogout}
          className="gap-2 text-muted-foreground hover:text-destructive"
        >
          <LogOut className="size-3.5" />
          {t("logoutButton")}
        </Button>
        <Button
          variant="default"
          size="sm"
          onClick={onOpenCreateDialog}
          className="gap-2"
        >
          <Plus className="size-4" />
          {t("newProjectButton")}
        </Button>
      </div>
    </div>
  );
}
