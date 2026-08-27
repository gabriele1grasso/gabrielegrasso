import { useQuery } from '@tanstack/react-query'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Skeleton } from '@/components/ui/skeleton'
import { fetchFaqs } from '@/data/api'
import { useUIStore } from '@/store/ui-store'

export function Faq() {
  const { data, isLoading } = useQuery({
    queryKey: ['faqs'],
    queryFn: fetchFaqs,
  })

  const openFaqId = useUIStore((s) => s.openFaqId)
  const setOpenFaqId = useUIStore((s) => s.setOpenFaqId)

  return (
    <section id="faq" className="scroll-mt-16">
      <div className="container-page py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[26px] sm:text-[34px]">
            Domande frequenti
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          {isLoading && (
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-14 w-full" />
              ))}
            </div>
          )}

          {data && (
            <Accordion
              type="single"
              collapsible
              value={openFaqId ?? undefined}
              onValueChange={(value) => setOpenFaqId(value || null)}
            >
              {data.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </section>
  )
}
