import { RouterProvider } from '@tanstack/react-router'
import { RouterClient } from '@tanstack/react-router/ssr/client'
import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'

import { createAppRouter } from '@/router'

import './index.css'

const router = createAppRouter()
const container = document.getElementById('root')!

if (container.firstElementChild) {
  // Pagina prerenderizzata dalla build: React riprende l'HTML che c'è già invece di ricrearlo
  hydrateRoot(
    container,
    <StrictMode>
      <RouterClient router={router} />
    </StrictMode>,
  )
} else {
  createRoot(container).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
