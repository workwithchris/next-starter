"use client";

import { useMemo } from "react";
import {
  useDashboardMetrics,
  useProjects,
  useCreateProjectMutation,
  useDeleteProjectMutation,
} from "../data/use-dashboard-queries";
import { useDashboardStore } from "../store/dashboard-slice";
import type { CreateProjectInput } from "../data/dashboard-types";

export function useDashboard() {
  const { data: metrics, isLoading: isMetricsLoading } = useDashboardMetrics();
  const { data: projects = [], isLoading: isProjectsLoading } = useProjects();
  const createMutation = useCreateProjectMutation();
  const deleteMutation = useDeleteProjectMutation();

  const searchQuery = useDashboardStore((s) => s.searchQuery);
  const selectedTierFilter = useDashboardStore((s) => s.selectedTierFilter);
  const isCreateDialogOpen = useDashboardStore((s) => s.isCreateDialogOpen);
  const setSearchQuery = useDashboardStore((s) => s.setSearchQuery);
  const setSelectedTierFilter = useDashboardStore((s) => s.setSelectedTierFilter);
  const setCreateDialogOpen = useDashboardStore((s) => s.setCreateDialogOpen);
  const resetFilters = useDashboardStore((s) => s.resetFilters);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.description &&
          project.description.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTier =
        selectedTierFilter === "all" || project.tier === selectedTierFilter;

      return matchesSearch && matchesTier;
    });
  }, [projects, searchQuery, selectedTierFilter]);

  const handleCreateProject = async (input: CreateProjectInput) => {
    await createMutation.mutateAsync(input);
    setCreateDialogOpen(false);
  };

  const handleDeleteProject = (id: string) => {
    deleteMutation.mutate(id);
  };

  return {
    metrics,
    projects: filteredProjects,
    totalProjectsCount: projects.length,
    isLoading: isMetricsLoading || isProjectsLoading,
    isCreating: createMutation.isPending,
    isDeleting: deleteMutation.isPending,
    searchQuery,
    selectedTierFilter,
    isCreateDialogOpen,
    setSearchQuery,
    setSelectedTierFilter,
    setCreateDialogOpen,
    resetFilters,
    handleCreateProject,
    handleDeleteProject,
  };
}
