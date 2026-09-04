import React, { useState, useMemo } from 'react';
import {
  Video,
  Play,
  Search,
  Clock,
  User,
  Calendar,
  Sparkles,
  Radio,
  SlidersHorizontal,
} from 'lucide-react';
import { Language, VideoItem } from '../types';
import { videosData } from '../data/platformData';
import { translations } from '../translations';

interface Props {
  language: Language;
  onOpenVideo: (video: VideoItem) => void;
}

export const Videos: React.FC<Props> = ({ language, onOpenVideo }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const t = translations[language];

  const categories = [
    { id: 'all', label: t.common.all },
    { id: 'lectures', label: 'Scholarly Lectures' },
    { id: 'series', label: 'Curriculum Series' },
    { id: 'interviews', label: 'Dialogues & Interviews' },
    { id: 'basics', label: 'Foundational Knowledge' },
  ];

  const filteredVideos = useMemo(() => {
    return videosData.filter((v) => {
      const matchCat =
        activeCategory === 'all' || v.category.toLowerCase() === activeCategory.toLowerCase();
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        (v.title[language] || v.title.en).toLowerCase().includes(q) ||
        (v.description[language] || v.description.en).toLowerCase().includes(q) ||
        v.speaker.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery, language]);

  const featured = videosData.find((v) => v.featured) || videosData[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-[#0E3A6C] via-[#0A2647] to-[#0E3A6C] rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-blue-900">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold border border-rose-400/30">
            <Video className="w-3.5 h-3.5" />
            <span>Digital Media Broadcast Center</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            {t.nav.videos}
          </h1>
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal">
            High-definition lectures, thematic series, scholarly debates, and beginner guides produced under the educational direction of Dr. Mahjob Dogul and esteemed guest scholars.
          </p>
        </div>
      </div>

      {/* 2. Featured Big Hero Video */}
      <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 sm:p-8">
          <div
            onClick={() => onOpenVideo(featured)}
            className={`lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-white/10 group bg-gradient-to-tr ${featured.thumbnailGradient}`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md group-hover:scale-110 group-hover:bg-[#1877F2] text-white flex items-center justify-center shadow-2xl transition duration-300 border border-white/30">
                <Play className="w-8 h-8 fill-current ms-1" />
              </div>
            </div>
            <div className="absolute top-3 start-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-xs font-bold text-white border border-white/10 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              Featured Premiere
            </div>
            <div className="absolute bottom-3 end-3 px-2.5 py-1 rounded-md bg-black/70 text-xs font-mono text-white font-bold">
              {featured.duration}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4 text-white">
            <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold">
              <User className="w-3.5 h-3.5" />
              <span>{featured.speaker}</span>
              <span>•</span>
              <Calendar className="w-3.5 h-3.5" />
              <span>{featured.date}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
              {featured.title[language] || featured.title.en}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {featured.description[language] || featured.description.en}
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenVideo(featured)}
                className="px-6 py-3 rounded-xl bg-[#1877F2] hover:bg-[#166FE5] text-white font-bold text-xs flex items-center gap-2 shadow-lg transition active:scale-95"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Watch Full Lecture</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute start-3.5 top-3 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by lecture title, speaker, or topic..."
            className="w-full ps-10 pe-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#1877F2] bg-slate-50/50"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#1877F2] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Videos Grid */}
      {filteredVideos.length === 0 ? (
        <div className="py-16 text-center bg-white rounded-3xl border border-slate-200">
          <Video className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-700">No videos found</h3>
          <p className="text-xs text-slate-500 mt-1">Try adjusting your search or category filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => onOpenVideo(video)}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail Visual */}
                <div className={`relative aspect-video bg-gradient-to-tr ${video.thumbnailGradient} flex items-center justify-center`}>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xs text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#1877F2] transition duration-200">
                    <Play className="w-5 h-5 fill-current ms-0.5" />
                  </div>
                  <span className="absolute bottom-2.5 end-2.5 px-2 py-0.5 rounded bg-black/70 text-white font-mono text-[11px] font-bold">
                    {video.duration}
                  </span>
                  <span className="absolute top-2.5 start-2.5 px-2 py-0.5 rounded bg-blue-600/80 text-white text-[10px] font-bold uppercase tracking-wider">
                    {video.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-slate-700 truncate max-w-[70%]">
                      {video.speaker}
                    </span>
                    <span className="text-[11px]">{video.date}</span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#1877F2] transition line-clamp-2 leading-snug">
                    {video.title[language] || video.title.en}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {video.description[language] || video.description.en}
                  </p>
                </div>
              </div>

              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-blue-600 font-bold group-hover:text-[#1877F2]">
                <span>Watch Stream</span>
                <Play className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
