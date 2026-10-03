import {
  createRootRoute,
  createRoute,
  createRouter,
  lazyRouteComponent,
  type RouterHistory,
} from '@tanstack/react-router'

import { RootLayout } from '@/components/layout/root-layout'
import { HomePage } from '@/pages/home'

const rootRoute = createRootRoute({
  component: RootLayout,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

// Le pagine secondarie sono in file JS separati: chi apre la home non le scarica.
const privacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy-policy',
  component: lazyRouteComponent(() => import('@/pages/privacy-policy'), 'PrivacyPolicyPage'),
})

const terminiRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/termini-e-condizioni',
  component: lazyRouteComponent(() => import('@/pages/termini-e-condizioni'), 'TerminiPage'),
})

const cookiePolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cookie-policy',
  component: lazyRouteComponent(() => import('@/pages/cookie-policy'), 'CookiePolicyPage'),
})

const grazieRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/grazie',
  component: lazyRouteComponent(() => import('@/pages/grazie'), 'GraziePage'),
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  privacyPolicyRoute,
  terminiRoute,
  cookiePolicyRoute,
  grazieRoute,
])

/** Percorsi da prerenderizzare in HTML statico durante la build (scripts/prerender.mjs). */
export const prerenderPaths = ['/', '/privacy-policy', '/termini-e-condizioni', '/cookie-policy', '/grazie']

/** Nel browser usa la cronologia reale; in prerender riceve una cronologia in memoria. */
export function createAppRouter(history?: RouterHistory) {
  return createRouter({
    routeTree,
    history,
    scrollRestoration: true,
    defaultPreload: 'intent',
  })
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createAppRouter>
  }
}
