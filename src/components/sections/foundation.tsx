import {
  BrainGearFilledIcon,
  ChartBarsFilledIcon,
  UserVoiceFilledIcon,
} from '@/components/icons/filled'
import { foundationPoints } from '@/data/content'

const pointIcons = [
  ChartBarsFilledIcon,
  UserVoiceFilledIcon,
  BrainGearFilledIcon,
  UserVoiceFilledIcon,
]

// Sfondo dell'originale: tre aloni #5e41e3 che sfumano nel trasparente sopra il bianco
// della pagina (da qui gli angoli lavanda in alto a destra e in basso a sinistra).
const cardBackground = [
  'radial-gradient(circle at 0% 0%, #5e41e3 0%, transparent 70%)',
  'radial-gradient(circle at 100% 100%, #5e41e3 0%, transparent 70%)',
  'radial-gradient(circle at 26% 39%, #5e41e3 0%, transparent 70%)',
].join(', ')

export function Foundation() {
  return (
    <section>
      <div className="container-page pt-7.5 pb-15 lg:pt-15 lg:pb-30">
        <div
          className="grid gap-4 rounded-2xl p-6 text-white sm:p-10 lg:grid-cols-2"
          style={{ backgroundImage: cardBackground }}
        >
          <div>
            <p className="text-white/70">Fondamenta che restano</p>
            <h2 className="text-display mt-5 max-w-[570px]">
              Impara le basi una volta, ti restano per sempre
            </h2>
            <p className="mt-7.5 max-w-[570px]">
              Pannello, Pubblico e Portafoglio non sono mode che cambiano ogni stagione. Sono le basi
              su cui poggia qualsiasi campagna Meta. Le impari adesso e ti servono per sempre, anche
              quando vorrai fare cose più avanzate.
            </p>

            {/* Due colonne riempite dall'alto in basso, come nell'originale */}
            <ul className="mt-10 grid gap-y-[23px] sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6">
              {foundationPoints.map((point, i) => {
                const Icon = pointIcons[i]
                return (
                  <li key={point} className="text-feature flex items-start gap-[11px] font-bold">
                    <Icon className="mt-[3px] size-[17px] shrink-0" />
                    <span>{point}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* L'immagine segue l'altezza della colonna di testo, ritagliata da sinistra */}
          <div className="relative aspect-[632/501] overflow-hidden rounded-2xl lg:aspect-auto">
            <img
              src="/fondamenta-checklist.png"
              alt="La checklist del Protocollo 3P completata al 100%: puoi lanciare la campagna con controllo"
              width={1280}
              height={612}
              loading="lazy"
              className="absolute inset-0 size-full object-cover object-[0%_19%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
