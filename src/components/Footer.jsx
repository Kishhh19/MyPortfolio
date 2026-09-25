import React from 'react';
import { Code, ArrowUp, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo, contactConfig } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear() > 2026 ? new Date().getFullYear() : 2026;

  return (
    <footer className="bg-slateDark-950 border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Identity & Role */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-500 to-cyanAccent-500 flex items-center justify-center text-white font-bold">
                <Code className="w-4 h-4 text-white stroke-[2.5]" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-cyanAccent-400 font-mono">
              BSIT Student • Aspiring Full-Stack Developer • Angeles City, Pampanga
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-5 text-xs font-medium text-slate-300">
            <a href="#about" className="hover:text-cyanAccent-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyanAccent-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyanAccent-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-cyanAccent-400 transition-colors">Education</a>
            <a href="#experience" className="hover:text-cyanAccent-400 transition-colors">Experience</a>
            <a href="#services" className="hover:text-cyanAccent-400 transition-colors">Services</a>
            <a href="#resume" className="hover:text-cyanAccent-400 transition-colors">Resume</a>
            <a href="#contact" className="hover:text-cyanAccent-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            {contactConfig.github && (
              <a
                href={contactConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            {contactConfig.linkedin && (
              <a
                href={contactConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-cyanAccent-400" />
              </a>
            )}

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-primary-500/10 hover:bg-primary-500/20 text-primary-400 border border-primary-500/30 transition-colors ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="font-mono text-[11px] text-slate-400">
            Angeles City, Pampanga • BSIT Portfolio • Autotrace ALPR
          </p>
        </div>

      </div>
    </footer>
  );
}
