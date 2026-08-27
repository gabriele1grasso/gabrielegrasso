import { CtaBlock } from '@/components/sections/cta-block'
import { SectionHeading } from '@/components/sections/section-heading'
import { problems } from '@/data/content'

export function Problems() {
  return (
    <section className="border-b">
      <div className="container-page py-20">
        <SectionHeading
          eyebrow="Il problema"
          title="Hai già provato ad aprire Ads Manager almeno una volta. E hai chiuso tutto."
          description="Non è colpa tua. Meta Ads sembra complesso perché nessuno ti ha mai dato una sequenza da seguire. Hai visto decine di opzioni, non sapevi quale toccare, e hai rimandato. Nel frattempo i clienti continuano ad arrivare solo dal passaparola."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <div key={problem.id} className="bg-card rounded-xl border p-6">
              <span className="text-accent text-sm font-semibold">0{index + 1}</span>
              <h3 className="mt-2 text-lg font-semibold">{problem.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{problem.description}</p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground mx-auto mt-12 max-w-2xl text-center text-lg">
          So cosa significa vedere uscire soldi dal conto senza sapere se stanno lavorando
          per te. Per questo ho costruito il Protocollo 3P: una sequenza chiara, niente
          fuffa, per partire con una direzione chiara.
        </p>

        <CtaBlock />
      </div>
    </section>
  )
}
