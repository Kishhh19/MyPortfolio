import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export default function Dialog({ open, onClose, title, children, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!open) { if (dialog.open) dialog.close(); return; }
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    dialog.querySelector('input')?.focus();
    return () => { dialog.close(); document.body.style.overflow = previousOverflow; previousFocus?.focus(); };
  }, [open]);
  return <dialog ref={ref} className={`portfolio-dialog ${className}`} aria-label={title} onCancel={e => { e.preventDefault(); onClose(); }} onClick={e => { if (e.target === e.currentTarget) { const r = e.currentTarget.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) onClose(); } }}><button className="dialog-close icon-button" aria-label={`Close ${title}`} onClick={onClose}><X size={20}/></button>{open && children}</dialog>;
}
