"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Search, ExternalLink, Box } from "lucide-react";
import type { Project } from "../data/dashboard-types";

interface ProjectsTableProps {
  projects: Project[];
  searchQuery: string;
  selectedTier: string;
  onSearchChange: (query: string) => void;
  onTierChange: (tier: "all" | "starter" | "pro" | "enterprise") => void;
  onDeleteProject: (id: string) => void;
}

export function ProjectsTable({
  projects,
  searchQuery,
  selectedTier,
  onSearchChange,
  onTierChange,
  onDeleteProject,
}: ProjectsTableProps) {
  const t = useTranslations("Dashboard.Table");

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="pl-9 h-9"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {(["all", "starter", "pro", "enterprise"] as const).map((tier) => (
            <Button
              key={tier}
              size="xs"
              variant={selectedTier === tier ? "default" : "outline"}
              onClick={() => onTierChange(tier)}
              className="capitalize"
            >
              {tier}
            </Button>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-muted/40 font-mono text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-4 py-3">{t("nameColumn")}</th>
                <th className="px-4 py-3">{t("statusColumn")}</th>
                <th className="px-4 py-3">{t("tierColumn")}</th>
                <th className="px-4 py-3">{t("requestsColumn")}</th>
                <th className="px-4 py-3 text-right">{t("actionsColumn")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {projects.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-muted-foreground">
                    <Box className="mx-auto mb-2 size-8 text-muted-foreground/50" />
                    <p>{t("noProjects")}</p>
                  </td>
                </tr>
              ) : (
                projects.map((project) => (
                  <tr key={project.id} className="transition-colors hover:bg-muted/30">
                    <td className="px-4 py-3.5">
                      <div className="font-medium text-foreground">{project.name}</div>
                      {project.description && (
                        <div className="text-xs text-muted-foreground truncate max-w-xs sm:max-w-sm">
                          {project.description}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3.5">
                      <Badge variant={project.status === "active" ? "default" : "secondary"}>
                        {project.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3.5 capitalize font-mono text-xs text-muted-foreground">
                      {project.tier}
                    </td>
                    <td className="px-4 py-3.5 font-mono text-xs text-foreground">
                      {project.requestCount.toLocaleString()}
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <a
                          href={`https://${project.name}.vercel.app`}
                          target="_blank"
                          rel="noreferrer"
                          className={buttonVariants({ variant: "ghost", size: "icon-sm" })}
                        >
                          <ExternalLink className="size-3.5" />
                        </a>
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          onClick={() => onDeleteProject(project.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="size-3.5" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
