import type { SVGProps } from 'react'

// Icone piene usate dal sito originale nei quadrati neri delle card:
// riempiono tutto il riquadro 24×24, a differenza delle icone a contorno di lucide.

export function CircleCheckFilledIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12C23.981 5.381 18.619.019 12 0Zm7.207 7.707-9 9c-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-4-4a1 1 0 0 1 1.414-1.414l3.293 3.293 8.293-8.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
  )
}

export function FlagFilledIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M19 9l3-7H4V1a1 1 0 0 0-2 0v22a1 1 0 0 0 2 0v-7h18l-3-7Z" />
    </svg>
  )
}
