"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DamageRadar from "./DamageRadar";
import { X, AlertTriangle } from "lucide-react";

const HIACSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // --- SCROLL PHYSICS ---
  
  // 1. THE CAGE DROP (Immediate & Heavy)
  // Starts at -120% (High above) and lands at 0% (Locked in)
  // The range [0, 0.5] means it hits the floor when you are halfway through the section
  const cageY = useTransform(scrollYProgress, [0, 0.5], ["-120%", "0%"]);
  
  // 2. Parallax Floating Images
  const y1 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={containerRef} className="relative min-h-[150vh] bg-red-950 flex flex-col items-center py-24 overflow-hidden border-t-8 border-black">
        
        {/* --- FOREGROUND: THE CAGE (Interactive) --- */}
        <motion.div 
            style={{ y: cageY }}
            className="absolute top-0 left-0 w-full h-[120%] z-50 pointer-events-none"
        >
             {/* THE MASKED CAGE PATTERN */}
             {/* maskImage creates a 'hole' in the center for the text to be readable */}
             <div className="w-full h-full"
                style={{ 
                    backgroundImage: `
                        repeating-linear-gradient(45deg, rgba(200, 20, 20, 0.5) 0, rgba(200, 20, 20, 0.5) 2px, transparent 2px, transparent 12px), 
                        repeating-linear-gradient(-45deg, rgba(200, 20, 20, 0.5) 0, rgba(200, 20, 20, 0.5) 2px, transparent 2px, transparent 12px)
                    `,
                    backgroundSize: '24px 24px',
                    // The Magic Fix: Fade the cage out in the center, keep it strong at edges
                    maskImage: 'radial-gradient(circle at center, transparent 15%, black 80%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, transparent 15%, black 80%)',
                }} 
             />
             
             {/* Bottom Gradient for blending */}
             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </motion.div>

        {/* --- BACKGROUND ATMOSPHERE --- */}
        <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_90%)] mix-blend-multiply"></div>


        {/* --- CONTENT CONTAINER (Behind the Cage) --- */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            
            {/* Header */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center mb-24 relative"
            >
                <div className="inline-flex items-center gap-2 text-red-500 border border-red-500/50 px-4 py-1 rounded-full mb-6 bg-black/80 backdrop-blur-md shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                    <AlertTriangle size={16} />
                    <span className="font-mono text-xs uppercase tracking-widest">Quit or be Exiled</span>
                </div>
                
                {/* The Text punches through thanks to the mask above */}
                <h2 className="text-7xl md:text-[10rem] font-black text-white uppercase leading-[0.8] drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                    I <span className="text-red-600">QUIT.</span>
                </h2>
            </motion.div>

            {/* --- CINEMATIC GRID --- */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
                
                {/* 1. Guillotine Image (Left) */}
                <motion.div style={{ y: y1 }} className="lg:col-span-5 relative">
                    <div className="relative rotate-[-3deg] group hover:scale-105 transition-transform duration-500 ease-out">
                        <div className="absolute -inset-4 bg-red-600/40 blur-2xl rounded-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-10"></div>
                        <div className="relative aspect-[4/5] overflow-hidden border-4 border-black shadow-2xl bg-black">
                            <img 
                                src="/jimmy.jpg" 
                                alt="Roman chokes Jimmy" 
                                className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:brightness-110 transition-all duration-700"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                                <p className="text-red-600 font-black text-4xl uppercase leading-none tracking-tighter drop-shadow-lg">The<br/>Leverage</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 2. Divider Line */}
                <div className="lg:col-span-2 flex justify-center h-full">
                    <div className="w-[2px] h-64 lg:h-full bg-gradient-to-b from-transparent via-red-600 to-transparent shadow-[0_0_10px_red] opacity-50"></div>
                </div>

                {/* 3. Surrender Image (Right) */}
                <motion.div style={{ y: y2 }} className="lg:col-span-5 relative mt-12 lg:mt-0">
                    <div className="relative rotate-[3deg] group hover:scale-105 transition-transform duration-500 ease-out">
                        <div className="absolute -inset-4 bg-red-600/40 blur-2xl rounded-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-10"></div>
                        <div className="relative aspect-video overflow-hidden border-4 border-black shadow-2xl bg-black">
                            <img 
                                src="/quit.jpg" 
                                alt="Jey Uso Quits" 
                                className="w-full h-full object-cover grayscale contrast-150 brightness-90 group-hover:brightness-110 transition-all duration-700"
                            />
                             <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                                 <X size={80} className="text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                             </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 text-right">
                        <p className="text-white font-serif italic text-2xl leading-tight">"He didn't beat me.<br/>He broke my heart."</p>
                        <p className="text-red-500 text-xs font-mono tracking-[0.2em] mt-2 font-bold">— JEY USO</p>
                    </div>
                </motion.div>

            </div>

            {/* --- DATA SECTION --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-black/60 p-8 rounded-3xl border border-red-900/30 backdrop-blur-md shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px] pointer-events-none"></div>

                 <div className="relative z-10">
                     <h3 className="text-3xl font-bold text-white mb-4 uppercase flex items-center gap-3">
                        <span className="w-2 h-8 bg-red-600 block"></span>
                        Calculated Cruelty
                     </h3>
                     <p className="text-zinc-400 font-mono text-sm leading-relaxed mb-8">
                        The data shows a massive spike in <strong className="text-white">"Emotional Manipulation"</strong> vs standard title defenses. Roman stopped wrestling at minute 18:00 and started talking. The physical violence was merely a tool for psychological dismantling.
                     </p>
                     <ul className="space-y-4">
                         <li className="flex items-center gap-3 text-red-100 text-sm font-bold border-b border-white/10 pb-2">
                             <span className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_5px_red]"></span>
                             Guillotine Hold Duration: <span className="ml-auto font-mono text-red-500">45s</span>
                         </li>
                         <li className="flex items-center gap-3 text-red-100 text-sm font-bold border-b border-white/10 pb-2">
                             <span className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_5px_red]"></span>
                             Times "Tribal Chief" said: <span className="ml-auto font-mono text-red-500">14</span>
                         </li>
                         <li className="flex items-center gap-3 text-red-100 text-sm font-bold border-b border-white/10 pb-2">
                             <span className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_5px_red]"></span>
                             Family Members Injured: <span className="ml-auto font-mono text-red-500">2</span>
                         </li>
                     </ul>
                 </div>
                 
                 <div className="relative z-10">
                    <DamageRadar />
                 </div>
            </div>

        </div>
    </section>
  );
};

export default HIACSection;