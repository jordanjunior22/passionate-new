"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function ContactInfoSection() {
  return (
    <section className="w-full bg-neutral-white py-4 md:py-12">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-fruit-salad font-heading text-tag-medium">
            Connect
          </span>
          <h2 className="text-neutral-darker font-heading mt-2 mb-4">
            Get in Touch
          </h2>
          <p className="text-neutral-dark text-tag-medium max-w-2xl">
            We're here to support you. Reach out today!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <motion.div
            className="flex flex-col gap-8 lg:w-1/3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Email Contact */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-start justify-center w-12 h-12 rounded-full bg-fruit-salad-lightest text-fruit-salad">
                <i className="bx bx-envelope text-2xl mt-2"></i>
              </div>
              <div>
                <h3 className="font-heading text-neutral-darker text-tag-large mb-1">
                  Email
                </h3>
                <p className="text-neutral-dark mb-1">Contact us anytime!</p>
                <a
                  href="mailto:pchhservicesllc@gmail.com"
                  className="text-dodger-blue hover:text-dodger-blue-dark transition-colors underline"
                >
                  pchhservicesllc@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Contact */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-start justify-center w-12 h-12 rounded-full bg-fruit-salad-lightest text-fruit-salad">
                <i className="bx bx-phone text-2xl mt-2"></i>
              </div>
              <div>
                <h3 className="font-heading text-neutral-darker text-tag-large mb-1">
                  Phone
                </h3>
                <p className="text-neutral-dark mb-1">Call us for assistance</p>
                <a
                  href="tel:+15712655198"
                  className="text-dodger-blue hover:text-dodger-blue-dark transition-colors underline"
                >
                  +1 (703) 200-0983
                </a>
              </div>
            </div>

            {/* Office Location */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-start justify-center w-12 h-12 rounded-full bg-fruit-salad-lightest text-fruit-salad">
                <i className="bx bx-map text-2xl mt-2"></i>
              </div>
              <div>
                <h3 className="font-heading text-neutral-darker text-tag-large mb-1">
                  Office
                </h3>
                <p className="text-neutral-dark mb-1">
                  5721 Eliot Ct, Unit 173, Alexandria, Virginia 22311
                </p>
                <Button
                  variant="tertiary"
                  size="small"
                  icon="bx-right-arrow-alt"
                  href="https://goo.gl/maps/5721EliotCtAlexandriaVA22311"
                  className="mt-1 pl-0"
                >
                  Find Us
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-2/3 h-[400px] md:h-[500px] bg-neutral-lightest rounded-medium overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1770.51584027148!2d-77.12672528437805!3d38.83213809945262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b3be53a453f7%3A0xb7e107ae5c2c3822!2s5721%20Eliot%20Ct%2C%20Alexandria%2C%20VA%2022311!5e1!3m2!1sen!2sus!4v1693654739669!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
