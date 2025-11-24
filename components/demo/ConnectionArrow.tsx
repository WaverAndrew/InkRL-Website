import { motion } from "framer-motion";

interface ConnectionArrowProps {
  isActive: boolean;
  direction?: "right" | "down";
  className?: string;
}

export function ConnectionArrow({ isActive, direction = "right", className }: ConnectionArrowProps) {
  const isRight = direction === "right";

  return (
    <div className={`flex items-center justify-center p-4 ${className}`}>
      <svg
        width={isRight ? "100" : "40"}
        height={isRight ? "40" : "100"}
        viewBox={isRight ? "0 0 100 40" : "0 0 40 100"}
        className="overflow-visible"
      >
        {/* Base Path */}
        <path
          d={isRight ? "M0,20 L90,20" : "M20,0 L20,90"}
          stroke="currentColor"
          strokeWidth="2"
          className="text-gray-200"
          fill="none"
        />
        
        {/* Animated Beam */}
        <motion.path
          d={isRight ? "M0,20 L90,20" : "M20,0 L20,90"}
          stroke="url(#gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isActive ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ 
            duration: 1.5, 
            repeat: isActive ? Infinity : 0,
            ease: "linear",
            repeatDelay: 0.5
          }}
        />

        {/* Arrow Head */}
        <path
          d={isRight ? "M90,10 L100,20 L90,30" : "M10,90 L20,100 L30,90"}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={isActive ? "text-accent-blue" : "text-gray-200"}
        />

        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--accent-blue)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
