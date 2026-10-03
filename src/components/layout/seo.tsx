export const SITE_URL = 'https://gabrielegrasso.com'

interface SeoProps {
  title: string
  description: string
  /** Percorso della pagina, es. "/privacy-policy" */
  path: string
  /** Esclude la pagina dai risultati di ricerca */
  noindex?: boolean
}

/**
 * Titolo e meta tag della pagina. React 19 sposta questi elementi nel <head> (anche nell'HTML
 * prerenderizzato) e li rimuove quando si cambia pagina. Le parti comuni a tutto il sito
 * (immagine di anteprima, lingua…) sono in index.html.
 */
export function Seo({ title, description, path, noindex }: SeoProps) {
  const url = SITE_URL + path

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {noindex && <meta name="robots" content="noindex" />}
    </>
  )
}
