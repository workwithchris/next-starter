import { create } from "zustand";

interface DashboardUiState {
  searchQuery: string;
  selectedTierFilter: "all" | "starter" | "pro" | "enterprise";
  isCreateDialogOpen: boolean;
  setSearchQuery: (query: string) => void;
  setSelectedTierFilter: (tier: "all" | "starter" | "pro" | "enterprise") => void;
  setCreateDialogOpen: (open: boolean) => void;
  resetFilters: () => void;
}

export const useDashboardStore = create<DashboardUiState>((set) => ({
  searchQuery: "",
  selectedTierFilter: "all",
  isCreateDialogOpen: false,
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setSelectedTierFilter: (selectedTierFilter) => set({ selectedTierFilter }),
  setCreateDialogOpen: (isCreateDialogOpen) => set({ isCreateDialogOpen }),
  resetFilters: () => set({ searchQuery: "", selectedTierFilter: "all" }),
}));
