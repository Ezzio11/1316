"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ClashBridge = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animation values
  const towelY = useTransform(scrollYProgress, [0.1, 0.4], ["-100vh", "20vh"]);
  const towelRotate = useTransform(scrollYProgress, [0.1, 0.4], [120, -15]); // Spin as it falls
  const towelOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const bloodOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 0.95]);
  const textOpacity = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0.45, 0.8], [0.8, 1.2]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-zinc-950 z-20">

      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        {/* Spotlight on the floor */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.4)_0%,black_70%)] pointer-events-none" />

        {/* THE TOWEL VISUAL (Image Based) */}
        <motion.div
          style={{ y: towelY, rotate: towelRotate, opacity: towelOpacity }}
          className="relative w-96 h-96 z-10"
        >
          {/* Class 'drop-shadow-2xl' ensures the shadow follows the towel shape, not the box */}
          <img
            src="/towel.png"
            alt="White Towel"
            className="w-full h-full object-contain filter drop-shadow-2xl brightness-90"
          />
        </motion.div>

        {/* THE BLOOD OVERLAY (Deeper Red) */}
        <motion.div
          style={{ opacity: bloodOpacity }}
          className="absolute inset-0 bg-red-900 mix-blend-multiply z-20 pointer-events-none"
        />

        {/* JIMMY'S PLEA */}
        <motion.div
          style={{ opacity: textOpacity, scale: textScale }}
          className="absolute z-30 text-center w-full px-4"
        >
          <p className="font-mono text-red-400 tracking-widest text-sm mb-4 uppercase bg-black/50 inline-block px-2">
            Clash of Champions | The Surrender
          </p>
          <h2 className="text-5xl md:text-8xl font-black text-white leading-none uppercase filter drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            "We Family, Uce...<br />
            <span className="text-red-500 italic">Just Chill."</span>
          </h2>
        </motion.div>

      </div>
    </section>
  );
};

export default ClashBridge;