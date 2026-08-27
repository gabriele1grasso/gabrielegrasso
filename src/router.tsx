import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'

import { RootLayout } from '@/components/layout/root-layout'
import { CookiePolicyPage } from '@/pages/cookie-policy'
import { GraziePage } from '@/pages/grazie'
import { HomePage } from '@/pages/home'
import { PrivacyPolicyPage } from '@/pages/privacy-policy'
import { TerminiPage } from '@/pages/termini-e-condizioni'

const rootRoute = createRootRoute({
  component: RootLayout,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const privacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy-policy',
  component: PrivacyPolicyPage,
})

const terminiRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/termini-e-condizioni',
  component: TerminiPage,
})

const cookiePolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cookie-policy',
  component: CookiePolicyPage,
})

const grazieRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/grazie',
  component: GraziePage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  privacyPolicyRoute,
  terminiRoute,
  cookiePolicyRoute,
  grazieRoute,
])

export const router = createRouter({
  routeTree,
  scrollRestoration: true,
  defaultPreload: 'intent',
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
