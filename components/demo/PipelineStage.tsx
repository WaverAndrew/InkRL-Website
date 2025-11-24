import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PipelineStageProps {
  children: ReactNode;
  isActive: boolean;
  delay?: number;
  className?: string;
  title?: string;
}

export function PipelineStage({ children, isActive, delay = 0, className, title }: PipelineStageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ 
        opacity: isActive ? 1 : 0.3, 
        y: isActive ? 0 : 0,
        scale: isActive ? 1 : 0.95,
        filter: isActive ? "blur(0px)" : "blur(2px)"
      }}
      transition={{ duration: 0.5, delay }}
      className={cn("relative flex flex-col items-center", className)}
    >
      {title && (
        <motion.h3 
          className="mb-4 text-sm font-bold uppercase tracking-widest text-muted-gray"
          animate={{ color: isActive ? "var(--ink)" : "var(--muted-gray)" }}
        >
          {title}
        </motion.h3>
      )}
      {children}
    </motion.div>
  );
}
