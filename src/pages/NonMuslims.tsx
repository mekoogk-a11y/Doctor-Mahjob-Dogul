import React, { useState } from 'react';
import {
  Compass,
  Heart,
  HelpCircle,
  BookOpen,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ShieldCheck,
  Globe,
  ArrowRight,
} from 'lucide-react';
import { Language, PageId } from '../types';
import { translations } from '../translations';

interface Props {
  language: Language;
  onNavigate: (page: PageId) => void;
  onOpenAskModal: () => void;
}

export const NonMuslims: React.FC<Props> = ({
  language,
  onNavigate,
  onOpenAskModal,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const t = translations[language];

  const misconceptions = [
    {
      question: {
        en: 'Do Muslims worship the Prophet Muhammad?',
        ar: 'هل يعبد المسلمون النبي محمداً؟',
        es: '¿Los musulmanes adoran al Profeta Muhammad?',
      },
      answer: {
        en: 'No. Islam strictly teaches pure monotheism (Tawhid). Muslims worship God Almighty alone (Allah in Arabic, meaning The One True God). Prophet Muhammad (peace be upon him) is revered as the final Messenger and human exemplar, but worship is reserved exclusively for the Creator.',
        ar: 'كلا. يعلم الإسلام التوحيد الخالص، فالمسلمون يعبدون الله وحده لا شريك له. والنبي محمد صلى الله عليه وسلم هو خاتم الرسل والقدوة، ولا يُعبد مخلوق مع الله أبداً.',
        es: 'No. El Islam enseña estrictamente el monoteísmo puro (Tawhid). Los musulmanes adoran únicamente a Dios Todopoderoso (Al-lah en árabe). El Profeta Muhammad es venerado como el Mensajero final, pero la adoración es exclusiva del Creador.',
      },
    },
    {
      question: {
        en: 'What is the actual meaning of the word "Jihad"?',
        ar: 'ما هو المعنى الحقيقي لكلمة "جهاد"؟',
        es: '¿Cuál es el significado real de la palabra "Yihad"?',
      },
      answer: {
        en: 'Linguistically, "Jihad" means to strive, struggle, or exert effort. The greatest struggle in Islam (Jihad an-Nafs) is the internal effort to overcome ego, selfishness, anger, and moral failings. Legitimate military defense in Islamic jurisprudence is strictly defensive, bound by stringent rules forbidding harm to non-combatants, trees, and civilian infrastructure.',
        ar: 'لغوياً تعني الكلمة بذل الجهد والمجاهدة. وأعظم جهاد هو جهاد النفس لكبح جماح الغضب والظلم والشهوات. أما الدفاع الشرعي فمقيد بضوابط صارمة تحرم الاعتداء على المدنيين والأطفال ودور العبادة.',
        es: 'Lingüísticamente significa esforzarse con empeño. La mayor lucha en el Islam es el esfuerzo interno por vencer el egoísmo, la ira y las debilidades morales. La defensa militar en la ley islámica es estrictamente defensiva y prohíbe dañar a civiles.',
      },
    },
    {
      question: {
        en: 'How does Islam view previous prophets like Abraham, Moses, and Jesus?',
        ar: 'كيف ينظر الإسلام إلى الأنبياء السابقين مثل إبراهيم وموسى وعيسى؟',
        es: '¿Cómo ve el Islam a los profetas anteriores como Abraham, Moisés y Jesús?',
      },
      answer: {
        en: 'Belief in all previous prophets is a mandatory pillar of Islamic faith. Muslims love, respect, and revere Abraham, Moses, David, and Jesus (Isa, peace be upon them all) as noble prophets sent by the same One God to guide humanity.',
        ar: 'الإيمان بجميع الأنبياء ركن من أركان الإيمان الإسلامي. المسلمون يحبون ويجلّون إبراهيم وموسى وداود وعيسى عليهم السلام كرسل كرام أرسلهم الإله الواحد لهداية البشرية.',
        es: 'Creer en todos los profetas anteriores es un pilar obligatorio en el Islam. Los musulmanes aman y honran a Abraham, Moisés y Jesús como nobles profetas enviados por el mismo Dios Único.',
      },
    },
    {
      question: {
        en: 'What is the status of women in authentic Islamic teachings?',
        ar: 'ما هي مكانة المرأة في التعاليم الإسلامية الأصيلة؟',
        es: '¿Cuál es el estatus de la mujer en las enseñanzas islámicas auténticas?',
      },
      answer: {
        en: 'In Islamic revelation, women and men are spiritual and moral equals before God. Islam granted women independent property rights, contractual capacity, inheritance, and educational rights over 1,400 years ago. Cultural practices that oppress women contradict the core teachings of the Quran and the Prophet.',
        ar: 'في القرآن الكريم، المرأة والرجل متساويان في الكرامة الإنسانية والأجر عند الله. منح الإسلام المرأة حقوق التملك والاستقلال المالي والتعليم منذ أكثر من 1400 عام، وأي عادات اجتماعية تظلمها تناقض صريح القرآن.',
        es: 'En la revelación coránica, mujeres y hombres son iguales en dignidad espiritual ante Dios. El Islam otorgó a la mujer derechos de propiedad, herencia y educación hace más de 1400 años.',
      },
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* 1. Welcoming Hero Banner */}
      <div className="bg-gradient-to-r from-[#0E3A6C] via-[#0A2647] to-[#0E3A6C] rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-blue-900">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
            <Compass className="w-3.5 h-3.5" />
            <span>Open Doors • Respectful Dialogue • Authentic Answers</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Understanding Islam: An Open Guide
          </h1>
          <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed font-normal">
            Whether you are curious, conducting academic research, or seeking to understand the faith of 1.9 billion people, we welcome you with warmth, intellectual clarity, and authentic scholarship.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={onOpenAskModal}
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-xs shadow-md transition flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Ask a Private, Honest Question</span>
            </button>
            <button
              onClick={() => onNavigate('learn')}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition"
            >
              Browse Foundational Lessons
            </button>
          </div>
        </div>
      </div>

      {/* 2. What is Islam? Core Essentials */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1877F2]">
            Foundational Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            The Three Central Pillars of the Islamic Worldview
          </h2>
          <p className="text-sm text-slate-600">
            At its heart, Islam is not a culture or an ethnicity; it is a direct, conscious commitment between the individual soul and the Creator.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1877F2] font-black flex items-center justify-center text-base">
              1
            </div>
            <h3 className="font-bold text-base text-slate-900">
              Tawhid (Absolute Monotheism)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              The conviction that there is only One transcendent God—the Creator, Sustainer, and Originator of the entire universe—who possesses all perfection and has no partners or equals.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 font-black flex items-center justify-center text-base">
              2
            </div>
            <h3 className="font-bold text-base text-slate-900">
              Risalah (Prophethood & Guidance)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              God did not leave humanity wandering in darkness; He sent messengers with divine wisdom, culminating in Muhammad, accompanied by the preserved textual revelation of the Quran.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 font-black flex items-center justify-center text-base">
              3
            </div>
            <h3 className="font-bold text-base text-slate-900">
              Akhirah (Moral Accountability)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every human action matters. Life is a purposeful trial, and every person will be held accountable for justice, mercy, integrity, and good deeds in the eternal Hereafter.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Clarifying Common Misconceptions */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
            Clarity & Dialogue
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Common Questions & Misconceptions Addressed
          </h2>
          <p className="text-sm text-slate-600">
            Media portrayals often distort classical Islamic principles. Here are candid, scholarly answers to the most frequent inquiries from curious seekers.
          </p>
        </div>

        <div className="space-y-3">
          {misconceptions.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-start font-bold text-sm sm:text-base text-slate-900 hover:text-[#1877F2] transition"
                >
                  <span>{item.question[language] || item.question.en}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0 ms-2" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ms-2" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {item.answer[language] || item.answer.en}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Getting Started: Recommended Resources for Beginners */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
            Recommended Starting Point
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Next Steps for Exploring Islam
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            onClick={() => onNavigate('learn')}
            className="p-5 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md cursor-pointer transition flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1877F2] flex items-center justify-center font-bold">
                <BookOpen className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-slate-900">
                Foundations Course
              </h4>
              <p className="text-xs text-slate-500">
                A 5-module gentle step-by-step introduction covering core terminology, beliefs, and practices.
              </p>
            </div>
            <span className="text-xs font-bold text-[#1877F2] pt-4 inline-flex items-center gap-1">
              Start Free Course <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div
            onClick={() => onNavigate('videos')}
            className="p-5 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md cursor-pointer transition flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                <Compass className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-slate-900">
                Beginner Video Series
              </h4>
              <p className="text-xs text-slate-500">
                Visual explanations by Dr. Mahjob Dogul answering common cultural questions with warmth.
              </p>
            </div>
            <span className="text-xs font-bold text-rose-600 pt-4 inline-flex items-center gap-1">
              Watch Videos <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div
            onClick={onOpenAskModal}
            className="p-5 rounded-2xl border border-slate-200 hover:border-emerald-400 hover:shadow-md cursor-pointer transition flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <HelpCircle className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-slate-900">
                Confidential Inquiry
              </h4>
              <p className="text-xs text-slate-500">
                Have a delicate or personal question? Submit it anonymously to our scholarly response team.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-600 pt-4 inline-flex items-center gap-1">
              Submit Question <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
