/**
 * srcset per un'immagine di public/ che ha anche le varianti più strette ("nome-640.webp",
 * ed eventualmente altre larghezze indicate in `variants`): gli schermi piccoli scaricano
 * quelle, gli altri l'originale.
 */
export function srcSetFor(src: string, width: number, variants: number[] = [640]) {
  const sources = variants.map((w) => `${src.replace(/\.webp$/, `-${w}.webp`)} ${w}w`)
  return [...sources, `${src} ${width}w`].join(', ')
}
