import React, { useState, useEffect } from 'react';
import { 
  FileDown, 
  Send, 
  Play, 
  Check, 
  Star, 
  ArrowRight, 
  Terminal,
  ExternalLink,
  Sparkles,
  Layers,
  Cpu
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onOpenVideo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenResume,
  onOpenContact,
  onOpenVideo
}) => {
  const { profile } = PORTFOLIO_DATA;

  // Animated dynamic role switcher (Typewriter / cycling effect)
  const dynamicRoles = [
    "AI Chatbot & Agentic AI Specialist",
    "System Design & Scalable Architecture",
    "Full Stack Web Developer",
    "Multi-Tenant SaaS Architect",
    "LLM APIs, RAG & Vector Intelligence"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = dynamicRoles[currentRoleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === fullText) {
      // Pause at end of word
      const pauseTimeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pauseTimeout);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % dynamicRoles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => 
        isDeleting 
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  const clientAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-3 sm:px-4 pt-6 pb-5 scroll-mt-24 animate-entrance">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Card: Primary Hero Presentation */}
        <div className="lg:col-span-7 bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden flex flex-col justify-between">
          {/* Subtle green ambient glow background in corner */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="relative z-10">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/60 mb-5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>AI Chatbots, System Design & Multi-Tenant SaaS</span>
            </div>

            {/* Name with Animated Shimmer */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
              <span className="animate-text-shimmer">
                {profile.name}
              </span>
            </h1>

            {/* Dynamic Animated Typewriter Role */}
            <div className="h-8 flex items-center mb-4">
              <span className="text-lg sm:text-xl font-bold text-slate-800 dark:text-zinc-200">
                {displayedText}
              </span>
              <span className="inline-block w-0.5 h-5 bg-emerald-500 ml-1 animate-pulse"></span>
            </div>

            {/* Subtitle / Professional Summary */}
            <p className="text-slate-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Full Stack Web Developer specializing in AI Chatbots, Autonomous Agents, and Scalable System Design. Hands-on experience integrating LLM APIs (OpenAI, Claude), developing Retrieval-Augmented Generation (RAG) pipelines, and architecting multi-tenant SaaS platforms with high-concurrency database optimizations.
            </p>

            {/* Feature Bullets */}
            <div className="space-y-2.5 mb-8">
              {profile.keyBullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof & CTA Action Buttons */}
          <div className="relative z-10 pt-6 border-t border-slate-100 dark:border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            {/* Social Proof Avatars Cluster */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 overflow-hidden">
                {clientAvatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Client"
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-zinc-900 object-cover shadow-xs"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current text-amber-400 drop-shadow-2xs" />
                  ))}
                  <span className="text-xs font-bold text-slate-900 dark:text-white ml-1">
                    {profile.stats.clientRating}
                  </span>
                </div>
                <div className="text-[10px] font-semibold text-slate-500 dark:text-zinc-400 uppercase tracking-wider">
                  Client Rating ({profile.stats.projectsCompleted} Projects Delivered)
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenContact}
                className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs sm:text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-all flex items-center gap-2 shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Contact Me</span>
                <Send className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-700/80 transition-all text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Card: About Me Story & Interactive Portrait */}
        <div className="lg:col-span-5 bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between">
          <div>
            {/* Header: • About Me ------- */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-900 dark:bg-emerald-400"></span>
                About Me
              </span>
              <div className="flex-1 border-b border-dashed border-slate-200 dark:border-zinc-800"></div>
            </div>

            {/* Avatar with gradient halo & play button */}
            <div className="flex flex-col items-center mb-4">
              <div 
                className="relative group cursor-pointer" 
                onClick={onOpenVideo}
                title="Click to watch product walkthrough video"
              >
                {/* Gradient ring */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-emerald-400 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-zinc-900 relative">
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="w-full h-full object-cover object-[50%_20%]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Play button overlay badge */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenVideo();
                  }}
                  aria-label="Watch video presentation"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-emerald-600 transition-all cursor-pointer ring-2 ring-white dark:ring-zinc-900"
                >
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </button>
              </div>

              {/* Dedicated Clickable Video Button */}
              <button
                onClick={onOpenVideo}
                className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shadow-2xs hover:shadow-xs transition-all cursor-pointer group"
              >
                <Play className="w-3 h-3 fill-current text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Watch EasyfyPro Video Walkthrough (3:43)</span>
              </button>
            </div>

            {/* Narrative Bio */}
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              <p>
                Hi 👋, I build modern web applications and AI solutions from Dhaka, Bangladesh.
              </p>
              <p>
                Over the past year, I've integrated LLM APIs, designed autonomous AI Agents, and engineered RAG pipelines for document indexing and instant semantic answers.
              </p>
              <p>
                Currently developing an AI chatbot product and a multi-tenant SaaS platform where multiple organizations operate securely with tenant-isolated data.
              </p>
              <p className="text-slate-500 dark:text-zinc-400 text-xs">
                With a Bachelor of Arts in Philosophy from National University, I apply formal logic and rigorous invariants to software architecture, database design, and post-launch stability.
              </p>
            </div>
          </div>

          {/* Quick link to projects */}
          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-zinc-400">
              National University Graduate
            </span>
            <a
              href="#projects"
              className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 flex items-center gap-1 transition-colors"
            >
              <span>Explore My Projects</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
