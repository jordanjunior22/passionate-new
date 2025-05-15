"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ClientApplication() {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    contactMethod: string;
    bestTime: string;
    programs: string[];
    notes: string;
    disabilityStatus: string;
    receivingServices: string;
    emergencyName: string;
    emergencyPhone: string;
    emergencyRelation: string;
    consent: boolean;
  }>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    contactMethod: "",
    bestTime: "",
    programs: [],
    notes: "",
    disabilityStatus: "",
    receivingServices: "",
    emergencyName: "",
    emergencyPhone: "",
    emergencyRelation: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const programOptions = [
    "Residential Group Home Support Program",
    "In-Home Support Program",
  ];

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "programs") {
      setFormData((prev) => ({
        ...prev,
        programs: checked
          ? [...prev.programs, value]
          : prev.programs.filter((p) => p !== value),
      }));
    } else if (type === "checkbox" && name === "consent") {
      setFormData((prev) => ({ ...prev, consent: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      alert("Please agree to the data collection policy.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/client-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setSubmitStatus("error");
        alert(`Submission failed: ${errorData.message || "Unknown error"}`);
      } else {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          contactMethod: "",
          bestTime: "",
          programs: [],
          notes: "",
          disabilityStatus: "",
          receivingServices: "",
          emergencyName: "",
          emergencyPhone: "",
          emergencyRelation: "",
          consent: false,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-neutral-white pt-12 md:pt-32 pb-12 md:pb-16">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="bg-white rounded shadow-lg p-8">
          <h1 className="text-neutral-darker text-3xl font-heading mb-6">
            Client Application Request
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <input
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-neutral-light rounded px-4 py-2"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-neutral-light rounded px-4 py-2"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-neutral-light rounded px-4 py-2"
            />
            <input
              name="address"
              placeholder="Street Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-neutral-light rounded px-4 py-2"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="border border-neutral-light rounded px-4 py-2"
              />
              <input
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="border border-neutral-light rounded px-4 py-2"
              />
              <input
                name="zip"
                placeholder="ZIP"
                value={formData.zip}
                onChange={handleChange}
                className="border border-neutral-light rounded px-4 py-2"
              />
            </div>

            {/* Contact Preferences */}
            <label>
                Preferred Contact Method
              </label>
            <select
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleChange}
              className="w-full border border-neutral-light rounded px-4 py-2"
              required
            >

              <option value="Phone">Phone</option>
              <option value="Email">Email</option>
              <option value="Text">Text</option>
            </select>

            <label>
            Best Time to Contact
            </label>
            <select
              name="bestTime"
              value={formData.bestTime}
              onChange={handleChange}
              className="w-full border border-neutral-light rounded px-4 py-2"
              required
            >
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select>

            {/* Program Options */}
            <div>
              <p className="font-medium mb-2">Programs of Interest</p>
              {programOptions.map((program) => (
                <label key={program} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="programs"
                    value={program}
                    checked={formData.programs.includes(program)}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {program}
                </label>
              ))}
            </div>

            {/* Support Info */}

            <p>
                Do you have a disability diagnosis?
              </p>
            <select
              name="disabilityStatus"
              value={formData.disabilityStatus}
              onChange={handleChange}
              className="w-full border border-neutral-light rounded px-4 py-2"
              required
            >

              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <p >
                Are you currently receiving services?
              </p>
            <select
              name="receivingServices"
              value={formData.receivingServices}
              onChange={handleChange}
              className="w-full border border-neutral-light rounded px-4 py-2"
              required
            >

              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            {/* Emergency Contact */}
            <h2 className="text-lg font-semibold mt-6">Emergency Contact</h2>
            <input
              name="emergencyName"
              placeholder="Name"
              value={formData.emergencyName}
              onChange={handleChange}
              className="w-full border border-neutral-light rounded px-4 py-2"
            />
            <input
              name="emergencyPhone"
              placeholder="Phone Number"
              value={formData.emergencyPhone}
              onChange={handleChange}
              className="w-full border border-neutral-light rounded px-4 py-2"
            />
            <input
              name="emergencyRelation"
              placeholder="Relationship"
              value={formData.emergencyRelation}
              onChange={handleChange}
              className="w-full border border-neutral-light rounded px-4 py-2"
            />

            {/* Notes + Consent */}
            <textarea
              name="notes"
              placeholder="Additional notes or questions..."
              value={formData.notes}
              onChange={handleChange}
              className="w-full border border-neutral-light rounded px-4 py-2"
            />

            <label className="flex items-start gap-2 text-neutral-dark">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1"
                required
              />
              I agree to the collection and processing of my data for service purposes.
            </label>

            <div>
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                    Sending...
                  </div>
                ) : (
                  "Submit Application"
                )}
              </Button>

              {/* Feedback Messages */}
              {submitStatus === "success" && (
                <p className="text-green-600 text-sm pt-2">
                  ✅ Application submitted successfully.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 text-sm pt-2">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
