import { LegalPage } from '@/components/layout/legal-page'

export function TerminiPage() {
  return (
    <LegalPage title="Termini e Condizioni" updatedAt="27 agosto 2026">
      <section>
        <h2 className="text-lg font-semibold text-foreground">1. Oggetto</h2>
        <p className="text-muted-foreground mt-2">
          Le presenti condizioni regolano la vendita e l’utilizzo del prodotto digitale
          “Protocollo 3P”, erogato da Linker S.r.l. tramite il sito
          gabrielegrasso.com.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">2. Acquisto e pagamento</h2>
        <p className="text-muted-foreground mt-2">
          Il prezzo del Protocollo 3P è indicato in pagina in Euro, IVA inclusa. Il
          pagamento avviene tramite Stripe, in un’unica soluzione, al momento
          dell’acquisto.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">3. Diritto di recesso e rimborso</h2>
        <p className="text-muted-foreground mt-2">
          L’acquirente ha diritto al rimborso completo entro 14 giorni dall’acquisto,
          richiedibile scrivendo a info@gabrielegrasso.com.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-foreground">4. Limitazioni di responsabilità</h2>
        <p className="text-muted-foreground mt-2">
          I contenuti del Protocollo 3P hanno finalità formativa. I risultati ottenibili
          dipendono da numerosi fattori esterni non controllabili dal fornitore e non
          sono in alcun modo garantiti.
        </p>
      </section>
    </LegalPage>
  )
}
