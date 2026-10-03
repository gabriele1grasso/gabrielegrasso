// Genera l'HTML statico di ogni pagina dopo la build, così motori di ricerca e anteprime social
// (che spesso non eseguono JavaScript) vedono i contenuti. Nel browser React poi riprende la pagina.
import { readdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = path.resolve(import.meta.dirname, '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render, prerenderPaths } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
)
const template = await readFile(path.join(dist, 'index.html'), 'utf-8')
if (!template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html è già prerenderizzato: rilancia prima "vite build"')
}

// Il font del testo latino serve subito: lo si scarica in parallelo al CSS invece che dopo.
const font = (await readdir(path.join(dist, 'assets'))).find((file) =>
  /^inter-tight-latin-wght-normal-.*\.woff2$/.test(file),
)
const fontPreload = font
  ? `<link rel="preload" href="/assets/${font}" as="font" type="font/woff2" crossorigin />`
  : ''

// Titolo e meta tag della pagina (components/layout/seo.tsx) e i preload delle immagini che
// React mette in cima al body vanno spostati nel <head>
const headTag = /<title>[^<]*<\/title>|<meta [^>]*\/?>|<link rel="(?:canonical|preload)"[^>]*\/?>/g

for (const url of prerenderPaths) {
  // Lo stato del router serializzato usa il carattere NUL come separatore negli id: dentro un
  // <script> il parser HTML lo trasformerebbe in U+FFFD, quindi va scritto come escape JS.
  const appHtml = (await render(url)).replaceAll('\0', '\\u0000')
  const headTags = appHtml.match(headTag) ?? []
  const bodyHtml = appHtml.replace(headTag, '')

  const html = template
    .replace('<!--app-head-->', [fontPreload, ...headTags].join('\n    '))
    .replace('<!--app-html-->', bodyHtml)

  // /grazie → dist/grazie.html: gli host statici lo servono anche senza estensione
  const file = url === '/' ? 'index.html' : `${url.slice(1)}.html`
  await writeFile(path.join(dist, file), html)
  console.log(`prerender: ${url} → dist/${file} (${headTags.length} tag nel head)`)
}

await rm(ssrDir, { recursive: true, force: true })
