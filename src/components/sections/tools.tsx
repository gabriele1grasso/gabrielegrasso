import { CalculatorIcon, ImageIcon } from 'lucide-react'

import { tools } from '@/data/content'

const icons = {
  t1: CalculatorIcon,
  t2: ImageIcon,
}

export function ToolsCard() {
  return (
    <div className="flex flex-col rounded-2xl bg-[#f2f2f2] p-8 sm:p-10">
      <p className="text-muted-foreground">Strumenti inclusi</p>
      <h2 className="text-display mt-6">
        Tutto quello che ti serve per non sprecare un euro
      </h2>
      <p className="mt-8">
        Oltre alla guida, ricevi gli strumenti che usi davvero mentre imposti le campagne: per
        stimare il budget prima di spenderlo e prendere ispirazione dalle creatività che
        funzionano.
      </p>

      <img
        src="/strumenti-video.png"
        alt="Video guida: Gabriele imposta il pubblico di un gruppo di inserzioni in Ads Manager"
        width={1000}
        height={694}
        loading="lazy"
        className="mt-10 w-full rounded-xl"
      />

      <ul className="mt-10 flex flex-col">
        {tools.map((tool) => {
          const Icon = icons[tool.id as keyof typeof icons]
          return (
            <li key={tool.id} className="flex items-center gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-[#1c1c1c] text-white">
                <Icon className="size-6" />
              </span>
              <div>
                <h3 className="text-feature font-normal tracking-normal">{tool.title}</h3>
                <p className="text-muted-foreground mt-0.5 text-[13.68px]">{tool.description}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
