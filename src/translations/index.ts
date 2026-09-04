import { Language } from '../types';

export interface Translations {
  appName: string;
  appShortName: string;
  withDr: string;
  tagline: string;
  supportingText: string;
  nav: {
    home: string;
    learn: string;
    about: string;
    nonMuslims: string;
    videos: string;
    scholars: string;
    ask: string;
    articles: string;
    events: string;
    contact: string;
    askButton: string;
  };
  hero: {
    startLearning: string;
    askQuestion: string;
    watchLectures: string;
    featuredVideoTitle: string;
    featuredVideoSubtitle: string;
    playVideo: string;
    listenAudio: string;
  };
  homeSections: {
    featuredLessonsTitle: string;
    featuredLessonsSubtitle: string;
    latestVideosTitle: string;
    latestVideosSubtitle: string;
    popularQuestionsTitle: string;
    popularQuestionsSubtitle: string;
    islamicBasicsTitle: string;
    islamicBasicsSubtitle: string;
    featuredScholarsTitle: string;
    featuredScholarsSubtitle: string;
    upcomingEventsTitle: string;
    upcomingEventsSubtitle: string;
    conversationsTitle: string;
    conversationsSubtitle: string;
    latestArticlesTitle: string;
    latestArticlesSubtitle: string;
    becomeStudentTitle: string;
    becomeStudentSubtitle: string;
    becomeStudentBtn: string;
    globalCommunityTitle: string;
    globalCommunitySubtitle: string;
    faithMercyTitle: string;
    faithMercyText: string;
    exploreIslam: string;
    startLearning: string;
    authenticTitle: string;
    authenticSubtitle: string;
    authenticBullets: string[];
    statsCountries: string;
    statsLessons: string;
    statsVideos: string;
    statsCommunity: string;
  };
  common: {
    viewAll: string;
    readMore: string;
    watchNow: string;
    startCourse: string;
    duration: string;
    difficulty: string;
    language: string;
    beginner: string;
    intermediate: string;
    advanced: string;
    all: string;
    searchPlaceholder: string;
    noResults: string;
    filterBy: string;
    category: string;
    share: string;
    copied: string;
    back: string;
    close: string;
    submit: string;
    submitting: string;
    success: string;
    liveBadge: string;
    register: string;
    addToCalendar: string;
    disclaimerLabel: string;
    disclaimerText: string;
    adminMode: string;
    adminModeTooltip: string;
  };
  footer: {
    learnCol: string;
    discoverCol: string;
    aboutCol: string;
    languagesCol: string;
    stayConnected: string;
    newsletterDesc: string;
    enterEmail: string;
    subscribe: string;
    subscribedSuccess: string;
    designerCredit: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    appName: 'Learn About Islam',
    appShortName: 'Learn Islam',
    withDr: 'with Dr. Mahjob Dogul',
    tagline: 'Discover Islam. Understand Its Message. Ask Questions. Explore Its Teachings.',
    supportingText:
      'A global educational platform dedicated to helping Muslims and non-Muslims discover, understand, and learn about Islam through knowledge, dialogue, lectures, conversations, and authentic Islamic resources.',
    nav: {
      home: 'Home',
      learn: 'Learn Islam',
      about: 'About Dr. Mahjob',
      nonMuslims: 'Islam for Non-Muslims',
      videos: 'Videos',
      scholars: 'Scholars & Guests',
      ask: 'Questions',
      articles: 'Articles',
      events: 'Events',
      contact: 'Contact',
      askButton: 'Ask a Question',
    },
    hero: {
      startLearning: 'Start Learning',
      askQuestion: 'Ask a Question',
      watchLectures: 'Watch Lectures',
      featuredVideoTitle: 'Introduction to Understanding Islam',
      featuredVideoSubtitle: 'A structured foundational lecture exploring the core tenets of Islamic faith and civilizational mercy.',
      playVideo: 'Watch Lecture',
      listenAudio: 'Listen to Audio',
    },
    homeSections: {
      featuredLessonsTitle: 'Featured Lessons',
      featuredLessonsSubtitle: 'Step-by-step verified learning paths designed for seekers of knowledge at all levels.',
      latestVideosTitle: 'Latest Videos & Lectures',
      latestVideosSubtitle: 'High-definition discourses, in-depth seminars, and short educational reflections.',
      popularQuestionsTitle: 'Popular Questions',
      popularQuestionsSubtitle: 'Clear, reasoned answers to the most frequently asked inquiries about Islamic faith and practice.',
      islamicBasicsTitle: 'Islamic Basics',
      islamicBasicsSubtitle: 'Foundational pillars of belief, prayer, ethical character, and daily consciousness.',
      featuredScholarsTitle: 'Featured Scholars & Educators',
      featuredScholarsSubtitle: 'International Islamic educators collaborating to promote authentic learning and open dialogue.',
      upcomingEventsTitle: 'Upcoming Events & Live Seminars',
      upcomingEventsSubtitle: 'Join international broadcasts, interactive workshops, and educational discussions.',
      conversationsTitle: 'Conversations & Interviews',
      conversationsSubtitle: 'Thoughtful dialogues on faith, modern science, society, ethics, and human dignity.',
      latestArticlesTitle: 'Latest Articles & Essays',
      latestArticlesSubtitle: 'Scholarly commentary and educational writings published for researchers and students.',
      becomeStudentTitle: 'Become a Student of Knowledge',
      becomeStudentSubtitle: 'Enroll in structured courses with progress tracking, syllabus downloads, and certified learning guides.',
      becomeStudentBtn: 'Join the Learning Platform',
      globalCommunityTitle: 'Global Islamic Learning Community',
      globalCommunitySubtitle: 'Connecting seekers of authentic Islamic education across continents and cultures.',
      faithMercyTitle: 'Islam — A Message of Faith, Knowledge and Mercy',
      faithMercyText:
        'Explore Islamic teachings, discover authentic knowledge, ask meaningful questions, and engage with scholars and educators from around the world.',
      exploreIslam: 'Explore Islam',
      startLearning: 'Start Learning',
      authenticTitle: 'Learn From Authentic Islamic Knowledge',
      authenticSubtitle: 'Our educational standard is grounded in rigorous scholarly responsibility and respectful intellectual engagement.',
      authenticBullets: [
        'Reliable sources rooted in the Quran and verified Prophetic traditions',
        'Responsible scholarship committed to balance, wisdom, and clarity',
        'Respectful dialogue welcoming questions from all backgrounds',
        'Accessible educational curriculum for contemporary learners',
      ],
      statsCountries: '100+ Countries',
      statsLessons: '1,000+ Lessons',
      statsVideos: '500+ Videos',
      statsCommunity: 'Global Islamic Community',
    },
    common: {
      viewAll: 'View All',
      readMore: 'Read Full Article',
      watchNow: 'Watch Lecture',
      startCourse: 'Start Learning',
      duration: 'Duration',
      difficulty: 'Level',
      language: 'Language',
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
      all: 'All',
      searchPlaceholder: 'Search Islam, lessons, videos, articles and questions...',
      noResults: 'No matches found. Try different keywords or browse our categories.',
      filterBy: 'Filter by',
      category: 'Category',
      share: 'Share',
      copied: 'Link copied to clipboard',
      back: 'Back',
      close: 'Close',
      submit: 'Submit Question',
      submitting: 'Submitting...',
      success: 'Thank you! Your question has been submitted for scholarly review.',
      liveBadge: 'LIVE NOW',
      register: 'Register for Event',
      addToCalendar: 'Add to Calendar',
      disclaimerLabel: 'Scholarly Integrity Notice',
      disclaimerText: 'Answers should be reviewed and approved by qualified scholars before publication.',
      adminMode: 'Admin / CMS Mode',
      adminModeTooltip: 'Toggle CMS editable fields to preview future administrative editing and schema integration.',
    },
    footer: {
      learnCol: 'Learn',
      discoverCol: 'Discover',
      aboutCol: 'About',
      languagesCol: 'Languages',
      stayConnected: 'Stay Connected',
      newsletterDesc: 'Receive new lessons, lectures and Islamic educational content directly in your inbox.',
      enterEmail: 'Enter your email',
      subscribe: 'Subscribe',
      subscribedSuccess: 'Thank you for subscribing to our global educational newsletter.',
      designerCredit: 'Designed by Kamal Jaafar',
      copyright: 'All Rights Reserved © Dr. Mahjob Dogul',
    },
  },
  ar: {
    appName: 'تعلم عن الإسلام',
    appShortName: 'تعلم الإسلام',
    withDr: 'مع د. محجوب دقل',
    tagline: 'اكتشف الإسلام. افهم رسالته. اطرح أسئلتك. استكشف تعاليمه.',
    supportingText:
      'منصة تعليمية وإعلامية عالمية مكرسة لمساعدة المسلمين وغير المسلمين على اكتشاف الإسلام وفهمه والتعلم عنه من خلال المعرفة والحوار والمحاضرات والمصادر الموثوقة.',
    nav: {
      home: 'الرئيسية',
      learn: 'تعلم الإسلام',
      about: 'عن د. محجوب',
      nonMuslims: 'الإسلام لغير المسلمين',
      videos: 'المرئيات والمحاضرات',
      scholars: 'العلماء والضيوف',
      ask: 'اسأل عن الإسلام',
      articles: 'المقالات والمعرفة',
      events: 'الفعاليات والمباشر',
      contact: 'اتصل بنا',
      askButton: 'اطرح سؤالاً',
    },
    hero: {
      startLearning: 'ابدأ التعلم',
      askQuestion: 'اطرح سؤالاً',
      watchLectures: 'شاهد المحاضرات',
      featuredVideoTitle: 'مدخل إلى فهم الإسلام ورسالته الحضارية',
      featuredVideoSubtitle: 'محاضرة تأسيسية تستعرض أركان الإيمان الإسلامي ومقاصد الرحمة والعدل في الشريعة.',
      playVideo: 'مشاهدة المحاضرة',
      listenAudio: 'استماع صوتي',
    },
    homeSections: {
      featuredLessonsTitle: 'الدروس المميزة',
      featuredLessonsSubtitle: 'مسارات تعليمية منهجية وموثقة مصممة لطلاب المعرفة من جميع المستويات.',
      latestVideosTitle: 'أحدث المرئيات والمحاضرات',
      latestVideosSubtitle: 'ندوات علمية متعمقة، محاضرات كاملة، ومقاطع توجيهية هادفة بجودة عالية.',
      popularQuestionsTitle: 'الأسئلة الأكثر شيوعاً',
      popularQuestionsSubtitle: 'إجابات علمية رصينة وميسرة على أكثر التساؤلات طرحاً حول العقيدة والممارسات الإسلامية.',
      islamicBasicsTitle: 'أساسيات الإسلام',
      islamicBasicsSubtitle: 'الأركان الخمسة، أصول الإيمان، الأخلاق الإسلامية، وسمو السلوك الإنساني.',
      featuredScholarsTitle: 'علماء ومعلمون مشاركون',
      featuredScholarsSubtitle: 'نخبة من الأكاديميين والدعاة والباحثين المشاركين في نشر المعرفة الحوارية.',
      upcomingEventsTitle: 'الفعاليات القادمة والبث المباشر',
      upcomingEventsSubtitle: 'شارك في الندوات التفاعلية الدولية وورش العمل وجلسات الأسئلة والأجوبة.',
      conversationsTitle: 'حوارات ولقاءات فكرية',
      conversationsSubtitle: 'نقاشات معمقة حول الإيمان، العلوم المعاصرة، المجتمع، الأخلاق، والكرامة الإنسانية.',
      latestArticlesTitle: 'أحدث المقالات والبحوث',
      latestArticlesSubtitle: 'كتابات علمية ودراسات محكمة موجهة للباحثين والمهتمين بالدراسات الإسلامية.',
      becomeStudentTitle: 'انضم كطالب علم في المنصة',
      becomeStudentSubtitle: 'سجل في المسارات الأكاديمية وتابع تقدمك مع إمكانية تحميل المناهج والمراجع.',
      becomeStudentBtn: 'الانضمام للمنصة التعليمية',
      globalCommunityTitle: 'المجتمع الإسلامي التعليمي العالمي',
      globalCommunitySubtitle: 'حلقة وصل عالمية تجمع الباحثين عن المعرفة الإسلامية الأصيلة عبر القارات.',
      faithMercyTitle: 'الإسلام — رسالة إيمان وعلم ورحمة للعالمين',
      faithMercyText:
        'استكشف التعاليم الإسلامية، وتعرف على المعرفة الأصيلة، واطرح أسئلتك البناءة، وتفاعل مع العلماء والمربين من مختلف أنحاء العالم.',
      exploreIslam: 'استكشف الإسلام',
      startLearning: 'ابدأ التعلم',
      authenticTitle: 'تعلم من المعرفة الإسلامية الأصيلة',
      authenticSubtitle: 'نلتزم بأعلى معايير الأمانة العلمية والمسؤولية الشرعية في تقديم المحتوى.',
      authenticBullets: [
        'مصادر موثوقة مستندة إلى القرآن الكريم والسنة النبوية الصحيحة',
        'منهج علمي رصين يتسم بالحكمة والاعتدال والوضوح الفكري',
        'حوار محترم وبنّاء يرحب بأسئلة الجميع بكل رحابة وتفهم',
        'مناهج تعليمية معاصرة تناسب احتياجات العصر والباحثين',
      ],
      statsCountries: '+100 دولة',
      statsLessons: '+1,000 درس',
      statsVideos: '+500 فيديو',
      statsCommunity: 'مجتمع إسلامي عالمي',
    },
    common: {
      viewAll: 'عرض الكل',
      readMore: 'قراءة المقال كاملاً',
      watchNow: 'مشاهدة المحاضرة',
      startCourse: 'ابدأ الدرس',
      duration: 'المدة',
      difficulty: 'المستوى',
      language: 'اللغة',
      beginner: 'مبتدئ',
      intermediate: 'متوسط',
      advanced: 'متقدم',
      all: 'الكل',
      searchPlaceholder: 'ابحث في الإسلام، الدروس، الفيديوهات، المقالات، والأسئلة...',
      noResults: 'لم يتم العثور على نتائج. جرب كلمات بحث أخرى أو تصفح الأقسام.',
      filterBy: 'تصفية حسب',
      category: 'التصنيف',
      share: 'مشاركة',
      copied: 'تم نسخ الرابط إلى الحافظة',
      back: 'رجوع',
      close: 'إغلاق',
      submit: 'إرسال السؤال',
      submitting: 'جارٍ الإرسال...',
      success: 'شكراً لك! تم استلام سؤالك وستتم مراجعته والإجابة عليه من قبل أهل العلم.',
      liveBadge: 'مباشر الآن',
      register: 'التسجيل في الفعالية',
      addToCalendar: 'إضافة للتقويم',
      disclaimerLabel: 'تنبيه الأمانة العلمية',
      disclaimerText: 'تتم مراجعة الإجابات وتدقيقها واعتمادها من قبل أهل العلم والعلماء المتخصصين قبل النشر.',
      adminMode: 'لوحة إدارة المحتوى (CMS)',
      adminModeTooltip: 'معاينة وضع إدارة المحتوى لتحرير الحقول والبيانات الرسمية مستقبلاً.',
    },
    footer: {
      learnCol: 'تعلم',
      discoverCol: 'اكتشف',
      aboutCol: 'عن المنصة',
      languagesCol: 'اللغات',
      stayConnected: 'ابقَ على تواصل',
      newsletterDesc: 'اشترك لتصلك أحدث الدروس والمحاضرات والمحتوى التعليمي الإسلامي الموثق.',
      enterEmail: 'أدخل بريدك الإلكتروني',
      subscribe: 'اشتراك',
      subscribedSuccess: 'شكراً لاشتراكك في النشرة التعليمية للمنصة.',
      designerCredit: 'Designed by Kamal Jaafar',
      copyright: 'All Rights Reserved © Dr. Mahjob Dogul',
    },
  },
  es: {
    appName: 'Aprende Sobre el Islam',
    appShortName: 'Aprende Islam',
    withDr: 'con el Dr. Mahjob Dogul',
    tagline: 'Descubre el Islam. Comprende su Mensaje. Haz Preguntas. Explora sus Enseñanzas.',
    supportingText:
      'Una plataforma educativa global dedicada a ayudar a musulmanes y no musulmanes a descubrir, comprender y aprender sobre el Islam a través del conocimiento auténtico, el diálogo, conferencias y recursos confiables.',
    nav: {
      home: 'Inicio',
      learn: 'Aprender Islam',
      about: 'Dr. Mahjob',
      nonMuslims: 'Islam para No Musulmanes',
      videos: 'Videos y Medios',
      scholars: 'Eruditos e Invitados',
      ask: 'Preguntas',
      articles: 'Artículos',
      events: 'Eventos',
      contact: 'Contacto',
      askButton: 'Haz una Pregunta',
    },
    hero: {
      startLearning: 'Comenzar a Aprender',
      askQuestion: 'Haz una Pregunta',
      watchLectures: 'Ver Conferencias',
      featuredVideoTitle: 'Introducción para Comprender el Islam',
      featuredVideoSubtitle: 'Una conferencia fundacional que explora los pilares de la fe islámica y su mensaje de misericordia universal.',
      playVideo: 'Ver Conferencia',
      listenAudio: 'Escuchar Audio',
    },
    homeSections: {
      featuredLessonsTitle: 'Lecciones Destacadas',
      featuredLessonsSubtitle: 'Rutas estructuradas y verificadas diseñadas para buscadores de conocimiento en todos los niveles.',
      latestVideosTitle: 'Últimos Videos y Conferencias',
      latestVideosSubtitle: 'Seminarios a fondo, conferencias completas y reflexiones educativas en alta definición.',
      popularQuestionsTitle: 'Preguntas Frecuentes',
      popularQuestionsSubtitle: 'Respuestas claras y razonadas a las dudas más comunes sobre la fe y práctica islámica.',
      islamicBasicsTitle: 'Fundamentos del Islam',
      islamicBasicsSubtitle: 'Pilares de la creencia, oración, ética y rectitud cotidiana.',
      featuredScholarsTitle: 'Eruditos y Educadores Invitados',
      featuredScholarsSubtitle: 'Educadores internacionales que colaboran para promover el aprendizaje auténtico y el diálogo abierto.',
      upcomingEventsTitle: 'Próximos Eventos y En Vivo',
      upcomingEventsSubtitle: 'Únete a transmisiones internacionales, talleres interactivos y discusiones educativas.',
      conversationsTitle: 'Conversaciones y Diálogos',
      conversationsSubtitle: 'Diálogos reflexivos sobre fe, ciencia contemporánea, sociedad, ética y dignidad humana.',
      latestArticlesTitle: 'Artículos y Ensayos Recientes',
      latestArticlesSubtitle: 'Investigaciones y escritos educativos para estudiantes, familias y académicos.',
      becomeStudentTitle: 'Conviértete en Estudiante',
      becomeStudentSubtitle: 'Inscríbete en cursos estructurados con seguimiento de progreso y guías de estudio.',
      becomeStudentBtn: 'Unirse a la Plataforma',
      globalCommunityTitle: 'Comunidad Educativa Global',
      globalCommunitySubtitle: 'Conectando a personas de diversos continentes en la búsqueda del conocimiento islámico auténtico.',
      faithMercyTitle: 'Islam: Un Mensaje de Fe, Conocimiento y Misericordia',
      faithMercyText:
        'Explora las enseñanzas islámicas, descubre conocimiento auténtico, formula preguntas significativas y conecta con educadores de todo el mundo.',
      exploreIslam: 'Explorar Islam',
      startLearning: 'Comenzar a Aprender',
      authenticTitle: 'Aprende de Fuentes Islámicas Auténticas',
      authenticSubtitle: 'Nuestro estándar pedagógico se fundamenta en la responsabilidad académica y el respeto mutuo.',
      authenticBullets: [
        'Fuentes confiables fundamentadas en el Corán y la Tradición Profética verificada',
        'Erudición responsable comprometida con la sabiduría, el equilibrio y la claridad',
        'Diálogo respetuoso que acoge con agrado preguntas de todos los orígenes',
        'Currículo educativo accesible diseñado para el mundo contemporáneo',
      ],
      statsCountries: '+100 Países',
      statsLessons: '+1,000 Lecciones',
      statsVideos: '+500 Videos',
      statsCommunity: 'Comunidad Islámica Global',
    },
    common: {
      viewAll: 'Ver Todo',
      readMore: 'Leer Artículo Completo',
      watchNow: 'Ver Conferencia',
      startCourse: 'Iniciar Curso',
      duration: 'Duración',
      difficulty: 'Nivel',
      language: 'Idioma',
      beginner: 'Principiante',
      intermediate: 'Intermedio',
      advanced: 'Avanzado',
      all: 'Todos',
      searchPlaceholder: 'Buscar temas, lecciones, videos, artículos y preguntas...',
      noResults: 'No se encontraron resultados. Prueba con otras palabras clave.',
      filterBy: 'Filtrar por',
      category: 'Categoría',
      share: 'Compartir',
      copied: 'Enlace copiado al portapapeles',
      back: 'Volver',
      close: 'Cerrar',
      submit: 'Enviar Pregunta',
      submitting: 'Enviando...',
      success: '¡Gracias! Su pregunta ha sido enviada para revisión de eruditos calificados.',
      liveBadge: 'EN VIVO',
      register: 'Inscribirse al Evento',
      addToCalendar: 'Agregar al Calendario',
      disclaimerLabel: 'Aviso de Rigor Académico',
      disclaimerText: 'Las respuestas deben ser revisadas y aprobadas por eruditos calificados antes de su publicación.',
      adminMode: 'Modo Administrador (CMS)',
      adminModeTooltip: 'Alternar campos editables para previsualizar la gestión de contenidos.',
    },
    footer: {
      learnCol: 'Aprender',
      discoverCol: 'Descubrir',
      aboutCol: 'Acerca de',
      languagesCol: 'Idiomas',
      stayConnected: 'Mantente Conectado',
      newsletterDesc: 'Recibe nuevas lecciones, conferencias y contenidos educativos directamente en tu correo.',
      enterEmail: 'Introduce tu correo',
      subscribe: 'Suscribirse',
      subscribedSuccess: 'Gracias por suscribirte al boletín educativo global.',
      designerCredit: 'Designed by Kamal Jaafar',
      copyright: 'All Rights Reserved © Dr. Mahjob Dogul',
    },
  },
};
