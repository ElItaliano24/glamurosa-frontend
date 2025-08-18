import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
        pathname: "/api/media/file/**",
      },
      {
        protocol: 'https',
        hostname: 'glamurosa-backend.vercel.app',
        pathname: '/api/media/file/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dcifqfvi7/**',
      },
    ],
  },
};

export default nextConfig;
