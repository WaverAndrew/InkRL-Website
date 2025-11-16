'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Section from './Section'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const steps = [
  {
    num: 1,
    title: 'LLM Generation',
    description: 'A campaign brief goes into the LLM; generate multiple candidate variants.',
  },
  {
    num: 2,
    title: 'Filtering',
    description: 'Filters enforce brand and compliance rules.',
  },
  {
    num: 3,
    title: 'Bandit/RL Selection',
    description: 'Bandit/RL selector serves the best variant to each audience based on past performance.',
  },
  {
    num: 4,
    title: 'Continuous Learning',
    description: 'Outcomes (clicks/conversions) feed back; LoRA tuning updates continuously in real time.',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  useEffect(() => {
    if (!timelineRef.current) return

    const nodes = timelineRef.current.querySelectorAll('.timeline-node')
    const lines = timelineRef.current.querySelectorAll('.timeline-line')

    nodes.forEach((node, i) => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress
          const nodeProgress = (progress * 4) - i
          if (nodeProgress >= 0 && nodeProgress <= 1) {
            gsap.to(node, {
              scale: 1.2,
              opacity: 1,
              duration: 0.3,
            })
            if (i < lines.length) {
              gsap.to(lines[i], {
                strokeDashoffset: 0,
                duration: 0.3,
              })
            }
          } else {
            gsap.to(node, {
              scale: 1,
              opacity: 0.5,
              duration: 0.3,
            })
          }
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <Section id="how-it-works" ref={sectionRef} className="bg-paper">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-4xl md:text-5xl font-medium mb-16 text-center"
        >
          How it works
        </motion.h2>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mb-24">
          <div className="flex items-center justify-between relative">
            {/* Connector Line */}
            <svg
              className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 pointer-events-none"
              style={{ zIndex: 0 }}
              viewBox="0 0 1000 2"
              preserveAspectRatio="none"
            >
              <motion.line
                x1="0"
                y1="1"
                x2="1000"
                y2="1"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="1000"
                initial={{ strokeDashoffset: 1000 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="timeline-line text-ink/20"
              />
            </svg>

            {steps.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0.5, scale: 1 }}
                  className="timeline-node w-16 h-16 rounded-full border-2 border-ink flex items-center justify-center bg-paper"
                >
                  <span className="font-mono text-xl font-medium">{step.num}</span>
                </motion.div>
                <div className="mt-4 text-center max-w-[200px]">
                  <h3 className="font-mono text-sm font-medium mb-2">{step.title}</h3>
                  <p className="font-sans text-xs text-muted-gray">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MVP Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-2 border-ink/20 rounded-sm p-8 bg-paper"
        >
          <h3 className="font-mono text-2xl font-medium mb-6">MVP (Email Marketing Optimization)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-mono text-sm font-medium mb-3 text-muted-gray">Input</h4>
              <ul className="space-y-2 font-sans text-sm text-muted-gray">
                <li>• Email Body</li>
                <li>• Company Style guidelines</li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-sm font-medium mb-3 text-muted-gray">Target</h4>
              <ul className="space-y-2 font-sans text-sm text-muted-gray">
                <li>• Email Object</li>
                <li>• Email Preview</li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-sm font-medium mb-3 text-muted-gray">Process</h4>
              <ul className="space-y-2 font-sans text-sm text-muted-gray">
                <li>1. LLM variant generation</li>
                <li>2. Multi-turn RL with open rate feedback</li>
                <li>3. Continuous learning per segment/context</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

