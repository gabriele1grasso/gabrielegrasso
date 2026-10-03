import { Link } from '@tanstack/react-router'
import { StarIcon } from 'lucide-react'

import {
  CardRefundFilledIcon,
  DocumentsFilledIcon,
  LockOpenFilledIcon,
  ScreenPlayFilledIcon,
} from '@/components/icons/filled'
import { Button } from '@/components/ui/button'
import { checklistFeatures } from '@/data/content'

const featureIcons = [
  ScreenPlayFilledIcon,
  LockOpenFilledIcon,
  DocumentsFilledIcon,
  CardRefundFilledIcon,
]

export function PricingCard() {
  return (
    <div className="flex flex-col rounded-2xl bg-white p-6 pb-12 text-[#010101] sm:p-10 sm:pb-12">
      <p className="text-[#010101]/70">La Checklist Protocollo 3P</p>
      <h2 className="text-display mt-7.5 leading-[1.4]">Tutto il metodo, in un'unica guida</h2>
      <p className="mt-7.5">
        La guida operativa completa: dalla configurazione del Portfolio Business alla campagna
        attiva. Ogni task spiegata nel come e nel perché, per muoverti senza dipendere da nessuno.
      </p>

      {/* Due colonne riempite dall'alto in basso, come nell'originale */}
      <ul className="mt-8 grid gap-y-[15px] sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-[17px]">
        {checklistFeatures.map((feature, i) => {
          const Icon = featureIcons[i]
          return (
            <li key={feature} className="text-feature flex items-start gap-[11px] font-bold">
              <Icon className="mt-[3px] size-[17px] shrink-0" />
              <span>{feature}</span>
            </li>
          )
        })}
      </ul>

      <hr className="mt-8 border-black/15" />

      <p className="text-display mt-7">24,90 EUR</p>
      <p className="mt-2.5 text-lg text-[#010101]/55">IVA inclusa · Pagamento unico</p>
      <p className="mt-4 text-[#010101]/55">
        Il punto di partenza più accessibile per iniziare nel modo giusto.
      </p>

      <Button asChild variant="accent" size="lg" className="mt-5 self-center">
        <Link to="/grazie">Inizia ora il Protocollo 3P</Link>
      </Button>

      <div className="mt-8 flex flex-col items-center">
        <div className="flex gap-2" aria-label="5 stelle su 5">
          {Array.from({ length: 5 }, (_, i) => (
            <StarIcon key={i} className="size-3.5 fill-current" />
          ))}
        </div>
        <p className="mt-2.5">+250 imprenditori e professionisti soddisfatti</p>
      </div>
    </div>
  )
}
