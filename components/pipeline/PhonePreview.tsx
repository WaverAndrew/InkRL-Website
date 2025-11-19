import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Signal, Wifi, Battery, ChevronLeft, MoreHorizontal, Star, GitBranch, RefreshCw } from "lucide-react";

type Variant = {
  id: string;
  subject: string;
  preview: string;
  openRate: number;
  conversion: number;
  isWinner?: boolean;
};

const GENERATIONS_DATA: Record<number, Omit<Variant, "id" | "isWinner">[]> = {
  1: [
    { subject: "Summer Sale: 50% Off", preview: "Everything is half price. Don't miss out...", openRate: 12.4, conversion: 1.2 },
    { subject: "Your Exclusive Discount", preview: "We've unlocked a special 50% off code for you...", openRate: 15.8, conversion: 1.8 },
    { subject: "Don't miss this deal", preview: "The biggest sale of the season is here...", openRate: 11.2, conversion: 1.1 },
  ],
  2: [
    { subject: "Exclusive: 50% Off Inside", preview: "Your code is waiting. Shop the private sale...", openRate: 18.5, conversion: 2.1 },
    { subject: "Your Exclusive 50% Savings", preview: "Use your personal code for half-off everything...", openRate: 22.1, conversion: 2.9 },
    { subject: "Private Sale: 50% Off", preview: "Access your exclusive discount before it expires...", openRate: 19.4, conversion: 2.3 },
  ],
  3: [
    { subject: "Your Exclusive 50% Savings Expires Soon", preview: "Time is running out to use your personal code...", openRate: 25.6, conversion: 3.2 },
    { subject: "Claim Your Exclusive 50% Savings", preview: "Tap to activate your half-price discount now...", openRate: 28.9, conversion: 3.8 },
    { subject: "Reminder: Your Exclusive 50% Savings", preview: "Don't let your personal discount go to waste...", openRate: 24.2, conversion: 3.0 },
  ],
  4: [
    { subject: "Claim Your Exclusive 50% Savings (24h left)", preview: "Final call to use your personal discount code...", openRate: 32.4, conversion: 4.1 },
    { subject: "Claim Your Exclusive 50% Savings [Action Required]", preview: "Activate your discount before midnight...", openRate: 35.8, conversion: 4.5 },
    { subject: "Last Chance: Claim Your Exclusive 50% Savings", preview: "Your code expires in just a few hours...", openRate: 31.5, conversion: 3.9 },
  ],
  5: [
    { subject: "⚠️ Claim Your Exclusive 50% Savings [Action Required]", preview: "Urgent: Your discount code is about to expire...", openRate: 38.2, conversion: 4.9 },
    { subject: "Final Notice: Claim Your Exclusive 50% Savings", preview: "This is your absolute last chance to save 50%...", openRate: 41.5, conversion: 5.2 },
    { subject: "Action Required: Your 50% Savings Expire Tonight", preview: "Don't miss out. Activate your code now...", openRate: 39.1, conversion: 5.0 },
  ],
};

