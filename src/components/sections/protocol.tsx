import { SectionHeading } from '@/components/sections/section-heading'
import { phases } from '@/data/content'

export function Protocol() {
  return (
    <section id="come-funziona" className="border-b scroll-mt-16">
      <div className="container-page py-20">
        <SectionHeading
          eyebrow="Cosa c’è dentro il Protocollo 3P"
          title="Una sequenza chiara, dalla A alla Z"
          description={'Ogni passaggio scritto nero su bianco, dal primo accesso al pulsante “pubblica”.'}
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {phases.map((phase) => (
            <div key={phase.id} className="bg-card relative rounded-2xl border p-8">
              <span className="text-accent/30 absolute right-6 top-4 text-6xl font-bold select-none">
                {phase.number}
              </span>
              <h3 className="max-w-[85%] text-xl font-semibold">
                Fase {phase.number.replace(/^0/, '')} — {phase.title}
              </h3>
              <p className="text-muted-foreground mt-3">{phase.description}</p>
              <p className="border-accent/30 mt-4 border-t pt-4 text-sm font-medium">
                <span className="text-accent">Risultato: </span>
                {phase.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
