"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldAlert, Crosshair, Users } from "lucide-react";

const TacticsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["10%", "-150%"]);

    return (
        <section ref={containerRef} className="relative h-[400vh] bg-zinc-950 border-y-4 border-red-900">

            <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">

                {/* --- HEADER --- */}
                <div className="absolute bottom-12 left-12 z-30">
                    <div className="flex items-center gap-3 text-red-600 mb-2">
                        <ShieldAlert size={32} className="animate-pulse" />
                        <span className="font-bold font-mono text-xl uppercase tracking-widest">Bloodline Tactics</span>
                    </div>
                    <h2 className="text-5xl font-black text-white uppercase tracking-tighter w-full md:w-2/3 leading-none drop-shadow-xl">
                        BY ANY MEANS <br /><span className="text-zinc-600">NECESSARY.</span>
                    </h2>
                </div>

                {/* --- TACTICAL GRID (Horizontal Scroll) --- */}
                <div className="w-full">
                    <motion.div style={{ x }} className="flex gap-12 pl-[30vw] items-center">

                        {/* CARD 1: THE ENFORCER (Clash at the Castle) */}
                        <div className="relative w-[80vw] md:w-[60vw] aspect-video flex-shrink-0 bg-black border-4 border-zinc-800 rounded-xl overflow-hidden group">
                            <img
                                src="https://www.wwe.com/f/styles/gallery_img_l/public/all/2022/09/252_CatC_09032022RF_29431--8560955aff1d320d32dc7c94a9db5cc0.jpg"
                                alt="Solo Sikoa Debut"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                            {/* HUD OVERLAY */}
                            <div className="absolute top-4 right-4 flex flex-col items-end">
                                <span className="font-mono text-red-500 text-xs blink">REC • 00:24:12</span>
                                <span className="font-mono text-white text-lg font-bold">SOLO SIKOA DEBUT</span>
                            </div>

                            <div className="absolute bottom-6 left-6 max-w-lg">
                                <h3 className="text-4xl font-black text-white uppercase mb-2">The Enforcer Arrives</h3>
                                <p className="text-zinc-400 font-mono text-sm leading-relaxed border-l-2 border-red-600 pl-4">
                                    Clash at the Castle 2022. Drew McIntyre had the match won. The ref was down. Solo Sikoa pulled the referee out of the ring, ensuring the reign continued.
                                </p>
                            </div>
                        </div>

                        {/* CARD 2: THE SAVIOR (Crown Jewel 2023) */}
                        <div className="relative w-[80vw] md:w-[60vw] aspect-video flex-shrink-0 bg-black border-4 border-zinc-800 rounded-xl overflow-hidden group">
                            <img
                                src="https://www.wwe.com/f/styles/gallery_img_l/public/all/2023/11/164_JEWEL_11042023AT_16071--0209d00e37da872eca5a5dbc38ae6a6a.jpg"
                                alt="Jimmy Uso Interference"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                            <div className="absolute top-4 right-4 flex flex-col items-end">
                                <span className="font-mono text-red-500 text-xs blink">REC • 00:18:45</span>
                                <span className="font-mono text-white text-lg font-bold">JIMMY USO INTERFERENCE</span>
                            </div>

                            <div className="absolute bottom-6 left-6 max-w-lg">
                                <h3 className="text-4xl font-black text-white uppercase mb-2">The Rope Break</h3>
                                <p className="text-zinc-400 font-mono text-sm leading-relaxed border-l-2 border-red-600 pl-4">
                                    Crown Jewel 2023. LA Knight hit the BFT. 1... 2... Jimmy Uso placed Roman's foot on the bottom rope. The referee saw it. The match continued. Roman won.
                                </p>
                            </div>
                        </div>

                        {/* CARD 3: THE USOS SUPERKICK PARTY (Generic) */}
                        <div className="relative w-[80vw] md:w-[60vw] aspect-video flex-shrink-0 bg-black border-4 border-zinc-800 rounded-xl overflow-hidden group">
                            <img
                                src="https://www.wwe.com/f/styles/gallery_img_l/public/all/2021/10/317_JEWEL_10212021MM_12693--e1539bc76e2dc263970285e9da53e55e.jpg"
                                alt="Usos Superkicks"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                            <div className="absolute top-4 right-4 flex flex-col items-end">
                                <span className="font-mono text-red-500 text-xs blink">REC • [REDACTED]</span>
                                <span className="font-mono text-white text-lg font-bold">MULTIPLIER EFFECT</span>
                            </div>

                            <div className="absolute bottom-6 left-6 max-w-lg">
                                <h3 className="text-4xl font-black text-white uppercase mb-2">1 vs 3</h3>
                                <p className="text-zinc-400 font-mono text-sm leading-relaxed border-l-2 border-red-600 pl-4">
                                    It was never a fair fight. Every title defense became a handicap match designed to protect the Head of the Table.
                                </p>
                            </div>
                        </div>

                    </motion.div>
                </div>

                {/* DECORATIVE BACKGROUND ELEMENTS */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none"></div>

            </div>
        </section>
    );
};

export default TacticsSection;
