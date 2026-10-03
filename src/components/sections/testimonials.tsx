import { useQuery } from '@tanstack/react-query'
import { StarIcon } from 'lucide-react'
import { Fragment } from 'react'

import { Skeleton } from '@/components/ui/skeleton'
import { fetchTestimonials } from '@/data/api'
import type { Testimonial } from '@/data/content'

const cardClass = 'flex flex-col rounded-2xl border p-8'

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className={cardClass}>
      <div className="flex gap-1.5" aria-label="5 stelle su 5">
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon key={i} className="fill-accent text-accent size-4" />
        ))}
      </div>
      <blockquote className="text-quote mt-6">
        "{testimonial.quote}"
      </blockquote>
      <img
        src={testimonial.image}
        alt={`Messaggio WhatsApp di ${testimonial.name}`}
        width={testimonial.imageWidth}
        height={testimonial.imageHeight}
        loading="lazy"
        className="mt-8 w-full"
      />
      <figcaption className="mt-auto pt-10">
        <p className="font-bold">{testimonial.name}</p>
        <p className="text-muted-foreground text-sm">{testimonial.role}</p>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  const { data, isLoading } = useQuery({
    queryKey: ['testimonials'],
    queryFn: fetchTestimonials,
  })

  return (
    <section>
      <div className="container-page py-20 sm:py-28">
        <p className="text-muted-foreground">Dicono di me</p>
        <h2 className="text-display mt-6 max-w-4xl">
          Le parole di chi ha già lavorato con me
        </h2>
        <p className="mt-8">Feedback di imprenditori e professionisti che mi conoscono.</p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {isLoading &&
            Array.from({ length: 4 }, (_, i) => (
              <div key={i} className={cardClass}>
                <Skeleton className="h-5 w-32" />
                <Skeleton className="mt-8 h-7 w-full" />
                <Skeleton className="mt-2 h-7 w-2/3" />
                <Skeleton className="mt-8 aspect-[4/3] w-full" />
              </div>
            ))}

          {data?.map((testimonial, i) => (
            <Fragment key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
              {/* Fascia a tutta larghezza dopo la prima coppia di testimonianze */}
              {i === 1 && (
                <p className="text-quote rounded-2xl bg-[#f2f2f2] px-6 py-10 text-center md:col-span-2">
                  Quello che sembrava complicato, adesso è chiaro.
                </p>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
