import { StarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

interface RatingProps {
  className?: string
}

/** 5 stelle + "+250 imprenditori…". Colore ereditato dal testo del contenitore. */
export function Rating({ className }: RatingProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      <div className="flex gap-1.5" role="img" aria-label="5 stelle su 5">
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon key={i} className="size-4 fill-current" />
        ))}
      </div>
      <p className="mt-2">+250 imprenditori e professionisti soddisfatti</p>
    </div>
  )
}
