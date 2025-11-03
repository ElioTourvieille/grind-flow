import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Ignore les warnings d'hydratation causés par les extensions de navigateur
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
