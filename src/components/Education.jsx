import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Users, 
  Calendar, 
  MapPin, 
  CheckCircle,
  FileCode,
  Sparkles
} from 'lucide-react';
import { educationData, personalInfo } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 relative border-y border-slate-800/60 bg-slateDark-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full gradient-badge text-xs font-mono text-primary-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyanAccent-400" />
            <span>04. ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Coursework
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            Formal Bachelor of Science in Information Technology curriculum covering software engineering, relational databases, networking, and applied capstone systems.
          </p>
        </div>

        {/* Main Degree Card */}
        <div className="p-8 sm:p-10 rounded-2xl glass-panel border border-slate-700/80 shadow-2xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 blur-3xl rounded-full pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary-500/10 border border-primary-500/30 flex items-center justify-center text-primary-400 shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-primary-950 text-cyanAccent-400 border border-cyanAccent-500/30 mb-2">
                  {educationData.yearLevel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {educationData.degree}
                </h3>
                <p className="text-base text-slate-300 font-medium mt-1">
                  Candidate: <strong className="text-white">{personalInfo.name}</strong> • {educationData.institution}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyanAccent-400" />
                <span>{educationData.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyanAccent-400" />
                <span>{educationData.location}</span>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-6 space-y-2.5">
            {educationData.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Column Academic Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Relevant Coursework */}
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-primary-400 font-bold text-base mb-4">
                <BookOpen className="w-5 h-5" />
                <span>Relevant Coursework</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {educationData.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slateDark-900 text-slate-300 border border-slate-800"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-6 text-[11px] text-slate-400 font-mono">
              Aligned with CHED BSIT Standards
            </p>
          </div>

          {/* Academic Projects */}
          <div className="p-6 rounded-2xl glass-panel border border-slate-800">
            <div className="flex items-center gap-2.5 text-cyanAccent-400 font-bold text-base mb-4">
              <FileCode className="w-5 h-5" />
              <span>Academic Projects</span>
            </div>
            <div className="space-y-4">
              {educationData.academicProjects.map((proj, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slateDark-900 border border-slate-800">
                  <h4 className="text-xs font-bold text-white mb-0.5">{proj.title}</h4>
                  <span className="text-[11px] font-mono text-cyanAccent-400">{proj.role}</span>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed font-sans">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Activities & Achievements */}
          <div className="p-6 rounded-2xl glass-panel border border-slate-800">
            <div className="flex items-center gap-2.5 text-purple-400 font-bold text-base mb-4">
              <Users className="w-5 h-5" />
              <span>Student Activities &amp; Guilds</span>
            </div>
            <ul className="space-y-3 mb-6">
              {educationData.activities.map((act, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5"></span>
                  <span>{act}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mb-2 uppercase font-mono">
                <Award className="w-4 h-4" />
                <span>Honors &amp; Recognitions</span>
              </div>
              <div className="space-y-1.5">
                {educationData.achievements.map((ach, idx) => (
                  <div key={idx} className="text-xs text-slate-400 italic bg-slateDark-900 p-2 rounded-lg border border-slate-800/80">
                    {ach}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
