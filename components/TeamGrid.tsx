'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const team = [
  {
    name: 'Andrea Bonarrigo',
    role: 'Founder',
    bio: [
      'Bocconi / visiting UC Santa Cruz',
      'Founder (Ubooks)',
      'Ex. Amazon Tech PM',
      '2x UPENN hackathon winner',
      'Y Combinator Start Up School',
    ],
    image: '/avatars/andrea.jpg',
    email: 'andrea.bonarrigo@studbocconi.it',
  },
  {
    name: 'Vittorio Garavelli',
    role: 'Co-Founder',
    bio: [
      'Bocconi / visiting UC Berkeley',
      'RL research @ Bocconi',
      'Co-Founder (Web Dev & SEO)',
      'Ex. M&A Analyst',
    ],
    image: '/avatars/vittorio.jpg',
    email: 'vittorio.garavelli@studbocconi.it',
  },
  {
    name: 'Filippo Gombac',
    role: 'Co-Founder',
    bio: [
      'Bocconi / visiting UCL',
      'RL research @ Bocconi',
      'ML research @ Bocconi',
      'Ex. M&A Analyst',
    ],
    image: '/avatars/filippo.jpg',
    email: 'filippo.gombac@studbocconi.it',
  },
]

export default function TeamGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {team.map((member, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-ink/20"
          >
            <div className="w-full h-full bg-muted-gray/20 flex items-center justify-center">
              <span className="font-mono text-4xl text-muted-gray">
                {member.name.charAt(0)}
              </span>
            </div>
          </motion.div>
          <h3 className="font-mono text-xl font-medium mb-1">{member.name}</h3>
          <p className="font-sans text-sm text-muted-gray mb-4">{member.role}</p>
          <ul className="space-y-1 mb-4 text-left">
            {member.bio.map((item, j) => (
              <li key={j} className="font-sans text-xs text-muted-gray">
                • {item}
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${member.email}`}
            className="inline-block px-4 py-2 text-xs font-sans border border-ink/20 rounded-sm hover:border-ink hover:bg-ink hover:text-paper transition-colors"
          >
            Contact
          </a>
        </motion.div>
      ))}
    </div>
  )
}

