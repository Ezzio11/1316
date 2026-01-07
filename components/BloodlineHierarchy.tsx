"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Network, GitCommit, ChevronDown } from "lucide-react";

// The Data Structure
const familyNodes = [
  // GEN 1: THE ELDERS
  { id: "sika", label: "SIKA ANOA'I", role: "The Wild Samoan", generation: 1, x: 50, y: 10, image: "https://www.wwe.com/f/styles/wwe_1_1_540__1_1_540/public/all/2016/02/Sika_pro--f616428d09923053ba4762c476906a2e.png" },
  
  // GEN 2: THE FATHERS (Implied connection for structure, simplified for UI)
  
  // GEN 3: THE BLOODLINE (Current)
  { id: "roman", label: "ROMAN REIGNS", role: "The Tribal Chief", generation: 3, x: 50, y: 50, image: "https://www.wwe.com/f/styles/talent_champion_lg/public/all/2025/04/24-10-25_Square_Gallery360_Gallery360_3810_Profile--5104a0e6cf4b331f2d93d5a9b9662164.png" },
  
  // THE SOLDIERS (Branching off)
  { id: "jimmy", label: "JIMMY USO", role: "The Soldier", generation: 4, x: 20, y: 80, image: "https://www.wwe.com/f/styles/wwe_large/public/all/2023/10/Jimmy_Uso_Pro--88b1764654b005128038753229b35043.png" },
  { id: "jey", label: "JEY USO", role: "Right Hand Man", generation: 4, x: 80, y: 80, image: "https://www.wwe.com/f/styles/wwe_large/public/all/2023/10/Jey_Uso_Pro--929314972620f4886699c62955562768.png" },
  { id: "solo", label: "SOLO SIKOA", role: "The Enforcer", generation: 4, x: 50, y: 80, image: "https://www.wwe.com/f/styles/wwe_large/public/all/2022/09/Solo_Sikoa_Pro--99059f12d8a0d9e96f12257204f12d31.png" },

  // EXTERNAL
  { id: "heyman", label: "PAUL HEYMAN", role: "Special Counsel", generation: 3, x: 85, y: 50, image: "https://www.wwe.com/f/styles/wwe_large/public/all/2022/06/Paul_Heyman_Pro--a9590e87d03606e40974360e20e8913b.png" }
];

// Connection Definitions (Who connects to whom)
const connections = [
  { from: "sika", to: "roman" }, // Father to Son
  { from: "roman", to: "jimmy" }, // Chief to Soldier
  { from: "roman", to: "jey" },   // Chief to Right Hand
  { from: "roman", to: "solo" },  // Chief to Enforcer
  { from: "heyman", to: "roman" }, // Counsel to Chief
];

const BloodlineHierarchy = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center py-24 overflow-hidden border-t-8 border-red-900">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,50,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,50,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 text-zinc-500 mb-2">
            <Network size={16} />
            <span className="font-mono text-xs uppercase tracking-widest">System Architecture</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
          The <span className="text-red-600">Dynasty</span>
        </h2>
      </div>

      {/* --- THE HIERARCHY GRAPH --- */}
      <div className="relative w-full max-w-5xl aspect-square md:aspect-[16/9] bg-zinc-950/50 rounded-3xl border border-zinc-800 shadow-2xl p-8 backdrop-blur-sm">
        
        {/* 1. SVG CONNECTOR LAYER */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {connections.map((conn, i) => {
            const startNode = familyNodes.find(n => n.id === conn.from);
            const endNode = familyNodes.find(n => n.id === conn.to);
            if (!startNode || !endNode) return null;

            // Simple logic to draw lines based on percentage coordinates
            // Note: In a real app we might calculate exact pixels, but % works for responsive design
            return (
              <motion.path
                key={i}
                d={`M ${startNode.x}% ${startNode.y}% C ${startNode.x}% ${(startNode.y + endNode.y) / 2}%, ${endNode.x}% ${(startNode.y + endNode.y) / 2}%, ${endNode.x}% ${endNode.y}%`}
                fill="none"
                stroke={hoveredNode === startNode.id || hoveredNode === endNode.id ? "#dc2626" : "#333"}
                strokeWidth={hoveredNode === startNode.id || hoveredNode === endNode.id ? 4 : 2}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            );
          })}
        </svg>

        {/* 2. NODES LAYER */}
        {familyNodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay: node.generation * 0.2 }}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            {/* The Avatar Circle */}
            <div className={`relative w-20 h-20 md:w-28 md:h-28 rounded-full border-4 overflow-hidden transition-all duration-300 
                ${node.id === 'roman' ? 'border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.3)]' : 'border-zinc-700 group-hover:border-red-600'}
                ${hoveredNode === node.id ? 'scale-110 z-20' : 'z-10'}
            `}>
                <img 
                    src={node.image} 
                    alt={node.label} 
                    className="w-full h-full object-cover object-top"
                />
            </div>
            
            {/* The Label */}
            <div className={`mt-3 text-center transition-all duration-300 ${hoveredNode === node.id ? 'opacity-100' : 'opacity-70'}`}>
                <h3 className="text-white font-black text-sm md:text-lg uppercase leading-none bg-black/50 px-2 rounded">
                    {node.label}
                </h3>
                <p className="text-red-500 font-mono text-[10px] md:text-xs tracking-widest uppercase">
                    {node.role}
                </p>
            </div>
          </motion.div>
        ))}

      </div>

      {/* --- THE 1,316 TICKER --- */}
      <div className="mt-20 text-center">
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.5em] mb-4">Total Dominance Duration</p>
          <div className="flex items-end justify-center gap-2">
              <motion.span 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="text-8xl md:text-[12rem] font-black text-white leading-none tracking-tighter"
              >
                  1,316
              </motion.span>
              <span className="text-red-600 font-bold text-2xl md:text-4xl mb-4 md:mb-8">DAYS</span>
          </div>
          <p className="text-zinc-600 font-serif italic mt-4">"Acknowledge the numbers."</p>
      </div>

    </section>
  );
};

export default BloodlineHierarchy;