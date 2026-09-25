import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-brand-400 shrink-0" />,
  };

  const borders = {
    success: 'border-emerald-500/30 bg-emerald-950/90 text-emerald-100',
    error: 'border-rose-500/30 bg-rose-950/90 text-rose-100',
    info: 'border-brand-500/30 bg-dark-850/95 text-slate-100',
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 max-w-md w-full animate-slide-up shadow-2xl"
      role="status"
      aria-live="polite"
    >
      <div className={`flex items-start gap-3 p-4 rounded-xl border backdrop-blur-md ${borders[toast.type || 'info']}`}>
        {icons[toast.type || 'info']}
        <div className="flex-1 pr-2">
          {toast.title && <h4 className="font-semibold text-sm mb-0.5">{toast.title}</h4>}
          <p className="text-xs opacity-90 leading-relaxed">{toast.message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white transition-colors p-1"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
