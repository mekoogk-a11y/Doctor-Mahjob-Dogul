import React, { useState } from 'react';
import {
  X,
  BookOpen,
  CheckCircle2,
  Clock,
  Award,
  ChevronRight,
  Bookmark,
  Share2,
  Volume2,
  ListOrdered,
  FileCheck,
} from 'lucide-react';
import { LessonItem, Language } from '../types';
import { translations } from '../translations';

interface Props {
  lesson: LessonItem | null;
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const LessonDetailModal: React.FC<Props> = ({
  lesson,
  isOpen,
  onClose,
  language,
}) => {
  const [completed, setCompleted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'syllabus' | 'reflection'>('overview');
  const t = translations[language];

  if (!isOpen || !lesson) return null;

  const handleCopy = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      id="lesson-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with deep blue banner */}
        <div className="bg-[#0E3A6C] text-white p-6 relative">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 text-xs font-semibold uppercase tracking-wider border border-blue-400/30">
                  {lesson.category}
                </span>
                <span className="text-blue-300 text-xs font-medium">
                  Level: {lesson.level}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-1">
                {lesson.title[language] || lesson.title.en}
              </h2>
              <div className="flex items-center gap-4 text-xs text-blue-200 pt-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {lesson.estimatedMinutes} Minutes Reading & Reflection
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ListOrdered className="w-3.5 h-3.5" />
                  {lesson.topics.length} Learning Modules
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 mt-6 border-b border-blue-900/60 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2 px-1 border-b-2 transition ${
                activeTab === 'overview'
                  ? 'border-emerald-400 text-white'
                  : 'border-transparent text-blue-200 hover:text-white'
              }`}
            >
              Lesson Overview
            </button>
            <button
              onClick={() => setActiveTab('syllabus')}
              className={`pb-2 px-1 border-b-2 transition ${
                activeTab === 'syllabus'
                  ? 'border-emerald-400 text-white'
                  : 'border-transparent text-blue-200 hover:text-white'
              }`}
            >
              Curriculum Modules ({lesson.topics.length})
            </button>
            <button
              onClick={() => setActiveTab('reflection')}
              className={`pb-2 px-1 border-b-2 transition ${
                activeTab === 'reflection'
                  ? 'border-emerald-400 text-white'
                  : 'border-transparent text-blue-200 hover:text-white'
              }`}
            >
              Scholarly Verification & Sources
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Comprehensive Summary
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {lesson.description[language] || lesson.description.en}
                </p>
              </div>

              {/* Core takeaways */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1877F2]">
                  Key Learning Objectives
                </h4>
                <div className="space-y-2.5">
                  {lesson.topics.map((t, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t[language] || t.en}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning guide card */}
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 flex items-start gap-3 text-xs text-blue-900">
                <BookOpen className="w-5 h-5 text-[#1877F2] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Self-Paced Guided Study</span>
                  <span className="text-blue-800/80">
                    This unit provides foundational grounding according to the established scholarly consensus. Take your time reading and reflecting on each theme.
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'syllabus' && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Module Breakdown
              </h4>
              <div className="space-y-3">
                {lesson.topics.map((topic, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 transition flex items-start gap-3.5"
                  >
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1877F2] font-bold text-xs flex items-center justify-center shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-slate-900">
                        {topic[language] || topic.en}
                      </h5>
                      <p className="text-xs text-slate-500 mt-1">
                        Detailed explanatory commentary, foundational textual evidence, and practical ethical application.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reflection' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-800">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>Scholarly Verification Standards</span>
                </div>
                <p className="leading-relaxed">
                  All course content presented under "Learn About Islam with Dr. Mahjob Dogul" adheres strictly to sound Islamic principles, relying on authentic Quranic exegesis (Tafsir), vetted Prophetic traditions (Hadith), and established scholarly consensus (Ijma).
                </p>
              </div>

              <div className="text-xs text-slate-600 space-y-2">
                <span className="font-bold text-slate-800 block">Primary Reference Categories:</span>
                <ul className="list-disc ps-5 space-y-1 text-slate-600">
                  <li>Noble Quran: Contextual verses and classical linguistic analysis</li>
                  <li>Sahih collections of Prophetic traditions</li>
                  <li>Classical and contemporary orthodox jurisprudential works</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => setCompleted(!completed)}
            className={`w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition shadow-sm ${
              completed
                ? 'bg-emerald-600 text-white'
                : 'bg-[#1877F2] hover:bg-[#166FE5] text-white'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{completed ? 'Completed' : 'Mark as Completed'}</span>
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={handleCopy}
              className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-xs font-semibold text-slate-700 flex items-center gap-1.5 transition"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? t.common.copied : t.common.share}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-xs font-semibold text-slate-700 transition"
            >
              {t.common.close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
