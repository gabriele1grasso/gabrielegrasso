# CLAUDE.md — sito gabrielegrasso.com

Landing page del **Protocollo 3P** (Pannello, Pubblico, Portafoglio), il percorso di Gabriele
Grasso per imparare a gestire le campagne Meta Ads. Il proprietario è Gabriele: scrive in
italiano, vuole risposte brevi e operative, niente anglicismi inutili.

## Flusso di lavoro (obbligatorio)

1. Parti sempre da `main` aggiornato: `git fetch origin main && git checkout -b claude/<descrizione> origin/main`.
2. Fai la modifica, poi `npm run build` per verificare che compili (include il prerendering).
3. Push del ramo: Vercel crea in automatico un'anteprima. Recupera il link con il connettore
   Vercel (`list_deployments` filtrando per ramo) e mandalo a Gabriele.
4. **Mai** fare push o merge su `main` senza il suo ok esplicito: `main` va online subito su
   gabrielegrasso.com.
5. Dopo l'ok: merge del ramo in `main`, push, verifica che il deploy di produzione sia `READY`.

Messaggi di commit in italiano, brevi e descrittivi.

## Infrastruttura

- **Repo:** `gabriele1grasso/gabrielegrasso` — ramo di produzione: `main`
- **Vercel:** progetto `gabrielegrasso` (`prj_qXdOi9L3iNteV2aDIFjAw4zGGtvQ`),
  team `team_LDh5QWpr9f1ZtrzegYhMMIi4`. Framework Vite, Node 24.
- **Dominio:** `gabrielegrasso.com` (principale) e `www` → reindirizzamento 308 al principale.
  Registrato su Squarespace; DNS: A `@` → 216.198.79.1 e 64.29.17.1, CNAME `www` →
  `f10f68a827812a9c.vercel-dns-017.com`. Non toccare i DNS senza motivo.
- Le anteprime Vercel sono protette da login Vercel (solo il dominio personalizzato è pubblico).

## Stack

React 19 + Vite, Tailwind CSS v4, componenti stile shadcn/ui (Radix + CVA), TanStack Router,
TanStack Query, Zustand. TypeScript, alias `@` → `src/`. Lint: `npm run lint` (oxlint).

## Dove si trova cosa

- **Testi della landing:** quasi tutti in `src/data/content.ts` (vantaggi hero, problemi,
  soluzioni, fasi del protocollo, contenuti, testimonianze, FAQ). Per cambiare un testo parti da qui.
- **Sezioni della home:** `src/components/sections/*.tsx` (hero, problems, solutions, protocol,
  contains, tools, methodology, foundation, pricing, testimonials, rating, video, about, faq,
  final-cta). L'ordine è in `src/pages/home.tsx`.
- **Layout:** `src/components/layout/` (header, footer, seo, legal-page, back-to-top).
- **Pagine:** `src/pages/` — home, privacy-policy, termini-e-condizioni, cookie-policy, grazie.
- **Rotte:** `src/router.tsx`.
- **Immagini:** `public/`, in WebP. Ogni immagine grande ha anche la variante `-640.webp`
  per mobile, usata da `srcSetFor()` in `src/lib/images.ts`. Se aggiungi un'immagine, crea
  entrambe le versioni. L'hero ha anche `-800.webp` (telefoni ad alta densità) e il logo
  `logo-240.webp`.
- **JavaScript leggero:** il pannello del menu mobile (`layout/mobile-nav.tsx`, Radix Dialog)
  si carica solo al primo tocco; la fisarmonica di FAQ e Protocollo (`ui/card-accordion.tsx`)
  è scritta a mano senza Radix. Non reintrodurre librerie nel bundle iniziale.
- **SEO:** `src/components/layout/seo.tsx` (titolo, descrizione, canonical, Open Graph per
  pagina; `SITE_URL`). `public/sitemap.xml` e `public/robots.txt`.

## Build e prerendering

`npm run build` = typecheck + build client + build SSR + `scripts/prerender.mjs`, che genera
l'HTML completo di ogni pagina (per SEO e anteprime social).

**Se aggiungi una pagina**, aggiornala in tre punti: la rotta in `src/router.tsx`,
l'array `prerenderPaths` nello stesso file, e `public/sitemap.xml`.

## Attenzione

- Il sito è usato come destinazione di campagne Meta Ads: le prestazioni (PageSpeed) contano.
  Niente librerie pesanti, immagini sempre WebP e dimensionate, niente font esterni.
- `/grazie` è la pagina di ringraziamento post-acquisto ed è `noindex`.
- Email di contatto: info@gabrielegrasso.com.
