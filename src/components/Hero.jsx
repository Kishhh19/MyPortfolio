import React from 'react';
import { 
  ArrowRight, 
  Mail, 
  FileDown, 
  Sparkles,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Cpu,
  Database,
  Globe,
  Code2,
  Bot
} from 'lucide-react';
import { personalInfo, projectsData } from '../data/portfolioData';

export default function Hero({ onResumeClick, showToast }) {
  const capstoneProject = projectsData[0];

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      
      {/* Ambient Lighting & Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-primary-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-36 right-10 w-[350px] h-[300px] bg-cyanAccent-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Core Identity & Impact Headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-primary-500/30 text-xs font-mono text-primary-300 mb-6 shadow-sm shadow-primary-500/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold text-white">Angeles University Foundation</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyanAccent-400">Web Developer</span>
            </div>

            {/* Name Introduction */}
            <p className="text-sm sm:text-base font-mono uppercase tracking-widest text-cyanAccent-400 font-bold mb-2 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-cyanAccent-400 inline-block"></span>
              {personalInfo.name}
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Building Modern <span className="gradient-text-primary">Web Solutions</span> &amp; Intelligent Systems.
            </h1>

            {/* Supporting Bio Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              4th-year BSIT student at <strong className="text-white">Angeles University Foundation</strong> in Angeles City, Pampanga. Focused on web development, modern frontend frameworks, and intelligent applications — creator of <strong className="text-cyanAccent-400 font-medium">Autotrace ALPR</strong> and currently developing an <strong className="text-purple-300 font-medium">AI Chatbot</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 via-primary-600 to-cyanAccent-500 hover:opacity-95 text-white font-bold text-sm shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all"
              >
                <span>View Autotrace Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700/80 hover:border-slate-500 hover:-translate-y-0.5 transition-all"
              >
                <Mail className="w-4 h-4 text-cyanAccent-400" />
                <span>Get In Touch</span>
              </a>

              <button
                onClick={onResumeClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 hover:border-slate-600 transition-all"
                aria-label="Download resume"
              >
                <FileDown className="w-4 h-4 text-primary-400" />
                <span>Resume</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold font-mono text-white">AUF</span>
                <span className="text-xs text-slate-400">Angeles University Fdn.</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold font-mono text-cyanAccent-400">Web Dev</span>
                <span className="text-xs text-slate-400">Core Specialization</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold font-mono text-primary-300">Autotrace</span>
                <span className="text-xs text-slate-400">ALPR Capstone</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold font-mono text-purple-400">AI Chatbot</span>
                <span className="text-xs text-slate-400">In Active Build</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Showcase Card Matrix */}
          <div className="lg:col-span-5 w-full">
            <div className="relative space-y-4">
              
              {/* Flagship Capstone Highlight Card */}
              <div className="p-6 sm:p-7 rounded-2xl glass-panel border border-slate-700/80 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/10 blur-2xl rounded-full pointer-events-none" />
                
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary-950/80 text-primary-300 border border-primary-500/40 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyanAccent-400" />
                    Senior Capstone Project
                  </span>
                  <span className="text-xs text-emerald-400 font-mono font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    AUF IT Project
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                  Autotrace: Automated License Plate Recognition
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  An intelligent computer vision and web system combining real-time camera feeds, OCR plate extraction, and database verification for automated gate security.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["React", "JavaScript", "Tailwind CSS", "Python OCR", "SQL"].map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#projects"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold flex items-center justify-between border border-slate-700/80 transition-colors group-hover:border-primary-500/40"
                >
                  <span>View Full System Case Study</span>
                  <ArrowRight className="w-4 h-4 text-cyanAccent-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Verified Developer Profile Status Card */}
              <div className="p-5 rounded-2xl glass-panel border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-cyanAccent-500 p-0.5 shrink-0">
                    <div className="w-full h-full bg-slateDark-900 rounded-[10px] flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-primary-300" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      {personalInfo.name}
                    </h4>
                    <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-cyanAccent-400 shrink-0" />
                      Angeles University Foundation
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                    Web Developer
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
