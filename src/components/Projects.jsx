import React from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Layers, 
  ArrowRight, 
  FileText, 
  Sparkles,
  CheckCircle2,
  Star,
  Cpu,
  Bot,
  ShieldCheck,
  Eye
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const project = projectsData[0]; // Autotrace ALPR

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full gradient-badge text-xs font-mono text-primary-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyanAccent-400" />
            <span>03. FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Flagship Capstone &amp; Web Systems
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            In-depth case study of the Autotrace ALPR system built at Angeles University Foundation. Click to explore the complete architecture and technical implementation.
          </p>
        </div>

        {/* Grand Showcase Featured Project Card */}
        {project && (
          <div className="rounded-3xl glass-panel border border-primary-500/40 shadow-2xl overflow-hidden mb-10 relative group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 blur-3xl rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              
              {/* Left Column: Visual Mockup / Interface Stream */}
              <div 
                className="lg:col-span-7 bg-slateDark-950 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800 relative cursor-pointer group"
                onClick={() => onSelectProject(project)}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                      Senior Capstone Project
                    </span>

                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-primary-950 text-cyanAccent-400 border border-cyanAccent-500/30">
                      {project.category}
                    </span>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 aspect-[16/10] bg-slateDark-900 shadow-xl">
                    <img
                      src={project.image}
                      alt={`${project.title} Interface Preview`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Hover Prompt */}
                    <div className="absolute inset-0 bg-slateDark-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <span className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-cyanAccent-500 text-white text-xs font-bold flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <FileText className="w-4 h-4" />
                        Inspect Complete Case Study
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Angeles University Foundation</span>
                  <span className="text-emerald-400 font-semibold">● System Ready</span>
                </div>
              </div>

              {/* Right Column: Project Breakdown & Action CTAs */}
              <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between">
                <div>
                  <h3 
                    onClick={() => onSelectProject(project)}
                    className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-primary-300 transition-colors cursor-pointer tracking-tight mb-3"
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {project.shortDescription}
                  </p>

                  {/* Problem & Solution High-Contrast Badges */}
                  <div className="space-y-3 mb-6 text-xs">
                    <div className="p-3.5 rounded-xl bg-slateDark-950 border border-rose-500/20">
                      <div className="font-mono text-rose-400 font-bold mb-1">Problem:</div>
                      <div className="text-slate-300 leading-relaxed">{project.problem}</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slateDark-950 border border-cyanAccent-500/20">
                      <div className="font-mono text-cyanAccent-400 font-bold mb-1">Solution:</div>
                      <div className="text-slate-300 leading-relaxed">{project.solution}</div>
                    </div>
                  </div>

                  {/* Key Technologies */}
                  <div className="mb-6">
                    <span className="text-xs font-mono uppercase text-slate-400 font-semibold block mb-2">Technologies Used:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-cyanAccent-500 hover:opacity-95 text-white font-bold text-xs shadow-lg shadow-primary-500/25 transition-all"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Case Study</span>
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Teaser Card: Active Development (Chatbot) */}
        <div className="p-6 sm:p-7 rounded-2xl glass-panel border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-primary-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base font-bold text-white">Currently in Active Development: AI Chatbot</h4>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-purple-950 text-purple-300 border border-purple-500/30">
                  In Progress
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1 font-sans">
                Engineering an intelligent conversational web chatbot with responsive UI components, prompt handling, and natural user interactions.
              </p>
            </div>
          </div>

          <a
            href="#experience"
            className="text-xs font-semibold px-4 py-2.5 rounded-xl bg-slate-900 text-slate-200 hover:bg-slate-800 border border-slate-700 transition-colors shrink-0 flex items-center gap-1.5"
          >
            <span>View Timeline</span>
            <ArrowRight className="w-3.5 h-3.5 text-cyanAccent-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
