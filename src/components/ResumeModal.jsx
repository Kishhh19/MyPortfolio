import React, { useEffect } from 'react';
import { 
  X, 
  Printer, 
  ExternalLink, 
  Download, 
  GraduationCap, 
  Code, 
  Database, 
  Award, 
  Compass, 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin,
  Calendar,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { personalInfo, educationData, skillCategories, achievementsData, hobbiesData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    // Open resume.html in a new window and trigger print
    const printWindow = window.open('./resume.html', '_blank');
    if (printWindow) {
      printWindow.focus();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[94vh] flex flex-col bg-slateDark-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slateDark-950 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary-950/80 text-cyanAccent-400 border border-cyanAccent-500/40">
              Curriculum Vitae
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              Mark Laurence M. Santos — AUF BSIT
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-primary-500 to-cyanAccent-500 hover:opacity-90 text-white text-xs font-bold transition-all shadow-md shadow-primary-500/20"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <a
              href="./resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition-colors"
              title="Open full standalone CV page"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyanAccent-400" />
              <span className="hidden sm:inline">Open Full Page</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document View */}
        <div className="p-5 sm:p-8 overflow-y-auto bg-slate-100 text-slate-800 font-sans leading-relaxed">
          
          {/* Printable Sheet Container */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 sm:p-10 space-y-7 max-w-3xl mx-auto text-[13px]">
            
            {/* Header */}
            <header className="border-b-2 border-slate-900 pb-4">
              <h1 id="resume-modal-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-sm font-bold text-blue-700 mt-1">
                Bachelor of Science in Information Technology (BSIT) Candidate
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-700" />
                  Angeles City, Pampanga
                </span>
                <span>•</span>
                <a href="tel:09283287141" className="flex items-center gap-1.5 text-slate-700 hover:text-blue-700">
                  <Phone className="w-3.5 h-3.5 text-blue-700" />
                  0928 328 7141
                </a>
                <span>•</span>
                <a href="mailto:marklaurencesantos558@gmail.com" className="flex items-center gap-1.5 text-slate-700 hover:text-blue-700">
                  <Mail className="w-3.5 h-3.5 text-blue-700" />
                  marklaurencesantos558@gmail.com
                </a>
                <span>•</span>
                <a 
                  href="https://www.linkedin.com/in/mark-laurence-s-032713294/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-700 hover:text-blue-700"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-700" />
                  linkedin.com/in/mark-laurence-s-032713294
                </a>
              </div>
            </header>

            {/* Career Profile */}
            <section>
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-700" />
                Career Profile
              </h2>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5">
                <p className="text-slate-700 text-justify text-xs leading-relaxed">
                  Dedicated, analytical, and solutions-oriented <strong>4th-Year BSIT Student</strong> at <strong>Angeles University Foundation</strong> with strong academic and practical foundations in full-stack web application development, database architecture, and systems engineering. Demonstrates a disciplined problem-solving approach, keen attention to detail, and a commitment to continuous learning. Seeking to leverage technical capabilities, clean coding standards, and information technology coursework in an entry-level IT or Software Engineering role.
                </p>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
                Education
              </h2>
              <div className="bg-slate-50 border border-slate-200 border-l-4 border-l-blue-700 rounded-lg p-3.5">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-2.5">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-sm">Angeles University Foundation</h3>
                    <p className="font-bold text-blue-700 text-xs">Bachelor of Science in Information Technology (BSIT)</p>
                  </div>
                  <div className="text-right text-xs text-slate-500 font-medium">
                    <div>2023 – Present</div>
                    <div>Angeles City, Pampanga</div>
                  </div>
                </div>

                <div className="border-t border-dashed border-slate-300 pt-2.5">
                  <span className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Core &amp; Relevant Coursework:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {educationData.coursework.map((course, idx) => (
                      <span key={idx} className="bg-white border border-slate-300 text-slate-800 text-[10.5px] px-2 py-0.5 rounded font-medium">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-blue-700" />
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <h4 className="font-extrabold text-slate-900 text-[11px] uppercase tracking-wider border-b border-slate-200 pb-1 mb-2">
                      {cat.category}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {cat.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="bg-white border border-slate-300 text-slate-900 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Achievements & Training */}
            <section>
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-blue-700" />
                Achievements &amp; Training
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {achievementsData.map((ach) => (
                  <div key={ach.id} className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded bg-blue-700 text-white flex items-center justify-center shrink-0 text-xs font-bold">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs">{ach.title}</h4>
                      <p className="text-[11px] text-slate-600 leading-tight mt-0.5">{ach.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Hobbies & Interests */}
            <section>
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-blue-700" />
                Hobbies &amp; Interests
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {hobbiesData.map((hobby, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <h4 className="font-bold text-slate-900 text-xs">{hobby.title}</h4>
                    <p className="text-[11px] text-slate-600 leading-tight mt-0.5">{hobby.description}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-3.5 bg-slateDark-950 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400 shrink-0">
          <span>Angeles University Foundation • BSIT</span>
          <button
            onClick={handlePrint}
            className="text-cyanAccent-400 hover:text-cyanAccent-300 font-semibold flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print or Export as PDF (Ctrl + P)</span>
          </button>
        </div>

      </div>
    </div>
  );
}
