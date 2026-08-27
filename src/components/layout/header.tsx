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

export function Header() {
  const mobileNavOpen = useUIStore((s) => s.mobileNavOpen)
  const setMobileNavOpen = useUIStore((s) => s.setMobileNavOpen)

  return (
    <header className="bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="bg-accent text-accent-foreground flex size-8 items-center justify-center rounded-md text-sm font-bold">
            GG
          </span>
          <span className="hidden sm:inline">Direzione Digitale</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="accent" size="sm">
            <a href="/#pricing">Inizia il Protocollo 3P</a>
          </Button>
        </div>

        <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Apri menu">
              <MenuIcon className="size-5" />
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
              <Button asChild variant="accent" className="mt-4">
                <a href="/#pricing" onClick={() => setMobileNavOpen(false)}>
                  Inizia il Protocollo 3P
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
