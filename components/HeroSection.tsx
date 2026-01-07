"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const textSlamVariants = {
  hidden: { y: -100, opacity: 0, scale: 2 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 } as const
  },
};

const glitchVariants = {
  visible: {
    opacity: [1, 0.5, 1, 0, 1],
    x: [0, -5, 5, 0],
    color: ["#b91c1c", "#ffffff", "#b91c1c"],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 3,
      repeatType: "mirror" as const
    }
  }
};

const HeroSection = () => {
  return (
    // FIX: Changed 'bg-black' to 'bg-transparent'
    // Now the TattooBackground (z-0) will show through this section (z-10)
    <section className="relative h-screen flex flex-col items-center justify-center z-10 overflow-hidden bg-transparent">

      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.5, scale: 1 }} // Opacity 0.5 lets Tattoos blend with the image
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 z-[-1]"
      >
        <img
          src="https://placehold.co/1920x1080/101010/333?text=ROMAN+RETURNS+SUMMERSLAM"
          alt="SummerSlam Return"
          className="w-full h-full object-cover grayscale contrast-125 brightness-75"
        />
        {/* Gradient fades to transparent so tattoos show strongly at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center px-4 max-w-5xl mx-auto z-10"
      >
        <motion.h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white uppercase font-sans mb-2 leading-[0.9]">
          <motion.div variants={textSlamVariants} className="inline-block">
            The Big Dog
          </motion.div>
          <br />
          <motion.span
            variants={textSlamVariants}
            className="text-red-700 inline-block relative"
          >
            <motion.span variants={glitchVariants}>
              Is Dead.
            </motion.span>
          </motion.span>
        </motion.h1>

        <motion.div
          variants={textSlamVariants}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-red-900 to-transparent my-6"
        />

        <motion.p
          variants={textSlamVariants}
          className="text-zinc-400 font-mono tracking-[0.3em] text-sm md:text-lg uppercase"
        >
          SummerSlam 2020 <span className="text-red-600 mx-2">|</span> The Return
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 text-white/30"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;