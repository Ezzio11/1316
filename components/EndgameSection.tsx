"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from "framer-motion";
import { Bell, Crown, Skull, Zap, Crosshair, Trophy } from "lucide-react";

const EndgameSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [choiceLocked, setChoiceLocked] = useState(false);

    // Sequence States
    const [flashbackActive, setFlashbackActive] = useState(false); // Traitor sequence
    const [chairShotActive, setChairShotActive] = useState(false); // Roman hits Seth
    const [codyFinisherActive, setCodyFinisherActive] = useState(false); // Cross Rhodes
    const [pinActive, setPinActive] = useState(false); // 1-2-3 Count
    const [showEndCard, setShowEndCard] = useState(false); // Final State

    const [pinCount, setPinCount] = useState(0); // 1, 2, 3

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // --- SCROLL LOCK LOGIC ---
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // If user reaches the choice section (> 0.8) and hasn't chosen yet, LOCK SCROLL.
        // We check < 0.9 to ensure we don't lock if they somehow jumped past it (unlikely).
        if (latest > 0.8 && latest < 0.9 && !choiceLocked) {
            if (document.body.style.overflow !== "hidden") {
                document.body.style.overflow = "hidden";
            }
        }
    });

    // Safety cleanup: Unlock scroll if component unmounts
    useEffect(() => {
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    // --- 1. THE INTERFERENCES (Scroll Based) ---
    const soloOpacity = useTransform(scrollYProgress, [0.05, 0.1, 0.15, 0.2], [0, 1, 1, 0]);
    const soloScale = useTransform(scrollYProgress, [0.05, 0.2], [1, 1.1]);

    const cenaOpacity = useTransform(scrollYProgress, [0.25, 0.3, 0.35, 0.4], [0, 1, 1, 0]);
    const cenaScale = useTransform(scrollYProgress, [0.25, 0.4], [1, 1.1]);

    const rockOpacity = useTransform(scrollYProgress, [0.45, 0.5, 0.55, 0.6], [0, 1, 1, 0]);
    const rockScale = useTransform(scrollYProgress, [0.45, 0.6], [1, 1.1]);

    const takerOpacity = useTransform(scrollYProgress, [0.65, 0.7, 0.75, 0.8], [0, 1, 1, 0]);
    const takerScale = useTransform(scrollYProgress, [0.65, 0.8], [1, 1.1]);

    // --- 2. THE CHOICE UI ---
    // Fades out if we reach the end naturally, or if choice is locked
    const choiceOpacity = useTransform(scrollYProgress, [0.75, 0.8, 0.85], [0, 1, 0]);
    const sethShake = useTransform(scrollYProgress, [0.82, 0.83, 0.84], ["0px", "20px", "0px"]);

    // --- 3. LOGIC ---

    const handleChoice = (target: 'cody' | 'seth') => {
        if (target === 'cody') {
            // TRAITOR PATH
            setFlashbackActive(true);
            setTimeout(() => {
                setFlashbackActive(false);
                triggerSethSequence(); // Proceed to canon ending
            }, 1500);
        } else {
            // REVENGE PATH
            triggerSethSequence();
        }
    };

    const triggerSethSequence = () => {
        setChoiceLocked(true);

        // 1. CHAIR SHOT (The Revenge)
        setTimeout(() => {
            setChairShotActive(true);
        }, 500);

        // 2. CROSS RHODES (The Finish)
        setTimeout(() => {
            setChairShotActive(false);
            setCodyFinisherActive(true);
        }, 2500);

        // 3. THE PIN (1-2-3)
        setTimeout(() => {
            setCodyFinisherActive(false);
            setPinActive(true);

            // Count Logic
            setTimeout(() => setPinCount(1), 500);
            setTimeout(() => setPinCount(2), 1500);
            setTimeout(() => setPinCount(3), 2500);
        }, 4500);

        // 4. THE END (Title Reign Over) & UNLOCK SCROLL
        setTimeout(() => {
            setPinActive(false);
            setShowEndCard(true);
            // UNLOCK SCROLL so user can proceed to footer
            document.body.style.overflow = "auto";
        }, 8000);
    };

    return (
        <section ref={containerRef} className="relative h-[1200vh] bg-black z-20">

            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* --- CUTSCENE 0: THE TRAITOR (Hit Cody) --- */}
                <AnimatePresence>
                    {flashbackActive && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 z-[200] bg-white flex items-center justify-center pointer-events-none"
                        >
                            {/* Low Opacity Image of Seth hitting Roman (2014) */}
                            <img
                                src="https://www.wrestlezone.com/wp-content/uploads/sites/8/2024/01/The-Shield-implodes.jpg"
                                alt="The Betrayal 2014"
                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
                            />
                            <h2 className="relative z-10 text-9xl font-black text-red-600 uppercase tracking-tighter mix-blend-multiply">TRAITOR</h2>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* --- CUTSCENE 1: THE CHAIR SHOT (Hit Seth) --- */}
                <AnimatePresence>
                    {chairShotActive && (
                        <motion.div
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 z-[200] bg-black flex items-center justify-center pointer-events-none"
                        >
                            <img
                                src="https://external-preview.redd.it/roman-reigns-on-hitting-rollins-with-a-chair-anytime-i-have-v0-hdgbHzVB04klLwAyJwsiDIL3piZrwLiyfZ18YOU7YD4.jpg?width=1080&crop=smart&auto=webp&s=f2cc9f57cb2bbe38f8bb2b23c600db169288bf5e"
                                alt="Chair Shot"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-red-600/20 mix-blend-overlay animate-pulse"></div>
                            <h2 className="absolute bottom-12 text-7xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">DEBT PAID.</h2>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* --- CUTSCENE 2: CROSS RHODES --- */}
                <AnimatePresence>
                    {codyFinisherActive && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 z-[200] bg-zinc-900 flex items-center justify-center pointer-events-none"
                        >
                            <img
                                src="https://pbs.twimg.com/media/GxgFnOqb0AAzEiD.jpg"
                                alt="Cross Rhodes"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* --- CUTSCENE 3: THE PIN (1-2-3) --- */}
                <AnimatePresence>
                    {pinActive && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 z-[210] bg-white flex items-center justify-center pointer-events-none"
                        >
                            {/* Low Opacity Pin Image */}
                            <img
                                src="https://cdn1.bloodyslam.com/uploads/3/2024/04/cody.png"
                                alt="Pinfall"
                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 blur-sm scale-110"
                            />

                            {/* The Count */}
                            <div className="flex gap-4 md:gap-12 text-[20vw] font-black text-black leading-none tracking-tighter z-10">
                                <AnimatePresence mode="popLayout">
                                    {pinCount >= 1 && (
                                        <motion.span key="pin-1" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-black">1</motion.span>
                                    )}
                                    {pinCount >= 2 && (
                                        <motion.span key="pin-2" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-black">2</motion.span>
                                    )}
                                    {pinCount >= 3 && (
                                        <motion.span key="pin-3" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-red-600">3</motion.span>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* --- CUTSCENE 4: END CARD (Reign Over) --- */}
                <AnimatePresence>
                    {showEndCard && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0 bg-white z-[220] flex flex-col items-center justify-center text-center px-4"
                        >
                            <div className="absolute inset-0 z-0 opacity-50">
                                <img
                                    src="https://www.postwrestling.com/wp-content/uploads/2024/05/Screenshot-1191-e1716273118445.png"
                                    alt="Cody Rhodes Champion"
                                    className="w-full h-full object-cover grayscale contrast-125"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white"></div>
                            </div>

                            <div className="relative z-10 text-black mt-12">
                                <Trophy size={80} className="text-red-900 mx-auto mb-6 animate-pulse" />
                                <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">
                                    NO MORE <span className="text-red-600">HELP.</span><br />
                                    IT IS OVER.
                                </h2>
                                <div className="w-24 h-2 bg-black mx-auto my-8"></div>
                                <p className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-zinc-600 max-w-lg mx-auto leading-relaxed">
                                    The Architect. The Franchise. The Monster. The Undertaker.<br />
                                    <span className="font-bold text-red-600">The Avengers Assembled.</span><br />
                                    Roman Reigns stands alone.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>


                {/* --- SCROLL-BASED CONTENT (Ghosts) --- */}
                {/* SOLO */}
                <motion.div style={{ opacity: soloOpacity, scale: soloScale }} className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                    <img src="https://i.ytimg.com/vi/5cPFfaKtwuk/maxresdefault.jpg" className="w-full h-full object-cover opacity-30 grayscale mix-blend-lighten absolute inset-0" />
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="relative w-full max-w-7xl px-6 grid grid-cols-2 items-center h-full">
                        <div className="flex justify-center"></div>
                        <div className="text-left z-10">
                            <Skull size={80} className="text-red-600/50 mb-4 animate-pulse" />
                            <h2 className="text-[10vw] font-black text-red-600/50 uppercase tracking-tighter mix-blend-screen leading-none">SPIKE</h2>
                        </div>
                    </div>
                </motion.div>

                {/* CENA */}
                <motion.div style={{ opacity: cenaOpacity, scale: cenaScale }} className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
                    <img src="https://static.asianetnews.com/images/w-1280,imgid-01jkrafnx0qasb09e2r68bg8v4,imgname-gettyimages-2139244226.jpg" className="w-full h-full object-cover opacity-30 grayscale mix-blend-lighten absolute inset-0" />
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="relative w-full max-w-7xl px-6 grid grid-cols-2 items-center h-full">
                        <div className="text-right z-10">
                            <h2 className="text-[10vw] font-black text-blue-600/50 uppercase tracking-tighter mix-blend-screen leading-none">YOU CAN'T<br />SEE ME</h2>
                        </div>
                        <div></div>
                    </div>
                </motion.div>

                {/* ROCK */}
                <motion.div style={{ opacity: rockOpacity, scale: rockScale }} className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
                    <img src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2024-07/GettyImages-2147420087.jpg?itok=od9yRSUf" className="w-full h-full object-cover opacity-30 grayscale mix-blend-lighten absolute inset-0" />
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="relative w-full max-w-7xl px-6 grid grid-cols-2 items-center h-full">
                        <div></div>
                        <div className="text-left z-10">
                            <Zap size={100} className="text-yellow-500/50 mb-4" />
                            <h2 className="text-[10vw] font-black text-yellow-500/50 uppercase tracking-tighter mix-blend-screen leading-none">FINAL<br />BOSS</h2>
                        </div>
                    </div>
                </motion.div>

                {/* TAKER */}
                <motion.div style={{ opacity: takerOpacity, scale: takerScale }} className="absolute inset-0 flex items-center justify-center z-[60] pointer-events-none">
                    <img src="https://platform.cagesideseats.com/wp-content/uploads/sites/54/chorus/uploads/chorus_asset/file/25396759/WM40_04072024AT_45632__361aeb0fd821b5f349912c4515d18524.jpg?quality=90&strip=all&crop=0,16.666666666667,100,66.666666666667" className="w-full h-full object-cover opacity-30 grayscale mix-blend-lighten absolute inset-0" />
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="text-center z-10 relative">
                        <Bell size={150} className="text-purple-600/50 mx-auto animate-pulse" />
                        <h2 className="text-[12vw] font-black text-purple-600/50 uppercase tracking-tighter mix-blend-screen leading-none">REST IN<br />PEACE</h2>
                    </div>
                </motion.div>

                {/* --- THE CHOICE INTERACTIVE --- */}
                <motion.div
                    style={{ opacity: choiceOpacity }}
                    className={`relative w-full max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center z-[150] ${choiceLocked ? 'pointer-events-none' : ''}`}
                >
                    {/* TARGET A: CODY */}
                    <div className={`group flex flex-col items-center transition-all duration-500 ${choiceLocked ? 'opacity-20 blur-sm pointer-events-none' : 'hover:scale-105'}`}>
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-4 border-zinc-800 mb-6 transition-all duration-300 group-hover:border-yellow-500 group-hover:shadow-[0_0_40px_rgba(234,179,8,0.3)]">
                            <img src="/choice_title.png" className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" />
                        </div>
                        <button onClick={() => handleChoice('cody')} className="flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-700 text-zinc-300 font-bold uppercase tracking-widest transition-all cursor-pointer shadow-xl group-hover:bg-yellow-500 group-hover:text-black group-hover:border-yellow-500">
                            <Crosshair size={20} /> Focus: The Title
                        </button>
                    </div>

                    {/* TARGET B: SETH */}
                    <motion.div style={{ x: sethShake }} className={`group flex flex-col items-center transition-all duration-500 ${choiceLocked ? 'scale-110 pointer-events-none' : 'hover:scale-105'}`}>
                        <motion.div
                            style={{ backgroundColor: choiceLocked ? "rgba(255,0,0,0.5)" : "transparent" }}
                            animate={{ opacity: choiceLocked ? [0, 1, 0] : 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 z-50 pointer-events-none mix-blend-overlay rounded-2xl"
                        />
                        <div className={`relative w-full aspect-video rounded-2xl overflow-hidden border-4 mb-6 transition-all duration-500 ${choiceLocked ? 'border-red-600 shadow-[0_0_80px_rgba(220,38,38,0.6)]' : 'border-zinc-800 group-hover:border-red-600 group-hover:shadow-[0_0_40px_rgba(220,38,38,0.5)]'}`}>
                            <img src="/choice_revenge.png" className={`w-full h-full object-cover transition-all duration-500 ${choiceLocked ? '' : 'grayscale group-hover:grayscale-0'}`} />
                        </div>
                        <button onClick={() => handleChoice('seth')} disabled={choiceLocked} className={`flex items-center gap-3 px-8 py-4 font-bold uppercase tracking-widest transition-all cursor-pointer shadow-xl ${choiceLocked ? 'bg-red-600 text-white border-red-600 shadow-[0_0_30px_red]' : 'bg-zinc-900 border-zinc-700 text-zinc-300 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600'}`}>
                            <Crosshair size={20} /> {choiceLocked ? "TARGET LOCKED" : "Focus: The Revenge"}
                        </button>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default EndgameSection;