"use client";

import React, { useEffect } from "react";
import Link from "next/link";

const WorkingPage = () => {
  useEffect(() => {
    // Load BoxIcons
    const link = document.createElement("link");
    link.href = "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-white text-center px-6">
      <div className="text-[80px] text-dodger-blue mb-4">
        <i className="bx bx-hard-hat"></i>
      </div>
      <h1 className="text-4xl font-bold text-fruit-salad mb-4">
        Ooops... We're Working On It!
      </h1>
      <p className="text-gray-600 max-w-lg mb-6">
        Our developers are currently improving this part of the site. We’ll be back soon with something awesome.
      </p>
      <Link
        href="/"
        className="bg-fruit-salad text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default WorkingPage;
