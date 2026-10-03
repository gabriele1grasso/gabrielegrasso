import { Link } from '@tanstack/react-router'
import { CreditCardIcon, LockOpenIcon, SquareCheckBigIcon, SquarePlayIcon } from 'lucide-react'

import { Rating } from '@/components/sections/rating'
import { ToolsCard } from '@/components/sections/tools'
import { Button } from '@/components/ui/button'
import { containsFeatures } from '@/data/content'

const featureIcons = [SquareCheckBigIcon, LockOpenIcon, SquarePlayIcon, CreditCardIcon]

function ContainsCard() {
  return (
    <div className="bg-brand-gradient flex flex-col rounded-2xl p-8 text-white sm:p-10">
      <p className="text-white/75">Cosa contiene</p>
      <h2 className="text-display mt-6">
        Il Protocollo 3P passo dopo passo
      </h2>
      <p className="mt-8">
        Smetti di chiederti se stai facendo le cose giuste o se è il momento giusto di iniziare.
        <br />
        Con il Protocollo 3P sai dove va ogni euro e cosa aspettarti in cambio.
      </p>

      {/* Due colonne riempite dall'alto in basso, come nell'originale */}
      <ul className="mt-10 grid gap-6 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6">
        {containsFeatures.map((feature, i) => {
          const Icon = featureIcons[i]
          return (
            <li key={feature} className="text-feature flex items-start gap-3 font-bold">
              <Icon className="mt-0.5 size-[17px] shrink-0" strokeWidth={2.5} />
              <span>{feature}</span>
            </li>
          )
        })}
      </ul>

      <div className="mt-auto flex flex-col items-start pt-16">
        <Button asChild size="lg">
          <Link to="/grazie">Inizia ora il Protocollo 3P</Link>
        </Button>
        <Rating className="mt-6" />
      </div>
    </div>
  )
}

export function Contains() {
  return (
    <section id="cosa-include" className="scroll-mt-28">
      <div className="container-page grid gap-6 py-7.5 lg:grid-cols-2 lg:py-15 lg:gap-8">
        <ContainsCard />
        <ToolsCard />
      </div>
    </section>
  )
}
