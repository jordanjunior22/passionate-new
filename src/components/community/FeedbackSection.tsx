"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  avatar: string;
}

export default function FeedbackSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Emily Johnson",
      position: "Family Member, Client",
      content: "The Community Support Program has been a lifeline for us.",
      avatar: "/images/dp.webp",
    },
    {
      id: 2,
      name: "Michael Smith",
      position: "Client, Advocate",
      content:
        "The staff truly care about our well-being. Their guidance has made all the difference in our recovery journey.",
      avatar: "/images/dp.webp",
    },
    {
      id: 3,
      name: "Sarah Lee",
      position: "Client, Participant",
      content:
        "I found hope and community here. This program helped me regain my confidence and independence.",
      avatar: "/images/dp.webp",
    },
    {
      id: 4,
      name: "David Brown",
      position: "Family Member, Client",
      content:
        "The support I received was invaluable. I felt understood and empowered to take charge of my life again.",
      avatar: "/images/dp.webp",
    },
    {
      id: 5,
      name: "Jessica White",
      position: "Client, Supporter",
      content: "This program has been a beacon of hope for our family.",
      avatar: "/images/dp.webp",
    },
    {
      id: 6,
      name: "Tom Green",
      position: "Client, Advocate",
      content: "I never felt alone; the community here is amazing.",
      avatar: "/images/dp.webp",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-neutral-lightest">
      <div className="container responsive-px mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading mb-4">Client Feedback</h2>
          <p className="text-neutral-dark max-w-2xl mx-auto">
            Transformative support that changed my life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-white p-6 rounded-medium shadow-small"
            >
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bx bxs-star text-fruit-salad"></i>
                ))}
              </div>
              <p className="text-neutral-dark mb-4">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-lighter overflow-hidden flex items-center justify-center">
                  <i className="bx bx-user text-neutral"></i>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-darker">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-neutral">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
