import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wpfitness.eu',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'etamade-com.github.io',
        port: '',
        pathname: '/anpc-sal-sol-logo/**',
      },
    ],
  },
};

export default nextConfig;
