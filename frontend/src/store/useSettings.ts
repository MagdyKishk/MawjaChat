import { create } from 'zustand'

interface SettingsStore {
    isSettingsOpen: boolean,

    openSetting: () => void,
    closeSetting: () => void,
    resetSettingsStore: () => void; 
    
}

export const useSettingsStore = create<SettingsStore>((set) => ({
    isSettingsOpen: false,

    openSetting: () => set({isSettingsOpen: true}),
    closeSetting: () => set({ isSettingsOpen: false }),
    resetSettingsStore: () => set({isSettingsOpen: false})  
}))