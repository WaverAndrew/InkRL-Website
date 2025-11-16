'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import MetricCard from './MetricCard'
import Section from './Section'

const limits = [
  'Slow (4–8 weeks)',
  'Resource-heavy',
  'Traffic-dependent',
  'Low hit rate (~1 in 8)',
]

export default function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <Section id="problem" className="bg-paper">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-4xl md:text-5xl font-medium mb-16 text-center"
        >
          The Problem
        </motion.h2>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <MetricCard
            value="2"
            suffix="%"
            label="Median CTR across industries"
            delay={0.1}
          />
          <MetricCard
            value="5"
            suffix="%"
            label="CTR of top performers"
            delay={0.2}
          />
          <MetricCard
            value={294}
            label="Extra clicks per 10k sends when moving from 'average' to 'top-quartile' (+2.94 pts)"
            delay={0.3}
          />
        </div>

        {/* A/B Testing Limits */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-mono text-2xl md:text-3xl font-medium mb-8"
          >
            Traditional A/B Testing Limits
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {limits.map((limit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-3 p-4 border-l-2 border-ink/20"
              >
                <span className="text-ink font-mono">•</span>
                <span className="font-sans text-muted-gray">{limit}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Spend-Optimization Imbalance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="p-8 border-2 border-ink/20 rounded-sm bg-paper"
        >
          <h3 className="font-mono text-2xl font-medium mb-4">
            The Spend-Optimization Imbalance
          </h3>
          <p className="font-sans text-muted-gray leading-relaxed">
            Email marketing remains a top ROI channel: $36+ revenue for ~$1 invested.
            Companies test subject lines inefficiently and disregard body optimization.
          </p>
        </motion.div>
      </div>
    </Section>
  )
}

