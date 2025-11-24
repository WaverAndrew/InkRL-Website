"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import { EmailInput } from "@/components/demo/EmailInput";
import { UserProfile } from "@/components/demo/UserProfile";
import { GenerationResults, VariantType } from "@/components/demo/GenerationResults";
import { ModelCore } from "@/components/demo/ModelCore";

// --- Hardcoded Data ---
const GENERIC_VARIANTS = [
  { id: "g1", title: "Standard Outreach", subject: "Check out our new features", content: "Hi there, check out our new features.", tags: ["Generic", "Neutral"] },
  { id: "g2", title: "Direct Ask", subject: "Updates for you", content: "We have updates. Click here to see them.", tags: ["Direct", "Short"] },
  { id: "g3", title: "Newsletter Style", subject: "InkRL Monthly Update", content: "Here is what is new at InkRL this month.", tags: ["Informative"] },
];

const PERSONALIZED_VARIANTS = [
  { id: "p1", title: "Tech Focus", subject: "Optimize your workflow", content: "Optimize your workflow with our new engine.", tags: ["Technical", "Efficiency"] },
  { id: "p2", title: "Creative Suite", subject: "Compose better content", content: "Compose better content with our new tools.", tags: ["Creative", "Music-Analogy"] },
  { id: "p3", title: "Early Access", subject: "Exclusive Beta Invite", content: "Be the first to try our latest beta features.", tags: ["Exclusive", "New"] },
];

const REFINED_VARIANTS_MAP: Record<string, typeof GENERIC_VARIANTS> = {
  p1: [
    { id: "r1-1", title: "Dev Productivity", subject: "Ship faster with InkRL", content: "Ship faster with InkRL's new API.", tags: ["Developer", "Speed"] },
    { id: "r1-2", title: "System Scale", subject: "Scale your content ops", content: "Scale your content ops with our robust engine.", tags: ["Enterprise", "Scale"] },
    { id: "r1-3", title: "Integration", subject: "Seamless Integration", content: "Seamlessly integrate InkRL into your stack.", tags: ["Integration"] },
  ],
  p2: [
    { id: "r2-1", title: "Melodic Flow", subject: "Write content that sings", content: "Write content that sings to your audience.", tags: ["Poetic", "Flow"] },
    { id: "r2-2", title: "Rhythm & Pace", subject: "Keep readers engaged", content: "Keep your readers engaged with perfect pacing.", tags: ["Engagement"] },
    { id: "r2-3", title: "Harmonic Tone", subject: "Strike the right chord", content: "Strike the right chord with every email.", tags: ["Tone"] },
  ],
  p3: [
    { id: "r3-1", title: "Beta Invite", subject: "You're invited", content: "You're invited to our exclusive beta program.", tags: ["Invite"] },
    { id: "r3-2", title: "Feedback Loop", subject: "Shape the future", content: "Shape the future of InkRL with your feedback.", tags: ["Community"] },
    { id: "r3-3", title: "VIP Access", subject: "VIP Access Granted", content: "Get VIP access to our newest capabilities.", tags: ["Premium"] },
  ],
};

