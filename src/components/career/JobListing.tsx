"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

const jobs = [
  {
    id: 1,
    title: "Direct Support Professional",
    location: "Virginia, USA",
    postedDate: "April 22, 2025",
    description: `As a Direct Support Professional, you’ll assist individuals with developmental disabilities in daily living activities, promoting independence and community integration. Duties include personal care, documentation, transportation, and behavior support.

**Responsibilities:**
- Assist with personal care and hygiene
- Provide transportation to appointments
- Document daily progress and challenges
- Encourage life skills development

**Requirements:**
- High school diploma or equivalent
- Valid VA driver’s license
- CPR/First Aid certification preferred
- Experience in direct care is a plus`,
  },

  {
    id: 2,
    title: "Behavioral Health Specialist",
    location: "Virginia, USA",
    postedDate: "April 5, 2025",
    description: `Provide behavioral assessments, interventions, and staff training to improve outcomes for individuals with behavioral health needs.

**Responsibilities:**
- Create and implement behavior plans
- Train direct support staff on interventions
- Collect and analyze behavior data
- Collaborate with interdisciplinary teams

**Requirements:**
- Master’s in Psychology, Social Work, or similar
- LPC/LCSW licensed or eligible in VA
- 1+ year with developmental disabilities
- Strong documentation skills`,
  },
];

export default function CareersPage() {
  const [selectedJobId, setSelectedJobId] = useState<number>(jobs[0].id);
  const selectedJob = jobs.find((job) => job.id === selectedJobId)!;

  return (
    <div className="min-h-screen bg-neutral-lightest px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Job Nav Tabs */}
        <aside className="bg-white shadow rounded-md p-4 md:col-span-1">
          <h2 className="text-lg font-semibold mb-4 text-fruit-salad">Open Roles</h2>
          <ul className="space-y-3">
            {jobs.map((job) => (
              <li
                key={job.id}
                onClick={() => setSelectedJobId(job.id)}
                className={`cursor-pointer px-3 py-2 rounded border-l-4 ${
                  job.id === selectedJobId
                    ? "bg-fruit-salad/10 border-fruit-salad text-fruit-salad font-medium"
                    : "hover:bg-neutral-light border-transparent"
                }`}
              >
                {job.title}
              </li>
            ))}
          </ul>
        </aside>

        {/* Job Detail Display */}
        <main className="bg-white shadow rounded-md p-6 md:col-span-3">
          <h1 className="text-2xl font-bold text-fruit-salad mb-1">
            {selectedJob.title}
          </h1>
          <p className="text-sm text-neutral-medium mb-4">
            {selectedJob.location} • Posted on {selectedJob.postedDate}
          </p>
          <article className="whitespace-pre-wrap text-neutral-dark text-base leading-relaxed">
            {selectedJob.description}
          </article>

          <div className="mt-6">
            <a href="/careers/apply">
              <Button size="large" variant="primary" icon="bx-send">
                Apply Now
              </Button>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
