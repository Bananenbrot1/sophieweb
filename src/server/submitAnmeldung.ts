import { createServerFn } from '@tanstack/react-start'
import { anmeldungSchema } from '../lib/anmeldung-schema'
import { sendAnmeldungEmail } from './sendAnmeldungEmail'

export const submitAnmeldung = createServerFn({ method: 'POST' })
  .validator(anmeldungSchema)
  .handler(async ({ data }) => {
    const idKurs = process.env.MIYA_KURS_ID
    const slug = process.env.MIYA_PORTAL_SLUG || 'hebamme-sophie'

    if (!idKurs) {
      throw new Error(
        'Anmeldung ist derzeit nicht konfiguriert. Bitte später erneut versuchen.',
      )
    }

    const url = `https://login.miya360.de/apps/mymiya/${slug}/course-portal/course/${idKurs}/register`

    const streetMatch = data.strasse.match(/^(.*?)(?:\s+(\d+\s*[a-zA-Z]?))?$/)

    const payload = {
      firstname: data.vorname,
      lastname: data.nachname,
      birthdate: data.geburtsdatum,
      street: streetMatch?.[1]?.trim() || data.strasse,
      streetNumber: streetMatch?.[2]?.trim() || '',
      postalCode: data.plz,
      city: data.ort,
      stateId: 'BY',
      email: data.email,
      phoneNumber: data.telefon || '',
      insuranceType: data.versicherungsart === 'gesetzlich' ? 'G' : 'P',
      insuranceNumber: data.kassenik,
      insuranceName: '',
      insurantNumber: data.versichertennummer,
      etDate: data.entbindungstermin || '',
      childBirthDate: '',
    }

    console.log('miya request', { url, payload })

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const text = await response.text()
    console.log('miya response', {
      status: response.status,
      body: text,
    })

    if (!response.ok) {
      throw new Error(
        'Anmeldung fehlgeschlagen. Bitte prüfe die Angaben und versuche es erneut.',
      )
    }

    try {
      await sendAnmeldungEmail(data)
    } catch (err) {
      console.error('Failed to send Anmeldung notification email', err)
    }

    return { ok: true as const }
  })
