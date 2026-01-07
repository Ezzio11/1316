"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Crown, PenTool } from "lucide-react";

const CoronationSection = () => {
  const [isSigned, setIsSigned] = useState(false);

  return (
    // FIX: Transparent background to let Tattoos show
    <section className="relative min-h-screen flex flex-col md:flex-row z-10 bg-transparent overflow-hidden">
    
    {/* Thunderdome Screens Light Effect */}
    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-900/20 to-transparent z-20 pointer-events-none mix-blend-screen" />
        
        {/* Left: The Visual (Blurred until signed) */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative border-r border-zinc-900/50 overflow-hidden group">
             <motion.div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 grayscale"
                style={{ 
                    backgroundImage: `url('https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/08/31/13/229-pay-08302020jg-11729-8235720faf5d449312f6e05c82073947.jpg?width=1200')`, 
                    filter: isSigned ? "grayscale(100%) blur(0px)" : "grayscale(100%) blur(10px) brightness(0.2)"
                }}
             />
             
             {/* The "Late Entry" Prompt Overlay */}
             {!isSigned && (
                 <div className="absolute inset-0 flex flex-col items-center justify-center z-30 p-6 bg-black/60 backdrop-blur-sm">
                     <p className="text-zinc-400 font-mono text-sm mb-4 uppercase tracking-widest text-center">
                        The match has already started...
                     </p>
                     <button 
                        onClick={() => setIsSigned(true)}
                        className="group relative px-8 py-4 bg-red-700 text-white font-bold uppercase tracking-widest hover:bg-red-600 transition-all active:scale-95"
                     >
                        <span className="flex items-center gap-2">
                            <PenTool size={18} /> Sign Contract
                        </span>
                     </button>
                 </div>
             )}

             {/* The Gold Accent Overlay (Only appears after signing) */}
             {isSigned && (
                <motion.div 
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-20 mix-blend-overlay"
                >
                    <h2 className="text-[12rem] font-black text-yellow-600/30 leading-none tracking-tighter">AND NEW</h2>
                </motion.div>
             )}
        </div>

        {/* Right: The Data & Story */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 relative bg-black/20 backdrop-blur-sm">
            <motion.div
                initial={false}
                animate={isSigned ? { opacity: 1, x: 0 } : { opacity: 0.2, x: 20 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center gap-4 mb-6">
                    <Crown className={isSigned ? "text-yellow-500" : "text-zinc-700"} size={32} />
                    <span className="text-zinc-500 font-mono tracking-widest text-sm">PAYBACK 2020 // NO HOLDS BARRED</span>
                </div>

                <h2 className="text-5xl md:text-7xl font-bold text-white mb-2 leading-tight">
                    WORK SMARTER, <br/> 
                    <span className={isSigned ? "text-red-600" : "text-zinc-700"}>NOT HARDER.</span>
                </h2>
                
                <p className="text-zinc-400 text-lg mb-12 max-w-md font-serif italic border-l-2 border-zinc-800 pl-4">
                    "I wrecked the Fiend. I wrecked the Monster. And I left."
                </p>

                {/* The "Needle Mover" Data Block */}
                <div className="border-t border-zinc-800 pt-8 grid grid-cols-2 gap-8">
                    <div>
                        <p className="text-zinc-500 text-xs font-mono uppercase mb-1">Time Active In Match</p>
                        <motion.p 
                            className="text-4xl text-white font-mono"
                            initial={{ opacity: 0 }}
                            animate={isSigned ? { opacity: 1 } : {}}
                        >
                            02:34
                        </motion.p>
                        <p className="text-zinc-600 text-xs mt-1">*Match duration: 12:46</p>
                    </div>
                    <div>
                        <p className="text-zinc-500 text-xs font-mono uppercase mb-1">Method of Victory</p>
                        <motion.p 
                            className="text-3xl text-white font-mono uppercase"
                            initial={{ opacity: 0 }}
                            animate={isSigned ? { opacity: 1 } : {}}
                        >
                            Spear <br/> <span className="text-sm text-zinc-500">(Pinfall on Strowman)</span>
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default CoronationSection;