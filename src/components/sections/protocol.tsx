import { PricingCard } from '@/components/sections/pricing'
import { CardAccordion, CardAccordionItem } from '@/components/ui/card-accordion'
import { phases } from '@/data/content'

function Phases() {
  return (
    <CardAccordion type="single" collapsible className="mt-10">
      {phases.map((phase) => (
        <CardAccordionItem
          key={phase.id}
          value={phase.id}
          title={`Fase ${Number(phase.number)} — ${phase.title}`}
          className="rounded-lg bg-white"
        >
          <p>{phase.description}</p>
          <p className="mt-4">
            <strong className="font-bold">Risultato:</strong> {phase.result}
          </p>
        </CardAccordionItem>
      ))}
    </CardAccordion>
  )
}

export function Protocol() {
  return (
    <section id="come-funziona" className="bg-brand-gradient scroll-mt-28">
      <div className="container-page grid items-start gap-8 py-20 sm:py-28 lg:grid-cols-2">
        <div className="text-white">
          <p className="text-white/70">Cosa c'è dentro il Protocollo 3P</p>
          <h2 className="text-display mt-5 max-w-[590px]">Una sequenza chiara, dalla A alla Z</h2>
          <p className="mt-7.5 max-w-[590px]">
            Ogni passaggio scritto nero su bianco, dal primo accesso al pulsante "pubblica".
          </p>
          <Phases />
        </div>

        <PricingCard />
      </div>
    </section>
  )
}
