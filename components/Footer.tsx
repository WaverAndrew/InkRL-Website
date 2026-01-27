'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="relative h-6 w-24 mb-4">
              <Image
                src="/images/full_logo-removebg-preview.png"
                alt="inkRL"
                fill
                className="object-contain object-left"
                sizes="96px"
              />
            </div>
            <p className="text-sm text-muted-gray font-sans">
              Where copy learns.
            </p>
          </div>
          <div>
            <h3 className="font-mono text-lg font-medium mb-4">Contact</h3>
            <div className="space-y-2 text-sm font-sans text-muted-gray">
              <a
                href="mailto:andrea@inkrl.com"
                className="block hover:text-ink transition-colors"
              >
                andrea@inkrl.com
              </a>
              <a
                href="mailto:vittorio@inkrl.com"
                className="block hover:text-ink transition-colors"
              >
                vittorio@inkrl.com
              </a>
              <a
                href="mailto:filippo@inkrl.com"
                className="block hover:text-ink transition-colors"
              >
                filippo@inkrl.com
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

