"use client";

import React from "react";
import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Programs } from "@/components/home/Programs";
import { ContactInfo } from "@/components/home/ContactInfo";
import { ContactForm } from "@/components/home/ContactForm";
import { FAQ } from "@/components/home/FAQ";
import { Testimonial } from "@/components/home/Testimonial";
import { CTA } from "@/components/ui/CTA";
import { Footer } from "@/components/ui/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  // Progress bar at the top of the page
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-fruit-salad to-dodger-blue z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      <main className="flex-grow">
        <Hero />
        <About />
        <Programs />
        <ContactInfo />
        <ContactForm />
        <FAQ />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
