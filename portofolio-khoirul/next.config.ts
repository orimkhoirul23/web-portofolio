import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "web-portofolio";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },

  // Pastikan tidak ada typo pada nama repo
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",

  trailingSlash: true,
};

export default nextConfig;
