export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  /** Screenshot della conversazione WhatsApp */
  image: string
  imageWidth: number
  imageHeight: number
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
  result: string
}

export interface Problem {
  id: string
  title: string
  description: string
}

export interface SolutionTriad {
  id: string
  problem: string
  solution: string
  result: string
  image: string
  imageAlt: string
}

export const heroFeatures = [
  'Spiegazioni e immagini ti accompagnano per tutto il percorso. Trovi anche delle video guide di approfondimento.',
  'Un calcolatore per il budget: sai quanto spendere prima di partire, non improvvisi.',
  'Aggiornamenti inclusi. Se Meta cambia le regole, la guida si adegua di conseguenza.',
]

export const problems: Problem[] = [
  {
    id: 'p1',
    title: 'Tempo perso senza una direzione',
    description:
      'Apri Ads Manager, guardi le opzioni, chiudi tutto. Il giorno dopo ricominci da capo senza fare mai il primo passo.',
  },
  {
    id: 'p2',
    title: 'Troppe informazioni, zero ordine',
    description:
      'Tutorial diversi, schermate che non corrispondono, consigli contrastanti. Più cerchi, meno è chiaro cosa fare.',
  },
  {
    id: 'p3',
    title: 'Occasioni che vanno ai concorrenti',
    description:
      'Chi sa muoversi su Meta intercetta clienti ogni giorno. Tu sei fermo ad aspettare di sentirti pronto.',
  },
  {
    id: 'p4',
    title: 'Delega senza controllo',
    description:
      'Paghi un’agenzia o un freelance ma non hai gli strumenti per capire se il lavoro che ti fanno ha davvero senso.',
  },
  {
    id: 'p5',
    title: 'Budget bruciato senza criterio',
    description:
      'Campagne avviate sperando che funzionino, soldi che escono, e nessun modo di capire dove sia il problema.',
  },
]

export const containsFeatures = [
  'Checklist operativa: Pannello, Pubblico, Portafoglio',
  'Accesso con aggiornamenti continui',
  'Video guide e screenshot per i passaggi chiave',
  'Garanzia soddisfatto o rimborsato entro 14 giorni',
]

export const tools = [
  {
    id: 't1',
    title: 'Calcolatore di budget',
    description: 'Sai quanto investire prima di pubblicare',
  },
  {
    id: 't2',
    title: '500+ creatività Canva',
    description: 'Parti da un format pronto, non da zero',
  },
]

export const solutionTriads: SolutionTriad[] = [
  {
    id: 's1',
    problem: 'Non sai da dove iniziare',
    solution: 'Una sequenza ordinata: Pannello, Pubblico, Portafoglio',
    result: 'Sai esattamente dove mettere le mani',
    image: '/soluzione-sequenza.png',
    imageAlt: 'Le quattro fasi: Pannello, Pubblico, Portafoglio, Creiamo la Campagna',
  },
  {
    id: 's2',
    problem: 'Non sai leggere i risultati',
    solution: 'Le metriche che contano, spiegate in modo semplice',
    result: 'Sai se sta funzionando o se serve correggere',
    image: '/soluzione-metriche.png',
    imageAlt: 'Le metriche chiave: CPM, CTR, CPA e ROAS',
  },
  {
    id: 's3',
    problem: 'Non sai se gli asset sono davvero tuoi o dell’agenzia',
    solution:
      'Capisci come dovrebbero essere intestati Business Manager, Pixel e Account Pubblicitario',
    result: 'Sai esattamente su cosa hai il controllo',
    image: '/soluzione-asset.png',
    imageAlt: 'Business Manager, Pixel e Account pubblicitario devono essere di tua proprietà',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: 'Sono riuscita ad attivare una sponsorizzata da sola',
    name: 'Emanuela P.',
    role: 'Social Media Manager',
    image: '/testimonianza-emanuela.webp',
    imageWidth: 1000,
    imageHeight: 683,
  },
  {
    id: 't2',
    quote: 'Permette anche a chi parte da zero di acquisire autonomia e sicurezza',
    name: 'Grazia L.',
    role: 'Commercialista',
    image: '/testimonianza-grazia.webp',
    imageWidth: 1000,
    imageHeight: 882,
  },
  {
    id: 't3',
    quote: 'Più che semplici lezioni teoriche, è stato un vero e proprio training on the job.',
    name: 'Ilaria M.',
    role: 'Digital Specialist',
    image: '/testimonianza-ilaria.webp',
    imageWidth: 1000,
    imageHeight: 908,
  },
  {
    id: 't4',
    quote: 'Ho apprezzato il tuo modo di spiegare le cose in maniera chiara e concreta.',
    name: 'Marta S.',
    role: 'Freelance',
    image: '/testimonianza-marta.webp',
    imageWidth: 1000,
    imageHeight: 1120,
  },
]

export const credentials = [
  'Master in Digital Communication, Università Cattolica',
  'Ho formato i professionisti del social advertising in WPP Media',
  '10 anni di Paid Media tra agenzia e formazione',
  'Docente per enti di formazione e consulente per aziende',
]

