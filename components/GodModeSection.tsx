"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Crown, Star, Skull } from "lucide-react";

const victims = [
  {
    id: 1,
    name: "Kevin Owens",
    event: "Royal Rumble 2021",
    method: "Last Man Standing",
    quote: "You can't kill what won't die.",
    img: "https://www.wwe.com/f/styles/gallery_img_l/public/all/2021/01/156_RR_01312021JG_21914--074bbff15d26c3059880a349b36fec0a.jpg"
  },
  {
    id: 2,
    name: "Daniel Bryan",
    event: "SmackDown",
    method: "Career vs. Title",
    quote: "Banished from SmackDown.",
    img: "https://www.wwe.com/f/styles/wwe_16_9_xl/public/all/2021/02/2021_EC_16x9_Social_RomanBryan--449236aff64b351d3d77410bc5b1adfb.jpg"
  },
  {
    id: 3,
    name: "Cesaro",
    event: "WrestleMania Backlash",
    method: "Guillotine Choke",
    quote: "The Swiss Superman, Grounded.",
    img: "https://www.wwe.com/f/styles/wwe_16_9_xl/public/all/2021/05/206_BACK_05162021JG_12235--50a31dc541d34e857da1a5fad9ed0068.jpg"
  },
  {
    id: 4,
    name: "Edge",
    event: "Money in the Bank 2021",
    method: "Pinfall (Seth Rollins Interference)",
    quote: "The Ultimate Opportunist, Outplayed.",
    img: "https://www.wwe.com/f/styles/gallery_img_l/public/all/2021/07/219_MITB_07182021CA_29623--b017bf95275762f7af65cf4f1cc6326a.jpg"
  },
  {
    id: 5,
    name: "Brock Lesnar",
    event: "Crown Jewel 2021",
    method: "Usos Superkicks + Belt Shot",
    quote: "The Beast, Tamed by the Bloodline.",
    img: "https://www.wwe.com/f/styles/wwe_16_9_xl/public/all/2021/10/20211020_CrownJewel_show_roman--21f5d24ffc31b30e9f3d478138458529.jpg"
  }
];

const GodModeSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Horizontal Scroll Logic
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["10%", "-85%"]);

  // Gold Dust Parallax
  const dustY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] z-10">

      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">

        {/* --- BACKGROUND: GOLD DUST --- */}
        <motion.div style={{ y: dustY }} className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle,rgba(234,179,8,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50"></div>
          {/* Added a slight dark tint so text remains readable over tattoos */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </motion.div>

        {/* --- HEADER --- */}
        <div className="absolute top-10 left-0 w-full text-center z-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-yellow-500 border border-yellow-500/50 px-6 py-2 rounded-full bg-black/80 backdrop-blur-md shadow-[0_0_20px_rgba(234,179,8,0.4)]"
          >
            <Crown size={20} className="fill-yellow-500" />
            <span className="font-mono text-sm uppercase tracking-[0.3em] font-bold">Greatness On A Different Level Mode</span>
          </motion.div>
        </div>

        {/* --- HORIZONTAL CAROUSEL --- */}
        <div className="relative z-10 w-full h-[60vh] flex items-center">
          <motion.div style={{ x }} className="flex gap-24 pl-[5vw] items-center">

            {/* 1. INTRO CARD (Shifted Left & Responsive) */}
            {/* Use relative z-50 to keep text ON TOP. Added -ml-12 to pull it left. */}
            <div className="w-[90vw] md:w-[60vw] flex-shrink-0 flex flex-col justify-center items-start relative z-50 -ml-4 md:-ml-12 lg:-ml-24">
              <h2 className="text-[12vw] md:text-[8vw] font-black text-white leading-[0.8] tracking-tighter drop-shadow-xl text-left">
                ACKNOWLEDGE<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">GREATNESS.</span>
              </h2>
              <p className="mt-8 text-zinc-400 max-w-lg font-serif italic text-xl md:text-2xl bg-black/30 p-4 rounded backdrop-blur-sm border-l-4 border-yellow-600 text-left">
                "I am operating at a level that no one else can reach. I am the Head of the Table."
              </p>
            </div>

            {/* 2. THE VICTIM CARDS */}
            {victims.map((victim) => (
              <div key={victim.id} className="relative w-[85vw] md:w-[35vw] h-[60vh] flex-shrink-0 group z-20">
                <div className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden transform transition-transform duration-500 group-hover:scale-105 group-hover:border-yellow-600/50 shadow-2xl">
                  {/* Image */}
                  <Image
                    src={victim.img}
                    alt={victim.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <div className="flex items-center gap-2 text-yellow-500 mb-2">
                      <Skull size={16} />
                      <span className="font-mono text-xs uppercase tracking-widest">{victim.event}</span>
                    </div>
                    <h3 className="text-4xl font-black text-white uppercase mb-1">{victim.name}</h3>
                    <p className="text-zinc-400 text-sm font-mono border-l-2 border-yellow-600 pl-3 mb-4">
                      {victim.method}
                    </p>
                    <p className="text-white/80 font-serif italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                      "{victim.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* 3. THE GRAND FINALE: THE STACK */}
            <div className="w-[90vw] md:w-[70vw] flex-shrink-0 relative flex items-center justify-center pl-12 z-20 pr-[10vw]">
              <div className="relative w-full aspect-video border-8 border-yellow-600/20 rounded-xl overflow-hidden shadow-[0_0_100px_rgba(234,179,8,0.2)] group">
                <Image
                  src="https://pbs.twimg.com/media/Fz9IZGzWAAYLAeT?format=jpg&name=large"
                  alt="The Stack Pin"
                  fill
                  className="object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40 hover:bg-transparent transition-colors duration-500">
                  <h3 className="text-[8vw] md:text-[6vw] font-black text-white uppercase drop-shadow-[0_5px_5px_rgba(0,0,0,1)] leading-[0.8]">
                    SMASH 'EM.<br />STACK 'EM.<br />PIN 'EM.
                  </h3>
                  <p className="mt-4 bg-yellow-600 text-black font-bold px-4 py-1 uppercase tracking-widest text-xs md:text-sm">
                    WrestleMania 37
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Progress Line */}
        <div className="absolute bottom-10 left-0 w-full px-12">
          <div className="w-full h-[1px] bg-zinc-800 relative overflow-hidden">
            <motion.div
              style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
              className="absolute top-0 left-0 h-full bg-yellow-600"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default GodModeSection;