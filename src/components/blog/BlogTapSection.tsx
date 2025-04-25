"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Supporting Daily Routines for Adults with IDD",
    description: "Consistency and structure can empower individuals with independence.",
    date: "April 3, 2025",
    image: "/images/idd-routines.png",
    content:
      "Supporting daily routines is crucial for promoting independence, confidence, and a sense of achievement among adults with intellectual and developmental disabilities (IDD). Establishing a structured daily schedule can significantly enhance their ability to manage time, complete tasks, and participate actively in their communities. Routines offer predictability, which helps reduce anxiety and builds trust in the process of daily living. Whether it involves setting up a morning checklist, planning meals, or scheduling recreational activities, each small step empowers individuals to take ownership of their day. Caregivers and support workers play a vital role by encouraging participation, offering clear visual aids, and providing consistent positive reinforcement. Through collaborative planning and routine practice, adults with IDD can develop essential life skills that promote autonomy and self-worth. Additionally, maintaining flexibility within the structure allows for personalization and growth, ensuring routines remain engaging and meaningful. Overall, supporting daily routines is not just about completing tasks—it's about fostering independence, dignity, and an enriched quality of life.",
  },
  {
    id: 2,
    title: "The Power of Community-Based Support",
    description: "Why inclusion starts with connection and shared spaces.",
    date: "March 19, 2025",
    image: "/images/community.png",
    content:
      "Living with intellectual or developmental disabilities shouldn't mean living in isolation. Community-based support programs offer more than just resources—they offer belonging. Being involved in inclusive community settings like shared housing, activity groups, or local volunteering can drastically improve self-confidence and social skills for individuals with IDD. These environments foster a sense of purpose and connection while reducing stigma and promoting awareness. Whether it’s a gardening club, arts workshop, or local sports team, meaningful participation in community life can have long-lasting effects. In this article, we’ll explore examples of successful community programs and show how small initiatives can create big shifts toward equity and inclusion.",
  },
  {
    id: 3,
    title: "Understanding Behavioral Support Plans",
    description: "Compassionate approaches to navigating behavioral challenges.",
    date: "February 22, 2025",
    image: "/images/bh.png",
    content:
      "Challenging behaviors are often forms of communication. When working with individuals with IDD, it’s critical to understand the 'why' behind a behavior before deciding how to respond. A Behavioral Support Plan (BSP) is a compassionate, person-centered strategy designed to reduce difficult behaviors and promote positive alternatives. It includes understanding triggers, adjusting the environment, and teaching new skills. Caregivers and support workers can collaborate with behavior specialists to create tailored plans based on real-life observations. Most importantly, these plans focus on empathy, patience, and consistency rather than punishment or control. This blog explains how effective BSPs are structured and offers practical insights for implementing them with confidence and care.",
  },
];

export default function BlogTabSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePost = blogPosts[activeIndex];

  return (
    <section className="w-full py-20 bg-neutral-white">
      <div className="container responsive-px mx-auto max-w-7xl flex flex-col md:flex-row gap-10">
        {/* Tabs */}
        <div className="w-full md:w-1/2 space-y-4">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer p-4 rounded-lg border transition ${
                activeIndex === index
                  ? "bg-fruit-salad/10 border-fruit-salad text-fruit-salad"
                  : "border-neutral-200 hover:border-fruit-salad/40"
              }`}
            >
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm text-neutral-dark">{post.description}</p>
              <span className="text-xs text-neutral-medium">{post.date}</span>
            </div>
          ))}
        </div>

        {/* Content Panel */}
        <div className="w-full md:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePost.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="rounded-lg overflow-hidden aspect-video bg-neutral-lightest">
                <Image
                  src={activePost.image}
                  alt={activePost.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">{activePost.title}</h2>
                <p className="text-neutral-dark text-lg">{activePost.content}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
