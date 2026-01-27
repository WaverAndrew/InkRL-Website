"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Send, Eye, TrendingUp, ArrowRight } from "lucide-react";

const loopSteps = [
  {
    icon: Send,
    title: "Send",
    description: "Deploy personalized campaigns to each user",
    color: "#3B82F6",
  },
  {
    icon: Eye,
    title: "Observe",
    description: "Track every micro-interaction to understand not just what happened, but why.",
    color: "#8B5CF6",
  },
  {
    icon: TrendingUp,
    title: "Improve",
    description: "Instantly update the model. Your campaign gets smarter and more profitable with every email.",
    color: "#10B981",
  },
];

export function ContinuousLearning() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div ref={containerRef} className="relative py-16">
      {/* Animated background circle */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gray-200"
        style={{ rotate }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gray-300"
        style={{ rotate }}
      />

      {/* Center icon */}
      <div className="relative mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-ink to-ink/80 shadow-xl">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="text-white"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12a9 9 0 1 1-9-9" />
            <polyline points="21 3 21 9 15 9" />
          </svg>
        </motion.div>
      </div>

      {/* Steps in a row */}
      <div className="relative mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {loopSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Connector arrow (except last) */}
              {idx < loopSteps.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-gray-300 md:block">
                  <ArrowRight className="h-5 w-5" />
                </div>
              )}

              {/* Card */}
              <div className="rounded-2xl border border-gray-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
                {/* Icon */}
                <div
                  className="mb-4 inline-flex rounded-xl p-3"
                  style={{ backgroundColor: `${step.color}15` }}
                >
                  <step.icon className="h-6 w-6" style={{ color: step.color }} />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-xl font-bold text-ink">{step.title}</h3>
                <p className="text-sm text-muted-gray leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step indicator */}
              <div
                className="absolute -top-3 left-6 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: step.color }}
              >
                {idx + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Loop back arrow (visual) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex justify-center"
        >
          <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-muted-gray">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
            <span>Every email increases your ROI</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
