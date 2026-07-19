import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-200 py-12 border-t border-emerald-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-emerald-400">
          <p>© 2026 Hebamme Sophie Mesenich.</p>
          <div className="space-x-3">
            <Link
              to="/impressum"
              className="hover:text-white transition-colors"
            >
              Impressum
            </Link>
            <span>|</span>
            <Link
              to="/datenschutz"
              className="hover:text-white transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