const DEEP_REFINED_VARIANTS_MAP: Record<string, typeof GENERIC_VARIANTS> = {
  // --- Tech Focus Branch ---
  "r1-1": [ // Dev Productivity
    { id: "dr1-1-1", title: "API Documentation", subject: "Docs: Getting Started", content: "Read our comprehensive API docs to get started.", tags: ["Docs", "Technical"] },
    { id: "dr1-1-2", title: "CLI Tool", subject: "Install InkRL CLI", content: "Automate your workflow with our new CLI tool.", tags: ["CLI", "Automation"] },
    { id: "dr1-1-3", title: "Latency Specs", subject: "Performance Benchmarks", content: "See how we achieve sub-50ms latency globally.", tags: ["Performance", "Stats"] },
  ],
  "r1-2": [ // System Scale
    { id: "dr1-2-1", title: "Load Balancing", subject: "Global Traffic Management", content: "How we handle millions of requests per second.", tags: ["Infrastructure", "Scale"] },
    { id: "dr1-2-2", title: "Uptime SLA", subject: "99.99% Uptime Guarantee", content: "Our commitment to reliability for enterprise.", tags: ["SLA", "Reliability"] },
    { id: "dr1-2-3", title: "Case Study", subject: "Scaling with InkRL", content: "How TechCorp scaled to 10M users with us.", tags: ["Case Study", "Proof"] },
  ],
  "r1-3": [ // Integration
    { id: "dr1-3-1", title: "Webhooks", subject: "Real-time Events", content: "Listen to events and trigger actions instantly.", tags: ["Webhooks", "Real-time"] },
    { id: "dr1-3-2", title: "SDKs", subject: "Official SDKs", content: "Libraries for Python, Node, and Go available now.", tags: ["SDK", "Languages"] },
    { id: "dr1-3-3", title: "Middleware", subject: "Custom Middleware", content: "Inject custom logic into the generation pipeline.", tags: ["Advanced", "Custom"] },
  ],

  // --- Creative Suite Branch ---
  "r2-1": [ // Melodic Flow
    { id: "dr2-1-1", title: "Lyrical Examples", subject: "See the difference", content: "Compare standard copy vs. melodic enhancements.", tags: ["Examples", "Comparison"] },
    { id: "dr2-1-2", title: "Cadence Analysis", subject: "Rhythm Breakdown", content: "Visualizing the syllable stress patterns.", tags: ["Analysis", "Linguistics"] },
    { id: "dr2-1-3", title: "Voice Tuning", subject: "Fine-tune the Voice", content: "Adjust the musicality slider for your brand.", tags: ["Settings", "Control"] },
  ],
  "r2-2": [ // Rhythm & Pace
    { id: "dr2-2-1", title: "Short & Punchy", subject: "High Impact Copy", content: "Short sentences that drive action immediately.", tags: ["Copywriting", "Action"] },
    { id: "dr2-2-2", title: "Narrative Arc", subject: "Storytelling Flow", content: "Build tension and release in your emails.", tags: ["Storytelling", "Structure"] },
    { id: "dr2-2-3", title: "Pacing Guide", subject: "Mastering Pace", content: "A guide to controlling reading speed.", tags: ["Education", "Guide"] },
  ],
  "r2-3": [ // Harmonic Tone
    { id: "dr2-3-1", title: "Sentiment Analysis", subject: "Tone Check", content: "Ensure your message lands with the right emotion.", tags: ["AI", "Sentiment"] },
    { id: "dr2-3-2", title: "Brand Voice", subject: "Consistent Voice", content: "Lock in your brand's harmonic signature.", tags: ["Branding", "Consistency"] },
    { id: "dr2-3-3", title: "Emotional Resonance", subject: "Connect Deeply", content: "Words chosen to resonate on an emotional level.", tags: ["Psychology", "Connection"] },
  ],

  // --- Early Access Branch ---
  "r3-1": [ // Beta Invite
    { id: "dr3-1-1", title: "Access Key", subject: "Your Beta Key", content: "Here is your unique key to unlock the beta.", tags: ["Access", "Key"] },
    { id: "dr3-1-2", title: "Onboarding", subject: "Getting Started", content: "A quick video tour of the new features.", tags: ["Video", "Onboarding"] },
    { id: "dr3-1-3", title: "Slack Invite", subject: "Join the Beta Channel", content: "Direct access to our engineering team.", tags: ["Community", "Support"] },
  ],
  "r3-2": [ // Feedback Loop
    { id: "dr3-2-1", title: "Feedback Form", subject: "Share your thoughts", content: "A direct line to our product managers.", tags: ["Feedback", "Product"] },
    { id: "dr3-2-2", title: "Roadmap Voting", subject: "Vote on Features", content: "Help prioritize what we build next.", tags: ["Roadmap", "Voting"] },
    { id: "dr3-2-3", title: "Bug Bounty", subject: "Report Issues", content: "Earn rewards for finding critical bugs.", tags: ["Bounty", "Security"] },
  ],
  "r3-3": [ // VIP Access
    { id: "dr3-3-1", title: "Concierge Onboarding", subject: "Book a Session", content: "1-on-1 setup with a solutions engineer.", tags: ["Premium", "Service"] },
    { id: "dr3-3-2", title: "Dedicated Support", subject: "Priority Support", content: "Skip the queue with your VIP status.", tags: ["Support", "SLA"] },
    { id: "dr3-3-3", title: "Founder Call", subject: "Meet the Founders", content: "A quarterly call to discuss strategy.", tags: ["Exclusive", "Strategy"] },
  ],
};

type Stage = "IDLE" | "GENERATING" | "SHOW_GENERIC" | "SHOW_PERSONALIZED" | "SHOW_REFINED" | "SHOW_DEEP_REFINED";

