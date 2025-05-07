"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real implementation, this would call an API to handle the subscription
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const GoPay = () => {
    // Redirect the user to the specified link
    window.open("https://mezahfoundation.org", "_blank");
  };

  return (
    <footer className="bg-neutral-white pt-12 pb-6">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          {/* Column 1: Logo and Info */}
          <div>
            <Link href="/" className="block mb-4">
              <Image
                src="/logo.svg"
                alt="Passionate Center & Homes"
                width={160}
                height={40}
                className="h-auto w-40 md:w-48"
              />
            </Link>
            <div className="flex gap-3 mb-4 mt-6">
              <a
                href="https://web.facebook.com/pchhservicesllc/"
                aria-label="Facebook"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-lightest hover:bg-neutral-lighter transition-colors duration-200"
              >
                <i className="bx bxl-facebook text-neutral-dark"></i>
              </a>
              <a
                href="https://x.com/pchhservicesllc"
                aria-label="Twitter"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-lightest hover:bg-neutral-lighter transition-colors duration-200"
              >
                <i className="bx bxl-twitter text-neutral-dark"></i>
              </a>
              <a
                href="https://www.instagram.com/pchhservicesllc/"
                aria-label="Instagram"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-lightest hover:bg-neutral-lighter transition-colors duration-200"
              >
                <i className="bx bxl-instagram text-neutral-dark"></i>
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-lightest hover:bg-neutral-lighter transition-colors duration-200"
              >
                <i className="bx bxl-youtube text-neutral-dark"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-heading font-semibold text-neutral-darkest uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-neutral-dark hover:text-fruit-salad transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-neutral-dark hover:text-fruit-salad transition-colors duration-200"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/getinvolved"
                  className="text-neutral-dark hover:text-fruit-salad transition-colors duration-200"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-dark hover:text-fruit-salad transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-neutral-dark hover:text-fruit-salad transition-colors duration-200"
                >
                  Blog Posts
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-sm font-heading font-semibold text-neutral-darkest uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/faqs"
                  className="text-neutral-dark hover:text-fruit-salad transition-colors duration-200"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-neutral-dark hover:text-fruit-salad transition-colors duration-200"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-neutral-dark hover:text-fruit-salad transition-colors duration-200"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="/ooops"
                  className="text-neutral-dark hover:text-fruit-salad transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/ooops"
                  className="text-neutral-dark hover:text-fruit-salad transition-colors duration-200"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Connected */}
          <div>
            <h3 className="text-sm font-heading font-semibold text-neutral-darkest uppercase mb-4">
              Stay Connected
            </h3>
            <ul className="space-y-3 mb-4">
              <li>
                <Link
                  href="/ooops"
                  className="text-neutral-dark hover:text-fruit-salad transition-colors duration-200"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/pchhservicesllc/"
                  className="text-neutral-dark hover:text-fruit-salad transition-colors duration-200"
                >
                  Social Media
                </Link>
              </li>
              <li>
                <Link
                  href="/https://www.youtube.com/"
                  className="text-neutral-dark hover:text-fruit-salad transition-colors duration-200"
                >
                  YouTube Channel
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-neutral-dark hover:text-fruit-salad transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-neutral-dark hover:text-fruit-salad transition-colors duration-200"
                  onClick={GoPay}
                >
                  Support Us
                </Link>
              </li>
            </ul>

            <h3 className="text-sm font-heading font-semibold text-neutral-darkest uppercase mb-4">
              Subscribe
            </h3>
            <p className="text-neutral-dark text-sm mb-4">
              Join our newsletter to stay updated on our latest news.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-2"
            >
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow"
              />
              <Button type="submit" variant="primary" className="min-w-[100px]">
                {subscribed ? "Thanks!" : "Sign Up"}
              </Button>
            </form>
            {subscribed && (
              <p className="text-fruit-salad text-sm mt-2">
                Thank you for subscribing!
              </p>
            )}
            <p className="text-neutral text-xs mt-2">
              By subscribing, you agree to our Privacy Policy and consent to
              updates.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-6 border-t border-neutral-lighter flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-neutral-dark mb-4 md:mb-0">
            © 2025 Passionate Center & Homes H.C.S. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/ooops"
              className="text-neutral-dark hover:text-fruit-salad transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/ooops"
              className="text-neutral-dark hover:text-fruit-salad transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link
              href="/ooops"
              className="text-neutral-dark hover:text-fruit-salad transition-colors duration-200"
            >
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
