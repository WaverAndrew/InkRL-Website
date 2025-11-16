'use client'

import { useSmoothScroll } from '@/lib/scroll'
import { useEffect } from 'react'

export default function SmoothScroll() {
  useSmoothScroll()

  useEffect(() => {
    // Refresh ScrollTrigger on mount
    if (typeof window !== 'undefined') {
      const { ScrollTrigger } = require('gsap/ScrollTrigger')
      ScrollTrigger.refresh()
    }
  }, [])

  return null
}

