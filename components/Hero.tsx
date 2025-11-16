'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import InkLogo from './InkLogo'
import Link from 'next/link'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  const letters = 'inkRL'.split('')

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax ink splash background */}
      <motion.div
        style={{ y, opacity: useTransform(scrollYProgress, [0, 1], [0.3, 0]) }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <InkLogo className="w-96 h-96 text-ink/5" />
      </motion.div>

      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 text-center px-6"
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <InkLogo className="w-12 h-12" />
          <div className="flex items-baseline gap-2">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="font-mono text-6xl md:text-8xl font-medium"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="font-sans text-2xl md:text-3xl text-muted-gray mb-12"
        >
          <span className="line-through opacity-50">Landing</span>{' '}
          <span className="font-medium">Learning pages</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#demo-section"
            className="px-8 py-3 border-2 border-ink rounded-sm font-sans text-sm hover:bg-ink hover:text-paper transition-colors relative group"
          >
            Get a demo
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ink group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            href="#how-it-works"
            className="px-8 py-3 font-sans text-sm text-muted-gray hover:text-ink transition-colors relative group"
          >
            How it works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ink group-hover:w-full transition-all duration-300" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

