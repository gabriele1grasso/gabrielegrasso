import { SITE_URL, Seo } from '@/components/layout/seo'
import { About } from '@/components/sections/about'
import { Contains } from '@/components/sections/contains'
import { Faq } from '@/components/sections/faq'
import { FinalCta } from '@/components/sections/final-cta'
import { Foundation } from '@/components/sections/foundation'
import { Hero } from '@/components/sections/hero'
import { Methodology } from '@/components/sections/methodology'
import { Problems } from '@/components/sections/problems'
import { Protocol } from '@/components/sections/protocol'
import { Solutions } from '@/components/sections/solutions'
import { Testimonials } from '@/components/sections/testimonials'
import { Video } from '@/components/sections/video'

const DESCRIPTION =
  'Protocollo 3P di Gabriele Grasso: il percorso completo per configurare, capire e gestire le tue campagne Meta Ads senza procedere alla cieca.'

/** Dati strutturati per Google: il prodotto in vendita e chi lo ha creato. */
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#gabriele`,
      name: 'Gabriele Grasso',
      url: SITE_URL,
      jobTitle: 'Consulente Meta Ads',
      sameAs: [
        'https://www.instagram.com/gabriele1grasso/',
        'https://www.linkedin.com/in/gabrielegrassodigital/',
        'https://www.tiktok.com/@gabriele1grasso',
      ],
    },
    {
      '@type': 'Product',
      name: 'Protocollo 3P',
      description: DESCRIPTION,
      image: `${SITE_URL}/og-image.jpg`,
      brand: { '@id': `${SITE_URL}/#gabriele` },
      offers: {
        '@type': 'Offer',
        price: '24.90',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: SITE_URL,
      },
    },
  ],
}

export function HomePage() {
  return (
    <>
      <Seo title="Gabriele Grasso — Protocollo 3P per le tue Meta Ads" description={DESCRIPTION} path="/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <Problems />
      <Contains />
      <Video />
      <Solutions />
      <Testimonials />
      <About />
      <Methodology />
      <Foundation />
      <Protocol />
      <Faq />
      <FinalCta />
    </>
  )
}
