"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Head from "next/head";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target as Node)
      ) {
        setIsMobileDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const GoPay = () => {
    window.open("https://mezahfoundation.org", "_blank");
  };

  // Toggle functions with elegant handling
  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full py-3 sm:py-4 z-50 transition-all duration-300 ${
        isScrolled ? "bg-neutral-white shadow-medium" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 max-w-8xl flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/Logo.svg"
            alt="Passionate Center & Homes"
            width={160}
            height={40}
            className="h-auto w-40 md:w-48"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-6">
          <Link
            href="/about"
            className="text-tag-small lg:text-tag-regular text-neutral-darkest hover:text-fruit-salad transition-colors duration-200"
          >
            About
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              className="text-tag-small lg:text-tag-regular text-neutral-darkest hover:text-fruit-salad transition-colors duration-200 flex items-center"
              onClick={toggleDropdown}
              onMouseEnter={() => setIsDropdownOpen(true)}
            >
              Our Programs
              <i
                className={`bx ${
                  isDropdownOpen ? "bx-chevron-up" : "bx-chevron-down"
                } ml-1 text-sm transition-transform duration-200`}
              ></i>
            </button>

            <div
              className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 w-64 ${
                isDropdownOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div className="py-1">
                <Link
                  href="/residential"
                  className="block px-4 py-3 text-neutral-darkest hover:text-fruit-salad hover:bg-neutral-lightest transition-colors duration-200 border-l-2 border-transparent hover:border-fruit-salad"
                >
                  Residential Group Home Support Program
                </Link>
                <Link
                  href="/in-home-support-program"
                  className="block px-4 py-3 text-neutral-darkest hover:text-fruit-salad hover:bg-neutral-lightest transition-colors duration-200 border-l-2 border-transparent hover:border-fruit-salad"
                >
                  In-Home Support Program
                </Link>
                {/* <Link
                  href="/companion-care-program"
                  className="block px-4 py-3 text-neutral-darkest hover:text-fruit-salad hover:bg-neutral-lightest transition-colors duration-200 border-l-2 border-transparent hover:border-fruit-salad"
                >
                  Companion Care Program
                </Link>
                <Link
                  href="/community"
                  className="block px-4 py-3 text-neutral-darkest hover:text-fruit-salad hover:bg-neutral-lightest transition-colors duration-200 border-l-2 border-transparent hover:border-fruit-salad"
                >
                  Community Support Program
                </Link> */}

                <Link
                  href="/programs"
                  className="block px-4 py-2 mt-1 text-sm text-neutral-dark hover:text-fruit-salad bg-neutral-lightest font-medium transition-colors duration-200 text-center"
                >
                  View All Programs
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="/locations"
            className="text-tag-small lg:text-tag-regular text-neutral-darkest hover:text-fruit-salad transition-colors duration-200"
          >
            Locations
          </Link>
          <Link
            href="/getinvolved"
            className="text-tag-small lg:text-tag-regular text-neutral-darkest hover:text-fruit-salad transition-colors duration-200"
          >
            Get Involved
          </Link>
          <Link
            href="/contact"
            className="text-tag-small lg:text-tag-regular text-neutral-darkest hover:text-fruit-salad transition-colors duration-200"
          >
            Contact
          </Link>
          <Button
            variant="primary"
            size="medium"
            className="text-tag-small lg:text-tag-regular"
            icon="bx-heart"
            onClick={GoPay}
          >
            Donate
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-darkest"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <i
            className={`bx ${
              isMobileMenuOpen ? "bx-x" : "bx-menu"
            } text-xl sm:text-2xl`}
          ></i>
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-neutral-white z-40 p-6 overflow-y-auto">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-tag-regular text-neutral-darkest hover:text-fruit-salad transition-colors duration-200 p-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              {/* Mobile Programs Dropdown */}
              <div ref={mobileDropdownRef} className="relative">
                <button
                  className="flex justify-between items-center w-full text-tag-regular text-neutral-darkest hover:text-fruit-salad transition-colors duration-200 p-3"
                  onClick={toggleMobileDropdown}
                >
                  <span>Our Programs</span>
                  <i
                    className={`bx ${
                      isMobileDropdownOpen ? "bx-chevron-up" : "bx-chevron-down"
                    } text-xl transition-transform duration-200`}
                  ></i>
                </button>

                {/* Mobile Dropdown Content */}
                <div
                  className={`bg-neutral-lightest rounded-lg overflow-hidden transition-all duration-300 ${
                    isMobileDropdownOpen
                      ? "max-h-60 opacity-100 my-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <Link
                    href="/residential"
                    className="block px-6 py-3 text-neutral-darkest hover:text-fruit-salad transition-colors duration-200 border-l-2 border-transparent hover:border-fruit-salad"
                    onClick={() => {
                      setIsMobileDropdownOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Residential Group Home Support Program

                  </Link>
                  <Link
                    href="/community"
                    className="block px-6 py-3 text-neutral-darkest hover:text-fruit-salad transition-colors duration-200 border-l-2 border-transparent hover:border-fruit-salad"
                    onClick={() => {
                      setIsMobileDropdownOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    In-Home Support Program
                  </Link>
                  <Link
                    href="/programs"
                    className="block px-6 py-2 text-sm text-neutral-dark hover:text-fruit-salad font-medium transition-colors duration-200 text-center"
                    onClick={() => {
                      setIsMobileDropdownOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    View All Programs
                  </Link>
                </div>
              </div>
              <Link
                href="/locations"
                className="text-tag-regular text-neutral-darkest hover:text-fruit-salad transition-colors duration-200 p-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Locations
              </Link>
              <Link
                href="/getinvolved"
                className="text-tag-regular text-neutral-darkest hover:text-fruit-salad transition-colors duration-200 p-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Involved
              </Link>
              <Link
                href="/contact"
                className="text-tag-regular text-neutral-darkest hover:text-fruit-salad transition-colors duration-200 p-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button
                variant="primary"
                size="medium"
                icon="bx-heart"
                onClick={GoPay}
                full
              >
                Donate
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
