import { useServerFn } from '@tanstack/react-start'
import { useState, type FormEvent, type HTMLAttributes } from 'react'
import { submitAnmeldung } from '../server/submitAnmeldung'
import { anmeldungSchema } from '../lib/anmeldung-schema'

const fieldClass =
  'w-full px-4 py-2.5 text-sm bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 text-stone-800 transition-all'

const labelClass =
  'block text-xs uppercase tracking-wider text-stone-500 font-bold mb-1.5 min-h-[2.5rem] leading-snug'

const legendClass =
  'block text-xs uppercase tracking-wider text-stone-500 font-bold mb-1.5'

function tomorrowIsoDate() {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d.toISOString().slice(0, 10)
}

export function AnmeldungForm() {
  const submit = useServerFn(submitAnmeldung)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle',
  )
  const [errorMessage, setErrorMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')
    setFieldErrors({})

    const form = e.currentTarget
    const fd = new FormData(form)

    const raw = {
      vorname: String(fd.get('vorname') ?? ''),
      nachname: String(fd.get('nachname') ?? ''),
      geburtsdatum: String(fd.get('geburtsdatum') ?? ''),
      strasse: String(fd.get('strasse') ?? ''),
      plz: String(fd.get('plz') ?? ''),
      ort: String(fd.get('ort') ?? ''),
      telefon: String(fd.get('telefon') ?? ''),
      email: String(fd.get('email') ?? ''),
      versicherungsart: String(fd.get('versicherungsart') ?? ''),
      kassenik: String(fd.get('kassenik') ?? ''),
      versichertennummer: String(fd.get('versichertennummer') ?? ''),
      entbindungstermin: String(fd.get('entbindungstermin') ?? ''),
      para: String(fd.get('para') ?? ''),
      gravida: String(fd.get('gravida') ?? ''),
      bemerkung: String(fd.get('bemerkung') ?? ''),
    }

    const parsed = anmeldungSchema.safeParse(raw)
    if (!parsed.success) {
      const errors: Record<string, string> = {}
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? 'form')
        if (!errors[key]) errors[key] = issue.message
      }
      setFieldErrors(errors)
      setStatus('error')
      setErrorMessage('Bitte prüfe die markierten Felder.')
      return
    }

    try {
      await submit({ data: parsed.data })
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Anmeldung fehlgeschlagen. Bitte später erneut versuchen.',
      )
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Vorname *"
          name="vorname"
          required
          error={fieldErrors.vorname}
        />
        <Field
          label="Nachname *"
          name="nachname"
          required
          error={fieldErrors.nachname}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Geburtsdatum *"
          name="geburtsdatum"
          type="date"
          required
          error={fieldErrors.geburtsdatum}
        />
        <Field
          label="E-Mail *"
          name="email"
          type="email"
          required
          error={fieldErrors.email}
        />
      </div>

      <Field
        label="Straße, Nr. *"
        name="strasse"
        required
        error={fieldErrors.strasse}
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="PLZ *"
          name="plz"
          inputMode="numeric"
          pattern="[0-9]{5}"
          required
          error={fieldErrors.plz}
        />
        <Field label="Ort *" name="ort" required error={fieldErrors.ort} />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Telefon" name="telefon" type="tel" />
        <Field
          label="Entbindungstermin"
          name="entbindungstermin"
          type="date"
          min={tomorrowIsoDate()}
          error={fieldErrors.entbindungstermin}
        />
      </div>

      <fieldset>
        <legend className={legendClass}>Versicherungsart *</legend>
        <div className="flex gap-6 pt-1">
          <label className="flex items-center gap-2 text-sm text-stone-700">
            <input
              type="radio"
              name="versicherungsart"
              value="gesetzlich"
              required
              className="text-emerald-900 focus:ring-emerald-800 border-stone-300"
            />
            gesetzlich
          </label>
          <label className="flex items-center gap-2 text-sm text-stone-700">
            <input
              type="radio"
              name="versicherungsart"
              value="privat"
              className="text-emerald-900 focus:ring-emerald-800 border-stone-300"
            />
            privat
          </label>
        </div>
        {fieldErrors.versicherungsart ? (
          <p className="mt-1.5 text-xs text-red-600">
            {fieldErrors.versicherungsart}
          </p>
        ) : null}
      </fieldset>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="IK der Krankenkasse *"
          name="kassenik"
          required
          error={fieldErrors.kassenik}
        />
        <Field
          label="Versichertennummer *"
          name="versichertennummer"
          required
          error={fieldErrors.versichertennummer}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Schwangerschaften (inkl. jetziger) *"
          name="para"
          type="number"
          min={1}
          max={9}
          required
          error={fieldErrors.para}
        />
        <Field
          label="Bisherige Geburten *"
          name="gravida"
          type="number"
          min={0}
          max={9}
          required
          error={fieldErrors.gravida}
        />
      </div>

      <div>
        <label htmlFor="bemerkung" className={legendClass}>
          Bemerkung
        </label>
        <textarea
          id="bemerkung"
          name="bemerkung"
          rows={4}
          placeholder="Optional: gewünschte Betreuung, Schwangerschaftswoche, Hinweise…"
          className={fieldClass}
        />
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          required
          className="mt-1 h-4 w-4 text-emerald-900 focus:ring-emerald-800 border-stone-300 rounded"
        />
        <label
          htmlFor="privacy"
          className="ml-2 text-xs text-stone-500 leading-normal"
        >
          Ich stimme zu, dass meine Daten zur Bearbeitung der Anmeldung
          verarbeitet und an das Praxisverwaltungssystem übermittelt werden. *
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3 bg-emerald-900 text-white text-sm font-semibold rounded-lg hover:bg-emerald-950 transition-colors shadow-sm disabled:opacity-60"
      >
        {status === 'loading' ? 'Wird gesendet…' : 'Anmeldung absenden'}
      </button>

      {status === 'success' ? (
        <p className="text-xs text-emerald-700 font-semibold text-center mt-3">
          Deine Anmeldung wurde erfolgreich übermittelt. Ich melde mich bald bei
          dir!
        </p>
      ) : null}

      {status === 'error' && errorMessage ? (
        <p className="text-xs text-red-600 font-semibold text-center mt-3">
          {errorMessage}
        </p>
      ) : null}
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  error,
  ...rest
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  error?: string
  inputMode?: HTMLAttributes<HTMLInputElement>['inputMode']
  pattern?: string
  min?: number | string
  max?: number
}) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className={fieldClass}
        {...rest}
      />
      {error ? <p className="mt-1.5 text-xs text-red-600">{error}</p> : null}
    </div>
  )
}
