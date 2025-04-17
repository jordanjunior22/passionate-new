"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Define the form schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    console.log("Form data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Thank you for your message! We'll be in touch soon.");
  };

  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="text-fruit-salad font-heading font-medium">
          Involvement
        </span>
        <h2 className="mt-2 mb-4">Get Involved</h2>
        <p className="text-neutral-dark max-w-2xl mx-auto">
          We'd love to hear how you want to help!
        </p>
      </motion.div>

      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-neutral-dark font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className={`w-full px-4 py-3 rounded-medium bg-neutral-lightest border ${
                errors.name ? "border-red-500" : "border-neutral-lighter"
              }`}
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-neutral-dark font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-3 rounded-medium bg-neutral-lightest border ${
                errors.email ? "border-red-500" : "border-neutral-lighter"
              }`}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-neutral-dark font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Type your message..."
              className={`w-full px-4 py-3 rounded-medium bg-neutral-lightest border ${
                errors.message ? "border-red-500" : "border-neutral-lighter"
              }`}
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 text-fruit-salad"
              {...register("terms", { required: true })}
            />
            <label htmlFor="terms" className="ml-2 text-neutral-dark">
              I accept the Terms
            </label>
            {errors.terms && (
              <p className="text-red-500 text-sm ml-2">
                {errors.terms.message}
              </p>
            )}
          </div>

          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              variant="primary"
              size="large"
              disabled={isSubmitting}
              full={false}
            >
              {isSubmitting ? (
                <>
                  <i className="bx bx-loader-alt bx-spin"></i> Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
