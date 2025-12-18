"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b1b38]/80 backdrop-blur-md px-6 py-2 flex items-center justify-between">
      {/* Brand */}
      <div
        className="text-2xl font-bold text-slate-100 shrink-0"
        style={{ fontFamily: "var(--font-caveat)" }}
      >
        <Link href="/" className="text-white ">
          Chamathka
        </Link>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 text-lg text-slate-200 shrink-0">
        <a href="mailto:nethmi.singhe@gmail.com" className="hover:text-blue-400 transition" aria-label="Email">
          <FaEnvelope />
        </a>

        <a href="https://github.com/chamaneth" target="_blank" className="hover:text-blue-400 transition">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/chamathka-nethmini-wije/" target="_blank" className="hover:text-blue-400 transition">
          <FaLinkedin />
        </a>

        <Link
          href="/Connect"
          className="ml-1 px-3 py-1.5 rounded-full border border-white/20 text-xs text-slate-200 hover:bg-white/10 hover:border-white/40 transition"
        >
          Connect
        </Link>
      </div>
    </nav>
  );
}
