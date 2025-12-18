"use client";

import Navbar from "./components/Navbar";
import { useState } from "react";
import Link from "next/link";
import Footer from "./components/Footer";

const KEYWORDS = [
  { label: "About Me", value: "AboutMe", description: "Learn more about me" },
  { label: "Projects", value: "Projects", description: "View my work" },
];


export default function Home() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col">
      <Navbar />

      {/* HERO */}
      <div className="flex flex-col items-center justify-center flex-1 px-4">
        <div className="w-full max-w-3xl text-center space-y-6">
          {/* Name */}
          <h1 className="text-5xl md:text-[56px] font-bold">
            Chamathka Nethmini
          </h1>

          {/* Role */}
          <p className="text-base md:text-m text-slate-400">
            Software Engineer / Data Engineer
          </p>

          {/* SEARCH */}
          <div className="relative w-full mt-6">
            <input
              placeholder="Search"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setTimeout(() => setSearchFocused(false), 150)}
              className="
                w-full
                h-11 md:h-12
                rounded-full
                bg-[#1e2b4d]
                px-5
                text-sm md:text-base
                outline-none
                focus:ring-2 focus:ring-blue-500
              "
            />

            {searchFocused && (
              <div
                className="
                  absolute top-full left-0 mt-2
                  w-full
                  rounded-lg
                  bg-[#1e2b4d]
                  shadow-xl
                  z-50
                  overflow-hidden
                "
              >
                {KEYWORDS.map((k) => (
                  <Link
                    key={k.value}
                    href={`/${k.value}`}
                    onMouseDown={(e) => e.preventDefault()}
                    className="
                      block
                      px-4 py-2
                      hover:bg-[#25355e]
                      transition
                    "
                  >
                    <p className="text-sm font-medium leading-tight text-left">
                      {k.label}
                    </p>
                    <p className="text-xs text-slate-400 leading-tight text-left">
                      {k.description}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* text */}
          <p className="text-sm text-slate-400 mt-4">
            Click the search bar above to explore.
          </p>
        </div>
      </div>
         {/* Footer */}
      <Footer />
    </div>
  );
  
}
