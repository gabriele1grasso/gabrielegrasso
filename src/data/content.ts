export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  initials: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface Phase {
  id: string
  number: string
  title: string
  description: string
  points: string[]
}

export const phases: Phase[] = [
  {
    id: 'pannello',
    number: '01',
    title: 'Pannello',
    description:
      'Configurazione tecnica che ti dà pieno accesso e controllo della piattaforma, senza dipendere da nessuno.',
    points: [
      'Impostazione corretta di account, Pagina, Instagram e account pubblicitario a tuo nome',
      'Creazione del Pixel e collegamento agli strumenti giusti',
      'Gestione di accessi, ruoli e metodi di pagamento in sicurezza',
    ],
  },
  {
    id: 'pubblico',
    number: '02',
    title: 'Pubblico',
    description:
      'Il lavoro strategico da fare prima di accendere qualsiasi campagna, per non sprecare budget a caso.',
    points: [
      'Costruzione del funnel più adatto al tuo business',
      'Profilazione del cliente: dolori, desideri e obiezioni reali',
      'Preparazione degli angle e dei messaggi da testare',
    ],
  },
  {
    id: 'portafoglio',
    number: '03',
    title: 'Portafoglio',
    description:
      'Numeri e budget spiegati in modo semplice, per sapere sempre quanto investire e cosa aspettarti.',
    points: [
      'Stima del budget iniziale in base al tuo margine',
      'Calcolo del break-even e delle metriche chiave',
      'Diagnosi delle campagne per capire cosa non funziona',
    ],
  },
  {
    id: 'campagna',
    number: '04',
    title: 'La campagna',
    description:
      'Il momento operativo: dalla struttura all’attivazione, con tutte le scelte spiegate passo passo.',
    points: [
      'Scelta dell’obiettivo di campagna corretto',
      'Impostazione del pubblico e del budget',
      'Caricamento delle creatività e pubblicazione',
    ],
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: 'Sono riuscita ad attivare una sponsorizzata da sola.',
    name: 'Emanuela P.',
    role: 'Social Media Manager',
    initials: 'EP',
  },
  {
    id: 't2',
    quote: 'Permette anche a chi parte da zero di acquisire autonomia e sicurezza.',
    name: 'Grazia L.',
    role: 'Commercialista',
    initials: 'GL',
  },
  {
    id: 't3',
    quote:
      'Più che semplici lezioni teoriche, è stato un vero e proprio training on the job.',
    name: 'Ilaria M.',
    role: 'Digital Specialist',
    initials: 'IM',
  },
  {
    id: 't4',
    quote: 'Ho apprezzato il tuo modo di spiegare le cose in maniera chiara e concreta.',
    name: 'Marta S.',
    role: 'Freelance',
    initials: 'MS',
  },
]

export const faqs: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Dopo la prima campagna il Protocollo 3P non mi serve più?',
    answer:
      'Al contrario. Resta il tuo punto di riferimento anche per le campagne successive e viene aggiornato ogni volta che Meta cambia qualcosa nella piattaforma.',
  },
  {
    id: 'faq-2',
    question: 'Funziona anche se ho già un’agenzia che gestisce le mie campagne?',
    answer:
      'Sì. Capire le basi ti permette di parlare la stessa lingua della tua agenzia e valutare con criterio le proposte e i risultati che ti portano.',
  },
  {
    id: 'faq-3',
    question: 'Posso chiedere il rimborso?',
    answer:
      'Sì, hai 14 giorni di tempo dall’acquisto per chiedere il rimborso completo se non sei soddisfatto.',
  },
  {
    id: 'faq-4',
    question: 'Come funziona il pagamento?',
    answer:
      'Il pagamento è gestito da Stripe e accetta le principali carte di credito e debito, in un’unica soluzione.',
  },
  {
    id: 'faq-5',
    question: 'I miei dati di pagamento sono al sicuro?',
    answer:
      'Sì. Stripe adotta standard di sicurezza tra i più elevati al mondo per l’elaborazione dei pagamenti online.',
  },
  {
    id: 'faq-6',
    question: 'Funziona anche per il mio business?',
    answer:
      'Sì, se vendi prodotti o servizi e vuoi promuoverli sulle piattaforme Meta (Facebook e Instagram), il Protocollo 3P è pensato per te.',
  },
]

export const problems = [
  {
    id: 'p1',
    title: 'Mancanza di direzione',
    description: 'Apri Ads Manager, provi qualcosa, chiudi. E il giorno dopo daccapo.',
  },
  {
    id: 'p2',
    title: 'Troppe informazioni',
    description:
      'Tutorial contrastanti, guru diversi, consigli che si contraddicono l’uno con l’altro.',
  },
  {
    id: 'p3',
    title: 'Occasioni perse',
    description: 'Mentre rimandi, i tuoi concorrenti intercettano clienti ogni giorno.',
  },
  {
    id: 'p4',
    title: 'Delega senza controllo',
    description: 'Paghi un’agenzia ma non hai gli strumenti per valutare se lavora bene.',
  },
  {
    id: 'p5',
    title: 'Budget bruciato',
    description: 'Campagne lanciate senza criteri misurabili, con soldi spesi alla cieca.',
  },
]

export const included = [
  {
    id: 'i1',
    title: 'Checklist operativa',
    description: 'Con screenshot e video guida per ogni singolo passaggio, senza saltare nulla.',
  },
  {
    id: 'i2',
    title: 'Calcolatore di budget',
    description: 'Per stimare in pochi minuti quanto investire in base al tuo margine.',
  },
  {
    id: 'i3',
    title: '500+ template Canva',
    description: 'Pronti da personalizzare per creare le tue creatività in poco tempo.',
  },
  {
    id: 'i4',
    title: 'Aggiornamenti continui',
    description: 'Il protocollo si aggiorna ogni volta che Meta cambia la piattaforma.',
  },
]
