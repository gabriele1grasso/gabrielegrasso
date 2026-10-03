import { Link, useLocation } from '@tanstack/react-router'
import { MenuIcon } from 'lucide-react'

import { SectionLink } from '@/components/layout/section-link'
import { Button } from '@/components/ui/button'
import { useHideOnScroll } from '@/hooks/use-hide-on-scroll'
import { scrollToTop } from '@/lib/scroll'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useUIStore } from '@/store/ui-store'

const navLinks = [
  { section: 'come-funziona', label: 'Come funziona' },
  { section: 'cosa-include', label: 'Cosa include' },
  { section: 'chi-sono', label: 'Chi sono' },
  { section: 'faq', label: 'FAQ' },
]

function Logo() {
  const pathname = useLocation({ select: (l) => l.pathname })

  // Già in home: scroll fluido in cima (togliendo l'eventuale #sezione) invece del salto
  // del router. Da un'altra pagina il link porta normalmente alla home, già in cima.
  const handleClick = () => {
    if (pathname === '/') scrollToTop()
  }

  return (
    <Link
      to="/"
      resetScroll={pathname !== '/'}
      onClick={handleClick}
      className="ml-2 block shrink-0 sm:ml-[23px]"
      aria-label="Gabriele Grasso — Home"
    >
      <img src="/logo.png" alt="gabrielegrasso." width={576} height={193} className="h-10 w-auto sm:h-[46px]" />
    </Link>
  )
}

export function Header() {
  const mobileNavOpen = useUIStore((s) => s.mobileNavOpen)
  const setMobileNavOpen = useUIStore((s) => s.setMobileNavOpen)
  // Sparisce scorrendo verso il basso e riappare scorrendo verso l'alto; resta visibile
  // in cima alla pagina e mentre il menu mobile è aperto.
  const hidden = useHideOnScroll(120, mobileNavOpen)

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full pt-4 transition-transform duration-200 ease-out motion-reduce:transition-none',
        // 40px in più per far uscire anche l'ombra della card
        hidden && '-translate-y-[calc(100%+40px)]',
      )}
    >
      <div className="container-page">
        <div className="flex items-center justify-between h-(--navbar-h) rounded-2xl bg-white px-4 shadow-[0_8px_30px_rgba(94,65,227,0.12)]">
          <Logo />

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <SectionLink
                key={link.section}
                section={link.section}
                className="hover:text-accent text-[16.8px] text-[#1c1c1c] transition-colors"
              >
                {link.label}
              </SectionLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild variant="accent" size="lg" className="font-extrabold tracking-[-0.5px]">
              <SectionLink section="come-funziona">Inizia il Protocollo 3P</SectionLink>
            </Button>
          </div>

          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Apri menu">
                <MenuIcon className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-3/4 sm:max-w-xs">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <SectionLink
                    key={link.section}
                    section={link.section}
                    onClick={() => setMobileNavOpen(false)}
                    className="hover:bg-secondary rounded-md px-3 py-3 text-base font-medium"
                  >
                    {link.label}
                  </SectionLink>
                ))}
                <Button asChild variant="accent" className="mt-4 font-bold">
                  <SectionLink section="come-funziona" onClick={() => setMobileNavOpen(false)}>
                    Inizia il Protocollo 3P
                  </SectionLink>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
