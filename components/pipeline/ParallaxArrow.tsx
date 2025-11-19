"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxArrow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to path drawing
  const pathLength = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="w-full h-32 relative flex items-center justify-center overflow-hidden">
      <svg
        className="w-full h-full absolute inset-0 pointer-events-none"
        viewBox="0 0 800 200"
        preserveAspectRatio="none"
      >
        {/* Base Path (Faint) */}
        <path
          d="M200 0 C 200 100, 600 100, 600 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-gray-200"
        />
        
        {/* Animated Path (Bright Black) */}
        <motion.path
          d="M200 0 C 200 100, 600 100, 600 200"
          fill="none"
          stroke="#1a1a1a" // Bright Black / Ink
          strokeWidth="4"
          style={{ pathLength, opacity } as any}
          strokeLinecap="round"
          className="drop-shadow-[0_0_8px_rgba(0,0,0,0.3)]"
        />
      </svg>
    </div>
  );
}
