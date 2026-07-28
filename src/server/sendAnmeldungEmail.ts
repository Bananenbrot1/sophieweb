import { Lettermint } from 'lettermint'
import type { AnmeldungInput } from '../lib/anmeldung-schema'

function formatDate(value: string): string {
  if (!value) return '—'
  const [year, month, day] = value.split('-')
  if (!year || !month || !day) return value
  return `${day}.${month}.${year}`
}

function buildBody(data: AnmeldungInput): string {
  const lines = [
    'Neue Anmeldung über die Website:',
    '',
    `Name: ${data.vorname} ${data.nachname}`,
    `Geburtsdatum: ${formatDate(data.geburtsdatum)}`,
    `Adresse: ${data.strasse}, ${data.plz} ${data.ort}`,
    `Telefon: ${data.telefon || '—'}`,
    `E-Mail: ${data.email}`,
    '',
    `Versicherungsart: ${data.versicherungsart}`,
    `IK Krankenkasse: ${data.kassenik}`,
    `Versichertennummer: ${data.versichertennummer}`,
    '',
    `Entbindungstermin: ${formatDate(data.entbindungstermin)}`,
    `Schwangerschaften (Para): ${data.para}`,
    `Geburten (Gravida): ${data.gravida}`,
    `Bemerkung: ${data.bemerkung || '—'}`,
  ]

  return lines.join('\n')
}

export async function sendAnmeldungEmail(data: AnmeldungInput): Promise<void> {
  const token = process.env.LETTERMINT_PROJECT_TOKEN
  const from = process.env.LETTERMINT_FROM
  const to = process.env.LETTERMINT_NOTIFY_TO

  if (!token || !from || !to) {
    console.warn(
      'Lettermint not configured (LETTERMINT_PROJECT_TOKEN, LETTERMINT_FROM, LETTERMINT_NOTIFY_TO) — skipping notification email',
    )
    return
  }

  const email = Lettermint.email(token)

  const response = await email
    .from(from)
    .to(to)
    .subject(`Neue Anmeldung: ${data.vorname} ${data.nachname}`)
    .text(buildBody(data))
    .tag('anmeldung')
    .send()

  console.log('Lettermint email sent', {
    message_id: response.message_id,
    status: response.status,
  })
}
