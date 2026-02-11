import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "web-portofolio";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },

  // Mengarahkan Next.js agar selalu mencari file di dalam sub-folder repo
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `https://orimkhoirul23.github.io/${repoName}/` : "",

  trailingSlash: true,
};

export default nextConfig;
