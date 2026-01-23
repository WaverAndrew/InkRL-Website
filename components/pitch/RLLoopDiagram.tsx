"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { User, Mail, MousePointerClick, Brain, RotateCcw } from "lucide-react";

const steps = [
  {
    icon: User,
    label: "User Profile",
    description: "Learned preferences",
    color: "#3B82F6",
  },
  {
    icon: Mail,
    label: "Personalized Email",
    description: "Tailored content",
    color: "#8B5CF6",
  },
  {
    icon: MousePointerClick,
    label: "Engagement",
    description: "Opens & clicks",
    color: "#10B981",
  },
  {
    icon: Brain,
    label: "Learn",
    description: "Update model",
    color: "#F59E0B",
  },
];

export function RLLoopDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const pathProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative py-12">
      {/* Main diagram container */}
      <div className="relative mx-auto max-w-3xl">
        {/* SVG connecting lines */}
        <svg
          className="absolute inset-0 h-full w-full pointer-events-none"
          viewBox="0 0 600 200"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Base path (faint) */}
          <path
            d="M 75 100 L 225 100 L 375 100 L 525 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-200"
          />
          {/* Animated path */}
          <motion.path
            d="M 75 100 L 225 100 L 375 100 L 525 100"
            fill="none"
            stroke="#111"
            strokeWidth="3"
            style={{ pathLength: pathProgress }}
            strokeLinecap="round"
          />
          
          {/* Return arrow (loop back) */}
          <path
            d="M 525 100 C 550 100, 575 50, 525 30 L 75 30 C 25 30, 25 70, 75 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="text-gray-300"
          />
          <motion.path
            d="M 525 100 C 550 100, 575 50, 525 30 L 75 30 C 25 30, 25 70, 75 100"
            fill="none"
            stroke="#111"
            strokeWidth="2"
            style={{ pathLength: pathProgress }}
            strokeLinecap="round"
            strokeDasharray="4 4"
          />
        </svg>

        {/* Step nodes */}
        <div className="relative grid grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon circle */}
              <div
                className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border-2 bg-white shadow-lg"
                style={{ borderColor: step.color }}
              >
                <step.icon className="h-6 w-6" style={{ color: step.color }} />
              </div>

              {/* Label */}
              <h4 className="text-sm font-semibold text-ink">{step.label}</h4>
              <p className="text-xs text-muted-gray mt-1">{step.description}</p>

              {/* Step number */}
              <div
                className="absolute -top-2 left-1/2 -translate-x-1/2 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
                style={{ backgroundColor: step.color }}
              >
                {idx + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Loop indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="absolute -top-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 text-[10px] font-medium text-white"
        >
          <RotateCcw className="h-3 w-3" />
          Continuous Loop
        </motion.div>
      </div>

      {/* Caption */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="mt-8 text-center text-sm text-muted-gray max-w-xl mx-auto"
      >
        Our proprietary reinforcement learning algorithm learns from every interaction,
        continuously improving personalization for each individual user.
      </motion.p>
    </div>
  );
}
