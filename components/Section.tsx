'use client'

import { ReactNode, forwardRef } from 'react'

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ children, id, className = '' }, ref) => {
    return (
      <section ref={ref} id={id} className={`py-24 md:py-32 ${className}`}>
        <div className="container mx-auto px-6">
          {children}
        </div>
      </section>
    )
  }
)

Section.displayName = 'Section'

export default Section

