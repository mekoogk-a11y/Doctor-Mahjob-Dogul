import React, { useState, useEffect } from 'react';
import { PageId, Language, VideoItem, LessonItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { VideoModalPlayer } from './components/VideoModalPlayer';
import { LessonDetailModal } from './components/LessonDetailModal';
import { AskModal } from './components/AskModal';
import { OfflineIndicator } from './components/OfflineIndicator';

// Pages
import { Home } from './pages/Home';
import { Learn } from './pages/Learn';
import { About } from './pages/About';
import { NonMuslims } from './pages/NonMuslims';
import { Videos } from './pages/Videos';
import { Scholars } from './pages/Scholars';
import { Ask } from './pages/Ask';
import { Articles } from './pages/Articles';
import { ArticleDetail } from './pages/ArticleDetail';
import { Events } from './pages/Events';
import { Contact } from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [language, setLanguage] = useState<Language>('en');
  const [searchOpen, setSearchOpen] = useState(false);
  const [askModalOpen, setAskModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [activeLesson, setActiveLesson] = useState<LessonItem | null>(null);
  const [highlightedQuestionId, setHighlightedQuestionId] = useState<string | undefined>(undefined);

  // Synchronize language and document direction (RTL for Arabic)
  useEffect(() => {
    document.documentElement.lang = language;
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.body.classList.add('font-arabic');
    } else {
      document.documentElement.dir = 'ltr';
      document.body.classList.remove('font-arabic');
    }
  }, [language]);

  const handleNavigate = (page: PageId, targetId?: string) => {
    setCurrentPage(page);
    if (page === 'ask' && targetId) {
      setHighlightedQuestionId(targetId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home
            language={language}
            onNavigate={handleNavigate}
            onOpenVideo={(v) => setActiveVideo(v)}
            onOpenAskModal={() => setAskModalOpen(true)}
            onOpenSearch={() => setSearchOpen(true)}
          />
        );
      case 'learn':
        return (
          <Learn
            language={language}
            onSelectLesson={(lesson) => setActiveLesson(lesson)}
          />
        );
      case 'about':
        return <About language={language} onNavigate={handleNavigate} />;
      case 'non-muslims':
        return (
          <NonMuslims
            language={language}
            onNavigate={handleNavigate}
            onOpenAskModal={() => setAskModalOpen(true)}
          />
        );
      case 'videos':
        return (
          <Videos
            language={language}
            onOpenVideo={(v) => setActiveVideo(v)}
          />
        );
      case 'scholars':
        return <Scholars language={language} onNavigate={handleNavigate} />;
      case 'ask':
        return (
          <Ask
            language={language}
            onOpenAskModal={() => setAskModalOpen(true)}
            highlightedId={highlightedQuestionId}
          />
        );
      case 'articles':
        return (
          <Articles
            language={language}
            onNavigate={handleNavigate}
            onOpenFeaturedArticle={() => setCurrentPage('article-detail')}
          />
        );
      case 'article-detail':
        return (
          <ArticleDetail
            language={language}
            onNavigate={handleNavigate}
          />
        );
      case 'events':
        return <Events language={language} onNavigate={handleNavigate} />;
      case 'contact':
        return (
          <Contact
            language={language}
            onNavigate={handleNavigate}
            onOpenAskModal={() => setAskModalOpen(true)}
          />
        );
      default:
        return (
          <Home
            language={language}
            onNavigate={handleNavigate}
            onOpenVideo={(v) => setActiveVideo(v)}
            onOpenAskModal={() => setAskModalOpen(true)}
            onOpenSearch={() => setSearchOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100/60 text-slate-800 antialiased selection:bg-[#1877F2] selection:text-white">
      {/* Offline Status PWA Banner */}
      <OfflineIndicator language={language} />

      {/* Sticky Global Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        language={language}
        onLanguageChange={(l) => setLanguage(l)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenAskModal={() => setAskModalOpen(true)}
        hasLiveEvent={true}
      />

      {/* Main Page Layout Container */}
      <main className="flex-1 w-full" id="main-content">
        {renderCurrentPage()}
      </main>

      {/* Universal Institutional Footer */}
      <Footer language={language} onNavigate={handleNavigate} />

      {/* Global Search Modal */}
      <GlobalSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        language={language}
        onNavigate={handleNavigate}
      />

      {/* Video Player Modal */}
      <VideoModalPlayer
        video={activeVideo}
        isOpen={!!activeVideo}
        onClose={() => setActiveVideo(null)}
        language={language}
      />

      {/* Lesson Details Modal */}
      <LessonDetailModal
        lesson={activeLesson}
        isOpen={!!activeLesson}
        onClose={() => setActiveLesson(null)}
        language={language}
      />

      {/* Ask a Question Modal */}
      <AskModal
        isOpen={askModalOpen}
        onClose={() => setAskModalOpen(false)}
        language={language}
      />
    </div>
  );
}
