"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, AlertTriangle, CheckCircle2 } from "lucide-react";

const CivilWarSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // --- ANIMATIONS ---

    // 1. The Kick (Jimmy)
    const kickX = useTransform(scrollYProgress, [0.1, 0.4], ["-100%", "0%"]);
    const kickOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

    // 2. The Pin (Jey)
    const pinScale = useTransform(scrollYProgress, [0.5, 0.8], [0.8, 1]);
    const pinOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

    // Background Gradient Shift (Red to Blueish/Grey)
    const bgGradient = useTransform(scrollYProgress, [0, 1],
        ["radial-gradient(circle at center, #450a0a 0%, #000 100%)", "radial-gradient(circle at center, #1e293b 0%, #000 100%)"]
    );

    return (
        <motion.section
            ref={containerRef}
            style={{ background: bgGradient }}
            className="relative h-[250vh] flex flex-col items-center"
        >

            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

                {/* --- HEADER --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="absolute top-10 z-30 text-center"
                >
                    <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
                        CIVIL <span className="text-zinc-500">WAR.</span>
                    </h2>
                </motion.div>

                {/* --- MOMENT 1: THE KICK (Night of Champions) --- */}
                <motion.div
                    style={{ x: kickX, opacity: kickOpacity }}
                    className="absolute top-[20%] left-0 w-full md:w-2/3 z-20"
                >
                    <div className="relative aspect-video border-r-8 border-red-600 bg-black shadow-2xl skew-x-12 -ml-12">
                        <Image
                            src="https://i.ytimg.com/vi/k3HBXBJNW08/maxresdefault.jpg"
                            alt="Usos Double Superkick"
                            fill
                            className="object-cover grayscale contrast-125 opacity-80"
                        />
                        <div className="absolute bottom-4 right-8 text-right skew-x-[-12deg]">
                            <p className="font-black text-red-500 text-6xl leading-none">BLOODLINE IMPLODES</p>
                            <p className="text-white font-mono text-sm uppercase mt-2">Money in the Bank 2023</p>
                        </div>
                    </div>
                </motion.div>

                {/* --- MOMENT 2: THE PIN (MITB 2023) --- */}
                <motion.div
                    style={{ scale: pinScale, opacity: pinOpacity }}
                    className="absolute bottom-[10%] w-[90vw] md:w-[60vw] max-w-5xl z-30"
                >
                    <div className="relative aspect-video border-4 border-white rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.2)]">
                        <Image
                            src="https://www.wwe.com/f/styles/gallery_img_l/public/all/2023/07/249_MITB_07012023AT_19919--cd5ef595652501340819c4a1e3278416.jpg"
                            alt="Jey Uso Pins Roman"
                            fill
                            className="object-cover grayscale contrast-110"
                        />

                        {/* THE 1-2-3 COUNT OVERLAY */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h3 className="text-[15vw] font-black text-white/20 uppercase tracking-tighter mix-blend-overlay">
                                PINNED.
                            </h3>
                        </div>

                        <div className="absolute top-6 left-6 flex items-center gap-3 bg-black/60 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
                            <CheckCircle2 className="text-green-500" size={24} />
                            <div>
                                <p className="text-xs text-zinc-400 font-mono uppercase">Streak Broken</p>
                                <p className="text-white font-bold text-sm">First Pinfall Loss in 1,294 Days</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </motion.section>
    );
};

export default CivilWarSection;
