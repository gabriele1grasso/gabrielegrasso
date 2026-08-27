import { ArrowRightIcon, CheckIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      <div
        aria-hidden
        className="bg-accent/20 absolute -top-40 left-1/2 h-[32rem] w-[64rem] -translate-x-1/2 rounded-full blur-3xl"
      />
      <div className="container-page relative flex flex-col items-center gap-6 py-20 text-center sm:py-28">
        <span className="bg-secondary text-muted-foreground inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium">
          Il metodo per chi inizia con la pubblicità online
        </span>

        <h1 className="text-balance max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Smetti di fare Meta Ads <span className="text-accent">alla cieca.</span>
        </h1>

        <p className="text-muted-foreground text-balance max-w-2xl text-lg sm:text-xl">
          Pannello, Pubblico, Portafoglio. Il percorso completo che copre configurazione
          tecnica, strategia e gestione del budget, pensato per chi inizia con la
          pubblicità online.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg" variant="accent">
            <a href="#pricing">
              Inizia il Protocollo 3P
              <ArrowRightIcon className="size-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#come-funziona">Scopri come funziona</a>
          </Button>
        </div>

        <ul className="text-muted-foreground mt-4 flex flex-col gap-x-6 gap-y-2 text-sm sm:flex-row">
          {['Accesso immediato', 'Aggiornamenti inclusi', 'Garanzia 14 giorni'].map(
            (item) => (
              <li key={item} className="flex items-center justify-center gap-2">
                <CheckIcon className="text-accent size-4" />
                {item}
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  )
}
