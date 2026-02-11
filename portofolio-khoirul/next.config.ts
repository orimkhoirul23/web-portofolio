import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "web-portofolio"; // Pastikan ini SAMA PERSIS dengan nama repo di GitHub

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Wajib agar gambar muncul di GitHub Pages
  },
  // Tambahkan basePath agar CSS tidak 404
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  trailingSlash: true, // Opsional: membantu navigasi di static hosting
};

export default nextConfig;
