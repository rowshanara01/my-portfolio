import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenDownloadModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownloadModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="max-w-7xl mx-auto px-3 sm:px-4 pt-4 pb-16 text-center">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-slate-200/80 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
        <p>
          © 2026 {PORTFOLIO_DATA.profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Experience
          </a>
          <a href="#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Contact
          </a>
          
          <button
            onClick={onOpenDownloadModal}
            className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline transition-colors cursor-pointer"
            title="Download full project source code as a ZIP archive"
          >
            Download Code (.ZIP)
          </button>

          <button
            onClick={scrollToTop}
            title="Back to Top"
            className="p-2 rounded-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-300 transition-all cursor-pointer shadow-xs"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
