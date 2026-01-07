"use client";

import React from "react";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

const HeymanRevealSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center z-10 bg-zinc-950 overflow-hidden py-12">
        
        {/* THUNDERDOME BACKGROUND: LED Screens Effect */}
        <div className="absolute inset-0 z-0">
             {/* The "Screens" */}
             <div className="w-full h-full bg-[linear-gradient(rgba(30,58,138,0.2)_2px,transparent_2px),linear-gradient(90deg,rgba(30,58,138,0.2)_2px,transparent_2px)] bg-[size:40px_40px]"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        </div>

        {/* Content Container - Enforcing Grid Constraints */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Text Side */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
            >
                <div className="flex items-center gap-3 mb-4 text-blue-500">
                    <Handshake size={20} />
                    <span className="font-mono uppercase tracking-widest text-xs font-bold bg-blue-900/20 px-2 py-1 border border-blue-500/30 rounded">
                        SmackDown // Aug 28, 2020
                    </span>
                </div>
                
                {/* Reduced font size from 8xl to 6xl/7xl to fit better */}
                <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 uppercase leading-[0.9] tracking-tight">
                    The Unholy <br/> 
                    <span className="text-red-600">
                        Alliance
                    </span>
                </h2>
                
                <div className="border-l-4 border-red-700 pl-6 bg-gradient-to-r from-red-900/10 to-transparent py-2">
                    <p className="text-zinc-300 text-lg lg:text-xl font-serif italic max-w-lg">
                        "I am not back to fit in. I am back to take what is mine. And I have the best counsel to ensure it happens."
                    </p>
                </div>
            </motion.div>

            {/* Image Side - Fixed Height Container */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2 w-full h-[50vh] lg:h-[600px] relative shadow-[0_0_60px_rgba(0,50,150,0.3)] border border-white/10"
            >
                {/* The Split Container */}
                <div className="absolute inset-0 flex bg-zinc-900">
                    
                    {/* LEFT: Roman */}
                    <div className="w-1/2 relative h-full overflow-hidden border-r border-red-600/50 group">
                        <img 
                            src="roman.jpeg" 
                            alt="Roman Reigns" 
                            className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                        />
                         {/* Text Overlay */}
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                            <p className="text-white font-black uppercase text-xl lg:text-3xl leading-none">The<br/>Talent</p>
                        </div>
                    </div>

                    {/* RIGHT: Heyman */}
                    <div className="w-1/2 relative h-full overflow-hidden group">
                        <img 
                            src="heyman.jpeg" 
                            alt="Paul Heyman" 
                            className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                        />
                        {/* Text Overlay */}
                        <div className="absolute bottom-0 right-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-right">
                            <p className="text-white font-black uppercase text-xl lg:text-3xl leading-none">The<br/>Counsel</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default HeymanRevealSection;