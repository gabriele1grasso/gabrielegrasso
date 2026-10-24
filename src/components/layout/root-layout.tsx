import { Outlet, Scripts } from '@tanstack/react-router'

import { BackToTop } from '@/components/layout/back-to-top'
import { CookieConsent } from '@/components/layout/cookie-consent'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <CookieConsent />
      {/* Nell'HTML prerenderizzato: lo stato del router che il browser riprende all'avvio */}
      <Scripts />
    </div>
  )
}
