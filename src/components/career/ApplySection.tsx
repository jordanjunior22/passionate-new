"use client";

import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
  coverLetter: File | null;
  resume: File | null;
  number: string;
}

const ApplySection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    coverLetter: null,
    resume: null,
    number: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);
    if (formData.coverLetter) form.append("coverLetter", formData.coverLetter);
    if (formData.resume) form.append("resume", formData.resume);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        setStatus("✅ Application submitted successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
          coverLetter: null,
          resume: null,
          number: "",
        });
      } else {
        setStatus("❌ Error submitting application. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Error submitting application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 px-6 pb-20 bg-neutral-lightest">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-fruit-salad mb-6">Apply for a Position</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-darkest">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full border border-neutral-light rounded-md px-4 py-2 shadow-sm focus:ring-fruit-salad focus:border-fruit-salad"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-darkest">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full border border-neutral-light rounded-md px-4 py-2 shadow-sm focus:ring-fruit-salad focus:border-fruit-salad"
            />
          </div>
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-darkest">
              Phone Numer
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              placeholder="+1 (123) 456-7890"
              value={formData.number}
              onChange={handleChange}
              className="mt-1 w-full border border-neutral-light rounded-md px-4 py-2 shadow-sm focus:ring-fruit-salad focus:border-fruit-salad"
            />
          </div>
          {/* Message / Cover Letter Text */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-darkest">
              Tell us why you are a great fit for this position
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about yourself and a situation were you provided compassionate support to an individual with DD/IDD (in text)"
              className="mt-1 w-full border border-neutral-light rounded-md px-4 py-2 shadow-sm focus:ring-fruit-salad focus:border-fruit-salad"
            ></textarea>
          </div>

{/* Upload Cover Letter File */}
<div>
  <label className="block text-sm font-medium text-neutral-darkest mb-1">
    Upload Cover Letter (optional)
  </label>
  <label className="cursor-pointer inline-flex items-center px-4 py-2 bg-fruit-salad text-white text-sm font-medium rounded-md hover:bg-fruit-salad-dark transition">
    Choose File
    <input
      type="file"
      name="coverLetter"
      accept=".pdf,.doc,.docx"
      onChange={handleFileChange}
      className="hidden"
    />
  </label>
  {formData.coverLetter && (
    <p className="text-sm text-neutral-dark mt-2">
      Selected: {formData.coverLetter.name}
    </p>
  )}
</div>

{/* Upload Resume */}
<div>
  <label className="block text-sm font-medium text-neutral-darkest mb-1">
    Upload Resume (required)
  </label>
  <label className="cursor-pointer inline-flex items-center px-4 py-2 bg-fruit-salad text-white text-sm font-medium rounded-md hover:bg-fruit-salad-dark transition">
    Choose File
    <input
      type="file"
      name="resume"
      accept=".pdf,.doc,.docx"
      required
      onChange={handleFileChange}
      className="hidden"
    />
  </label>
  {formData.resume && (
    <p className="text-sm text-neutral-dark mt-2">
      Selected: {formData.resume.name}
    </p>
  )}
</div>


          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-fruit-salad text-white font-semibold rounded-md hover:bg-fruit-salad-dark focus:outline-none focus:ring-2 focus:ring-fruit-salad focus:ring-opacity-50"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </div>

          {/* Status Message */}
          {status && <p className="text-center text-sm text-fruit-salad mt-4">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ApplySection;
