import type { ReactNode } from 'react'

interface LegalPageProps {
  title: string
  updatedAt: string
  children: ReactNode
}

export function LegalPage({ title, updatedAt, children }: LegalPageProps) {
  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="text-muted-foreground mt-2 text-sm">Ultimo aggiornamento: {updatedAt}</p>

        <div className="prose-legal text-foreground/90 mt-10 flex flex-col gap-6 text-sm leading-relaxed sm:text-base">
          {children}
        </div>
      </div>
    </div>
  )
}
