"use client";

import { motion } from "framer-motion";
import { FileText, Pen } from "lucide-react";

const pillars = [
  {
    icon: FileText,
    title: "Content Selection",
    subtitle: "What to Say",
    description:
      "We instantly match the exact offer or story to the user, ensuring maximal relevance before they even open the email.",
    examples: ["Product announcements", "Feature highlights", "Special offers", "Educational content"],
    color: "from-blue-500/20 to-blue-600/20",
    borderColor: "border-blue-500/30",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Pen,
    title: "Style Optimization",
    subtitle: "How to Say It",
    description:
      "We adapt the tone to the reader's psychology. Whether they respond to urgency or curiosity, we write it the way they want to read it.",
    examples: ["Formal vs. casual", "Urgency levels", "Emoji usage", "Sentence length"],
    color: "from-purple-500/20 to-purple-600/20",
    borderColor: "border-purple-500/30",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
];

export function OptimizationPillars() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {pillars.map((pillar, idx) => (
        <motion.div
          key={pillar.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          className={`relative rounded-2xl border ${pillar.borderColor} bg-gradient-to-br ${pillar.color} p-8 backdrop-blur-sm`}
        >
          {/* Icon */}
          <div className={`mb-6 inline-flex rounded-xl ${pillar.iconBg} p-3`}>
            <pillar.icon className={`h-6 w-6 ${pillar.iconColor}`} />
          </div>

          {/* Header */}
          <div className="mb-4">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-gray mb-1">
              {pillar.subtitle}
            </p>
            <h3 className="text-2xl font-bold text-ink">{pillar.title}</h3>
          </div>

          {/* Description */}
          <p className="text-muted-gray leading-relaxed mb-6">{pillar.description}</p>

          {/* Examples */}
          <div className="flex flex-wrap gap-2">
            {pillar.examples.map((example) => (
              <span
                key={example}
                className="rounded-full bg-white/50 px-3 py-1 text-xs text-ink/70"
              >
                {example}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
