'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-mono text-lg font-medium mb-4">inkRL</h3>
            <p className="text-sm text-muted-gray font-sans">
              Learning pages. Continuously optimized copy.
            </p>
          </div>
          <div>
            <h3 className="font-mono text-lg font-medium mb-4">Contact</h3>
            <div className="space-y-2 text-sm font-sans text-muted-gray">
              <a
                href="mailto:andrea.bonarrigo@studbocconi.it"
                className="block hover:text-ink transition-colors"
              >
                andrea.bonarrigo@studbocconi.it
              </a>
              <a
                href="mailto:vittorio.garavelli@studbocconi.it"
                className="block hover:text-ink transition-colors"
              >
                vittorio.garavelli@studbocconi.it
              </a>
              <a
                href="mailto:filippo.gombac@studbocconi.it"
                className="block hover:text-ink transition-colors"
              >
                filippo.gombac@studbocconi.it
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-mono text-lg font-medium mb-4">Links</h3>
            <div className="space-y-2 text-sm font-sans">
              <Link
                href="/"
                className="block text-muted-gray hover:text-ink transition-colors"
              >
                Home
              </Link>
              <Link
                href="/team"
                className="block text-muted-gray hover:text-ink transition-colors"
              >
                Team
              </Link>
              <Link
                href="#how-it-works"
                className="block text-muted-gray hover:text-ink transition-colors"
              >
                How it works
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-ink/10 text-center text-sm text-muted-gray font-sans">
          <p>&copy; {new Date().getFullYear()} inkRL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

