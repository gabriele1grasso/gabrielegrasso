import { Outlet } from '@tanstack/react-router'

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
    </div>
  )
}
