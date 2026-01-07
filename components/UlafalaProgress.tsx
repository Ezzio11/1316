"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const UlaFalaProgress = () => {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 h-[60vh] w-2 z-50 hidden md:flex flex-col items-center justify-between pointer-events-none">
      
      {/* The Track (Empty Beads) */}
      <div className="absolute inset-0 flex flex-col justify-between items-center h-full w-full">
         {/* Generate 20 'beads' */}
         {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
         ))}
      </div>

      {/* The Progress (Red Fill) */}
      {/* We use a masking div to reveal the red version */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div 
            style={{ height }} 
            className="w-full bg-transparent overflow-hidden border-b-2 border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.8)]"
        >
             <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[60vh] w-full flex flex-col justify-between items-center">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_10px_red]" />
                ))}
             </div>
        </motion.div>
      </div>

    </div>
  );
};

export default UlaFalaProgress;