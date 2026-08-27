import { Link } from '@tanstack/react-router'
import { CheckIcon, ShieldCheckIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const perks = [
  'Le 4 fasi del Protocollo 3P',
  'Checklist operativa con video guida',
  'Calcolatore di budget',
  '500+ template Canva',
  'Aggiornamenti continui inclusi',
  'Garanzia soddisfatti o rimborsati, 14 giorni',
]

export function Pricing() {
  return (
    <section id="pricing" className="border-b scroll-mt-16">
      <div className="container-page py-20">
        <Card className="mx-auto max-w-2xl overflow-hidden border-2">
          <CardContent className="flex flex-col items-center gap-6 pt-10 text-center">
            <span className="bg-accent/10 text-accent inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium">
              <ShieldCheckIcon className="size-4" />
              +250 imprenditori e professionisti soddisfatti
            </span>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Inizia oggi il Protocollo 3P
            </h2>

            <div className="flex items-end gap-2">
              <span className="text-5xl font-bold">24,90€</span>
              <span className="text-muted-foreground mb-1.5 text-sm">IVA inclusa, pagamento unico</span>
            </div>

            <ul className="grid w-full gap-3 text-left sm:grid-cols-2">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-2 text-sm">
                  <CheckIcon className="text-accent mt-0.5 size-4 shrink-0" />
                  {perk}
                </li>
              ))}
            </ul>

            <Button asChild size="lg" variant="accent" className="w-full sm:w-auto">
              <Link to="/grazie">Inizia ora il Protocollo 3P</Link>
            </Button>

            <p className="text-muted-foreground text-xs">
              Pagamento sicuro con Stripe · Rimborso garantito entro 14 giorni
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
