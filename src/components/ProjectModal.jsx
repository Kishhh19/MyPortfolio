import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Calendar, 
  AlertTriangle, 
  Trophy,
  Workflow,
  Sparkles,
  ArrowRight,
  Star
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const isCapstone = project.id === 'autotrace-alpr-system';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-slateDark-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slateDark-950 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-primary-950/80 text-cyanAccent-400 border border-cyanAccent-500/40">
              {project.category}
            </span>
            {isCapstone && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                Senior Capstone
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400"
            aria-label="Close case study modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Project Title & Overview */}
          <div>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="mt-2 text-slate-300 text-base leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Project Preview Image / Visual */}
          <div className="rounded-xl overflow-hidden border border-slate-700/80 bg-slateDark-950 aspect-video w-full flex items-center justify-center">
            <img 
              src={project.image} 
              alt={`${project.title} Interface Preview`} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Problem & Objective Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-2xl bg-slateDark-950/80 border border-rose-500/20">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-2 font-mono">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>The Problem Statement</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slateDark-950/80 border border-cyanAccent-500/20">
              <div className="flex items-center gap-2 text-cyanAccent-400 font-bold text-sm mb-2 font-mono">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>Project Objective</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.objective}
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="p-6 rounded-2xl bg-slateDark-950/90 border border-slate-800">
            <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-400"></span>
              Architectural Solution
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-primary-400" />
              <span>Key System Features</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-slateDark-950 border border-slate-800/80 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyanAccent-400" />
              <span>Technologies &amp; Libraries</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900 text-slate-200 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Development Process */}
          {project.developmentProcess && project.developmentProcess.length > 0 && (
            <div>
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Workflow className="w-4 h-4 text-purple-400" />
                <span>Development Lifecycle &amp; Methodology</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {project.developmentProcess.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slateDark-950 border border-slate-800">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-primary-950 text-cyanAccent-400 border border-cyanAccent-500/40 text-[10px] font-mono font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <h4 className="text-xs font-bold text-white font-mono uppercase">{step.stage}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">{step.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges & Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-2xl bg-slateDark-950 border border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-2">
                Technical Challenges &amp; Solutions
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slateDark-950 border border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase font-bold tracking-wider mb-2">
                <Trophy className="w-4 h-4" />
                <span>Result &amp; Academic Outcome</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Action Links Footer */}
        <div className="px-6 py-4 bg-slateDark-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-slate-400 font-mono">
            ID: {project.id}
          </div>

          <div className="flex items-center gap-3">
            {project.github && project.github.length > 0 && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.demo && project.demo.length > 0 && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary-500 to-cyanAccent-500 hover:opacity-90 text-white text-xs font-bold transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
