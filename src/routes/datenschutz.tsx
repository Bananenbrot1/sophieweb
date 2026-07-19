import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/datenschutz')({
  head: () => ({
    meta: [{ title: 'Datenschutz | Sophie Mesenich' }],
  }),
  component: DatenschutzPage,
})

function DatenschutzPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <Link
        to="/"
        className="text-sm text-emerald-800 hover:text-emerald-950 underline underline-offset-4"
      >
        Zurück zur Startseite
      </Link>
      <div className="mt-8 space-y-8 text-sm text-stone-600 leading-relaxed">
        <div>
          <h1 className="text-3xl text-stone-900 font-normal mb-6">
            Datenschutzerklärung
          </h1>
          <h2 className="text-base font-semibold text-stone-900 mb-2">
            1. Verantwortliche
          </h2>
          <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
          <p className="mt-3">
            Hebamme Sophie Mesenich
            <br />
            Pündterplatz 2
            <br />
            80803 München
            <br />
            <a
              href="mailto:hebamme.mesenich@pm.me"
              className="text-emerald-800 underline underline-offset-2"
            >
              hebamme.mesenich@pm.me
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-stone-900 mb-2">
            2. Erhebung und Speicherung personenbezogener Daten
          </h2>
          <p>
            Beim Besuch dieser Website werden durch den Hosting-Anbieter
            automatisch Informationen erfasst (z.&nbsp;B. IP-Adresse, Datum und
            Uhrzeit des Zugriffs, aufgerufene Seite, Browser-Typ). Diese Daten
            dienen der technischen Bereitstellung und Sicherheit der Website und
            werden nicht dazu verwendet, Rückschlüsse auf Ihre Person zu ziehen.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-stone-900 mb-2">
            3. Anmeldeformular
          </h2>
          <p>
            Wenn Sie über das Anmeldeformular eine Betreuungsanfrage stellen,
            werden die von Ihnen angegebenen Daten (u.&nbsp;a. Name, Adresse,
            Geburtsdatum, Kontaktdaten, Versicherungsdaten, Entbindungstermin,
            Angaben zu Schwangerschaften/Geburten und Bemerkungen)
            ausschließlich zur Bearbeitung Ihrer Anmeldung verarbeitet und an
            das Praxisverwaltungssystem miya übermittelt. Rechtsgrundlage ist
            Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO (vorvertragliche Maßnahmen)
            bzw. Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO (Einwilligung). Die
            Daten werden nach abschließender Bearbeitung Ihrer Anfrage gelöscht,
            sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-stone-900 mb-2">
            4. Cookies und Tracking
          </h2>
          <p>
            Diese Website verwendet keine Cookies zu Analyse- oder
            Marketingzwecken und setzt kein Tracking ein.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-stone-900 mb-2">
            5. Ihre Rechte
          </h2>
          <p>
            Sie haben jederzeit das Recht auf Auskunft über die bei mir
            gespeicherten personenbezogenen Daten sowie auf Berichtigung,
            Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit.
            Sofern die Verarbeitung auf einer Einwilligung beruht, können Sie
            diese jederzeit mit Wirkung für die Zukunft widerrufen. Hierzu
            genügt eine formlose Mitteilung an die oben genannte E-Mail-Adresse.
          </p>
          <p className="mt-3">
            Darüber hinaus besteht ein Beschwerderecht bei der zuständigen
            Aufsichtsbehörde:
          </p>
          <p className="mt-3">
            Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)
            <br />
            Promenade 18
            <br />
            91522 Ansbach
            <br />
            <a
              href="https://www.lda.bayern.de"
              className="text-emerald-800 underline underline-offset-2"
            >
              www.lda.bayern.de
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-stone-900 mb-2">
            6. Externe Links
          </h2>
          <p>
            Diese Website enthält Links zu externen Websites Dritter. Für deren
            Inhalte und Datenschutzpraktiken bin ich nicht verantwortlich. Bitte
            beachten Sie die jeweiligen Datenschutzerklärungen der verlinkten
            Seiten.
          </p>
        </div>
      </div>
    </main>
  )
}
