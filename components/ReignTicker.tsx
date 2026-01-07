"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { Crown } from "lucide-react";

const ReignTicker = () => {
  const { scrollYProgress } = useScroll();
  const [days, setDays] = useState(0);

  // Map scroll progress (0 to 1) to The Reign (0 to 1316 days)
  // We tweak the ranges to match the narrative beats of your sections
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let currentDay = 0;

    if (latest < 0.15) {
        // Intro / Return (Day 0)
        currentDay = 0;
    } else if (latest < 0.3) {
        // Payback / Clash (The beginning)
        currentDay = Math.floor((latest - 0.15) * 400); // 0 -> 60
    } else if (latest < 0.5) {
        // Jey Uso / 2020-2021
        currentDay = 60 + Math.floor((latest - 0.3) * 2000); // 60 -> 460
    } else if (latest < 0.7) {
        // God Mode / Seth (2021-2022)
        currentDay = 460 + Math.floor((latest - 0.5) * 2000); // 460 -> 860
    } else if (latest < 0.9) {
        // The Final Stretch (2023-2024)
        currentDay = 860 + Math.floor((latest - 0.7) * 2280); // 860 -> 1316
    } else {
        // The End
        currentDay = 1316;
    }

    // Cap at 1316
    if (currentDay > 1316) currentDay = 1316;
    
    setDays(currentDay);
  });

  return (
    <motion.div 
        className="fixed bottom-8 right-8 z-[100] hidden md:flex items-center gap-4 bg-black/80 border border-zinc-800 p-4 rounded-2xl backdrop-blur-md shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
    >
        <div className="flex flex-col text-right">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                Reign Duration
            </span>
            <div className="flex items-baseline gap-1 justify-end">
                <span className="text-4xl font-black text-white tabular-nums tracking-tighter">
                    {days.toLocaleString()}
                </span>
                <span className="text-red-600 font-bold text-sm">DAYS</span>
            </div>
        </div>
        
        <div className="h-10 w-[1px] bg-zinc-800"></div>

        <div className="relative">
            <Crown size={24} className="text-yellow-500" />
            <motion.div 
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-yellow-500 blur-lg"
            />
        </div>
    </motion.div>
  );
};

export default ReignTicker;