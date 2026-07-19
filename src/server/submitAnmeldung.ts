import { createServerFn } from '@tanstack/react-start'
import { anmeldungSchema } from '../lib/anmeldung-schema'

const MIYA_URL = 'https://login.miya360.de/apps/call/portal/anmeldung'

export const submitAnmeldung = createServerFn({ method: 'POST' })
  .validator(anmeldungSchema)
  .handler(async ({ data }) => {
    const token = process.env.MIYA_TOKEN
    const user = process.env.MIYA_USER

    if (!token || !user) {
      throw new Error(
        'Anmeldung ist derzeit nicht konfiguriert. Bitte später erneut versuchen.',
      )
    }

    const payload = {
      token,
      user,
      vorname: data.vorname,
      nachname: data.nachname,
      strasse: data.strasse,
      plz: data.plz,
      ort: data.ort,
      telefonNummer: data.telefon || '',
      email: data.email,
      geburtsdatum: data.geburtsdatum,
      versicherungsart: data.versicherungsart === 'gesetzlich' ? 'G' : 'P',
      kassenik: data.kassenik,
      versichertennummer: data.versichertennummer,
      entbindungstermin: data.entbindungstermin || '',
      geburtsdatumkind: '',
      para: String(data.para).slice(0, 1),
      gravida: String(data.gravida).slice(0, 1),
      bemerkung: data.bemerkung || '',
    }

    const response = await fetch(MIYA_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const text = await response.text()

    if (!response.ok || !text.includes('OK')) {
      throw new Error(
        'Anmeldung fehlgeschlagen. Bitte prüfe die IK-Nummer und versuche es erneut.',
      )
    }

    return { ok: true as const }
  })
