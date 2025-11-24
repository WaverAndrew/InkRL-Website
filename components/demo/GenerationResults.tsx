import { GlassCard } from "@/components/ui/GlassCard";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export type VariantType = "GENERIC" | "PERSONALIZED" | "REFINED" | "DEEP_REFINED";

interface Variant {
  id: string;
  title: string;
  subject: string;
  content: string;
  tags: string[];
}

interface GenerationResultsProps {
  type: VariantType;
  onSelect: (variant: Variant) => void;
  variants: Variant[];
  parentTags?: string[];
}

export function GenerationResults({ type, onSelect, variants, parentTags = [] }: GenerationResultsProps) {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <AnimatePresence mode="popLayout">
        {variants.map((variant, i) => (
          <motion.div
            key={variant.id}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => onSelect(variant)}
          >
            <GlassCard
              className={`group relative cursor-pointer transition-all hover:translate-x-2 ${
                type === "PERSONALIZED" 
                  ? "border-accent-blue/30 hover:border-accent-blue" 
                  : type === "REFINED"
                  ? "border-purple-500/30 hover:border-purple-500"
                  : "hover:border-black/20"
              }`}
              hoverEffect
            >
              <div className="flex items-start gap-4">
                {/* Bubble Indicator */}
                <div className={`mt-1 h-3 w-3 shrink-0 rounded-full shadow-[0_0_10px_currentColor] ${
                  type === "PERSONALIZED" ? "bg-accent-blue text-accent-blue" :
                  type === "REFINED" ? "bg-purple-500 text-purple-500" :
                  type === "DEEP_REFINED" ? "bg-pink-500 text-pink-500" :
                  "bg-black/10 text-black/10"
                }`} />
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-ink">{variant.title}</h4>
                    {type !== "REFINED" && (
                      <span className="opacity-0 transition-opacity group-hover:opacity-100">
                        <ArrowRight className="h-4 w-4 text-muted-gray" />
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex gap-2 text-xs">
                      <span className="font-semibold text-muted-gray">Subject:</span>
                      <span className="text-ink">{variant.subject}</span>
                    </div>
                    <p className="text-sm text-muted-gray line-clamp-2">{variant.content}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {/* Parent Tags */}
                    {parentTags.map(tag => (
                      <span key={`parent-${tag}`} className="rounded-full bg-black/5 px-2 py-0.5 text-[10px] text-muted-gray/60">
                        {tag}
                      </span>
                    ))}
                    
                    {/* New Tags (Outlined) */}
                    {variant.tags.map(tag => (
                      <span 
                        key={tag} 
                        className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${
                          type === "PERSONALIZED" ? "border-accent-blue text-accent-blue" :
                          type === "REFINED" ? "border-purple-500 text-purple-500" :
                          type === "DEEP_REFINED" ? "border-pink-500 text-pink-500" :
                          "border-muted-gray text-muted-gray"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Hint */}
              {type !== "REFINED" && (
                <div className="absolute right-4 bottom-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex items-center gap-1 text-[10px] text-accent-blue font-mono uppercase tracking-wider">
                    <Sparkles className="h-3 w-3" />
                    Refine
                  </div>
                </div>
              )}
            </GlassCard>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