export default function DemoPage() {
  const [stage, setStage] = useState<Stage>("IDLE");
  const [hasEmbedding, setHasEmbedding] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [parentTags, setParentTags] = useState<string[]>([]);

  const handleGenerate = () => {
    setStage("GENERATING");
    setTimeout(() => {
      setStage(hasEmbedding ? "SHOW_PERSONALIZED" : "SHOW_GENERIC");
    }, 2000);
  };

  const handleSelectVariant = (variant: { id: string; tags: string[] }) => {
    if (stage === "SHOW_PERSONALIZED") {
      setSelectedVariant(variant.id);
      setParentTags(variant.tags);
      setStage("GENERATING");
      setTimeout(() => {
        setStage("SHOW_REFINED");
      }, 1500);
    } else if (stage === "SHOW_REFINED") {
      setSelectedVariant(variant.id);
      setParentTags(prev => [...prev, ...variant.tags]);
      setStage("GENERATING");
      setTimeout(() => {
        setStage("SHOW_DEEP_REFINED");
      }, 1500);
    }
  };

  const getVariants = () => {
    if (stage === "SHOW_GENERIC") return GENERIC_VARIANTS;
    if (stage === "SHOW_PERSONALIZED") return PERSONALIZED_VARIANTS;
    if (stage === "SHOW_REFINED" && selectedVariant) return REFINED_VARIANTS_MAP[selectedVariant] || GENERIC_VARIANTS;
    if (stage === "SHOW_DEEP_REFINED" && selectedVariant) {
      return DEEP_REFINED_VARIANTS_MAP[selectedVariant] || [
        { id: `dr-${selectedVariant}-1`, title: "Detailed Analysis", subject: "Deep Dive", content: "Here is a detailed breakdown of the topic.", tags: ["Analysis", "Deep"] },
        { id: `dr-${selectedVariant}-2`, title: "Action Plan", subject: "Next Steps", content: "Follow these steps to implement the strategy.", tags: ["Actionable", "Guide"] },
        { id: `dr-${selectedVariant}-3`, title: "Case Study", subject: "Success Story", content: "See how others achieved success with this.", tags: ["Case Study", "Proof"] },
      ];
    }
    return [];
  };

  const getVariantType = (): VariantType => {
    if (stage === "SHOW_PERSONALIZED") return "PERSONALIZED";
    if (stage === "SHOW_REFINED") return "REFINED";
    if (stage === "SHOW_DEEP_REFINED") return "DEEP_REFINED";
    return "GENERIC";
  };

  return (
    <main className="relative min-h-screen bg-paper text-ink flex flex-col pb-40">
      <div className="pointer-events-none absolute inset-0 fixed">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(17,17,17,0.25),_transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-paper to-transparent" />
      </div>

      <Header />

      <div className="flex-1 flex flex-col items-center justify-center relative z-10 p-6 pt-24">
        
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-2">
            Interactive Pipeline
          </h1>
          <p className="text-muted-gray text-sm md:text-base max-w-xl mx-auto">
            Inject user embeddings to personalize content. Click generated variants to refine the model.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          
          {/* Left Column: Inputs */}
          <div className="flex flex-col gap-8 items-end">
            <div className="relative w-full max-w-md">
              <EmailInput />
            </div>

            <div className="relative w-full max-w-md">
              <UserProfile 
                isConnected={hasEmbedding} 
                onToggle={() => setHasEmbedding(!hasEmbedding)} 
              />
            </div>
          </div>

          {/* Center Column: Model */}
          <div className="flex flex-col items-center justify-center py-8 lg:py-0">
            <ModelCore 
              onClick={handleGenerate} 
              isGenerating={stage === "GENERATING"}
              hasEmbedding={hasEmbedding}
            />
          </div>

          {/* Right Column: Results */}
          <div className="flex flex-col items-start min-h-[400px]">
            {(stage === "SHOW_GENERIC" || stage === "SHOW_PERSONALIZED" || stage === "SHOW_REFINED" || stage === "SHOW_DEEP_REFINED") && (
              <div className="relative w-full max-w-md">
                <GenerationResults 
                  type={getVariantType()} 
                  variants={getVariants()} 
                  onSelect={handleSelectVariant}
                  parentTags={parentTags}
                />
              </div>
            )}
            
            {stage === "IDLE" && (
              <div className="flex h-full w-full max-w-md items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/5 p-8 text-center text-muted-gray">
                <p>Click the model to generate content</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
