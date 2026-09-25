import React from 'react';
import { 
  Briefcase, 
  Layers, 
  Code2, 
  GitBranch, 
  Calendar, 
  Terminal,
  FolderKanban,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full gradient-badge text-xs font-mono text-primary-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyanAccent-400" />
            <span>05. EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic &amp; Development Experience
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            Hands-on technical development experience gained through student capstone projects, departmental software development, team collaborations, and practical laboratory exercises.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 md:before:left-8 before:w-0.5 before:bg-slate-800 before:-z-10">
          {experienceData.map((item) => (
            <div 
              key={item.id}
              className="relative pl-10 md:pl-20 group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute left-2.5 md:left-6 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-slateDark-900 border-2 border-primary-400 group-hover:scale-125 group-hover:border-cyanAccent-400 transition-all shadow-md shadow-primary-500/30"></div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-slate-800 group-hover:border-slate-700/80 transition-all duration-300">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-primary-950 text-cyanAccent-400 border border-cyanAccent-500/30 w-fit">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-primary-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-1 group-hover:text-primary-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-4">
                  {item.organization}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {item.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slateDark-900 text-slate-300 border border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
