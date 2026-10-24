import { Link, useRouterState } from '@tanstack/react-router'
import { XIcon } from 'lucide-react'
import { useEffect, useRef } from 'react'

import { Button } from '@/components/ui/button'
import { useConsentStore } from '@/lib/consent'
import { loadMetaPixel, revokeMetaPixel, trackPageView } from '@/lib/meta-pixel'

/**
 * Banner dei cookie e gestione del Pixel di Meta. Il Pixel parte solo dopo "Accetta";
 * chiudere il banner con la X equivale a rifiutare. Le preferenze si riaprono dal footer.
 */
export function CookieConsent() {
  const { choice, ready, bannerOpen, init, setChoice } = useConsentStore()
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const trackedPath = useRef<string | null>(null)

  useEffect(() => {
    init()
  }, [init])

  // Pixel: caricato al consenso (con la prima PageView), poi una PageView a ogni cambio pagina
  useEffect(() => {
    if (choice !== 'granted') return
    if (trackedPath.current === null) loadMetaPixel()
    else if (trackedPath.current !== pathname) trackPageView()
    trackedPath.current = pathname
  }, [choice, pathname])

  const decide = (next: 'granted' | 'denied') => {
    if (next === 'denied' && choice === 'granted') revokeMetaPixel()
    setChoice(next)
  }

  if (!ready || !bannerOpen) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-text"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-[560px] rounded-2xl bg-white p-6 text-[#1c1c1c] shadow-[0_24px_60px_-20px_rgba(94,65,227,0.35)] ring-1 ring-black/5 sm:bottom-8"
    >
      <button
        type="button"
        onClick={() => decide('denied')}
        aria-label="Chiudi e rifiuta i cookie facoltativi"
        className="text-muted-foreground hover:text-foreground absolute top-4 right-4 rounded-md p-1 transition-colors"
      >
        <XIcon className="size-5" />
      </button>

      <p id="cookie-title" className="pr-8 text-lg font-extrabold tracking-[-0.3px]">
        Cookie
      </p>
      <p id="cookie-text" className="text-muted-foreground mt-2 text-[15px]">
        Uso cookie tecnici, necessari al funzionamento del sito. Solo con il tuo consenso
        attivo anche il Pixel di Meta, per misurare le visite che arrivano dalle inserzioni e
        mostrarti annunci pertinenti. Puoi cambiare idea quando vuoi dal fondo della pagina.{' '}
        <Link to="/cookie-policy" className="text-accent font-semibold hover:underline">
          Cookie Policy
        </Link>
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <Button variant="outline" size="lg" className="h-12 text-base" onClick={() => decide('denied')}>
          Rifiuta
        </Button>
        <Button size="lg" className="h-12 text-base" onClick={() => decide('granted')}>
          Accetta
        </Button>
      </div>
    </div>
  )
}
