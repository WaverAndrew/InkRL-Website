"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ThumbsUp, ThumbsDown, RefreshCw, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = [
  { subject: "Get 50% off your next order", openRate: "12.4%" },
  { subject: "Exclusive half-price deal inside", openRate: "18.2%" },
  { subject: "You've unlocked a special discount", openRate: "24.5%" },
  { subject: "Your 50% discount is waiting...", openRate: "32.1%" },
];

export function EmailRewriter() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [feedback, setFeedback] = useState<"positive" | "negative" | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate feedback before rewrite
      setFeedback(Math.random() > 0.3 ? "negative" : "positive");
      
      setTimeout(() => {
        handleRewrite();
        setFeedback(null);
      }, 800);
    }, 2500); // Faster interval
    return () => clearInterval(interval);
  }, [index]);

  const handleRewrite = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % variants.length);
      setIsAnimating(false);
    }, 400); // Faster transition
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white border border-gray-200 rounded-xl shadow-sm font-sans">
      <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
          <Mail className="w-5 h-5 text-blue-500" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Campaign Optimization</h3>
          <p className="text-xs text-gray-500">Real-time subject line testing</p>
        </div>
        <div className="ml-auto flex items-center gap-2 text-xs text-gray-400">
           <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/> Live
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
            <span>Subject Line</span>
            <span className="font-mono text-xs">Variant {index + 1}/{variants.length}</span>
        </div>
        
        <div className="relative overflow-hidden rounded-lg bg-gray-50 p-4 border border-gray-200 min-h-[80px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-lg font-medium text-gray-900"
            >
              {variants[index].subject}
            </motion.p>
          </AnimatePresence>
          
          {isAnimating && (
             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-white/50 backdrop-blur-[1px] flex items-center justify-center"
             >
                <RefreshCw className="w-6 h-6 text-blue-500 animate-spin" />
             </motion.div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="p-3 rounded-lg bg-green-50 border border-green-100 flex flex-col items-center justify-center">
                <span className="text-xs text-green-600 mb-1">Open Rate</span>
                <motion.span 
                    key={variants[index].openRate}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-xl font-bold text-green-700"
                >
                    {variants[index].openRate}
                </motion.span>
            </div>
            
            <div className="col-span-2 flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100 relative overflow-hidden">
                <div className="flex items-center gap-2 z-10">
                    <div className="flex -space-x-2">
                        {[1,2,3].map(i => (
                            <div key={i} className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white" />
                        ))}
                    </div>
                    <span className="text-xs text-gray-500">Feedback received</span>
                </div>
                <div className="flex gap-2 z-10">
                    <motion.div 
                        animate={feedback === "positive" ? { scale: [1, 1.5, 1], color: "#22c55e" } : {}}
                    >
                        <ThumbsUp className={cn("w-4 h-4", feedback === "positive" ? "text-green-500" : "text-gray-400")} />
                    </motion.div>
                    <motion.div
                        animate={feedback === "negative" ? { scale: [1, 1.5, 1], color: "#ef4444" } : {}}
                    >
                        <ThumbsDown className={cn("w-4 h-4", feedback === "negative" ? "text-red-500" : "text-gray-300")} />
                    </motion.div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
