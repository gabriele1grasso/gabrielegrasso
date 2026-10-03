import { useEffect, useState } from 'react'

/** Movimenti più piccoli di questa soglia non cambiano lo stato (evita tremolii). */
const THRESHOLD = 8

/**
 * true quando la navbar va nascosta: si scorre verso il basso oltre l'header.
 * Torna false appena si scorre verso l'alto o si è vicini alla cima della pagina.
 * Con `keepVisible` (es. menu mobile aperto) resta visibile, e dopo resta visibile
 * fino al prossimo scroll verso il basso.
 */
export function useHideOnScroll(topOffset: number, keepVisible = false) {
  const [hidden, setHidden] = useState(false)

  if (keepVisible && hidden) setHidden(false)

  useEffect(() => {
    let lastY = window.scrollY
    let frame = 0

    const update = () => {
      frame = 0
      const y = window.scrollY
      const delta = y - lastY

      if (y <= topOffset) {
        setHidden(false)
        lastY = y
      } else if (Math.abs(delta) >= THRESHOLD) {
        setHidden(delta > 0)
        lastY = y
      }
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [topOffset])

  return hidden && !keepVisible
}
