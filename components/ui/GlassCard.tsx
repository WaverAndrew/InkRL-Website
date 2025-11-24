import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-black/5 bg-white/40 p-6 backdrop-blur-md",
        "shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)]",
        hoverEffect && "transition-colors hover:bg-white/60",
        className
      )}
      {...props}
    >
      {/* Noise texture overlay for premium feel */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />
      
      {/* Shine effect */}
      <div className="pointer-events-none absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 blur-lg" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
