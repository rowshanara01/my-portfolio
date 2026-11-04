import React, { useState } from 'react';
import { X, Download, FileText, Check, Copy, Printer, ExternalLink, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const profile = PORTFOLIO_DATA.profile;

  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleCopyText = () => {
    const resumeText = `
Rowshanara Akhter
FULL STACK WEB DEVELOPER | AI AGENTS, RAG & LLM INTEGRATION | SaaS
Dhaka, Bangladesh | 01349817338 | 01779524129 | rowshanaraakhter9@gmail.com
Portfolio: rowshanara.dev | GitHub: rowshanaraakhter | LinkedIn: rowshanara-akhter-4a8042258

PROFESSIONAL SUMMARY
Full Stack Web Developer building modern web applications with React, Next.js, TypeScript, Node.js/Express, and Laravel (PHP). Hands-on experience integrating LLM APIs and developing chatbot and AI-powered features, including work with AI Agents and Retrieval-Augmented Generation (RAG) for approximately one year. Currently developing an AI chatbot product and a multi-tenant SaaS platform.

TECHNICAL SKILLS
- Frontend: React.js, Next.js (App Router), TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Zustand
- Backend & APIs: Node.js, Express.js, Laravel (PHP), REST API Design, API Integration, JWT & Session Authentication
- AI Engineering: LLM API Integration (OpenAI, Claude), AI Chatbot Development, AI Agents / Agentic AI, RAG Pipelines, Prompt Engineering
- SaaS Architecture: Multi-Tenant SaaS Development, Tenant-Aware Data Modeling, Authentication & Access Control
- Databases & Data: MongoDB, Mongoose, MySQL, Redis (Caching), Schema Design, Query Optimization, Aggregation Pipelines
- Payments & Security: Stripe, SSLCommerz, JWT authentication, HTTP-only cookies, SHA-256 webhook signature verification
- Education: Bachelor of Arts in Philosophy — National University, Bangladesh
- Achievements: Top 50 / 900+ teams — SOLVIO AI Hackathon 2025
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-zinc-900 rounded-3xl max-w-3xl w-full max-h-[90vh] shadow-2xl border border-slate-200 dark:border-zinc-800 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-5 sm:px-8 border-b border-slate-200 dark:border-zinc-800 flex items-center justify-between bg-slate-50/50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                Rowshanara Akhter — Curriculum Vitae
              </h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400">
                Updated AI Full Stack Developer CV
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct Download Button for the actual attached PDF */}
            <a
              href={profile.cvPdfPath}
              download="Rowshanara_Akhter_AI_Full_Stack_CV_Updated.pdf"
              onClick={handleDownload}
              className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handleCopyText}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-zinc-800 text-slate-600 dark:text-zinc-300 transition-colors"
              title="Copy Resume Text"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-zinc-800 text-slate-600 dark:text-zinc-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Viewer */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-sans">
          
          {/* Top CV Header */}
          <div className="border-b border-slate-200 dark:border-zinc-800 pb-5">
            <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Rowshanara Akhter
            </h1>
            <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mt-1">
              FULL STACK WEB DEVELOPER | AI AGENTS, RAG & LLM INTEGRATION | SaaS
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-zinc-400 mt-2">
              <span>Dhaka, Bangladesh</span>
              <span>·</span>
              <span>01349817338 / 01779524129</span>
              <span>·</span>
              <a href="mailto:rowshanaraakhter9@gmail.com" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                rowshanaraakhter9@gmail.com
              </a>
              <span>·</span>
              <a href="https://github.com/rowshanaraakhter" target="_blank" rel="noreferrer" className="hover:underline">
                GitHub: rowshanaraakhter
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
              Professional Summary
            </h2>
            <p className="text-slate-600 dark:text-zinc-300">
              Full Stack Web Developer building modern web applications with React, Next.js, TypeScript, Node.js/Express, and Laravel (PHP). Hands-on experience integrating LLM APIs and developing chatbot and AI-powered features, including work with AI Agents and Retrieval-Augmented Generation (RAG) for approximately one year. Currently developing an AI chatbot product and a multi-tenant SaaS platform. Experienced in REST API development, database design and optimization, authentication, third-party payment integrations, real-time features, deployment, and production bug fixing/problem solving. Built and deployed multiple full-stack projects from frontend architecture through backend APIs and post-launch maintenance.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 dark:bg-zinc-800/50 p-4 rounded-2xl border border-slate-200/80 dark:border-zinc-800">
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">Frontend:</span> React.js, Next.js (App Router), TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Zustand
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">Backend & APIs:</span> Node.js, Express.js, Laravel (PHP), REST API Design, API Integration, JWT & Session Authentication, Middleware Architecture
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">AI Engineering:</span> LLM API Integration (OpenAI, Claude), AI Chatbot Development, AI Agents / Agentic AI, RAG Pipelines, Prompt Engineering, AI matching & recommendations
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">SaaS Architecture:</span> Multi-Tenant SaaS Development, Tenant-Aware Data Modeling, Authentication & Access Control
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">Databases & Data:</span> MongoDB, Mongoose, MySQL, Redis (Caching), Schema Design, Query Optimization, Aggregation Pipelines
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white">Payments & Security:</span> Stripe, SSLCommerz, JWT authentication, HTTP-only cookies, SHA-256 webhook signature verification
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5">
              Work Experience
            </h2>
            <div className="space-y-3">
              <div className="border-l-2 border-emerald-500 pl-3">
                <div className="font-bold text-slate-900 dark:text-white">
                  Full Stack Web Developer — Freelance / Remote
                </div>
                <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  Dhaka, Bangladesh | 2024–Present
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600 dark:text-zinc-400 text-xs">
                  <li>Build and maintain full-stack web applications using React, Next.js, TypeScript, Node.js/Express, and Laravel.</li>
                  <li>Currently developing an AI chatbot product and a multi-tenant SaaS platform.</li>
                  <li>Integrate LLM APIs and AI-powered chatbot, job-matching, and recommendation features; work with AI Agents and RAG concepts/pipelines.</li>
                  <li>Troubleshoot application issues, identify bugs, implement fixes, and improve reliability and performance.</li>
                  <li>Design and optimize REST APIs, data models, authentication flows, and database queries; support deployment and post-launch maintenance.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5">
              Selected Projects
            </h2>
            <div className="space-y-3">
              <div>
                <div className="font-bold text-slate-900 dark:text-white">AI Chatbot Product — LLM APIs, AI Agents, RAG (In Progress)</div>
                <p className="text-slate-600 dark:text-zinc-400 text-xs">Developing an AI-powered chatbot product using LLM APIs, with AI Agent and Retrieval-Augmented Generation (RAG) approaches.</p>
              </div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white">Multi-Tenant SaaS Platform — Full Stack (In Progress)</div>
                <p className="text-slate-600 dark:text-zinc-400 text-xs">Building a multi-tenant SaaS product where multiple organizations share one application with their own separate data and access.</p>
              </div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white">E-Commerce Platform — Next.js, Node.js/Express, MongoDB</div>
                <p className="text-slate-600 dark:text-zinc-400 text-xs">Built a full-stack e-commerce application with secure JWT authentication using HTTP-only cookies and Zustand-powered cart state. Optimized Mongoose aggregation to reduce N+1 queries. Integrated Stripe and SSLCommerz.</p>
              </div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white">Real-Time Delivery Tracker — Next.js, Node.js, Socket.io</div>
                <p className="text-slate-600 dark:text-zinc-400 text-xs">Developed real-time courier tracking with heartbeat, reconnection, and delta coordinate broadcasting throttled at 250ms interval.</p>
              </div>
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-1.5">
                Education
              </h2>
              <div className="font-bold text-slate-900 dark:text-white">Bachelor of Arts in Philosophy</div>
              <div className="text-xs text-slate-500">National University, Bangladesh</div>
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-1.5">
                Achievements & Languages
              </h2>
              <div className="text-xs text-slate-700 dark:text-zinc-300">
                <span className="font-bold">Top 50 / 900+ teams</span> — SOLVIO AI Hackathon 2025
              </div>
              <div className="text-xs text-slate-500 mt-1">
                Bengali — Native | English — Professional working proficiency
              </div>
            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className="p-4 px-8 bg-slate-50/80 dark:bg-zinc-850 border-t border-slate-200 dark:border-zinc-800 flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400">
          <span>Official CV Document</span>
          <a
            href={profile.cvPdfPath}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            <span>Open raw PDF file</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
