import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Attention : cette configuration désactive la vérification ESLint à la construction
    // Ce n'est pas idéal pour la qualité du code
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
