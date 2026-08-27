import { CheckIcon } from 'lucide-react'

import { CtaBlock } from '@/components/sections/cta-block'
import { heroFeatures } from '@/data/content'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      <div
        aria-hidden
        className="bg-accent/20 absolute -top-40 left-1/2 h-[32rem] w-[64rem] -translate-x-1/2 rounded-full blur-3xl"
      />
      <div className="container-page relative flex flex-col items-center gap-6 py-20 text-center sm:py-28">
        <span className="bg-secondary text-muted-foreground inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium">
          Per imprenditori e professionisti
        </span>

        <h1 className="text-balance max-w-2xl text-[32px] sm:text-[40px]">
          Smetti di fare Meta Ads <span className="text-accent">alla cieca.</span>
          <br />
          Pannello, Pubblico, Portafoglio.
        </h1>

        <p className="text-muted-foreground text-balance max-w-2xl text-lg sm:text-xl">
          Il percorso completo che copre configurazione tecnica, strategia e gestione del
          budget, pensato per chi inizia con la pubblicità online.
        </p>

        <ul className="mx-auto mt-2 flex max-w-xl flex-col gap-3 text-left">
          {heroFeatures.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm sm:text-base">
              <CheckIcon className="text-accent mt-0.5 size-4 shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <CtaBlock />
      </div>
    </section>
  )
}
