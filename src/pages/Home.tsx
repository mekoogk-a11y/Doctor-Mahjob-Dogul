import React from 'react';
import {
  BookOpen,
  Video,
  HelpCircle,
  Users,
  Compass,
  ArrowRight,
  Play,
  CheckCircle,
  Globe,
  Radio,
  ShieldCheck,
  Award,
  Sparkles,
  Search,
} from 'lucide-react';
import { Language, PageId, VideoItem } from '../types';
import { translations } from '../translations';
import {
  quickTopicsData,
  videosData,
  scholarsData,
  questionsFaqData,
  articlesData,
  drMahjobProfile,
} from '../data/platformData';

interface Props {
  language: Language;
  onNavigate: (page: PageId, targetId?: string) => void;
  onOpenVideo: (video: VideoItem) => void;
  onOpenAskModal: () => void;
  onOpenSearch: () => void;
}

export const Home: React.FC<Props> = ({
  language,
  onNavigate,
  onOpenVideo,
  onOpenAskModal,
  onOpenSearch,
}) => {
  const t = translations[language];
  const featuredVideo = videosData.find((v) => v.featured) || videosData[0];
  const previewScholars = scholarsData.slice(0, 3);
  const previewQuestions = questionsFaqData.slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0E3A6C] via-[#0A2647] to-[#081F3B] text-white pt-12 sm:pt-16 pb-20 sm:pb-28">
        {/* Subtle geometric background motif */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="hero-lattice" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="30" cy="30" r="14" fill="none" stroke="currentColor" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-lattice)" />
          </svg>
        </div>

        {/* Ambient glow accent */}
        <div className="absolute top-1/4 start-1/2 -translate-x-1/2 w-96 h-96 bg-[#1877F2]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-blue-200 border border-white/15 text-xs font-semibold backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Hero Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              {t.appName}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-sky-100 to-emerald-300 block sm:inline">
                {t.withDr}
              </span>
            </h1>

            {/* Subtitle / Mission */}
            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed font-normal max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>

            {/* 4 Call to Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4">
              <button
                id="hero-start-learning-btn"
                onClick={() => onNavigate('learn')}
                className="px-6 py-3.5 rounded-xl bg-[#1877F2] hover:bg-[#166FE5] active:scale-95 text-white font-bold text-sm shadow-xl shadow-blue-900/30 transition-all flex items-center gap-2 border border-blue-400/30"
              >
                <BookOpen className="w-4 h-4" />
                <span>{t.hero.startLearning}</span>
              </button>

              <button
                id="hero-explore-islam-btn"
                onClick={() => onNavigate('non-muslims')}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold text-sm backdrop-blur-xs border border-white/20 transition-all flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-emerald-300" />
                <span>{t.hero.exploreIslam}</span>
              </button>

              <button
                id="hero-watch-lectures-btn"
                onClick={() => onNavigate('videos')}
                className="px-5 py-3.5 rounded-xl bg-[#092548] hover:bg-white/10 active:scale-95 text-blue-100 font-semibold text-sm border border-blue-800/80 transition-all flex items-center gap-2"
              >
                <Video className="w-4 h-4 text-rose-400" />
                <span>{t.hero.watchLectures}</span>
              </button>

              <button
                id="hero-ask-question-btn"
                onClick={onOpenAskModal}
                className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-sm shadow-lg shadow-emerald-950/20 transition-all flex items-center gap-2 border border-emerald-400/30"
              >
                <HelpCircle className="w-4 h-4" />
                <span>{t.hero.askQuestion}</span>
              </button>
            </div>

            {/* Quick search bar shortcut */}
            <div className="pt-6 max-w-xl mx-auto">
              <button
                onClick={onOpenSearch}
                className="w-full flex items-center justify-between px-4 py-3 bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 text-blue-200 text-xs sm:text-sm transition group"
              >
                <div className="flex items-center gap-2.5">
                  <Search className="w-4 h-4 text-blue-300" />
                  <span>Search across lessons, videos, articles, and questions...</span>
                </div>
                <kbd className="hidden sm:inline-block px-2 py-0.5 rounded bg-black/30 text-[10px] font-mono text-blue-300 border border-white/10">
                  Global Search
                </kbd>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK TOPIC CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 relative z-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {quickTopicsData.map((topic) => (
            <div
              key={topic.id}
              onClick={() => onNavigate('learn')}
              className="group bg-white rounded-2xl p-4 sm:p-5 shadow-lg hover:shadow-xl border border-slate-200 hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white transition-colors flex items-center justify-center font-bold text-lg mb-3 shadow-2xs">
                  {topic.id === 'pillars' && '☪'}
                  {topic.id === 'quran' && '📖'}
                  {topic.id === 'sunnah' && '📜'}
                  {topic.id === 'ethics' && '⚖'}
                  {topic.id === 'contemporary' && '🌐'}
                </div>
                <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#1877F2] transition">
                  {topic.title[language] || topic.title.en}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {topic.description[language] || topic.description.en}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 mt-2 border-t border-slate-100 text-[11px] font-semibold text-slate-400 group-hover:text-[#1877F2]">
                <span>{topic.lessonCount} Modules</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED VIDEO LECTURE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A2647] rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-blue-900 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Video metadata and prompt */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold border border-rose-500/30">
                <Video className="w-3.5 h-3.5" />
                <span>Featured Lecture</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                {featuredVideo.title[language] || featuredVideo.title.en}
              </h2>
              <p className="text-sm text-blue-200 leading-relaxed">
                {featuredVideo.description[language] || featuredVideo.description.en}
              </p>
              <div className="flex items-center gap-4 text-xs text-blue-300 font-medium pt-2">
                <span>Speaker: <strong className="text-white">{featuredVideo.speaker}</strong></span>
                <span>•</span>
                <span>Duration: <strong className="text-white">{featuredVideo.duration}</strong></span>
              </div>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenVideo(featuredVideo)}
                  className="px-6 py-3 rounded-xl bg-[#1877F2] hover:bg-[#166FE5] text-white font-bold text-xs flex items-center gap-2 shadow-lg transition active:scale-95"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Play Lecture</span>
                </button>
                <button
                  onClick={() => onNavigate('videos')}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/10 transition"
                >
                  View All Lectures
                </button>
              </div>
            </div>

            {/* Video Mock Player Visual */}
            <div className="lg:col-span-7">
              <div
                onClick={() => onOpenVideo(featuredVideo)}
                className={`relative aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-2xl border border-blue-700/50 group bg-gradient-to-tr ${featuredVideo.thumbnailGradient}`}
              >
                {/* Play Button Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md group-hover:scale-110 group-hover:bg-[#1877F2] text-white flex items-center justify-center shadow-2xl transition duration-300 border border-white/30">
                    <Play className="w-8 h-8 fill-current ms-1" />
                  </div>
                </div>

                <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between text-xs text-white bg-black/50 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-white/10">
                  <span className="font-semibold truncate">{featuredVideo.speaker}</span>
                  <span className="font-mono bg-blue-600/80 px-2 py-0.5 rounded text-[11px]">
                    {featuredVideo.duration}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT DR. MAHJOB DOGUL SUMMARY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Scholar Portrait Placeholder */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl bg-gradient-to-br from-[#0E3A6C] to-[#1877F2] p-1 shadow-xl flex items-center justify-center">
                <div className="w-full h-full bg-[#0A2647] rounded-xl overflow-hidden flex flex-col items-center justify-center p-6 text-center text-white relative">
                  <div className="w-24 h-24 rounded-full bg-blue-600/40 border-2 border-blue-400/40 flex items-center justify-center text-3xl font-black mb-3">
                    MD
                  </div>
                  <h3 className="font-extrabold text-lg text-white">
                    {drMahjobProfile.fullName[language] || drMahjobProfile.fullName.en}
                  </h3>
                  <p className="text-xs text-blue-200 mt-1">
                    {drMahjobProfile.title[language] || drMahjobProfile.title.en}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold border border-emerald-400/30">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Islamic Scholar</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scholar Mission & Credentials */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1877F2] text-xs font-bold border border-blue-100">
                <Award className="w-3.5 h-3.5" />
                <span>Scholar Profile & Educational Mission</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Dedicated to Authentic Knowledge, Universal Compassion & Global Understanding
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {drMahjobProfile.summary[language] || drMahjobProfile.summary.en}
              </p>

              {/* Verified Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle className="w-4 h-4 text-[#1877F2] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Methodological Rigor
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Rooted in verified classical references and balanced contemporary jurisprudence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Open Educational Outreach
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Accessible to learners worldwide regardless of background or previous exposure.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#1877F2] hover:text-[#166FE5] group"
                >
                  <span>Read Full Scholarly Biography & Credentials</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GUEST SCHOLARS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1877F2] mb-1">
              <Users className="w-3.5 h-3.5" />
              <span>International Advisory & Dialogue</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              {t.homeSections.scholarsTitle}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('scholars')}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#1877F2] hover:underline"
          >
            <span>{t.homeSections.viewAllScholars}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewScholars.map((scholar) => (
            <div
              key={scholar.id}
              onClick={() => onNavigate('scholars')}
              className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-md transition cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#1877F2] font-bold text-base flex items-center justify-center">
                    {scholar.name.en.split(' ')[1]?.[0] || 'S'}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">
                      {scholar.name[language] || scholar.name.en}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {scholar.title[language] || scholar.title.en}
                    </p>
                  </div>
                </div>

                <div className="text-xs text-slate-600 line-clamp-3 mb-3">
                  {scholar.bio[language] || scholar.bio.en}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="px-2 py-0.5 rounded-full bg-blue-50 text-[#1877F2] font-semibold text-[11px]">
                  {scholar.country[language] || scholar.country.en}
                </span>
                <span className="text-slate-400 font-medium text-[11px]">
                  {scholar.lecturesCount} Lectures
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ISLAMIC Q&A PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                Authentic Guidance Desk
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                {t.homeSections.askQuickTitle}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenAskModal}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-sm transition"
              >
                {t.nav.askButton}
              </button>
              <button
                onClick={() => onNavigate('ask')}
                className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-semibold text-xs transition"
              >
                View Library
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {previewQuestions.map((item) => (
              <div
                key={item.id}
                onClick={() => onNavigate('ask', item.id)}
                className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-xs transition cursor-pointer"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {item.category}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Verified Answer
                  </span>
                </div>
                <h3 className="font-bold text-sm text-slate-900 hover:text-[#1877F2] transition line-clamp-2 mb-2">
                  {item.question[language] || item.question.en}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {item.answer[language] || item.answer.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GLOBAL COMMUNITY & IMPACT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1877F2] uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5" />
            <span>Worldwide Reach & Education</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            {t.homeSections.globalCommunityTitle}
          </h2>
          <p className="text-sm text-slate-600">
            {t.homeSections.globalCommunityDesc}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { metric: '100+', label: 'Countries Reached', sub: 'Multilingual learners' },
            { metric: '10,000+', label: 'Questions Answered', sub: 'Scholarly desk' },
            { metric: '100%', label: 'Scholarly Verified', sub: 'Classical sources' },
            { metric: '3 Languages', label: 'Global Accessibility', sub: 'EN, AR, ES' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 text-center border border-slate-200 shadow-2xs"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#1877F2] mb-1">
                {stat.metric}
              </div>
              <div className="text-xs font-bold text-slate-900">{stat.label}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
