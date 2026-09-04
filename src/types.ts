export type Language = 'en' | 'ar' | 'es';

export type PageId =
  | 'home'
  | 'about'
  | 'learn'
  | 'non-muslims'
  | 'videos'
  | 'scholars'
  | 'ask'
  | 'articles'
  | 'article-detail'
  | 'events'
  | 'contact';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface LessonItem {
  id: string;
  category: string;
  categorySlug: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  syllabus: Record<Language, string[]>;
  difficulty: DifficultyLevel;
  level?: DifficultyLevel;
  duration: string;
  languagesAvailable: string[];
  keyTakeaways: Record<Language, string[]>;
  audioClipAvailable?: boolean;
}

export interface VideoItem {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  speaker: string;
  category: 'lectures' | 'interviews' | 'short-videos' | 'beginners' | 'questions' | 'dawah' | 'quran' | 'conversations';
  duration: string;
  date: string;
  viewsPlaceholder: string;
  thumbnailGradient: string;
  featured?: boolean;
  videoUrlPlaceholder?: string;
  timestamps?: { time: string; label: Record<Language, string> }[];
}

export interface ScholarGuest {
  id: string;
  name: Record<Language, string>;
  title: Record<Language, string>;
  country: Record<Language, string>;
  expertise: Record<Language, string>;
  biography: Record<Language, string>;
  bio?: Record<Language, string>;
  isEditablePlaceholder: boolean;
  featuredTopics: Record<Language, string[]>;
  lecturesCount: number;
  interviewsCount: number;
}

export interface QuestionFaq {
  id: string;
  question: Record<Language, string>;
  answer: Record<Language, string>;
  category: 'faith' | 'quran' | 'prophet' | 'prayer' | 'family' | 'women' | 'society' | 'new-muslims' | 'other';
  answeredBy: string;
  references?: string;
  dateAnswered: string;
}

export type QuestionFaqItem = QuestionFaq;

export interface ArticleItem {
  id: string;
  slug: string;
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  content: Record<Language, string>;
  category: 'islam' | 'quran' | 'hadith' | 'history' | 'faith' | 'family' | 'society' | 'dawah' | 'new-muslims' | 'faq' | string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  isFeatured?: boolean;
  mostRead?: boolean;
}

export interface PlatformEvent {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  speaker: string;
  date: string;
  time: string;
  timezone: string;
  location: Record<Language, string>;
  status: 'live' | 'upcoming' | 'past';
  category: 'lecture' | 'webinar' | 'qa' | 'interview' | 'conference' | 'community' | string;
  type?: string;
  liveViewerCount?: string;
  streamPlatform?: string;
}

export type EventItem = PlatformEvent;

export interface DrDogulProfile {
  name: string;
  honorific: string;
  fullName?: Record<Language, string> | any;
  title?: Record<Language, string> | any;
  fieldOfStudy?: Record<Language, string> | any;
  bio?: Record<Language, string> | any;
  summary?: Record<Language, string> | any;
  credentials?: string[] | any;
  role: Record<Language, string>;
  location: Record<Language, string>;
  biography: Record<Language, string>;
  mission: Record<Language, string>;
  vision: Record<Language, string>;
  dawahApproach: Record<Language, string>;
  workInUSA: Record<Language, string>;
  educationalFocus: Record<Language, string[]>;
  communityInitiatives: Record<Language, string[]>;
  internationalOutreach: Record<Language, string[]>;
}

export interface UserSubmittedQuestion {
  id: string;
  name: string;
  email: string;
  country: string;
  language: string;
  category: string;
  question: string;
  submittedAt: string;
  status: 'pending_review' | 'assigned_scholar' | 'published';
}

export interface SearchResultItem {
  id: string;
  page: PageId;
  type: 'lesson' | 'article' | 'video' | 'question' | 'event' | 'scholar';
  title: string;
  snippet: string;
  badge: string;
}
