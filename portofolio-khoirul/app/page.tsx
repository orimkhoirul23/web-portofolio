"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Download,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  Menu,
  X,
  Linkedin,
  ArrowRight,
  GraduationCap, // Pastikan import icon ini ada
} from "lucide-react";
const basePath = process.env.NODE_ENV === "production" ? "/web-portofolio" : "";
export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- DATA ---
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Organizations", href: "#organizations" },
    { name: "Skills", href: "#skills" },
  ];

  const personalInfo = {
    name: "Mochammad Khoirullutfansyah",
    description:
      "AI Engineer & Backend Developer building scalable business solutions with Machine Learning and robust infrastructure.",
    email: "mkhoirulutfansyah@gmail.com",
    phone: "+62 878-2017-4354",
    whatsappLink: "https://wa.me/6287820174354",
    linkedin:
      "https://www.linkedin.com/in/mochammad-khoirullutfansyah-328b28245/",
  };

  const education = {
    university: "Telkom University – Bandung, Indonesia",
    degree: "Bachelor of Informatics (S1)",
    gpa: "GPA: 3.82/4.0",
    period: "September 2022 – January 2026",
    courses:
      "Relevant Courses: Algorithms & Data Structures, Machine Learning, Database Systems, OOP, Probability and Statistics, Calculus, Process Mining.",
  };

  const experiences = [
    {
      role: "AI Engineer Internship",
      company: "Telkom Indonesia",
      period: "September 2025 – January 2026",
      points: [
        "Built an end-to-end digital literacy web application featuring a multimodal hoax detection system to identify misinformation across various media formats and deploy it to VPS.",
        "Developed fine-tuned an IndoBERT model using TensorFlow, achieving 0.97 F1 Score in detecting Indonesian-language hoax through advanced NLP techniques.",
        "Built backend and deployment of both the ML model and the web application, ensuring a seamless and scalable user experience.",
        "Implemented auxiliary features, including a user feedback loop, to continuously gather data for future model retraining.",
      ],
    },
    {
      role: "Software Developer Internship",
      company: "Telkom Indonesia",
      period: "June 2025 – September 2025",
      points: [
        "Built an automated scheduling system for 30+ multi-shift agents using Google OR-Tools, eliminating manual planning.",
        "Developed a web application using Node.js to digitalize agent scheduling requests.",
        "Built the supporting API and containerized the application using Docker for streamlined deployment to cloud VPS.",
      ],
    },
    {
      role: "Teaching Assistant",
      company: "Telkom University",
      period: "Jan 2024 – Jan 2025",
      points: [
        "Calculus (Jan 24 - Sep 24): Guided 40+ students in understanding programming concepts and problem-solving.",
        "Algorithm & Programming (Oct 24 - Jan 25): Assisted in teaching 80+ students fundamental calculus concepts.",
      ],
    },
  ];

  const projects = [
    {
      title: "PerahuAI",
      slug: "perahu-ai",
      tech: "IndoBERT, Docker, OCR, NLP",
      desc: "Multimodal detection system that identifies hoaxes/misinformation from URLs, Text, and Images. Includes URL analysis for typosquatting and Deepfake detection features.",
    },
    {
      title: "Scheduling Webapp",
      slug: "scheduling-webapp",
      tech: "Google OR-Tools, Node.js, Docker",
      desc: "Automated scheduling system for 30+ agents using optimization engines to replace manual planning. Handles complex shift patterns and agent availability.",
    },
    {
      title: "Klungkung Tourism Chatbot",
      slug: "klungkung-chatbot",
      tech: "RAG, LangChain, ChromaDB",
      desc: "Chatbot providing information about accommodations in Bali using Retrieval-Augmented Generation (RAG) with Multi Vector Retriever for high accuracy.",
    },
  ];

  const organizations = [
    {
      role: "Head of Mentor Community",
      org: "Informatics Student Association",
      period: "Apr 2024 – Dec 2025",
      points: [
        "Led 'IFTAR' program supervising 72 study groups connecting student tutors with peers in need of academic support.",
        "Optimized organizational workflow by developing and implementing new Standard Operating Procedures (SOPs) for administrative tasks, effectively eliminating job overlaps and improving team coordination.",
        "Scaled the 'ResponsiF' (intensive exam preparation) program by 150% by establishing cross-functional collaborations with campus laboratories and student organizations, increasing frequency to 3 sessions per period with an average of 3 subjects per session.",
        "Resolved long-standing recruitment and budget challenges by renegotiating tutor honorariums and implementing a mandatory service scheme, ensuring program sustainability and cost-efficiency.",
      ],
    },
    {
      role: "Assistant Laboratory",
      org: "Computing Laboratory",
      period: "Oct 2024 – Dec 2025",
      points: [
        "Mentored 50+ students in Machine Learning and Data Structures, delivering technical materials and guiding practical lab sessions.",
        "Collaborated in curriculum development for ML and DSA courses, designing comprehensive modules and hands-on assignments.",
      ],
    },
    {
      role: "Event Division Member",
      org: "Badan Mentoring",
      period: "Dec 2024 – Jun 2025",
      points: [
        "Project Managed multiple large-scale seminars for 150+ participants, overseeing the entire event lifecycle.",
        "Coordinated cross-functional teams and speakers to deliver impactful educational content.",
      ],
    },
  ];

  const skills = {
    "Web Development": [
      "Flask",
      "FastAPI",
      "Node.js",
      "Laravel",
      "RESTful API",
    ],
    "Data & AI": [
      "Machine Learning",
      "Deep Learning",
      "LLM",
      "RAG",
      "TensorFlow",
      "Pandas",
      "PostgreSQL",
      "ChromaDB",
    ],
    "DevOps & Tools": ["Docker", "Git", "GitHub Actions", "CI/CD"],
    "Soft Skills": [
      "Leadership",
      "Communication",
      "Problem Solving",
      "English (B2 CEFR)",
    ],
  };

  // --- LOGIC CAROUSEL ---
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <main className="min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-neutral-800/40 via-neutral-950 to-neutral-950 text-neutral-300 font-sans selection:bg-white selection:text-black">
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/70 backdrop-blur-md border-b border-neutral-800/50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#about"
            className="text-xl font-bold text-white tracking-tight"
          >
            MK<span className="text-neutral-500">.</span>
          </a>

          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-neutral-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-neutral-950 border-b border-neutral-800 absolute w-full px-6 py-4 space-y-4 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-sm font-medium text-neutral-400 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
      {/* 1. HERO SECTION (UPDATED: Spacing Tightened) */}
      <section
        id="about"
        className="max-w-4xl mx-auto px-6 pt-28 pb-4 relative" // pt-28 (cukup untuk navbar) pb-4 (rapat ke bawah)
      >
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-medium text-red-500">
            Hi, I&apos;m
          </h2>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            {personalInfo.name}
          </h1>

          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl leading-relaxed mt-4">
            {personalInfo.description}
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-neutral-500 py-6">
            {/* EMAIL */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <div className="p-2 bg-neutral-900 rounded-full border border-neutral-800">
                <Mail size={18} className="text-white" />
              </div>
              {personalInfo.email}
            </a>

            {/* PHONE (WHATSAPP LINK) */}
            <a
              href={personalInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <div className="p-2 bg-neutral-900 rounded-full border border-neutral-800">
                <Phone size={18} className="text-white" />
              </div>
              {personalInfo.phone}
            </a>

            {/* LINKEDIN */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <div className="p-2 bg-neutral-900 rounded-full border border-neutral-800">
                <Linkedin size={18} className="text-white" />
              </div>
              LinkedIn
            </a>
          </div>

          <div className="pt-2">
            {/* TOMBOL DOWNLOAD PDF (Sudah di-link ke file public) */}
            <a
              href={`${basePath}/portofolio-khoirul/public/CV_Mochammad Khoirullutfansyah_New.pdf`}
              download="CV_Mochammad_Khoirullutfansyah.pdf"
              className="flex items-center gap-2 bg-white text-neutral-950 px-8 py-3 rounded-full hover:bg-neutral-200 transition-all font-medium text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] w-fit"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
      </section>
      <hr className="border-neutral-900 my-4" />{" "}
      {/* my-4 agar garis tidak terlalu jauh */}
      {/* 2. PENGALAMAN (EXPERIENCE) (UPDATED: Spacing Tightened) */}
      <section
        id="experience"
        className="max-w-4xl mx-auto px-6 py-10 scroll-mt-20" // py-10 agar rapat
      >
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
          <span className="w-1.5 h-8 bg-neutral-200 rounded-sm shadow-[0_0_10px_rgba(255,255,255,0.5)]"></span>{" "}
          Work Experience
        </h3>
        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative border-l-2 border-neutral-800 pl-8 ml-2"
            >
              <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-neutral-500 border-4 border-neutral-950 shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                    {exp.role}
                  </h4>
                  <span className="text-neutral-500 font-medium italic">
                    {exp.company}
                  </span>
                </div>
                <span className="text-sm text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-md mt-3 md:mt-0 w-fit">
                  {exp.period}
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 mt-4 space-y-2 text-neutral-400 marker:text-neutral-600">
                {exp.points.map((pt, i) => (
                  <li key={i} className="leading-relaxed">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      {/* 3. PROYEK (CAROUSEL) (UPDATED: Spacing Tightened) */}
      <section
        id="projects"
        className="bg-neutral-900/20 py-12 border-y border-neutral-900 scroll-mt-10" // py-12
      >
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-10 text-center text-white">
            Featured Projects
          </h3>

          <div className="relative bg-neutral-950 p-8 md:p-14 rounded-3xl shadow-2xl shadow-black border border-neutral-800">
            {/* Navigasi Kiri */}
            <button
              onClick={prevProject}
              className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 bg-neutral-900 p-3 rounded-full border border-neutral-800 text-neutral-400 hover:bg-white hover:text-black transition-all z-10"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="text-center space-y-6">
              <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase bg-neutral-900 px-4 py-1.5 rounded-full border border-neutral-800">
                Project {currentProject + 1} / {projects.length}
              </span>

              <h4 className="text-3xl md:text-4xl font-bold text-white mt-2">
                {projects[currentProject].title}
              </h4>

              <p className="text-sm font-mono text-neutral-500 tracking-tight">
                {projects[currentProject].tech}
              </p>

              <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto">
                {projects[currentProject].desc}
              </p>

              {/* SINGLE LINK BUTTON: VIEW PROJECT */}
              <div className="flex justify-center pt-6">
                <Link
                  href={`/projects/${projects[currentProject].slug}`}
                  className="flex items-center gap-2 px-6 py-3 bg-white text-neutral-950 rounded-full font-medium hover:bg-neutral-200 transition-all group"
                >
                  View Project Details
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>

            {/* Navigasi Kanan */}
            <button
              onClick={nextProject}
              className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 bg-neutral-900 p-3 rounded-full border border-neutral-800 text-neutral-400 hover:bg-white hover:text-black transition-all z-10"
            >
              <ChevronRight size={24} />
            </button>

            <div className="flex justify-center gap-3 mt-12">
              {projects.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentProject ? "w-8 bg-white" : "w-2 bg-neutral-800"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 4. EDUCATION (UPDATED: Spacing Tightened) */}
      <section
        id="education"
        className="max-w-4xl mx-auto px-6 py-12 scroll-mt-20" // py-12
      >
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
          <span className="w-1.5 h-8 bg-neutral-200 rounded-sm shadow-[0_0_10px_rgba(255,255,255,0.5)]"></span>{" "}
          Education
        </h3>
        <div className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors">
          <div className="flex flex-col md:flex-row justify-between md:items-start mb-4">
            <h4 className="font-bold text-xl text-white mb-2 md:mb-0">
              {education.university}
            </h4>
            <span className="text-sm text-neutral-300 bg-neutral-800 border border-neutral-700 px-3 py-1 rounded w-fit">
              {education.period}
            </span>
          </div>
          <p className="text-neutral-300 font-medium text-lg">
            {education.degree}
          </p>
          <p className="text-white font-bold text-sm mt-2 mb-4">
            {education.gpa}
          </p>
          <p className="text-sm text-neutral-400 leading-relaxed border-t border-neutral-800 pt-4 mt-4">
            {education.courses}
          </p>
        </div>
      </section>
      {/* 5. ORGANISASI (UPDATED: Spacing Tightened) */}
      <section
        id="organizations"
        className="max-w-4xl mx-auto px-6 py-12 scroll-mt-20" // py-12
      >
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
          <span className="w-1.5 h-8 bg-neutral-200 rounded-sm"></span>{" "}
          Organizations
        </h3>
        <div className="flex flex-col gap-6">
          {organizations.map((org, idx) => (
            <div
              key={idx}
              className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 hover:border-neutral-600 transition-all group hover:bg-neutral-900"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="font-bold text-lg text-white group-hover:text-white transition-colors">
                    {org.role}
                  </h4>
                  <p className="text-sm font-semibold text-neutral-500">
                    {org.org}
                  </p>
                </div>
                <span className="text-xs text-neutral-400 bg-neutral-800 px-3 py-1 rounded-full border border-neutral-700 mt-2 md:mt-0 w-fit">
                  {org.period}
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-neutral-400">
                {org.points.map((point, i) => (
                  <li key={i} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      {/* 6. SKILLS (UPDATED: Spacing Tightened) */}
      <section
        id="skills"
        className="max-w-4xl mx-auto px-6 py-12 mb-12 scroll-mt-20" // py-12
      >
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
          <span className="w-1.5 h-8 bg-neutral-200 rounded-sm"></span>{" "}
          Technical Skills
        </h3>
        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-bold text-neutral-200 mb-4 text-lg border-b border-neutral-800 pb-2 inline-block">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-400 text-sm rounded-lg hover:border-neutral-500 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* FOOTER */}
      <footer className="bg-black text-neutral-600 py-12 text-center text-sm border-t border-neutral-900">
        <p>
          © {new Date().getFullYear()} Mochammad Khoirullutfansyah. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}
