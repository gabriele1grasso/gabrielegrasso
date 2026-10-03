import type { ReactNode } from 'react'

import { Seo } from '@/components/layout/seo'

interface LegalPageProps {
  title: string
  description: string
  /** Percorso della pagina, es. "/privacy-policy" */
  path: string
  updatedAt: string
  children: ReactNode
}

export function LegalPage({ title, description, path, updatedAt, children }: LegalPageProps) {
  return (
    <div className="container-page py-16">
      <Seo title={`${title} — Gabriele Grasso`} description={description} path={path} />
      <div className="mx-auto max-w-3xl">
        <h1 className="text-[26px] sm:text-[34px]">{title}</h1>
        <p className="text-muted-foreground mt-2 text-sm">Ultimo aggiornamento: {updatedAt}</p>

        <div className="prose-legal text-foreground/90 mt-10 flex flex-col gap-6 text-sm leading-relaxed sm:text-base">
          {children}
        </div>
      </div>
    </div>
  )
}
