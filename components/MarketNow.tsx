'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Section from './Section'

const points = [
  'LLMs: costs falling, quality rising',
  'Initial customers: DTC brands & PLG SaaS',
  'Expansion: Landing pages, short-form ad copy & lifecycle email subject lines',
  'SOTA coding agents use multi-turn RL on execution feedback (generate→run→test→fix); we apply the same pattern.',
]

export default function MarketNow() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <Section id="market" className="bg-paper">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-4xl md:text-5xl font-medium mb-12 text-center"
        >
          Market & Why now
        </motion.h2>

        <div className="space-y-6">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 border-l-2 border-ink/20 hover:border-ink/40 transition-colors"
            >
              <span className="text-ink font-mono text-xl">•</span>
              <p className="font-sans text-muted-gray leading-relaxed flex-1">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

