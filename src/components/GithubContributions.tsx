import React, { useState, useMemo } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const GithubContributions: React.FC = () => {
  const [hoveredCell, setHoveredCell] = useState<{ date: string; count: number; x: number; y: number } | null>(null);

  // Generate deterministic 52-week contribution data matching 2026
  const { weeks, totalContributions } = useMemo(() => {
    const weeksData: { date: string; count: number; level: number }[][] = [];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Seeded pseudo-random generator
    let seed = 42;
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    let total = 0;
    const startDate = new Date(2026, 0, 4); // Sunday early Jan 2026

    for (let w = 0; w < 52; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + w * 7 + d);
        
        // Generate activity pattern: high in spring, summer, fall (Jan - Oct)
        const month = currentDate.getMonth();
        const isWeekday = d >= 1 && d <= 5;
        const r = random();
        
        let count = 0;
        if (month <= 9) { // Jan to Oct active
          if (isWeekday) {
            count = Math.floor(r * 9) + (r > 0.4 ? 2 : 0);
          } else {
            count = Math.floor(r * 4);
          }
          if (r > 0.85) count += 5; // bursts
        } else {
          // Nov - Dec lighter
          count = Math.floor(r * 3);
        }

        total += count;
        let level = 0;
        if (count === 0) level = 0;
        else if (count <= 2) level = 1;
        else if (count <= 5) level = 2;
        else if (count <= 8) level = 3;
        else level = 4;

        days.push({
          date: currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          count,
          level
        });
      }
      weeksData.push(days);
    }

    return { weeks: weeksData, totalContributions: total };
  }, []);

  const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const getSquareColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-emerald-200 dark:bg-emerald-950 text-emerald-800';
      case 2:
        return 'bg-emerald-400 dark:bg-emerald-800 text-white';
      case 3:
        return 'bg-emerald-600 dark:bg-emerald-600 text-white';
      case 4:
        return 'bg-emerald-800 dark:bg-emerald-400 text-white';
      default:
        return 'bg-slate-100 dark:bg-zinc-800/80';
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-4 py-4 animate-entrance">
      <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-lg hover:shadow-xl transition-shadow relative">
        {/* Header with dashed line */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-3 flex-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-slate-900 dark:bg-emerald-400"></span>
              GitHub Contributions
            </span>
            <div className="flex-1 border-b border-dashed border-slate-200 dark:border-zinc-800"></div>
          </div>
          
          <a
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold text-slate-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 flex items-center gap-1 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>@{PORTFOLIO_DATA.profile.githubHandle}</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>

        {/* Heatmap Area */}
        <div className="overflow-x-auto pb-2 -mx-2 px-2 scrollbar-thin">
          <div className="min-w-[720px]">
            {/* Month labels */}
            <div className="grid grid-cols-12 text-[11px] font-medium text-slate-400 dark:text-zinc-500 mb-2 pl-6">
              {monthLabels.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>

            {/* Squares grid */}
            <div className="flex gap-[3.5px]">
              {/* Day labels Mon/Wed/Fri */}
              <div className="flex flex-col justify-between text-[9px] font-medium text-slate-400 dark:text-zinc-500 pr-2 select-none h-[88px]">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>

              {/* 52 Columns */}
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-[3.5px]">
                  {week.map((day, dIdx) => (
                    <div
                      key={dIdx}
                      onMouseEnter={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setHoveredCell({
                          date: day.date,
                          count: day.count,
                          x: rect.left + rect.width / 2,
                          y: rect.top - 8
                        });
                      }}
                      onMouseLeave={() => setHoveredCell(null)}
                      className={`w-[11.5px] h-[11.5px] rounded-[2.5px] transition-transform hover:scale-125 cursor-pointer ${getSquareColor(
                        day.level
                      )}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Tooltip */}
        {hoveredCell && (
          <div
            style={{
              position: 'fixed',
              left: `${hoveredCell.x}px`,
              top: `${hoveredCell.y}px`,
              transform: 'translate(-50%, -100%)',
              zIndex: 50
            }}
            className="pointer-events-none px-2.5 py-1 text-[11px] rounded-lg bg-slate-900 text-white shadow-xl whitespace-nowrap animate-in fade-in zoom-in-95 duration-150"
          >
            <span className="font-bold">{hoveredCell.count} contributions</span> on {hoveredCell.date}
          </div>
        )}

        {/* Footer Statistics & Legend */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-zinc-400">
          <div className="font-semibold text-slate-700 dark:text-zinc-300">
            {PORTFOLIO_DATA.profile.stats.githubContributions2026} contributions in 2026
          </div>

          <div className="flex items-center gap-1.5 text-[11px]">
            <span>Less</span>
            <span className="w-2.5 h-2.5 rounded-xs bg-slate-100 dark:bg-zinc-800"></span>
            <span className="w-2.5 h-2.5 rounded-xs bg-emerald-200 dark:bg-emerald-950"></span>
            <span className="w-2.5 h-2.5 rounded-xs bg-emerald-400 dark:bg-emerald-800"></span>
            <span className="w-2.5 h-2.5 rounded-xs bg-emerald-600 dark:bg-emerald-600"></span>
            <span className="w-2.5 h-2.5 rounded-xs bg-emerald-800 dark:bg-emerald-400"></span>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
};
