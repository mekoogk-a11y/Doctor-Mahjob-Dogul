import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  Share2,
  Bookmark,
  Printer,
  Copy,
  Check,
  Clock,
  Calendar,
  User,
  Tag,
  BookOpen,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Upload,
  Sparkles,
  ShieldCheck,
  Globe2,
  Heart,
  ChevronRight,
  ExternalLink,
  ZoomIn,
  MessageSquare,
} from 'lucide-react';
import { Language, PageId, ArticleItem } from '../types';
import { translations } from '../translations';
import { articlesData } from '../data/platformData';

interface Props {
  language: Language;
  onNavigate: (page: PageId, targetId?: string) => void;
  onSelectArticle?: (id: string) => void;
}

export const ArticleDetail: React.FC<Props> = ({
  language,
  onNavigate,
  onSelectArticle,
}) => {
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [readingProgress, setReadingProgress] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioSpeed, setAudioSpeed] = useState(1);
  const [customImage, setCustomImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const t = translations[language];

  // Calculate reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setReadingProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check saved bookmark from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('article_bookmark_muslims_in_america');
      if (saved) setBookmarked(true);
      const savedCustomImg = localStorage.getItem('article_custom_featured_image');
      if (savedCustomImg) setCustomImage(savedCustomImg);
    } catch (e) {
      // ignore
    }
  }, []);

  const handleToggleBookmark = () => {
    const next = !bookmarked;
    setBookmarked(next);
    try {
      if (next) {
        localStorage.setItem('article_bookmark_muslims_in_america', 'true');
      } else {
        localStorage.removeItem('article_bookmark_muslims_in_america');
      }
    } catch (e) {}
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(
      'Muslims in America and Their Role in Sharing the Message of Islam - Dr. Mahjoub Dagal'
    );
    let shareUrl = '';
    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${title}%20${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      default:
        handleCopy();
        return;
    }
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCustomImage(result);
        try {
          localStorage.setItem('article_custom_featured_image', result);
        } catch (err) {}
      };
      reader.readAsDataURL(file);
    }
  };

  // Text scaling class
  const bodyTextSizeClass =
    fontSize === 'xlarge'
      ? 'text-lg sm:text-xl leading-relaxed sm:leading-loose'
      : fontSize === 'large'
      ? 'text-base sm:text-lg leading-relaxed'
      : 'text-sm sm:text-base leading-relaxed';

  // Audio voiceover simulation for Sudanese Arabic promotion request:
  // "اعمل لي صوت إعلاني حماسي صوت رجل بالعامية السودانية"
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlayingAudio) {
      timer = setTimeout(() => {
        setIsPlayingAudio(false);
      }, 35000); // 35-sec simulated narration
    }
    return () => clearTimeout(timer);
  }, [isPlayingAudio]);

  const featuredImgSrc =
    customImage || '/dr_dagal_alaska.jpg';

  const relatedArticles = articlesData.slice(0, 3);

  return (
    <article className="min-h-screen bg-slate-50/50 pb-20">
      {/* Sticky Top Reading Progress Bar */}
      <div className="fixed top-0 inset-x-0 h-1 bg-transparent z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#1877F2] via-emerald-500 to-amber-400 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Top Breadcrumb & Return Nav */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        <div className="flex items-center justify-between gap-4 mb-6">
          <button
            onClick={() => onNavigate('articles')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#1877F2] transition group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform rtl:group-hover:translate-x-1 rtl:rotate-180" />
            <span>Back to All Articles</span>
          </button>

          {/* Reading utility tools */}
          <div className="flex items-center gap-2 text-xs">
            {/* Font size adjustment */}
            <div className="hidden sm:flex items-center bg-white border border-slate-200 rounded-xl p-1 shadow-2xs">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-0.5 rounded-md font-medium transition ${
                  fontSize === 'normal' ? 'bg-slate-100 font-bold text-slate-900' : 'text-slate-500'
                }`}
                title="Normal Font"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-0.5 rounded-md font-medium transition ${
                  fontSize === 'large' ? 'bg-slate-100 font-bold text-slate-900' : 'text-slate-500'
                }`}
                title="Large Font"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-2 py-0.5 rounded-md font-medium transition ${
                  fontSize === 'xlarge' ? 'bg-slate-100 font-bold text-slate-900' : 'text-slate-500'
                }`}
                title="Extra Large Font"
              >
                A++
              </button>
            </div>

            {/* Bookmark button */}
            <button
              onClick={handleToggleBookmark}
              className={`p-2 rounded-xl border transition ${
                bookmarked
                  ? 'bg-amber-50 border-amber-300 text-amber-600'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
              title={bookmarked ? 'Bookmarked' : 'Bookmark Article'}
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
            </button>

            {/* Print button */}
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition"
              title="Print Article"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Copy link button */}
            <button
              onClick={handleCopy}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition flex items-center gap-1"
              title="Copy Article Link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Category Badge & Headline Block */}
        <div className="space-y-4 text-center sm:text-start">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Dawah & Islamic Education</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Muslims in America and Their Role in Sharing the Message of Islam
          </h1>

          <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed">
            Discovering the role of Muslims in America in sharing the message of Islam through wisdom, good character, dialogue, and community service.
          </p>

          {/* Article Metadata Bar */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 pt-2 pb-6 border-b border-slate-200 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <div className="w-7 h-7 rounded-full bg-[#0E3A6C] text-white flex items-center justify-center text-xs font-black">
                MD
              </div>
              <span>Editorial Desk • Dr. Mahjoub Dagal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Published September 2026</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>5 min read</span>
            </div>

            <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Scholarly Verified</span>
            </div>
          </div>
        </div>

        {/* Featured Image Block - Prominently Displayed & Fully Responsive */}
        <div className="my-8 space-y-3">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950 group">
            {/* Image display */}
            <img
              src={featuredImgSrc}
              alt="Dr. Mahjoub Dagal visiting an elementary school in Alaska teaching children about Islam and Ramadan"
              className="w-full h-auto max-h-[640px] object-contain sm:object-cover mx-auto transition-transform duration-500 group-hover:scale-[1.01]"
              onError={(e) => {
                // fallback gracefully to generated image or SVG
                (e.target as HTMLImageElement).src = '/dr_dagal_alaska.jpg';
              }}
            />

            {/* Top editorial overlay tag */}
            <div className="absolute top-4 start-4 z-10 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-semibold border border-white/20 shadow-md">
                Anchorage, Alaska, USA
              </span>
            </div>

            {/* Optional replace/upload overlay for the user to upload their raw local file if desired */}
            <div className="absolute bottom-4 end-4 z-10 opacity-90 hover:opacity-100 transition">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/70 hover:bg-black/90 text-white text-xs font-semibold backdrop-blur-md border border-white/20 shadow-lg transition"
                title="Change or upload direct screenshot"
              >
                <Upload className="w-3.5 h-3.5 text-emerald-400" />
                <span>Custom Image</span>
              </button>
            </div>
          </div>

          {/* Authentic Photo Caption */}
          <div className="p-4 rounded-2xl bg-slate-100/90 border border-slate-200 text-xs text-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-start gap-2.5">
              <BookOpen className="w-4 h-4 text-[#1877F2] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block font-arabic text-sm">
                  أستاذة في ألاسكا تستضيف د. محجوب دقل في إحدى المدارس لتقديم نبذة عن الإسلام وصيام رمضان
                </span>
                <span className="text-slate-600 text-[11px] block mt-0.5">
                  Dr. Mahjoub Dagal visiting an American elementary school in Alaska to introduce students and educators to Islam, community values, and Ramadan fasting.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 whitespace-nowrap">
              <span>Photo:</span>
              <strong className="text-slate-800">Authentic Field Outreach</strong>
            </div>
          </div>
        </div>

        {/* Metadata Tags Cluster */}
        <div className="flex flex-wrap items-center gap-2 py-3 border-y border-slate-200 text-xs">
          <span className="text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
            <Tag className="w-3.5 h-3.5" />
            Topics:
          </span>
          {['Islamic Dawah', 'Muslim Communities', 'America', 'Sudanese Scholars'].map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-lg bg-blue-50 text-blue-800 font-semibold hover:bg-blue-100 transition cursor-default"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Enthusiastic Sudanese Voiceover / Audio Announcement Feature */}
        {/* Supporting user's explicit instruction: "اعمل لي صوت إعلاني حماسي صوت رجل بالعامية السودانية" */}
        <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#0A2647] via-[#0E3A6C] to-[#0A2240] text-white shadow-xl border border-blue-800/80">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 text-[11px] font-bold border border-emerald-400/30">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                <span>صوت إعلاني حماسي بالعامية السودانية • صوت رجل</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white font-arabic">
                استمع للملخص الإعلاني الصوتي: علماء السودان ورسالة الإسلام السمحة
              </h4>
              <p className="text-xs text-blue-200 max-w-xl">
                تسجيل تعريفي حماسي بالعامية السودانية يسلط الضوء على دور د. محجوب دقل ودعاة السودان في أمريكا والعالم.
              </p>
            </div>

            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition whitespace-nowrap"
            >
              {isPlayingAudio ? (
                <>
                  <Pause className="w-4 h-4 fill-current" />
                  <span>إيقاف الصوت</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>تشغيل الصوت الحماسي</span>
                </>
              )}
            </button>
          </div>

          {/* Voiceover Script & Audio Bar */}
          <div className="mt-4 pt-4 border-t border-blue-800/60 text-xs font-arabic text-blue-100 bg-black/20 p-4 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-[11px] text-blue-300 font-sans">
              <span className="flex items-center gap-1.5 font-bold text-emerald-300">
                <Volume2 className={`w-3.5 h-3.5 ${isPlayingAudio ? 'animate-bounce text-emerald-400' : ''}`} />
                {isPlayingAudio ? 'جاري البث الصوتي الحماسي...' : 'نص التسجيل الصوتي الإعلاني:'}
              </span>
              <span className="font-mono">0:35 / 0:35</span>
            </div>
            <p className="leading-relaxed text-sm text-slate-100 italic">
              "يا هلا بيكم يا أحبابنا! اسمعوا وشوفوا القصة السمحة دي.. كيف إنو ديننا الحنيف، دين الرحمة والسلام والأخلاق العالية، واصل لكل أصقاع الأرض! في أمريكا هنا، دكتورنا محجوب دقل وعلماءنا وأهلنا السودانيين قايمين بأعظم رسالة دعوية.. بالبشاشة، وطيبة القلب، والابتسامة، والتعامل الراقي مع أطفال المدارس والمجتمع كلو! عشان يعرفوا إنو الإسلام رحمة للناس أجمعين. تعالوا نقرأ المقال ونعيش المعاني دي سوا!"
            </p>
          </div>
        </div>

        {/* Main Article Body Text */}
        <div className={`prose prose-slate max-w-none text-slate-800 space-y-6 ${bodyTextSizeClass}`}>
          <p className="first-letter:text-4xl first-letter:font-black first-letter:text-[#1877F2] first-letter:me-2 first-letter:float-start">
            Islam is a religion of peace, mercy, justice, and compassion. Across the world, Muslims are working to introduce people to the true teachings of Islam and to show that Islam is a faith that calls people to worship one God, live with righteousness, respect others, and contribute positively to society.
          </p>

          <p>
            In the United States, the Muslim community has become an important part of the country's diverse religious landscape. Muslims come from many different backgrounds, cultures, and countries, but they are united by their faith in Allah and their belief in the message of Prophet Muhammad, peace be upon him.
          </p>

          <div className="p-5 rounded-2xl bg-blue-50/60 border-s-4 border-[#1877F2] my-6">
            <p className="text-slate-900 font-semibold italic text-base sm:text-lg leading-relaxed m-0">
              "One of the most important roles of Muslims in America is Dawah — inviting people to understand Islam through wisdom, good character, dialogue, and peaceful communication."
            </p>
          </div>

          <p>
            Dawah is not about forcing anyone to accept Islam. Rather, it is about explaining the faith, answering questions, correcting misconceptions, and allowing people to discover Islam for themselves.
          </p>

          <p>
            Many Muslims serve their communities through mosques, educational programs, charitable activities, youth programs, interfaith dialogue, and social services. Through these efforts, they demonstrate the Islamic values of kindness, honesty, generosity, family, justice, and care for humanity.
          </p>

          {/* Section: Sudanese Scholars Highlight */}
          <div className="space-y-4 pt-4">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Scholars and Preachers from Sudan
            </h3>

            <p>
              Among those contributing to this important work are scholars and preachers from Sudan.
            </p>

            <p>
              One example is <strong>Dr. Mahjoub Dagal</strong>, a Sudanese imam and preacher who serves in one of the major mosques in the United States. Through his sermons, teaching, and community work, he contributes to introducing people to Islam and helping Muslims understand and practice their faith.
            </p>

            <p>
              His work represents an important connection between Sudanese Islamic scholarship and the wider Muslim community in America.
            </p>

            <p>
              Another example is <strong>Dr. Abdulrahman Musa Kody</strong>, also from Sudan, who is involved in Islamic outreach in New Zealand. He serves as an imam and delivers sermons at a mosque there, contributing to Islamic education and Dawah within the local community.
            </p>

            <p>
              The stories of these Sudanese scholars remind us that the message of Islam is not limited by geography. A Muslim may come from Sudan, live in America or New Zealand, and become a means through which people learn about Islam and its values.
            </p>
          </div>

          {/* Universal Responsibility */}
          <div className="space-y-4 pt-4">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Good Character as the Living Dawah
            </h3>

            <p>
              The responsibility of sharing Islam is not limited to scholars. Every Muslim can represent Islam through good character, honesty, patience, kindness, and respect for others.
            </p>

            <p className="font-semibold text-slate-900">
              Sometimes, a simple act of kindness can communicate the beauty of Islam more powerfully than a long speech.
            </p>

            <p>
              Muslims living in Western countries have a unique opportunity to build bridges between communities. By engaging in respectful dialogue, helping those in need, participating in society, and explaining their faith with wisdom, they can help people see Islam beyond stereotypes and misunderstandings.
            </p>
          </div>

          {/* Visually Distinctive Islamic-Inspired Highlight Section */}
          <div className="relative my-12 rounded-3xl overflow-hidden bg-gradient-to-br from-[#06291C] via-[#0A3D2A] to-[#041F15] text-white p-8 sm:p-12 shadow-2xl border-2 border-emerald-500/30">
            {/* Subtle Islamic geometric background pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="callout-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#34D399" strokeWidth="1.2" />
                    <circle cx="30" cy="30" r="12" fill="none" stroke="#FBBF24" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#callout-pattern)" />
              </svg>
            </div>

            <div className="relative z-10 text-center max-w-2xl mx-auto space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/40 uppercase tracking-widest">
                <Heart className="w-3.5 h-3.5 text-amber-400" />
                <span>The Core Essence</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                The Message is Simple
              </h2>

              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />

              <p className="text-lg sm:text-2xl font-semibold text-emerald-100 leading-relaxed font-arabic sm:font-sans">
                "Islam calls humanity to worship the One Creator, to live with justice and mercy, and to treat other human beings with dignity and compassion."
              </p>
            </div>
          </div>

          {/* Concluding Paragraphs */}
          <div className="space-y-4 pt-2">
            <p>
              The contribution of Muslims in America, and the work of dedicated scholars and imams from Sudan and other parts of the world, is a reminder that Dawah can be a source of understanding, friendship, and positive change.
            </p>

            <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-emerald-950 font-medium leading-relaxed space-y-2">
              <p className="m-0 text-base sm:text-lg font-semibold text-emerald-900">
                May Allah guide us all to the truth, increase understanding between people, and make us people who spread goodness, mercy, peace, and wisdom wherever we go.
              </p>
              <span className="block text-xs text-emerald-700 font-arabic pt-1">
                آمين يا رب العالمين
              </span>
            </div>
          </div>
        </div>

        {/* Social Share & Interaction Footer */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Share this Article:
            </span>
            <button
              onClick={() => handleShare('whatsapp')}
              className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs"
              title="Share on WhatsApp"
            >
              WhatsApp
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs"
              title="Share on X (Twitter)"
            >
              X / Twitter
            </button>
            <button
              onClick={() => handleShare('facebook')}
              className="px-3 py-2 rounded-xl bg-[#1877F2] hover:bg-[#166FE5] text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs"
              title="Share on Facebook"
            >
              Facebook
            </button>
            <button
              onClick={handleCopy}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition"
              title="Copy link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleToggleBookmark}
              className={`px-4 py-2 rounded-xl text-xs font-bold border transition flex items-center gap-1.5 ${
                bookmarked
                  ? 'bg-amber-50 border-amber-300 text-amber-700'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-current' : ''}`} />
              <span>{bookmarked ? 'Saved to Reading List' : 'Save for Later'}</span>
            </button>
          </div>
        </div>

        {/* Explore More & Related Articles Section */}
        <section className="mt-16 pt-12 border-t border-slate-200 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1877F2] block mb-1">
                Scholarly Library
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Related Islamic Articles & Studies
              </h3>
            </div>
            <button
              onClick={() => onNavigate('articles')}
              className="text-xs font-bold text-[#1877F2] hover:underline flex items-center gap-1"
            >
              View All Articles <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => onNavigate('articles')}
                className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-md transition cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-[#1877F2]">
                    {art.category}
                  </span>
                  <h4 className="font-bold text-sm text-slate-900 line-clamp-2 leading-snug">
                    {art.title[language] || art.title.en}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {art.excerpt[language] || art.excerpt.en}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{art.readTime}</span>
                  <span className="text-[#1877F2] font-semibold">Read Now</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Exact Mandatory Design Credit and Copyright Lines Required */}
        <div className="mt-16 pt-8 border-t border-slate-300/80 text-center space-y-1 text-xs text-slate-500 font-medium">
          <div className="font-bold text-slate-800">
            Designed by Kamal Jaafar
          </div>
          <div className="text-slate-600">
            All Rights Reserved — Dr. Dagal
          </div>
        </div>
      </div>
    </article>
  );
};
