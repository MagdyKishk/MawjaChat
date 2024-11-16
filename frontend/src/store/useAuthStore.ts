import { create } from "zustand";

interface AuthStore {
    isAuthenticated: boolean;
    checkedAuth: boolean;
}

export const useAuthStore = create<AuthStore>(() => ({
    checkedAuth: true,
    isAuthenticated: false,
}));