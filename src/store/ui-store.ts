import { create } from 'zustand'

interface UIState {
  mobileNavOpen: boolean
  setMobileNavOpen: (open: boolean) => void
  openFaqId: string | null
  setOpenFaqId: (id: string | null) => void
}

export const useUIStore = create<UIState>((set) => ({
  mobileNavOpen: false,
  setMobileNavOpen: (open) => set({ mobileNavOpen: open }),
  openFaqId: null,
  setOpenFaqId: (id) => set({ openFaqId: id }),
}))
