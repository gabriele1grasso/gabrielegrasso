import { Link } from '@tanstack/react-router'

import { InstagramIcon, LinkedinIcon, TiktokIcon } from '@/components/icons/social'

const socialLinks = [
  { href: 'https://www.instagram.com/gabriele1grasso/', label: 'Instagram', Icon: InstagramIcon },
  { href: 'https://www.linkedin.com/in/gabrielegrassodigital/', label: 'LinkedIn', Icon: LinkedinIcon },
  { href: 'https://www.tiktok.com/@gabriele1grasso', label: 'TikTok', Icon: TiktokIcon },
]

const legalLinks = [
  { to: '/termini-e-condizioni', label: 'Termini e Condizioni' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/cookie-policy', label: 'Cookie Policy' },
]

const labelClass = 'font-bold text-white/35'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="container-page pt-[120px] pb-16">
        <p className="text-display max-w-[950px]">Il tuo metodo per fare Meta Ads parte da qui.</p>

        <div className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-12">
          <div>
            <p className={labelClass}>Email</p>
            <a href="mailto:info@gabrielegrasso.com" className="mt-2.5 block hover:underline">
              info@gabrielegrasso.com
            </a>
          </div>
          <div>
            <p className={labelClass}>Domande?</p>
            <a href="mailto:info@gabrielegrasso.com" className="mt-2.5 block hover:underline">
              Contattami
            </a>
          </div>
          <ul className="flex items-start gap-[29px]">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="block transition-opacity hover:opacity-70"
                >
                  <Icon className="size-[21px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-10 border-t border-white/15 pt-9 sm:grid-cols-[1.2fr_1fr] sm:gap-12">
          <div>
            <p className={labelClass}>Legal</p>
            <ul className="mt-5 flex flex-col gap-4">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-feature hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex max-w-[422px] flex-col gap-4 text-white/35">
            <p>Direzione Digitale è un marchio di Linker srl unipersonale</p>
            <p>P.IVA 04938400878</p>
            <p>© {year} Linker srl unipersonale</p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15" />
      </div>
    </footer>
  )
}
