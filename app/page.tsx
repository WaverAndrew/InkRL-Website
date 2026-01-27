"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import { HeroNebula } from "@/components/HeroNebula";
import { ParallaxArrow } from "@/components/pipeline/ParallaxArrow";
import { PhonePreview } from "@/components/pipeline/PhonePreview";
import { EmailInput } from "@/components/pipeline/EmailInput";
import { OptimizationPillars } from "@/components/pitch/OptimizationPillars";
import { RLLoopDiagram } from "@/components/pitch/RLLoopDiagram";
import { ContinuousLearning } from "@/components/pitch/ContinuousLearning";
import { History, Users, FlaskConical, Brain, RefreshCw } from "lucide-react";

// Dynamic import for Three.js component to avoid SSR issues
const AudienceNebula = dynamic(
  () => import("@/components/pitch/AudienceNebula").then((mod) => mod.AudienceNebula),
  { ssr: false, loading: () => <div className="h-[400px] w-full animate-pulse rounded-2xl bg-gray-100" /> }
);

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const SectionHeader = ({ 
  step, 
  title, 
  subtitle, 
  icon: Icon 
}: { 
  step: string; 
  title: string; 
  subtitle: string;
  icon: React.ElementType;
}) => (
  <motion.div {...fadeUp} className="mb-12">
    <div className="flex items-center gap-3 mb-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink/5">
        <Icon className="h-5 w-5 text-ink" />
      </div>
      <span className="font-mono text-xs uppercase tracking-widest text-muted-gray">
        {step}
      </span>
    </div>
    <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">{title}</h2>
    <p className="text-lg text-muted-gray max-w-2xl">{subtitle}</p>
  </motion.div>
);

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(17,17,17,0.25),_transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-paper to-transparent" />
      </div>

      <Header />

      <div className="relative z-10 flex min-h-screen flex-col px-6 pb-32 pt-32 sm:px-10 lg:px-24">
        
        {/* ============================================ */}
        {/* HERO SECTION */}
        {/* ============================================ */}
        <section className="relative z-10 max-w-5xl mx-auto text-center mb-32 pt-16">
          {/* Particle nebula behind hero content */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <HeroNebula />
          </div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-ink/5 px-4 py-2 mb-8"
          >
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-muted-gray">
              Autonomous Email Optimization
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-ink mb-6 tracking-tight leading-[1.1]"
          >
            We Make Your Users<br />
            <span className="bg-gradient-to-r from-ink via-ink/80 to-ink bg-clip-text">
              Open More Emails
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-gray max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Stop sending generic blasts. InkRL uses <span className="text-ink font-medium">AI</span> to 
            tailor every message to the individual, guaranteeing higher open rates and 
            <span className="font-bold text-ink"> deeper engagement without the guesswork.</span>
          </motion.p>

          {/* Value prop cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto"
          >
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm group hover:border-ink/20 transition-colors flex flex-col items-center text-center">
              <div className="h-10 w-10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-ink stroke-[1.5]" />
              </div>
              <h3 className="font-semibold text-ink mb-2">Predict Behavior</h3>
              <p className="text-sm text-muted-gray">
                We analyze history to predict exactly what your users want to see next.
              </p>
            </div>
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm group hover:border-ink/20 transition-colors flex flex-col items-center text-center">
              <div className="h-10 w-10 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-ink stroke-[1.5]" />
              </div>
              <h3 className="font-semibold text-ink mb-2">Hyper-Personalize</h3>
              <p className="text-sm text-muted-gray">
                Every subscriber gets a unique subject line tailored to their psychology.
              </p>
            </div>
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm group hover:border-ink/20 transition-colors flex flex-col items-center text-center">
              <div className="h-10 w-10 flex items-center justify-center mb-4">
                <RefreshCw className="h-6 w-6 text-ink stroke-[1.5]" />
              </div>
              <h3 className="font-semibold text-ink mb-2">Autopilot Growth</h3>
              <p className="text-sm text-muted-gray">
                Our AI runs thousands of experiments 24/7 to maximize your metrics independently.
              </p>
            </div>
          </motion.div>
        </section>

        <ParallaxArrow />

        {/* ============================================ */}
        {/* SECTION 1: AUDIENCE UNDERSTANDING */}
        {/* ============================================ */}
        <section className="max-w-6xl mx-auto w-full mb-32">
          <SectionHeader
            step="Step 01"
            title="Stop Guessing About Your Audience"
            subtitle="We don't just 'segment' users. We analyze their entire history to predict their future behavior and uncover what actually drives their engagement."
            icon={History}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Nebula visualization */}
            <motion.div {...fadeUp}>
              <AudienceNebula />
            </motion.div>

            {/* Text content */}
            <motion.div {...fadeUp} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-ink">
                  From Chaos to Clarity
                </h3>
                <p className="text-muted-gray leading-relaxed">
                  Every subscriber in your list is unique. We analyze their interaction history, 
                  opens, clicks, time spent, preferences and automatically cluster them into 
                  meaningful segments.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-500">1</span>
                  </div>
                  <p className="text-sm text-muted-gray">
                    <span className="text-ink font-medium">Analyze history</span> we look at past campaigns to see what worked
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-purple-500">2</span>
                  </div>
                  <p className="text-sm text-muted-gray">
                    <span className="text-ink font-medium">Map interests</span> we identify the unique habits of every subscriber
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-green-500">3</span>
                  </div>
                  <p className="text-sm text-muted-gray">
                    <span className="text-ink font-medium">Group audiences</span> natural segments emerge automatically
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-muted-gray italic">
                  &quot;We found 12 distinct audience segments in our newsletter that we never knew existed.&quot;
                  <span className="ml-1 not-italic opacity-70">— from Beta Tester</span>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 2: TWO OPTIMIZATION VERTICALS */}
        {/* ============================================ */}
        <section className="max-w-6xl mx-auto w-full mb-32">
          <SectionHeader
            step="Step 02"
            title="Optimization That Actually Works"
            subtitle="For each user, we optimize both the content they see and the way it's framed. It's not magic: it's math, and it wins every time."
            icon={Users}
          />

          <OptimizationPillars />
        </section>

        <ParallaxArrow />

        {/* ============================================ */}
        {/* SECTION 3: TEMPLATE INPUT & OPEN RATE */}
        {/* ============================================ */}
        <section className="max-w-6xl mx-auto w-full mb-32">
          <SectionHeader
            step="Step 03"
            title="You Write the Story. We Ensure the Read."
            subtitle="Don't let good content go unnoticed. We capture attention by perfecting the subject and preview text for every single subscriber."
            icon={Brain}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Email Input Visualization */}
            <motion.div {...fadeUp} className="order-2 lg:order-1">
              <EmailInput />
            </motion.div>

            {/* Right: Text Content */}
            <motion.div {...fadeUp} className="space-y-6 order-1 lg:order-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-ink">
                  Maximum Opens, Minimum Effort
                </h3>
                <p className="text-muted-gray leading-relaxed">
                  The subject line and preview text are the gatekeepers. 
                  InkRL rigorously optimizes these two elements for every single user to ensure 
                  your emails actually get opened.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white/60 rounded-xl border border-gray-100">
                  <p className="text-sm font-semibold text-ink mb-1">Subject Line Optimization</p>
                  <p className="text-xs text-muted-gray">
                    We test tone, length, emoji usage, keywords, hooks, and more to find what stops the scroll for each user.
                  </p>
                </div>
                <div className="p-4 bg-white/60 rounded-xl border border-gray-100">
                  <p className="text-sm font-semibold text-ink mb-1">Preview Text Optimization</p>
                  <p className="text-xs text-muted-gray">
                    We craft the perfect companion hook that complements the subject line and forces the click.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 4: AUTONOMOUS EXPERIMENTATION */}
        {/* ============================================ */}
        <section className="max-w-6xl mx-auto w-full mb-32">
          <SectionHeader
            step="Step 04"
            title="Relentless Optimization"
            subtitle="While you sleep, our AI runs thousands of micro-experiments, automatically dropping what fails and keeping what works."
            icon={FlaskConical}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <motion.div {...fadeUp} className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-ink">
                  Beyond A/B Testing
                </h3>
                <p className="text-muted-gray leading-relaxed">
                  Traditional A/B testing is dead. Our system runs thousands of 
                  micro-experiments simultaneously, evolving copy through generations of 
                  optimization until we dominate the inbox.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/60 border border-gray-100">
                  <p className="text-2xl font-bold text-ink mb-1">1000x</p>
                  <p className="text-xs text-muted-gray">More experiments per campaign</p>
                </div>
                <div className="p-4 rounded-xl bg-white/60 border border-gray-100">
                  <p className="text-2xl font-bold text-ink mb-1">+44%</p>
                  <p className="text-xs text-muted-gray">Engagement Rise</p>
                </div>
                <div className="p-4 rounded-xl bg-white/60 border border-gray-100">
                  <p className="text-2xl font-bold text-ink mb-1">0</p>
                  <p className="text-xs text-muted-gray">Manual intervention needed</p>
                </div>
                <div className="p-4 rounded-xl bg-white/60 border border-gray-100">
                  <p className="text-2xl font-bold text-ink mb-1">24/7</p>
                  <p className="text-xs text-muted-gray">Continuous improvement</p>
                </div>
              </div>
            </motion.div>

            {/* Phone preview */}
            <motion.div {...fadeUp} className="order-1 lg:order-2">
              <PhonePreview />
            </motion.div>
          </div>
        </section>

        <ParallaxArrow />

        {/* ============================================ */}
        {/* SECTION 5: CONTINUOUS LEARNING */}
        {/* ============================================ */}
        <section className="max-w-6xl mx-auto w-full mb-32">
          <SectionHeader
            step="Step 05"
            title="Observe, Learn, Win"
            subtitle="Every email sent is a data point. We observe reactions, update our models, and improve your metrics continuously and automatically."
            icon={RefreshCw}
          />

          <ContinuousLearning />
        </section>

        {/* ============================================ */}
        {/* FINAL CTA */}
        {/* ============================================ */}
        <motion.section
          {...fadeUp}
          className="max-w-3xl mx-auto text-center py-16 border-t border-dashed border-gray-200"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">
            Ready to Transform Your Email Engagement?
          </h2>
          <p className="text-lg text-muted-gray mb-8 max-w-xl mx-auto">
            Join the newsletters that have stopped guessing and started winning. 
            Let InkRL optimize every word for max revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@inkrl.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-ink/90"
            >
              Schedule a Demo
            </a>
            <a
              href="/manifesto"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 bg-white/50 px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-ink/5"
            >
              Read Our Manifesto
            </a>
          </div>
        </motion.section>

      </div>
    </main>
  );
}
