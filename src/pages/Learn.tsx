import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  CheckCircle2,
  Clock,
  Award,
  Layers,
  Sparkles,
  ChevronRight,
  Filter,
} from 'lucide-react';
import { Language, LessonItem } from '../types';
import { lessonsData } from '../data/platformData';
import { translations } from '../translations';

interface Props {
  language: Language;
  onSelectLesson: (lesson: LessonItem) => void;
}

export const Learn: React.FC<Props> = ({ language, onSelectLesson }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const t = translations[language];

  const categories = [
    { id: 'all', label: t.common.all },
    { id: 'foundation', label: 'Foundations of Islam' },
    { id: 'quran', label: 'Quran Studies' },
    { id: 'sunnah', label: 'Hadith & Seerah' },
    { id: 'worship', label: 'Worship & Fiqh' },
    { id: 'ethics', label: 'Ethics & Character' },
    { id: 'contemporary', label: 'Contemporary Issues' },
  ];

  const filteredLessons = useMemo(() => {
    return lessonsData.filter((lesson) => {
      const matchCat =
        selectedCategory === 'all' || lesson.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchLevel =
        levelFilter === 'all' || lesson.level.toLowerCase() === levelFilter.toLowerCase();
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        (lesson.title[language] || lesson.title.en).toLowerCase().includes(q) ||
        (lesson.description[language] || lesson.description.en).toLowerCase().includes(q);
      return matchCat && matchLevel && matchQuery;
    });
  }, [selectedCategory, levelFilter, searchQuery, language]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-[#0E3A6C] via-[#0A2647] to-[#0E3A6C] rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-blue-900">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-semibold border border-blue-400/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Structured Academic Curriculum</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            {t.nav.learn}
          </h1>
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal">
            A comprehensive, modular curriculum designed for self-paced study. Every course is rooted in classical Islamic sources and contextualized for contemporary understanding.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute start-3.5 top-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search course titles, topics, or keywords..."
              className="w-full ps-10 pe-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#1877F2] bg-slate-50/50"
            />
          </div>

          {/* Level selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
              Level:
            </span>
            <select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              className="px-3 py-2 text-xs rounded-xl border border-slate-200 bg-white font-medium text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-[#1877F2]"
            >
              <option value="all">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#1877F2] text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Curriculum Grid */}
      {filteredLessons.length === 0 ? (
        <div className="py-16 text-center bg-white rounded-3xl border border-slate-200">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-700">No courses match your criteria</h3>
          <p className="text-xs text-slate-500 mt-1">Try broadening your search keywords or resetting filters.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setLevelFilter('all');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-[#1877F2] text-white text-xs font-bold"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map((lesson) => (
            <div
              key={lesson.id}
              onClick={() => onSelectLesson(lesson)}
              className="bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between overflow-hidden group"
            >
              {/* Card top banner */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-blue-50 text-[#1877F2] text-[11px] font-bold uppercase tracking-wider">
                    {lesson.category}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {lesson.level}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1877F2] transition leading-snug">
                    {lesson.title[language] || lesson.title.en}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {lesson.description[language] || lesson.description.en}
                  </p>
                </div>

                {/* Sub-topics preview */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Key Topics Covered:
                  </span>
                  <div className="space-y-1">
                    {lesson.topics.slice(0, 3).map((topic, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                        <span className="truncate">{topic[language] || topic.en}</span>
                      </div>
                    ))}
                    {lesson.topics.length > 3 && (
                      <span className="text-[11px] text-blue-600 font-semibold ps-3.5 block">
                        +{lesson.topics.length - 3} more modules
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Bottom footer */}
              <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{lesson.estimatedMinutes} mins</span>
                </div>

                <span className="inline-flex items-center gap-1 text-[#1877F2] font-bold group-hover:translate-x-0.5 transition-transform">
                  <span>Start Module</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
