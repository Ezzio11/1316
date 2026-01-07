"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Skull } from "lucide-react";

const QuoteWord = ({ children, range, progress }: { children: string, range: [number, number], progress: any }) => {
    const opacity = useTransform(progress, range, [0.1, 1]);
    const color = useTransform(progress, range, ["#52525b", "#ffffff"]);
    const isSpecial = children.includes("island") || children.includes("relevancy");
    const specialColor = useTransform(progress, range, ["#52525b", "#dc2626"]);

    return (
        <motion.span 
            style={{ opacity, color: isSpecial ? specialColor : color }} 
            className="inline-block mr-[0.25em] transition-colors"
        >
            {children}
        </motion.span>
    );
};

const AllianceSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "start 0.2"]
    });

    const quote = "It is not enough to just be at the top... You have to occupy the island of relevancy.";
    const words = quote.split(" ");

    return (
        // FIX: Changed 'bg-zinc-950' to 'bg-transparent'
        <section ref={containerRef} className="min-h-[100vh] flex items-center justify-center relative z-10 py-24 bg-transparent">
            
            {/* Ambient Background Pulse (Still keep this, it blends with tattoos) */}
            <motion.div 
                style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.1, 0]) }}
                className="absolute inset-0 bg-red-900 blur-[150px] pointer-events-none"
            />

            <div className="max-w-5xl mx-auto px-6 text-center relative z-20">
                 <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                 >
                    <Skull className="mx-auto text-red-900 mb-12 animate-pulse" size={64} />
                    
                    <blockquote className="text-4xl md:text-7xl font-serif leading-tight mb-12 flex flex-wrap justify-center">
                        {words.map((word, i) => {
                            const start = i / words.length;
                            const end = start + (1 / words.length);
                            return (
                                <QuoteWord key={i} range={[start, end]} progress={scrollYProgress}>
                                    {word}
                                </QuoteWord>
                            )
                        })}
                    </blockquote>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <cite className="text-zinc-500 font-mono text-sm tracking-[0.3em] not-italic border-t border-zinc-800 pt-6 block">
                            — PAUL HEYMAN, <span className="text-red-700 font-bold">SPECIAL COUNSEL</span>
                        </cite>
                    </motion.div>
                 </motion.div>
            </div>
        </section>
    );
}

export default AllianceSection;