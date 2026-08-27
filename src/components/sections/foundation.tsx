import { CheckIcon } from 'lucide-react'

import { SectionHeading } from '@/components/sections/section-heading'
import { foundationPoints } from '@/data/content'

export function Foundation() {
  return (
    <section className="border-b bg-secondary/40">
      <div className="container-page py-20">
        <SectionHeading
          eyebrow="Fondamenta che restano"
          title="Impara le basi una volta, ti restano per sempre"
          description="Pannello, Pubblico e Portafoglio non sono mode che cambiano ogni stagione. Sono le basi su cui poggia qualsiasi campagna Meta. Le impari adesso e ti servono per sempre, anche quando vorrai fare cose più avanzate."
        />

        <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {foundationPoints.map((point) => (
            <li key={point} className="flex items-start gap-3 rounded-xl border bg-background p-5">
              <CheckIcon className="text-accent mt-0.5 size-5 shrink-0" />
              <span className="text-sm sm:text-base">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
