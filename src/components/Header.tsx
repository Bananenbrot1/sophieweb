import { Link } from '@tanstack/react-router'
import { useState } from 'react'

const navLinks = [
  { href: '/#ueber-mich', label: 'Über mich' },
  { href: '/#leistungen', label: 'Leistungen' },
  { href: '/#betreuungsgebiet', label: 'Betreuungsradius' },
  { href: '/#kontakt', label: 'Betreuungsanmeldung' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FCFBF9]/90 border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/logo.svg"
              alt="Logo Sophie Mesenich"
              className="h-11 w-11"
            />
            <span className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-emerald-950">
                Sophie Mesenich
              </span>
              <span className="text-[10px] tracking-widest uppercase text-emerald-700 font-semibold">
                Hebamme in München Schwabing
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8 text-xs font-semibold uppercase tracking-wider text-stone-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-emerald-800 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden text-stone-600 hover:text-emerald-950 focus:outline-none"
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div className="md:hidden bg-[#FCFBF9] border-b border-stone-100 px-6 pt-2 pb-6 space-y-4 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-semibold uppercase tracking-wider text-stone-600 hover:text-emerald-800 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  )
}
