import React from 'react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Users,
  Building,
  Mail,
  Heart,
  FileCheck,
} from 'lucide-react';
import { Language, PageId } from '../types';
import { drMahjobProfile } from '../data/platformData';
import { translations } from '../translations';

interface Props {
  language: Language;
  onNavigate: (page: PageId) => void;
}

export const About: React.FC<Props> = ({ language, onNavigate }) => {
  const t = translations[language];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-[#0E3A6C] via-[#0A2647] to-[#0E3A6C] rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-blue-900">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-semibold border border-blue-400/30">
            <Award className="w-3.5 h-3.5" />
            <span>Scholarly Leadership & Global Vision</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            About Dr. Mahjob Dogul & The Platform
          </h1>
          <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed font-normal">
            A global educational and media initiative founded to present authentic Islamic knowledge, foster critical spiritual understanding, and build bridges of understanding across cultures.
          </p>
        </div>
      </div>

      {/* 2. Scholar Profile Detailed Card */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Portrait and official credentials column */}
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
            <div className="w-48 h-56 sm:w-56 sm:h-64 rounded-2xl bg-gradient-to-br from-[#0E3A6C] to-[#1877F2] p-1 shadow-lg">
              <div className="w-full h-full bg-[#0A2647] rounded-xl flex flex-col items-center justify-center p-6 text-white">
                <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-3xl font-black mb-3">
                  MD
                </div>
                <span className="font-extrabold text-lg text-white">
                  {drMahjobProfile.fullName[language] || drMahjobProfile.fullName.en}
                </span>
                <span className="text-xs text-blue-200 mt-0.5">
                  {drMahjobProfile.title[language] || drMahjobProfile.title.en}
                </span>
              </div>
            </div>

            <div className="w-full space-y-2 pt-2">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-start space-y-1">
                <span className="text-slate-400 uppercase font-bold text-[10px] block">
                  Academic Focus
                </span>
                <p className="font-semibold text-slate-800">
                  {drMahjobProfile.fieldOfStudy[language] || drMahjobProfile.fieldOfStudy.en}
                </p>
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-start flex items-center gap-2 text-emerald-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold">Verified Islamic Scholar Profile</span>
              </div>
            </div>
          </div>

          {/* Biography and Scholarly Foundations */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1877F2] block mb-1">
                Biography & Academic Background
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                A Life Dedicated to Islamic Education and Scholarly Integrity
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                {drMahjobProfile.bio[language] || drMahjobProfile.bio.en}
              </p>
              <p>
                Throughout years of teaching, writing, and public dialogue, Dr. Mahjob Dogul has emphasized the timeless beauty of Islamic teachings—grounded in the Quran, verified Sunnah, and classical jurisprudence—while speaking directly to contemporary challenges facing families, youth, and seekers of truth.
              </p>
            </div>

            {/* Verified Degrees & Roles Section (Placeholders clearly framed for transparency) */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Academic Degrees, Certifications & Affiliations
              </h3>
              <div className="space-y-2.5">
                {drMahjobProfile.credentials.map((cred, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3"
                  >
                    <Award className="w-4 h-4 text-[#1877F2] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        {cred.degree[language] || cred.degree.en}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {cred.institution[language] || cred.institution.en} • {cred.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision, Mission & Core Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1877F2] flex items-center justify-center font-bold">
            <Globe2 className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Our Vision</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {drMahjobProfile.vision[language] || drMahjobProfile.vision.en}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <Heart className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Our Mission</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {drMahjobProfile.mission[language] || drMahjobProfile.mission.en}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
            <FileCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Core Methodology</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Adherence to classical consensus (Wasatiyyah / moderation), rejection of sectarian bias, commitment to verified research, and compassion in communication.
          </p>
        </div>
      </section>

      {/* 4. Scholarly Verification & Editorial Standards */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
            Academic Transparency
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            How Content is Vetted on this Platform
          </h2>
          <p className="text-sm text-slate-600">
            Every article, curriculum module, lecture, and Q&A answer published under the banner of "Learn About Islam with Dr. Mahjob Dogul" undergoes a rigorous multi-stage review process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="text-xs font-bold text-[#1877F2]">Step 1: Textual Sourcing</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Direct verification of Quranic verses, authentic hadith citations (Bukhari, Muslim, and verified Sunan collections), and linguistic accuracy.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="text-xs font-bold text-[#1877F2]">Step 2: Juristic Alignment</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cross-examination against the recognized schools of orthodox Islamic jurisprudence and established contemporary fatwa councils.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
            <div className="text-xs font-bold text-[#1877F2]">Step 3: Pedagogical Clarity</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Refinement for accessibility so that beginner students, non-Muslims, and academic researchers alike can comprehend with ease.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Contact & Collaboration Callout */}
      <div className="bg-[#0E3A6C] rounded-3xl p-6 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center sm:text-start">
          <h3 className="text-xl sm:text-2xl font-bold">Have Questions or Want to Partner?</h3>
          <p className="text-xs sm:text-sm text-blue-200 max-w-xl">
            We welcome academic inquiries, university collaborations, interfaith dialogue opportunities, and media interviews with Dr. Mahjob Dogul.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-6 py-3 rounded-xl bg-white hover:bg-blue-50 text-[#0E3A6C] font-bold text-xs shadow-md transition whitespace-nowrap active:scale-95"
        >
          Contact Editorial Desk
        </button>
      </div>
    </div>
  );
};
