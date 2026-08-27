import { Badge } from '@/components/ui/badge'

const credentials = [
  '10 anni di esperienza in Paid Media',
  'Master in Digital Communication — Università Cattolica',
  'Ex trainer in WPP Media',
  'Oggi consulente e marketer per l’azienda di famiglia',
]

export function About() {
  return (
    <section id="chi-sono" className="border-b scroll-mt-16">
      <div className="container-page grid items-center gap-12 py-20 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <span className="text-accent text-sm font-semibold uppercase tracking-wide">
            Chi sono
          </span>
          <h2 className="mt-2 text-[26px] sm:text-[34px]">
            Ciao, sono Gabriele Grasso
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Ho passato gli ultimi 10 anni tra Paid Media e formazione, ma il Protocollo 3P
            nasce da un problema molto concreto: dover gestire in prima persona la
            pubblicità dell’azienda di famiglia, senza scorciatoie e senza un budget
            infinito da bruciare in test.
          </p>
          <p className="text-muted-foreground mt-4 text-lg">
            Per questo ho messo insieme in un unico percorso tutto quello che avrei voluto
            avere io all’inizio: un metodo chiaro, replicabile e sempre aggiornato.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {credentials.map((item) => (
              <li key={item}>
                <Badge variant="secondary" className="rounded-lg px-3 py-2 text-sm">
                  {item}
                </Badge>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <div className="bg-accent/10 border-accent/20 flex aspect-square w-full max-w-sm items-center justify-center rounded-3xl border">
            <span className="text-accent text-7xl font-bold">GG</span>
          </div>
        </div>
      </div>
    </section>
  )
}
