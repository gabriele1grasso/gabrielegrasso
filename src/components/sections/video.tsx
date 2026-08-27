import { PlayIcon } from 'lucide-react'

import { SectionHeading } from '@/components/sections/section-heading'

export function Video() {
  return (
    <section className="border-b">
      <div className="container-page py-20">
        <SectionHeading
          eyebrow="⚡️ guarda come funziona"
          title="Guarda il Protocollo 3P in azione"
          description="In pochi minuti ti mostro come il Protocollo 3P ti porta dalla configurazione alla campagna, un passo alla volta, senza saltare i passaggi che fanno la differenza."
        />

        <button
          type="button"
          className="bg-secondary hover:bg-secondary/80 group mx-auto mt-10 flex aspect-video w-full max-w-3xl items-center justify-center rounded-2xl border transition-colors"
        >
          <span className="bg-accent text-accent-foreground flex size-16 items-center justify-center rounded-full shadow-lg transition-transform group-hover:scale-105">
            <PlayIcon className="ml-1 size-6" fill="currentColor" />
          </span>
          <span className="sr-only">Guarda il video</span>
        </button>

        <p className="text-muted-foreground mt-6 flex items-center justify-center gap-2 text-sm">
          +250 imprenditori e professionisti soddisfatti
        </p>
      </div>
    </section>
  )
}
