import { Link } from '@tanstack/react-router'
import type { ComponentProps, MouseEvent } from 'react'

import { scrollBehavior } from '@/lib/scroll'

type SectionLinkProps = Omit<ComponentProps<typeof Link>, 'to' | 'hash'> & {
  /** id della sezione della home, senza "#" */
  section: string
}

/**
 * Prima dello scroll imposta lo spazio da lasciare sopra la sezione: scorrendo verso il basso
 * la navbar si nasconde (la sezione può partire dal bordo dello schermo), verso l'alto riappare (serve tutta la sua
 * altezza per non coprire la sezione).
 */
function setSectionOffset(section: string) {
  const target = document.getElementById(section)
  // Se la sezione non è in pagina (si parte da un'altra route) si arriva dalla cima: verso il basso
  const goingDown = !target || target.getBoundingClientRect().top > 0
  document.documentElement.style.setProperty(
    '--section-offset',
    goingDown ? '0px' : 'var(--header-h)',
  )
}

/**
 * Link a una sezione della home con scroll fluido. Passa dal router (non da un <a href="/#…">)
 * perché a ogni cambio di hash TanStack Router riporterebbe lo scroll in cima; così funziona
 * anche partendo da un'altra pagina. Lo scroll è immediato se l'utente preferisce meno movimento.
 */
export function SectionLink({ section, onClick, ...props }: SectionLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setSectionOffset(section)
    onClick?.(event)
  }

  return (
    <Link
      to="/"
      hash={section}
      hashScrollIntoView={{ behavior: scrollBehavior(), block: 'start' }}
      onClick={handleClick}
      {...props}
    />
  )
}
