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

export function ChartBarsFilledIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <rect x="1" y="2" width="3" height="20" rx="1" />
      <rect x="6" y="7" width="3" height="15" rx="1" />
      <rect x="11" y="12" width="3" height="10" rx="1" />
      <rect x="16" y="7" width="3" height="15" rx="1" />
      <rect x="21" y="12" width="3" height="10" rx="1" />
    </svg>
  )
}

export function UserVoiceFilledIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M17 11.646a1 1 0 0 1-.75-1.662c.483-.549.75-1.254.75-1.985s-.266-1.436-.749-1.983a1 1 0 0 1 1.5-1.324A4.98 4.98 0 0 1 19 7.999a4.98 4.98 0 0 1-1.25 3.307 1 1 0 0 1-.75.339Z" />
      <path d="M20.001 15.708a1 1 0 0 1-.667-1.745A8.01 8.01 0 0 0 22 8c0-2.273-.972-4.445-2.666-5.962a1 1 0 0 1 1.334-1.49A10.03 10.03 0 0 1 24 8a10.03 10.03 0 0 1-3.332 7.453 1 1 0 0 1-.667.255Z" />
      <circle cx="9" cy="8" r="4" />
      <path d="M9 13c-4.411 0-8 3.589-8 8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1c0-4.411-3.589-8-8-8Z" />
    </svg>
  )
}

export function BrainGearFilledIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <circle cx="13" cy="10" r="2" />
      <path d="M12.316.023A10.236 10.236 0 0 0 3 10.353v.411l-1.894 3.789A1 1 0 0 0 1.553 15.9L3 16.618V19a3 3 0 0 0 3 3h3v2h11v-6.873A9.991 9.991 0 0 0 12.316.023ZM18 11h-1.142a3.915 3.915 0 0 1-.425 1.019l.809.809a1 1 0 1 1-1.414 1.414l-.809-.809A3.915 3.915 0 0 1 14 13.858V15a1 1 0 0 1-2 0v-1.142a3.915 3.915 0 0 1-1.019-.425l-.809.809a1 1 0 0 1-1.414-1.414l.809-.809A3.915 3.915 0 0 1 9.142 11H8a1 1 0 0 1 0-2h1.142a3.915 3.915 0 0 1 .425-1.019l-.809-.809a1 1 0 0 1 1.414-1.414l.809.809A3.915 3.915 0 0 1 12 6.142V5a1 1 0 0 1 2 0v1.142a3.915 3.915 0 0 1 1.019.425l.809-.809a1 1 0 1 1 1.414 1.414l-.809.809A3.915 3.915 0 0 1 16.858 9H18a1 1 0 0 1 0 2Z" />
    </svg>
  )
}

export function ScreenPlayFilledIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M23 1H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM9 15V5l8 5Z" />
      <rect x="6" y="21" width="12" height="2" />
    </svg>
  )
}

export function LockOpenFilledIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20 10H4c-1.105 0-2 .895-2 2v10c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2V12c0-1.105-.895-2-2-2Zm-8 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
      <path d="M16.798 2.363A5.96 5.96 0 0 0 12.11 0h-.161C8.697 0 6.034 2.63 6 5.9V8h2V5.911C8.022 3.746 9.79 2 12.047 2h.042a3.97 3.97 0 0 1 3.113 1.57 1 1 0 0 0 1.596-1.207Z" />
    </svg>
  )
}

export function DocumentsFilledIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M23 22h-2V2H4V0h18a1 1 0 0 1 1 1v21Z" />
      <path d="M18 4H2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-7 15H5v-2h6v2Zm4-4H5v-2h10v2Zm0-4H5V9h10v2Z" />
    </svg>
  )
}

export function CardRefundFilledIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M21 0H3C1.346 0 0 1.346 0 3v13c0 1.654 1.346 3 3 3h7v-2H3a1 1 0 0 1-1-1v-5h22V3c0-1.654-1.346-3-3-3ZM2 5V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2H2Z" />
      <path d="M18 13a5.002 5.002 0 0 0-4.843 3.75l1.938.499A3.002 3.002 0 0 1 18 15c.808 0 1.573.331 2.131.893l-1.608 1.168L22.792 18l.428-4.351-1.466 1.065A4.98 4.98 0 0 0 18 13Z" />
      <path d="M18 22a2.996 2.996 0 0 1-2.131-.893l1.608-1.168L13.208 19l-.428 4.351 1.466-1.065A4.98 4.98 0 0 0 18 24a5.002 5.002 0 0 0 4.843-3.75l-1.938-.499A3.002 3.002 0 0 1 18 22Z" />
    </svg>
  )
}

export function ShieldCheckFilledIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="m21.2 1.839-9-1.8a.99.99 0 0 0-.392 0l-9 1.8A1 1 0 0 0 2 2.82V13c0 8 10 11 10 11s10-3 10-11V2.82a1 1 0 0 0-.8-.981Zm-3.441 6.812-6 7a1 1 0 0 1-1.467.057l-3-3a1 1 0 0 1 1.414-1.414l2.236 2.236 5.297-6.18a1 1 0 0 1 1.518 1.301Z" />
    </svg>
  )
}

export function GraduationCapFilledIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <rect x="22" y="11" width="2" height="6" />
      <path d="M13.241 15.73A2.98 2.98 0 0 1 12 16c-.43 0-.847-.09-1.24-.269L4 12.658V18c0 2.626 4.024 4 8 4s8-1.374 8-4v-5.341l-6.759 3.071Z" />
      <path d="m23.414 7.09-11-5a1 1 0 0 0-.827 0l-11 5a1 1 0 0 0 0 1.82l11 5a1 1 0 0 0 .827 0l11-5a1 1 0 0 0 0-1.82Z" />
    </svg>
  )
}

export function MegaphoneFilledIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20 9a2.99 2.99 0 0 0-2.658-2.966A12.6 12.6 0 0 0 17 9c0 1.05.12 2.05.342 2.966A2.99 2.99 0 0 0 20 9Z" />
      <path d="m11.667 17.911-5.788-1.845 2.632 6.475a2.329 2.329 0 0 0 4.321-1.741Z" />
      <path d="M19 0a3.13 3.13 0 0 0-1.054.185L2.73 5.037A3.818 3.818 0 0 0 0 9a3.809 3.809 0 0 0 2.7 3.953l15.25 4.862A3.13 3.13 0 0 0 19 18c2.851 0 5-3.869 5-9s-2.149-9-5-9Zm0 16c-1.416 0-3-2.994-3-7s1.584-7 3-7 3 2.994 3 7-1.584 7-3 7Z" />
    </svg>
  )
}

export function ChartGrowthFilledIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <rect x="1" y="18" width="4" height="5" rx=".5" />
      <rect x="7" y="11" width="4" height="12" rx=".5" />
      <rect x="13" y="18" width="4" height="5" rx=".5" />
      <rect x="19" y="11" width="4" height="12" rx=".5" />
      <path d="M21.293 1.293 15 7.586 9.707 2.293a1 1 0 0 0-1.414 0l-7 7a1 1 0 1 0 1.414 1.414L9 4.414l5.293 5.293a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0-1.414-1.414Z" />
    </svg>
  )
}

export function BriefcaseFilledIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M2 24h20a1 1 0 0 0 1-1v-3H1v3a1 1 0 0 0 1 1Z" />
      <path d="M23 4h-6V1a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v3H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM9 2h6v2H9V2Zm7 11H8V9h8v4Z" />
    </svg>
  )
}
