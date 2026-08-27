import { Badge } from '@/components/ui/badge'
import { credentials } from '@/data/content'

export function About() {
  return (
    <section id="chi-sono" className="border-b scroll-mt-16">
      <div className="container-page grid items-center gap-12 py-20 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <span className="text-accent text-sm font-semibold uppercase tracking-wide">
            Chi c’è dietro il Protocollo 3P
          </span>
          <h2 className="mt-2 text-[26px] sm:text-[34px]">Gabriele Grasso</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Sono Gabriele Grasso. Ho lavorato con Meta Ads per dieci anni, l’ultimo
            periodo in WPP Media, uno dei più grandi gruppi media al mondo. Oggi faccio
            consulenza a imprenditori e professionisti e mi occupo del marketing
            nell’azienda della mia famiglia: una doppia prospettiva che porto dentro il
            Protocollo.
          </p>

          <h3 className="mt-8 text-lg font-semibold">Perché fidarti di me</h3>
          <p className="text-accent mt-1 text-sm font-semibold">
            Perché vivo le tue stesse sfide, ogni giorno in azienda.
          </p>
          <p className="text-muted-foreground mt-3">
            Per anni ho gestito campagne per aziende grandi e piccole. Oggi mi occupo di
            marketing nell’azienda di famiglia, e conosco da vicino le sfide quotidiane
            di chi guida un’attività. Non ti parlo dall’alto: siamo dalla stessa parte
            del tavolo.
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
