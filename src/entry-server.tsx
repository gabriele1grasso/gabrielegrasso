import { createMemoryHistory } from '@tanstack/react-router'
import { attachRouterServerSsrUtils, RouterServer } from '@tanstack/react-router/ssr/server'
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'

import { createAppRouter } from '@/router'

export { prerenderPaths } from '@/router'

/** HTML di una pagina, usato in build da scripts/prerender.mjs. */
export async function render(url: string) {
  const router = createAppRouter(createMemoryHistory({ initialEntries: [url] }))
  attachRouterServerSsrUtils({ router, manifest: undefined })
  const ssr = router.serverSsr!

  try {
    await router.load()
    await ssr.dehydrate()

    const html = renderToString(
      <StrictMode>
        <RouterServer router={router} />
      </StrictMode>,
    )
    ssr.setRenderFinished()
    // Eventuali script prodotti dopo il render vanno comunque nella pagina
    return html + (ssr.takeBufferedHtml() ?? '')
  } finally {
    ssr.cleanup()
  }
}
