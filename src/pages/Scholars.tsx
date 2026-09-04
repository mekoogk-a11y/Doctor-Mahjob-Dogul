import React, { useState, useMemo } from 'react';
import {
  Users,
  Search,
  Globe2,
  Award,
  Video,
  ShieldCheck,
  Building,
  Mail,
  ExternalLink,
} from 'lucide-react';
import { Language, PageId } from '../types';
import { scholarsData, drMahjobProfile } from '../data/platformData';
import { translations } from '../translations';

interface Props {
  language: Language;
  onNavigate: (page: PageId) => void;
}

export const Scholars: React.FC<Props> = ({ language, onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('all');
  const t = translations[language];

  const filteredScholars = useMemo(() => {
    return scholarsData.filter((scholar) => {
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        (scholar.name[language] || scholar.name.en).toLowerCase().includes(q) ||
        (scholar.bio[language] || scholar.bio.en).toLowerCase().includes(q) ||
        (scholar.country[language] || scholar.country.en).toLowerCase().includes(q);
      const matchExpertise =
        selectedExpertise === 'all' ||
        (scholar.expertise[language] || scholar.expertise.en)
          .toLowerCase()
          .includes(selectedExpertise.toLowerCase());
      return matchSearch && matchExpertise;
    });
  }, [searchQuery, selectedExpertise, language]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-[#0E3A6C] via-[#0A2647] to-[#0E3A6C] rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-blue-900">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-semibold border border-blue-400/30">
            <Users className="w-3.5 h-3.5" />
            <span>International Advisory & Scholarly Network</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            {t.nav.scholars}
          </h1>
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal">
            A collaborative community of recognized Islamic scholars, university professors, and guest lecturers working alongside Dr. Mahjob Dogul to deliver authentic, balanced education worldwide.
          </p>
        </div>
      </div>

      {/* 2. Chief Scholar Spotlight: Dr. Mahjob Dogul */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-100 shadow-md">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-28 h-28 rounded-2xl bg-[#0E3A6C] text-white flex flex-col items-center justify-center p-3 text-center shrink-0 shadow-lg border border-blue-400/30">
            <span className="text-3xl font-black">MD</span>
            <span className="text-[10px] text-blue-200 font-bold uppercase mt-1">
              Founding Scholar
            </span>
          </div>

          <div className="space-y-2 text-center md:text-start flex-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1877F2] text-xs font-bold">
              <Award className="w-3.5 h-3.5" />
              <span>Platform Director & Lead Educator</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {drMahjobProfile.fullName[language] || drMahjobProfile.fullName.en}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              {drMahjobProfile.summary[language] || drMahjobProfile.summary.en}
            </p>
          </div>

          <button
            onClick={() => onNavigate('about')}
            className="px-5 py-2.5 rounded-xl bg-[#1877F2] hover:bg-[#166FE5] text-white font-bold text-xs shadow-md transition whitespace-nowrap"
          >
            View Full Biography
          </button>
        </div>
      </div>

      {/* 3. Search and Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute start-3.5 top-3 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search scholars by name, country, or bio..."
            className="w-full ps-10 pe-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#1877F2] bg-slate-50/50"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
            Specialization:
          </span>
          <select
            value={selectedExpertise}
            onChange={(e) => setSelectedExpertise(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl border border-slate-200 bg-white font-medium text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-[#1877F2]"
          >
            <option value="all">All Specialties</option>
            <option value="Fiqh">Jurisprudence (Fiqh)</option>
            <option value="Quran">Quranic Sciences & Tafsir</option>
            <option value="Hadith">Hadith Literature</option>
            <option value="Comparative">Comparative Religion & Dialogue</option>
          </select>
        </div>
      </div>

      {/* 4. Scholars Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredScholars.map((scholar) => (
          <div
            key={scholar.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-lg transition space-y-4"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 text-white font-black text-xl flex items-center justify-center shrink-0 shadow-md">
                  {scholar.name.en.split(' ')[1]?.[0] || 'S'}
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900 leading-snug">
                    {scholar.name[language] || scholar.name.en}
                  </h3>
                  <p className="text-xs text-blue-600 font-semibold mt-0.5">
                    {scholar.title[language] || scholar.title.en}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 mt-1">
                    <Globe2 className="w-3 h-3 text-slate-400" />
                    {scholar.country[language] || scholar.country.en}
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Key Field of Scholarship:
                </span>
                <p className="font-semibold text-slate-800">
                  {scholar.expertise[language] || scholar.expertise.en}
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                {scholar.bio[language] || scholar.bio.en}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-500 flex items-center gap-1">
                <Video className="w-3.5 h-3.5 text-[#1877F2]" />
                {scholar.lecturesCount} Recorded Sessions
              </span>
              <button
                onClick={() => onNavigate('videos')}
                className="text-[#1877F2] font-bold hover:underline"
              >
                Browse Lectures
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 5. Scholarly Nomination Box */}
      <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-start">
          <h3 className="text-base font-bold text-slate-900">
            Scholarly Nomination & Academic Advisory Desk
          </h3>
          <p className="text-xs text-slate-600 max-w-xl">
            Are you a scholar, professor, or institution representative interested in guest lecturing or educational collaboration with Dr. Mahjob Dogul?
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-5 py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold text-xs shadow-2xs transition whitespace-nowrap"
        >
          Submit Academic Inquiry
        </button>
      </div>
    </div>
  );
};
