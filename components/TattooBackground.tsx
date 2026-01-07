"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TattooBackground = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax effects: different layers move at different speeds
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
      {/* Layer 1: Slow moving base */}
      <motion.div 
        style={{ y: y1, opacity: 0.05 }} 
        className="absolute inset-0 w-full h-[150%]"
      >
        <svg width="100%" height="100%">
          <pattern id="tattoo" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
             <path d="M0 0L50 50L0 100" stroke="white" strokeWidth="2" fill="none"/>
             <path d="M50 0L100 50L50 100" stroke="white" strokeWidth="2" fill="none"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#tattoo)" />
        </svg>
      </motion.div>

      {/* Layer 2: Faster moving detail */}
      <motion.div 
        style={{ y: y2, opacity: 0.03 }} 
        className="absolute inset-0 w-full h-[150%] scale-150 origin-top-left"
      >
         <svg width="100%" height="100%">
          <rect width="100%" height="100%" fill="url(#tattoo)" />
        </svg>
      </motion.div>
      
      {/* Red Pulse Overlay */}
      <motion.div 
        style={{ opacity: useTransform(scrollYProgress, [0.2, 0.4], [0, 0.3]) }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/20 to-black"
      />
    </div>
  );
};

export default TattooBackground;