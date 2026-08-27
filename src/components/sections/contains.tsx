import { CheckIcon } from 'lucide-react'

import { CtaBlock } from '@/components/sections/cta-block'
import { SectionHeading } from '@/components/sections/section-heading'
import { containsFeatures } from '@/data/content'

export function Contains() {
  return (
    <section id="cosa-include" className="border-b scroll-mt-16">
      <div className="container-page py-20">
        <SectionHeading
          eyebrow="Cosa contiene"
          title="Il Protocollo 3P passo dopo passo"
          description="Smetti di chiederti se stai facendo le cose giuste. Con il Protocollo 3P sai dove va ogni euro e cosa aspettarti in cambio."
        />

        <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {containsFeatures.map((feature) => (
            <li
              key={feature}
              className="bg-card flex items-start gap-3 rounded-xl border p-5"
            >
              <CheckIcon className="text-accent mt-0.5 size-5 shrink-0" />
              <span className="text-sm sm:text-base">{feature}</span>
            </li>
          ))}
        </ul>

        <CtaBlock />
      </div>
    </section>
  )
}
