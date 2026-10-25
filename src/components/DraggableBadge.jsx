import React, { useEffect, useRef, useState } from 'react';

export default function DraggableBadge({ className, label, name }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const drag = useRef(null);
  useEffect(() => {
    const reset = () => setPosition({ x: 0, y: 0 });
    window.addEventListener('resize', reset);
    return () => window.removeEventListener('resize', reset);
  }, []);
  function constrain(element, x, y) {
    const parent = element.parentElement;
    return {
      x: Math.max(-element.offsetLeft, Math.min(parent.clientWidth - element.offsetLeft - element.offsetWidth, x)),
      y: Math.max(-element.offsetTop, Math.min(parent.clientHeight - element.offsetTop - element.offsetHeight, y)),
    };
  }
  return <button className={`draggable-badge ${className}`} aria-label={`Move ${name || label}. Use arrow keys or drag.`} style={{ '--drag-x': `${position.x}px`, '--drag-y': `${position.y}px` }} onPointerDown={event => {
    if (event.button !== 0) return;
    drag.current = { clientX: event.clientX, clientY: event.clientY, ...position };
    event.currentTarget.setPointerCapture(event.pointerId);
  }} onPointerMove={event => {
    if (!drag.current) return;
    const start = drag.current;
    setPosition(constrain(event.currentTarget, start.x + event.clientX - start.clientX, start.y + event.clientY - start.clientY));
  }} onPointerUp={() => { drag.current = null; }} onPointerCancel={() => { drag.current = null; }} onLostPointerCapture={() => { drag.current = null; }} onKeyDown={event => {
    const direction = { ArrowLeft: [-12, 0], ArrowRight: [12, 0], ArrowUp: [0, -12], ArrowDown: [0, 12] }[event.key];
    if (direction) { event.preventDefault(); setPosition(constrain(event.currentTarget, position.x + direction[0], position.y + direction[1])); }
    if (event.key === 'Home') { event.preventDefault(); setPosition({ x: 0, y: 0 }); }
  }}>{label}</button>;
}
