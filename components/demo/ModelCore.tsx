import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface ModelCoreProps {
  onClick: () => void;
  isGenerating: boolean;
  hasEmbedding: boolean;
}

export function ModelCore({ onClick, isGenerating, hasEmbedding }: ModelCoreProps) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer Ripples */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute inset-0 rounded-full border ${
            hasEmbedding ? "border-accent-blue/30" : "border-black/5"
          }`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Core Button */}
      <motion.button
        onClick={onClick}
        disabled={isGenerating}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative z-10 flex h-32 w-32 items-center justify-center rounded-full border-4 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-500 ${
          hasEmbedding
            ? "border-accent-blue bg-accent-blue/10 shadow-accent-blue/20"
            : "border-black/10 bg-white/50"
        }`}
      >
        {isGenerating ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="h-12 w-12 rounded-full border-t-2 border-ink" />
          </motion.div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <Sparkles
              className={`h-8 w-8 ${
                hasEmbedding ? "text-accent-blue" : "text-ink"
              }`}
            />
            <span className="text-xs font-bold uppercase tracking-wider text-ink">
              Generate
            </span>
          </div>
        )}
      </motion.button>

      {/* Connecting Lines (Visual Decor) */}
      <div className="absolute -left-20 top-1/2 h-[1px] w-20 bg-gradient-to-r from-transparent to-black/10" />
      <div className="absolute -right-20 top-1/2 h-[1px] w-20 bg-gradient-to-l from-transparent to-black/10" />
    </div>
  );
}
