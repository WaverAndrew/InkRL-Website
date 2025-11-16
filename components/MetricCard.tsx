'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface MetricCardProps {
  value: string | number
  label: string
  suffix?: string
  delay?: number
}

export default function MetricCard({ value, label, suffix = '', delay = 0 }: MetricCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView || typeof value !== 'number') return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, value])

  const displayValue = typeof value === 'number' ? count : value

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="p-6 border border-ink/20 rounded-sm bg-paper hover:border-ink/40 transition-colors"
    >
      <div className="font-mono text-4xl md:text-5xl font-medium mb-2">
        {displayValue}{suffix}
      </div>
      <div className="text-sm text-muted-gray font-sans">{label}</div>
    </motion.div>
  )
}

