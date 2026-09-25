import React, { useState } from 'react';
import { 
  Mail, 
  Phone,
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Github, 
  Linkedin, 
  MapPin, 
  Clock, 
  Copy, 
  Check,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { contactConfig, personalInfo } from '../data/portfolioData';

export default function Contact({ showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) newErrors.subject = 'Subject line is required.';
    if (!formData.message.trim()) {
      newErrors.message = 'Message content cannot be blank.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      showToast({
        type: 'error',
        title: 'Validation Error',
        message: 'Please review and fill in the highlighted required fields.'
      });
      return;
    }

    setSubmitting(true);

    try {
      if (contactConfig.formspreeEndpoint && contactConfig.formspreeEndpoint.startsWith('http')) {
        const response = await fetch(contactConfig.formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setSubmitted(true);
          showToast({
            type: 'success',
            title: 'Message Sent Successfully!',
            message: 'Thank you for reaching out. Mark will get back to you soon.'
          });
        } else {
          throw new Error('Formspree dispatch error');
        }
      } else {
        const mailtoUrl = `mailto:${encodeURIComponent(contactConfig.email)}?subject=${encodeURIComponent(formData.subject + ' - Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(formData.message + '\n\n---\nSender Email: ' + formData.email)}`;
        
        window.location.href = mailtoUrl;

        setSubmitted(true);
        showToast({
          type: 'success',
          title: 'Email Client Opened',
          message: `Your default email app was launched to send your message to ${contactConfig.email}.`
        });
      }
    } catch (err) {
      showToast({
        type: 'error',
        title: 'Transmission Failed',
        message: 'Could not send message automatically. Please email directly.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactConfig.email);
    setCopiedEmail(true);
    showToast({
      type: 'success',
      title: 'Email Address Copied',
      message: `${contactConfig.email} has been copied to your clipboard.`
    });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contactConfig.phone);
    setCopiedPhone(true);
    showToast({
      type: 'success',
      title: 'Phone Number Copied',
      message: `${contactConfig.phone} has been copied to your clipboard.`
    });
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-950 border border-brand-500/30 text-xs font-mono text-brand-400 mb-3">
            <span>08. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {contactConfig.headline}
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            {contactConfig.subtext}
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-dark-850 border border-slate-800 glass-card">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-lg bg-dark-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <h3 className="text-xs font-mono uppercase text-slate-400 font-bold mb-1">Email Address</h3>
              <a 
                href={`mailto:${contactConfig.email}`}
                className="text-sm sm:text-base font-mono font-semibold text-brand-300 hover:underline break-all"
              >
                {contactConfig.email}
              </a>
            </div>

            {/* Mobile Number Card */}
            <div className="p-6 rounded-2xl bg-dark-850 border border-slate-800 glass-card">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-accent-blue/10 border border-accent-blue/30 text-accent-blue">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="px-2.5 py-1 rounded-lg bg-dark-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <h3 className="text-xs font-mono uppercase text-slate-400 font-bold mb-1">Mobile Contact</h3>
              <a 
                href={`tel:${contactConfig.phone}`}
                className="text-base font-mono font-semibold text-white hover:text-accent-blue transition-colors"
              >
                {contactConfig.phone}
              </a>
              <span className="text-xs text-slate-400 block mt-0.5">Calls &amp; SMS Available</span>
            </div>

            {/* Location & Address Card */}
            <div className="p-6 rounded-2xl bg-dark-850 border border-slate-800 glass-card">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase text-slate-400 font-bold">Address &amp; Location</h3>
                  <p className="text-sm font-semibold text-white">
                    {contactConfig.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Profiles & Links Card */}
            <div className="p-6 rounded-2xl bg-dark-850 border border-slate-800 glass-card space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                Professional Profiles
              </h3>

              <div className="space-y-2.5">
                <a
                  href={contactConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-dark-900 border border-slate-800 hover:border-brand-500/40 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-accent-blue group-hover:text-white" />
                    <div>
                      <div className="text-xs font-bold text-white">LinkedIn Connection</div>
                      <div className="text-[11px] text-slate-400 font-mono">mark-laurence-s-032713294</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-brand-400 transition-colors" />
                </a>

                <a
                  href={contactConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-dark-900 border border-slate-800 hover:border-brand-500/40 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-slate-300 group-hover:text-white" />
                    <div>
                      <div className="text-xs font-bold text-white">GitHub Profile</div>
                      <div className="text-[11px] text-slate-400 font-mono">Source code &amp; repositories</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-brand-400 transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form with Validation */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-2xl bg-dark-850 border border-slate-700/80 shadow-2xl glass-card relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Thank You for Connecting!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been formatted and processed. Mark Laurence will respond to your provided email address promptly.
                  </p>
                  <button
                    onClick={resetForm}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit} 
                  noValidate 
                  name="contact" 
                  method="POST" 
                  data-netlify="true"
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                        Your Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: null });
                        }}
                        placeholder="e.g. Juan Dela Cruz"
                        className={`w-full px-4 py-3 rounded-xl bg-dark-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                          errors.name 
                            ? 'border-rose-500 focus:ring-rose-500/30' 
                            : 'border-slate-750 focus:border-brand-400 focus:ring-brand-400/20'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: null });
                        }}
                        placeholder="e.g. name@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-dark-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                          errors.email 
                            ? 'border-rose-500 focus:ring-rose-500/30' 
                            : 'border-slate-750 focus:border-brand-400 focus:ring-brand-400/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Subject / Purpose <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: null });
                      }}
                      placeholder="e.g. Internship Opportunity / Web Project Inquiry"
                      className={`w-full px-4 py-3 rounded-xl bg-dark-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                        errors.subject 
                          ? 'border-rose-500 focus:ring-rose-500/30' 
                          : 'border-slate-750 focus:border-brand-400 focus:ring-brand-400/20'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: null });
                      }}
                      placeholder="Write your message, project details, or inquiry here..."
                      className={`w-full px-4 py-3 rounded-xl bg-dark-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors resize-y ${
                        errors.message 
                          ? 'border-rose-500 focus:ring-rose-500/30' 
                          : 'border-slate-750 focus:border-brand-400 focus:ring-brand-400/20'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-400 to-brand-500 hover:from-brand-300 hover:to-brand-400 text-dark-900 font-bold text-sm shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 disabled:opacity-50 transition-all cursor-pointer"
                  >
                    {submitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 font-mono">
                    Zero local server required • Instant direct dispatch &amp; mailto fallback
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
