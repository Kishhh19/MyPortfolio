import React, { useEffect, useState } from 'react';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import Dialog from './Dialog';

const storageKey = 'mark-portfolio-guestbook-v1';
function readNotes() {
  try {
    const notes = JSON.parse(localStorage.getItem(storageKey) || '[]');
    return Array.isArray(notes) ? notes.filter(note => typeof note?.name === 'string' && typeof note?.message === 'string' && Number.isFinite(note?.date) && note.date > 0 && note.date < 8640000000000000).slice(0, 30).map(note => ({ name: note.name.slice(0, 60), message: note.message.slice(0, 400), date: note.date })) : [];
  } catch { return []; }
}
export default function Guestbook({ open, onClose, t, language, onCount, notify }) {
  const [notes, setNotes] = useState(readNotes);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [saved, setSaved] = useState(false);
  useEffect(() => { onCount(notes.length); }, [notes, onCount]);
  const submit = event => {
    event.preventDefault();
    if (!name.trim() || !message.trim()) { setError(language === 'en' ? 'Please enter a name and a note.' : 'Ilagay ang iyong pangalan at tala.'); return; }
    const next = [{ name: name.trim(), message: message.trim(), date: Date.now() }, ...notes].slice(0, 30);
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
      setNotes(next); setName(''); setMessage(''); setError(''); setSaved(true); notify(t.saved);
    } catch { setError(t.storageError); }
  };
  return <Dialog open={open} onClose={onClose} title={t.guestbook} className="guestbook-dialog"><span className="section-index">A SMALL CORNER OF THE INTERNET</span><h2>{t.guestbook}<MessageSquare size={30}/></h2><p className="dialog-intro">{t.guestIntro}</p><p className="guestbook-notice">{t.localNote}</p><form className="guestbook-form" onSubmit={submit}><label>{t.name}<input required maxLength={60} autoComplete="name" value={name} onChange={e => setName(e.target.value)} placeholder="Alex"/></label><label>{t.note}<textarea required maxLength={400} rows={3} value={message} onChange={e => setMessage(e.target.value)} placeholder={t.guestIntro}/></label><div className="guestbook-form-bottom"><span>{message.length} / 400</span><button className="pill-button solid" type="submit">{t.post}<ArrowUpRight size={15}/></button></div>{error && <p className="form-error" role="alert">{error}</p>}{saved && <p className="fine-print" role="status">{t.saved}</p>}</form><div className="guestbook-notes">{notes.length ? notes.map((note, i) => <article key={`${note.date}-${i}`}><div className="note-avatar">{note.name.slice(0, 1).toUpperCase()}</div><div><header><strong>{note.name}</strong><time dateTime={new Date(note.date).toISOString()}>{new Date(note.date).toLocaleDateString(language === 'en' ? 'en-GB' : 'fil-PH', { month: 'short', day: 'numeric' })}</time></header><p>{note.message}</p></div></article>) : <div className="empty-guestbook"><MessageSquare size={28}/><p>{t.emptyBook}</p></div>}</div></Dialog>;
}
