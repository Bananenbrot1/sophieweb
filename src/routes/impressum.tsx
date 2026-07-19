import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/impressum')({
  head: () => ({
    meta: [{ title: 'Impressum | Sophie Mesenich' }],
  }),
  component: ImpressumPage,
})

function ImpressumPage() {
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
          <h1 className="text-3xl text-stone-900 font-normal mb-6">Impressum</h1>
          <h2 className="text-base font-semibold text-stone-900 mb-2">
            Angaben nach §5 TMG
          </h2>
          <p>
            Hebamme Sophie Mesenich
            <br />
            Pündterplatz 2
            <br />
            80803 München
          </p>
          <p className="mt-3">
            <a
              href="https://www.hebamme-sophie.com"
              className="text-emerald-800 underline underline-offset-2"
            >
              www.hebamme-sophie.com
            </a>
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
            Inhaltlich verantwortlich:
          </h2>
          <p>Sophie Mesenich</p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-stone-900 mb-2">
            Gesetzliche Berufsbezeichnung
          </h2>
          <p>
            Hebamme
            <br />
            Verleihungsstaat: Bundesrepublik Deutschland
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-stone-900 mb-2">
            Relevante Berufsregelungen
          </h2>
          <p>
            Deutsches Hebammen-Gesetz:
            <br />
            <a
              href="https://www.gesetze-im-internet.de/hebg_2020/"
              className="text-emerald-800 underline underline-offset-2"
            >
              https://www.gesetze-im-internet.de/hebg_2020/
            </a>
          </p>
          <p className="mt-3">
            Berufsordnung der Hebammen in Bayern:
            <br />
            <a
              href="https://www.gesetze-bayern.de/Content/Document/BayHebBO/true"
              className="text-emerald-800 underline underline-offset-2"
            >
              https://www.gesetze-bayern.de/Content/Document/BayHebBO/true
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-stone-900 mb-2">
            Mitgliedschaften
          </h2>
          <p>
            Bayrischer Hebammenlandesverband. Im Sinne eines transparenten
            Beschwerdemanagements weise ich auf die Möglichkeit hin, dass der
            Hebammenverband angeschrieben werden kann, wenn Du eine moderierte
            Klärung deiner Anliegen wünschst.
          </p>
          <a
            href="https://www.bhlv.de/"
            className="text-emerald-800 underline underline-offset-2"
          >
            https://www.bhlv.de/
          </a>
        </div>
        <div>
          <h2 className="text-base font-semibold text-stone-900 mb-2">
            Gesundheitsamt / Gesundheitsaufsicht
          </h2>
          <p>
            Landeshauptstadt München, Gesundheitsreferat
            <br />
            Gesundheitsschutz Hygiene und Umweltmedizin
            <br />
            Infektionshygiene/Medizinalwesen
            <br />
            GSR-GS-HU-IHM
            <br />
            Bayerstraße 28a
            <br />
            80335 München
            <br />
            Telefon: 089 233-747861/-65
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-stone-900 mb-2">
            Urheberrecht
          </h2>
          <p>
            Alle Texte, Bilder und Grafiken unterliegen dem Urheberrecht. Sie
            dürfen weder für Handelszwecke oder zur Weitergabe kopiert werden,
            noch verändert und auf anderen Web-Sites verwendet werden. Sofern
            Seiten Texte, Bilder oder Grafiken enthalten, die dem Urheberrecht
            anderer unterliegen, sind diese gekennzeichnet.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-stone-900 mb-2">
            Haftungsausschluss
          </h2>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine
            Haftung für die Inhalte externer Links. Für den Inhalt der
            verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>
        </div>
      </div>
    </main>
  )
}
