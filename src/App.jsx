import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight, ArrowDown, ArrowUp, Github, Linkedin, Download, Moon, Sun,
  Menu, X, Search, Check, Copy, Code2, Layers, ScanLine,
  GraduationCap, FolderOpen, FileText, MessageSquare, Volume2, VolumeX,
  Asterisk, CornerDownRight, RotateCcw, Terminal,
} from 'lucide-react';
import { personalInfo, skillCategories, achievementsData, educationData } from './data/portfolioData';
import { copy, projects, journey } from './data/siteContent';
import Dialog from './components/Dialog';
import SystemPreview from './components/SystemPreview';
import Guestbook from './components/Guestbook';
import DraggableBadge from './components/DraggableBadge';
import TypingCode from './components/TypingCode';

const ids = ['home', 'about', 'projects', 'journey', 'guestbook', 'contact'];
const asset = path => `${import.meta.env.BASE_URL}${path.replace(/^\.?\//, '')}`;
const readPreference = (key, fallback) => {
  try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
};

export default function App() {
  const [theme, setTheme] = useState(() => readPreference('mark-portfolio-theme', 'light'));
  const [language, setLanguage] = useState(() => readPreference('mark-portfolio-language', 'en') === 'fil' ? 'fil' : 'en');
  const [sound, setSound] = useState(false);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('home');
  const [modal, setModal] = useState(null);
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [query, setQuery] = useState('');
  const [toast, setToast] = useState('');
  const [now, setNow] = useState(new Date());
  const [badgeVersion, setBadgeVersion] = useState(0);
  const [progress, setProgress] = useState(0);
  const [guestCount, setGuestCount] = useState(0);
  const [greeting, setGreeting] = useState(0);
  const timer = useRef();
  const audio = useRef(null);
  const t = copy[language];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = language;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#fafafa' : '#111111');
    try {
      localStorage.setItem('mark-portfolio-theme', theme);
      localStorage.setItem('mark-portfolio-language', language);
    } catch { /* Preferences still work without storage. */ }
  }, [theme, language]);

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60000);
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? window.scrollY / height : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-15% 0px -60% 0px' });
    ids.filter(id => id !== 'guestbook').forEach(id => observer.observe(document.getElementById(id)));
    const reveal = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.classList.toggle('revealed', entry.isIntersecting));
    }, { threshold: 0.08, rootMargin: '0px 0px -25px 0px' });
    document.querySelectorAll('.reveal').forEach(element => reveal.observe(element));
    return () => { clearInterval(interval); window.removeEventListener('scroll', onScroll); observer.disconnect(); reveal.disconnect(); clearTimeout(timer.current); };
  }, []);

  useEffect(() => {
    const escape = e => { if (e.key === 'Escape') setMenu(false); };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, []);

  useEffect(() => {
    if (!sound) return;
    const play = event => {
      if (!event.target.closest('button, a, summary')) return;
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        if (!audio.current) audio.current = new AudioContext();
        const ctx = audio.current;
        ctx.resume().catch(() => {});
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(550, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(280, ctx.currentTime + 0.055);
        gain.gain.setValueAtTime(0.025, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);
        osc.connect(gain); gain.connect(ctx.destination);
        osc.start(); osc.stop(ctx.currentTime + 0.08);
      } catch { /* Audio is optional and never blocks navigation. */ }
    };
    document.addEventListener('click', play);
    return () => document.removeEventListener('click', play);
  }, [sound]);

  useEffect(() => () => { audio.current?.close().catch(() => {}); }, []);

  const notify = text => {
    setToast(text); clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(''), 4500);
  };
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(personalInfo.email); notify(t.copied); }
    catch { notify(personalInfo.email); }
  };
  const openProject = project => { setSelectedProject(project); setModal('project'); };
  const navigate = id => {
    setMenu(false);
    if (id === 'guestbook') { setModal('guestbook'); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    window.history.replaceState(null, '', `#${id}`);
  };
  const date = now.toLocaleDateString(language === 'en' ? 'en-GB' : 'fil-PH', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'Asia/Manila' });
  const filteredSkills = skillCategories.map(group => ({ ...group, skills: group.skills.filter(skill => `${skill.name} ${skill.description}`.toLowerCase().includes(query.toLowerCase())) })).filter(group => group.skills.length);

  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <div className="reading-progress" style={{ transform: `scaleX(${progress})` }}/>
    <header className="site-header">
      <div className="header-inner">
        <a href="#home" className="monogram" aria-label="Mark Santos home" onClick={() => setMenu(false)}><span>M</span><span>S</span></a>
        <nav className={menu ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
          {ids.map((id, i) => id === 'guestbook'
            ? <button key={id} onClick={() => navigate(id)}>{t.nav[i]}</button>
            : <a href={`#${id}`} aria-current={active === id ? 'location' : undefined} key={id} onClick={() => setMenu(false)}>{t.nav[i]}</a>)}
        </nav>
        <div className="header-tools">
          <button className="round-button sound-button" aria-label={sound ? 'Disable interface sounds' : 'Enable interface sounds'} aria-pressed={sound} onClick={() => setSound(!sound)}>{sound ? <Volume2 size={17}/> : <VolumeX size={17}/>}</button>
          <button className="round-button" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{theme === 'light' ? <Moon size={17}/> : <Sun size={17}/>}</button>
          <div className="language-switch" aria-label="Language"><button lang="en" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button><button lang="fil" aria-pressed={language === 'fil'} onClick={() => setLanguage('fil')}>FIL</button></div>
          <button className="round-button mobile-menu" aria-label="Toggle navigation" aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X size={20}/> : <Menu size={20}/>}</button>
        </div>
      </div>
    </header>

    <main id="main">
      <section id="home" className="hero">
        <div className="hero-stage">
          <div className="sticker-field" key={badgeVersion}>
            <DraggableBadge className="sticker-name" label="MARK ✦"/>
            <DraggableBadge className="sticker-role" label="WEB DEVELOPER"/>
            <DraggableBadge className="sticker-degree" label="INFORMATION TECHNOLOGY"/>
            <DraggableBadge className="sticker-system" label="SYSTEM BUILDER"/>
            <DraggableBadge className="sticker-code inverse" label={<Code2 size={26}/>} name="Code badge"/>
            <DraggableBadge className="sticker-star" label={<Asterisk size={30}/>} name="Star badge"/>
          </div>
          <p className="hero-detail">MARK LAURENCE M. SANTOS <span>PORTFOLIO / {now.getFullYear()}</span></p>
          <h1>MARK SANTOS</h1>
          <div className="hero-under"><TypingCode/><button className="reset-stickers" onClick={() => setBadgeVersion(v => v + 1)} title="Reset badge positions"><RotateCcw size={13}/><span>{t.drag}</span></button></div>
          <a href="#about" className="hero-discover" aria-label={t.scroll}><span>{t.scroll}</span><ArrowDown size={17}/></a>
        </div>
        <div className="hero-ticker"><span><i className="online-dot"/>{t.available}</span><span>{t.based}</span><span><strong>{t.today}:</strong> {date}</span><a href="#about">{t.scroll}<ArrowDown size={14}/></a></div>
      </section>

      <section id="about" className="section wrap">
        <div className="section-heading reveal"><h2>{t.about}</h2><span className="section-index">01 / THE INTRODUCTION</span></div>
        <div className="about-grid">
          <article className="bio-card reveal"><span className="hello-icon">✳</span><h3>{t.hello}</h3><p>{t.bio}</p><p>{t.bio2}</p><button className="pill-button solid" onClick={() => setModal('resume')}><Download size={15}/>{t.resume}</button></article>
          <div className="profile-card reveal"><div className="profile-art profile-gif-art"><img className="profile-gif" src={asset('images/profile/leonardo-watch.gif')} alt="Animated close-up of Leonardo Watch’s glowing blue eye" loading="lazy"/><span className="profile-coordinate">ANGELES CITY<br/>PAMPANGA, PH</span><span className="profile-caption">THE PERSON BEHIND THE CODE</span></div><div className="profile-bottom"><div><strong>Mark Laurence</strong><span><i className="online-dot"/>{t.student}</span></div><a href="#contact" aria-label={t.hire}>{t.hire}<ArrowUpRight size={16}/></a></div></div>
          <article className="education-card reveal"><div className="card-label"><GraduationCap size={18}/><span>{t.education}</span><span>2023 — PRESENT</span></div><h3>{personalInfo.university}</h3><div className="education-bottom"><div><h4>{t.degree}</h4><span>BACHELOR OF SCIENCE · FOURTH YEAR</span></div><span className="education-mark">BSIT<ArrowUpRight size={18}/></span></div><div className="coursework"><p>{t.coursework}</p><div>{educationData.coursework.slice(0, 5).map(course => <span key={course}>{course.replace(' (OOP)', '')}</span>)}</div></div></article>
          <article className="focus-card reveal"><Layers size={28}/><h3>{t.focus}</h3><p>{t.focusText}</p><div className="tags"><span>Full-stack systems</span><span>Database integration</span></div></article>
        </div>
        <div className="tech-heading reveal"><h3>{t.stack}<span>↗</span></h3><label className="search-field"><Search size={15}/><input aria-label={t.search} type="search" placeholder={t.search} value={query} onChange={e => setQuery(e.target.value)}/></label></div>
        <p className="skill-hint">{t.skillHint}</p>
        <div className="tech-grid">{filteredSkills.map((group, i) => <article className="tech-group" key={group.category}><div className="tech-group-title"><span>0{i+1}</span><h4>{group.category}</h4></div><div className="skill-list">{group.skills.map(skill => <details key={skill.name}><summary><Code2 size={16}/>{skill.name}</summary><p>{skill.description}</p></details>)}</div></article>)}{!filteredSkills.length && <p className="empty-state" role="status">{t.noSkills}</p>}</div>
        <div className="training-strip"><span>{t.training}</span><div>{achievementsData.map(item => <span key={item.id}><Check size={12}/>{item.title}</span>)}</div></div>
      </section>

      <section id="projects" className="projects-section"><div className="wrap section">
        <div className="section-heading reveal"><h2>{t.selected}<br/>{t.works}<span className="heading-star">✳</span></h2><p>{t.projectIntro}</p></div>
        {projects.map((project, index) => <article className={`project-row reveal ${index % 2 ? 'reverse' : ''}`} key={project.id}>
          <div className="project-info"><span className="outline-label">{project.category}</span><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle[language]}</p><p>{project.description[language]}</p><div className="project-facts">{project.facts.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><div className="tags">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div><div className="project-actions"><button className="pill-button white" onClick={() => openProject(project)}>{t.caseStudy}<ArrowUpRight size={15}/></button>{project.github && <a className="text-link" href={project.github} target="_blank" rel="noreferrer"><Github size={16}/>{t.repository}</a>}</div></div>
          <div className="project-visual">{project.id === 'autotrace' ? <><div className="preview-browser"><span/><span/><span/><div>autotrace / recognition pipeline</div><ScanLine size={14}/></div><SystemPreview language={language}/><button className="preview-open" onClick={() => openProject(project)}>{t.preview}<ArrowUpRight size={17}/></button></> : <button className="chat-preview" onClick={() => openProject(project)} aria-label={`${t.caseStudy}: ${project.title}`}><div className="chat-preview-header"><span><Terminal size={19}/> CONVERSATION / 01</span><span className="build-pill">{t.developing}</span></div><div className="chat-preview-body"><span className="chat-orbit">✳</span><h4>A little curiosity.<br/>A better conversation.</h4><div className="chat-message user-message">How do the pieces connect?</div><div className="chat-message assistant-message"><span className="mini-mark">m.</span><span>One interface. Clear feedback.<br/>Room for the next question.</span></div><div className="chat-input-preview"><span>Start with a question…</span><ArrowUp size={18}/></div><small>INTERFACE CONCEPT · PROJECT IN DEVELOPMENT</small></div></button>}</div>
        </article>)}
      </div></section>

      <section id="journey" className="section wrap"><div className="section-heading reveal"><h2>{t.journey}<span className="heading-star">↗</span></h2><p>{t.journeyIntro}</p></div><div className="timeline">{journey.map((item, index) => <article className="journey-row reveal" key={item.project}><div className="journey-period"><span>{item.period}</span><i/></div><div className="journey-copy"><span className="outline-label">{item.category[language]}</span><h3>{item.title[language]}</h3><h4>{item.organization}</h4><p>{item.description[language]}</p><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><button className="archive-folder" aria-label={`${t.openFolder}: ${item.title[language]}`} onClick={() => { if (item.project === 'education') setModal('education'); else openProject(projects.find(p => p.id === item.project)); }}><div className="folder-papers"><span><Code2 size={21}/><small>NOTES / 0{index+1}</small></span><span><FileText size={22}/></span></div><div className="folder-cover"><FolderOpen size={22}/><strong>{t.archive}</strong><span>{t.openFolder}<ArrowUpRight size={13}/></span></div></button></article>)}</div></section>

      <section id="contact" className="contact-section"><div className="wrap section contact-grid"><div className="contact-copy reveal"><span className="section-index">04 / THE NEXT CHAPTER</span><h2>{t.lets}<br/>{t.project}<span>↗</span></h2><p>{t.contactIntro}</p><div className="contact-email"><span className="field-label">{t.email}</span><div><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a><button aria-label="Copy email address" onClick={copyEmail}><Copy size={16}/></button></div></div><span className="field-label">{t.social}</span><div className="social-links"><a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={20}/><ArrowUpRight size={13}/></a><a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={20}/><ArrowUpRight size={13}/></a></div></div><ContactForm t={t} notify={notify}/></div></section>
    </main>

    <footer className="wrap footer"><div><a className="footer-wordmark" href="#home">MARK SANTOS<span>®</span></a><p>© {now.getFullYear()} {personalInfo.name}. {t.rights}</p></div><div><span>{t.based}</span><span><i className="online-dot"/>{t.remote}</span></div><a href="#home" className="round-button" aria-label={t.back}><ArrowUp size={18}/></a></footer>

    <button className="guestbook-trigger" onClick={() => setModal('guestbook')}><MessageSquare size={17}/>{t.guestbook}<span>{guestCount}</span></button>
    <div className="companion-playground">
      {[0, 1].map(index => <div className={`companion-walker walker-${index + 1}`} key={index}><button className={`code-companion companion-${index + 1}`} aria-label={`Say hello to Mark’s code companion ${index + 1}`} onClick={() => { setGreeting(i => (i+1)%t.greetings.length); notify(t.greetings[greeting]); }}><span className="companion-antenna"/><span className="companion-face"><i/><i/></span><span className="companion-feet"/></button></div>)}
    </div>
    <div className={`toast ${toast ? 'visible' : ''}`} role="status">{toast && <><Check size={16}/>{toast}</>}</div>

    <Dialog open={modal === 'project'} onClose={() => setModal(null)} title={selectedProject.title} className="case-dialog"><span className="section-index">CASE STUDY / {selectedProject.category}</span><h2>{selectedProject.title}</h2><p className="dialog-intro">{selectedProject.subtitle[language]}</p><div className="case-hero"><span>{selectedProject.id === 'autotrace' ? <ScanLine size={60}/> : <MessageSquare size={60}/>}</span><div><strong>{selectedProject.id === 'autotrace' ? 'CAPTURE → RECOGNIZE → VERIFY' : 'QUESTION → REQUEST → RESPONSE'}</strong><p>{selectedProject.stack.join(' / ')}</p></div></div><div className="case-content"><div><h3>{t.problem}</h3><p>{selectedProject.problem[language]}</p></div><div><h3>{t.solution}</h3><p>{selectedProject.solution[language]}</p></div><div><h3>{t.features}</h3><ul>{selectedProject.features[language].map(f => <li key={f}><CornerDownRight size={14}/>{f}</li>)}</ul></div><div><h3>{t.challenge}</h3><p>{selectedProject.challenge[language]}</p></div></div><div className="dialog-footer">{selectedProject.github ? <a className="pill-button solid" href={selectedProject.github} target="_blank" rel="noreferrer"><Github size={16}/>{t.repository}<ArrowUpRight size={14}/></a> : <span className="outline-label">{t.developing}</span>}<button className="text-link" onClick={() => setModal(null)}>{t.close}<X size={14}/></button></div></Dialog>
    <Dialog open={modal === 'resume' || modal === 'education'} onClose={() => setModal(null)} title={modal === 'education' ? t.education : t.resume}><span className="section-index">{modal === 'education' ? 'ACADEMIC ARCHIVE' : 'CURRICULUM VITAE'}</span><h2>{modal === 'education' ? t.education : personalInfo.name}</h2><p className="dialog-intro">{personalInfo.university} / BSIT</p><div className="resume-content"><h3>{t.degree}</h3><p>2023 — Present · {t.student}</p><h3>{t.coursework}</h3><div className="tags">{educationData.coursework.map(course => <span key={course}>{course}</span>)}</div><h3>{t.training}</h3><ul>{achievementsData.map(item => <li key={item.id}><Check size={14}/>{item.title}</li>)}</ul><h3>{t.selected} {t.works}</h3><p>Autotrace — Automated License Plate Recognition<br/>AI Web Chatbot — {t.developing}</p></div><a className="pill-button solid" href={asset('resume.html')} target="_blank" rel="noreferrer"><Download size={16}/>{t.resume}<ArrowUpRight size={14}/></a><p className="fine-print">{language === 'en' ? 'Opens the full résumé. Use Print to save a PDF.' : 'Bubuksan ang buong résumé. Gamitin ang Print para mag-save ng PDF.'}</p></Dialog>
    <Guestbook open={modal === 'guestbook'} onClose={() => setModal(null)} t={t} language={language} onCount={setGuestCount} notify={notify}/>
  </>;
}

function ContactForm({ t, notify }) {
  const [subject, setSubject] = useState('0');
  const submit = event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = `Name: ${form.get('name')}\nEmail: ${form.get('email')}\n\n${form.get('message')}`;
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(t.subjects[Number(subject)])}&body=${encodeURIComponent(body)}`;
    notify(t.emailNote);
  };
  return <form className="contact-form reveal" onSubmit={submit}><div className="form-row"><label>{t.name}<input name="name" autoComplete="name" required maxLength={100} placeholder="Alex Rivera"/></label><label>{t.yourEmail}<input type="email" name="email" autoComplete="email" required maxLength={254} placeholder="alex@example.com"/></label></div><label>{t.subject}<select value={subject} onChange={e => setSubject(e.target.value)}>{t.subjects.map((name, i) => <option value={i} key={i}>{name}</option>)}</select></label><label>{t.message}<textarea name="message" required maxLength={3000} rows={5} placeholder={t.messagePlaceholder}/></label><button className="send-button" type="submit">{t.send}<ArrowUpRight size={21}/></button><p className="fine-print">{t.emailNote}</p></form>;
}
