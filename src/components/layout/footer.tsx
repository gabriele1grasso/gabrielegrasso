import { Link } from '@tanstack/react-router'

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
      <div className="container-page flex flex-col gap-10 py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm">
            <span className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="bg-accent text-accent-foreground flex size-8 items-center justify-center rounded-md text-sm font-bold">
                GG
              </span>
              Direzione Digitale
            </span>
            <p className="text-muted-foreground mt-4 text-xl font-semibold">
              Il tuo metodo per fare Meta Ads parte da qui
            </p>
            <div className="mt-4 flex items-center gap-3">
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
              <h3 className="text-sm font-semibold">Email</h3>
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

            <div>
              <h3 className="text-sm font-semibold">Domande?</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:info@gabrielegrasso.com"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contattami
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold">Legal</h3>
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
          </div>
        </div>

        <div className="text-muted-foreground flex flex-col gap-1 border-t pt-6 text-xs">
          <p>Direzione Digitale è un marchio di Linker srl unipersonale</p>
          <p>P.IVA 04938400878</p>
          <p>© {year} Linker srl unipersonale</p>
        </div>
      </div>
    </footer>
  )
}
