'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Section from './Section'

const solutions = [
  'Continuously optimized copy aligned to traffic intent & segment.',
  'Focused offers + clear CTAs + proof.',
  'Measurement loop that finds wins faster than classic A/B.',
]

export default function SolutionSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, 0])

  return (
    <Section id="solution" className="bg-paper">
      <div ref={containerRef} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Sticky Left Column */}
          <motion.div
            ref={stickyRef}
            className="lg:sticky lg:top-24"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-mono text-4xl md:text-5xl font-medium mb-4">
              What marketers need
            </h2>
            <div className="h-px w-24 bg-ink mb-4" />
            <h3 className="font-mono text-3xl md:text-4xl font-medium">
              What we build
            </h3>
          </motion.div>

          {/* Right Column - Cards */}
          <div className="space-y-6">
            {solutions.map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, rotate: -5 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.2,
                  type: 'spring',
                  stiffness: 100,
                }}
                style={{ rotate }}
                whileHover={{ rotate: 2, scale: 1.02 }}
                className="p-6 border-2 border-ink/20 rounded-sm bg-paper shadow-sm hover:border-ink/40 transition-colors"
              >
                <p className="font-sans text-muted-gray leading-relaxed">{solution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

