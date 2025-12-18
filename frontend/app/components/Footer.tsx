"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const date = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <footer className="border-t border-white/10 bg-[#0f172a] text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
        
        {/* Date & Time */}
        <div className="flex gap-3">
          <span>{date}</span>
          <span>•</span>
          <span>{time}</span>
        </div>

        {/* Location */}
        <span>Colombo, Sri Lanka</span>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto px-6 pb-3 text-center sm:text-left">
        © 2024 Chamathka Nethmini. All rights reserved.
      </div>
    </footer>
  );
}
