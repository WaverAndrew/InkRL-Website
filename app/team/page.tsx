'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProgressBar from '@/components/ProgressBar'
import TeamGrid from '@/components/TeamGrid'
import Section from '@/components/Section'

export default function TeamPage() {
  return (
    <main className="relative">
      <ProgressBar />
      <Header />
      <Section className="pt-32">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-mono text-4xl md:text-5xl font-medium mb-16 text-center">
            Team
          </h1>
          <TeamGrid />
        </div>
      </Section>
      <Footer />
    </main>
  )
}

