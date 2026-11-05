import { useState } from 'react'
import { PlayIcon, ZapIcon } from 'lucide-react'

import { Rating } from '@/components/sections/rating'

// Video Loom. L'iframe si carica solo al clic, così non pesa sul caricamento della pagina.
const LOOM_EMBED = 'https://www.loom.com/embed/da359b3aa4c84edaa613ebd2e6059062'

export function Video() {
  const [playing, setPlaying] = useState(false)

  return (
    <section>
      <div className="container-page py-7.5 lg:py-15">
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
            {playing ? (
              <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
                <iframe
                  src={`${LOOM_EMBED}?autoplay=1&hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`}
                  title="Il Protocollo 3P in azione"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="size-full border-0"
                />
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group relative flex aspect-video w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-[#e9e9eb]"
              >
                <span className="flex size-24 items-center justify-center rounded-full bg-black/15 backdrop-blur transition-transform group-hover:scale-105 sm:size-36">
                  <PlayIcon className="ml-1 size-10 fill-white text-white sm:size-14" />
                </span>
                <span className="sr-only">Guarda il video</span>
              </button>
            )}

            <Rating className="mt-10 items-center" />
          </div>
        </div>
      </div>
    </section>
  )
}
