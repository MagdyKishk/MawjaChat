import { create } from "zustand";

interface MobileStore {
    isOnMobile: boolean,

    // Actions
    setIsOnMobile: (isOnMobile: boolean) => void,
}

export const useMobileStore = create<MobileStore>((set) => ({
    isOnMobile: false,
    setIsOnMobile: (isOnMobile: boolean) => set(() => ({isOnMobile})),
}))