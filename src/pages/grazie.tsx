import { Link } from '@tanstack/react-router'
import { PartyPopperIcon } from 'lucide-react'

import { Seo } from '@/components/layout/seo'
import { Button } from '@/components/ui/button'

export function GraziePage() {
  return (
    <div className="container-page flex flex-col items-center gap-6 py-24 text-center">
      <Seo
        title="Grazie! — Gabriele Grasso"
        description="Conferma dell’acquisto del Protocollo 3P."
        path="/grazie"
        noindex
      />
      <span className="bg-accent/10 text-accent flex size-16 items-center justify-center rounded-full">
        <PartyPopperIcon className="size-8" />
      </span>
      <h1 className="text-[26px] sm:text-[34px]">
        Grazie, sei dentro il Protocollo 3P!
      </h1>
      <p className="text-muted-foreground max-w-xl text-lg">
        Questa è una pagina dimostrativa: in un flusso reale qui riceveresti la conferma
        d’ordine e le istruzioni per accedere ai materiali via email.
      </p>
      <Button asChild variant="accent" size="lg">
        <Link to="/">Torna alla home</Link>
      </Button>
    </div>
  )
}
