import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // ← add this
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
