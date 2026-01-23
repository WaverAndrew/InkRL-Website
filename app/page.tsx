"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import { StylographicPen } from "@/components/StylographicPen";
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
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 hidden lg:block pointer-events-none">
            <StylographicPen />
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
            Every Email,<br />
            <span className="bg-gradient-to-r from-ink via-ink/80 to-ink bg-clip-text">
              Personalized to Engage
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-gray max-w-3xl mx-auto leading-relaxed mb-12"
          >
            InkRL uses <span className="text-ink font-medium">AI</span> to understand 
            your audience and personalize every campaign email, maximizing engagement by learning 
            <span className="font-bold text-ink"> what each subscriber wants to read and how they want it written.</span>
          </motion.p>

          {/* Value prop cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto"
          >
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm group hover:border-ink/20 transition-colors">
              <div className="h-10 w-10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-ink stroke-[1.5]" />
              </div>
              <h3 className="font-semibold text-ink mb-2">Understand Behavior</h3>
              <p className="text-sm text-muted-gray">
                Analyze historical interactions to understand each user&apos;s preferences and patterns.
              </p>
            </div>
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm group hover:border-ink/20 transition-colors">
              <div className="h-10 w-10 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-ink stroke-[1.5]" />
              </div>
              <h3 className="font-semibold text-ink mb-2">Personalize Content</h3>
              <p className="text-sm text-muted-gray">
                Tailor what content to show and how it&apos;s written for maximum impact.
              </p>
            </div>
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm group hover:border-ink/20 transition-colors">
              <div className="h-10 w-10 flex items-center justify-center mb-4">
                <RefreshCw className="h-6 w-6 text-ink stroke-[1.5]" />
              </div>
              <h3 className="font-semibold text-ink mb-2">Optimize Automatically</h3>
              <p className="text-sm text-muted-gray">
                Continuous experimentation without manual A/B testing: the system learns and adapts.
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
            title="We Study Your Audience"
            subtitle="By analyzing the history of user interactions, we build deep behavioral profiles that reveal what each subscriber truly responds to."
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
            title="Two Dimensions of Optimization"
            subtitle="For each user, we optimize both what content to include and how to write it — the winning combination for maximum engagement."
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
            title="You Set the Template, We Do the Rest"
            subtitle="Focus on your core message. We take your campaign template and automatically generate thousands of personalized variations optimized specifically for open rates."
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
                  The subject line and preview text are the gatekeepers of your content. 
                  InkRL rigorously optimizes these two elements for every single user to ensure 
                  your emails actually get opened.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white/60 rounded-xl border border-gray-100">
                  <p className="text-sm font-semibold text-ink mb-1">Subject Line Optimization</p>
                  <p className="text-xs text-muted-gray">
                    We test tone, length, emoji usage, and keywords to find what stops the scroll for each user.
                  </p>
                </div>
                <div className="p-4 bg-white/60 rounded-xl border border-gray-100">
                  <p className="text-sm font-semibold text-ink mb-1">Preview Text Optimization</p>
                  <p className="text-xs text-muted-gray">
                    We craft the perfect companion hook that complements the subject line and drives the click.
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
            title="Autonomous Experimentation"
            subtitle="We continuously test hypotheses about content and style for each user segment, learning what works without manual intervention."
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
                  Traditional A/B testing is slow and limited. Our system runs thousands of 
                  micro-experiments simultaneously, evolving copy through generations of 
                  optimization until it finds what works for each segment.
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
            title="Observe, Learn, Repeat"
            subtitle="Every email sent is an opportunity to learn. We observe reactions, update our models, and improve — continuously, autonomously."
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
            Join the newsletters that have stopped guessing and started learning. 
            Let InkRL optimize every word for every subscriber.
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
