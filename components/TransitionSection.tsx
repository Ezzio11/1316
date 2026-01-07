"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TransitionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // --- TRANSFORMS ---
  const spearX = useTransform(scrollYProgress, [0.2, 0.8], ["120%", "-120%"]);
  
  // Text Shattering
  const wreckX = useTransform(scrollYProgress, [0.4, 0.6], ["0%", "-50%"]);
  const wreckY = useTransform(scrollYProgress, [0.4, 0.6], ["0%", "-150%"]);
  const wreckRotate = useTransform(scrollYProgress, [0.4, 0.6], [0, -45]);
  const wreckOpacity = useTransform(scrollYProgress, [0.4, 0.55], [1, 0]);

  const everyoneX = useTransform(scrollYProgress, [0.42, 0.62], ["0%", "200%"]);
  const everyoneRotate = useTransform(scrollYProgress, [0.42, 0.62], [0, 90]);
  const everyoneOpacity = useTransform(scrollYProgress, [0.42, 0.58], [1, 0]);

  const leaveX = useTransform(scrollYProgress, [0.44, 0.64], ["0%", "-20%"]);
  const leaveY = useTransform(scrollYProgress, [0.44, 0.64], ["0%", "200%"]);
  const leaveRotate = useTransform(scrollYProgress, [0.44, 0.64], [0, -20]);
  const leaveOpacity = useTransform(scrollYProgress, [0.44, 0.6], [1, 0]);

  // Flash Effect
  const impactFlash = useTransform(scrollYProgress, [0.45, 0.5, 0.55], [0, 0.8, 0]);

  return (
    <div ref={containerRef} className="h-[500vh] relative z-10 bg-black">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* THUNDERDOME ACCENT */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-blue-600/20 blur-[150px] rounded-full mix-blend-screen" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        {/* RED IMPACT FLASH */}
        <motion.div 
          style={{ opacity: impactFlash }}
          className="fixed inset-0 bg-red-600 mix-blend-overlay z-50 pointer-events-none"
        />

        {/* THE TEXT LAYER */}
        <div className="z-20 relative flex flex-col items-center justify-center mix-blend-difference">
            <motion.h2 
                style={{ x: wreckX, y: wreckY, rotate: wreckRotate, opacity: wreckOpacity }}
                className="text-7xl md:text-9xl font-black text-center text-white leading-[0.85] uppercase drop-shadow-2xl italic origin-bottom-right"
            >
                WRECK
            </motion.h2>

            <motion.h2 
                style={{ x: everyoneX, rotate: everyoneRotate, opacity: everyoneOpacity }}
                className="text-7xl md:text-9xl font-black text-center text-white leading-[0.85] uppercase drop-shadow-2xl origin-left"
            >
                EVERYONE
            </motion.h2>

            <motion.h2 
                style={{ x: leaveX, y: leaveY, rotate: leaveRotate, opacity: leaveOpacity }}
                className="text-7xl md:text-9xl font-black text-center text-transparent bg-clip-text bg-gradient-to-t from-zinc-500 to-white leading-[0.85] uppercase drop-shadow-2xl origin-top"
            >
                & LEAVE
            </motion.h2>
        </div>

        {/* THE SPEAR IMAGE */}
        <motion.div 
            style={{ 
                x: spearX,
                y: "-50%",
                rotate: -5
            }}
            className="absolute top-1/2 w-[80vw] md:w-[60vw] aspect-video z-30 pointer-events-none"
        >
            <div className="w-full h-full relative group">
                {/* 1. Motion Blur Trail (Duplicate image behind) */}
                <img 
                    src="/image_0.png" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 blur-[4px] translate-x-[20px] scale-105 mix-blend-screen"
                />

                {/* 2. Main Image with Drop Shadow ONLY - No rectangular background overlays */}
                <img 
                    src="/image_0.png" 
                    alt="Roman Reigns spears The Fiend" 
                    className="w-full h-full object-cover relative z-10 grayscale contrast-125 brightness-110"
                    style={{
                        // This applies the shadow specifically to the non-transparent pixels
                        filter: "grayscale(100%) contrast(1.25) drop-shadow(0px 10px 10px rgba(0,0,0,0.8)) drop-shadow(0px 0px 30px rgba(200, 20, 20, 0.3))"
                    }}
                />
            </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
            style={{ opacity: useTransform(scrollYProgress, [0.2, 0.4], [1, 0]) }}
            className="text-red-500 font-bold font-mono tracking-[0.5em] text-sm md:text-xl absolute top-[20%] uppercase z-10"
        >
            You never saw it coming
        </motion.p>
      </div>
    </div>
  );
};

export default TransitionSection;