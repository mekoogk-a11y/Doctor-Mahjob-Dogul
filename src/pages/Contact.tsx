import React, { useState } from 'react';
import {
  Mail,
  Send,
  CheckCircle2,
  Globe2,
  Building,
  ShieldCheck,
  MessageSquare,
  HelpCircle,
  Phone,
  Clock,
} from 'lucide-react';
import { Language, PageId } from '../types';
import { translations } from '../translations';

interface Props {
  language: Language;
  onNavigate: (page: PageId) => void;
  onOpenAskModal: () => void;
}

export const Contact: React.FC<Props> = ({
  language,
  onNavigate,
  onOpenAskModal,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('general');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !email.trim()) return;

    const id = 'INQ-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(id);
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-[#0E3A6C] via-[#0A2647] to-[#0E3A6C] rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-blue-900">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-semibold border border-blue-400/30">
            <Mail className="w-3.5 h-3.5" />
            <span>Official Communications & Outreach</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            {t.nav.contact}
          </h1>
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal">
            Whether you are inquiring about educational programs, inviting Dr. Mahjob Dogul for a lecture, or requesting media commentary, our administrative team is here to assist you.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Message Transmitted Successfully
              </h3>
              <p className="text-xs font-mono text-blue-600 font-semibold">
                Communication Ref: {ticketId}
              </p>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for contacting the platform of Dr. Mahjob Dogul. Your message has been routed to the appropriate department. Our team will review and reply to {email} promptly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setMessage('');
                  setSubject('');
                }}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[#1877F2] text-white font-bold text-xs hover:bg-[#166FE5] transition"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Send an Official Message
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#1877F2]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#1877F2]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Department / Subject Focus
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-white font-medium focus:outline-hidden focus:ring-2 focus:ring-[#1877F2]"
                >
                  <option value="general">General Platform Inquiry</option>
                  <option value="scholarly">Scholarly Lecture Invitation</option>
                  <option value="media">Media & Press Interview Request</option>
                  <option value="academic">University / Academic Partnership</option>
                  <option value="translation">Translation & Multilingual Content</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Subject Line <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Summary of your inquiry"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#1877F2]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Detailed Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please provide complete details regarding your request..."
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#1877F2] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#1877F2] hover:bg-[#166FE5] text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Official Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Institutional Contact Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
              Institutional Channels
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-blue-50 text-[#1877F2]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">General Inquiries</span>
                  <span className="text-slate-500">info@learnaboutislam.org</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Scholarly & Academic Office</span>
                  <span className="text-slate-500">scholars@learnaboutislam.org</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Global Outreach & Translation</span>
                  <span className="text-slate-500">outreach@learnaboutislam.org</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Review Schedule</span>
                  <span className="text-slate-500">Monday – Friday: 9:00 AM – 5:00 PM EST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Religious Question Prompt */}
          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 space-y-3">
            <h4 className="text-sm font-bold text-slate-900">
              Looking to Ask a Religious Question?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              If you have a religious inquiry about beliefs, prayer, or personal Islamic practice, please use our dedicated Questions Desk rather than the general contact form.
            </p>
            <button
              onClick={onOpenAskModal}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:underline"
            >
              <span>Go to Scholars Question Desk</span>
              <HelpCircle className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
