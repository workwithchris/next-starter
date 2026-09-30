import { create } from "zustand";

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: "admin" | "member" | "viewer";
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setAuth: (user: User, token: string) => void;
  updateUser: (partial: Partial<User>) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  setAuth: (user, token) => {
    if (typeof document !== "undefined") {
      document.cookie = `auth_token=${token}; path=/; max-age=2592000; SameSite=Lax`;
    }
    set({ user, token, isAuthenticated: true });
  },
  updateUser: (partial) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...partial } : null,
    })),
  logout: () => {
    if (typeof document !== "undefined") {
      document.cookie = "auth_token=; path=/; max-age=0; SameSite=Lax";
    }
    set({ user: null, token: null, isAuthenticated: false });
  },
}));
