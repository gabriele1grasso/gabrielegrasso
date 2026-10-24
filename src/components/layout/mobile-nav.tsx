import { SectionLink } from '@/components/layout/section-link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { useUIStore } from '@/store/ui-store'

/**
 * Pannello del menu mobile. Sta in un file JS separato (caricato da header.tsx solo quando
 * serve): la libreria del pannello pesa e chi non apre il menu non la scarica.
 */
export function MobileNav({ links }: { links: { section: string; label: string }[] }) {
  const open = useUIStore((s) => s.mobileNavOpen)
  const setOpen = useUIStore((s) => s.setMobileNavOpen)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="w-3/4 sm:max-w-xs">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {links.map((link) => (
            <SectionLink
              key={link.section}
              section={link.section}
              onClick={() => setOpen(false)}
              className="hover:bg-secondary rounded-md px-3 py-3 text-base font-medium"
            >
              {link.label}
            </SectionLink>
          ))}
          <Button asChild variant="accent" className="mt-4 font-bold">
            <SectionLink section="acquista" onClick={() => setOpen(false)}>
              Inizia il Protocollo 3P
            </SectionLink>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
