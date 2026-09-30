import { describe, expect, it, beforeEach } from "vitest";
import { useDashboardStore } from "../store/dashboard-slice";

describe("Dashboard Zustand Store", () => {
  beforeEach(() => {
    useDashboardStore.getState().resetFilters();
    useDashboardStore.getState().setCreateDialogOpen(false);
  });

  it("updates search query", () => {
    useDashboardStore.getState().setSearchQuery("worker");
    expect(useDashboardStore.getState().searchQuery).toBe("worker");
  });

  it("updates selected tier filter", () => {
    useDashboardStore.getState().setSelectedTierFilter("enterprise");
    expect(useDashboardStore.getState().selectedTierFilter).toBe("enterprise");
  });

  it("toggles create dialog state", () => {
    useDashboardStore.getState().setCreateDialogOpen(true);
    expect(useDashboardStore.getState().isCreateDialogOpen).toBe(true);
  });

  it("resets filters to default state", () => {
    useDashboardStore.getState().setSearchQuery("custom");
    useDashboardStore.getState().setSelectedTierFilter("pro");
    useDashboardStore.getState().resetFilters();

    expect(useDashboardStore.getState().searchQuery).toBe("");
    expect(useDashboardStore.getState().selectedTierFilter).toBe("all");
  });
});
