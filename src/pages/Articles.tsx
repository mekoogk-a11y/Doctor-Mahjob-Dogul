import React, { useState, useMemo } from 'react';
import {
  FileText,
  Search,
  Clock,
  User,
  Calendar,
  Sparkles,
  ArrowRight,
  BookOpen,
  Tag,
} from 'lucide-react';
import { Language, PageId, ArticleItem } from '../types';
import { articlesData } from '../data/platformData';
import { translations } from '../translations';

interface Props {
  language: Language;
  onNavigate: (page: PageId, targetId?: string) => void;
  onOpenFeaturedArticle: () => void;
}

export const Articles: React.FC<Props> = ({
  language,
  onNavigate,
  onOpenFeaturedArticle,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const t = translations[language];

  const categories = [
    { id: 'all', label: t.common.all },
    { id: 'Dawah', label: 'Dawah & Outreach' },
    { id: 'Spirituality', label: 'Spirituality & Heart' },
    { id: 'Knowledge', label: 'Classical Knowledge' },
    { id: 'Family', label: 'Family & Parenting' },
    { id: 'Dialogue', label: 'Interfaith Dialogue' },
  ];

  const filteredArticles = useMemo(() => {
    return articlesData.filter((art) => {
      const matchCat =
        selectedCategory === 'all' || art.category.toLowerCase() === selectedCategory.toLowerCase();
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        (art.title[language] || art.title.en).toLowerCase().includes(q) ||
        (art.excerpt[language] || art.excerpt.en).toLowerCase().includes(q) ||
        art.author.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery, language]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-[#0E3A6C] via-[#0A2647] to-[#0E3A6C] rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-blue-900">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-semibold border border-blue-400/30">
            <FileText className="w-3.5 h-3.5" />
            <span>Scholarly Research & Essays</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            {t.nav.articles}
          </h1>
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal">
            Reflective essays, jurisprudential insights, and academic analyses penned by Dr. Mahjob Dogul, guest scholars, and researchers in contemporary Islamic studies.
          </p>
        </div>
      </div>

      {/* 2. Top Lead Featured Article: Muslims in America */}
      <div
        onClick={onOpenFeaturedArticle}
        className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/30 hover:border-emerald-500 shadow-xl transition-all cursor-pointer group"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Article Image Preview */}
          <div className="lg:col-span-5 relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
            <img
              src="/dr_dagal_alaska.jpg"
              alt="Muslims in America and Their Role in Sharing the Message of Islam"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="absolute top-3 start-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-bold border border-white/20 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Featured Major Publication
            </div>
          </div>

          {/* Article text and metadata */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                Dawah & Islamic Education
              </span>
              <span className="text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                5 min read
              </span>
              <span className="text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                September 2026
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-[#1877F2] transition leading-snug">
              Muslims in America and Their Role in Sharing the Message of Islam
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
              Discovering the role of Muslims in America in sharing the message of Islam through wisdom, good character, dialogue, and community service. Highlighting the inspiring contributions of Sudanese scholars including Dr. Mahjoub Dagal and Dr. Abdulrahman Musa Kody.
            </p>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">
                By Dr. Mahjoub Dagal & Editorial Scholars Desk
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1877F2] text-white text-xs font-bold shadow-sm group-hover:bg-[#166FE5] transition">
                Read Full Article <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Search and Category Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute start-3.5 top-3 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search article titles, keywords, authors..."
            className="w-full ps-10 pe-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#1877F2] bg-slate-50/50"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#1877F2] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            onClick={() => {
              if (article.id === 'art-1') {
                onOpenFeaturedArticle();
              } else {
                onOpenFeaturedArticle();
              }
            }}
            className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-lg transition cursor-pointer flex flex-col justify-between group space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="px-2.5 py-1 rounded-md bg-blue-50 text-[#1877F2] font-bold text-[10px] uppercase tracking-wider">
                  {article.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>

              <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#1877F2] transition leading-snug line-clamp-2">
                {article.title[language] || article.title.en}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                {article.excerpt[language] || article.excerpt.en}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-medium text-slate-700 truncate max-w-[60%]">
                {article.author}
              </span>
              <span className="font-bold text-[#1877F2] inline-flex items-center gap-1">
                Read Essay <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
