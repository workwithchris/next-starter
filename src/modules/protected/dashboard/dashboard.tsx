"use client";

import { useDashboard } from "./hooks/use-dashboard";
import { DashboardHeader } from "./components/dashboard-header";
import { MetricsGrid } from "./components/metrics-grid";
import { ProjectsTable } from "./components/projects-table";
import { CreateProjectDialog } from "./components/create-project-dialog";

export function DashboardModule() {
  const {
    metrics,
    projects,
    isLoading,
    isCreating,
    searchQuery,
    selectedTierFilter,
    isCreateDialogOpen,
    setSearchQuery,
    setSelectedTierFilter,
    setCreateDialogOpen,
    handleCreateProject,
    handleDeleteProject,
  } = useDashboard();

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      <DashboardHeader onOpenCreateDialog={() => setCreateDialogOpen(true)} />
      <MetricsGrid metrics={metrics} isLoading={isLoading} />
      <ProjectsTable
        projects={projects}
        searchQuery={searchQuery}
        selectedTier={selectedTierFilter}
        onSearchChange={setSearchQuery}
        onTierChange={setSelectedTierFilter}
        onDeleteProject={handleDeleteProject}
      />
      <CreateProjectDialog
        isOpen={isCreateDialogOpen}
        onOpenChange={setCreateDialogOpen}
        onSubmit={handleCreateProject}
        isSubmitting={isCreating}
      />
    </div>
  );
}
