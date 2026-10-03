import { CircleCheckFilledIcon, FlagFilledIcon } from '@/components/icons/filled'
import { methodologyPoints } from '@/data/content'

const sideIcons = [CircleCheckFilledIcon, FlagFilledIcon]

export function Methodology() {
  const [main, ...side] = methodologyPoints

  return (
    <section>
      <div className="container-page py-20 sm:py-28">
        <p className="text-muted-foreground">Un percorso, non un labirinto</p>
        <h2 className="text-display mt-5 max-w-[720px]">Sai sempre qual è il prossimo passo</h2>
        <p className="mt-7.5 max-w-[615px]">
          Il Protocollo è una sequenza di task da spuntare uno a uno. Ogni fase prepara la
          successiva, così vai avanti senza mai restare bloccato a chiederti cosa fare.
        </p>

        <div className="mt-12.5 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="flex flex-col rounded-2xl bg-[#f2f2f2] p-6 pb-8">
            {/* L'immagine assorbe l'eventuale altezza in più della riga (quando le card a destra
                sono più alte), così sotto il testo non resta spazio vuoto. Lo spacer con
                aspect-ratio ne garantisce l'altezza minima. */}
            <div className="relative flex-1 overflow-hidden rounded-2xl">
              <div className="aspect-[851/415]" />
              <img
                src="/metodo-dove-cliccare.png"
                alt="Screenshot con i punti esatti dove cliccare per creare un portfolio business in Meta Business Suite"
                width={1280}
                height={625}
                loading="lazy"
                className="absolute inset-0 size-full object-cover object-[50%_86%]"
              />
            </div>
            <h3 className="text-title mt-6">{main.title}</h3>
            <p className="mt-4">{main.description}</p>
          </div>

          <div className="grid gap-6">
            {side.map((point, i) => {
              const Icon = sideIcons[i]
              return (
                <div key={point.id} className="rounded-2xl bg-[#f2f2f2] p-6 pb-8">
                  <span className="flex size-[45px] items-center justify-center rounded-lg bg-[#191919] text-white">
                    <Icon className="size-[21px]" />
                  </span>
                  <h3 className="text-title mt-5">{point.title}</h3>
                  <p className="mt-4">{point.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
