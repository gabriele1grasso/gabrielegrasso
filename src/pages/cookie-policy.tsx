import { LegalPage } from '@/components/layout/legal-page'

export function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      description="Quali cookie usa gabrielegrasso.com, a cosa servono e come gestire le tue preferenze."
      path="/cookie-policy"
      updatedAt="24 ottobre 2026"
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
        <h2 className="text-lg font-semibold text-foreground">2. Cookie tecnici</h2>
        <p className="text-muted-foreground mt-2">
          Sono necessari al funzionamento del sito e non richiedono consenso. Il sito salva
          nel tuo browser solo la scelta che fai sul banner dei cookie, per non riproportelo a
          ogni visita. La scelta resta valida per 6 mesi.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">3. Pixel di Meta (cookie di marketing)</h2>
        <p className="text-muted-foreground mt-2">
          Solo se premi “Accetta” sul banner, il sito attiva il Pixel di Meta, fornito da Meta
          Platforms Ireland Ltd. Serve a misurare le visite e gli acquisti che arrivano dalle
          inserzioni su Facebook e Instagram e a mostrare annunci pertinenti a chi ha già
          visitato il sito. Il Pixel imposta il cookie <code>_fbp</code> (durata 90 giorni) e
          può leggere il cookie <code>_fbc</code> quando arrivi da un’inserzione.
        </p>
        <p className="text-muted-foreground mt-2">
          La base giuridica è il tuo consenso. I dati possono essere trasferiti negli Stati
          Uniti nell’ambito dell’EU-U.S. Data Privacy Framework. Per sapere come Meta tratta
          questi dati puoi consultare la{' '}
          <a
            href="https://www.facebook.com/privacy/policy/"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            privacy policy di Meta
          </a>
          .
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">4. Pagina di pagamento</h2>
        <p className="text-muted-foreground mt-2">
          Il modulo d’ordine su checkout.gabrielegrasso.com è gestito da systeme.io, che usa
          cookie propri per il funzionamento del pagamento e lo stesso Pixel di Meta per
          registrare gli acquisti.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">5. Gestione delle preferenze</h2>
        <p className="text-muted-foreground mt-2">
          Puoi cambiare la tua scelta in qualsiasi momento dal link “Preferenze cookie” in
          fondo a ogni pagina. Se ritiri il consenso, il Pixel smette di inviare dati e i suoi
          cookie vengono cancellati. Puoi anche bloccare o eliminare i cookie dalle
          impostazioni del browser.
        </p>
      </section>
    </LegalPage>
  )
}
