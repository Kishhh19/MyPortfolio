import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  GraduationCap, 
  Code2, 
  FolderGit2, 
  Briefcase, 
  CheckCircle2, 
  ExternalLink,
  Info,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  Printer,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { personalInfo, educationData, skillCategories, achievementsData, hobbiesData, contactConfig } from '../data/portfolioData';

export default function ResumeSection({ onOpenResumeModal, showToast }) {
  const [showPreview, setShowPreview] = useState(false);

  const handleOpenDirect = () => {
    window.open('./resume.html', '_blank');
  };

  return (
    <section id="resume" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full gradient-badge text-xs font-mono text-primary-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyanAccent-400" />
            <span>07. CURRICULUM VITAE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Official Curriculum Vitae
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            Executive CV for Mark Laurence M. Santos — Bachelor of Science in Information Technology Candidate at Angeles University Foundation.
          </p>
        </div>

        {/* Main Resume Container Card */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-slate-700/80 shadow-2xl relative overflow-hidden">
          
          {/* Header Bar of Resume */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {personalInfo.name}
              </h3>
              <p className="text-sm font-mono text-cyanAccent-400 mt-1">
                {personalInfo.course} • Angeles University Foundation
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-2 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-primary-400" />
                  Angeles City, Pampanga
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-primary-400" />
                  {contactConfig.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-primary-400" />
                  {contactConfig.phone}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                <Eye className="w-4 h-4 text-cyanAccent-400" />
                <span>Quick View CV</span>
              </button>

              <button
                onClick={handleOpenDirect}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-cyanAccent-500 hover:opacity-90 text-white font-bold text-xs shadow-md shadow-primary-500/20 hover:shadow-primary-500/40 transition-all"
              >
                <Printer className="w-4 h-4" />
                <span>Open &amp; Print CV</span>
              </button>
            </div>
          </div>

          {/* Quick Resume Sections Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
            
            <div className="p-4 rounded-xl bg-slateDark-900 border border-slate-800/80">
              <div className="flex items-center gap-2 text-primary-400 font-bold text-xs uppercase font-mono mb-2">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>
              <p className="text-xs font-semibold text-white">Angeles University Fdn.</p>
              <p className="text-[11px] text-slate-400">BSIT (2023 – Present)</p>
            </div>

            <div className="p-4 rounded-xl bg-slateDark-900 border border-slate-800/80">
              <div className="flex items-center gap-2 text-cyanAccent-400 font-bold text-xs uppercase font-mono mb-2">
                <Code2 className="w-4 h-4" />
                <span>Core Stack</span>
              </div>
              <p className="text-xs font-semibold text-white">PHP, JS, React, Python</p>
              <p className="text-[11px] text-slate-400">Laravel, Node, Tailwind, SQL</p>
            </div>

            <div className="p-4 rounded-xl bg-slateDark-900 border border-slate-800/80">
              <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase font-mono mb-2">
                <FolderGit2 className="w-4 h-4" />
                <span>Capstone</span>
              </div>
              <p className="text-xs font-semibold text-white">Autotrace ALPR</p>
              <p className="text-[11px] text-slate-400">Computer Vision &amp; Web Systems</p>
            </div>

            <div className="p-4 rounded-xl bg-slateDark-900 border border-slate-800/80">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase font-mono mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Certifications</span>
              </div>
              <p className="text-xs font-semibold text-white">Cybersecurity &amp; AWS</p>
              <p className="text-[11px] text-slate-400">4 Verified Training Modules</p>
            </div>

          </div>

          {/* Toggle In-Depth Details */}
          <div className="pt-2">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="text-xs font-semibold text-primary-400 hover:text-primary-300 inline-flex items-center gap-1.5 transition-colors mb-4"
            >
              <span>{showPreview ? '▲ Collapse CV Summary' : '▼ Expand Complete CV Breakdown on this Page'}</span>
            </button>

            {showPreview && (
              <div className="space-y-8 animate-fade-in pt-4 border-t border-slate-800">
                
                {/* Summary */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-primary-400 font-bold mb-2">
                    Career Profile
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Dedicated, analytical, and solutions-oriented 4th-Year BSIT Student at Angeles University Foundation with strong academic and practical foundations in full-stack web application development, database architecture, and systems engineering. Demonstrates a disciplined problem-solving approach, keen attention to detail, and a commitment to continuous learning. Seeking to leverage technical capabilities, clean coding standards, and information technology coursework in an entry-level IT or Software Engineering role.
                  </p>
                </div>

                {/* Skills Grid */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyanAccent-400 font-bold mb-3">
                    Technical Skills Matrix
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 bg-slateDark-900 rounded-xl border border-slate-800">
                      <strong className="text-slate-100 block mb-2 font-mono text-[11px] uppercase">Programming Languages</strong>
                      <p className="text-slate-400 leading-relaxed">PHP, JavaScript (ES6+), Python, Java, C#, SQL</p>
                    </div>

                    <div className="p-4 bg-slateDark-900 rounded-xl border border-slate-800">
                      <strong className="text-slate-100 block mb-2 font-mono text-[11px] uppercase">Web Technologies &amp; Frameworks</strong>
                      <p className="text-slate-400 leading-relaxed">HTML5, CSS3, Bootstrap 5, Tailwind CSS, React.js, Node.js, Laravel (MVC), RESTful APIs</p>
                    </div>

                    <div className="p-4 bg-slateDark-900 rounded-xl border border-slate-800">
                      <strong className="text-slate-100 block mb-2 font-mono text-[11px] uppercase">Databases &amp; Tools</strong>
                      <p className="text-slate-400 leading-relaxed">MySQL, MariaDB, PostgreSQL, Git / GitHub, XAMPP / Apache, Postman, VS Code</p>
                    </div>
                  </div>
                </div>

                {/* Achievements & Training */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3">
                    Achievements &amp; Training
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {achievementsData.map((ach) => (
                      <div key={ach.id} className="p-3.5 bg-slateDark-900 rounded-xl border border-slate-800">
                        <strong className="text-white block mb-1">{ach.title}</strong>
                        <p className="text-slate-400 text-[11px]">{ach.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hobbies & Interests */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold mb-3">
                    Hobbies &amp; Interests
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {hobbiesData.map((h, idx) => (
                      <div key={idx} className="p-3.5 bg-slateDark-900 rounded-xl border border-slate-800">
                        <strong className="text-white block mb-1">{h.title}</strong>
                        <p className="text-slate-400 text-[11px]">{h.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Footer Callout */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-cyanAccent-400 shrink-0" />
              <span>Full standalone printable CV sheet is available at <a href="./resume.html" target="_blank" className="text-cyanAccent-300 underline font-mono">./resume.html</a></span>
            </div>
            <a
              href="./resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono font-bold text-primary-300 hover:text-white flex items-center gap-1"
            >
              <span>Direct Link to CV</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
