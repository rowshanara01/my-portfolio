import React, { useState } from 'react';
import { ExternalLink, Github, Play, ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onOpenVideo: (videoUrl?: string, title?: string, subtitle?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onOpenVideo
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'AI & LLM / Agents',
    'Full Stack / SaaS',
    'Real-Time & API',
    'Laravel'
  ];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="max-w-7xl mx-auto px-3 sm:px-4 py-6 scroll-mt-24">
      {/* Container Card */}
      <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-lg hover:shadow-xl transition-shadow relative">
        
        {/* Sticky Header with Category Filter Tabs */}
        <div className="sticky top-[54px] z-30 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md pt-2 pb-5 border-b border-slate-100 dark:border-zinc-800/80 mb-8 transition-colors">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-slate-900 dark:bg-emerald-400"></span>
                Projects
              </span>
              <div className="flex-1 border-b border-dashed border-slate-200 dark:border-zinc-800"></div>
            </div>

            {/* Interactive Filter Pills */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-zinc-800/80 rounded-full overflow-x-auto max-w-full">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-white dark:bg-zinc-900 text-slate-900 dark:text-white shadow-xs'
                        : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stacked Project Cards Container */}
        <div className="relative pb-16">
          {filteredProjects.map((project, index) => {
            // Calculate sticky top offset per card so each card stacks cleanly with visible tab top
            const topOffset = 118 + index * 26;
            
            return (
              <div
                key={project.id}
                style={{
                  position: 'sticky',
                  top: `${topOffset}px`,
                  zIndex: index + 10,
                }}
                className="group rounded-3xl border border-slate-200 dark:border-zinc-750 bg-white dark:bg-zinc-900 shadow-[0_-6px_20px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_-6px_20px_rgba(0,0,0,0.35),0_12px_32px_rgba(0,0,0,0.5)] transition-all duration-300 p-6 sm:p-7 mb-10 last:mb-0"
              >
                {/* Top Deck Accent Strip (visible when cards are stacked behind each other) */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-zinc-800/70">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 border border-slate-200/80 dark:border-zinc-700/80">
                      {project.badge}
                    </span>
                    <span className="text-[11px] text-slate-400 dark:text-zinc-500 font-medium hidden sm:inline">
                      {project.category}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 tabular-nums">
                    0{index + 1} / 0{filteredProjects.length}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Left: Project Preview Visual */}
                  <div 
                    onClick={() => onSelectProject(project)}
                    className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-video bg-slate-900 cursor-pointer shadow-xs group/img"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105 opacity-90 group-hover/img:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Subtle dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

                    {/* Badge on Image */}
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md text-[9.5px] font-bold tracking-wider uppercase bg-black/70 backdrop-blur-md text-white border border-white/20">
                      {project.badge}
                    </div>

                    {/* Play / Preview Circle Button in Center */}
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenVideo(
                          project.videoUrl || PORTFOLIO_DATA.profile.videoShowcasePath,
                          `${project.title} — Walkthrough`,
                          project.subtitle
                        );
                      }}
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                      title="Watch live project walkthrough video"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm text-slate-900 dark:text-white flex items-center justify-center shadow-lg group-hover/img:scale-110 transition-transform">
                        <Play className="w-4 h-4 fill-current ml-0.5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                    </div>
                  </div>

                  {/* Right: Project Information */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <h3 
                        onClick={() => onSelectProject(project)}
                        className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer transition-colors"
                      >
                        {project.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4 font-normal">
                        {project.description}
                      </p>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-50 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 border border-slate-200/80 dark:border-zinc-700/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons Row */}
                    <div className="flex items-center gap-2.5 pt-2">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors cursor-pointer shadow-xs"
                      >
                        View Details
                      </button>

                      {project.demoUrl && (
                        <button
                          onClick={() => onSelectProject(project)}
                          aria-label="View Project Details"
                          className="p-2 rounded-xl border border-slate-200 dark:border-zinc-700 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 transition-colors cursor-pointer"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="GitHub Repository"
                          className="p-2 rounded-xl border border-slate-200 dark:border-zinc-700 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
