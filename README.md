# Gabriele Grasso — Protocollo 3P

Ricostruzione del sito [gabrielegrasso.com](https://www.gabrielegrasso.com/), la landing page
del **Protocollo 3P** (Pannello, Pubblico, Portafoglio), il percorso di Gabriele Grasso per
imparare a gestire le proprie campagne Meta Ads senza procedere alla cieca.

## Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- Componenti UI in stile [shadcn/ui](https://ui.shadcn.com/) (Radix UI + CVA)
- [Zustand](https://zustand.docs.pmnd.rs/) per lo stato UI (menu mobile, accordion FAQ)
- [TanStack Router](https://tanstack.com/router) per il routing
- [TanStack Query](https://tanstack.com/query) per il data fetching (testimonianze, FAQ)

## Struttura

- `src/pages` — le pagine (home, privacy policy, termini e condizioni, cookie policy, grazie)
- `src/components/sections` — le sezioni della landing page (hero, protocollo, prezzo, FAQ, ...)
- `src/components/ui` — componenti UI riutilizzabili in stile shadcn/ui
- `src/store` — store Zustand
- `src/data` — contenuti statici e mock API usate da TanStack Query
- `src/router.tsx` — definizione delle rotte

## Sviluppo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
