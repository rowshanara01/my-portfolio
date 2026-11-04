import React, { useState, useEffect } from 'react';
import { Mail, Phone, MessageSquare, Send, Check, Copy, ExternalLink, Github, Linkedin, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const profile = PORTFOLIO_DATA.profile;

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaChallenge, setCaptchaChallenge] = useState({ a: 10, b: 12, ans: 22 });
  const [captchaError, setCaptchaError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Generate math captcha
  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 15) + 5;
    const b = Math.floor(Math.random() * 15) + 3;
    setCaptchaChallenge({ a, b, ans: a + b });
    setCaptchaInput('');
    setCaptchaError(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(captchaInput.trim(), 10) !== captchaChallenge.ans) {
      setCaptchaError(true);
      return;
    }

    setCaptchaError(false);
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 }
      });
    }, 800);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-3 sm:px-4 py-6 scroll-mt-24 animate-entrance">
      <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-lg hover:shadow-xl transition-shadow">
        
        {/* Header with dashed line */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-slate-900 dark:bg-emerald-400"></span>
            Get In Touch
          </span>
          <div className="flex-1 border-b border-dashed border-slate-200 dark:border-zinc-800"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Methods & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                Whether you have an upcoming full-stack web application, want to integrate LLMs & AI Agents into your platform, or need a scalable SaaS architecture, let's connect!
              </p>

              {/* Email Pill */}
              <div className="mb-3">
                <div className="flex items-center justify-between p-3.5 rounded-full border border-slate-200 dark:border-zinc-800 bg-slate-50/70 dark:bg-zinc-800/40 hover:border-slate-300 dark:hover:border-zinc-700 transition-colors">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors truncate"
                  >
                    <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 ml-1" />
                    <span className="truncate">{profile.email}</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer mr-1"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Phone / WhatsApp Pills */}
              <div className="space-y-2.5 mb-6">
                {profile.phones.map((phone, pIdx) => {
                  const rawNum = phone.replace(/\s+/g, '');
                  return (
                    <a
                      key={pIdx}
                      href={`https://wa.me/${rawNum.replace('+', '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-full border border-slate-200 dark:border-zinc-800 bg-slate-50/70 dark:bg-zinc-800/40 hover:border-emerald-300 dark:hover:border-emerald-800 transition-colors group"
                    >
                      <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 ml-1">
                          <Phone className="w-4 h-4" />
                          <MessageCircle className="w-4 h-4" />
                        </div>
                        <span>{phone}</span>
                      </div>
                      <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 mr-2 flex items-center gap-1">
                        WhatsApp <ExternalLink className="w-3 h-3" />
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* Social Buttons Row */}
              <div className="flex items-center gap-2.5 pt-2">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-full border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/80 flex items-center justify-center text-slate-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-300 dark:hover:border-emerald-800 transition-all hover:scale-105"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-full border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/80 flex items-center justify-center text-slate-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-300 dark:hover:border-emerald-800 transition-all hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Send direct email"
                  className="w-10 h-10 rounded-full border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/80 flex items-center justify-center text-slate-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-300 dark:hover:border-emerald-800 transition-all hover:scale-105"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="text-xs text-slate-400 dark:text-zinc-500 pt-6">
              📍 Based in Dhaka, Bangladesh (UTC+6) · Available for global remote contracts and full-time roles.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/70 dark:bg-emerald-950/30 p-8 text-center animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Thank You, {name || 'Friend'}!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 max-w-md mx-auto mb-6">
                  Your message has been dispatched directly. Rowshanara will reply to your email (<span className="font-semibold text-emerald-700 dark:text-emerald-400">{email}</span>) shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                    generateCaptcha();
                  }}
                  className="px-5 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold hover:opacity-90 transition-opacity"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-800/80 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-800/80 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project, timeline, and tech requirements..."
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-800/80 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
                  />
                </div>

                {/* Math Captcha matching frame 008 & 010 */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1.5">
                    Verify you are human: {captchaChallenge.a} + {captchaChallenge.b} = ?
                  </label>
                  <input
                    type="number"
                    required
                    value={captchaInput}
                    onChange={(e) => {
                      setCaptchaInput(e.target.value);
                      setCaptchaError(false);
                    }}
                    placeholder="Enter the answer"
                    className={`w-full px-4 py-2.5 rounded-2xl border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      captchaError
                        ? 'border-red-400 ring-2 ring-red-400/50 bg-red-50/30'
                        : 'border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-800/80 focus:ring-emerald-500'
                    }`}
                  />
                  {captchaError && (
                    <p className="text-[11px] text-red-500 mt-1">
                      Incorrect answer. Please solve {captchaChallenge.a} + {captchaChallenge.b} to submit.
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-sm flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-block animate-spin mr-1">◌</span>
                    ) : (
                      <Send className="w-4 h-4 ml-0.5" />
                    )}
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
