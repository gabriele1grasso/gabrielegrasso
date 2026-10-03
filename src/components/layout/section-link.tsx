import { Link } from '@tanstack/react-router'
import type { ComponentProps } from 'react'

type SectionLinkProps = Omit<ComponentProps<typeof Link>, 'to' | 'hash'> & {
  /** id della sezione della home, senza "#" */
  section: string
}

/**
 * Link a una sezione della home con scroll fluido. Passa dal router (non da un <a href="/#…">)
 * perché a ogni cambio di hash TanStack Router riporterebbe lo scroll in cima; così funziona
 * anche partendo da un'altra pagina. Lo scroll è immediato se l'utente preferisce meno movimento.
 */
export function SectionLink({ section, ...props }: SectionLinkProps) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <Link
      to="/"
      hash={section}
      hashScrollIntoView={{ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' }}
      {...props}
    />
  )
}
