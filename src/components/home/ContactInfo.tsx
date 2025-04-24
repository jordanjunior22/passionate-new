"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

type contactItems = {
  icon: string;
  title: string;
  value: string[];
  link: string;
  color: string;
};


const contactItems = [
  {
    icon: "bx-envelope",
    title: "Email",
    value: ["pchhservicesllc@gmail.com"],
    link: "mailto:pchhservicesllc@gmail.com",
    color: "neutral-darker",
  },
  {
    icon: "bx-phone",
    title: "Phone",
    value: ["+1 (703) 200-0983","+1 (571) 265-5198"],
    link: "tel:+17032000983",
    color: "neutral-darker",
  },
  {
    icon: "bx-map",
    title: "Office",
    value: ["5721 Eliot Ct, Unit 173, Alexandria, Virginia 22311"],
    link: "https://maps.google.com/?q=5721+Eliot+Ct,+Alexandria,+VA+22311",
    color: "neutral-darker",
  },
];

const MapEmbed = () => {
  return (
    <div
      className="w-full"
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1770.51584027148!2d-77.12672528437805!3d38.83213809945262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b3be53a453f7%3A0xb7e107ae5c2c3822!2s5721%20Eliot%20Ct%2C%20Alexandria%2C%20VA%2022311!5e1!3m2!1sen!2sus!4v1693654739669!5m2!1sen!2sus"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps - 5721 Eliot Ct, Alexandria, VA 22311"
        allowFullScreen
      />
    </div>
  );
};

export function ContactInfo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 bg-neutral-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-tag-medium uppercase font-medium text-neutral-600 inline-block bg-white px-4 py-1 rounded-full mb-2 shadow-xsmall">
              Contact
            </span>
            <h2 className="font-heading text-neutral-darkest mt-2 text-4xl md:text-5xl">
              Get in Touch
            </h2>
            <p className="text-tag-regular text-neutral-dark mt-4 max-w-2xl mx-auto">
              We're here to provide support and answer any questions you may
              have about our services. Reach out to us through any of the
              following channels.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className={`flex flex-col items-center p-8 bg-neutral-lightest rounded-large hover:shadow-large transition-all duration-300 border-t-4 border-${item.color}`}
              >
                <div
                  className={`bg-${item.color} bg-opacity-5 rounded-full h-16 w-16 flex items-center justify-center shadow-small mb-4`}
                >
                  <i
                    className={`bx ${item.icon} text-neutral-100 text-2xl`}
                  ></i>
                </div>
                <h3 className="text-tag-medium font-medium text-neutral-darkest mb-2">
                  {item.title}
                </h3>
                <div className="text-tag-regular text-center text-neutral-dark hover:text-neutral-darkest transition-colors">
                {item.value.map((phone: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, idx: React.Key | null | undefined) => (
                  <div key={idx}>{phone}</div>
                ))}
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="bg-neutral-lightest rounded-large overflow-hidden shadow-medium border border-neutral-lighter"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Map header */}
            <div className="p-4 bg-neutral-white border-b border-neutral-lighter flex justify-between items-center">
              <h3 className="font-heading text-neutral-darkest">
                Our Location
              </h3>
              <a
                href="https://maps.google.com/?q=5721+Eliot+Ct,+Alexandria,+VA+22311"
                className="inline-flex items-center px-3 py-1 border border-neutral text-sm rounded-md text-neutral-darkest hover:bg-neutral-lightest transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bx-directions mr-1"></i>
                Get Directions
              </a>
            </div>

            <MapEmbed />

            {/* Business hours */}
            <div className="p-6 bg-neutral-white border-t border-neutral-lighter">
              <h4 className="font-medium text-neutral-darkest mb-3">
                Business Hours
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-dark">Monday - Friday</span>
                  <span className="text-neutral-darkest font-medium">
                    10:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-dark">Saturday</span>
                  <span className="text-neutral-darkest font-medium">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-dark">Sunday</span>
                  <span className="text-neutral-darkest font-medium">
                    10-00 AM - 2:00 PM
                  </span>
                </div>
              </div>

              {/* Call to action */}
              <motion.div
                className="mt-6 pt-6 border-t border-neutral-lighter text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <p className="text-neutral-dark mb-4">
                  Need immediate assistance? Give us a call or send us a
                  message.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" href="tel:+15712655198">
                    <i className="bx bx-phone mr-2"></i>
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    href="mailto:pchhservicesllc@gmail.com"
                  >
                    <i className="bx bx-envelope mr-2"></i>
                    Send Email
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Testimonial or additional message */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <blockquote className="italic text-neutral-dark max-w-2xl mx-auto">
              "At Passionate Center, we believe in creating meaningful
              connections. Don't hesitate to reach out—we're here to support
              your journey toward wellness and balance."
            </blockquote>
            <div className="mt-4 text-fruit-salad font-medium">
              — The Passionate Center Team
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
