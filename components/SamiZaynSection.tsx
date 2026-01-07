"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { Smile, HeartCrack, Gavel, Frown } from "lucide-react";

const SamiZaynSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // --- ANIMATIONS ---
    const bgVariable = useTransform(scrollYProgress, [0, 0.2], ["#000", "#1a0505"]);

    // 1. The Photo
    const photoOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 1]); // Always visible
    const photoRotate = useTransform(scrollYProgress, [0, 0.35], [10, -5]);
    const photoScale = useTransform(scrollYProgress, [0.2, 0.45], [1, 1.1]);

    // Color Drain: Starts vibrant, goes gray as it cracks
    const grayscaleVal = useTransform(scrollYProgress, [0.2, 0.35], ["0%", "100%"]);
    const filterStr = useMotionTemplate`grayscale(${grayscaleVal}) contrast(1.25)`;

    // Icon Morph: Happy -> Sad
    const smileOpacity = useTransform(scrollYProgress, [0.2, 0.25], [1, 0]);
    const frownOpacity = useTransform(scrollYProgress, [0.2, 0.25], [0, 1]); // Quick crossfade
    const badgeColor = useTransform(scrollYProgress, [0.2, 0.25], ["#facc15", "#71717a"]); // Yellow (400) -> Zinc (500) gray

    // 2. The Crack
    const crackScale = useTransform(scrollYProgress, [0.15, 0.45], [0.8, 15]);
    const crackOpacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);

    // 3. The Betrayal Text
    const betrayalY = useTransform(scrollYProgress, [0.5, 0.6], ["100vh", "0vh"]);
    const betrayalOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

    return (
        <motion.section
            ref={containerRef}
            style={{ backgroundColor: bgVariable }}
            className="relative h-[250vh] flex flex-col items-center"
        >

            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center p-6 text-center overflow-hidden">

                {/* --- PART 1: THE HONORARY UCE (Top Layer) --- */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0.6, 0.8], [1, 0]) }} // Fades out LATE
                    className="absolute inset-0 flex flex-col items-center justify-center z-20"
                >
                    <motion.div
                        style={{ opacity: photoOpacity, rotate: photoRotate, scale: photoScale }}
                        className="relative w-[300px] md:w-[400px] aspect-square bg-white p-4 shadow-[0_0_50px_rgba(255,255,255,0.2)] transform hover:scale-105 transition-transform duration-500"
                    >
                        {/* INNER PHOTO WRAPPER: Ensures cracks only affect the image area */}
                        <div className="relative w-full h-full overflow-hidden">
                            <motion.img
                                src="https://preview.redd.it/sami-zayn-fatigue-in-2025-v0-9b7o5hmiotgf1.jpeg?width=1080&crop=smart&auto=webp&s=adf1e5d9c4e409c75f940c696e9705c561e4ee1e"
                                alt="The Honorary Uce Hug"
                                style={{ filter: filterStr }}
                                className="w-full h-full object-cover"
                            />

                            {/* CRACK EFFECT OVERLAY */}
                            <motion.div
                                style={{ scale: crackScale, opacity: crackOpacity }}
                                className="absolute inset-0 z-30 pointer-events-none mix-blend-screen flex items-center justify-center rounded-none"
                            >
                                <Image
                                    src="/shattered_glass_overlay.png"
                                    alt="Shattered Glass"
                                    fill
                                    className="object-cover opacity-90"
                                />
                            </motion.div>
                        </div>
                        <div className="mt-4 font-handwriting text-black text-2xl rotate-[-2deg]">
                            "The Honorary Uce"
                        </div>
                        {/* Dynamic Badge */}
                        <motion.div
                            style={{ backgroundColor: badgeColor }}
                            className="absolute -top-4 -right-4 text-black font-bold p-2 rounded-full rotate-12 shadow-lg z-20 w-12 h-12 flex items-center justify-center"
                        >
                            <motion.div style={{ opacity: smileOpacity }} className="absolute">
                                <Smile size={32} />
                            </motion.div>
                            <motion.div style={{ opacity: frownOpacity }} className="absolute">
                                <Frown size={32} />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* --- PART 2: THE BETRAYAL (Bottom Layer) --- */}
                <motion.div
                    style={{ y: betrayalY, opacity: betrayalOpacity }}
                    className="relative z-40 max-w-6xl w-full"
                >
                    <div className="flex flex-col md:flex-row items-end gap-4 mb-8">
                        <div className="inline-flex items-center gap-2 text-red-500 border border-red-500/50 px-4 py-1 rounded-full bg-black/80 backdrop-blur-md">
                            <HeartCrack size={16} />
                            <span className="font-mono text-xs uppercase tracking-widest">Royal Rumble 2023 | Montreal</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-none tracking-tighter drop-shadow-2xl text-right ml-auto">
                            THE CHOICE<br />WAS <span className="text-red-600">MADE.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* LEFT: THE CHAIR SHOT (Royal Rumble) */}
                        <div className="group relative aspect-square md:aspect-auto md:h-full bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-700">
                            <img
                                src="https://external-preview.redd.it/nx7I7bWff0CpAjcdOyWkiH_o1Dwxrl5VCTQtqTXhY1Q.jpg?width=640&crop=smart&auto=webp&s=b16573ac9beab7fad4204ea01e2f50a14d6d8053"
                                alt="The Chair Shot"
                                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                                <h3 className="text-2xl font-black text-white uppercase flex items-center gap-2">
                                    <Gavel className="text-red-600" /> The Turn
                                </h3>
                                <p className="text-zinc-400 font-mono text-xs mt-2">He refused to hit Owens. He chose to hit Roman.</p>
                            </div>
                        </div>

                        {/* RIGHT: MONTREAL MASSACRE (2x2 Grid) */}
                        <div className="grid grid-cols-2 grid-rows-2 gap-2 aspect-square">
                            {/* 1. Hope */}
                            <div className="relative overflow-hidden rounded-tl-2xl border border-zinc-800">
                                <img src="https://www.wwe.com/f/styles/gallery_img_l/public/all/2023/02/147_EC_02182023CM_24543--6a110c5091d325ddd8ffcd81c5ba7054.jpg" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                            </div>
                            {/* 2. Glory */}
                            <div className="relative overflow-hidden rounded-tr-2xl border border-zinc-800">
                                <img src="https://www.wwe.com/f/styles/gallery_img_l/public/all/2023/02/148_EC_02182023CM_36757--190b46d124a99515009225ee95576160.jpg" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                            </div>
                            {/* 3. Betrayal */}
                            <div className="relative overflow-hidden rounded-bl-2xl border border-zinc-800">
                                <img src="https://www.wwe.com/f/styles/gallery_img_l/public/all/2023/02/152_EC_02182023CM_24663--8cef017d9107474bc06ff7998a9533eb.jpg" className="w-full h-full object-cover grayscale contrast-150 hover:grayscale-0 transition-all" />
                            </div>
                            {/* 4. Heartbreak */}
                            <div className="relative overflow-hidden rounded-br-2xl border border-zinc-800 bg-red-900/20">
                                <img src="https://www.wwe.com/f/styles/gallery_img_l/public/all/2023/02/162_EC_02182023CA_17682--35d3b90ed1dd0ecab60d96a413d20d3e.jpg" className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="font-black text-white/50 text-xl uppercase -rotate-12 border-4 border-white/50 px-2">Heartbreak</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>
        </motion.section>
    );
};

export default SamiZaynSection;
