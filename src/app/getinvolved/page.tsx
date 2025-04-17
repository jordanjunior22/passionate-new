"use client";

import React, { useEffect } from "react";
import { Header } from "@/components/ui/Header";
import HeroSection from "@/components/getinvolved/HeroSection";
import CareersSection from "@/components/getinvolved/CareersSection";
import SupportOptionsSection from "@/components/getinvolved/SupportOptionsSection";
import ContactForm from "@/components/getinvolved/ContactForm";
import MissionCTA from "@/components/getinvolved/MissionCTA";
import TestimonialsSection from "@/components/getinvolved/TestimonialsSection";
import { CTA } from "@/components/ui/CTA";
import { Footer } from "@/components/ui/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

const GetInvolved = () => {
  useEffect(() => {
    // Add BoxIcons stylesheet
    const link = document.createElement("link");
    link.href = "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      // Clean up
      document.head.removeChild(link);
    };
  }, []);

  // Progress bar at the top of the page
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="flex flex-col min-h-screen bg-neutral-white">
      <Header />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-fruit-salad to-dodger-blue z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      <main className="flex-grow">
        <HeroSection />
        <CareersSection />
        <SupportOptionsSection />
        <ContactForm />
        <MissionCTA />
        <TestimonialsSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default GetInvolved;
