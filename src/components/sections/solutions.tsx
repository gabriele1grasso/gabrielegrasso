import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import { solutionTriads } from '@/data/content'

function Step({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-muted-foreground">{label}</p>
      {children}
    </div>
  )
}

export function Solutions() {
  return (
    <section>
      <div className="container-page pt-7.5 pb-15 lg:pt-15 lg:pb-30">
        <p className="text-muted-foreground">Cosa risolvi</p>
        <h2 className="text-display mt-6 max-w-4xl">
          Da "non so da dove iniziare" a una direzione chiara
        </h2>
        <p className="mt-8 max-w-2xl">
          Ogni problema che ti blocca su Meta ha un punto preciso in cui si risolve.
          <br />
          Ecco dove interviene il Protocollo, passo per passo.
        </p>

        <div className="mt-16 flex flex-col gap-14">
          {solutionTriads.map((triad) => (
            <div
              key={triad.id}
              className="grid gap-8 rounded-2xl bg-[#f2f2f2] p-8 sm:grid-cols-2 sm:p-10 lg:grid-cols-4 lg:gap-10"
            >
              <Step label="Problema:">
                <h3 className="text-title mt-4">
                  {triad.problem}
                </h3>
              </Step>
              <img
                src={triad.image}
                alt={triad.imageAlt}
                width={500}
                loading="lazy"
                className="w-full self-start rounded-2xl"
              />
              <Step label="Soluzione:">
                <p className="text-subtitle mt-4">
                  {triad.solution}
                </p>
              </Step>
              <Step label="Risultato:">
                <p className="text-subtitle mt-4">
                  {triad.result}
                </p>
              </Step>
            </div>
          ))}
        </div>

        <div className="mt-14 grid items-center gap-10 border-t pt-16 lg:grid-cols-2">
          <p className="text-center font-semibold">
            Ho fatto io da filtro: ho tolto tutto il superfluo e lasciato solo quello che ti serve
            davvero per partire col piede giusto. Niente giri inutili, solo i passaggi che contano.
          </p>
          <div className="flex justify-center">
            <Button asChild variant="accent" size="lg">
              <Link to="/grazie">Inizia ora il Protocollo 3P</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
