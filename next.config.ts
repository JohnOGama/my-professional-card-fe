import type { NextConfig } from "next";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001";

console.log("BACKEND_URL", BACKEND_URL);

const nextConfig: NextConfig = {
  /* config options here */
  rewrites: async () => {
    return [
      // Proxy API requests to backend (same-origin for cookies)
      {
        source: "/api/v1/:path*",
        destination: `${BACKEND_URL}/api/v1/:path*`,
      },
      // Proxy auth requests to backend
      {
        source: "/api/auth/:path*",
        destination: `${BACKEND_URL}/api/auth/:path*`,
      },
    ];
  },
};

export default nextConfig;
