import React from 'react';
import { 
  Globe, 
  Layers, 
  Database, 
  Cpu, 
  Layout, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { servicesData } from '../data/portfolioData';

const iconMap = {
  Globe: <Globe className="w-6 h-6 text-primary-400" />,
  Layers: <Layers className="w-6 h-6 text-cyanAccent-400" />,
  Database: <Database className="w-6 h-6 text-purple-400" />,
  Cpu: <Cpu className="w-6 h-6 text-emerald-400" />,
  Layout: <Layout className="w-6 h-6 text-amber-400" />,
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 relative border-y border-slate-800/60 bg-slateDark-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full gradient-badge text-xs font-mono text-primary-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyanAccent-400" />
            <span>06. TECHNICAL SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Developer Capabilities &amp; Solutions
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            Core full-stack engineering, system design, and frontend implementation services tailored for modern web applications, internships, and technical projects.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className="p-7 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between"
            >
              <div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 w-fit mb-5">
                  {iconMap[service.icon]}
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                  {service.title}
                </h3>
                <p className="text-xs font-mono text-cyanAccent-400 mb-4">
                  {service.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                  {service.description}
                </p>

                {/* Capabilities List */}
                <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                  {service.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-primary-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Production Standard</span>
                <span className="text-emerald-400 font-semibold">Available</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
