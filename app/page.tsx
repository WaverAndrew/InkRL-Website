"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import { StylographicPen } from "@/components/StylographicPen";
import { EmailInput } from "@/components/pipeline/EmailInput";
import { ParallaxArrow } from "@/components/pipeline/ParallaxArrow";
import { PhonePreview } from "@/components/pipeline/PhonePreview";

export default function HowItWorks() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(17,17,17,0.25),_transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-paper to-transparent" />
      </div>

      <Header />
      
      <div className="relative z-10 flex min-h-screen flex-col px-6 pb-10 pt-32 sm:px-10 lg:px-24">
        {/* Hero Section */}
        <div className="relative z-10 max-w-4xl mx-auto text-center mb-32 pt-20">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 hidden lg:block pointer-events-none">
                <StylographicPen />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-ink mb-8 tracking-tight">
                InkRL
            </h1>
            <p className="text-xl md:text-2xl text-muted-gray max-w-2xl mx-auto leading-relaxed mb-12">
                The evolutionary copy engine for e-commerce. <br/>
                <span className="text-ink font-medium">Stop guessing. Start evolving.</span>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-3xl mx-auto mt-16">
                <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100">
                    <h3 className="font-semibold text-ink mb-2">Writer&apos;s Block?</h3>
                    <p className="text-sm text-muted-gray">Never stare at a blank page again. Just input your raw ideas.</p>
                </div>
                <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100">
                    <h3 className="font-semibold text-ink mb-2">Low Open Rates?</h3>
                    <p className="text-sm text-muted-gray">Our engine evolves subject lines to maximize engagement.</p>
                </div>
                <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100">
                    <h3 className="font-semibold text-ink mb-2">A/B Testing Fatigue?</h3>
                    <p className="text-sm text-muted-gray">Automate the testing process with evolutionary algorithms.</p>
                </div>
            </div>
        </div>

        {/* Pipeline Visualization */}
        <div className="max-w-6xl mx-auto relative z-10">
            {/* Step 1: Input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-0">
                <div className="order-2 md:order-1">
                    <EmailInput />
                </div>
                <div className="order-1 md:order-2 pl-0 md:pl-12">
                    <h2 className="font-mono text-xs uppercase tracking-widest text-muted-gray mb-4">Step 01</h2>
                    <h3 className="text-3xl font-semibold text-ink mb-4">Effortless Input</h3>
                    <p className="text-lg text-muted-gray leading-relaxed">
                        Don&apos;t waste hours crafting the perfect email. Just feed InkRL your raw draft, key points, or a rough idea. 
                        <br/><br/>
                        <span className="text-ink font-medium">We handle the polish.</span>
                    </p>
                </div>
            </div>

            {/* Connection */}
            <ParallaxArrow />

            {/* Step 2: Optimization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-0">
                <div className="pr-0 md:pr-12 text-right">
                    <h2 className="font-mono text-xs uppercase tracking-widest text-muted-gray mb-4">Step 02</h2>
                    <h3 className="text-3xl font-semibold text-ink mb-4">Evolutionary Optimization</h3>
                    <p className="text-lg text-muted-gray leading-relaxed ml-auto">
                        Our engine doesn&apos;t just rewrite; it <span className="italic">evolves</span>. 
                        It generates variations, tests them against simulated user models, selects the winners, and breeds the next generation of high-performing copy.
                        <br/><br/>
                        <span className="text-ink font-medium">Watch your open rates climb.</span>
                    </p>
                </div>
                <div>
                    <PhonePreview />
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
