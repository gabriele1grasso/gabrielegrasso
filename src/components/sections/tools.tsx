import { CalculatorIcon, PaletteIcon } from 'lucide-react'

import { SectionHeading } from '@/components/sections/section-heading'
import { tools } from '@/data/content'

const icons = {
  t1: CalculatorIcon,
  t2: PaletteIcon,
}

export function Tools() {
  return (
    <section className="border-b">
      <div className="container-page py-20">
        <SectionHeading
          eyebrow="Strumenti inclusi"
          title="Tutto quello che ti serve per non sprecare un euro"
          description="Oltre alla checklist, ricevi gli strumenti che usi davvero mentre imposti le campagne: per stimare il budget prima di spenderlo e prendere ispirazione dalle creatività che funzionano."
        />

        <div className="mx-auto mt-12 grid max-w-2xl gap-6 sm:grid-cols-2">
          {tools.map((tool) => {
            const Icon = icons[tool.id as keyof typeof icons]
            return (
              <div key={tool.id} className="rounded-xl border p-6 text-center">
                <div className="bg-accent/10 text-accent mx-auto flex size-11 items-center justify-center rounded-lg">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 font-semibold">{tool.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{tool.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
