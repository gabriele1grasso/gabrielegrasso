import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { PlusIcon } from 'lucide-react'
import type { ComponentProps, ReactNode } from 'react'

import { cn } from '@/lib/utils'

// Fisarmonica a card del sito originale (fasi del Protocollo, FAQ): ogni voce è un riquadro
// con titolo a 20px e "+" sottile che ruota in "×" quando la voce è aperta.

function CardAccordion({ className, ...props }: ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root className={cn('flex flex-col gap-2', className)} {...props} />
}

interface CardAccordionItemProps {
  value: string
  title: ReactNode
  children: ReactNode
  className?: string
}

function CardAccordionItem({ value, title, children, className }: CardAccordionItemProps) {
  return (
    <AccordionPrimitive.Item value={value} className={cn('text-[#010101]', className)}>
      <AccordionPrimitive.Header>
        {/* Da aperta la voce riduce il padding sotto il titolo invece di tirare su il contenuto:
            un margine negativo verrebbe tagliato dall'overflow-hidden dell'animazione. */}
        <AccordionPrimitive.Trigger className="group flex w-full items-start justify-between gap-4 p-6 text-left data-[state=open]:pb-2">
          <span className="text-subtitle">{title}</span>
          <PlusIcon
            className="mt-0.5 size-[18px] shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-45"
            strokeWidth={1.25}
          />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden">
        <div className="px-6 pb-6">{children}</div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  )
}

export { CardAccordion, CardAccordionItem }
