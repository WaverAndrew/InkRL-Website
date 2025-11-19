"use client";

import { ArrowRight, Zap, Target, BarChart3 } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-gray-300">Revolutionizing Copy Optimization</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-6 tracking-tight">
          Continuous, Scalable <br />
          <span className="text-white">Copy Optimization</span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Stop relying on sporadic tests. InkRL iterates copy rapidly, segments by audience, and learns without long test cycles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <GlassCard className="group hover:bg-white/10 transition-colors duration-300">
            <div className="p-2 bg-white/5 w-fit rounded-lg mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Continuous Optimization</h3>
            <p className="text-sm text-gray-400">Aligned to traffic intent & segment. Always learning, always improving.</p>
          </GlassCard>

          <GlassCard className="group hover:bg-white/10 transition-colors duration-300">
            <div className="p-2 bg-white/5 w-fit rounded-lg mb-4 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Focused Offers</h3>
            <p className="text-sm text-gray-400">Clear CTAs + proof. Delivering the right message to the right person.</p>
          </GlassCard>

          <GlassCard className="group hover:bg-white/10 transition-colors duration-300">
            <div className="p-2 bg-white/5 w-fit rounded-lg mb-4 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Measurement Loop</h3>
            <p className="text-sm text-gray-400">Finds wins faster than classic A/B testing through reinforcement learning.</p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
