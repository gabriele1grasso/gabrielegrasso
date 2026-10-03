import { useQuery } from '@tanstack/react-query'

import { Button } from '@/components/ui/button'
import { CardAccordion, CardAccordionItem } from '@/components/ui/card-accordion'
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
    <section id="faq" className="scroll-mt-(--section-offset)">
      <div className="container-page py-7.5 lg:py-15">
        <p className="text-muted-foreground">FAQ</p>
        <h2 className="text-display mt-5 max-w-[950px]">
          Quello che la gente mi chiede prima di acquistare.
        </h2>

        <div className="mt-15">
          {isLoading && (
            <div className="flex flex-col gap-2">
              {Array.from({ length: 6 }, (_, i) => (
                <Skeleton key={i} className="h-[70px] w-full rounded-2xl" />
              ))}
            </div>
          )}

          {data && (
            <CardAccordion
              type="single"
              collapsible
              value={openFaqId ?? ''}
              onValueChange={(value) => setOpenFaqId(value || null)}
            >
              {data.map((faq) => (
                <CardAccordionItem
                  key={faq.id}
                  value={faq.id}
                  title={faq.question}
                  className="rounded-2xl bg-[#f2f2f2]"
                >
                  <p>{faq.answer}</p>
                </CardAccordionItem>
              ))}
            </CardAccordion>
          )}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-bold">Hai ancora dubbi?</p>
            <p>Non esitare a contattarmi, sarò felice di risponderti.</p>
          </div>
          <Button asChild variant="accent" size="lg" className="self-start sm:self-auto">
            <a href="mailto:info@gabrielegrasso.com">Contattami</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
