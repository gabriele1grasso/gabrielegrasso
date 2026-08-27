import { About } from '@/components/sections/about'
import { Faq } from '@/components/sections/faq'
import { Hero } from '@/components/sections/hero'
import { Included } from '@/components/sections/included'
import { Pricing } from '@/components/sections/pricing'
import { Problems } from '@/components/sections/problems'
import { Protocol } from '@/components/sections/protocol'
import { Testimonials } from '@/components/sections/testimonials'

export function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <Protocol />
      <Included />
      <Testimonials />
      <About />
      <Pricing />
      <Faq />
    </>
  )
}
