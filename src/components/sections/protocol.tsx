import { CheckIcon } from 'lucide-react'

import { phases } from '@/data/content'

export function Protocol() {
  return (
    <section id="come-funziona" className="border-b scroll-mt-16">
      <div className="container-page py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-accent text-sm font-semibold uppercase tracking-wide">
            Come funziona
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Il Protocollo 3P, in quattro fasi
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Un percorso in ordine logico: prima le fondamenta, poi la strategia, poi il
            budget, infine la campagna.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {phases.map((phase) => (
            <div key={phase.id} className="bg-card relative rounded-2xl border p-8">
              <span className="text-accent/30 absolute right-6 top-4 text-6xl font-bold select-none">
                {phase.number}
              </span>
              <h3 className="text-xl font-semibold">
                Fase {phase.number.replace(/^0/, '')} — {phase.title}
              </h3>
              <p className="text-muted-foreground mt-2">{phase.description}</p>
              <ul className="mt-4 space-y-2">
                {phase.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm">
                    <CheckIcon className="text-accent mt-0.5 size-4 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
