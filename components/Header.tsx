'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import InkLogo from './InkLogo'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/80 backdrop-blur-sm border-b border-ink/10">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <InkLogo className="w-8 h-8" />
          <span className="font-mono text-xl font-medium">inkRL</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="#how-it-works"
            className="text-sm font-sans hover:underline underline-offset-4"
          >
            How it works
          </Link>
          <Link
            href="/team"
            className="text-sm font-sans hover:underline underline-offset-4"
          >
            Team
          </Link>
          <Link
            href="#demo-section"
            className="px-4 py-2 text-sm font-sans border border-ink rounded-sm hover:bg-ink hover:text-paper transition-colors"
          >
            Get a demo
          </Link>
        </div>
      </nav>
    </header>
  )
}

