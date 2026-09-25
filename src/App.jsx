import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Education from './components/Education';
import Experience from './components/Experience';
import Services from './components/Services';
import ResumeSection from './components/ResumeSection';
import ResumeModal from './components/ResumeModal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (toastData) => {
    setToast(toastData);
  };

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  return (
    <div className="min-h-screen bg-slateDark-950 text-slate-100 flex flex-col selection:bg-primary-500/30 selection:text-cyanAccent-300">
      
      {/* Sticky Navigation Bar */}
      <Navbar onResumeClick={handleOpenResume} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onResumeClick={handleOpenResume} showToast={showToast} />
        <About />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Education />
        <Experience />
        <Services />
        <ResumeSection onOpenResumeModal={handleOpenResume} showToast={showToast} />
        <Contact showToast={showToast} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Interactive Official Executive CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* User Feedback Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

    </div>
  );
}