export function PhonePreview() {
  const [generation, setGeneration] = useState(1);
  const [variants, setVariants] = useState<Variant[]>([]);
  const [parent, setParent] = useState<Variant | null>(null);
  const [stage, setStage] = useState<"generating" | "testing" | "selecting" | "evolving" | "complete">("generating");

  const generateVariants = useCallback((gen: number) => {
    const data = GENERATIONS_DATA[gen];
    if (!data) return;

    const newVariants: Variant[] = data.map((v, i) => ({
      ...v,
      id: `gen${gen}-${i}`,
    }));
    setVariants(newVariants);
  }, []);

  const handleRestart = useCallback(() => {
    // Reset everything to initial state
    setGeneration(1);
    setParent(null);
    // We set stage to 'generating' last to trigger the effect
    generateVariants(1);
    setStage("generating");
  }, [generateVariants]);

  // Initialize first generation
  useEffect(() => {
    generateVariants(1);
  }, [generateVariants]);

  // Animation Loop
  useEffect(() => {
    // Only run if we have variants and we are in the 'generating' stage (ready to start testing)
    if (variants.length === 0 || stage !== "generating") return;

    const runCycle = async () => {
      // 1. Generating (handled by state update)
      setStage("testing");
      await new Promise(r => setTimeout(r, 2000)); // 2500 -> 2000

      // 2. Selecting
      setStage("selecting");
      const winner = variants.reduce((prev, current) => (prev.openRate > current.openRate ? prev : current));
      setVariants(prev => prev.map(v => v.id === winner.id ? { ...v, isWinner: true } : v));
      await new Promise(r => setTimeout(r, 1600)); // 2000 -> 1600

      // Check if max generations reached
      if (generation >= 5) {
        await new Promise(r => setTimeout(r, 2400)); // 3000 -> 2400
        handleRestart();
        return;
      }

      // 3. Evolving
      setStage("evolving");
      await new Promise(r => setTimeout(r, 1200)); // 1500 -> 1200
      
      setParent(winner);
      setGeneration(g => g + 1);
      generateVariants(generation + 1);
      // Important: Setting stage to 'generating' triggers the next cycle via useEffect
      setStage("generating");
    };

    runCycle();
  }, [generation, variants, stage, handleRestart, generateVariants]); // Added dependencies

  return (
    <div className="w-[320px] mx-auto bg-black rounded-[3rem] p-3 shadow-2xl border-[4px] border-gray-800 relative">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-black rounded-b-2xl z-20" />
      
      <div className="bg-white w-full h-[600px] rounded-[2.2rem] overflow-hidden relative flex flex-col font-sans">
        {/* Status Bar */}
        <div className="h-10 bg-gray-50 flex items-center justify-between px-6 pt-2 text-[10px] font-medium text-gray-900 z-10">
            <span>9:41</span>
            <div className="flex items-center gap-1">
                <Signal className="w-3 h-3" />
                <Wifi className="w-3 h-3" />
                <Battery className="w-3 h-3" />
            </div>
        </div>

        {/* App Header */}
        <div className="bg-white border-b border-gray-100 p-4 flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-blue-500" />
                <span className="font-semibold text-sm">Gen {generation}</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-mono">
                    {stage === "complete" ? "Optimized" : stage}
                </span>
            </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-gray-50 p-3 overflow-hidden relative flex flex-col">
            
            {/* Parent Node (Previous Winner) */}
            <AnimatePresence mode="popLayout">
                {parent && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="mb-6 relative"
                    >
                        <div className="bg-blue-50 border border-blue-100 p-2 rounded-lg opacity-60 scale-90 origin-top">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-[10px] font-semibold text-blue-900">Gen {generation - 1} Winner</span>
                                <span className="text-[10px] font-bold text-green-600">{parent.openRate}% Open</span>
                            </div>
                            <p className="text-[10px] text-blue-800 truncate">{parent.subject}</p>
                        </div>
                        {/* Tree Line */}
                        <div className="absolute left-1/2 -bottom-6 w-px h-6 bg-blue-200 -translate-x-1/2">
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-200 rounded-full" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Current Variants */}
            <div className="space-y-3 flex-1">
                <AnimatePresence mode="popLayout">
                    {variants.map((item, idx) => (
                        <motion.div
                            layout
                            key={item.id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }} // Slower entrance
                            className={`bg-white p-3 rounded-xl shadow-sm border relative overflow-hidden ${
                                item.isWinner ? "border-green-400 ring-1 ring-green-400" : "border-gray-100"
                            }`}
                        >
                            <div className="flex justify-between items-start mb-1">
                                <h4 className="font-semibold text-xs text-gray-900 line-clamp-1">{item.subject}</h4>
                            </div>
                            <p className="text-[10px] text-gray-500 line-clamp-2 mb-2">{item.preview}</p>
                            
                            {/* Metrics */}
                            <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-50">
                                <div className="flex items-center gap-1 bg-gray-50 px-1.5 py-0.5 rounded text-[9px] font-medium text-gray-600">
                                    <span className={item.isWinner ? "text-green-700 font-bold" : ""}>
                                        Open: {stage === "generating" ? "..." : `${item.openRate}%`}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1 bg-gray-50 px-1.5 py-0.5 rounded text-[9px] font-medium text-gray-600">
                                    <span>
                                        Conv: {stage === "generating" ? "..." : `${item.conversion}%`}
                                    </span>
                                </div>
                                {item.isWinner && (
                                    <motion.div 
                                        initial={{ scale: 0 }} 
                                        animate={{ scale: 1 }}
                                        className="ml-auto flex items-center gap-1 text-[9px] text-green-600 font-bold uppercase tracking-wider"
                                    >
                                        <Star className="w-3 h-3 fill-green-600" />
                                        Winner
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="h-12 bg-white border-t border-gray-100 flex justify-around items-center px-4 z-10">
            <div className="w-8 h-1 bg-gray-900 rounded-full opacity-20" />
        </div>
      </div>
    </div>
  );
}
