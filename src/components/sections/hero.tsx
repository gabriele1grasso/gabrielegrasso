import { Link } from '@tanstack/react-router'
import { CalculatorIcon, RefreshCwIcon, SquarePlayIcon } from 'lucide-react'

import { Rating } from '@/components/sections/rating'
import { Button } from '@/components/ui/button'
import { heroFeatures } from '@/data/content'
import { srcSetFor } from '@/lib/images'

const featureIcons = [SquarePlayIcon, CalculatorIcon, RefreshCwIcon]

export function Hero() {
  return (
    <section
      // Sale sotto la navbar flottante così lo sfondo viola parte dal bordo superiore.
      className="bg-brand-gradient -mt-(--header-h) pt-(--header-h) text-white"
    >
      <div className="container-page grid items-center gap-12 pt-[calc(135px-var(--header-h))] pb-[84px] lg:grid-cols-[1fr_minmax(0,0.95fr)] lg:gap-10">
        <div className="flex flex-col items-start">
          <p className="text-white/75">Per imprenditori e professionisti</p>

          <h1 className="text-display mt-6 text-white">
            La lista precisa per non bruciare budget su Meta.
          </h1>

          <p className="mt-8 max-w-xl">
            <strong className="font-bold">Pannello, Pubblico, Portafoglio.</strong> La sequenza per
            impostare le tue campagne Meta Ads nel modo giusto, che tu debba ancora iniziare o che tu
            abbia già provato senza risultati.
          </p>

          <ul className="mt-8 flex max-w-2xl flex-col gap-5">
            {heroFeatures.map((feature, i) => {
              const Icon = featureIcons[i]
              return (
                <li key={feature} className="text-feature flex items-start gap-3">
                  <Icon className="size-5 shrink-0" />
                  <span>{feature}</span>
                </li>
              )
            })}
          </ul>

          <Rating className="mt-10" />

          <Button asChild size="lg" className="mt-4">
            <Link to="/grazie">Inizia ora il Protocollo 3P</Link>
          </Button>
          <p className="mt-3">Soddisfatto o rimborsato 14 giorni</p>
        </div>

        <img
          src="/hero-protocollo.webp"
          srcSet={srcSetFor('/hero-protocollo.webp', 1000)}
          sizes="(min-width: 1024px) 560px, 100vw"
          fetchPriority="high"
          alt="Anteprima del Protocollo 3P: la checklist per rimettere in ordine Meta Ads"
          width={1000}
          height={868}
          className="w-full shadow-[0_20px_60px_rgba(40,20,120,0.25)]"
        />
      </div>
    </section>
  )
}
