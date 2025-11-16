'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Section from './Section'

const markers = [
  {
    label: 'Current tools: Stop at generation (LLMs)',
    tools: 'Jasper, Copy.ai, Writesonic',
  },
  {
    label: 'Stop at testing (A/B platforms)',
    tools: 'Optimizely, VWO',
  },
]

const edgePoints = [
  'LLM variant generation',
  'Multi-turn RL with live feedback',
  'Continuous learning per segment/context',
]

export default function EdgeContinuum() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

  return (
    <Section id="edge" ref={containerRef} className="bg-paper overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-4xl md:text-5xl font-medium mb-16 text-center"
        >
          Our edge
        </motion.h2>

        {/* Horizontal Scrolling Continuum */}
        <div className="relative h-[400px] overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex items-center gap-16 h-full"
          >
            {markers.map((marker, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex-shrink-0 w-[400px] p-6 border-2 border-ink/20 rounded-sm bg-paper"
              >
                <h3 className="font-mono text-lg font-medium mb-2">{marker.label}</h3>
                <p className="font-sans text-sm text-muted-gray">{marker.tools}</p>
              </motion.div>
            ))}

            {/* Final inkRL Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6, type: 'spring' }}
              whileInView={{ scale: 1.05 }}
              className="flex-shrink-0 w-[400px] p-8 border-2 border-ink rounded-sm bg-ink text-paper"
            >
              <h3 className="font-mono text-2xl font-medium mb-4">inkRL</h3>
              <ul className="space-y-2">
                {edgePoints.map((point, i) => (
                  <li key={i} className="font-sans text-sm flex items-start gap-2">
                    <span>•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

