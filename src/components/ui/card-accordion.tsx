import { PlusIcon } from 'lucide-react'
import { createContext, useContext, useId, useState, type ReactNode } from 'react'

import { cn } from '@/lib/utils'

// Fisarmonica a card del sito originale (fasi del Protocollo, FAQ): ogni voce è un riquadro
// con titolo a 20px e "+" sottile che ruota in "×" quando la voce è aperta.
// Scritta a mano invece che con Radix per non caricare la sua libreria nella pagina:
// una sola voce aperta alla volta, un secondo clic sulla voce aperta la richiude.

interface AccordionContextValue {
  openValue: string
  toggle: (value: string) => void
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

interface CardAccordionProps {
  /** Voce aperta (controllata). Se assente lo stato è interno. */
  value?: string
  onValueChange?: (value: string) => void
  className?: string
  children: ReactNode
}

function CardAccordion({ value, onValueChange, className, children }: CardAccordionProps) {
  const [internalValue, setInternalValue] = useState('')
  const openValue = value ?? internalValue

  const toggle = (itemValue: string) => {
    const next = openValue === itemValue ? '' : itemValue
    if (value === undefined) setInternalValue(next)
    onValueChange?.(next)
  }

  return (
    <AccordionContext.Provider value={{ openValue, toggle }}>
      <div className={cn('flex flex-col gap-2', className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

interface CardAccordionItemProps {
  value: string
  title: ReactNode
  children: ReactNode
  className?: string
}

function CardAccordionItem({ value, title, children, className }: CardAccordionItemProps) {
  const ctx = useContext(AccordionContext)
  if (!ctx) throw new Error('CardAccordionItem va usato dentro CardAccordion')

  const id = useId()
  const triggerId = `${id}-titolo`
  const contentId = `${id}-contenuto`
  const open = ctx.openValue === value
  const state = open ? 'open' : 'closed'

  return (
    <div data-state={state} className={cn('text-[#010101]', className)}>
      <h3>
        {/* Da aperta la voce riduce il padding sotto il titolo invece di tirare su il contenuto. */}
        <button
          type="button"
          id={triggerId}
          aria-expanded={open}
          aria-controls={contentId}
          data-state={state}
          onClick={() => ctx.toggle(value)}
          className="group flex w-full items-start justify-between gap-4 p-6 text-left transition-[padding] duration-200 data-[state=open]:pb-2"
        >
          <span className="text-subtitle">{title}</span>
          <PlusIcon
            className="mt-0.5 size-[18px] shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-45"
            strokeWidth={1.25}
          />
        </button>
      </h3>
      {/* Altezza animata con le righe della griglia (0fr → 1fr). Da chiusa resta nell'HTML
          (utile per la SEO) ma è inerte: non raggiungibile con tastiera né lettori di schermo. */}
      <div
        id={contentId}
        role="region"
        aria-labelledby={triggerId}
        data-state={state}
        inert={!open}
        className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-200 ease-out data-[state=open]:grid-rows-[1fr] motion-reduce:transition-none"
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6">{children}</div>
        </div>
      </div>
    </div>
  )
}

export { CardAccordion, CardAccordionItem }
