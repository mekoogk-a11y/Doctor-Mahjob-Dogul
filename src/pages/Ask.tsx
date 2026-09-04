import React, { useState, useMemo } from 'react';
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Send,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Share2,
} from 'lucide-react';
import { Language, QuestionFaqItem } from '../types';
import { questionsFaqData } from '../data/platformData';
import { translations } from '../translations';

interface Props {
  language: Language;
  onOpenAskModal: () => void;
  highlightedId?: string;
}

export const Ask: React.FC<Props> = ({
  language,
  onOpenAskModal,
  highlightedId,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIndex, setExpandedIndex] = useState<string | null>(
    highlightedId || questionsFaqData[0].id
  );
  const t = translations[language];

  const categories = [
    { id: 'all', label: t.common.all },
    { id: 'beliefs', label: 'Creed & Beliefs (Aqeedah)' },
    { id: 'prayer', label: 'Worship & Prayer (Salah)' },
    { id: 'ethics', label: 'Ethics & Character (Akhlaq)' },
    { id: 'contemporary', label: 'Contemporary Issues' },
    { id: 'family', label: 'Family & Society' },
  ];

  const filteredQuestions = useMemo(() => {
    return questionsFaqData.filter((q) => {
      const matchCat =
        selectedCategory === 'all' || q.category.toLowerCase() === selectedCategory.toLowerCase();
      const query = searchQuery.toLowerCase().trim();
      const matchQuery =
        !query ||
        (q.question[language] || q.question.en).toLowerCase().includes(query) ||
        (q.answer[language] || q.answer.en).toLowerCase().includes(query);
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery, language]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-[#0E3A6C] via-[#0A2647] to-[#0E3A6C] rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-blue-900">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Scholarly Inquiry & Guidance Desk</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            {t.nav.ask}
          </h1>
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal">
            Every question submitted is reviewed with compassion, scholarly diligence, and fidelity to orthodox sources. Search our vetted archive or submit your own inquiry.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenAskModal}
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-xs shadow-md transition flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit a New Question to Dr. Mahjob Dogul</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Verification Trust Notice */}
      <div className="bg-blue-50 border border-blue-200/80 rounded-2xl p-5 flex items-start gap-3.5 text-xs text-blue-900">
        <ShieldCheck className="w-5 h-5 text-[#1877F2] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-bold block">Methodological Quality Guarantee</span>
          <p className="text-blue-800/80 leading-relaxed">
            All answers on this portal are authored and verified under the supervision of Dr. Mahjob Dogul in accordance with mainstream classical scholarship (Wasatiyyah). Questions of personal delicacy are kept strictly confidential.
          </p>
        </div>
      </div>

      {/* 3. Search and Categories Bar */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute start-3.5 top-3.5 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search within answered questions by topic, keyword, or phrase..."
            className="w-full ps-10 pe-4 py-3 text-xs sm:text-sm rounded-2xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#1877F2] bg-white shadow-2xs"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#1877F2] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Interactive Accordion FAQ List */}
      <div className="space-y-3">
        {filteredQuestions.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-3xl border border-slate-200">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700">No answered questions found</h3>
            <p className="text-xs text-slate-500 mt-1">
              Have a question not yet in our archive? Submit it directly to our scholars.
            </p>
            <button
              onClick={onOpenAskModal}
              className="mt-4 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-sm transition"
            >
              Ask this Question Now
            </button>
          </div>
        ) : (
          filteredQuestions.map((item) => {
            const isOpen = expandedIndex === item.id;
            return (
              <div
                key={item.id}
                id={`question-${item.id}`}
                className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? 'border-blue-400 shadow-md ring-1 ring-blue-400/20' : 'border-slate-200 hover:border-blue-200'
                }`}
              >
                <button
                  onClick={() => setExpandedIndex(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between p-5 text-start gap-4 transition group"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-50 text-[#1877F2] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 group-hover:bg-[#1877F2] group-hover:text-white transition">
                      Q
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                          {item.category}
                        </span>
                        <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          Scholar Verified
                        </span>
                      </div>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#1877F2] transition">
                        {item.question[language] || item.question.en}
                      </h3>
                    </div>
                  </div>

                  <div className="shrink-0 p-1 text-slate-400 group-hover:text-slate-600">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        A
                      </span>
                      <div className="space-y-3 flex-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <p>{item.answer[language] || item.answer.en}</p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
                      <span className="font-medium">
                        Verified by Dr. Mahjob Dogul & Academic Consultation Board
                      </span>
                      <button
                        onClick={() => {
                          navigator.clipboard?.writeText(window.location.href);
                          alert('Question link copied to clipboard.');
                        }}
                        className="inline-flex items-center gap-1.5 text-[#1877F2] hover:underline font-semibold"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Share Reference</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
