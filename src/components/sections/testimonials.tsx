import { useQuery } from '@tanstack/react-query'

import { SectionHeading } from '@/components/sections/section-heading'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { fetchTestimonials } from '@/data/api'

export function Testimonials() {
  const { data, isLoading } = useQuery({
    queryKey: ['testimonials'],
    queryFn: fetchTestimonials,
  })

  return (
    <section className="border-b">
      <div className="container-page py-20">
        <SectionHeading
          eyebrow="Dicono di me"
          title="Le parole di chi ha già lavorato con me"
          description="Feedback di imprenditori e professionisti che mi conoscono."
        />

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {isLoading &&
            Array.from({ length: 4 }).map((_, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="mt-2 h-4 w-3/4" />
                  <div className="mt-6 flex items-center gap-3">
                    <Skeleton className="size-10 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-3 w-24" />
                      <Skeleton className="h-3 w-32" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

          {data?.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardContent className="pt-6">
                {testimonial.highlight && (
                  <p className="text-accent mb-3 text-sm font-semibold">
                    {testimonial.highlight}
                  </p>
                )}
                <p className="text-lg">“{testimonial.quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="bg-accent/10 text-accent flex size-10 items-center justify-center rounded-full text-sm font-semibold">
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
