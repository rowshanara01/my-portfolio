import React, { useRef, useEffect, useState } from 'react';
import { Star, CheckCircle, MessageSquareQuote } from 'lucide-react';
import { PORTFOLIO_DATA, Testimonial } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollDelta, setScrollDelta] = useState(0);

  // 16 total testimonials split into 4 dynamic rows
  const allTestimonials = PORTFOLIO_DATA.testimonials;
  const row1 = allTestimonials.slice(0, 4);
  const row2 = allTestimonials.slice(4, 8);
  const row3 = allTestimonials.slice(8, 12);
  const row4 = allTestimonials.slice(12, 16);

  // Duplicated for seamless infinite loop marquee
  const loopRow1 = [...row1, ...row1, ...row1];
  const loopRow2 = [...row2, ...row2, ...row2];
  const loopRow3 = [...row3, ...row3, ...row3];
  const loopRow4 = [...row4, ...row4, ...row4];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = (currentScrollY - lastScrollY) * 0.35;
      setScrollDelta((prev) => prev + delta);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderCard = (test: Testimonial, key: string | number) => (
    <div
      key={key}
      className="w-[290px] sm:w-[350px] shrink-0 rounded-3xl border border-slate-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-850 p-5 sm:p-6 flex flex-col justify-between hover:border-emerald-400 dark:hover:border-emerald-500 transition-all duration-300 shadow-md hover:shadow-2xl dark:shadow-black/50 select-none group/card cursor-default"
    >
      <div>
        {/* Rating and Quote Badge */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1 text-amber-500">
            {[...Array(test.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current text-amber-400 drop-shadow-xs" />
            ))}
          </div>
          <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 dark:border-emerald-800/60 shadow-2xs">
            5.0 Verified
          </span>
        </div>

        {/* Review Text */}
        <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed mb-5 font-normal">
          "{test.text}"
        </p>
      </div>

      {/* Author & Verification */}
      <div className="pt-3.5 border-t border-slate-100 dark:border-zinc-800">
        <div className="flex items-center gap-3 mb-2">
          <img
            src={test.avatar}
            alt={test.name}
            className="w-9 h-9 rounded-full object-cover ring-2 ring-white dark:ring-zinc-800 shadow-xs shrink-0"
            referrerPolicy="no-referrer"
          />
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
              {test.name}
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-zinc-400 truncate">
              {test.role} · {test.company}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
          <CheckCircle className="w-3.5 h-3.5 fill-emerald-100 dark:fill-emerald-950 shrink-0" />
          <span className="truncate">{test.platform}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" ref={sectionRef} className="max-w-7xl mx-auto px-3 sm:px-4 py-6 scroll-mt-24 animate-entrance">
      <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-lg hover:shadow-xl transition-shadow overflow-hidden relative">
        
        {/* Header with dashed line */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5 whitespace-nowrap">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-900 dark:bg-emerald-400"></span>
            What Clients Say
          </span>
          <div className="flex-1 border-b border-dashed border-slate-200 dark:border-zinc-800"></div>
        </div>

        <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 mb-8 font-normal">
          Real feedback from 16+ verified clients, founders, and engineering leads across Upwork, PeoplePerHour, and remote projects.
        </p>

        {/* 4 Rows Infinite Loop Marquee Area with Row-Specific Hover Pause */}
        <div className="relative overflow-hidden space-y-5 py-2 -mx-6 sm:-mx-9 px-6 sm:px-9">
          
          {/* Edge fade gradient masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white dark:from-zinc-900 to-transparent z-10"></div>
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white dark:from-zinc-900 to-transparent z-10"></div>

          {/* Row 1: Left Loop (←) */}
          <div className="overflow-hidden pause-on-row">
            <div 
              style={{
                transform: `translate3d(-${(scrollDelta * 0.12) % 80}px, 0, 0)`,
                transition: 'transform 0.1s linear'
              }}
              className="animate-marquee-left flex items-stretch gap-4 sm:gap-5"
            >
              {loopRow1.map((item, idx) => renderCard(item, `r1-${idx}`))}
            </div>
          </div>

          {/* Row 2: Right Loop (→) */}
          <div className="overflow-hidden pause-on-row">
            <div 
              style={{
                transform: `translate3d(${(scrollDelta * 0.12) % 80}px, 0, 0)`,
                transition: 'transform 0.1s linear'
              }}
              className="animate-marquee-right flex items-stretch gap-4 sm:gap-5"
            >
              {loopRow2.map((item, idx) => renderCard(item, `r2-${idx}`))}
            </div>
          </div>

          {/* Row 3: Left Loop (←) */}
          <div className="overflow-hidden pause-on-row">
            <div 
              style={{
                transform: `translate3d(-${(scrollDelta * 0.15) % 80}px, 0, 0)`,
                transition: 'transform 0.1s linear'
              }}
              className="animate-marquee-left flex items-stretch gap-4 sm:gap-5"
            >
              {loopRow3.map((item, idx) => renderCard(item, `r3-${idx}`))}
            </div>
          </div>

          {/* Row 4: Right Loop (→) */}
          <div className="overflow-hidden pause-on-row">
            <div 
              style={{
                transform: `translate3d(${(scrollDelta * 0.15) % 80}px, 0, 0)`,
                transition: 'transform 0.1s linear'
              }}
              className="animate-marquee-right flex items-stretch gap-4 sm:gap-5"
            >
              {loopRow4.map((item, idx) => renderCard(item, `r4-${idx}`))}
            </div>
          </div>

        </div>

        {/* Bottom indicator */}
        <div className="mt-8 pt-4 border-t border-slate-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 dark:text-zinc-500">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>4-Row Bidirectional Marquee Wall</span>
          </div>
          <span>Hover any card to pause and read</span>
        </div>

      </div>
    </section>
  );
};
