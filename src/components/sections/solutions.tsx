import { ArrowRightIcon } from 'lucide-react'

import { CtaBlock } from '@/components/sections/cta-block'
import { SectionHeading } from '@/components/sections/section-heading'
import { solutionTriads } from '@/data/content'

export function Solutions() {
  return (
    <section className="border-b">
      <div className="container-page py-20">
        <SectionHeading
          eyebrow="Cosa risolvi"
          title={'Da “non so da dove iniziare” a una direzione chiara'}
          description="Ogni problema che ti blocca su Meta ha un punto preciso in cui si risolve. Ecco dove interviene il Protocollo, passo per passo."
        />

        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-4">
          {solutionTriads.map((triad) => (
            <div
              key={triad.id}
              className="bg-card grid gap-4 rounded-xl border p-6 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center"
            >
              <div>
                <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wide">
                  Problema
                </p>
                <p className="mt-1 text-sm sm:text-base">{triad.problem}</p>
              </div>
              <ArrowRightIcon className="text-accent hidden size-4 sm:block" />
              <div>
                <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wide">
                  Soluzione
                </p>
                <p className="mt-1 text-sm sm:text-base">{triad.solution}</p>
              </div>
              <ArrowRightIcon className="text-accent hidden size-4 sm:block" />
              <div>
                <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wide">
                  Risultato
                </p>
                <p className="mt-1 text-sm sm:text-base">{triad.result}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground mx-auto mt-12 max-w-2xl text-center text-lg">
          Ho fatto io da filtro: ho tolto tutto il superfluo e lasciato solo quello che ti
          serve davvero per partire col piede giusto. Niente giri inutili, solo i passaggi
          che contano.
        </p>

        <CtaBlock />
      </div>
    </section>
  )
}
