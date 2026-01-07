"use client";

import React from "react";
import TattooBackground from "@/components/TattooBackground";
import HeroSection from "@/components/HeroSection";
import TransitionSection from "@/components/TransitionSection";
import CoronationSection from "@/components/CoronationSection";
import HeymanRevealSection from "@/components/HeymanRevealSection";
import AllianceSection from "@/components/AllianceSection";
import BloodlineNav from "@/components/BloodlineNav";
import UlaFalaProgress from "@/components/UlafalaProgress";
import TribalCursor from "@/components/TribalCursor";
import ClashBridge from "@/components/ClashBridge";
import HIACSection from "@/components/HIACSection";

import GodModeSection from "@/components/GodModeSection";
import SethRollinsSection from "@/components/SethRollinsSection";
import UnificationSection from "@/components/UnificationSection";
import TractorSection from "@/components/TractorSection";
import TacticsSection from "@/components/TacticsSection";
import SamiZaynSection from "@/components/SamiZaynSection";
import CivilWarSection from "@/components/CivilWarSection";
import FinalBossSection from "@/components/FinalBossSection";
import EndgameSection from "@/components/EndgameSection";
import BloodlineFooter from "@/components/BloodlineFooter";
import ReignTicker from "@/components/ReignTicker";

export default function BloodlineStory() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-red-900 selection:text-white cursor-none">


      {/* --- UI LAYER --- */}
      <TribalCursor />
      <BloodlineNav />
      <UlaFalaProgress />
      <ReignTicker /> {/* The "Data Story" Anchor */}

      {/* --- BACKGROUND LAYER --- */}
      <TattooBackground />

      {/* --- CONTENT LAYER --- */}
      <HeroSection />
      <TransitionSection />
      <CoronationSection />
      <HeymanRevealSection />
      <AllianceSection />

      {/* ACT II: The Assets */}
      <ClashBridge />
      <HIACSection />


      {/* ACT III: The Dominance */}
      <GodModeSection />

      {/* ACT IV: The Cracks */}
      <SethRollinsSection />
      <UnificationSection />
      <TractorSection />
      <TacticsSection />
      <SamiZaynSection />
      <CivilWarSection />

      {/* ACT V: The End */}
      <FinalBossSection />
      <EndgameSection />

      <BloodlineFooter />
    </main>
  );
}