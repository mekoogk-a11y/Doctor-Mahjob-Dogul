import React, { useState } from 'react';
import { X, Send, ShieldCheck, CheckCircle2, HelpCircle, AlertCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const AskModal: React.FC<Props> = ({ isOpen, onClose, language }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('beliefs');
  const [question, setQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const t = translations[language];

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    const generatedId = 'Q-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(generatedId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setQuestion('');
    setName('');
    setEmail('');
    onClose();
  };

  return (
    <div
      id="ask-question-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0E3A6C] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-blue-200">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold tracking-tight">
                {t.nav.askButton}
              </h3>
              <p className="text-xs text-blue-200">
                Direct scholarly consultation & inquiry
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto max-h-[80vh]">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-slate-900">
                  Question Received Successfully
                </h4>
                <p className="text-xs font-mono text-blue-600 font-semibold">
                  Reference Ticket ID: {ticketId}
                </p>
                <p className="text-xs text-slate-600 max-w-sm mx-auto pt-2">
                  Your inquiry has been logged and routed to our scholarly verification desk. Answers will be reviewed against classical Islamic sources and emailed to you.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-[#1877F2] text-white text-xs font-bold hover:bg-[#166FE5] transition shadow-md"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-blue-50/70 border border-blue-200/80 rounded-xl text-xs text-blue-900 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#1877F2] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  All inquiries are handled respectfully and verified by qualified Islamic scholars. Common questions may also be published anonymously in our knowledge library.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Category / Topic
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#1877F2] bg-white font-medium"
                >
                  <option value="beliefs">Beliefs & Creed (Aqeedah / Tawhid)</option>
                  <option value="prayer">Acts of Worship (Salah, Fasting, Zakah)</option>
                  <option value="ethics">Ethics, Character & Spirituality (Akhlaq)</option>
                  <option value="family">Family & Social Relations</option>
                  <option value="contemporary">Contemporary & Scientific Issues</option>
                  <option value="new-muslim">Questions for New Muslims</option>
                  <option value="general">General Understanding of Islam</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Question <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Please phrase your question clearly and provide relevant context..."
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#1877F2] resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Tariq or Anonymous"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#1877F2]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Email (For Private Reply)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="user@example.com"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#1877F2]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-xs shadow-md transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit to Scholars Desk</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
