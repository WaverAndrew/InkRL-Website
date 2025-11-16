'use client'

import { motion } from 'framer-motion'

interface InkUnderlineProps {
  children: React.ReactNode
  className?: string
}

export default function InkUnderline({ children, className }: InkUnderlineProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <motion.svg
        className="absolute bottom-0 left-0 w-full"
        height="2"
        viewBox="0 0 100 2"
        preserveAspectRatio="none"
        initial={{ pathLength: 0 }}
        whileHover={{ pathLength: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.path
          d="M 0 1 Q 25 0.5, 50 1 T 100 1"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </motion.svg>
    </span>
  )
}

