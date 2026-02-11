import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/web-portofolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
