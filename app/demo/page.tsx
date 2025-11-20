"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { PhonePreview } from "@/components/pipeline/PhonePreview";
import Header from "@/components/Header";

export default function DemoPage() {
  const [openRate, setOpenRate] = useState(12.4);

  // Simulate refreshing open rate
  useEffect(() => {
    const interval = setInterval(() => {
      setOpenRate(prev => {
        const change = (Math.random() - 0.3) * 2; // Random fluctuation
        const newValue = Math.min(Math.max(prev + change, 10), 65); // Clamp between 10% and 65%
        return Number(newValue.toFixed(1));
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink flex flex-col">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(17,17,17,0.25),_transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-paper to-transparent" />
      </div>

      <Header />

      <div className="flex-1 flex flex-col items-center justify-center relative z-10 p-6 pt-24">
        
        {/* Bouncing Text */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-10, 0, -10] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-ink mb-4">
            Demo is coming soon
          </h1>
          <p className="text-muted-gray text-lg">
            We&apos;re putting the final touches on the engine.
          </p>
        </motion.div>

        {/* Loader / Phone Preview */}
        <div className="relative scale-90 md:scale-100">
          <PhonePreview />
          
          {/* Floating Stats Card */}
          <motion.div 
            className="absolute -right-4 top-1/4 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-xs text-muted-gray uppercase tracking-wider mb-1">Current Open Rate</div>
            <div className="text-3xl font-bold text-ink tabular-nums flex items-center gap-2">
              {openRate}%
              <motion.span 
                key={openRate}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-green-500 text-sm"
              >
                ↑
              </motion.span>
            </div>
          </motion.div>
        </div>

      </div>
    </main>
  );
}
