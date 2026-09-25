import React from 'react';
import { 
  GraduationCap, 
  Code2, 
  FolderGit2, 
  Rocket, 
  CheckCircle2, 
  Server, 
  Terminal, 
  ShieldCheck, 
  Network, 
  Cloud,
  Cpu,
  Layers,
  Sparkles,
  MapPin
} from 'lucide-react';
import { personalInfo, quickInfoCards } from '../data/portfolioData';

const iconMap = {
  GraduationCap: <GraduationCap className="w-6 h-6 text-primary-400" />,
  Code2: <Code2 className="w-6 h-6 text-cyanAccent-400" />,
  FolderGit2: <FolderGit2 className="w-6 h-6 text-purple-400" />,
  Rocket: <Rocket className="w-6 h-6 text-emerald-400" />,
};

const domainBadges = [
  { label: "Full-Stack Web Dev", icon: <Code2 className="w-3.5 h-3.5" /> },
  { label: "Computer Vision & OCR", icon: <Sparkles className="w-3.5 h-3.5" /> },
  { label: "Database Management (SQL)", icon: <Layers className="w-3.5 h-3.5" /> },
  { label: "Software Systems Engineering", icon: <Cpu className="w-3.5 h-3.5" /> },
  { label: "Linux Administration", icon: <Terminal className="w-3.5 h-3.5" /> },
  { label: "Networking & Protocols", icon: <Network className="w-3.5 h-3.5" /> },
  { label: "Software Quality Assurance", icon: <ShieldCheck className="w-3.5 h-3.5" /> },
  { label: "Cloud Fundamentals", icon: <Cloud className="w-3.5 h-3.5" /> },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full gradient-badge text-xs font-mono text-primary-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyanAccent-400" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic Foundation &amp; Technical Vision
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            Preparing for the technology industry through continuous hands-on full-stack development, applied computer vision research, and comprehensive BSIT training.
          </p>
        </div>

        {/* 4 Quick Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {quickInfoCards.map((card) => (
            <div 
              key={card.id}
              className="p-6 rounded-2xl glass-panel glass-panel-hover group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:scale-110 transition-transform">
                  {iconMap[card.icon]}
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  {card.label}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
                {card.value}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {card.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Main About Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Bio Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-slate-300 leading-relaxed text-base">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="gradient-text-primary">Bachelor of Science in Information Technology</span>
            </h3>

            {personalInfo.aboutText.map((paragraph, index) => (
              <p key={index} className="text-slate-300">
                {paragraph}
              </p>
            ))}

            {/* Core Domain Badges */}
            <div className="mt-4 pt-6 border-t border-slate-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 font-semibold">
                Areas of Academic &amp; Technical Competency:
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {domainBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-200 hover:border-primary-500/50 hover:text-primary-300 transition-colors"
                  >
                    <span className="text-cyanAccent-400">{badge.icon}</span>
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Academic Status & Highlights Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-slate-700/80 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 blur-2xl rounded-full pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-cyanAccent-500 p-0.5 shrink-0">
                  <div className="w-full h-full bg-slateDark-900 rounded-[14px] flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-primary-300" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-base leading-snug">
                    {personalInfo.name}
                  </h4>
                  <p className="text-xs text-cyanAccent-400 font-mono">
                    BSIT Senior • Angeles City, Pampanga
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Comprehensive IT Curriculum:</strong> Software engineering, relational databases, data structures, and computer networks.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Applied Capstone Leadership:</strong> Creator of Autotrace ALPR system integrating OCR algorithms with database architectures.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Production Ready:</strong> Dedicated to writing clean, maintainable code with strict adherence to software quality standards.</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-cyanAccent-400" />
                  Pampanga, PH
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-500/30">
                  Ready for Internship / Roles
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
