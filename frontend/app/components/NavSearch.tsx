"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const KEYWORDS = [
  { label: "About Me", value: "AboutMe", description: "Learn more about me" },
  { label: "Projects", value: "Projects", description: "View my work" },
  
  
];

export interface NavbarProps {
  searchBarSmall?: boolean;
}

export default function NavSearch({ searchBarSmall = false }: NavbarProps) {
  const [focused, setFocused] = useState(false);

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

      {/* Search */}
      <div className="relative w-full md:flex-1 md:mx-6">
        <input
          placeholder="Search pages…"
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          className={`
            w-full
            ${searchBarSmall ? "h-7" : "h-8"}
            rounded-full
            bg-[#1e2b4d]
            px-4
            text-sm
            leading-none
            cursor-pointer
            outline-none
            text-slate-200
            focus:ring-2 focus:ring-blue-500
            transition
          `}
        />

        {/* Dropdown */}
        {focused && (
          <div className="absolute top-full left-0 mt-2 w-full rounded-lg bg-[#1e2b4d] shadow-xl z-50 overflow-hidden text-left">
            {KEYWORDS.map((k) => (
              <Link
                key={k.value}
                href={`/${k.value}`}
                onMouseDown={(e) => e.preventDefault()} 
                className="block px-2 py-1 hover:bg-[#25355e] transition"
              >
                <p className="text-sm font-medium leading-tight">{k.label}</p>
                <p className="text-xs text-slate-400 leading-tight">{k.description}</p>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Icons + Button */}
      <div className="flex items-center justify-end gap-3 w-full md:w-auto">
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
