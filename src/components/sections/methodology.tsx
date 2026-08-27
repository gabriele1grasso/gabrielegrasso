import { SectionHeading } from '@/components/sections/section-heading'
import { methodologyPoints } from '@/data/content'

export function Methodology() {
  return (
    <section className="border-b">
      <div className="container-page py-20">
        <SectionHeading eyebrow="Un percorso, non un labirinto" title="Sai sempre qual è il prossimo passo" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {methodologyPoints.map((point, index) => (
            <div key={point.id} className="bg-card rounded-xl border p-6">
              <span className="text-accent text-sm font-semibold">0{index + 1}</span>
              <h3 className="mt-2 text-lg font-semibold">{point.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
