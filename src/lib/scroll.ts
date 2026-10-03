/** Scroll fluido, o immediato se l'utente ha chiesto di ridurre le animazioni. */
export function scrollBehavior(): ScrollBehavior {
  // Durante il prerender non c'è window
  if (typeof window === 'undefined') return 'smooth'
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: scrollBehavior() })
}
