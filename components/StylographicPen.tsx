"use client";

import { motion } from "framer-motion";

export function StylographicPen() {
  return (
    <div className="relative w-64 h-64 opacity-80">
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-lg"
        initial={{ rotate: -45, y: 0 }}
        animate={{ 
          y: [0, -10, 0],
          rotate: [-45, -42, -45]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Pen Body Outline */}
        <motion.path
          d="M140 20 
             L160 40 
             L100 160 
             L80 140 
             Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-ink"
        />
        
        {/* Nib Section */}
        <motion.path
          d="M80 140 
             L100 160 
             L60 180 
             Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-ink"
        />
        
        {/* Nib Split */}
        <motion.path
          d="M80 170 L60 180"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-ink"
        />
        
        {/* Cap/Detail */}
        <motion.path
          d="M135 30 L155 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-ink"
        />
      </motion.svg>
    </div>
  );
}
