import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Radio,
  CheckCircle2,
  Video,
  Globe2,
  Users,
  Bell,
  Share2,
} from 'lucide-react';
import { Language, PageId, EventItem } from '../types';
import { eventsData } from '../data/platformData';
import { translations } from '../translations';

interface Props {
  language: Language;
  onNavigate: (page: PageId) => void;
}

export const Events: React.FC<Props> = ({ language, onNavigate }) => {
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);
  const [filterType, setFilterType] = useState<string>('all');
  const t = translations[language];

  const handleRegister = (eventId: string) => {
    if (!registeredEvents.includes(eventId)) {
      setRegisteredEvents([...registeredEvents, eventId]);
    }
  };

  const liveEvent = eventsData.find((e) => e.status === 'live');
  const upcomingEvents = eventsData.filter((e) => e.status !== 'live');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-[#0E3A6C] via-[#0A2647] to-[#0E3A6C] rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-blue-900">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-400/30">
            <Calendar className="w-3.5 h-3.5" />
            <span>Global Academic & Dawah Conferences</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            {t.nav.events}
          </h1>
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal">
            Join live broadcasts, international symposiums, Q&A webinars, and community workshops hosted by Dr. Mahjob Dogul and esteemed visiting scholars.
          </p>
        </div>
      </div>

      {/* 2. Live Studio Broadcast Card (if active) */}
      {liveEvent && (
        <div className="bg-gradient-to-br from-red-950/90 via-slate-900 to-black rounded-3xl p-6 sm:p-8 text-white border-2 border-red-500/60 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-black uppercase tracking-wider animate-pulse shadow-lg">
                <Radio className="w-4 h-4" />
                <span>Broadcasting Live Now</span>
              </div>

              <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                {liveEvent.title[language] || liveEvent.title.en}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                {liveEvent.description[language] || liveEvent.description.en}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-red-200 pt-2 font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {liveEvent.time}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {liveEvent.location[language] || liveEvent.location.en}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Users className="w-3.5 h-3.5" />
                  1,420 Active Viewers
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center gap-3">
              <button
                onClick={() => onNavigate('videos')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-black text-sm shadow-xl shadow-red-900/50 transition flex items-center justify-center gap-2 active:scale-95"
              >
                <Radio className="w-4 h-4" />
                <span>Join Live Stream</span>
              </button>
              <span className="text-[11px] text-slate-400">
                Interactive Q&A open during broadcast
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 3. Upcoming Schedule Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Upcoming Events Calendar
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            Times displayed in UTC / Global Broadcast
          </span>
        </div>

        <div className="space-y-4">
          {upcomingEvents.map((evt) => {
            const isRegistered = registeredEvents.includes(evt.id);
            return (
              <div
                key={evt.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-md transition flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1877F2] font-bold text-[11px] uppercase tracking-wider">
                      {evt.type}
                    </span>
                    <span className="text-slate-500 font-semibold flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {evt.date}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {evt.time}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {evt.title[language] || evt.title.en}
                  </h3>

                  <p className="text-xs text-slate-600 max-w-3xl leading-relaxed">
                    {evt.description[language] || evt.description.en}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{evt.location[language] || evt.location.en}</span>
                  </div>
                </div>

                <div className="shrink-0 w-full md:w-auto">
                  {isRegistered ? (
                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>RSVP Confirmed</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleRegister(evt.id)}
                      className="w-full md:w-auto px-6 py-2.5 rounded-xl bg-[#1877F2] hover:bg-[#166FE5] text-white font-bold text-xs shadow-sm transition active:scale-95 flex items-center justify-center gap-2"
                    >
                      <Bell className="w-3.5 h-3.5" />
                      <span>Register Attendance</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
