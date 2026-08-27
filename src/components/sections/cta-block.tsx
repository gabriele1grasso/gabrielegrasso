import { Link } from '@tanstack/react-router'
import { ShieldCheckIcon, UsersIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface CtaBlockProps {
  label?: string
}

export function CtaBlock({ label = 'Inizia ora il Protocollo 3P' }: CtaBlockProps) {
  return (
    <div className="mt-10 flex flex-col items-center gap-3 text-center">
      <span className="text-muted-foreground flex items-center gap-2 text-sm">
        <UsersIcon className="size-4" />
        +250 imprenditori e professionisti soddisfatti
      </span>
      <Button asChild size="lg" variant="accent">
        <Link to="/grazie">{label}</Link>
      </Button>
      <span className="text-muted-foreground flex items-center gap-2 text-sm">
        <ShieldCheckIcon className="size-4" />
        Soddisfatto o rimborsato 14 giorni
      </span>
    </div>
  )
}
