import { useRouterState } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

/**
 * Il primo PageView parte dallo snippet in index.html, al caricamento della pagina.
 * Qui si inviano solo i cambi di pagina interni, che non ricaricano l'HTML.
 */
export function MetaPixel() {
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const lastPath = useRef<string | null>(null)

  useEffect(() => {
    if (lastPath.current !== null && lastPath.current !== pathname) {
      window.fbq?.('track', 'PageView')
    }
    lastPath.current = pathname
  }, [pathname])

  return null
}
