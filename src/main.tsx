import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { router } from '@/router'

import './index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
    },
  },
})

// In sviluppo l'HMR ricarica i moduli (es. src/data/content.ts) ma non la cache delle query:
// senza invalidarla le sezioni continuerebbero a mostrare i dati vecchi fino a un reload.
if (import.meta.hot) {
  import.meta.hot.on('vite:afterUpdate', () => queryClient.invalidateQueries())
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
