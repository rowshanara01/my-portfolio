import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Award, 
  GraduationCap, 
  FileText,
  Database,
  Globe, 
  Layers, 
  Code2, 
  Server, 
  Sparkles,
  ShieldCheck,
  Cpu,
  Boxes,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceSkillsSection: React.FC = () => {
  const [expandedExp, setExpandedExp] = useState<Record<string, boolean>>({
    'exp-1': true,
    'exp-2': false,
    'exp-3': false
  });

  const toggleExp = (id: string) => {
    setExpandedExp((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Core Stack skills with icons matching user screenshot
  const coreStackSkills = [
    { name: "MongoDB", icon: "🍃" },
    { name: "Express.js", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Next.js", icon: "▲" },
    { name: "Better-auth", icon: "🛡️" },
    { name: "JWT", icon: "🔑" },
    { name: "shadcn/ui", icon: "❖" },
    { name: "Framer Motion", icon: "✦" },
    { name: "Figma", icon: "🎨" },
    { name: "JavaScript", icon: "JS" },
    { name: "HTML5", icon: "5" },
    { name: "CSS3", icon: "3" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "Bootstrap", icon: "B" },
    { name: "Prisma", icon: "◬" },
    { name: "PostgreSQL", icon: "🐘", highlighted: true },
    { name: "TypeScript", icon: "TS" },
    { name: "Redis", icon: "⚡" },
    { name: "Docker", icon: "🐳" },
  ];

  // AI & Modern Stack
  const aiSkills = [
    { name: "OpenAI API", icon: "🤖" },
    { name: "Claude API", icon: "🧠" },
    { name: "AI Agents", icon: "⚙️" },
    { name: "RAG Pipelines", icon: "📚" },
    { name: "Vector Search", icon: "🔍" },
    { name: "Prompt Engineering", icon: "💬" }
  ];

  // CMS
  const cmsSkills = [
    { name: "WordPress", icon: "W" },
    { name: "XenForo", icon: "xf" },
    { name: "Shopify", icon: "🛍️" },
    { name: "Laravel (PHP)", icon: "🔴" }
  ];

  // Certifications & Education
  const certifications = [
    {
      title: "Government Approved Freelancer (Bangladesh)",
      subtitle: "Official ICT Division Accreditation",
      icon: FileText
    },
    {
      title: "SOLVIO AI Hackathon 2025 — Top 50 / 900+ Teams",
      subtitle: "Global AI Agent & RAG Pipeline Finalist",
      icon: Award
    },
    {
      title: "Bachelor of Arts in Philosophy",
      subtitle: "National University, Bangladesh",
      icon: GraduationCap
    }
  ];

  return (
    <section id="experience" className="max-w-7xl mx-auto px-3 sm:px-4 py-5 scroll-mt-24 animate-entrance">
      {/* 50/50 Balanced Grid Layout matching user screenshot */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
        
        {/* Left Column: Experience Card */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
          <div>
            {/* Header: • Experience -------------------- */}
            <div className="flex items-center gap-3 mb-7">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-900 dark:bg-emerald-400"></span>
                Experience
              </span>
              <div className="flex-1 border-b border-dashed border-slate-200 dark:border-zinc-800"></div>
            </div>

            {/* Experience Items */}
            <div className="space-y-6">
              {PORTFOLIO_DATA.experiences.map((exp, index) => {
                const isExpanded = !!expandedExp[exp.id];
                return (
                  <div 
                    key={exp.id} 
                    className={`relative ${
                      index !== PORTFOLIO_DATA.experiences.length - 1 ? 'pb-6 border-b border-slate-100 dark:border-zinc-800' : ''
                    }`}
                  >
                    {/* Role Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>

                    {/* Meta Pills with Shadows matching screenshot */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 border border-slate-200/60 dark:border-zinc-700/60 shadow-xs">
                        {exp.company}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 border border-slate-200/60 dark:border-zinc-700/60 shadow-xs">
                        {exp.type}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium text-slate-500 dark:text-zinc-400 bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/40 dark:border-zinc-800 shadow-xs">
                        📍 {exp.location}
                      </span>
                    </div>

                    {/* Period */}
                    <div className="text-xs font-medium text-slate-500 dark:text-zinc-400 mb-2.5 tracking-wide">
                      {exp.period}
                    </div>

                    {/* Summary Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-3">
                      {exp.summary}
                    </p>

                    {/* Expandable Accordion Details */}
                    {isExpanded && (
                      <div className="mt-3 pt-3 border-t border-slate-100 dark:border-zinc-800 space-y-2 animate-in fade-in duration-200">
                        {exp.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                            <span className="text-emerald-500 mt-1 shrink-0">•</span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Toggle Button */}
                    <button
                      onClick={() => toggleExp(exp.id)}
                      className="mt-2 text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide details' : 'View full details'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Trust Badge */}
          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400">
            <span className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              Verified Full Stack & AI Experience
            </span>
            <span className="text-[11px] text-slate-400">Dhaka · Remote</span>
          </div>
        </div>

        {/* Right Column: Skills Card */}
        <div id="skills" className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between scroll-mt-24">
          <div>
            {/* Header: • Skills -------------------- */}
            <div className="flex items-center gap-3 mb-7">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-900 dark:bg-emerald-400"></span>
                Skills
              </span>
              <div className="flex-1 border-b border-dashed border-slate-200 dark:border-zinc-800"></div>
            </div>

            {/* CORE STACK */}
            <div className="mb-6">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-3">
                CORE STACK
              </div>
              <div className="flex flex-wrap gap-2">
                {coreStackSkills.map((s, idx) => (
                  <span
                    key={idx}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-xs hover:shadow-md cursor-default ${
                      s.highlighted
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                        : 'bg-white dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 border border-slate-200 dark:border-zinc-700 hover:border-emerald-400 dark:hover:border-emerald-500'
                    }`}
                  >
                    <span className="text-xs opacity-90">{s.icon}</span>
                    <span>{s.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* AI & LLM ENGINEERING */}
            <div className="mb-6">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-3">
                AI & LLM ENGINEERING
              </div>
              <div className="flex flex-wrap gap-2">
                {aiSkills.map((s, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80 shadow-xs hover:shadow-sm"
                  >
                    <span>{s.icon}</span>
                    <span>{s.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* CMS */}
            <div className="mb-6">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-3">
                CMS & PLATFORMS
              </div>
              <div className="flex flex-wrap gap-2">
                {cmsSkills.map((s, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 border border-slate-200 dark:border-zinc-700 shadow-xs hover:shadow-sm"
                  >
                    <span className="font-mono text-[10px] px-1 bg-slate-100 dark:bg-zinc-700 rounded-xs font-bold">{s.icon}</span>
                    <span>{s.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications matching user screenshot */}
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-3">
                Certifications & Achievements
              </div>
              <div className="space-y-2.5">
                {certifications.map((item, cIdx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={cIdx}
                      className="p-3.5 rounded-2xl border border-slate-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-800/80 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all shadow-xs hover:shadow-md flex items-center gap-3.5 group"
                    >
                      <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform shadow-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-zinc-400">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
