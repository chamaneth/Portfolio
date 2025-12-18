"use client";

import NavSearch from "../components/NavSearch";
import { FaEnvelope, FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
import Footer from "../components/Footer";

export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col">
      {/* Navbar */}
      <NavSearch />

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 mt-28 gap-6">
        <h1 className="text-5xl sm:text-6xl font-bold text-blue-400 text-center">
          Connect with Me
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 text-center max-w-3xl">
          I’m always open to chat, collaborate, or share ideas. Reach out through any of the platforms below.
        </p>

        {/* Social Links */}
        <div className="flex gap-8 mt-8 text-4xl sm:text-5xl text-slate-200">
          <a
            href="mailto:nethmi.singhe@gmail.com"
            className="hover:text-blue-400 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://www.linkedin.com/in/chamathka-nethmini-wije/"
            target="_blank"
            className="hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/chamaneth"
            target="_blank"
            className="hover:text-blue-400 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://medium.com/@chamathka"
            target="_blank"
            className="hover:text-blue-400 transition"
            aria-label="Medium"
          >
            <FaMedium />
          </a>
        </div>

        <p className="mt-6 text-slate-400 text-sm sm:text-base text-center max-w-md">
          Or just type in the search bar above — this is my personal “Google” portfolio 😉
        </p>
      </div>
      <Footer />
    </div>
    
  );
  
}
