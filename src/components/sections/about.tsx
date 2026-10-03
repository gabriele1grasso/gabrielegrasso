import {
  BriefcaseBusinessIcon,
  ChartNoAxesColumnIncreasingIcon,
  GraduationCapIcon,
  ImageIcon,
  MegaphoneIcon,
} from 'lucide-react'

import { credentials } from '@/data/content'
import { cn } from '@/lib/utils'

const credentialIcons = [
  GraduationCapIcon,
  MegaphoneIcon,
  ChartNoAxesColumnIncreasingIcon,
  BriefcaseBusinessIcon,
]

// TODO: sostituire i placeholder con le foto reali (ritratto e immagini del carosello)
const carouselItems = [
  { id: 'c1', wide: false },
  { id: 'c2', wide: true },
  { id: 'c3', wide: false },
  { id: 'c4', wide: true },
  { id: 'c5', wide: false },
]

function ImagePlaceholder({ className, label }: { className?: string; label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn('flex items-center justify-center', className)}
    >
      <ImageIcon className="size-10 opacity-40" />
    </div>
  )
}

function Carousel() {
  return (
    <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="animate-marquee flex w-max">
        {/* Due copie identiche per un loop senza stacchi; la seconda è nascosta agli screen reader */}
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="flex gap-2 pr-2">
            {carouselItems.map((item) => (
              <ImagePlaceholder
                key={item.id}
                label="Gabriele al lavoro"
                className={cn(
                  'h-56 shrink-0 rounded-2xl bg-white/20 text-white sm:h-60',
                  item.wide ? 'w-96' : 'w-60',
                )}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function About() {
  return (
    <section id="chi-sono" className="bg-brand-gradient scroll-mt-28">
      <div className="container-page grid gap-8 py-20 sm:py-28 lg:grid-cols-2">
        <div className="flex min-w-0 flex-col rounded-2xl bg-white p-8 sm:p-12">
          <p className="text-muted-foreground">Chi c'è dietro il Protocollo 3P</p>
          <h2 className="text-display mt-6">
            Gabriele Grasso
          </h2>
          <p className="mt-8">
            Sono Gabriele Grasso. Ho lavorato con Meta Ads per dieci anni, l'ultimo periodo in WPP
            Media, uno dei più grandi gruppi media al mondo. Oggi faccio consulenza a imprenditori e
            professionisti e mi occupo del marketing nell'azienda della mia famiglia: una doppia
            prospettiva che porto dentro il Protocollo.
          </p>
          <ImagePlaceholder
            label="Ritratto di Gabriele Grasso"
            className="text-muted-foreground mt-12 aspect-square w-full rounded-2xl bg-gradient-to-b from-[#ececec] to-[#cfcfcf]"
          />
        </div>

        <div className="flex min-w-0 flex-col rounded-2xl border border-white/30 p-8 text-white sm:p-12">
          <p className="text-white/75">Perché fidarti di me</p>
          <h2 className="text-display mt-6">
            Perché vivo le tue stesse sfide, ogni giorno in azienda.
          </h2>
          <p className="mt-8">
            Per anni ho gestito campagne per aziende grandi e piccole. Oggi mi occupo di marketing
            nell'azienda di famiglia, e conosco da vicino le sfide quotidiane di chi guida
            un'attività. Non ti parlo dall'alto: siamo dalla stessa parte del tavolo.
          </p>

          <Carousel />

          <ul className="mt-12 flex flex-col gap-3">
            {credentials.map((item, i) => {
              const Icon = credentialIcons[i]
              return (
                <li key={item} className="text-feature flex items-start gap-3 font-bold">
                  <Icon className="mt-0.5 size-[17px] shrink-0" />
                  <span>{item}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
