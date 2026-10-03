import { Link } from '@tanstack/react-router'

import {
  CardRefundFilledIcon,
  DocumentsFilledIcon,
  ScreenPlayFilledIcon,
  ShieldCheckFilledIcon,
} from '@/components/icons/filled'
import { Button } from '@/components/ui/button'
import { finalCtaFeatures } from '@/data/content'

const featureIcons = [
  ScreenPlayFilledIcon,
  ShieldCheckFilledIcon,
  DocumentsFilledIcon,
  CardRefundFilledIcon,
]

// Sfondo dell'originale: tre aloni #5e41e3 che sfumano nel trasparente sopra il bianco.
const cardBackground = [
  'radial-gradient(circle at 21% 19%, #5e41e3 0%, transparent 100%)',
  'radial-gradient(circle at 0% 100%, #5e41e3 0%, transparent 70%)',
  'radial-gradient(circle at 100% 100%, #5e41e3 0%, transparent 100%)',
].join(', ')

export function FinalCta() {
  return (
    <section>
      <div className="container-page pt-7.5 pb-15 lg:pt-15 lg:pb-30">
        <div
          className="flex flex-col items-start rounded-2xl p-6 pb-12 text-white sm:p-10 sm:pb-[70px]"
          style={{ backgroundImage: cardBackground }}
        >
          <p className="text-white/70">Inizia oggi</p>
          <h2 className="text-display mt-5 max-w-[1160px]">Pronto a fare Meta Ads con un metodo?</h2>
          <p className="mt-7.5">
            Hai visto cosa contiene, sai chi te lo propone, hai 14 giorni per provarla. Tutto quello
            che ti serve è già qui.
          </p>

          {/* Due colonne a metà larghezza, riempite dall'alto in basso come nell'originale */}
          <ul className="mt-8 grid w-full gap-y-[19px] sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6">
            {finalCtaFeatures.map((feature, i) => {
              const Icon = featureIcons[i]
              return (
                <li key={feature} className="text-feature flex items-start gap-[11px] font-bold">
                  <Icon className="mt-0.5 size-[17px] shrink-0" />
                  <span>{feature}</span>
                </li>
              )
            })}
          </ul>

          <p className="text-display mt-7.5">24,90 EUR</p>
          <p className="mt-2.5 text-white/55">IVA inclusa</p>
          <p className="mt-4 text-white/55">
            Il punto di partenza più accessibile per iniziare nel modo giusto.
          </p>

          <Button asChild size="lg" className="mt-7.5">
            <Link to="/grazie">Inizia il Protocollo 3P</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
