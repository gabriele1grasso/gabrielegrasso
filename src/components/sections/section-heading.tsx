import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'center' | 'left'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mx-auto max-w-2xl',
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <span className="text-accent text-sm font-semibold uppercase tracking-wide">
          {eyebrow}
        </span>
      )}
      <h2 className={cn('text-[26px] sm:text-[34px]', eyebrow && 'mt-2')}>{title}</h2>
      {description && <p className="text-muted-foreground mt-4 text-lg">{description}</p>}
    </div>
  )
}
