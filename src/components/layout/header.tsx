import { Link } from '@tanstack/react-router'
import { MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useUIStore } from '@/store/ui-store'

const navLinks = [
  { href: '/#come-funziona', label: 'Come funziona' },
  { href: '/#cosa-include', label: 'Cosa include' },
  { href: '/#chi-sono', label: 'Chi sono' },
  { href: '/#faq', label: 'FAQ' },
]

function Logo() {
  return (
    <Link to="/" className="ml-2 block shrink-0 sm:ml-[23px]" aria-label="Gabriele Grasso — Home">
      <img src="/logo.png" alt="gabrielegrasso." width={576} height={193} className="h-10 w-auto sm:h-[46px]" />
    </Link>
  )
}

export function Header() {
  const mobileNavOpen = useUIStore((s) => s.mobileNavOpen)
  const setMobileNavOpen = useUIStore((s) => s.setMobileNavOpen)

  return (
    <header className="sticky top-0 z-40 w-full pt-4">
      <div className="container-page">
        <div className="flex items-center justify-between h-(--navbar-h) rounded-2xl bg-white px-4 shadow-[0_8px_30px_rgba(94,65,227,0.12)]">
          <Logo />

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-accent text-[16.8px] text-[#1c1c1c] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild variant="accent" size="lg" className="font-extrabold tracking-[-0.5px]">
              <a href="/#pricing">Inizia il Protocollo 3P</a>
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
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileNavOpen(false)}
                    className="hover:bg-secondary rounded-md px-3 py-3 text-base font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <Button asChild variant="accent" className="mt-4 font-bold">
                  <a href="/#pricing" onClick={() => setMobileNavOpen(false)}>
                    Inizia il Protocollo 3P
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
