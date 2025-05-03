"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


// Validation schema with Zod
const contactSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Your message must contain at least 10 characters"),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms" }),
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Prepare data for submission
      const submissionData = {
        email_address: data.email,
        status: "subscribed",
        merge_fields: {
          FNAME: data.name,
          MESSAGE: data.message,
        },
      };

      // Send data to API route that handles Mailchimp integration
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      // Success handling
      setSubmitStatus({
        success: true,
        message: "Your message has been sent successfully!",
      });

      // Reset form
      reset();

      // Clear message after 5 seconds
      setTimeout(() => setSubmitStatus({}), 5000);
    } catch (error) {
      console.error("Contact form submission error:", error);
      setSubmitStatus({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "An error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contactform"
      className="py-16 bg-neutral-darkest text-neutral-white"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-tag-medium uppercase font-medium">Connect</span>
          <h2 className="font-heading text-5xl mt-2">Get in Touch</h2>
          <p className="text-tag-regular mt-4">
            We're here to listen and support you.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-tag-regular mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              className={`w-full px-4 py-3 bg-neutral-darker border-0 rounded-medium text-neutral-white placeholder-neutral focus:outline-none focus:ring-1 ${
                errors.name ? "focus:ring-seance" : "focus:ring-fruit-salad"
              }`}
              placeholder="Your name"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-seance-light text-tag-small mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-tag-regular mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={`w-full px-4 py-3 bg-neutral-darker border-0 rounded-medium text-neutral-white placeholder-neutral focus:outline-none focus:ring-1 ${
                errors.email ? "focus:ring-seance" : "focus:ring-fruit-salad"
              }`}
              placeholder="Your email address"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-seance-light text-tag-small mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-tag-regular mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className={`w-full px-4 py-3 bg-neutral-darker border-0 rounded-medium text-neutral-white placeholder-neutral focus:outline-none focus:ring-1 ${
                errors.message ? "focus:ring-seance" : "focus:ring-fruit-salad"
              }`}
              placeholder="Type your message..."
              {...register("message")}
            ></textarea>
            {errors.message && (
              <p className="text-seance-light text-tag-small mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              className="w-5 h-5 rounded-small bg-neutral-darker border-0 focus:ring-fruit-salad text-fruit-salad"
              {...register("terms")}
            />
            <label
              htmlFor="terms"
              className="ml-2 text-neutral-light text-tag-small"
            >
              I accept the Terms
            </label>
            {errors.terms && (
              <p className="text-seance-light text-tag-small ml-2">
                {errors.terms.message}
              </p>
            )}
          </div>

          <div className="flex justify-center mt-8">
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="min-w-40"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>

          {submitStatus.message && (
            <div
              className={`text-center p-3 rounded-medium ${
                submitStatus.success
                  ? "bg-fruit-salad-darkest text-fruit-salad-lightest"
                  : "bg-seance-darkest text-seance-lightest"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
