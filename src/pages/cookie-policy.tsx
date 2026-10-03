import { LegalPage } from '@/components/layout/legal-page'

export function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      description="Quali cookie usa gabrielegrasso.com, a cosa servono e come gestire le tue preferenze."
      path="/cookie-policy"
      updatedAt="27 agosto 2026"
    >
      <section>
        <h2 className="text-lg font-semibold text-foreground">1. Cosa sono i cookie</h2>
        <p className="text-muted-foreground mt-2">
          I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo
          dell’utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi
          siti alla visita successiva.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">2. Cookie utilizzati dal sito</h2>
        <p className="text-muted-foreground mt-2">
          Questo sito utilizza cookie tecnici necessari al corretto funzionamento delle
          pagine e cookie analitici in forma aggregata per comprendere l’utilizzo del
          sito.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">3. Gestione dei cookie</h2>
        <p className="text-muted-foreground mt-2">
          È possibile gestire le preferenze sui cookie direttamente dalle impostazioni
          del proprio browser, bloccandone la memorizzazione o eliminando quelli già
          salvati.
        </p>
      </section>
    </LegalPage>
  )
}
