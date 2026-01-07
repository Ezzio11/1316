
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Hammer, Briefcase, AlertOctagon, Skull } from "lucide-react";

const TractorSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    // --- STYLE: EDITORIAL CHAOS (Clean, Heavy, Stark) ---
    // No grit. No glitches. Just massive weight and distinct layers.

    // TIMELINE: Lift (0-0.2) -> Chaos (0.2-0.7) -> Burial (0.8+)

    // 1. THE LIFT (The Environment Changes)
    // Smooth, heavy mechanical tilt.
    const rotateX = useTransform(scrollYProgress, [0.05, 0.2], [0, 10]); // Less extreme angle, more readable
    const rotateZ = useTransform(scrollYProgress, [0.05, 0.2], [0, -8]);
    const scale = useTransform(scrollYProgress, [0.05, 0.2], [1, 0.9]);
    const y = useTransform(scrollYProgress, [0.05, 0.2], ["0%", "5%"]);

    const tractorY = useTransform(scrollYProgress, [0.0, 0.2], ["100%", "0%"]);

    // 2. THE CHAOS (Clean Cards)
    // A. Heyman (0.3)
    const heymanY = useTransform(scrollYProgress, [0.25, 0.3], ["100vh", "0vh"]); // Slides up clean
    const heymanOpacity = useTransform(scrollYProgress, [0.35, 0.4], [1, 0]); // Fades out for next item

    // B. Theory (0.5)
    // Slides in from side
    const theoryX = useTransform(scrollYProgress, [0.4, 0.5], ["100vw", "0vw"]);
    const theoryScale = useTransform(scrollYProgress, [0.55, 0.6], [1, 0.8]); // Slight pushback on exit
    const theoryOpacity = useTransform(scrollYProgress, [0.55, 0.6], [1, 0]);

    // C. Roman (0.6) - Massive Text Overlay
    const textScale = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0.8, 1.2, 0.8]);
    const textOpacity = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 1, 0]);

    // 3. THE BURIAL (0.8)
    // Finishes earlier to ensure a "Hold" at the end (User must scroll through static image)
    const debrisY = useTransform(scrollYProgress, [0.7, 0.85], ["-100%", "0%"]);
    const finalOpacity = useTransform(scrollYProgress, [0.8, 0.85], [0, 1]);

    // Background Gradient Shift (Subtle)
    const bgGradient = useTransform(scrollYProgress, [0, 1],
        ["radial-gradient(circle at 50% 50%, #27272a 0%, #09090b 100%)", "radial-gradient(circle at 50% 50%, #7f1d1d 0%, #000000 100%)"]
    );

    return (
        <section ref={containerRef} className="relative h-[600vh] bg-zinc-950 flex flex-col items-center border-t-8 border-white/10 perspective-1000">

            {/* Background transitions from Grey to Red-Black */}
            <motion.div style={{ background: bgGradient }} className="absolute inset-0 z-0" />

            {/* Grid Line Decoration (Clean) */}
            <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "100px 100px" }}></div>

            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden perspective-1000">

                {/* --- THE RING (Clean Stage) --- */}
                <motion.div
                    style={{ rotateX, rotateZ, scale, y }}
                    className="relative w-[85vw] h-[75vh] bg-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center border border-white/10 overflow-hidden"
                >
                    {/* Ring Canvas */}
                    <div className="absolute inset-0 bg-white/5"></div>

                    {/* Clean Ropes */}
                    <div className="absolute top-[30%] w-full h-2 bg-red-600 shadow-md"></div>
                    <div className="absolute top-[50%] w-full h-2 bg-red-600 shadow-md"></div>
                    <div className="absolute top-[70%] w-full h-2 bg-red-600 shadow-md"></div>

                    {/* MAIN TITLE (Clean, Swiss Style) */}
                    <motion.div
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
                        className="text-center z-10"
                    >
                        <h2 className="text-sm font-bold tracking-[0.5em] text-red-500 uppercase mb-4">SummerSlam 2022</h2>
                        <h1 className="text-8xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none">
                            LAST MAN<br />STANDING
                        </h1>
                    </motion.div>

                    {/* --- 2. HEYMAN (The Sacrifice) --- */}
                    <motion.div
                        style={{ y: heymanY, opacity: heymanOpacity, z: 50 }}
                        className="absolute left-[10%] bottom-[10%] w-[35vw] z-50 drop-shadow-2xl"
                    >
                        <div className="bg-white p-2 transform -rotate-2">
                            <img
                                src="https://pbs.twimg.com/media/FY9wZChX0AAuq1s.jpg"
                                alt="Heyman F5"
                                className="w-full h-auto object-cover grayscale contrast-125"
                            />
                            <div className="p-2">
                                <h3 className="font-black text-3xl text-black uppercase leading-none">The Sacrifice</h3>
                                <p className="font-mono text-xs text-zinc-500 mt-1">TIME: 22:45 // WISEMAN DOWN</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- 3. THEORY (The Failed Cash-In) --- */}
                    <motion.div
                        style={{ x: theoryX, scale: theoryScale, opacity: theoryOpacity, z: 50 }}
                        className="absolute right-[5%] top-[10%] w-[40vw] z-50 drop-shadow-2xl"
                    >
                        <div className="bg-red-600 p-2 transform rotate-2">
                            <img
                                src="https://www.wwe.com/f/styles/wwe_large/public/2022/07/20220730_SSLAM_TheoryCashIn--2cfc9d6936a9b3a32644327fa32ef5b4.jpg"
                                alt="Austin Theory Cash In Failed"
                                className="w-full h-auto object-cover grayscale contrast-125 mix-blend-multiply"
                            />
                            <div className="p-2">
                                <h3 className="font-black text-4xl text-white uppercase leading-none">DENIED.</h3>
                                <p className="font-mono text-xs text-red-200 mt-1">CASH-IN ATTEMPT // FAILED</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- 4. ROMAN (The Smash) --- */}
                    <motion.div
                        style={{ scale: textScale, opacity: textOpacity }}
                        className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
                    >
                        <h1 className="text-[25vw] font-black text-transparent bg-clip-text bg-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] tracking-tighter leading-none" style={{ WebkitTextStroke: "2px black" }}>
                            SMASH
                        </h1>
                    </motion.div>

                    {/* --- 5. THE END (Resilience) --- */}
                    <motion.div
                        style={{ opacity: finalOpacity }}
                        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none bg-black/80 backdrop-blur-sm"
                    >
                        <h2 className="text-[10vw] font-black text-white uppercase leading-none tracking-tight text-center drop-shadow-2xl">
                            HE WON'T<br /><span className="text-red-600">DIE.</span>
                        </h2>
                    </motion.div>

                </motion.div>

                {/* --- TRACTOR ARM (Clean overlay) - MOVED TO BACKGROUND LAYER (z-30) --- */}
                <motion.div
                    style={{ y: tractorY }}
                    className="absolute bottom-0 right-[5%] w-[50vw] z-30 pointer-events-none drop-shadow-2xl"
                >
                    <img
                        src="https://preview.redd.it/psbattle-brock-lesnar-flipping-a-ring-with-a-tractor-v0-uzqjbyzm1ve91.jpg?auto=webp&s=2cc83264bcf5490be3bbe4a84fdd9035400987a1"
                        alt="Tractor Lift"
                        className="w-full h-full object-cover grayscale-[100%] contrast-125"
                        style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }}
                    />
                </motion.div>

                {/* --- THE BURIAL (Clean Slide) --- */}
                <motion.div
                    style={{ y: debrisY }}
                    className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
                >
                    <div className="w-full h-full bg-black flex items-center justify-center">
                        <img
                            src="https://www.wwe.com/f/styles/wwe_16_9_xl/public/all/2022/07/20220730_SSLAM_Roman_Final--dfa8000c0037015c2cc4af22052e8da8.jpg"
                            alt="Debris Burial"
                            className="w-full h-full object-cover opacity-40"
                        />
                        <h1 className="absolute text-[15vw] font-black text-white tracking-widest uppercase drop-shadow-2xl z-10">BURIED</h1>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default TractorSection;
