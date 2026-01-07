"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const acts = [
  { id: 0, label: "DAY 0 | THE RETURN", start: 0, end: 0.08 },
  { id: 1, label: "DAY 56 | THE RIGHT HAND", start: 0.08, end: 0.15 },
  { id: 2, label: "DAY 200 | GOD MODE", start: 0.15, end: 0.3 },
  { id: 3, label: "DAY 516 | THE GHOSTS", start: 0.3, end: 0.4 },
  { id: 4, label: "DAY 581 | UNIFICATION", start: 0.4, end: 0.5 },
  { id: 5, label: "DAY 700 | SUMMERSLAM", start: 0.5, end: 0.6 },
  { id: 6, label: "DAY 733 | THE ENFORCER", start: 0.6, end: 0.7 },
  { id: 7, label: "DAY 881 | THE BETRAYAL", start: 0.7, end: 0.8 },
  { id: 8, label: "DAY 1035 | CIVIL WAR", start: 0.8, end: 0.9 },
  { id: 9, label: "DAY 1300 | FINAL BOSS", start: 0.9, end: 0.95 },
  { id: 10, label: "DAY 1316 | ENDGAME", start: 0.95, end: 1.0 },
];

const BloodlineNav = () => {
  const { scrollYProgress } = useScroll();
  const [currentAct, setCurrentAct] = useState(acts[0].label);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const activeAct = acts.find((act) => latest >= act.start && latest < act.end);
    if (activeAct) {
      setCurrentAct(activeAct.label);
    }
  });

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center pointer-events-none mix-blend-difference text-white">
      {/* Left: New Branding */}
      <div className="flex flex-col">
        <h1 className="font-black text-4xl tracking-tighter uppercase leading-none text-red-600">
          1316
        </h1>
        <span className="text-[10px] font-mono tracking-[0.5em] opacity-70 text-white uppercase">
          THE REIGN
        </span>
      </div>

      {/* Right: Act Tracker (Updated to 'Days') */}
      <div className="text-right">
        <motion.p
          key={currentAct}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-bold font-mono text-xs md:text-sm tracking-widest text-zinc-300 uppercase"
        >
          {currentAct}
        </motion.p>
      </div>
    </header>
  );
};

export default BloodlineNav;