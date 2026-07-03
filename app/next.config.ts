import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: process.env.PAGES_BASE_PATH,
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
