"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createProject, deleteProject, fetchDashboardMetrics, fetchProjects } from "./dashboard-api";
import type { CreateProjectInput } from "./dashboard-types";

export const dashboardKeys = {
  all: ["dashboard"] as const,
  metrics: () => [...dashboardKeys.all, "metrics"] as const,
  projects: () => [...dashboardKeys.all, "projects"] as const,
};

export function useDashboardMetrics() {
  return useQuery({
    queryKey: dashboardKeys.metrics(),
    queryFn: fetchDashboardMetrics,
    staleTime: 1000 * 60 * 2, // 2 minutes
  });
}

export function useProjects() {
  return useQuery({
    queryKey: dashboardKeys.projects(),
    queryFn: fetchProjects,
    staleTime: 1000 * 30, // 30 seconds
  });
}

export function useCreateProjectMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: CreateProjectInput) => createProject(input),
    onSuccess: (newProject) => {
      queryClient.invalidateQueries({ queryKey: dashboardKeys.projects() });
      queryClient.invalidateQueries({ queryKey: dashboardKeys.metrics() });
      toast.success(`Project "${newProject.name}" created successfully`);
    },
    onError: () => {
      toast.error("Failed to create project");
    },
  });
}

export function useDeleteProjectMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteProject(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: dashboardKeys.projects() });
      queryClient.invalidateQueries({ queryKey: dashboardKeys.metrics() });
      toast.success("Project removed");
    },
    onError: () => {
      toast.error("Failed to remove project");
    },
  });
}
