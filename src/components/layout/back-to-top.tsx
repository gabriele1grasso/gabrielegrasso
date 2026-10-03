import { ArrowUpIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
import { scrollToTop } from '@/lib/scroll'

/** Compare dopo aver scorso circa una schermata. */
const SHOW_AFTER = 800

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      setVisible(window.scrollY > SHOW_AFTER)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Torna su"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        'bg-accent text-accent-foreground hover:bg-accent/90 fixed right-4 bottom-4 z-40 flex size-12 items-center justify-center rounded-full shadow-[0_8px_30px_rgba(94,65,227,0.35)] transition-all duration-200 motion-reduce:transition-none sm:right-8 sm:bottom-8',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      <ArrowUpIcon className="size-5" strokeWidth={2.5} />
    </button>
  )
}
