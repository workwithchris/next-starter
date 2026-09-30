import { create } from "zustand";

interface UiState {
  isSidebarOpen: boolean;
  isSearchModalOpen: boolean;
  activeModal: string | null;
  toggleSidebar: () => void;
  setSidebarOpen: (isOpen: boolean) => void;
  setSearchModalOpen: (isOpen: boolean) => void;
  openModal: (modalId: string) => void;
  closeModal: () => void;
}

export const useUiStore = create<UiState>((set) => ({
  isSidebarOpen: false,
  isSearchModalOpen: false,
  activeModal: null,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),
  setSearchModalOpen: (isOpen) => set({ isSearchModalOpen: isOpen }),
  openModal: (modalId) => set({ activeModal: modalId }),
  closeModal: () => set({ activeModal: null }),
}));
