"use client";

import { motion } from "framer-motion";

export function StylographicPen() {
  return (
    <div 
      className="relative w-64 h-80 flex items-center justify-center" 
      style={{ perspective: "800px" }}
    >
      <motion.div
        className="relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: 360 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Pen body - main cylinder */}
        <div 
          className="relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front face of pen body */}
          <div 
            className="absolute w-8 h-48 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 rounded-t-full"
            style={{ 
              transform: "translateZ(4px)",
              boxShadow: "inset -2px 0 4px rgba(0,0,0,0.3), inset 2px 0 4px rgba(255,255,255,0.1)"
            }}
          >
            {/* Pen clip */}
            <div 
              className="absolute -right-1 top-4 w-2 h-16 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-r-sm"
              style={{ transform: "translateZ(2px)" }}
            />
            {/* Gold band */}
            <div className="absolute bottom-8 left-0 right-0 h-2 bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700" />
          </div>
          
          {/* Back face of pen body */}
          <div 
            className="absolute w-8 h-48 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 rounded-t-full"
            style={{ 
              transform: "translateZ(-4px) rotateY(180deg)",
            }}
          />
          
          {/* Left side */}
          <div 
            className="absolute h-48 bg-gray-900"
            style={{ 
              width: "8px",
              transform: "translateX(-4px) rotateY(-90deg)",
              transformOrigin: "right center"
            }}
          />
          
          {/* Right side */}
          <div 
            className="absolute h-48 bg-gray-700"
            style={{ 
              width: "8px",
              transform: "translateX(28px) rotateY(90deg)",
              transformOrigin: "left center"
            }}
          />
          
          {/* Nib section */}
          <div 
            className="absolute top-48 left-1/2 -translate-x-1/2"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Nib connector */}
            <div 
              className="w-6 h-6 bg-gradient-to-b from-gray-700 to-gray-500 mx-auto"
              style={{ 
                clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)",
              }}
            />
            {/* Gold nib */}
            <div 
              className="w-4 h-16 mx-auto bg-gradient-to-b from-yellow-600 via-yellow-400 to-yellow-300"
              style={{ 
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                transform: "translateZ(2px)"
              }}
            >
              {/* Nib slit */}
              <div className="absolute left-1/2 -translate-x-1/2 top-2 w-[1px] h-12 bg-gray-800" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
