import { GlassCard } from "@/components/ui/GlassCard";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link2, Link2Off } from "lucide-react";

interface UserProfileProps {
  isConnected: boolean;
  onToggle: () => void;
}

export function UserProfile({ isConnected, onToggle }: UserProfileProps) {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const features = [
    { name: "Tech Savvy", value: 85, color: "bg-blue-500", desc: "High engagement with technical content" },
    { name: "Music Lover", value: 92, color: "bg-purple-500", desc: "Frequent clicks on audio-related items" },
    { name: "Early Adopter", value: 64, color: "bg-green-500", desc: "Tends to try new features quickly" },
  ];

  return (
    <GlassCard 
      className={`w-full max-w-md p-6 transition-all duration-500 ${
        isConnected ? "border-accent-blue/50 shadow-[0_0_30px_rgba(59,130,246,0.1)]" : "opacity-60 grayscale"
      }`}
    >
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-bold text-ink">User Embedding</h3>
        <button
          onClick={onToggle}
          className={`relative z-30 rounded-full p-2 transition-colors ${
            isConnected 
              ? "bg-accent-blue text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
              : "bg-black/5 text-muted-gray hover:bg-black/10"
          }`}
        >
          {isConnected ? <Link2 className="h-4 w-4" /> : <Link2Off className="h-4 w-4" />}
        </button>
      </div>

      <div className="space-y-4">
        {features.map((feature, i) => (
          <div 
            key={feature.name}
            className="group relative"
            onMouseEnter={() => setHoveredFeature(feature.name)}
            onMouseLeave={() => setHoveredFeature(null)}
          >
            <div className="mb-1 flex justify-between text-xs">
              <span className="text-muted-gray font-medium">{feature.name}</span>
              <span className="text-muted-gray">{feature.value}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-black/5">
              <motion.div
                className={`h-full ${feature.color}`}
                initial={{ width: 0 }}
                animate={{ width: isConnected ? `${feature.value}%` : "0%" }}
                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
              />
            </div>
            
            {/* Tooltip */}
            {isConnected && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: hoveredFeature === feature.name ? 1 : 0,
                  y: hoveredFeature === feature.name ? 0 : 10,
                  pointerEvents: hoveredFeature === feature.name ? "auto" : "none"
                }}
                className="absolute -top-12 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-lg bg-black/90 px-3 py-2 text-xs text-white shadow-xl border border-white/10"
              >
                {feature.desc}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/90" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
      
      {!isConnected && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <span className="rounded-full bg-black/50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
            Click Link to Inject
          </span>
        </div>
      )}
    </GlassCard>
  );
}
