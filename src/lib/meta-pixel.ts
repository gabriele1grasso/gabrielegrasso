/** Pixel di Meta "Pixel Gabriele Grasso" (portafoglio Direzione Digitale). */
export const META_PIXEL_ID = '1838141280906514'

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void
  queue: unknown[]
  push: Fbq
  loaded: boolean
  version: string
}

declare global {
  interface Window {
    fbq?: Fbq
    _fbq?: Fbq
  }
}

let loaded = false

/**
 * Carica il Pixel (solo dopo il consenso) e registra la prima visualizzazione di pagina.
 * È lo snippet ufficiale di Meta riscritto: lo script esterno parte in asincrono e non
 * rallenta il caricamento della pagina.
 */
export function loadMetaPixel() {
  if (loaded || typeof window === 'undefined') return
  loaded = true

  if (!window.fbq) {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args)
      else fbq.queue.push(args)
    } as Fbq
    fbq.push = fbq
    fbq.loaded = true
    fbq.version = '2.0'
    fbq.queue = []
    window.fbq = fbq
    window._fbq = fbq

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://connect.facebook.net/en_US/fbevents.js'
    document.head.appendChild(script)
  }

  window.fbq('init', META_PIXEL_ID)
  window.fbq('track', 'PageView')
}

/** Visualizzazione di pagina per i cambi di pagina successivi al primo (il sito non ricarica). */
export function trackPageView() {
  if (loaded) window.fbq?.('track', 'PageView')
}

/** Consenso ritirato: il Pixel smette di inviare dati e i suoi cookie vengono cancellati. */
export function revokeMetaPixel() {
  if (typeof window === 'undefined') return
  window.fbq?.('consent', 'revoke')
  for (const name of ['_fbp', '_fbc']) {
    document.cookie = `${name}=; Max-Age=0; path=/`
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.${location.hostname.replace(/^www\./, '')}`
  }
}
