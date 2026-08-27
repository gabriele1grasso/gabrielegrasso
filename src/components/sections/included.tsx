import {
  CalculatorIcon,
  ListChecksIcon,
  PaletteIcon,
  RefreshCwIcon,
} from 'lucide-react'

import { included } from '@/data/content'

const icons = {
  i1: ListChecksIcon,
  i2: CalculatorIcon,
  i3: PaletteIcon,
  i4: RefreshCwIcon,
}

export function Included() {
  return (
    <section id="cosa-include" className="border-b scroll-mt-16">
      <div className="container-page py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-accent text-sm font-semibold uppercase tracking-wide">
            Cosa include
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Tutto quello che ti serve per partire
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {included.map((item) => {
            const Icon = icons[item.id as keyof typeof icons]
            return (
              <div key={item.id} className="rounded-xl border p-6">
                <div className="bg-accent/10 text-accent flex size-11 items-center justify-center rounded-lg">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
