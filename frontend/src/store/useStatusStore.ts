import { create } from 'zustand'

interface StatusStore {
    isStatusOpen: boolean,

    openStatus: () => void,
    closeStatus: () => void,
    resetStatusStore: () => void; 
    
}

export const useStatusStore = create<StatusStore>((set) => ({
    isStatusOpen: false,

    openStatus: () => set({isStatusOpen: true}),
    closeStatus: () => set({isStatusOpen: false}),
    resetStatusStore: () => set({isStatusOpen: false})  
}))