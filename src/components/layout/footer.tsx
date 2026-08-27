import { Link } from '@tanstack/react-router'
import { MailIcon } from 'lucide-react'

import { InstagramIcon, LinkedinIcon } from '@/components/icons/social'

const legalLinks = [
  { to: '/termini-e-condizioni', label: 'Termini e Condizioni' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/cookie-policy', label: 'Cookie Policy' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="container-page flex flex-col gap-8 py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <span className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="bg-accent text-accent-foreground flex size-8 items-center justify-center rounded-md text-sm font-bold">
                GG
              </span>
              Gabriele Grasso
            </span>
            <p className="text-muted-foreground mt-3 text-sm">
              Il Protocollo 3P per configurare, capire e gestire le tue campagne Meta Ads
              senza più procedere alla cieca.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="mailto:info@gabrielegrasso.com"
                aria-label="Email"
                className="text-muted-foreground hover:text-foreground"
              >
                <MailIcon className="size-5" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-foreground"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground"
              >
                <LinkedinIcon className="size-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold">Sitemap</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="/#come-funziona" className="text-muted-foreground hover:text-foreground">
                    Come funziona
                  </a>
                </li>
                <li>
                  <a href="/#cosa-include" className="text-muted-foreground hover:text-foreground">
                    Cosa include
                  </a>
                </li>
                <li>
                  <a href="/#chi-sono" className="text-muted-foreground hover:text-foreground">
                    Chi sono
                  </a>
                </li>
                <li>
                  <a href="/#faq" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Legale</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {legalLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-muted-foreground hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Contatti</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:info@gabrielegrasso.com"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    info@gabrielegrasso.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-muted-foreground flex flex-col gap-2 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Linker S.r.l. — P.IVA 04938400878. Tutti i diritti riservati.</p>
          <p>Sito realizzato con React, Vite, shadcn/ui e TanStack.</p>
        </div>
      </div>
    </footer>
  )
}
