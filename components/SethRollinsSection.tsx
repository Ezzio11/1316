"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Ban, AlertCircle } from "lucide-react";

const SethRollinsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // --- ANIMATIONS ---
  
  // 1. The Shield Intro
  const shieldOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const shieldScale = useTransform(scrollYProgress, [0.1, 0.3], [1.5, 1]);

  // 2. The Choke Zoom & Shake
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const shakeX = useTransform(scrollYProgress, [0.7, 0.75, 0.8, 0.85, 0.9], ["0px", "-8px", "8px", "-8px", "0px"]);

  // 3. The Red Rage
  const redOverlay = useTransform(scrollYProgress, [0.4, 0.9], [0, 0.8]);

  // 4. The Vignette
  const vignette = useTransform(scrollYProgress, [0.2, 0.9], [
    "radial-gradient(circle at center, transparent 60%, black 100%)",
    "radial-gradient(circle at center, transparent 10%, black 100%)" 
  ]);

  // 5. Text Blur & DQ Reveal
  const textBlur = useTransform(scrollYProgress, [0.6, 1], ["0px", "5px"]);
  
  // DQ Stamp (Slams onto the image at the end)
  const dqOpacity = useTransform(scrollYProgress, [0.8, 0.85], [0, 1]);
  const dqScale = useTransform(scrollYProgress, [0.8, 0.85], [2, 1]); 

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-zinc-900 border-t-4 border-zinc-800 z-10">
      
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* --- DYNAMIC BACKGROUNDS --- */}
        <motion.div 
            style={{ opacity: redOverlay }}
            className="absolute inset-0 bg-red-900 mix-blend-multiply z-10 pointer-events-none"
        />
        <motion.div 
            style={{ background: vignette }}
            className="absolute inset-0 z-20 pointer-events-none"
        />
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>


        {/* --- CONTENT LAYER --- */}
        {/* Use 'justify-center' with explicit padding to ensure content stays within bounds */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 h-full flex flex-col justify-center items-center gap-6 py-8">
            
            {/* 1. HEADER (Compact) - Added flex-shrink-0 to prevent crushing */}
            <motion.div 
                style={{ opacity: shieldOpacity, scale: shieldScale }}
                className="text-center relative z-30 flex-shrink-0"
            >
                <div className="inline-flex items-center gap-2 text-yellow-500 mb-2 border border-yellow-500/30 px-3 py-1 rounded bg-black/50 backdrop-blur-md">
                    <Shield size={14} />
                    <span className="font-mono text-[10px] uppercase tracking-widest">Royal Rumble 2022</span>
                </div>
                <h2 className="text-4xl md:text-7xl font-black text-white uppercase leading-none tracking-tighter drop-shadow-2xl">
                    HE WON'T ALLOW ME<br/>
                    <span className="text-zinc-500">TO LET GO.</span>
                </h2>
            </motion.div>

            {/* 2. THE IMAGE STAGE (Responsive Height) */}
            {/* Changed from fixed aspect ratio to viewport height percentage to guarantee fit */}
            <div className="relative w-full h-[45vh] md:h-[55vh] flex items-center justify-center">
                <motion.div 
                    style={{ scale: scale, x: shakeX }}
                    className="relative w-full h-full z-20"
                >
                    <img 
                        src="/image_1.png" 
                        alt="Roman Reigns chokes Seth Rollins" 
                        className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                    />
                </motion.div>
                
                {/* The DQ Indicator - SLAMS ONTO THE IMAGE */}
                <motion.div 
                    style={{ opacity: dqOpacity, scale: dqScale }}
                    className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
                >
                    <div className="flex flex-col items-center justify-center gap-2 text-zinc-500 bg-black/90 px-8 py-6 rounded-xl border-4 border-red-600 shadow-[0_0_50px_rgba(220,38,38,0.8)] backdrop-blur-md transform -rotate-12">
                        <Ban size={64} className="text-red-600 animate-pulse" />
                        <div className="text-center font-mono text-xs uppercase tracking-widest leading-tight">
                            <p className="text-red-500 font-black text-4xl tracking-tighter">DISQUALIFIED</p>
                            <p className="text-white mt-1">Refusal to Break Hold</p>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Anchor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-red-900/20 to-transparent blur-3xl -z-10"></div>
            </div>

            {/* 3. CONTEXT (The Narrative) - Added flex-shrink-0 */}
            <motion.div 
                style={{ filter: `blur(${textBlur})` }}
                className="text-center max-w-2xl mx-auto relative z-30 flex flex-col items-center gap-4 flex-shrink-0"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left bg-zinc-900/80 border border-zinc-800 p-4 rounded-lg backdrop-blur-sm">
                    <div>
                        <h4 className="flex items-center gap-2 text-yellow-500 font-bold uppercase text-xs mb-1">
                            <AlertCircle size={12} /> Psychological Warfare
                        </h4>
                        <p className="text-zinc-400 text-[10px] leading-relaxed font-mono">
                            Seth Rollins entered wearing his S.H.I.E.L.D. tactical vest to the S.H.I.E.L.D. music. He didn't come to wrestle; he came to haunt Roman with the ghost of their brotherhood.
                        </p>
                    </div>
                    <div>
                        <h4 className="flex items-center gap-2 text-red-500 font-bold uppercase text-xs mb-1">
                            <Ban size={12} /> The Snap
                        </h4>
                        <p className="text-zinc-400 text-[10px] leading-relaxed font-mono">
                            Roman locked in the Guillotine. Seth reached the ropes. Roman refused to let go. He chose to lose the match to keep his sanity. <span className="text-white">He retained the title via Champions Advantage.</span>
                        </p>
                    </div>
                </div>     
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SethRollinsSection;