/**
 * srcset per un'immagine di public/ che ha anche la variante larga 640px ("nome-640.webp"):
 * gli schermi piccoli scaricano quella, gli altri l'originale.
 */
export function srcSetFor(src: string, width: number) {
  return `${src.replace(/\.webp$/, '-640.webp')} 640w, ${src} ${width}w`
}
