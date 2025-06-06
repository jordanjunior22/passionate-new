"use client";

import React, { useEffect } from "react";
import { Header } from "@/components/ui/Header";
import HeroSection from "@/components/programs/HeroSection";
import CommunitySupport from "@/components/programs/CommunitySupport";
import ResidentialSupport from "@/components/programs/ResidentialSupport";
import ProgramsApproach from "@/components/programs/ProgramsApproach";
import ProgramsCTA from "@/components/programs/ProgramsCTA";
import { Footer } from "@/components/ui/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import InHomeSupport from "@/components/programs/InHomeSupporot";
import CompanionCare from "@/components/programs/CompanionCare";

const ProgramsPage: React.FC = () => {
  // Progress bar at the top of the page
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="min-h-screen bg-neutral-white">
      <Header />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-fruit-salad to-dodger-blue z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      <HeroSection />
      <ResidentialSupport />
      <InHomeSupport/>
      {/* <CompanionCare/>
      <CommunitySupport /> */}
      <ProgramsApproach />
      <ProgramsCTA />
      <Footer />
    </main>
  );
};

export default ProgramsPage;
