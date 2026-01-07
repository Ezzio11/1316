"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TribalCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const mouseOver = (e: MouseEvent) => {
      // Check if hovering over a button or link
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", mouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", mouseOver);
    };
  }, []);

  return (
    <>
      {/* Main Reticle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-red-600 rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "#fff" : "#dc2626", // White on hover, Red default
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      >
        {/* Crosshair lines */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-600/50" />
        <div className="absolute left-1/2 top-0 h-full w-[1px] bg-red-600/50" />
      </motion.div>
      
      {/* Trailing Dot (Lag effect) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />
    </>
  );
};

export default TribalCursor;