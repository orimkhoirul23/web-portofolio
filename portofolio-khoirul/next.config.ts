import type { NextConfig } from "next";

// Cek apakah kita sedang di mode production (saat di-build)
const isProd = process.env.NODE_ENV === "production";

// Masukkan nama repository GitHub Anda persis di sini
const repoName = "web-portofolio";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Wajib untuk GitHub Pages

  images: {
    unoptimized: true, // Wajib agar gambar muncul tanpa server Next.js
  },

  // Konfigurasi Path:
  // Jika di Production, tambahkan nama repo di depan link resource
  // Jika di Localhost, biarkan kosong agar tetap jalan normal
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",

  // Opsional: Membantu navigasi antar halaman di static export
  trailingSlash: true,
};

export default nextConfig;
