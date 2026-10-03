import { Outlet, Scripts } from '@tanstack/react-router'

import { BackToTop } from '@/components/layout/back-to-top'
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
      {/* Nell'HTML prerenderizzato: lo stato del router che il browser riprende all'avvio */}
      <Scripts />
    </div>
  )
}
