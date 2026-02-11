import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Code,
  Calendar,
  User,
  Layers,
  CheckCircle,
  Lightbulb,
} from "lucide-react";

// --- DATA PROJECTS (UPDATED SCHEDULING FEATURES) ---
const projectsData: Record<string, any> = {
  "perahu-ai": {
    title: "PerahuAI: Digital Literacy & Hoax Detection",
    role: "AI Engineer & Fullstack Developer",
    period: "Sep 2025 - Jan 2026",
    tech: ["IndoBERT", "TensorFlow", "Docker", "Python", "OCR", "React"],
    overview:
      "PerahuAI adalah aplikasi web literasi digital yang dirancang untuk melawan penyebaran misinformasi di Indonesia. Dilatarbelakangi oleh banyaknya hoaks yang beredar luas dalam format yang tidak terbatas (bukan hanya teks, tapi juga gambar dan tautan), platform ini menghadirkan fitur utama Multimodal Hoax Detection. Sistem ini memungkinkan pengguna memverifikasi kebenaran informasi dari input teks, gambar, dan URL secara bersamaan dalam satu antarmuka yang mudah digunakan.",
    features: [
      "Multimodal Detection System: Identifies hoaxes and misinformation from three types of inputs: URLs, Text, and Images.",
      "URL Analysis: Detects suspicious links and common cyber threats like typosquatting (fake domains).",
      "Text Detection: Uses a fine-tuned IndoBERT model with a 0.97 F1 Score to classify Indonesian-language hoaxes accurately.",
      "Image Processing: Extracts text from images using OCR for further analysis, and includes a Deepfake detection feature for images without text.",
      "Full-stack Implementation: Built the backend, managed the integration, and deployed the entire application to a Cloud VPS using Docker.",
    ],
    challenges:
      "Tantangan terbesar adalah pengolahan data mentah (sumber: MAFINDO) yang sangat 'kotor' dan tidak terstruktur; di mana konten hoaks, label fakta, dan hasil investigasi tercampur dalam satu blok teks. Membersihkannya secara manual sangat memakan waktu, sehingga saya menggunakan LLM dengan teknik Context Engineering untuk memisahkan, melabeli, dan membersihkan ribuan data tersebut secara otomatis dan akurat.",
    links: [
      {
        label: "Source Code",
        url: "https://github.com/orimkhoirul23",
        icon: <Github size={18} />,
      },
    ],
  },
  "scheduling-webapp": {
    title: "Automated Scheduling System",
    role: "Backend Developer",
    period: "Jun 2025 - Sep 2025",
    tech: ["Google OR-Tools", "Node.js", "Express", "Docker", "Redis"],
    overview:
      "Aturan penjadwalan agent yang rumit seperti larangan shift malam berturut-turut lalu kebutuhan minimal orang pada masing-masing role yang berbeda-beda dan lain-lain serta sistem pengajuan cuti yang masih manual membuat data seringkali terlewat sehingga membuat penjadwalan memakan banyak waktu maka dari itu dibuat program yang bisa secara otomatis mencari jadwal yang memenuhi semua aturan serta web portal terpusat untuk pengajuan data cuti dan lain-lain sehingga pembuatan jadwal bisa lebih cepat dan efisien.",
    // FEATURES UPDATED HERE:
    features: [
      "Automated Scheduling System: Designed to manage and optimize shifts for 30+ agents simultaneously.",
      "Optimization Engine: Powered by Google OR-Tools to automatically generate schedules, replacing manual planning and reducing errors.",
      "Digital Submission Portal: A web application built with Node.js to digitize schedule requests, ensuring all data is integrated and valid.",
      "Multi-shift Management: Handles complex scheduling requirements, including various shift patterns and agent availability.",
      "Deployment: Containerized the application using Docker for consistent performance and deployed it to a Cloud VPS.",
    ],
    challenges:
      "Karena aturan penjadwalan yang rumit pada awalnya saya cukup kesulitan di memahami apa yang diinginkan oleh klien sehingga seringkali ada hal yang disalahpahami. Untuk mengatasi itu saya sebisa mungkin mengklarifikasi apa yang saya pahami dengan kliennya.",
    links: [
      { label: "View Project", url: "#", icon: <ExternalLink size={18} /> },
    ],
  },
  "klungkung-chatbot": {
    title: "Klungkung Tourism Chatbot",
    role: "AI Engineer",
    period: "Project",
    tech: ["RAG", "LangChain", "ChromaDB", "Gemini API", "Python"],
    overview:
      "Asisten virtual cerdas yang dirancang untuk mempromosikan pariwisata Klungkung, Bali. Berbeda dengan chatbot standar yang sering 'berhalusinasi', sistem ini menggunakan teknik Retrieval-Augmented Generation (RAG) untuk memberikan jawaban faktual berdasarkan basis data pariwisata lokal yang terverifikasi.",
    features: [
      "RAG Architecture: Menggabungkan kemampuan penalaran LLM dengan basis pengetahuan lokal (Knowledge Base) yang tersimpan di Vector Database.",
      "Multi-Vector Retrieval: Menggunakan strategi pengambilan dokumen canggih untuk memastikan konteks yang diambil sangat relevan dengan pertanyaan user yang ambigu.",
    ],
    challenges:
      "Memastikan akurasi pengambilan data (retrieval) dari dokumen pariwisata yang tidak terstruktur. Solusinya menggunakan strategi 'chunking' dokumen yang dinamis dan metode pencarian hibrida (keyword + semantic search).",
    links: [
      {
        label: "Repository",
        url: "https://github.com/orimkhoirul23",
        icon: <Code size={18} />,
      },
    ],
  },
};

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const project = projectsData[decodedSlug];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/40 via-neutral-950 to-neutral-950 text-neutral-300 font-sans selection:bg-white selection:text-black">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/70 backdrop-blur-md border-b border-neutral-800/50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors group"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-6 py-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* HEADER */}
        <div className="space-y-6 mb-12">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t: string, idx: number) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium text-red-400 bg-red-900/10 border border-red-900/30 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-sm text-neutral-500 border-b border-neutral-800 pb-8">
            <div className="flex items-center gap-2">
              <User size={16} className="text-red-500" />
              <span>{project.role}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-red-500" />
              <span>{project.period}</span>
            </div>
          </div>
        </div>

        {/* MAIN BODY */}
        <div className="space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              Overview
            </h2>
            <p className="text-neutral-400 leading-relaxed text-lg">
              {project.overview}
            </p>
          </section>

          {/* Key Features */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Layers size={20} className="text-red-500" /> Key Features
            </h2>
            <div className="grid gap-4">
              {project.features.map((feature: string, idx: number) => {
                const parts = feature.split(":");
                const title = parts[0];
                const desc = parts.slice(1).join(":").trim();

                return (
                  <div
                    key={idx}
                    className="bg-neutral-900/40 p-5 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors"
                  >
                    <div className="flex gap-3">
                      <CheckCircle
                        size={20}
                        className="text-red-500 shrink-0 mt-1"
                      />
                      <div>
                        <span className="text-white font-semibold block mb-1">
                          {title}
                        </span>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Challenges (Box Biasa) */}
          {project.challenges && (
            <section>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Lightbulb size={20} className="text-red-500" /> Challenges &
                Solutions
              </h2>
              <div className="bg-neutral-900/40 p-6 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <p className="text-neutral-400 leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            </section>
          )}

          {/* Links */}
          <section className="pt-8 border-t border-neutral-800">
            <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-6">
              Project Links
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.links.map((link: any, idx: number) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-neutral-950 rounded-full font-bold hover:bg-neutral-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] text-sm"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "perahu-ai" },
    { slug: "scheduling-webapp" },
    { slug: "klungkung-chatbot" },
  ];
}
