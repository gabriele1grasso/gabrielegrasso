import { create } from 'zustand'

/** Scelta del visitatore sui cookie di marketing (Pixel di Meta). */
export type ConsentChoice = 'granted' | 'denied'

const STORAGE_KEY = 'gg-cookie-consent'
/** Dopo 6 mesi la scelta scade e il banner ricompare, come indicato dal Garante privacy. */
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 182

interface StoredConsent {
  choice: ConsentChoice
  at: number
}

function readStored(): ConsentChoice | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const stored = JSON.parse(raw) as StoredConsent
    if (stored.choice !== 'granted' && stored.choice !== 'denied') return null
    if (Date.now() - stored.at > MAX_AGE_MS) return null
    return stored.choice
  } catch {
    return null
  }
}

function writeStored(choice: ConsentChoice) {
  try {
    const value: StoredConsent = { choice, at: Date.now() }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  } catch {
    // Archiviazione bloccata (navigazione privata, impostazioni): la scelta vale per la visita
  }
}

interface ConsentState {
  /** null finché non è stata letta (prerender) o se il visitatore non ha ancora scelto */
  choice: ConsentChoice | null
  /** true dopo la lettura nel browser: prima non si mostra nulla, per non sfasare il prerender */
  ready: boolean
  bannerOpen: boolean
  init: () => void
  setChoice: (choice: ConsentChoice) => void
  openBanner: () => void
}

export const useConsentStore = create<ConsentState>((set) => ({
  choice: null,
  ready: false,
  bannerOpen: false,
  init: () => {
    const choice = readStored()
    set({ choice, ready: true, bannerOpen: choice === null })
  },
  setChoice: (choice) => {
    writeStored(choice)
    set({ choice, bannerOpen: false })
  },
  openBanner: () => set({ bannerOpen: true }),
}))
