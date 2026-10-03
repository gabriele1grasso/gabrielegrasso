import { Link } from '@tanstack/react-router'
import { ActivityIcon, ChartPieIcon, CircleStopIcon, ClockIcon, FrownIcon } from 'lucide-react'

import { Rating } from '@/components/sections/rating'
import { Button } from '@/components/ui/button'
import { problems } from '@/data/content'
import { cn } from '@/lib/utils'

const problemIcons = [ClockIcon, FrownIcon, ActivityIcon, CircleStopIcon, ChartPieIcon]

export function Problems() {
  return (
    <section>
      <div className="container-page py-20 sm:py-28">
        <p className="text-muted-foreground">Il problema</p>
        <h2 className="text-display mt-6 max-w-4xl">
          Vai a tentativi, o non sai nemmeno da dove iniziare. Il Protocollo 3P ti dice cosa devi
          fare.
        </h2>
        <p className="mt-8 max-w-2xl">
          Meta Ads sembra complesso perché nessuno ti ha mai dato una sequenza da seguire. Hai visto
          decine di opzioni, non sapevi quale toccare, e hai rimandato. Nel frattempo i clienti
          continuano ad arrivare solo dal passaparola.
        </p>

        {/* 2 card nella prima riga, 3 nella seconda */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {problems.map((problem, i) => {
            const Icon = problemIcons[i]
            return (
              <div
                key={problem.id}
                className={cn(
                  'rounded-2xl bg-[#f2f2f2] p-8',
                  i < 2 ? 'lg:col-span-3' : 'lg:col-span-2',
                  i === 4 && 'sm:col-span-2 lg:col-span-2',
                )}
              >
                <span className="flex size-12 items-center justify-center rounded-lg bg-[#1c1c1c] text-white">
                  <Icon className="size-6" strokeWidth={2.25} />
                </span>
                <h3 className="text-title mt-8">
                  {problem.title}
                </h3>
                <p className="mt-4">{problem.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 grid items-center gap-10 border-t pt-14 lg:grid-cols-2">
          <p className="max-w-2xl font-semibold">
            So cosa significa vedere uscire soldi dal conto senza sapere se stanno lavorando per te.
            Per questo ho costruito il Protocollo 3P: una sequenza chiara, niente fuffa, per partire
            con una direzione chiara.
          </p>
          <div className="flex flex-col items-center text-center">
            <Rating className="items-center" />
            <Button asChild variant="accent" size="lg" className="mt-4 w-full">
              <Link to="/grazie">Inizia ora il Protocollo 3P</Link>
            </Button>
            <p className="mt-3">Soddisfatto o rimborsato 14 giorni</p>
          </div>
        </div>
      </div>
    </section>
  )
}
