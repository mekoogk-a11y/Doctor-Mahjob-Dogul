import React, { useState } from 'react';
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Clock,
  User,
  Calendar,
  Share2,
  Check,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { VideoItem, Language } from '../types';
import { translations } from '../translations';

interface Props {
  video: VideoItem | null;
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const VideoModalPlayer: React.FC<Props> = ({ video, isOpen, onClose, language }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentTimeSec, setCurrentTimeSec] = useState(45);
  const t = translations[language];

  if (!isOpen || !video) return null;

  const handleCopy = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div
      id="video-player-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video Player Display Container */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden group">
          {/* Simulated High-Res Video Canvas & Abstract Geometric Accent */}
          <div className={`absolute inset-0 bg-gradient-to-tr ${video.thumbnailGradient} opacity-90`} />

          {/* Subtle geometric ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <svg viewBox="0 0 200 200" className="w-80 h-80 text-white animate-spin" style={{ animationDuration: '60s' }}>
              <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="6,6" />
              <rect x="50" y="50" width="100" height="100" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(45 100 100)" />
            </svg>
          </div>

          {/* Central Play/Pause button overlay */}
          <div className="relative z-10 flex flex-col items-center gap-3 text-center px-6">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-20 h-20 rounded-full bg-[#1877F2] hover:bg-[#166FE5] text-white flex items-center justify-center shadow-2xl transition transform hover:scale-105 active:scale-95"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? <Pause className="w-9 h-9 fill-current" /> : <Play className="w-9 h-9 fill-current ms-1" />}
            </button>
            <div className="space-y-1">
              <span className="inline-block px-3 py-1 rounded-full bg-black/50 text-blue-300 text-xs font-semibold backdrop-blur-xs border border-white/10">
                {isPlaying ? 'Playing Lecture Stream (1080p HD)' : 'Stream Paused'}
              </span>
              <p className="text-white font-bold text-sm sm:text-base max-w-lg drop-shadow-md">
                {video.title[language] || video.title.en}
              </p>
            </div>
          </div>

          {/* Player Controls Bar at bottom */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex flex-col gap-2 z-20">
            {/* Scrubber timeline */}
            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden cursor-pointer">
              <div
                className="bg-[#1877F2] h-full transition-all duration-300"
                style={{ width: isPlaying ? '35%' : '20%' }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-white">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-blue-300 transition"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-blue-300 transition"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="font-mono text-[11px] text-slate-300">
                  {isPlaying ? '14:20' : '02:45'} / {video.duration}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline text-[11px] px-2 py-0.5 rounded bg-blue-600/30 text-blue-200 border border-blue-400/20 font-semibold">
                  {video.category.toUpperCase()}
                </span>
                <button
                  onClick={onClose}
                  className="hover:text-blue-300 transition p-1"
                  title="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Information & Timestamp Tabs */}
        <div className="p-4 sm:p-6 bg-slate-900 text-white overflow-y-auto flex-1 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-3 text-xs text-blue-300 mb-1.5">
                <span className="flex items-center gap-1 font-semibold">
                  <User className="w-3.5 h-3.5" />
                  {video.speaker}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {video.duration}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {video.date}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                {video.title[language] || video.title.en}
              </h2>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700 transition active:scale-95"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? t.common.copied : t.common.share}</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Description & Overview */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs uppercase font-bold text-blue-300 tracking-wider">
                Lecture Summary
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {video.description[language] || video.description.en}
              </p>
              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 space-y-1">
                <span className="font-semibold text-emerald-300 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Scalable Media Architecture Note
                </span>
                <p>
                  This video player is structured for direct synchronization with YouTube, Vimeo, or a custom CMS media asset library.
                </p>
              </div>
            </div>

            {/* Timestamps & Key Chapters */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold text-blue-300 tracking-wider">
                Chapters & Timestamps
              </h4>
              {video.timestamps && video.timestamps.length > 0 ? (
                <div className="space-y-1.5">
                  {video.timestamps.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setIsPlaying(true)}
                      className="w-full flex items-center justify-between p-2 rounded-lg bg-slate-800/60 hover:bg-[#1877F2]/20 hover:border-blue-500/40 border border-slate-800 text-start text-xs transition group"
                    >
                      <span className="text-slate-300 group-hover:text-white font-medium line-clamp-1">
                        {item.label[language] || item.label.en}
                      </span>
                      <span className="font-mono text-blue-400 font-bold ms-2 shrink-0">
                        {item.time}
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-400 italic">
                  Full lecture recording without subdivided chapters.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
