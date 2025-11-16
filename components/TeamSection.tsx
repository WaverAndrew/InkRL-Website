'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Section from './Section'
import TeamGrid from './TeamGrid'

export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <Section id="team" ref={ref} className="bg-paper">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-4xl md:text-5xl font-medium mb-16 text-center"
        >
          Team
        </motion.h2>
        <TeamGrid />
      </div>
    </Section>
  )
}

