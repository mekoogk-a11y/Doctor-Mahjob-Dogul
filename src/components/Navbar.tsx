import React, { useState } from 'react';
import {
  Search,
  Menu,
  X,
  Globe2,
  HelpCircle,
  Radio,
  BookOpen,
} from 'lucide-react';
import { Language, PageId } from '../types';
import { translations } from '../translations';
import { PWAInstallButton } from './PWAInstallButton';

interface Props {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenSearch: () => void;
  onOpenAskModal?: () => void;
  hasLiveEvent?: boolean;
}

export const Navbar: React.FC<Props> = ({
  currentPage,
  onNavigate,
  language,
  onLanguageChange,
  onOpenSearch,
  onOpenAskModal,
  hasLiveEvent = true,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const navItems: { id: PageId; label: string; icon?: React.ReactNode }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'learn', label: t.nav.learn },
    { id: 'about', label: t.nav.about },
    { id: 'non-muslims', label: t.nav.nonMuslims },
    { id: 'videos', label: t.nav.videos },
    { id: 'scholars', label: t.nav.scholars },
    { id: 'ask', label: t.nav.ask },
    { id: 'articles', label: t.nav.articles },
    {
      id: 'events',
      label: t.nav.events,
      icon: hasLiveEvent ? (
        <span className="inline-flex items-center gap-1 text-red-500 font-bold text-[10px] tracking-wider uppercase animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
          LIVE
        </span>
      ) : undefined,
    },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0E3A6C] text-white shadow-md border-b border-blue-900/60 backdrop-blur-md">
      {/* Top micro-bar for accessibility, PWA prompt, and Live announcement */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1.5 bg-[#092548] text-xs text-blue-200 border-b border-blue-900/40">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 font-medium">
            <Globe2 className="w-3.5 h-3.5 text-blue-300" />
            <span>Global Islamic Educational & Media Platform</span>
          </span>
          <span className="text-blue-400/60">•</span>
          <span className="text-emerald-300 font-semibold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Authentic Knowledge Verified by Scholars
          </span>
        </div>
        <div className="flex items-center gap-4">
          <PWAInstallButton language={language} />
          {hasLiveEvent && (
            <button
              onClick={() => handleNavClick('events')}
              className="flex items-center gap-1.5 text-xs font-semibold text-red-400 hover:text-red-300 transition"
            >
              <Radio className="w-3.5 h-3.5 animate-pulse text-red-400" />
              <span>Broadcast Studio Live Now</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 cursor-pointer select-none group"
            id="brand-logo"
          >
            {/* Modern geometric emblem */}
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1877F2] to-[#0A2647] p-2 flex items-center justify-center shadow-lg border border-blue-400/30 group-hover:border-blue-300 transition-all">
              <svg viewBox="0 0 40 40" className="w-full h-full text-white" fill="none">
                <rect x="4" y="4" width="32" height="32" rx="6" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                <path d="M20 6 L32 20 L20 34 L8 20 Z" stroke="#34D399" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M12 18 C15 15 25 15 28 18 M12 22 C15 25 25 25 28 22" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="20" cy="20" r="2.5" fill="#34D399" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white leading-tight">
                {t.appName}
              </span>
              <span className="text-xs font-semibold text-blue-200 tracking-wide">
                {t.withDr}
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1.5" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3 py-2 text-[13px] font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white bg-[#1877F2] shadow-sm font-semibold'
                      : 'text-blue-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.icon}
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Global Search Button */}
            <button
              id="search-trigger-btn"
              onClick={onOpenSearch}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-blue-100 hover:text-white transition-colors border border-white/10"
              title={t.common.searchPlaceholder}
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Language Selector: EN | العربية | ES */}
            <div
              className="flex items-center bg-[#092548] border border-blue-800/80 rounded-xl p-1 text-xs font-semibold text-blue-200"
              id="language-selector"
            >
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 rounded-md transition-all ${
                  language === 'en'
                    ? 'bg-[#1877F2] text-white shadow-xs'
                    : 'hover:text-white hover:bg-white/5'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <span className="text-blue-600 px-0.5 select-none">|</span>
              <button
                onClick={() => onLanguageChange('ar')}
                className={`px-2.5 py-1 rounded-md transition-all font-bold ${
                  language === 'ar'
                    ? 'bg-[#1877F2] text-white shadow-xs font-arabic'
                    : 'hover:text-white hover:bg-white/5'
                }`}
                title="التبديل إلى العربية (RTL)"
              >
                العربية
              </button>
              <span className="text-blue-600 px-0.5 select-none">|</span>
              <button
                onClick={() => onLanguageChange('es')}
                className={`px-2 py-1 rounded-md transition-all ${
                  language === 'es'
                    ? 'bg-[#1877F2] text-white shadow-xs'
                    : 'hover:text-white hover:bg-white/5'
                }`}
                title="Cambiar a Español"
              >
                ES
              </button>
            </div>

            {/* "Ask a Question" Prominent Button */}
            <button
              id="ask-question-nav-btn"
              onClick={() => {
                if (onOpenAskModal) {
                  onOpenAskModal();
                } else {
                  handleNavClick('ask');
                }
              }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 rounded-xl shadow-md transition-all border border-emerald-400/40"
            >
              <HelpCircle className="w-4 h-4" />
              <span>{t.nav.askButton}</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0A2647] border-t border-blue-900/80 px-4 pt-3 pb-6 space-y-1 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="pb-3 mb-2 border-b border-blue-800/60 flex items-center justify-between">
            <span className="text-xs font-semibold text-blue-300">
              {t.appShortName} • {language.toUpperCase()}
            </span>
            <PWAInstallButton language={language} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? 'bg-[#1877F2] text-white font-bold'
                      : 'text-blue-100 hover:bg-white/10'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.icon}
                </button>
              );
            })}
          </div>

          <div className="pt-3 mt-2 border-t border-blue-800/60 flex gap-2">
            <button
              onClick={() => {
                handleNavClick('ask');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm bg-emerald-600 text-white hover:bg-emerald-500 transition shadow-md"
            >
              <HelpCircle className="w-4 h-4" />
              <span>{t.nav.askButton}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
