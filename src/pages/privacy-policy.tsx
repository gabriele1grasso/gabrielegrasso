import { LegalPage } from '@/components/layout/legal-page'

export function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="Come vengono raccolti e trattati i dati personali su gabrielegrasso.com e nell’acquisto del Protocollo 3P."
      path="/privacy-policy"
      updatedAt="27 agosto 2026"
    >
      <section>
        <h2 className="text-lg font-semibold text-foreground">1. Titolare del trattamento</h2>
        <p className="text-muted-foreground mt-2">
          Il Titolare del trattamento dei dati raccolti tramite questo sito è Linker
          S.r.l., P.IVA 04938400878, contattabile all’indirizzo email
          info@gabrielegrasso.com.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">2. Dati raccolti</h2>
        <p className="text-muted-foreground mt-2">
          Nel corso della navigazione e dell’acquisto del Protocollo 3P possiamo
          raccogliere dati identificativi (nome, cognome, email) e dati di pagamento,
          questi ultimi gestiti direttamente dal fornitore di pagamenti Stripe.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">3. Finalità del trattamento</h2>
        <p className="text-muted-foreground mt-2">
          I dati vengono trattati per l’erogazione del servizio acquistato, per
          l’assistenza clienti, per l’invio di comunicazioni relative al Protocollo 3P
          e, previo consenso, per finalità di marketing.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">4. Diritti dell’interessato</h2>
        <p className="text-muted-foreground mt-2">
          In qualsiasi momento è possibile richiedere l’accesso, la rettifica, la
          cancellazione o la limitazione del trattamento dei propri dati scrivendo a
          info@gabrielegrasso.com.
        </p>
      </section>
    </LegalPage>
  )
}
