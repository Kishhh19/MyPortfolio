import React, { useEffect, useState } from 'react';

const snippet = "const developer = { name: 'Mark Laurence Santos', location: 'Philippines', focus: ['web', 'systems', 'databases'] };\nfunction build(idea) { return curiosity + thoughtfulCode + iteration; }";

export default function TypingCode() {
  const [text, setText] = useState('');

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer;
    let index = 0;
    let deleting = false;
    const tick = () => {
      index += deleting ? -1 : 1;
      setText(snippet.slice(0, index));
      let delay = deleting ? 14 : 36;
      if (index === snippet.length) { deleting = true; delay = 2200; }
      if (index === 0) { deleting = false; delay = 650; }
      timer = setTimeout(tick, delay);
    };
    const restart = () => {
      clearTimeout(timer);
      index = 0;
      deleting = false;
      setText(motion.matches ? snippet : '');
      if (!motion.matches) timer = setTimeout(tick, 450);
    };
    restart();
    motion.addEventListener('change', restart);
    return () => { clearTimeout(timer); motion.removeEventListener('change', restart); };
  }, []);

  return <p className="code-poem" aria-hidden="true"><span className="code-layout">{snippet}</span><span className="code-typing">{text}<span className="typing-cursor"/></span></p>;
}
