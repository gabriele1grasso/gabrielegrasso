import { Link } from '@tanstack/react-router'
import { CheckIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { finalCtaFeatures } from '@/data/content'

export function FinalCta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-page flex flex-col items-center gap-6 py-20 text-center">
        <span className="bg-primary-foreground/10 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium">
          Inizia oggi
        </span>

        <h2 className="text-[26px] sm:text-[34px]">Pronto a fare Meta Ads con un metodo?</h2>

        <p className="max-w-2xl text-lg opacity-80">
          Hai visto cosa contiene, sai chi te lo propone, hai 14 giorni per provarla.
          Tutto quello che ti serve è già qui.
        </p>

        <ul className="grid gap-3 text-left sm:grid-cols-2">
          {finalCtaFeatures.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm">
              <CheckIcon className="text-accent mt-0.5 size-4 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex items-end gap-2">
          <span className="text-4xl font-bold">24,90€</span>
          <span className="mb-1 text-sm opacity-70">IVA inclusa</span>
        </div>
        <p className="-mt-4 text-sm opacity-70">
          Il punto di partenza più accessibile per iniziare nel modo giusto.
        </p>

        <Button asChild size="lg" variant="accent">
          <Link to="/grazie">Inizia il Protocollo 3P</Link>
        </Button>
      </div>
    </section>
  )
}
