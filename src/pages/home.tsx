import { About } from '@/components/sections/about'
import { Contains } from '@/components/sections/contains'
import { Faq } from '@/components/sections/faq'
import { FinalCta } from '@/components/sections/final-cta'
import { Foundation } from '@/components/sections/foundation'
import { Hero } from '@/components/sections/hero'
import { Methodology } from '@/components/sections/methodology'
import { Pricing } from '@/components/sections/pricing'
import { Problems } from '@/components/sections/problems'
import { Protocol } from '@/components/sections/protocol'
import { Solutions } from '@/components/sections/solutions'
import { Testimonials } from '@/components/sections/testimonials'
import { Tools } from '@/components/sections/tools'
import { Video } from '@/components/sections/video'

export function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <Contains />
      <Tools />
      <Video />
      <Solutions />
      <Testimonials />
      <About />
      <Methodology />
      <Foundation />
      <Protocol />
      <Pricing />
      <Faq />
      <FinalCta />
    </>
  )
}
