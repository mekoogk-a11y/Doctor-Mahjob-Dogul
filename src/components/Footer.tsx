import React, { useState } from 'react';
import { Mail, CheckCircle2, Globe2, BookOpen, ShieldCheck, Heart } from 'lucide-react';
import { Language, PageId } from '../types';
import { translations } from '../translations';

interface Props {
  language: Language;
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<Props> = ({ language, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const t = translations[language];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A2240] text-white border-t border-blue-900/60 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Islamic geometric background lattice */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-islamic-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="40" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
              <rect x="25" y="25" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(45 40 40)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-islamic-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Newsletter & Global Banner */}
        <div className="bg-gradient-to-r from-[#0E3A6C] to-[#124B88] rounded-2xl p-6 sm:p-8 mb-16 border border-blue-800/80 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center lg:text-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-3 border border-blue-400/30">
                <Globe2 className="w-3.5 h-3.5" />
                <span>{t.homeSections.globalCommunityTitle}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                {t.footer.stayConnected}
              </h3>
              <p className="text-sm text-blue-200">
                {t.footer.newsletterDesc}
              </p>
            </div>

            {/* Subscription Form */}
            <div className="w-full lg:w-auto">
              {subscribed ? (
                <div className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-900/60 border border-emerald-500/40 text-emerald-200 text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>{t.footer.subscribedSuccess}</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 w-full max-w-md">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-blue-300 absolute start-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.footer.enterEmail}
                      className="w-full ps-10 pe-4 py-2.5 rounded-xl bg-black/30 border border-blue-400/30 text-white placeholder-blue-300/60 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#1877F2] transition"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[#1877F2] hover:bg-[#166FE5] active:scale-95 text-white font-bold text-sm shadow-md transition whitespace-nowrap"
                  >
                    {t.footer.subscribe}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Four Main Link Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-blue-900/60">
          {/* Brand Presentation Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#1877F2] flex items-center justify-center text-white font-black text-sm shadow-md">
                LI
              </div>
              <div>
                <span className="font-extrabold text-lg text-white block">
                  {t.appName}
                </span>
                <span className="text-xs text-blue-300 font-medium">
                  {t.withDr}
                </span>
              </div>
            </div>
            <p className="text-sm text-blue-200/80 leading-relaxed max-w-sm">
              {t.supportingText}
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Authentic, Responsible Islamic Scholarship</span>
            </div>
          </div>

          {/* Column 1: Learn */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-4">
              {t.footer.learnCol}
            </h4>
            <ul className="space-y-2.5 text-sm text-blue-100">
              <li>
                <button
                  onClick={() => handleLinkClick('learn')}
                  className="hover:text-white transition"
                >
                  Islam 101
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('learn')}
                  className="hover:text-white transition"
                >
                  Quran
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('learn')}
                  className="hover:text-white transition"
                >
                  Prayer
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('non-muslims')}
                  className="hover:text-white transition"
                >
                  Islam for Beginners
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('learn')}
                  className="hover:text-white transition"
                >
                  Ethics & Family
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Discover */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-4">
              {t.footer.discoverCol}
            </h4>
            <ul className="space-y-2.5 text-sm text-blue-100">
              <li>
                <button
                  onClick={() => handleLinkClick('videos')}
                  className="hover:text-white transition"
                >
                  Videos & Lectures
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('articles')}
                  className="hover:text-white transition"
                >
                  Articles & Essays
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('events')}
                  className="hover:text-white transition"
                >
                  Events & Live
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('ask')}
                  className="hover:text-white transition"
                >
                  Questions & Answers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('scholars')}
                  className="hover:text-white transition"
                >
                  Global Scholars
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: About & Outreach */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-4">
              {t.footer.aboutCol}
            </h4>
            <ul className="space-y-2.5 text-sm text-blue-100">
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-white transition"
                >
                  Dr. Mahjob Dogul
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-white transition"
                >
                  Vision & Mission
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-white transition"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-white transition"
                >
                  Partnership
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-white transition"
                >
                  Volunteer Program
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Mandatory Design / Copyright Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300/80">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span className="font-semibold text-white">
              {t.footer.designerCredit}
            </span>
            <span className="hidden sm:inline text-blue-600">•</span>
            <span>
              {t.footer.copyright}
            </span>
          </div>

          <div className="flex items-center gap-4 text-blue-200">
            <button
              onClick={() => handleLinkClick('about')}
              className="hover:text-white transition"
            >
              Editorial Standards
            </button>
            <span>•</span>
            <button
              onClick={() => handleLinkClick('ask')}
              className="hover:text-white transition"
            >
              Scholarly Verification
            </button>
            <span>•</span>
            <button
              onClick={() => handleLinkClick('contact')}
              className="hover:text-white transition"
            >
              Privacy & Legal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
