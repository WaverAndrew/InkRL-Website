'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProgressBar from '@/components/ProgressBar'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import HowItWorks from '@/components/HowItWorks'
import MarketNow from '@/components/MarketNow'
import EdgeContinuum from '@/components/EdgeContinuum'
import TeamSection from '@/components/TeamSection'
import DemoForm from '@/components/DemoForm'
import Section from '@/components/Section'

export default function Home() {
  return (
    <main className="relative">
      <ProgressBar />
      <Header />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <MarketNow />
      <EdgeContinuum />
      <TeamSection />
      <Section id="demo-section" className="bg-paper">
        <DemoForm />
      </Section>
      <Footer />
    </main>
  )
}

