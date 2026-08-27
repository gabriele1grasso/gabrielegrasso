import { Link } from '@tanstack/react-router'
import { CheckIcon, ShieldCheckIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { checklistFeatures } from '@/data/content'

export function Pricing() {
  return (
    <section id="pricing" className="border-b scroll-mt-16">
      <div className="container-page py-20">
        <Card className="mx-auto max-w-2xl overflow-hidden border-2">
          <CardContent className="flex flex-col items-center gap-6 pt-10 text-center">
            <span className="bg-accent/10 text-accent inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium">
              <ShieldCheckIcon className="size-4" />
              La Checklist Protocollo 3P
            </span>

            <h2 className="text-[26px] sm:text-[34px]">Tutto il metodo, in un’unica guida</h2>

            <p className="text-muted-foreground max-w-lg">
              La guida operativa completa: dalla configurazione del Portfolio Business alla
              campagna attiva. Ogni task spiegata nel come e nel perché, per muoverti senza
              dipendere da nessuno.
            </p>

            <ul className="grid w-full gap-3 text-left sm:grid-cols-2">
              {checklistFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <CheckIcon className="text-accent mt-0.5 size-4 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex items-end gap-2">
              <span className="text-5xl font-bold">24,90€</span>
              <span className="text-muted-foreground mb-1.5 text-sm">
                IVA inclusa · Pagamento unico
              </span>
            </div>
            <p className="text-muted-foreground -mt-4 text-sm">
              Il punto di partenza più accessibile per iniziare nel modo giusto.
            </p>

            <Button asChild size="lg" variant="accent" className="w-full sm:w-auto">
              <Link to="/grazie">Inizia ora il Protocollo 3P</Link>
            </Button>

            <p className="text-muted-foreground flex items-center gap-2 text-xs">
              +250 imprenditori e professionisti soddisfatti
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
