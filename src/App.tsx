/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExperienceSkillsSection } from './components/ExperienceSkillsSection';
import { GithubContributions } from './components/GithubContributions';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingChatWidget } from './components/FloatingChatWidget';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { VideoModal } from './components/VideoModal';
import { DownloadCodeModal } from './components/DownloadCodeModal';
import { NewYearFireworks } from './components/NewYearFireworks';
import { RevealOnScroll } from './components/RevealOnScroll';
import { Project, PORTFOLIO_DATA } from './data/portfolioData';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved) return saved === 'dark';
    }
    return false;
  });

  const [activeSection, setActiveSection] = useState<string>('about');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [videoModalConfig, setVideoModalConfig] = useState<{
    isOpen: boolean;
    videoUrl?: string;
    title?: string;
    subtitle?: string;
  }>({
    isOpen: false,
    videoUrl: PORTFOLIO_DATA.profile.videoShowcasePath,
    title: "Rowshanara Akhter — EasyfyPro AI & SaaS Platform Walkthrough",
    subtitle: "Live product demo, multi-channel AI chatbots & multi-tenant architecture"
  });

  const handleOpenVideo = (videoUrl?: string, title?: string, subtitle?: string) => {
    setVideoModalConfig({
      isOpen: true,
      videoUrl: videoUrl || PORTFOLIO_DATA.profile.videoShowcasePath,
      title: title || "Rowshanara Akhter — Platform Walkthrough",
      subtitle: subtitle || "Live product demo & scalable system architecture"
    });
  };

  // Sync dark mode class on HTML root element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [darkMode]);

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['about', 'experience', 'skills', 'projects', 'testimonials', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f5f7] dark:bg-[#0c0d0e] text-slate-900 dark:text-zinc-100 transition-colors duration-300 antialiased selection:bg-emerald-500 selection:text-white relative">
      {/* Happy New Year celebratory fireworks that burst on page load */}
      <NewYearFireworks />

      {/* Floating Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenContact={handleOpenContact}
        onOpenDownloadModal={() => setDownloadModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="space-y-4">
        {/* Hero & About Me side-by-side cards */}
        <RevealOnScroll delay={80} duration={750} yOffset={28}>
          <HeroSection
            onOpenResume={() => setResumeModalOpen(true)}
            onOpenContact={handleOpenContact}
            onOpenVideo={() => handleOpenVideo(
              PORTFOLIO_DATA.profile.videoShowcasePath,
              "Rowshanara Akhter — EasyfyPro AI & SaaS Platform Walkthrough",
              "Live product demo, multi-channel AI chatbots & multi-tenant architecture"
            )}
          />
        </RevealOnScroll>

        {/* Experience & Technical Skills */}
        <RevealOnScroll delay={100} duration={750} yOffset={32}>
          <ExperienceSkillsSection />
        </RevealOnScroll>

        {/* GitHub Contribution Heatmap */}
        <RevealOnScroll delay={100} duration={750} yOffset={32}>
          <GithubContributions />
        </RevealOnScroll>

        {/* Selected Projects Showcase with disableTransformAfterReveal so sticky stacking works 100% */}
        <RevealOnScroll delay={80} duration={750} yOffset={32} disableTransformAfterReveal={true}>
          <ProjectsSection
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenVideo={handleOpenVideo}
          />
        </RevealOnScroll>

        {/* Client Testimonials */}
        <RevealOnScroll delay={100} duration={750} yOffset={32}>
          <TestimonialsSection />
        </RevealOnScroll>

        {/* Contact & Direct Verification */}
        <RevealOnScroll delay={100} duration={750} yOffset={32}>
          <ContactSection />
        </RevealOnScroll>
      </main>

      {/* Footer */}
      <Footer onOpenDownloadModal={() => setDownloadModalOpen(true)} />

      {/* Interactive Floating Chat Widget with Unread Notification */}
      <FloatingChatWidget
        onOpenContact={handleOpenContact}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Full Resume / CV Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Download Source Code Modal (with Blob, New Tab, and Copy Link to bypass iframe sandbox) */}
      <DownloadCodeModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenVideo={handleOpenVideo}
      />

      {/* Showcase Video Modal */}
      <VideoModal
        isOpen={videoModalConfig.isOpen}
        onClose={() => setVideoModalConfig((prev) => ({ ...prev, isOpen: false }))}
        videoUrl={videoModalConfig.videoUrl}
        title={videoModalConfig.title}
        subtitle={videoModalConfig.subtitle}
      />
    </div>
  );
}
