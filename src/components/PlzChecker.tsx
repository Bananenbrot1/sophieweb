import { useState } from 'react'

const primaryPlz = [
  '80801',
  '80803',
  '80804',
  '80805',
  '80796',
  '80797',
  '80798',
]
const secondaryPlz = [
  '80799',
  '80333',
  '80335',
  '80336',
  '80538',
  '80539',
  '80636',
  '80637',
]

type PlzStatus = 'idle' | 'empty' | 'primary' | 'secondary' | 'outside'

export function PlzChecker() {
  const [value, setValue] = useState('')
  const [status, setStatus] = useState<PlzStatus>('idle')

  function check() {
    const val = value.trim()
    if (!val) {
      setStatus('empty')
      return
    }
    if (primaryPlz.includes(val)) setStatus('primary')
    else if (secondaryPlz.includes(val)) setStatus('secondary')
    else setStatus('outside')
  }

  const resultClass =
    status === 'empty'
      ? 'text-xs font-semibold text-amber-600'
      : status === 'primary'
        ? 'text-xs font-semibold text-emerald-700'
        : status === 'secondary'
          ? 'text-xs font-semibold text-amber-700'
          : status === 'outside'
            ? 'text-xs font-semibold text-red-600'
            : 'text-xs font-semibold min-h-[1.25rem]'

  const resultText =
    status === 'empty'
      ? 'Bitte gib eine Postleitzahl ein.'
      : status === 'primary'
        ? 'Ja, deine Postleitzahl liegt im Einzugsgebiet um Schwabing-West!'
        : status === 'secondary'
          ? 'In diesem Gebiet betreue ich je nach Auslastung und genauer Lage. Frag gerne an!'
          : status === 'outside'
            ? 'Leider liegt diese Postleitzahl außerhalb meines aktuellen Betreuungsradius. Nutze gerne die Suchhilfen.'
            : ''

  return (
    <div className="bg-white rounded-xl p-8 border border-stone-200/60 shadow-sm space-y-4">
      <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-900 flex items-center justify-center">
        <svg
          className="w-6 h-6"
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
      </div>
      <h3 className="font-bold text-lg text-stone-900">PLZ abgleichen</h3>
      <p className="text-xs text-stone-500 leading-relaxed">
        Gib deine Postleitzahl ein, um sofort zu prüfen, ob du in meinem
        Betreuungsradius wohnst.
      </p>

      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              check()
            }
          }}
          placeholder="z.B. 80801"
          className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 text-stone-800 transition-all"
        />
        <button
          type="button"
          onClick={check}
          className="px-5 py-2.5 bg-emerald-900 text-white text-sm font-semibold rounded-lg hover:bg-emerald-950 transition-colors"
        >
          Prüfen
        </button>
      </div>
      <p className={resultClass}>{resultText}</p>
    </div>
  )
}
