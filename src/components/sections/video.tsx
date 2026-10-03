import { PlayIcon, ZapIcon } from 'lucide-react'

import { Rating } from '@/components/sections/rating'

export function Video() {
  return (
    <section>
      <div className="container-page py-16">
        <div className="flex flex-col items-center rounded-2xl bg-[#f2f2f2] px-5 py-16 text-center sm:px-10 sm:py-28">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1 text-xs tracking-[0.5px] uppercase">
            <ZapIcon className="size-3 fill-[#ff6a1a] text-[#ff6a1a]" />
            Guarda come funziona
          </span>
          <h2 className="text-display-sm mt-6">
            Guarda il Protocollo 3P in azione
          </h2>
          <p className="text-muted-foreground mt-6 max-w-3xl text-lg leading-[1.4]">
            In pochi minuti ti mostro come il Protocollo 3P ti porta dalla configurazione alla
            campagna, un passo alla volta, senza saltare i passaggi che fanno la differenza.
          </p>

          <div className="mt-14 flex w-full max-w-5xl flex-col items-center bg-white px-4 py-8 sm:px-14 sm:py-16">
            {/* TODO: sostituire con il video reale e la sua copertina quando disponibili */}
            <button
              type="button"
              className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-[#e9e9eb]"
            >
              <span className="flex size-24 items-center justify-center rounded-full bg-black/15 backdrop-blur transition-transform group-hover:scale-105 sm:size-36">
                <PlayIcon className="ml-1 size-10 fill-white text-white sm:size-14" />
              </span>
              <span className="sr-only">Guarda il video</span>
            </button>

            <Rating className="mt-10 items-center" />
          </div>
        </div>
      </div>
    </section>
  )
}
