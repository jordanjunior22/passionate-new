"use client";

import React from "react";
import Head from "next/head";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { Careers } from "@/components/career/Careers";
import BlogHeroSection from "@/components/blog/HeroSection";
import BlogTabSection from "@/components/blog/BlogTapSection";
import ProgramsCTA from "@/components/programs/ProgramsCTA";
const structuredData = [
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Supporting Daily Routines for Adults with IDD",
        "description": "Supporting daily routines is crucial for promoting independence, confidence, and a sense of achievement among adults with intellectual and developmental disabilities (IDD).",
        "image": "https://passionatecenterandhomes.com/images/idd-routines.png",
        "author": { "@type": "Organization", "name": "Passionate Center & Homes" },
        "publisher": {
            "@type": "Organization",
            "name": "Passionate Center & Homes",
            "logo": {
                "@type": "ImageObject",
                "url": "https://passionatecenterandhomes.com/logo.svg"
            }
        },
        "datePublished": "2025-04-03",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://passionatecenterandhomes.com/blog/supporting-daily-routines"
        }
    },
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "The Power of Community-Based Support",
        "description": "Community-based support programs offer more than resources—they create belonging and improve quality of life for individuals with IDD through inclusive activities.",
        "image": "https://passionatecenterandhomes.com/images/community.png",
        "author": { "@type": "Organization", "name": "Passionate Center & Homes" },
        "publisher": {
            "@type": "Organization",
            "name": "Passionate Center & Homes",
            "logo": {
                "@type": "ImageObject",
                "url": "https://passionatecenterandhomes.com/logo.png"
            }
        },
        "datePublished": "2025-03-19",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://passionatecenterandhomes.com/blog/community-support"
        }
    },
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Understanding Behavioral Support Plans",
        "description": "A compassionate, person-centered approach to navigating behavioral challenges in individuals with intellectual and developmental disabilities (IDD).",
        "image": "https://passionatecenterandhomes.com/images/bh.png",
        "author": { "@type": "Organization", "name": "Passionate Center & Homes" },
        "publisher": {
            "@type": "Organization",
            "name": "Passionate Center & Homes",
            "logo": {
                "@type": "ImageObject",
                "url": "https://passionatecenterandhomes.com/logo.png"
            }
        },
        "datePublished": "2025-02-22",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://passionatecenterandhomes.com/blog/behavioral-support-plans"
        }
    }
];

export default function BlogPage() {
    // Progress bar at the top of the page
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    return (
        <>
            <Head>
                <title>Developmental Disability Blog | Passionate Center & Homes</title>
                <meta
                    name="description"
                    content="Explore impactful articles from Passionate Center & Homes. Learn how we support individuals with intellectual and developmental disabilities through routines, behavior strategies, and inclusive communities."
                />
                <meta name="keywords" content="IDD, intellectual disability, Passionate Center, developmental support, behavioral plans, community support, inclusive care, disability empowerment" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://passionatecenterandhomes.com/blog" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>

            <main className="min-h-screen">
                {/* Main content sections */}
                <Header />
                <motion.div
                    className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-fruit-salad to-dodger-blue z-50"
                    style={{ scaleX, transformOrigin: "0%" }}
                />
                <BlogHeroSection />
                <BlogTabSection />
                <ProgramsCTA />
                <Footer />
            </main>
        </>

    );
}
