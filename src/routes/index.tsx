import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { PlzChecker } from '../components/PlzChecker'
import { AnmeldungForm } from '../components/AnmeldungForm'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <LeistungenSection />
        <BetreuungsgebietSection />
        <KontaktSection />
      </main>
      <Footer />
    </>
  )
}

function AboutSection() {
  return (
    <section
      id="ueber-mich"
      className="pt-8 pb-20 md:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="md:col-span-4 space-y-4">
          <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-stone-100 shadow-sm">
            <img
              src="/images/profile1.jpg"
              alt="Sophie Mesenich, Hebamme in München Schwabing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-8 space-y-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 leading-tight">
            Herzlich willkommen. Ich bin{' '}
            <span className="italic font-serif text-emerald-900">
              Sophie Mesenich
            </span>
            , Hebamme in München Schwabing.
          </h1>

          <div className="space-y-5 text-stone-600 text-[15px] leading-relaxed">
            <p>
              Die Schwangerschaft, die Geburt und die erste Zeit mit eurem Baby
              gehören zu den prägendsten Momenten des Lebens. Als Hebamme stehe
              ich dir in dieser aufregenden Phase einfühlsam und fachlich
              kompetent zur Seite.
            </p>
            <p>
              Ich sehe Hebammenarbeit grundlegend als Primärversorgung an. So
              wie dich durch andere Lebensphasen dein Hausarzt/ deine
              Hausärztin begleitet und bei Bedarf an andere Fachrichtungen
              weiterleitet, ist dies im Betreuungsbogen Schwangerschaft, Geburt
              und Wochenbett die Hebamme, die eine kontinuierliche und
              umfassende Betreuung sowie die Koordination und Schnittstelle zu
              anderen benötigten Gesundheitsberufen abbilden kann.
            </p>
            <p>
              Mein Ziel ist es, dich auf diesem Weg individuell zu stärken,
              damit du Vertrauen in deinen Körper und deine Intuition findest
              sowie deine physische und psychische Gesundheit zu fördern. Ich
              biete dir einen sicheren Raum für all deine Fragen, Ängste und
              natürlich deine Vorfreude. Meine Aufgabe ist es dich ergebnisoffen
              zu informieren, aufzuklären und zu beraten. Ich berate dich
              evidenzbasiert mit dem Ziel eine gemeinsame Entscheidungsfindung
              herbeizuführen.
            </p>
          </div>

          <div className="space-y-10 pt-2">
            <Topic title="Schwangerschaftsbegleitung">
              <p>
                Im ersten Termin klären wir deine Betreuungswünsche, Bedürfnisse
                und erstellen einen individuellen Betreuungsplan. Hierbei kann
                zum Beispiel die Feststellung der Schwangerschaft stattfinden.
                Ich berate dich unter anderem zur Wahl des Geburtsortes, kann
                deinen Mutterpass ausstellen, den voraussichtlichen
                Geburtszeitraum bestimmen und die jeweilig anstehende Vorsorge-
                sowie Laboruntersuchungen nach Mutterschaftsrichtlinie
                durchführen. Entscheidest du dich für die Schwangerenvorsorge
                bei deiner Gynäkologin/deinem Gynäkologen, biete ich dir nach
                Bedarf Beratung und Hilfeleistungen in der Schwangerschaft an,
                auch eine geteilte Vorsorge mit deiner Gynäkologin/ deinem
                Gynäkologen ist möglich.
              </p>
            </Topic>

            <Topic title="Geburtsbegleitung">
              <p>
                Da ich momentan festangestellt in einem Münchner Kreißsaal
                arbeite, kann ich dir keine ganzheitliche Betreuung mit
                Geburtshilfe anbieten. Ich berate dich jedoch gerne zu den
                verschiedenen Optionen des Geburtsortes und leite dich bei
                Bedarf an Kolleginnen weiter.
              </p>
            </Topic>

            <Topic title="Wochenbettbegleitung">
              <p>
                Im Wochenbett betreue ich dich nach deinen Wünschen und in
                Absprache bereits kurz nach der Geburt, wenn du entschließt
                ambulant nach Hause zu gehen oder nach deiner Entlassung aus der
                Klinik. Die ersten 4 Wochen komme ich nach der Geburt zu dir
                nach Hause. Ich schaue bei dir nach den Rückbildungsprozessen,
                beobachte die sensiblen Anpassungsprozesse des Neugeborenen und
                unterstütze den Stillstart und/oder das Ernähren des
                Neugeborenen mit der Flasche. In der Zeit des späten
                Wochenbettes biete ich dir je nach individuellem Bedarf weitere
                Termine an. Nach 6-8 Wochen findet eine
                Wochenbettabschlussuntersuchung statt. Über die Zeit des
                Wochenbettes hinaus können bei Bedarf weitere Termine bei
                Stillschwierigkeiten oder Fragen zur Ernährung des Säuglings
                stattfinden.
              </p>
            </Topic>

            <Topic title="Schwangerschaftsverlust/ stille Geburt">
              <p>
                Manche Schwangerschaften enden zu früh. Manche kleinen Kinder
                verabschieden sich, bevor es Zeit ist geboren zu werden. Oft ist
                die erste Reaktion nach der Diagnose: Es soll alles schnell
                vorbei sein. Und das ist nur verständlich. Doch auch hier gilt:
                Du darfst dir und deinem Körper Zeit geben. Sofortiger
                Handlungsbedarf besteht nur in absoluten Ausnahmefällen. Und
                Hebammenhilfe steht dir auch in dieser Zeit zu. Ich kann dir
                auch hier unterstützend zur Seite stehen, dich beraten und
                gemeinsam mit euch herausfinden welcher Weg für dich und euch
                der Richtige ist. Für einen Schwangerschaftsverlust im ersten
                Trimenon steht ausgehend von der deutschen Leitlinie ein
                Informationsblatt zur Entscheidungsfindung zur Verfügung:
              </p>
              <div className="pt-1">
                <a
                  href="https://register.awmf.org/assets/guidelines/015-076p1_S2k_Frueher-Schwangerschaftsverlust-im-1-Trimenon_2025-06.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-emerald-900 hover:text-emerald-700 underline underline-offset-4 decoration-emerald-800/40"
                >
                  AWMF-Informationsblatt (PDF)
                </a>
              </div>
            </Topic>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#kontakt"
              className="text-center px-6 py-3 bg-emerald-900 text-white text-sm font-semibold rounded-lg hover:bg-emerald-950 transition-all"
            >
              Betreuungsanmeldung
            </a>
            <a
              href="#leistungen"
              className="text-center px-6 py-3 bg-white text-stone-700 text-sm font-semibold rounded-lg border border-stone-200 hover:border-stone-300 transition-all"
            >
              Leistungen ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Topic({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold text-emerald-950 flex items-center space-x-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
        <span>{title}</span>
      </h2>
      <div className="space-y-4 text-stone-600 text-[15px] leading-relaxed pl-3.5">
        {children}
      </div>
    </div>
  )
}

function LeistungenSection() {
  return (
    <section id="leistungen" className="py-20 bg-white border-y border-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold block">
            Angebote
          </span>
          <h2 className="text-3xl text-stone-900 font-normal">Leistungen</h2>
          <div className="w-12 h-0.5 bg-emerald-900" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard title="Schwangerschaftsbegleitung">
            <li>Schwangerenvorsorgen nach Mutterschaftsrichtlinie</li>
            <li>Beratung und Hilfeleistungen in der Schwangerschaft</li>
          </ServiceCard>
          <ServiceCard title="Wochenbettbetreuung">
            <li>Hausbesuche im Wochenbett</li>
            <li>Wochenbettabschlussuntersuchung</li>
            <li>Beratung bei Still- und Ernährungsfragen</li>
          </ServiceCard>
          <ServiceCard title="Begleitung bei Schwangerschaftsverlust">
            <li>Hebammenhilfe bei Schwangerschaftsverlust</li>
          </ServiceCard>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="p-8 rounded-xl bg-stone-50 border border-stone-100/50 space-y-4">
      <h3 className="text-lg font-bold text-emerald-950 font-serif border-b border-stone-200 pb-2">
        {title}
      </h3>
      <ul className="space-y-3 text-sm text-stone-600 [&_li]:flex [&_li]:items-start [&_li]:before:content-['•'] [&_li]:before:text-emerald-700 [&_li]:before:mr-2.5 [&_li]:before:mt-1">
        {children}
      </ul>
    </div>
  )
}

function BetreuungsgebietSection() {
  return (
    <section id="betreuungsgebiet" className="py-20 bg-[#FCFBF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold block">
              Betreuungsradius
            </span>
            <h2 className="text-3xl text-stone-900 font-normal leading-tight">
              Schwabing-West & Umgebung
            </h2>

            <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
              <div className="bg-white p-5 rounded-xl border border-stone-200/50 space-y-3">
                <div className="flex items-center space-x-3 text-emerald-900">
                  <svg
                    className="w-5 h-5 text-emerald-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="font-bold text-stone-900 font-serif text-base">
                    Schwabing-West & Umgebung
                  </span>
                </div>
                <p className="text-xs text-stone-500 leading-normal">
                  Hierzu gehören neben Schwabing-West unter anderem Teile von
                  Schwabing, Maxvorstadt, Neuhausen, Milbertshofen sowie
                  angrenzende Viertel.
                </p>
              </div>

              <div className="relative w-full aspect-[4/3] bg-stone-50/50 border border-stone-100 rounded-xl overflow-hidden flex items-center justify-center p-2">
                <svg
                  className="w-full h-full text-stone-300"
                  viewBox="0 0 400 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Karte des Betreuungsradius um Schwabing-West"
                >
                  <circle
                    cx="200"
                    cy="140"
                    r="95"
                    fill="rgba(16, 185, 129, 0.025)"
                    stroke="#10b981"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                  />
                  <text
                    x="200"
                    y="80"
                    textAnchor="middle"
                    fill="#a8a29e"
                    fontSize="11"
                    fontWeight="500"
                  >
                    Milbertshofen
                  </text>
                  <text
                    x="100"
                    y="145"
                    textAnchor="middle"
                    fill="#a8a29e"
                    fontSize="11"
                    fontWeight="500"
                  >
                    Neuhausen
                  </text>
                  <text
                    x="300"
                    y="130"
                    textAnchor="middle"
                    fill="#a8a29e"
                    fontSize="11"
                    fontWeight="500"
                  >
                    Schwabing
                  </text>
                  <text
                    x="160"
                    y="210"
                    textAnchor="middle"
                    fill="#a8a29e"
                    fontSize="11"
                    fontWeight="500"
                  >
                    Maxvorstadt
                  </text>
                  <text
                    x="280"
                    y="215"
                    textAnchor="middle"
                    fill="#a8a29e"
                    fontSize="11"
                    fontWeight="500"
                  >
                    Bogenhausen
                  </text>
                  <text
                    x="220"
                    y="260"
                    textAnchor="middle"
                    fill="#c2c1be"
                    fontSize="10"
                    fontWeight="500"
                  >
                    Altstadt
                  </text>
                  <circle
                    cx="200"
                    cy="140"
                    r="14"
                    fill="rgba(4, 120, 87, 0.12)"
                  />
                  <circle cx="200" cy="140" r="4" fill="#047857" />
                  <text
                    x="200"
                    y="164"
                    textAnchor="middle"
                    fill="#0f172a"
                    fontSize="13"
                    fontWeight="700"
                    fontFamily="'Playfair Display', serif"
                    className="italic"
                  >
                    Schwabing-West
                  </text>
                </svg>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 space-y-6">
            <PlzChecker />
            <div className="space-y-2">
              <p className="text-xs text-stone-500">
                Falls du noch auf der Suche nach einer Hebamme bist, könnten dir
                folgende Seiten helfen:
              </p>
              <div className="grid grid-cols-1 gap-2 text-xs">
                {[
                  ['https://www.heba4you.de', 'www.heba4you.de'],
                  [
                    'https://www.bauchladen-muenchen.de',
                    'www.bauchladen-muenchen.de',
                  ],
                  ['https://www.ammely.de', 'www.ammely.de'],
                  [
                    'https://www.gkv-spitzenverband.de/service/hebammenliste/hebammenliste.jsp',
                    'Hebammenliste GKV',
                  ],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-emerald-800 hover:text-emerald-950 underline decoration-emerald-800/25"
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-800 mr-2" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function KontaktSection() {
  return (
    <section id="kontakt" className="py-20 bg-white border-t border-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold block">
              Anmeldung
            </span>
            <h2 className="text-3xl text-stone-900 font-normal">
              Betreuungsanmeldung
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Schicke mir deine Anfrage ganz bequem über dieses Formular. Bitte
              fülle alle notwendigen Felder aus, damit ich deine Anfrage optimal
              prüfen kann.
            </p>
            <div className="space-y-4 pt-4 border-t border-stone-100 text-xs text-stone-500">
              <p>
                <strong>Hinweis:</strong> Hebammenleistungen sind eine
                Regelleistung deiner Krankenkasse. Bei Fragen zur Kostenübernahme
                helfe ich dir gerne weiter.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-stone-50 p-8 sm:p-10 rounded-2xl border border-stone-200/50">
            <AnmeldungForm />
          </div>
        </div>
      </div>
    </section>
  )
}
