"use client";

import { useEffect, useState } from "react";
import NavSearch from "../components/NavSearch";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FaPython, FaReact, FaGit, FaDocker, FaDatabase, FaJava, FaPhp, FaChartBar } from "react-icons/fa";
import { SiTableau, SiNextdotjs, SiTailwindcss, SiTypescript, SiHuggingface, SiOpencv, SiJavascript,SiCircleci } from "react-icons/si";

type Tab = "Projects" | "Skills" | "Certificates";
type Filter = "all" | "SE" | "DE";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

/* TECHNICAL SKILLS */
const TECHNICAL_SKILLS = {
  "Frontend & Web": [
    { name: "Next.js", icon: <SiNextdotjs className="inline ml-1 text-blue-500" /> },
    { name: "React", icon: <FaReact className="inline ml-1 text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="inline ml-1 text-teal-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="inline ml-1 text-blue-600" /> },
  ],
  "Backend & Database": [
    { name: "Python", icon: <FaPython className="inline ml-1 text-blue-400" /> },
    { name: "SQL", icon: <FaDatabase className="inline ml-1 text-green-400" /> },
    { name: "Java", icon: <FaJava className="inline ml-1 text-red-500" /> },
    { name: "PHP", icon: <FaPhp className="inline ml-1 text-purple-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="inline ml-1 text-yellow-400" /> },
  ],
  "DevOps & CI/CD": [
    { name: "Git", icon: <FaGit className="inline ml-1 text-orange-400" /> },
    { name: "Docker", icon: <FaDocker className="inline ml-1 text-blue-500" /> },
    { name: "CI/CD", icon: <SiCircleci className="inline ml-1 text-purple-400" /> }, 
  ],
  "Data & Analytics": [
    { name: "Python", icon: <FaPython className="inline ml-1 text-blue-400" /> },
    { name: "Pandas" },
    { name: "Matplotlib" },
    { name: "SQLite" },
    { name: "BigQuery", icon: <FaDatabase className="inline ml-1 text-blue-500" /> },
    { name: "Power BI", icon: <FaChartBar className="inline ml-1 text-yellow-400" /> },
    { name: "Tableau", icon: <SiTableau className="inline ml-1 text-orange-500" /> },
    { name: "Hugging Face", icon: <SiHuggingface className="inline ml-1 text-yellow-400" /> },
    { name: "OpenCV", icon: <SiOpencv className="inline ml-1 text-gray-300" /> },
    { name: "ETL" },
    { name: "Data Engineering" },
  ],
};


/* CERTIFICATES */
const CERTIFICATES = [
  { name: "Career Essentials in GitHub Professional Certificate", link: "https://www.linkedin.com/learning/certificates/345d177149045bf504e747104bfa3de523f7d19b4cf2344ced5f281ba453b0d4" },
  { name: "Docker Foundations Professional Certificate", link: "https://www.linkedin.com/learning/certificates/0be58a81264ae95940460913e24282a35ef9be79a1614f5262b1efbbb7e0b1bd" },
  { name: "Career Essentials in Software Development by Microsoft and LinkedIn", link: "https://www.linkedin.com/learning/certificates/82b5d22d1c34486281bd1dc4612aa30d195d1de613dceed8a8b13972e704241a" },
  { name: "AWS Educate Machine Learning Foundations", link: "https://www.credly.com/badges/ac1b3045-0ac2-4826-bc10-f19936a404f7/public_url" },
  { name: "Flask Essentials Training", link: "https://www.linkedin.com/learning/certificates/6e22cfbf3d17262969f942b41c7c9e0d917ec3bb3b47fde6d3e1ee173d697cbf" },
  { name: "Career Essentials in Generative AI by Microsoft and LinkedIn", link: "https://www.linkedin.com/learning/certificates/44818cc4f7bce0bf29c46d45dea2916c9ac5e4598c60413bb05521847d57cf52" },
  { name: "Building and Deploying Deep Learning Applications with TensorFlow", link: "https://www.linkedin.com/learning/certificates/33399887949d8e4bf4c99675a143fbe3dfd38841ef0ed437e503f4f5e1f1fb35" },
];

type Project = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language?: string;
  category?: "SE" | "DE";
};

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Projects");
  const [filter, setFilter] = useState<Filter>("all");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (activeTab === "Projects") {
      async function fetchProjects() {
        const res = await fetch("/api/github");
        const data = await res.json();
        const categorized = data.map((p: any) => ({ ...p, category: p.category || "SE" }));
        setProjects(categorized);
        setLoading(false);
      }
      fetchProjects();
    }
  }, [activeTab]);

  const filteredProjects = projects.filter(p => filter === "all" ? true : p.category === filter);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100">
      <NavSearch searchBarSmall />

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        {/* Tabs */}
        <div className="flex gap-6 border-b border-white/10 mb-4">
          {(["Projects", "Skills", "Certificates"] as Tab[]).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-medium transition ${
                activeTab === tab
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-12"
        >
          {/* MAIN CONTENT */}
          <div>
            {activeTab === "Projects" && (
              <>
                {/* Filters */}
                <div className="flex gap-6 border-b border-white/10 mb-4 text-sm">
                  {(["all", "SE", "DE"] as Filter[]).map(f => (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`pb-3 transition ${
                        filter === f ? "text-blue-400 border-b-2 border-blue-400" : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {f === "all" ? "All" : f === "SE" ? "Software Engineering" : "Data Engineering"}
                    </button>
                  ))}
                </div>

                {/* Result count */}
                <p className="text-xs text-slate-400 mb-4">
                  About {filteredProjects.length} result{filteredProjects.length !== 1 ? "s" : ""} (0.21 seconds)
                </p>

                {/* Project results */}
                {loading ? (
                  <p className="text-slate-400">Loading projects…</p>
                ) : filteredProjects.length === 0 ? (
                  <p className="text-slate-400">No projects found.</p>
                ) : (
                  <motion.div className="space-y-7">
                    {filteredProjects.map(project => (
                      <article key={project.id} className="pb-3 border-b border-white/10 last:border-none">
                        <p className="text-xs text-slate-400 mb-1">
                          GitHub · {project.category === "DE" ? "Data Engineering" : "Software Engineering"}{project.language ? ` · ${project.language}` : ""}
                        </p>
                        <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-medium text-lg leading-snug hover:underline">
                          {project.name}
                        </a>
                        <p className="mt-1 text-slate-300 leading-6 max-w-3xl">{project.description || "No description provided."}</p>
                      </article>
                    ))}
                  </motion.div>
                )}
              </>
            )}

            {activeTab === "Skills" && (
              <div className="space-y-8">
                {Object.entries(TECHNICAL_SKILLS).map(([category, skills]) => (
                  <div key={category}>
                    <h2 className="text-xl font-semibold mb-4">{category}</h2>
                    <div className="flex flex-wrap gap-3">
                      {skills.map(skill => (
                        <div key={skill.name} className="w-36 p-2 bg-white/10 rounded-xl hover:bg-white/20 transition cursor-pointer flex items-center justify-between">
                          <span>{skill.name}</span>
                          {skill.icon && <span>{skill.icon}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "Certificates" && (
              <div className="flex flex-wrap gap-4">
                {CERTIFICATES.map(cert => (
                  <a key={cert.name} href={cert.link} target="_blank" rel="noopener noreferrer" className="group w-55 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition cursor-pointer flex flex-col justify-between">
                    <span className="font-medium text-slate-50">{cert.name}</span>
                    <span className="text-xs text-slate-400 mt-1">View Credential</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
