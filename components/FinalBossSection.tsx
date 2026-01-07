"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Zap, Skull, Crown, Swords } from "lucide-react";

const FinalBossSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bloodlineRulesActive, setBloodlineRulesActive] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax for the 4 corners
  const topLeftY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const topRightY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const bottomLeftY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const bottomRightY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={containerRef} className="relative min-h-[150vh] bg-black border-t-8 border-green-600 overflow-hidden">
      
      {/* Background Lightning/Electricity */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          {/* Green Electric Glow */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${bloodlineRulesActive ? 'opacity-40' : 'opacity-10'} bg-gradient-to-t from-green-900/50 via-transparent to-green-900/50`}></div>
      </div>

      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center p-6">
        
        {/* HEADER */}
        <div className="text-center mb-8 relative z-20">
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 text-green-500 border border-green-500/50 px-4 py-1 rounded-full bg-black/80 backdrop-blur-md mb-4"
            >
                <Zap size={16} className="fill-green-500 animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest">WrestleMania XL Night 1</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-none tracking-tighter drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                THE FINAL <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-green-600">BOSS.</span>
            </h2>
        </div>

        {/* --- THE 4-WAY SPLIT --- */}
        <div className="relative w-full max-w-6xl aspect-video grid grid-cols-2 gap-2 md:gap-4 z-10">
            
            {/* 1. ROMAN (Top Left) */}
            <motion.div style={{ y: topLeftY }} className="relative bg-zinc-900 overflow-hidden rounded-tl-3xl group border border-zinc-800">
                <img src="https://www.wwe.com/f/styles/og_image/public/2024/04/20240407_WMXL_Roman_Entrance--0575eaffbb0bfcd6f6841de08763a46f.jpg" alt="Roman Reigns" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" />
                <div className="absolute bottom-4 left-4">
                    <p className="text-xs font-mono text-zinc-400">THE TRIBAL CHIEF</p>
                    <h3 className="text-2xl font-black text-white uppercase">Roman Reigns</h3>
                </div>
            </motion.div>

            {/* 2. THE ROCK (Top Right) */}
            <motion.div style={{ y: topRightY }} className="relative bg-zinc-900 overflow-hidden rounded-tr-3xl group border border-zinc-800 border-l-4 border-l-green-600">
                <img src="https://i.ytimg.com/vi/uDzB8oMm74g/maxresdefault.jpg" alt="The Rock" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" />
                <div className="absolute bottom-4 right-4 text-right">
                    <p className="text-xs font-mono text-green-500">THE FINAL BOSS</p>
                    <h3 className="text-2xl font-black text-white uppercase">The Rock</h3>
                </div>
            </motion.div>

            {/* 3. CODY (Bottom Left) */}
            <motion.div style={{ y: bottomLeftY }} className="relative bg-zinc-900 overflow-hidden rounded-bl-3xl group border border-zinc-800">
                <img src="https://ftw.usatoday.com/gcdn/authoring/images/smg/2025/02/25/SFTW/80206513007-90-2228898.jpeg?width=660&height=423&fit=crop&format=pjpg&auto=webp" alt="Cody Rhodes" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" />
                <div className="absolute top-4 left-4">
                    <h3 className="text-2xl font-black text-white uppercase">Cody Rhodes</h3>
                    <p className="text-xs font-mono text-zinc-400">THE NIGHTMARE</p>
                </div>
            </motion.div>

            {/* 4. SETH (Bottom Right) */}
            <motion.div style={{ y: bottomRightY }} className="relative bg-zinc-900 overflow-hidden rounded-br-3xl group border border-zinc-800">
                <img src="/seth.jpg" alt="Seth Rollins" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" />
                <div className="absolute top-4 right-4 text-right">
                    <h3 className="text-2xl font-black text-white uppercase">Seth Rollins</h3>
                    <p className="text-xs font-mono text-zinc-400">THE VISIONARY</p>
                </div>
            </motion.div>

            {/* CENTER: THE STIPULATION BUTTON */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                <button 
                    onClick={() => setBloodlineRulesActive(!bloodlineRulesActive)}
                    className={`
                        w-24 h-24 rounded-full flex items-center justify-center border-4 transition-all duration-300 hover:scale-110 active:scale-95
                        ${bloodlineRulesActive 
                            ? 'bg-red-600 border-red-500 shadow-[0_0_50px_red]' 
                            : 'bg-black border-green-600 shadow-[0_0_30px_green]'}
                    `}
                >
                    {bloodlineRulesActive ? <Skull size={40} className="text-white animate-pulse" /> : <Swords size={40} className="text-green-500" />}
                </button>
            </div>

        </div>

        {/* --- BLOODLINE RULES OVERLAY --- */}
        <AnimatePresence>
            {bloodlineRulesActive && (
                <motion.div 
                    initial={{ opacity: 0, scale: 2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
                >
                    <div className="bg-black/90 p-8 border-y-8 border-red-600 w-full text-center transform -rotate-6 shadow-2xl backdrop-blur-sm">
                        <h2 className="text-6xl md:text-9xl font-black text-red-600 uppercase tracking-tighter drop-shadow-[0_5px_0_rgba(255,255,255,0.2)]">
                            BLOODLINE<br/>RULES
                        </h2>
                        <p className="text-white font-mono text-xl tracking-[0.5em] mt-2">ANYTHING GOES.</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default FinalBossSection;