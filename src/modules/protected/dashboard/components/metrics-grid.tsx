"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Activity, FolderGit2, Globe, Zap } from "lucide-react";
import type { DashboardMetrics } from "../data/dashboard-types";

interface MetricsGridProps {
  metrics?: DashboardMetrics;
  isLoading: boolean;
}

export function MetricsGrid({ metrics, isLoading }: MetricsGridProps) {
  const t = useTranslations("Dashboard.Metrics");

  if (isLoading || !metrics) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-24 rounded-xl" />
        ))}
      </div>
    );
  }

  const items = [
    {
      label: t("totalProjects"),
      value: metrics.totalProjects,
      change: "+12% MoM",
      icon: FolderGit2,
    },
    {
      label: t("activeDeployments"),
      value: metrics.activeDeployments,
      change: "100% Healthy",
      icon: Zap,
    },
    {
      label: t("bandwidth"),
      value: metrics.monthlyBandwidth,
      change: "Global CDN",
      icon: Globe,
    },
    {
      label: t("uptime"),
      value: `${metrics.uptimePercentage}%`,
      change: "99.99% SLA",
      icon: Activity,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <Card key={index} className="relative overflow-hidden border border-border/80 bg-card/60 backdrop-blur-xs">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-medium text-muted-foreground">{item.label}</span>
                <p className="text-2xl font-bold tracking-tight text-foreground">{item.value}</p>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                  {item.change}
                </span>
              </div>
              <div className="flex size-10 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                <Icon className="size-5" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
