"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link2, Zap } from "lucide-react";

const UnificationSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // --- ANIMATIONS (RE-MAPPED FOR 400VH) ---
    // Sticky range is roughly 0.2 to 0.8

    // 1. Double Belt Phase (The Hold)
    // Visible entering (0-0.2), fades out quickly after pinning (0.2-0.28)
    const doubleOpacity = useTransform(scrollYProgress, [0.22, 0.28], [1, 0]);
    const doubleScale = useTransform(scrollYProgress, [0.22, 0.28], [1, 1.1]);

    // 2. Enter from Sides (0.28 - 0.38)
    const leftBeltX = useTransform(scrollYProgress, [0.28, 0.38], ["-150%", "15%"]);
    const rightBeltX = useTransform(scrollYProgress, [0.28, 0.38], ["150%", "-15%"]);

    // 3. The Collision (0.42 - 0.45)
    const scale = useTransform(scrollYProgress, [0.42, 0.45, 0.48], [1, 1.5, 0]);
    const opacity = useTransform(scrollYProgress, [0.45, 0.48], [1, 0]);

    // Lightning (Trigger at 0.45)
    const lightningOpacity = useTransform(scrollYProgress, [0.44, 0.45, 0.48], [0, 1, 0]);
    const lightningScale = useTransform(scrollYProgress, [0.45, 0.55], [0.5, 2]);
    const flashOpacity = useTransform(scrollYProgress, [0.45, 0.47, 0.55], [0, 0.8, 0]);

    // 4. The Explosion/Gold Belt (0.45 - 0.55)
    const goldScale = useTransform(scrollYProgress, [0.45, 0.55], [0, 1.2]);
    const goldOpacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
    const glowOpacity = useTransform(scrollYProgress, [0.45, 0.55, 0.75], [0, 1, 0]);

    // 5. Crowned Phase (End)
    // Fades in (0.6 - 0.7), HOLDS visible until (0.85)
    const crownedOpacity = useTransform(scrollYProgress, [0.6, 0.7, 0.9], [0, 1, 1]); // Stays 1 until 0.9
    const crownedScale = useTransform(scrollYProgress, [0.6, 0.9], [1.1, 1]);

    // Text Reveal (0.55 - 0.65)
    const textY = useTransform(scrollYProgress, [0.55, 0.65], ["50px", "0px"]);
    const textOpacity = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);

    return (
        <section ref={containerRef} className="relative h-[400vh] flex flex-col items-center">

            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* --- IMAGE 1: THE DOUBLE CHAMPION (Start) --- */}
                <motion.div
                    style={{ opacity: doubleOpacity, scale: doubleScale }}
                    className="absolute inset-0 z-10"
                >
                    <img
                        src="/double.jpg"
                        alt="Roman with Two Belts"
                        className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
                </motion.div>

                {/* --- BACKGROUND GLOW --- */}
                <motion.div
                    style={{ opacity: glowOpacity }}
                    className="absolute inset-0 bg-radial-gradient from-yellow-500/30 to-transparent blur-[100px] z-0"
                />

                {/* --- LIGHTNING STRIKE --- */}
                <motion.div
                    style={{ opacity: lightningOpacity, scale: lightningScale }}
                    className="absolute z-50 pointer-events-none mix-blend-screen"
                >
                    <div className="relative">
                        <Zap size={500} className="text-white fill-blue-100 drop-shadow-[0_0_50px_rgba(59,130,246,1)] rotate-12" />
                        <Zap size={500} className="absolute inset-0 text-white fill-white blur-md animate-pulse rotate-12" />
                    </div>
                </motion.div>

                {/* --- IMPACT FLASH --- */}
                <motion.div
                    style={{ opacity: flashOpacity }}
                    className="absolute inset-0 bg-white z-[60] pointer-events-none mix-blend-overlay"
                />

                {/* --- BELT 1: UNIVERSAL (BLUE) --- */}
                <motion.div
                    style={{ x: leftBeltX, scale, opacity }}
                    className="absolute z-20 w-[60vw] md:w-[50vw] max-w-[800px]"
                >
                    <img
                        src="/universal.png"
                        alt="Universal Title"
                        className="w-full drop-shadow-[0_0_50px_rgba(0,0,255,0.6)]"
                    />
                </motion.div>

                {/* --- BELT 2: WWE (BLACK) --- */}
                <motion.div
                    style={{ x: rightBeltX, scale, opacity }}
                    className="absolute z-20 w-[60vw] md:w-[50vw] max-w-[800px]"
                >
                    <img
                        src="/wwe.png"
                        alt="WWE Title"
                        className="w-full drop-shadow-[0_0_50px_rgba(255,255,255,0.4)]"
                    />
                </motion.div>

                {/* --- THE EXPLOSION: UNDISPUTED TITLE --- */}
                <motion.div
                    style={{ scale: goldScale, opacity: goldOpacity }}
                    className="absolute z-30 w-[80vw] md:w-[60vw] max-w-[1000px]"
                >
                    <img
                        src="/undisputed.png"
                        alt="Undisputed Title"
                        className="w-full drop-shadow-[0_0_100px_rgba(234,179,8,1)] animate-pulse"
                    />
                    {/* Sparkle Effect Overlay */}
                    <div className="absolute inset-0 bg-yellow-400/20 mix-blend-overlay animate-ping rounded-full blur-xl"></div>
                </motion.div>

                {/* --- IMAGE 2: CROWNED BY TRIPLE H (End) --- */}
                <motion.div
                    style={{ opacity: crownedOpacity, scale: crownedScale }}
                    className="absolute inset-0 z-0" // Behind text but visible
                >
                    <img
                        src="/crowned.jpg"
                        alt="Triple H Crowns Roman"
                        className="w-full h-full object-cover opacity-40"
                    />
                </motion.div>

                {/* --- TEXT CONTENT --- */}
                <motion.div
                    style={{ y: textY, opacity: textOpacity }}
                    className="absolute bottom-12 z-40 text-center"
                >
                    <div className="inline-flex items-center gap-2 text-yellow-500 border border-yellow-500/50 px-4 py-1 rounded-full bg-black/80 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                        <Link2 size={16} />
                        <span className="font-mono text-xs uppercase tracking-widest">WrestleMania 38</span>
                    </div>
                    <h2 className="text-6xl md:text-9xl font-black text-white uppercase leading-none tracking-tighter drop-shadow-2xl">
                        UNDISPUTED <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-200">CHAMPION.</span>
                    </h2>
                    <p className="mt-4 text-zinc-400 font-mono text-sm tracking-[0.2em] uppercase">
                        Roman Reigns def. Brock Lesnar
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default UnificationSection;