export const methodologyPoints = [
  {
    id: 'm1',
    title: 'Sai sempre qual è il prossimo passo',
    description:
      'Il Protocollo è una sequenza di task da spuntare uno a uno. Ogni fase prepara la successiva, così vai avanti senza mai restare bloccato a chiederti cosa fare.',
  },
  {
    id: 'm2',
    title: 'Ti mostro dove cliccare',
    description:
      'Nei passaggi tecnici non ti lascio a indovinare: screenshot con il punto esatto dove cliccare, e una video guida dove serve davvero vederlo fare.',
  },
  {
    id: 'm3',
    title: 'Capisci il perché di ogni passaggio',
    description:
      'Ogni task ti spiega il perché, non solo il cosa. Così capisci la logica e sai muoverti da solo, anche dove la checklist non arriva.',
  },
  {
    id: 'm4',
    title: 'Prima le basi, poi la campagna',
    description:
      'Quasi tutti partono creando l’annuncio. È lì che si bloccano. Nel Protocollo la campagna arriva alla fine, quando il resto è già pronto.',
  },
]

export const foundationPoints = [
  'Capisci le metriche e non le dimentichi più',
  'Sai quanto investire e cosa aspettarti, prima di spendere',
  'La logica che impari vale per ogni campagna futura',
  'Sai sempre a chi parlare e cosa dirgli, non spari nel mucchio',
]

export const phases: Phase[] = [
  {
    id: 'pannello',
    number: '01',
    title: 'Pannello',
    description:
      'La configurazione che rende tutto possibile. Differenza tra ambiente semplificato e Business Manager professionale. Configuri account, Pagina, Instagram e account pubblicitario intestati a te. Crei il Pixel, gestisci accessi e collaboratori, imposti pagamento e fatturazione.',
    result: 'Hai accesso a tutte le opzioni, non alla versione ridotta.',
  },
  {
    id: 'pubblico',
    number: '02',
    title: 'Pubblico',
    description:
      'La strategia prima della campagna. Le tre fasi del funnel e l’obiettivo giusto per la tua. Costruisci il profilo del cliente ideale con problemi, desideri e obiezioni reali. Definisci cosa ti rende diverso e scegli gli angoli da testare.',
    result: 'Non scrivi più annunci a caso: parli a una persona precisa.',
  },
  {
    id: 'portafoglio',
    number: '03',
    title: 'Portafoglio',
    description:
      'Budget, metriche e decisioni. Come Meta vende lo spazio e perché i costi variano. Stimi il budget, calcoli il punto di pareggio, leggi le metriche che contano e sai diagnosticare una campagna quando i risultati non arrivano.',
    result: 'Sai quanto spendere e come leggere quello che succede.',
  },
  {
    id: 'campagna',
    number: '04',
    title: 'La campagna',
    description:
      'Ci arrivi già preparato. Crei la campagna con l’obiettivo giusto, imposti pubblico, posizionamenti, budget e schedulazione. Carichi le creatività sull’angolo scelto e dai un nome riconoscibile a ogni campagna.',
    result: 'Non speri più che funzioni. Lavori con un metodo.',
  },
]

export const checklistFeatures = [
  'Screenshot e video guide sui passaggi tecnici, clic per clic',
  'Accesso con aggiornamenti continui',
  'Calcolatore di budget e oltre 500 creatività da modificare su Canva',
  '14 giorni per il rimborso, se cambi idea',
]

export const finalCtaFeatures = [
  'Guida operativa Pannello, Pubblico, Portafoglio',
  'Aggiornamenti della guida inclusi',
  'Video guide e screenshot sui passaggi tecnici',
  '14 giorni per il rimborso',
]

export const faqs: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Dopo la prima campagna il Protocollo 3P non mi serve più?',
    answer:
      'No anzi. Continua a essere il tuo riferimento ogni volta che imposti una nuova campagna, e con gli aggiornamenti non diventa mai obsoleta quando Meta cambia.',
  },
  {
    id: 'faq-2',
    question: 'Funziona anche se ho già un’agenzia che gestisce le mie campagne?',
    answer:
      'Sì, e probabilmente è anche il momento giusto per leggerla. Avere le basi non significa fare a meno dell’agenzia: significa parlare la loro stessa lingua, capire i report che ricevi e sapere quando una scelta ha senso. Il rapporto con l’agenzia migliora quando il cliente sa di cosa stanno parlando.',
  },
  {
    id: 'faq-3',
    question: 'Posso chiedere il rimborso?',
    answer: 'Sì. Hai 14 giorni per provarla. Se non fa per te scrivimi e ti restituisco i soldi.',
  },
  {
    id: 'faq-4',
    question: 'Come funziona il pagamento?',
    answer:
      'Il pagamento è gestito tramite Stripe, una delle piattaforme più sicure al mondo. Puoi pagare con tutte le principali carte di credito e debito.',
  },
  {
    id: 'faq-5',
    question: 'I miei dati di pagamento sono al sicuro?',
    answer:
      'Sì. Stripe è una piattaforma con standard di sicurezza più alto del settore. I tuoi dati non passano mai dai miei sistemi.',
  },
  {
    id: 'faq-6',
    question: 'Funziona anche per il mio business?',
    answer:
      'Sì, se vendi prodotti o servizi e vuoi farti conoscere su Meta. Le logiche delle ads sono le stesse a prescindere dal settore: cambia il messaggio, non il metodo.',
  },
]
