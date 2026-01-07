"use client";

import React from "react";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Legend } from "recharts";

const data = [
  { subject: 'Physical Damage', A: 80, B: 95, fullMark: 100 },
  { subject: 'Wrestling Moves', A: 90, B: 30, fullMark: 100 },
  { subject: 'Verbal Abuse', A: 20, B: 100, fullMark: 100 },
  { subject: 'Manipulation', A: 10, B: 100, fullMark: 100 },
  { subject: 'Mercy', A: 50, B: 0, fullMark: 100 },
  { subject: 'Family Trauma', A: 0, B: 100, fullMark: 100 },
];

const DamageRadar = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative bg-black/50 border border-red-900/30 rounded-xl backdrop-blur-sm p-4">
        {/* Header */}
        <div className="absolute top-4 left-4 z-10">
            <h3 className="text-red-500 font-mono text-xs uppercase tracking-widest mb-1">Match Analysis</h3>
            <h2 className="text-white font-bold text-xl uppercase">The Cost of Acknowledgment</h2>
        </div>

        <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
            <PolarGrid stroke="#3f3f46" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#a1a1aa', fontSize: 10, fontFamily: 'monospace' }} />
            
            {/* Standard Match (Grey) */}
            <Radar
                name="Avg. Title Defense"
                dataKey="A"
                stroke="#52525b"
                strokeWidth={2}
                fill="#52525b"
                fillOpacity={0.1}
            />
            
            {/* HIAC 2020 (Red) */}
            <Radar
                name="Hell in a Cell 2020"
                dataKey="B"
                stroke="#dc2626"
                strokeWidth={3}
                fill="#dc2626"
                fillOpacity={0.4}
            />
            <Legend wrapperStyle={{ paddingTop: "20px", fontSize: "12px", fontFamily: "monospace" }}/>
        </RadarChart>
        </ResponsiveContainer>
    </div>
  );
};

export default DamageRadar;