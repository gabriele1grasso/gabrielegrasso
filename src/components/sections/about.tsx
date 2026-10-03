import { ImageIcon } from 'lucide-react'
import type { CSSProperties } from 'react'

import {
  BriefcaseFilledIcon,
  ChartGrowthFilledIcon,
  GraduationCapFilledIcon,
  MegaphoneFilledIcon,
} from '@/components/icons/filled'
import { credentials } from '@/data/content'
import { cn } from '@/lib/utils'

const credentialIcons = [
  GraduationCapFilledIcon,
  MegaphoneFilledIcon,
  ChartGrowthFilledIcon,
  BriefcaseFilledIcon,
]

// TODO: sostituire i placeholder con le foto reali (ritratto e immagini del carosello).
// Larghezze delle immagini del carosello misurate sull'originale, tutte alte 159px.
const carouselItems = [
  { id: 'c1', width: 271 },
  { id: 'c2', width: 247 },
  { id: 'c3', width: 141 },
  { id: 'c4', width: 180 },
  { id: 'c5', width: 359 },
  { id: 'c6', width: 285 },
]

interface ImagePlaceholderProps {
  label: string
  className?: string
  style?: CSSProperties
}

function ImagePlaceholder({ label, className, style }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn('flex items-center justify-center', className)}
      style={style}
    >
      <ImageIcon className="size-10 opacity-40" />
    </div>
  )
}

function Carousel() {
  return (
    <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="animate-marquee flex w-max">
        {/* Due copie identiche per un loop senza stacchi; la seconda è nascosta agli screen reader */}
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="flex gap-px pr-px">
            {carouselItems.map((item) => (
              <ImagePlaceholder
                key={item.id}
                label="Gabriele al lavoro"
                style={{ width: item.width }}
                className="h-[159px] shrink-0 rounded-2xl bg-white/20 text-white"
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
    <section id="chi-sono" className="bg-brand-gradient scroll-mt-(--section-offset)">
      <div className="container-page grid gap-6 pt-15 pb-[84px] lg:grid-cols-2 lg:py-30">
        <div className="flex min-w-0 flex-col rounded-2xl bg-white p-6 sm:p-12 sm:pb-[72px]">
          <p className="text-muted-foreground">Chi c'è dietro il Protocollo 3P</p>
          <h2 className="text-display mt-5.5">Gabriele Grasso</h2>
          <p className="mt-7.5">
            Sono Gabriele Grasso. Ho lavorato con Meta Ads per dieci anni, l'ultimo periodo in WPP
            Media, uno dei più grandi gruppi media al mondo. Oggi faccio consulenza a imprenditori e
            professionisti e mi occupo del marketing nell'azienda della mia famiglia: una doppia
            prospettiva che porto dentro il Protocollo.
          </p>
          {/* Il ritratto (quadrato, come nell'originale) cresce fino all'altezza della card a
              destra, così sotto non resta spazio vuoto. */}
          <div className="relative mt-7 flex-1">
            <div className="aspect-square" />
            <ImagePlaceholder
              label="Ritratto di Gabriele Grasso"
              className="text-muted-foreground absolute inset-0 rounded-3xl bg-gradient-to-b from-[#ececec] to-[#cfcfcf]"
            />
          </div>
        </div>

        <div className="flex min-w-0 flex-col rounded-2xl border border-white/30 p-6 text-white sm:p-10">
          <p className="text-white/70">Perché fidarti di me</p>
          <h2 className="text-display mt-5">
            Perché vivo le tue stesse sfide, ogni giorno in azienda.
          </h2>
          <p className="mt-6">
            Per anni ho gestito campagne per aziende grandi e piccole. Oggi mi occupo di marketing
            nell'azienda di famiglia, e conosco da vicino le sfide quotidiane di chi guida
            un'attività. Non ti parlo dall'alto: siamo dalla stessa parte del tavolo.
          </p>

          <Carousel />

          <ul className="mt-10.5 flex flex-col gap-[13px]">
            {credentials.map((item, i) => {
              const Icon = credentialIcons[i]
              return (
                <li key={item} className="text-feature flex items-start gap-[11px] font-bold">
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
