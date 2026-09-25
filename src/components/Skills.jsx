import React, { useState } from 'react';
import { 
  Terminal, 
  Code, 
  Globe, 
  Database, 
  Cpu, 
  Check, 
  Layers, 
  ShieldCheck, 
  Network, 
  Server,
  Cloud,
  Sparkles
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = {
  "Programming": <Terminal className="w-5 h-5 text-primary-400" />,
  "Web Development": <Globe className="w-5 h-5 text-cyanAccent-400" />,
  "Databases": <Database className="w-5 h-5 text-purple-400" />,
  "Other Technical Skills": <Cpu className="w-5 h-5 text-emerald-400" />,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCategories = selectedCategory === 'All' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.category === selectedCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative border-y border-slate-800/60 bg-slateDark-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full gradient-badge text-xs font-mono text-primary-300 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyanAccent-400" />
              <span>02. TECHNICAL SKILLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Categorized Competencies &amp; Tooling
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl text-base">
              Organized by domain with real academic foundation and practical application. No arbitrary percentage ratings—only concrete, tested capabilities.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'All'
                  ? 'bg-gradient-to-r from-primary-500 to-cyanAccent-500 text-white shadow-md shadow-primary-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(cat.category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat.category
                    ? 'bg-gradient-to-r from-primary-500 to-cyanAccent-500 text-white shadow-md shadow-primary-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((cat) => (
            <div 
              key={cat.category}
              className="p-6 sm:p-8 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700/80 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  {categoryIcons[cat.category] || <Code className="w-5 h-5 text-primary-400" />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skills Badges & Detail List */}
              <div className="mt-6 space-y-3">
                {cat.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="p-3.5 rounded-xl bg-slateDark-900/80 border border-slate-800/80 hover:border-primary-500/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-cyanAccent-400"></div>
                      <span className="font-semibold text-sm text-slate-100 font-mono">
                        {skill.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-400 hidden sm:inline font-sans">
                        {skill.description}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-primary-300 border border-slate-700/80 shrink-0">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning & Quality Assurance Callout */}
        <div className="mt-8 p-5 rounded-2xl glass-panel border border-primary-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/30 flex items-center justify-center text-primary-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <p className="text-xs text-slate-300">
              <strong className="text-white">Software Quality Assurance &amp; Integrity:</strong> Committed to building well-tested, responsive, and secure software applications in compliance with academic and industry standards.
            </p>
          </div>
          <span className="text-[11px] font-mono text-cyanAccent-400 shrink-0">
            BSIT Continuous Learning
          </span>
        </div>

      </div>
    </section>
  );
}
