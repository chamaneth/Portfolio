"use client";

import { useState } from "react";
import NavSearch from "../components/NavSearch";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import logo from "../assets/chama.jpg";
import { metadata } from "../layout";

type Tab = "bio" | "education" | "volunteering";

export default function AboutMePage() {
  const [activeTab, setActiveTab] = useState<Tab>("bio");

  const fadeIn = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  /* BIO ENTRIES */
  const bioEntries = [
    {
      meta: "Personal · Technology",
      title: "Curiosity Drives Creation",
      body:
      "From building IoT projects with my brother to independently exploring programming languages, my curiosity has always driven my journey into technology. Growing up in a technically inclined environment sparked my early interest and continues to shape my passion for learning, experimentation, and innovation."
    },
    {
      meta: "Education · Self-paced Degree",
      title: "Independent Learning at University of Moratuwa",
      body: "Currently pursuing a self-paced, online Bachelor of IT, which gives me the flexibility to independently explore and master concepts in Data Engineering and Systems beyond traditional coursework. This learning format has strengthened my ability to self-learn, research deeply, and apply knowledge through hands-on projects."
    },
    {
       meta: "Multilingual . Lifelong Learning",
       title: "Curiosity Without Borders",
       body: "Intermediate in Japanese and currently learning Chinese, I love exploring languages and cultures. My curiosity extends to technology, where I tackle challenges hands-on and learn by doing."
    },
    {
      meta: "Mentorship · GitHub",
      title: "Guided Growth",
      body: "Selected for the GitHub Micro-Mentoring Program, where I worked one-on-one with an experienced mentor to enhance my skills and complete collaborative projects. This personalized guidance provided valuable insights into real-world development and allowed me to refine my approach through direct feedback and hands-on experience."
    },
    {
       meta: "Code in Place · Stanford University (CS106A)",
       title: "Learn Together",
       body: "Completed Stanford’s Code in Place (CS106A), learning Python fundamentals and building projects with a global cohort. Gained hands-on coding experience, collaborative problem-solving skills, and exposure to practical software development."
    },

    {
      meta: "Competitions · SyntaxSquad",
      title: "Award-Winning Team Projects",
      body:
        "As part of SyntaxSquad, Developed projects including Legacy of Kashyapa, multiple competitions—Gaming Hackathons, RoboRaze, SLIoT, and NASA Space Apps Challenge 2025—focusing on collaborative development, rapid prototyping, and problem-solving.",
    },
    {
      meta: "Philosophy",
      title: "Learning Through Doing",
      body:"I believe curiosity, consistency, and hands-on experimentation are the keys to mastering technology. By exploring boldly, learning from failures, and stepping outside comfort zones, we turn challenges into opportunities for growth and innovation."
    },
  ];

  /* EDUCATION ENTRIES */
  const educationEntries = [
    {
      meta: "Higher Education",
      title: "Bachelor of Information Technology",
      body:
        "University of Moratuwa · 2023 Sep – Present · Focus on Data Engineering & Systems",
    },
    {
      meta: "Secondary Education",
      title: "Advanced Level – Art Stream",
      body:
        "Vidyakara Balika National School, Maharagama · 2019 – 2023",
    },
    {
      meta: "Primary & Secondary Education",
      title: "Ordinary Level",
      body:
        "Kottawa Dharmapala Maha Vidyalaya, Kottawa · 2008 – 2019",
    },
  ];

  /* VOLUNTEERING ENTRIES */
  const volunteeringEntries = [
    {
      meta: "STEM Mentorship",
      title: "Mentor at CodeClub Sri Lanka",
      body:
        "Guided students in Python programming and algorithms, nurturing the next generation of coders.",
    },
    {
      meta: "STEM Outreach",
      title: "Volunteer at StemUp Foundation",
      body:
        "Organized STEM workshops and events to inspire young learners.",
    },
    {
      meta: "Community Tech",
      title: "Women Techmakers Volunteer",
      body:
        "Supported technology events emphasizing female participation in tech.",
    },
    {
      meta: "Global Impact",
      title: "UN Online Volunteer",
      body:
        "Contributed to online initiatives supporting global community development.",
    },
    {
      meta: "University Hackathons",
      title: "SyntaxCode Team Member",
      body:
        "Collaborated on innovative solutions in hackathons and coding competitions.",
    },
  ];

  const activeEntries =
    activeTab === "bio"
      ? bioEntries
      : activeTab === "education"
      ? educationEntries
      : volunteeringEntries;

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100">
      <NavSearch searchBarSmall />

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        {/* Tabs */}
        <div className="flex gap-6 border-b border-white/10 mb-6">
          {(["bio", "education", "volunteering"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-sm font-medium transition ${
                activeTab === tab
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab === "bio"
                ? "Bio"
                : tab === "education"
                ? "Education"
                : "Volunteering"}
            </button>
          ))}
        </div>

        {/* CONTENT GRID */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-12 items-start"
        >
          {/* MAIN CONTENT */}
          <div>
            <p className="text-xs text-slate-400 mb-4">
              About {activeEntries.length} entries (0.32 seconds)
            </p>

            <div className="space-y-6 text-sm sm:text-base text-slate-300">
              {activeEntries.map((item, i) => (
                <article
                  key={i}
                  className="pb-5 border-b border-white/10 last:border-none"
                >
                  <p className="text-xs text-slate-400 mb-1">{item.meta}</p>
                  <h3 className="text-blue-400 font-medium leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 leading-6">{item.body}</p>
                </article>
              ))}
            </div>
          </div>

          {/* why hire*/}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="max-w-[320px] mx-auto rounded-xl border border-white/10 bg-white/5 p-5 space-y-4">

                {/* Profile Image */}
                <Image
                  src={logo}
                  alt="Chamathka Nethmini"
                  width={160}
                  height={160}
                  className="rounded-full mx-auto mb-2"
                />

                {/* Name & Role */}
                <div className="text-center">
                  <h2 className="text-lg font-semibold text-white">
                    Chamathka Nethmini
                  </h2>
                  <p className="text-xs text-slate-400">
                    Aspiring Software Engineer · Data Engineering
                  </p>
                </div>

                {/* Why Hire Me / Interests / Volunteering */}
                <div className="text-sm text-slate-300 space-y-2">
                  <div>
                    <span className="text-slate-400 font-semibold">Why Hire Me:</span>{" "}
                    Creative problem solver, data-driven thinker, and passionate builder with hands-on experience.
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold">Interests:</span>{" "}
                    IoT, STEM, AI, Open Source, and Continuous Learning
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold">Volunteering:</span>{" "}
                    UN Volunteer, StemUp Foundation, Women Techmakers
                  </div>
                </div>

                {/* CV LINKS */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs uppercase tracking-wide text-slate-400 mb-2">
                    Download CV
                  </p>

                  <div className="space-y-1">
                    <a
                      href="/cv/Chamathka_Nethmini_SE_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-blue-400 hover:underline"
                    >
                      Software Engineer (SE)
                    </a>
                    <a
                      href="/cv/Chamathka_Nethmini_DE_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-blue-400 hover:underline"
                    >
                      Data Engineer (DE)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
