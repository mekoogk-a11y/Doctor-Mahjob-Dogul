import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, BookOpen, Video, HelpCircle, FileText, Calendar, User, ArrowRight } from 'lucide-react';
import { Language, PageId, SearchResultItem } from '../types';
import { lessonsData, videosData, questionsFaqData, articlesData, eventsData, scholarsData } from '../data/platformData';
import { translations } from '../translations';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onNavigate: (page: PageId, targetId?: string) => void;
}

export const GlobalSearchModal: React.FC<Props> = ({ isOpen, onClose, language, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const t = translations[language];

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Aggregate searchable items
  const allSearchItems = useMemo<SearchResultItem[]>(() => {
    const items: SearchResultItem[] = [];

    // Lessons
    lessonsData.forEach((l) => {
      items.push({
        id: l.id,
        page: 'learn',
        type: 'lesson',
        title: l.title[language] || l.title.en,
        snippet: l.description[language] || l.description.en,
        badge: l.category,
      });
    });

    // Videos
    videosData.forEach((v) => {
      items.push({
        id: v.id,
        page: 'videos',
        type: 'video',
        title: v.title[language] || v.title.en,
        snippet: v.description[language] || v.description.en,
        badge: `${v.duration} • ${v.speaker}`,
      });
    });

    // Questions
    questionsFaqData.forEach((q) => {
      items.push({
        id: q.id,
        page: 'ask',
        type: 'question',
        title: q.question[language] || q.question.en,
        snippet: q.answer[language] || q.answer.en,
        badge: q.category.toUpperCase(),
      });
    });

    // Articles
    articlesData.forEach((a) => {
      items.push({
        id: a.id,
        page: 'articles',
        type: 'article',
        title: a.title[language] || a.title.en,
        snippet: a.excerpt[language] || a.excerpt.en,
        badge: a.readTime,
      });
    });

    // Events
    eventsData.forEach((e) => {
      items.push({
        id: e.id,
        page: 'events',
        type: 'event',
        title: e.title[language] || e.title.en,
        snippet: e.description[language] || e.description.en,
        badge: `${e.date} • ${e.status.toUpperCase()}`,
      });
    });

    // Scholars
    scholarsData.forEach((s) => {
      items.push({
        id: s.id,
        page: 'scholars',
        type: 'scholar',
        title: s.name[language] || s.name.en,
        snippet: s.expertise[language] || s.expertise.en,
        badge: s.country[language] || s.country.en,
      });
    });

    return items;
  }, [language]);

  const filteredResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allSearchItems.filter((item) => {
      if (filterType !== 'all' && item.type !== filterType) return false;
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.snippet.toLowerCase().includes(q) ||
        item.badge.toLowerCase().includes(q)
      );
    });
  }, [allSearchItems, query, filterType]);

  if (!isOpen) return null;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'lesson':
        return <BookOpen className="w-4 h-4 text-blue-600" />;
      case 'video':
        return <Video className="w-4 h-4 text-rose-600" />;
      case 'question':
        return <HelpCircle className="w-4 h-4 text-emerald-600" />;
      case 'article':
        return <FileText className="w-4 h-4 text-indigo-600" />;
      case 'event':
        return <Calendar className="w-4 h-4 text-amber-600" />;
      case 'scholar':
        return <User className="w-4 h-4 text-purple-600" />;
      default:
        return <Search className="w-4 h-4 text-slate-500" />;
    }
  };

  const handleSelect = (item: SearchResultItem) => {
    onNavigate(item.page, item.id);
    onClose();
  };

  return (
    <div
      id="global-search-modal"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="flex items-center px-4 sm:px-6 py-4 border-b border-slate-200 bg-slate-50/70">
          <Search className="w-5 h-5 text-slate-400 me-3 shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.common.searchPlaceholder}
            className="w-full bg-transparent border-none text-slate-900 text-base sm:text-lg focus:outline-hidden placeholder-slate-400 font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md me-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold text-slate-500 bg-slate-200 hover:bg-slate-300 rounded-lg transition"
          >
            ESC
          </button>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-1.5 px-4 sm:px-6 py-2.5 bg-white border-b border-slate-100 overflow-x-auto text-xs font-semibold">
          {[
            { id: 'all', label: t.common.all },
            { id: 'lesson', label: 'Lessons' },
            { id: 'video', label: 'Videos' },
            { id: 'question', label: 'Questions' },
            { id: 'article', label: 'Articles' },
            { id: 'event', label: 'Events' },
            { id: 'scholar', label: 'Scholars' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilterType(f.id)}
              className={`px-3 py-1 rounded-lg transition whitespace-nowrap ${
                filterType === f.id
                  ? 'bg-[#1877F2] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="ms-auto text-slate-400 text-[11px] whitespace-nowrap">
            {filteredResults.length} {filteredResults.length === 1 ? 'result' : 'results'}
          </span>
        </div>

        {/* Search Results List */}
        <div className="overflow-y-auto p-4 sm:p-6 divide-y divide-slate-100 space-y-1">
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="text-sm font-medium">{t.common.noResults}</p>
            </div>
          ) : (
            filteredResults.map((item) => (
              <div
                key={`${item.type}-${item.id}`}
                onClick={() => handleSelect(item)}
                className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-blue-50/70 cursor-pointer transition"
              >
                <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-white transition shrink-0 mt-0.5 shadow-2xs">
                  {getTypeIcon(item.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-800 transition">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#1877F2] transition line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-0.5">
                    {item.snippet}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#1877F2] self-center shrink-0 transition" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
