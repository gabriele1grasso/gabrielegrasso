import { StarIcon } from 'lucide-react'
import { Fragment } from 'react'

import { testimonials, type Testimonial } from '@/data/content'
import { srcSetFor } from '@/lib/images'

const cardClass = 'flex flex-col rounded-2xl border p-8'

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className={cardClass}>
      <div className="flex gap-1.5" role="img" aria-label="5 stelle su 5">
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon key={i} className="fill-accent text-accent size-4" />
        ))}
      </div>
      <blockquote className="text-quote mt-6">
        "{testimonial.quote}"
      </blockquote>
      <img
        src={testimonial.image}
        srcSet={srcSetFor(testimonial.image, testimonial.imageWidth)}
        sizes="(min-width: 768px) 50vw, 100vw"
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
  return (
    <section>
      <div className="container-page pt-15 pb-8 lg:pt-30">
        <p className="text-muted-foreground">Dicono di me</p>
        <h2 className="text-display mt-6 max-w-4xl">
          Le parole di chi ha già lavorato con me
        </h2>
        <p className="mt-8">Feedback di imprenditori e professionisti che mi conoscono.</p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
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
