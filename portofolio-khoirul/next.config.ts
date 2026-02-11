import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },
  basePath: "/web-portofolio", // Ganti dengan nama repository GitHub Anda
  assetPrefix: "/web-portofolio/",
};

export default nextConfig;
