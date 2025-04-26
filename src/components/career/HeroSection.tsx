
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

export default function CareerHero() {
  const router = useRouter();

  const navigateToJobListings = () => {
    router.push("/careers/job-listings"); // replace with actual job listings route
  };

  return (
    <section className="relative bg-neutral-lightest py-24 sm:py-32 lg:py-40">

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-heading text-neutral-darkest">
          Join Our Team and Make a Difference
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-neutral-dark">
          At Passionate Center & Homes, we are dedicated to supporting individuals and building communities. Explore our career opportunities and help us create a better tomorrow.
        </p>

        </div>
    </section>
  );
}
