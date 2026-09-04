import {
  LessonItem,
  VideoItem,
  ScholarGuest,
  QuestionFaq,
  ArticleItem,
  PlatformEvent,
  DrDogulProfile,
} from '../types';

export const initialDrDogulProfile: DrDogulProfile = {
  name: 'Dr. Mahjob Dogul',
  honorific: 'Dr.',
  fullName: {
    en: 'Dr. Mahjob Dogul (Dr. Mahjoub Dagal)',
    ar: 'د. محجوب دقل',
    es: 'Dr. Mahjob Dogul',
  },
  title: {
    en: 'Islamic Scholar, Educator & International Dawah Director',
    ar: 'عالم وباحث إسلامي، ومربٍ ومدير دعوة دولي',
    es: 'Erudito Islámico, Educador y Director de Dawah Internacional',
  },
  fieldOfStudy: {
    en: 'Islamic Jurisprudence, Comparative Religion & Contemporary Dawah',
    ar: 'الفقه الإسلامي، مقارنة الأديان، وأساليب الدعوة المعاصرة',
    es: 'Jurisprudencia Islámica, Religión Comparada y Dawah',
  },
  bio: {
    en: 'Dr. Mahjob Dogul is a dedicated Islamic educator and lecturer whose work focuses on presenting the authentic, balanced teachings of Islam to global audiences. Through lectures, university dialogues, community seminars, and interfaith discussions, he works tirelessly to build understanding, dispel misunderstandings, and mentor students of Islamic knowledge across continents.',
    ar: 'د. محجوب دقل هو عالم ومربٍ وباحث إسلامي كرس جهوده لتقديم التعاليم الإسلامية الأصيلة والمتوازنة لمختلف شعوب العالم. ومن خلال محاضراته وندواته الجامعية والمجتمعية وحواراته المتبادلة، يسعى لبناء جسور الفهم الصحيح، وإزالة الشبهات، وتوجيه طلاب المعرفة الإسلامية عبر القارات.',
    es: 'El Dr. Mahjob Dogul es un educador y conferencista islámico cuya labor se centra en presentar las enseñanzas auténticas y equilibradas del Islam a audiencias globales.',
  },
  summary: {
    en: 'Dedicated to presenting authentic, balanced Islamic teachings, interfaith dialogue, and community mentorship across the United States and globally.',
    ar: 'مكرس لتقديم التعاليم الإسلامية الأصيلة والمتوازنة، والحوار البناء، والتوجيه التربوي في الولايات المتحدة وحول العالم.',
    es: 'Dedicado a la enseñanza auténtica del Islam, el diálogo constructivo y el servicio comunitario.',
  },
  credentials: [
    'Senior Imam & Islamic Preacher, United States',
    'Specialist in Quranic Exegesis & Contemporary Outreach',
    'Director of Global Interfaith & Educational Dialogue Initiatives',
  ],
  role: {
    en: 'Islamic Scholar, Educator & International Dawah Director',
    ar: 'عالم وباحث إسلامي، ومربٍ ومدير دعوة دولي',
    es: 'Erudito Islámico, Educador y Director de Dawah Internacional',
  },
  location: {
    en: 'United States & Global Outreach',
    ar: 'الولايات المتحدة الأمريكية والعمل الدعوي الدولي',
    es: 'Estados Unidos y Alcance Internacional',
  },
  biography: {
    en: 'Dr. Mahjob Dogul is a dedicated Islamic educator and lecturer whose work focuses on presenting the authentic, balanced teachings of Islam to global audiences. Through lectures, university dialogues, community seminars, and interfaith discussions, he works tirelessly to build understanding, dispel misunderstandings, and mentor students of Islamic knowledge across continents.',
    ar: 'د. محجوب دقل هو عالم ومربٍ وباحث إسلامي كرس جهوده لتقديم التعاليم الإسلامية الأصيلة والمتوازنة لمختلف شعوب العالم. ومن خلال محاضراته وندواته الجامعية والمجتمعية وحواراته المتبادلة، يسعى لبناء جسور الفهم الصحيح، وإزالة الشبهات، وتوجيه طلاب المعرفة الإسلامية عبر القارات.',
    es: 'El Dr. Mahjob Dogul es un educador y conferencista islámico cuya labor se centra en presentar las enseñanzas auténticas y equilibradas del Islam a audiencias globales. A través de conferencias, diálogos universitarios, seminarios comunitarios y encuentros interreligiosos, trabaja incansablemente para fomentar el entendimiento mutuo.',
  },
  mission: {
    en: 'To make authentic, foundational Islamic knowledge accessible, intelligible, and engaging for every curious mind—Muslims striving for spiritual growth, new Muslims seeking guidance, and non-Muslims desiring respectful, objective insight into the faith.',
    ar: 'تيسير الوصول إلى المعرفة الإسلامية الأصيلة والتأسيسية لكل عقل باحث — للمسلمين الساعين للارتقاء الروحي، والمسلمين الجدد الباحثين عن التوجيه، ولغير المسلمين الراغبين في رؤية موضوعية ومحترمة عن دين الإسلام.',
    es: 'Hacer que el conocimiento islámico auténtico sea accesible y claro para toda mente curiosa: musulmanes que buscan crecimiento espiritual, nuevos musulmanes en busca de guía y no musulmanes interesados en comprender el Islam.',
  },
  vision: {
    en: 'A connected global community where Islam is understood through its foundational sources of mercy, justice, and intellectual clarity, fostering harmonious co-existence and moral excellence across cultures.',
    ar: 'مجتمع عالمي متصل يُفهم فيه الإسلام من خلال ينابيعه الصافية القائمة على الرحمة والعدل والوضوح الفكري، مما يعزز التعايش الإنساني الراقي والسمو الأخلاقي بين كافة الثقافات.',
    es: 'Una comunidad global donde el Islam sea comprendido a través de sus valores fundamentales de misericordia, justicia y claridad intelectual, fomentando la convivencia armoniosa.',
  },
  dawahApproach: {
    en: 'Grounded in the Quranic principle of wisdom and beautiful admonition (Hikmah wa Maw\'izah Hasanah). Prioritizes calm intellectual engagement, respectful dialogue, compassionate listening, and addressing contemporary existential questions with clarity and scholarly depth.',
    ar: 'منهج مؤسس على الأمر القرآني بالدعوة بالحكمة والموعظة الحسنة. يرتكز على الحوار العقلي الهادئ، والإنصات الرحيم، ومخاطبة الأسئلة المعاصرة بعمق علمي ووضوح منهجي.',
    es: 'Fundamentado en el principio coránico de la sabiduría y la buena exhortación. Prioriza el diálogo intelectual sereno, la escucha compasiva y la respuesta a los desafíos contemporáneos.',
  },
  workInUSA: {
    en: 'Active in community leadership, educational workshops, university lectures, youth mentorship programs, and interfaith civic forums throughout major metropolitan centers across the United States.',
    ar: 'نشاط متواصل في القيادة المجتمعية، والورش التعليمية، والمحاضرات الجامعية، وبرامج إرشاد الشباب، والمنتديات الحوارية المدنية في كبرى المدن والمراكز بالولايات المتحدة.',
    es: 'Participación activa en liderazgo comunitario, talleres educativos, conferencias universitarias, mentoría para jóvenes y foros cívicos en Estados Unidos.',
  },
  educationalFocus: {
    en: [
      'Foundational Islamic Creed (Aqeedah) without sectarian distortion',
      'The Ethics of Dialogue and Cross-Cultural Communication',
      'Contemporary Challenges Facing Muslim Youth in the West',
      'Principles of Mercy and Social Welfare in Islamic Jurisprudence',
    ],
    ar: [
      'أصول العقيدة الإسلامية الصحيحة دون غلو أو إفراط',
      'أدب الحوار والتواصل الحضاري بين الثقافات',
      'التحديات المعاصرة التي تواجه الشباب المسلم في العالم المعاصر',
      'مقاصد الرحمة والعدالة الاجتماعية في الشريعة الإسلامية',
    ],
    es: [
      'Credo islámico fundamental (Aqidah) sin distorsiones',
      'Ética del diálogo y comunicación intercultural',
      'Desafíos contemporáneos de la juventud musulmana en Occidente',
      'Principios de misericordia y bienestar social en la jurisprudencia',
    ],
  },
  communityInitiatives: {
    en: [
      'Weekly Open Islamic Inquiries & Youth Q&A Forums',
      'New Muslim Welcome, Guidance & Fellowship Program',
      'Family Counseling & Cross-Generational Understanding Workshops',
      'Community Food Drives and Civic Engagement Projects',
    ],
    ar: [
      'جلسات أسبوعية مفتوحة للأسئلة والإرشاد الشبابي',
      'برنامج رعاية واحتضان وتوجيه المسلمين الجدد',
      'ورش الإرشاد الأسري والتفاهم بين الأجيال',
      'مبادرات التكافل الاجتماعي والمشاركة المدنية الإيجابية',
    ],
    es: [
      'Foros semanales de preguntas abiertas y orientación juvenil',
      'Programa de bienvenida y acompañamiento para nuevos musulmanes',
      'Talleres de orientación familiar y entendimiento intergeneracional',
      'Proyectos de compromiso cívico y solidaridad comunitaria',
    ],
  },
  internationalOutreach: {
    en: [
      'International lecture tours in the Americas, Europe, Africa, and the Middle East',
      'Multilingual digital broadcasts reaching students in over 100 countries',
      'Collaborative scholarly symposiums with international Islamic universities',
    ],
    ar: [
      'جولات ومحاضرات تعليمية في الأمريكتين وأوروبا وأفريقيا والشرق الأوسط',
      'بثوث رقمية متعددة اللغات تصل للطلاب في أكثر من 100 دولة',
      'ندوات بحثية مشتركة مع كبرى الجامعات والمؤسسات الإسلامية',
    ],
    es: [
      'Giras de conferencias en América, Europa, África y Oriente Medio',
      'Transmisiones digitales multilingües para estudiantes en más de 100 países',
      'Simposios académicos en colaboración con universidades islámicas',
    ],
  },
};

export const lessonsData: LessonItem[] = [
  {
    id: 'lesson-1',
    category: 'Islam 101',
    categorySlug: 'islam-101',
    title: {
      en: 'Islam 101: Understanding the Essence of Submission',
      ar: 'مدخل إلى الإسلام: فهم جوهر التسليم لله',
      es: 'Islam 101: Comprendiendo la Esencia de la Sumisión',
    },
    description: {
      en: 'A foundational overview of what Islam means linguistically and spiritually, introducing the core concept of Tawhid (Pure Monotheism).',
      ar: 'نظرة تأسيسية شاملة لمعنى الإسلام لغةً وشرعاً، مع التعريف بمفهوم التوحيد الخالص.',
      es: 'Una visión general y accesible de lo que significa el Islam espiritual y lingüísticamente, presentando el concepto de Tawhid (Monoteísmo Puro).',
    },
    syllabus: {
      en: [
        'Linguistic meaning of Islam and Salam (Peace)',
        'The comprehensive concept of worship (Ibadah) in daily life',
        'The continuity of monotheistic revelation across human history',
        'The three dimensions: Islam, Iman, and Ihsan',
      ],
      ar: [
        'المعنى اللغوي والشرعي للإسلام والسلام',
        'المفهوم الشامل للعبادة في تفاصيل الحياة اليومية',
        'وحدة الرسالات السماوية في الدعوة إلى عبادة الله وحده',
        'مراتب الدين الثلاث: الإسلام، الإيمان، والإحسان',
      ],
      es: [
        'Significado del Islam y su raíz Salam (Paz)',
        'Concepto integral de la adoración (Ibadah) en la vida diaria',
        'Continuidad de la revelación monoteísta a lo largo de la historia',
        'Las tres dimensiones: Islam, Iman e Ihsan',
      ],
    },
    difficulty: 'beginner',
    duration: '25 min',
    languagesAvailable: ['English', 'العربية', 'Español'],
    keyTakeaways: {
      en: [
        'Islam is not a new religion, but the universal message taught by all prophets.',
        'Peace is achieved through sincere harmony with the Divine Creator.',
      ],
      ar: [
        'الإسلام ليس ديناً مستحدثاً، بل هو الرسالة الخالدة لجميع الأنبياء والمرسلين.',
        'السلام الحقيقي يتحقق بالانسجام التام مع توجيهات الخالق العظيم.',
      ],
      es: [
        'El Islam no es una religión nueva, sino el mensaje universal de todos los profetas.',
        'La paz se alcanza mediante la armonía sincera con el Creador Supremo.',
      ],
    },
    audioClipAvailable: true,
  },
  {
    id: 'lesson-2',
    category: 'Who is Allah?',
    categorySlug: 'who-is-allah',
    title: {
      en: 'Who is Allah? The Divine Names & Attributes',
      ar: 'من هو الله؟ أسماء الله الحسنى وصفاته العلى',
      es: '¿Quién es Allah? Los Nombres y Atributos Divinos',
    },
    description: {
      en: 'Explore the Islamic understanding of the Creator: the Transcendent, the Most Merciful (Ar-Rahman), the Ever-Living, and the Just.',
      ar: 'استكشاف المفهوم الإسلامي للخالق: المنزه عن النقص، الرحمن الرحيم، الحي القيوم، العدل.',
      es: 'Explora la comprensión islámica del Creador: Trascendente, Misericordioso (Ar-Rahman), Justo y Único.',
    },
    syllabus: {
      en: [
        'Allah: The Unique Proper Name of God in Arabic',
        'Surah Al-Ikhlas: The definitive Quranic definition of God',
        'The balance between Divine Transcendence and Divine Closeness',
        'Manifestation of Ar-Rahman (The Most Merciful) in creation',
      ],
      ar: [
        'اسم الجلالة "الله": الدلالة والخصوصية',
        'سورة الإخلاص: التعريف القرآني الجامع بالله جل وعلا',
        'التوازن بين التنزيه المطلق وقرب الله من عباده',
        'تجليات اسم الرحمن الرحيم في الكون والتشريع',
      ],
      es: [
        'Allah: El nombre propio de Dios en el idioma árabe',
        'Sura Al-Ikhlas: La definición coránica de Dios',
        'Equilibrio entre Trascendencia y Cercanía Divina',
        'Manifestación de la Misericordia Divina en la creación',
      ],
    },
    difficulty: 'beginner',
    duration: '35 min',
    languagesAvailable: ['English', 'العربية', 'Español'],
    keyTakeaways: {
      en: [
        'Allah has no partners, no parent, no offspring, and no likeness.',
        'God is both majestically Transcendent and closer to humanity than their jugular vein.',
      ],
      ar: [
        'الله واحد أحد، لم يلد ولم يولد ولم يكن له كفواً أحد.',
        'الله منزه في علياء سمائه، ومع ذلك فهو أقرب إلى الإنسان من حبل الوريد.',
      ],
      es: [
        'Allah es Único, no engendra ni fue engendrado, no tiene semejante.',
        'Dios es infinitamente Trascendente y a la vez más cercano al hombre que su propia vena yugular.',
      ],
    },
    audioClipAvailable: true,
  },
  {
    id: 'lesson-3',
    category: 'The Quran',
    categorySlug: 'the-quran',
    title: {
      en: 'The Quran: Preservation, Structure, and Message',
      ar: 'القرآن الكريم: التوثيق، البنية، والرسالة الخالدة',
      es: 'El Corán: Preservación, Estructura y Mensaje',
    },
    description: {
      en: 'How the final revelation was transmitted, memorized, and preserved across centuries, and how to approach reading its guidance.',
      ar: 'كيف حُفظ القرآن الكريم تلاوةً وتدويناً عبر القرون، وكيفية التعامل مع هداياته ونظمه.',
      es: 'Cómo la revelación final fue transmitida, memorizada y preservada, y cómo acercarse a su lectura.',
    },
    syllabus: {
      en: [
        'Oral transmission (Tawatur) and textual compilation',
        'Structure: Surahs, Ayahs, and themes of revelation',
        'The linguistic and thematic coherence of the Quran',
        'Practical etiquette for reading and reflecting upon the Quran',
      ],
      ar: [
        'التواتر الشفهي والتدوين النصي المحكم',
        'بنية القرآن: السور والآيات ومقاصد النزول',
        'الإعجاز البياني والوحدة الموضوعية في النظم القرآني',
        'آداب التلاوة والتدبر في حياة المسلم',
      ],
      es: [
        'Transmisión oral continua y compilación textual',
        'Estructura: Suras, Ayas y temas de la revelación',
        'Coherencia lingüística y temática del texto sagrado',
        'Pautas prácticas para la lectura reflexiva del Corán',
      ],
    },
    difficulty: 'beginner',
    duration: '40 min',
    languagesAvailable: ['English', 'العربية', 'Español'],
    keyTakeaways: {
      en: [
        'The Quran remains identical in word, letter, and sound since its revelation over 1,400 years ago.',
      ],
      ar: [
        'القرآن الكريم محفوظ لفظاً ورسماً وتلاوة كما أُنزل على النبي محمد صلى الله عليه وسلم.',
      ],
      es: [
        'El Corán permanece intacto en cada palabra y letra desde hace más de 1.400 años.',
      ],
    },
    audioClipAvailable: true,
  },
  {
    id: 'lesson-4',
    category: 'Prophet Muhammad ﷺ',
    categorySlug: 'prophet-muhammad',
    title: {
      en: 'Prophet Muhammad ﷺ: Character, Mercy, and Legacy',
      ar: 'النبي محمد ﷺ: الأخلاق العظيمة، الرحمة المهداة، والأثر الخالد',
      es: 'El Profeta Muhammad ﷺ: Carácter, Misericordia y Legado',
    },
    description: {
      en: 'Examine the historical life (Seerah), moral virtues, and universal compassion exemplified by the final Messenger of God.',
      ar: 'دراسة سيرة النبي ﷺ العطرة، وشمائله الأخلاقية، ومظاهر رحمته الشاملة للبشرية جمعاء.',
      es: 'Examen histórico de la vida (Seerah), las virtudes morales y la compasión universal del último Mensajero de Dios.',
    },
    syllabus: {
      en: [
        'Life before prophethood: Al-Amin (The Trustworthy)',
        'The prophetic mission: Patience in Mecca and justice in Medina',
        'Treaty of Hudaybiyyah and the merciful conquest of Mecca',
        'The Farewell Sermon: Universal human equality and brotherhood',
      ],
      ar: [
        'حياته قبل البعثة: الصادق الأمين',
        'المرحلة المكية والمدنية: الصبر وإرساء دعائم العدل',
        'صلح الحديبية وفتح مكة: قمة العفو عند المقدرة',
        'خطبة الوداع: إعلان حقوق الإنسان والمساواة العالمية',
      ],
      es: [
        'Vida previa a la profecía: Al-Amin (El Confiable)',
        'La misión profética: Paciencia en La Meca y justicia en Medina',
        'El Tratado de Hudaybiyyah y la conquista pacífica de La Meca',
        'El Sermón de Despedida: Igualdad humana y fraternidad',
      ],
    },
    difficulty: 'intermediate',
    duration: '45 min',
    languagesAvailable: ['English', 'العربية', 'Español'],
    keyTakeaways: {
      en: [
        'Sent as a mercy to all creation (Rahmatan lil-Alameen), championing compassion and equality.',
      ],
      ar: [
        'أُرسل رحمة للعالمين، وحطم الفوارق الطبقية والعرقية بين البشر.',
      ],
      es: [
        'Enviado como misericordia para toda la creación, defendiendo la dignidad universal.',
      ],
    },
    audioClipAvailable: true,
  },
  {
    id: 'lesson-5',
    category: 'The Five Pillars',
    categorySlug: 'five-pillars',
    title: {
      en: 'The Five Pillars of Islam: Spiritual Foundations',
      ar: 'أركان الإسلام الخمسة: البناء الإيماني والعملي',
      es: 'Los Cinco Pilares del Islam: Cimientos Espirituales',
    },
    description: {
      en: 'A comprehensive study of the Shahadah, Salah, Zakat, Sawm, and Hajj as an interconnected framework of spiritual and social life.',
      ar: 'دراسة تأصيلية لأركان الإسلام الخمسة: الشهادتان، الصلاة، الزكاة، الصوم، وحج البيت لمن استطاع إليه سبيلاً.',
      es: 'Estudio exhaustivo de los cinco pilares: Shahada, Salat, Zakat, Sawm y Hayy como estructura de vida espiritual.',
    },
    syllabus: {
      en: [
        'Shahadah: The declaration of faith and its internal implications',
        'Salah: Direct connection with the Creator five times daily',
        'Zakat: Social justice and purification of wealth',
        'Sawm: Spiritual mastery, empathy, and self-discipline',
        'Hajj: The ultimate pilgrimage of global unity',
      ],
      ar: [
        'الشهادتان: إقرار القلب ومقتضى العمل',
        'الصلاة: الصلة المباشرة مع الخالق خمس مرات يومياً',
        'الزكاة: التكافل الاجتماعي وتطهير المال والأنفس',
        'الصيام: تزكية الروح والشعور بالمحتاجين',
        'الحج: المؤتمر الإيماني الأعظم للوحدة الإنسانية',
      ],
      es: [
        'Shahada: La declaración de fe y su compromiso',
        'Salat: Conexión diaria con el Creador en cinco momentos',
        'Zakat: Justicia distributiva y purificación material',
        'Sawm: Dominio espiritual y empatía hacia los necesitados',
        'Hayy: La peregrinación máxima de fraternidad global',
      ],
    },
    difficulty: 'beginner',
    duration: '50 min',
    languagesAvailable: ['English', 'العربية', 'Español'],
    keyTakeaways: {
      en: [
        'The pillars balance personal devotion with economic and social responsibility.',
      ],
      ar: [
        'الأركان الخمسة تجمع بين العبادة الروحية والمسؤولية الاجتماعية والاقتصادية.',
      ],
      es: [
        'Los pilares equilibran la devoción personal con la responsabilidad social y económica.',
      ],
    },
    audioClipAvailable: true,
  },
  {
    id: 'lesson-6',
    category: 'Prayer',
    categorySlug: 'prayer',
    title: {
      en: 'Prayer (Salah): The Ascension of the Believer',
      ar: 'الصلاة: معراج المؤمن وسكينة الروح',
      es: 'La Oración (Salat): La Ascensión del Creyente',
    },
    description: {
      en: 'The purpose, spiritual dimensions, movements, and tranquil focus (Khushu) of the five daily prayers.',
      ar: 'مقاصد الصلاة، أبعادها الروحية، أفعالها وأقوالها، وتحقيق الخشوع والطمأنينة فيها.',
      es: 'El propósito, dimensiones espirituales, posturas y concentración serena (Jushu) en las oraciones diarias.',
    },
    syllabus: {
      en: [
        'Purification (Wudu) as physical and inner cleansing',
        'The cosmic alignment of prayer times',
        'Meaning of the physical postures: standing, bowing, and prostrating',
        'Cultivating mindfulness (Khushu) amidst modern distractions',
      ],
      ar: [
        'الوضوء وطهارة الباطن والظاهر',
        'حكمة مواقيت الصلاة الموزعة على مدار اليوم',
        'معاني أركان الصلاة: القيام والركوع والسجود',
        'سبل تحقيق الخشوع وحضور القلب في زمن المشتتات',
      ],
      es: [
        'La ablución (Wudu) como purificación física e interior',
        'Distribución de los horarios de oración a lo largo del día',
        'Significado de las posturas: inclinación y postración',
        'Cómo alcanzar la concentración plena y paz interior',
      ],
    },
    difficulty: 'beginner',
    duration: '30 min',
    languagesAvailable: ['English', 'العربية', 'Español'],
    keyTakeaways: {
      en: [
        'Prostration is the nearest a human being comes to their Creator.',
      ],
      ar: [
        'أقرب ما يكون العبد من ربه وهو ساجد.',
      ],
      es: [
        'La postración es el momento de mayor cercanía entre el ser humano y su Creador.',
      ],
    },
  },
  {
    id: 'lesson-7',
    category: 'Fasting',
    categorySlug: 'fasting',
    title: {
      en: 'Fasting (Sawm) & Ramadan: Transforming the Self',
      ar: 'الصيام وشهر رمضان: محطة التغيير وتزكية النفس',
      es: 'El Ayuno (Sawm) y Ramadán: Transformación Personal',
    },
    description: {
      en: 'Discover the medical, psychological, moral, and communal dimensions of fasting during the holy month of Ramadan.',
      ar: 'أسرار الصوم الطبية والنفسية والأخلاقية والاجتماعية في شهر رمضان المبارك.',
      es: 'Dimensiones médicas, psicológicas, morales y comunitarias del ayuno en el mes bendito de Ramadán.',
    },
    syllabus: {
      en: [
        'The definition and rules of Islamic fasting from dawn to sunset',
        'Exemptions: travelers, the sick, pregnant women, and elderly',
        'Fasting as ethical discipline of tongue, eyes, and actions',
        'The spiritual rejuvenation of Laylat al-Qadr (Night of Decree)',
      ],
      ar: [
        'مفهوم الصوم الشرعي من طلوع الفجر إلى غروب الشمس',
        'الرخص الشرعية: المسافر، المريض، الحامل، والشيخ الكبير',
        'صيام الجوارح عن اللغو والآثام قبل صيام البطن',
        'بركات ليلة القدر وفضل العشر الأواخر',
      ],
      es: [
        'Definición y preceptos del ayuno desde el alba hasta la puesta del sol',
        'Exenciones compasivas para enfermos, viajeros y ancianos',
        'El ayuno de la conducta, la lengua y el pensamiento',
        'La noche trascendente de Laylat al-Qadr',
      ],
    },
    difficulty: 'beginner',
    duration: '28 min',
    languagesAvailable: ['English', 'العربية', 'Español'],
    keyTakeaways: {
      en: [
        'Fasting develops Taqwa (God-consciousness), gratitude, and empathy with the impoverished.',
      ],
      ar: [
        'الصيام ينمي تقوى الله، ويغرس في النفس الشكر والتعاطف العملي مع الفقراء.',
      ],
      es: [
        'El ayuno cultiva la conciencia de Dios, la gratitud y la solidaridad con los más desfavorecidos.',
      ],
    },
  },
  {
    id: 'lesson-8',
    category: 'Zakat',
    categorySlug: 'zakat',
    title: {
      en: 'Zakat: Economic Justice and Social Solidarity',
      ar: 'الزكاة: العدالة الاقتصادية والتكافل الاجتماعي',
      es: 'Zakat: Justicia Económica y Solidaridad Social',
    },
    description: {
      en: 'How the obligatory 2.5% contribution purifies surplus wealth and eliminates cyclical poverty within society.',
      ar: 'كيف تسهم فريضة الزكاة بنسبة 2.5% في تطهير الفائض المالي والقضاء على الفقر في المجتمع.',
      es: 'Cómo el 2.5% obligatorio sobre excedentes de riqueza purifica el patrimonio y erradica la pobreza estructural.',
    },
    syllabus: {
      en: [
        'The calculation of Nisab (minimum threshold)',
        'The eight categories of recipients outlined in the Quran',
        'Zakat vs. voluntary charity (Sadaqah)',
        'Macroeconomic benefits of wealth circulation vs. hoarding',
      ],
      ar: [
        'حساب النصاب وحولان الحول',
        'مصارف الزكاة الثمانية المذكورة في سورة التوبة',
        'الفرق بين الزكاة الواجبة والصدقة التطوعية',
        'الأثر الاقتصادي لحركة المال ومنع اكتناز الثروة',
      ],
      es: [
        'Cálculo del Nisab (umbral mínimo imponible)',
        'Las ocho categorías de beneficiarios según el Corán',
        'Diferencia entre Zakat obligatorio y Sadaqah voluntaria',
        'Impacto socioeconómico de la circulación de la riqueza',
      ],
    },
    difficulty: 'intermediate',
    duration: '32 min',
    languagesAvailable: ['English', 'العربية', 'Español'],
    keyTakeaways: {
      en: [
        'Wealth is a trust from God; the poor have a recognized right in surplus capital.',
      ],
      ar: [
        'المال مال الله ومستخلف فيه الإنسان، وللمحتاجين حق معلوم في أموال الأغنياء.',
      ],
      es: [
        'La riqueza es un depósito confiado por Dios; los necesitados tienen un derecho directo en ella.',
      ],
    },
  },
  {
    id: 'lesson-9',
    category: 'Hajj',
    categorySlug: 'hajj',
    title: {
      en: 'Hajj: The Great Pilgrimage of Abrahamic Unity',
      ar: 'الحج: المؤتمر الإبراهيمي الأعظم للوحدة الإنسانية',
      es: 'El Hayy: La Gran Peregrinación de Unidad Abrahámica',
    },
    description: {
      en: 'The rites of the annual pilgrimage to Mecca, retracing the legacy of Prophet Abraham, Hagar, and Ishmael.',
      ar: 'مناسك الحج ومقاصدها العظيمة، مستحضرين سيرة إبراهيم وهاجر وإسماعيل عليهم السلام.',
      es: 'Los ritos de la peregrinación a La Meca, reviviendo el legado del Profeta Abraham, Agar e Ismael.',
    },
    syllabus: {
      en: [
        'Ihram: Stripping away worldly status, wealth, and race differences',
        'Tawaf: Circumambulating the Kaaba as the central focal point of monotheism',
        'Standing at Arafat: The pinnacle day of repentance and divine mercy',
        'Universal brotherhood demonstrated by millions in simple white garments',
      ],
      ar: [
        'الإحرام: تجرد الإنسان من مظاهر الدنيا والفوارق الطبقية',
        'الطواف بالبيت العتيق: رمزية التوحيد والاتجاه نحو الخالق',
        'يوم عرفة: ركن الحج الأعظم ويوم المغفرة الشاملة',
        'الأخوة الإنسانية الجامعة بين الملايين بلباس أبيض موحد',
      ],
      es: [
        'Ihram: Despojarse de distinciones de estatus y riqueza',
        'Tawaf: Circunvalación a la Kaaba como símbolo del monoteísmo',
        'El día de Arafat: La cumbre del arrepentimiento y la súplica',
        'Hermandad universal manifestada por millones con vestiduras blancas idénticas',
      ],
    },
    difficulty: 'intermediate',
    duration: '35 min',
    languagesAvailable: ['English', 'العربية', 'Español'],
    keyTakeaways: {
      en: [
        'Hajj is the world\'s largest annual gathering promoting absolute racial and social equality before God.',
      ],
      ar: [
        'الحج تجسيد عملي لأسمى معاني المساواة ونبذ العنصرية والتفاضل العرقي أمام الله.',
      ],
      es: [
        'El Hayy es la mayor congregación anual que proclama la igualdad humana absoluta ante Dios.',
      ],
    },
  },
  {
    id: 'lesson-10',
    category: 'Islamic Ethics',
    categorySlug: 'islamic-ethics',
    title: {
      en: 'Islamic Ethics: Character (Akhlaq) in Thought and Action',
      ar: 'الأخلاق في الإسلام: مكارم الأخلاق فكراً وسلوكاً',
      es: 'Ética Islámica: El Carácter (Ajlaq) en Pensamiento y Acción',
    },
    description: {
      en: 'How moral integrity, honesty, humility, fulfilling promises, and kindness define the core objective of the Islamic revelation.',
      ar: 'كيف تجسد الأمانة والصدق والتواضع والوفاء بالعهود المقصد الأسمى لرسالة الإسلام.',
      es: 'Cómo la honestidad, humildad, cumplimiento de la palabra y bondad constituyen el fin esencial del Islam.',
    },
    syllabus: {
      en: [
        '"I was only sent to perfect good character" — Hadith analysis',
        'Honesty in trade, communication, and digital interaction',
        'Controlling anger, pardoning injuries, and returning good for evil',
        'Environmental stewardship: Respect for animals, nature, and water',
      ],
      ar: [
        'حديث "إنما بُعثت لأتمم مكارم الأخلاق": دلالاته وتطبيقاته',
        'الصدق والأمانة في التجارة والتعاملات الحياتية والافتراضية',
        'كظم الغيظ، العفو عند المقدرة، والدفع بالتي هي أحسن',
        'رعاية البيئة: الرفق بالحيوان وحفظ الموارد الطبيعية والمياه',
      ],
      es: [
        'Análisis del Hadiz: "Fui enviado para perfeccionar el buen carácter"',
        'Honestidad en el comercio, la palabra y las relaciones digitales',
        'Control de la ira, perdón generoso y responder al mal con bien',
        'Custodia ambiental: Respeto por los animales, la naturaleza y el agua',
      ],
    },
    difficulty: 'intermediate',
    duration: '38 min',
    languagesAvailable: ['English', 'العربية', 'Español'],
    keyTakeaways: {
      en: [
        'Ritual worship without ethical virtue is incomplete; moral character is the true fruit of faith.',
      ],
      ar: [
        'العبادة بلا خلق حسن لا تكتمل؛ فالأخلاق هي ثمرة الإيمان الحقيقي وعنوانه.',
      ],
      es: [
        'El culto ritual sin virtudes éticas es incompleto; la moralidad es el fruto genuino de la fe.',
      ],
    },
  },
  {
    id: 'lesson-11',
    category: 'Family in Islam',
    categorySlug: 'family-in-islam',
    title: {
      en: 'Family in Islam: Compassion, Rights, and Harmony',
      ar: 'الأسرة في الإسلام: المودة والرحمة والحقوق المتبادلة',
      es: 'La Familia en el Islam: Afecto, Derechos y Convivencia',
    },
    description: {
      en: 'The foundational role of the family unit, mutual marital rights, honoring parents, and nurturing children with love and wisdom.',
      ar: 'مكانة الأسرة في الإسلام، وحقوق الزوجين، وبر الوالدين، وتربية الأبناء بحكمة وعطف.',
      es: 'El rol fundamental del núcleo familiar, derechos conyugales, honra a los padres y crianza amorosa.',
    },
    syllabus: {
      en: [
        'Marriage as a spiritual covenant of tranquility, love, and mercy (Mawaddah wa Rahmah)',
        'The paramount duty of honoring and caring for parents in their old age',
        'Rights and emotional well-being of children',
        'Resolving family disputes through respectful arbitration',
      ],
      ar: [
        'الزواج ميثاق غليظ وسكن ومودة ورحمة بين الزوجين',
        'عظمة بر الوالدين وحرمة العقوق خصوصاً في الكبر',
        'حقوق الأبناء في التربية السليمة والعطف والنفقة',
        'حل الخلافات الأسرية بالحوار والحكمة والصلح',
      ],
      es: [
        'El matrimonio como pacto de serenidad, amor y compasión',
        'El deber primordial de cuidar y honrar a los padres en la vejez',
        'Derechos de los hijos al afecto, educación y bienestar',
        'Resolución de disputas mediante el diálogo y el respeto mutuo',
      ],
    },
    difficulty: 'intermediate',
    duration: '34 min',
    languagesAvailable: ['English', 'العربية', 'Español'],
    keyTakeaways: {
      en: [
        'Strong families form the moral backbone of a healthy, compassionate civilization.',
      ],
      ar: [
        'تماسك الأسرة وترابطها هو صمام الأمان لبناء مجتمع فاضل ورحيم.',
      ],
      es: [
        'Familias sólidas constituyen el pilar ético de una civilización sana y solidaria.',
      ],
    },
  },
  {
    id: 'lesson-12',
    category: 'Women in Islam',
    categorySlug: 'women-in-islam',
    title: {
      en: 'Women in Islam: Spiritual Equality, Dignity, and Rights',
      ar: 'المرأة في الإسلام: المساواة الإيمانية، الكرامة، والحقوق',
      es: 'Las Mujeres en el Islam: Igualdad Espiritual, Dignidad y Derechos',
    },
    description: {
      en: 'An objective historical and theological examination of female empowerment, legal autonomy, property rights, education, and scholarship in Islam.',
      ar: 'قراءة علمية وموضوعية في مكانة المرأة، حقوقها المالية والقانونية، والتعليم، وعالمات الإسلام عبر التاريخ.',
      es: 'Examen histórico y teológico de la autonomía legal, derecho a la propiedad, educación y liderazgo femenino en el Islam.',
    },
    syllabus: {
      en: [
        'Spiritual equality before God: Surah Al-Ahzab (33:35)',
        'Legal identity: Full property ownership, contract autonomy, and inheritance',
        'Historical legacy of female scholarship (e.g., Aisha bint Abi Bakr, Fatima al-Fihri)',
        'Addressing modern cultural misconceptions vs. authentic Islamic teachings',
      ],
      ar: [
        'المساواة في الأجر والكرامة الإنسانية بنص القرآن (إن المسلمين والمسلمات...)',
        'الذمة المالية المستقلة، وحرية التصرف في الملكية منذ فجر الإسلام',
        'دور المرأة في الرواية والتعليم والقيادة العلمية (عائشة أم المؤمنين، فاطمة الفهرية)',
        'التمييز بين العادات والتقاليد المحلية وبين جوهر التشريع الإسلامي الأصيل',
      ],
      es: [
        'Igualdad espiritual ante Dios ratificada explícitamente en el Corán',
        'Independencia económica y plena capacidad jurídica de propiedad y comercio',
        'Legado histórico de eruditas y líderes científicas islámicas',
        'Distinción clara entre costumbres culturales locales y la doctrina islámica',
      ],
    },
    difficulty: 'advanced',
    duration: '42 min',
    languagesAvailable: ['English', 'العربية', 'Español'],
    keyTakeaways: {
      en: [
        'Islam granted women independent legal, financial, and civil status over fourteen centuries ago.',
      ],
      ar: [
        'منح الإسلام المرأة الاستقلالية القانونية والمالية الكاملة قبل أكثر من أربعة عشر قرناً.',
      ],
      es: [
        'El Islam otorgó a la mujer plena autonomía legal, financiera y civil hace catorce siglos.',
      ],
    },
  },
  {
    id: 'lesson-13',
    category: 'Islam and Science',
    categorySlug: 'islam-and-science',
    title: {
      en: 'Islam and Science: Harmony of Revelation and Rational Inquiry',
      ar: 'الإسلام والعلوم: التناغم بين الوحي والعقل والبحث التجريبي',
      es: 'El Islam y la Ciencia: Armonía entre Revelación e Indagación',
    },
    description: {
      en: 'Explore how Quranic encouragement of observation and contemplation sparked the Islamic Golden Age of scientific discovery.',
      ar: 'كيف كانت الآيات القرآنية الداعية للنظر والتفكر منطلقاً للنهضة العلمية الكبرى في الحضارة الإسلامية.',
      es: 'Cómo el llamado coránico a la observación y reflexión detonó la Edad de Oro de los descubrimientos científicos.',
    },
    syllabus: {
      en: [
        'The Quranic mandate to observe cosmic patterns (Ayat)',
        'The Golden Age: Ibn al-Haytham (Optics), Al-Khwarizmi (Algebra), Ibn Sina (Medicine)',
        'Why faith and empirical observation are mutually reinforcing in Islamic epistemology',
        'Bioethics and technological development from an Islamic ethical perspective',
      ],
      ar: [
        'الدعوة القرآنية للنظر في ملكوت السماوات والأرض والآفاق',
        'العصر الذهبي للعلوم: ابن الهيثم، الخوارزمي، ابن سينا، الزهراوي',
        'التكامل بين المعرفة الإيمانية والتجريب العلمي في الفكر الإسلامي',
        'الأخلاقيات الحيوية والتعامل مع الذكاء الاصطناعي والتكنولوجيا الحديثة',
      ],
      es: [
        'El mandato coránico de observar los patrones del cosmos',
        'La Edad de Oro científica: Ibn al-Haitham, Al-Juarizmi, Ibn Sina',
        'Integración armoniosa entre fe e indagación empírica',
        'Bioética y avances tecnológicos desde los principios islámicos',
      ],
    },
    difficulty: 'advanced',
    duration: '45 min',
    languagesAvailable: ['English', 'العربية', 'Español'],
    keyTakeaways: {
      en: [
        'In Islam, scientific discovery is a form of worshipping God by uncovering the majesty of creation.',
      ],
      ar: [
        'البحث العلمي في الإسلام عبادة وتفكر يعزز إيمان الباحث بعظمة الخالق المبدع.',
      ],
      es: [
        'En el Islam, la investigación científica es una forma de devoción que revela la sabiduría del Creador.',
      ],
    },
  },
  {
    id: 'lesson-14',
    category: 'Islam and Society',
    categorySlug: 'islam-and-society',
    title: {
      en: 'Islam and Society: Pluralism, Justice, and Good Citizenship',
      ar: 'الإسلام والمجتمع: التعددية، العدالة، والمواطنة الصالحة',
      es: 'Islam y Sociedad: Pluralismo, Justicia y Ciudadanía Positiva',
    },
    description: {
      en: 'Islamic civilizational guidelines for peaceful co-existence, protecting minority rights, civic contribution, and societal harmony.',
      ar: 'الأسس الحضارية الإسلامية للتعايش السلمي، وحماية حقوق الأقليات، والمشاركة المدنية الإيجابية.',
      es: 'Pautas para la convivencia pacífica, la protección de minorías, la justicia civil y el bienestar comunitario.',
    },
    syllabus: {
      en: [
        'The Constitution of Medina: The world\'s earliest pluralistic civic charter',
        'Protecting religious freedom: "There is no compulsion in religion" (2:256)',
        'Positive civic duty: Contributing to public welfare and justice for all',
        'Overcoming tribalism, nationalism, and racial prejudice',
      ],
      ar: [
        'وثيقة المدينة المنورة: أول دستور مدني جامع للتعددية والتعايش',
        'حرية الاعتقاد بنص القرآن الصريح: "لا إكراه في الدين"',
        'المسؤولية المدنية: نفع المجتمع العام وإقامة العدل للجميع',
        'محاربة العصبية والعنصرية والتعصب المناطقي',
      ],
      es: [
        'La Constitución de Medina: Primera carta cívica de convivencia plural',
        'Libertad de culto: "No hay coacción en la religión" (2:256)',
        'Compromiso cívico: Contribuir activamente al bienestar de la sociedad',
        'Superación de prejuicios étnicos, tribales y nacionales',
      ],
    },
    difficulty: 'advanced',
    duration: '38 min',
    languagesAvailable: ['English', 'العربية', 'Español'],
    keyTakeaways: {
      en: [
        'A Muslim is commanded to be a beacon of benefit, honesty, and justice wherever they reside.',
      ],
      ar: [
        'المسلم مأمور بأن يكون مصدراً للخير والنفع والأمان والعدل في أي مجتمع يعيش فيه.',
      ],
      es: [
        'El musulmán tiene el deber de ser fuente de beneficio, rectitud y paz dondequiera que resida.',
      ],
    },
  },
  {
    id: 'lesson-15',
    category: 'Common Questions About Islam',
    categorySlug: 'common-questions',
    title: {
      en: 'Common Questions About Islam: Clarity and Perspective',
      ar: 'أسئلة متكررة حول الإسلام: وضوح وإنصاف',
      es: 'Preguntas Frecuentes sobre el Islam: Claridad y Perspectiva',
    },
    description: {
      en: 'Direct, clear, and nuanced answers to frequent inquiries regarding Sharia, destiny, free will, dietary laws, and jihad.',
      ar: 'إجابات مباشرة ومفصلة حول الشريعة، القضاء والقدر، الحكمة من التشريعات، ومفهوم الجهاد.',
      es: 'Respuestas directas y equilibradas sobre la Sharia, el libre albedrío, las normas dietéticas y el concepto de yihad.',
    },
    syllabus: {
      en: [
        'What is Sharia? The higher objectives (Maqasid) of human welfare and dignity',
        'Free will vs. Divine Destiny (Qadar): Understanding human accountability',
        'Dietary laws: The wisdom of Halal and avoiding harm',
        'Jihad: Spiritual struggle (greater jihad) vs. defensive combat ethics',
      ],
      ar: [
        'ما هي الشريعة؟ مقاصد حفظ الدين والنفس والعقل والمال والنسل',
        'القضاء والقدر والإرادة الإنسانية: التوفيق بين التوكل والعمل',
        'الحكمة من أحكام الحلال والحرام في الأطعمة والمشروبات',
        'جهاد النفس وجهاد الكلمة وضوابط الدفاع عن النفس ورد العدوان',
      ],
      es: [
        '¿Qué es la Sharia? Los objetivos supremos de preservar la vida y la dignidad',
        'Libre albedrío y Decreto Divino (Qadar): Responsabilidad humana',
        'Sabiduría detrás de las leyes dietéticas (Halal)',
        'Concepto de Yihad: El esfuerzo espiritual interior y límites defensivos',
      ],
    },
    difficulty: 'intermediate',
    duration: '40 min',
    languagesAvailable: ['English', 'العربية', 'Español'],
    keyTakeaways: {
      en: [
        'Sharia fundamentally means "the path to the watering hole"—a system designed to preserve human life, intellect, and justice.',
      ],
      ar: [
        'الشريعة في أصلها هي المورد العذب، وهدفها صيانة كرامة الإنسان وحفظ حقوقه ومصالحه.',
      ],
      es: [
        'La Sharia es literalmente el camino hacia el manantial: un sistema para preservar la vida, el intelecto y la justicia.',
      ],
    },
  },
  {
    id: 'lesson-16',
    category: 'Understanding Muslims',
    categorySlug: 'understanding-muslims',
    title: {
      en: 'Understanding Muslims: Cultural Diversity and Global Realities',
      ar: 'فهم المسلمين: التنوع الثقافي والواقع العالمي المعاصر',
      es: 'Comprender a los Musulmanes: Diversidad Cultural y Realidad Global',
    },
    description: {
      en: 'A demographic and anthropological look into the 1.9 billion Muslims across Africa, Asia, Europe, and the Americas.',
      ar: 'نظرة ديموغرافية وحضارية لواقع 1.9 مليار مسلم يتوزعون في آسيا وأفريقيا وأوروبا والأمريكتين.',
      es: 'Mirada demográfica y cultural a los más de 1.900 millones de musulmanes en los cinco continentes.',
    },
    syllabus: {
      en: [
        'Global demographics: Why 80%+ of Muslims are not Arab',
        'Cultural customs vs. religious obligations: Recognizing the distinction',
        'Islamic holidays: Eid al-Fitr, Eid al-Adha, and the traditions of hospitality',
        'Everyday greetings, etiquette, and visiting a mosque with courtesy',
      ],
      ar: [
        'الخريطة السكانية: أكثر من 80% من مسلمي العالم من غير العرب',
        'التمييز بين التقاليد الموروثة وبين الأحكام الشرعية الأصيلة',
        'الأعياد والمناسبات: عيد الفطر، عيد الأضحى، وتقاليد الكرم',
        'آداب التحية، الزيارات، وإرشادات زيارة المساجد باحترام',
      ],
      es: [
        'Demografía: Más del 80% de los musulmanes no son árabes',
        'Diferenciar entre costumbres culturales locales y preceptos religiosos',
        'Festividades: Eid al-Fitr, Eid al-Adha y la cultura de hospitalidad',
        'Pautas de cortesía, saludos cotidianos y visitas a mezquitas',
      ],
    },
    difficulty: 'beginner',
    duration: '30 min',
    languagesAvailable: ['English', 'العربية', 'Español'],
    keyTakeaways: {
      en: [
        'Islam unites a rich tapestry of cultures, languages, and artistic heritage united by shared monotheistic values.',
      ],
      ar: [
        'الإسلام يجمع شعوباً وثقافات ولغات متباينة تلتقي جميعاً على قيم التوحيد والأخلاق.',
      ],
      es: [
        'El Islam abraza una inmensa diversidad de pueblos unidos por valores monoteístas y éticos comunes.',
      ],
    },
  },
];

export const nonMuslimTopics = [
  {
    id: 'nm-1',
    title: {
      en: 'What Do Muslims Believe?',
      ar: 'ماذا يعتقد المسلمون؟',
      es: '¿Qué creen los musulmanes?',
    },
    excerpt: {
      en: 'Core tenets: belief in One God, angels, revealed scriptures, all prophets, the Day of Judgment, and Divine Wisdom.',
      ar: 'أصول العقيدة: الإيمان بالله وملائكته وكتبه ورسله واليوم الآخر والقدر خيره وشره.',
      es: 'Pilares de la creencia: fe en un Dios Único, ángeles, escrituras sagradas, profetas, el Juicio Final y el Destino.',
    },
    content: {
      en: 'Muslims believe in a single, uncreated, omnipotent, and all-merciful God (Allah in Arabic). Islamic faith is articulated in Six Articles of Belief: belief in God alone without partners; belief in angels as spiritual beings executing Divine commands; belief in the original revelations sent to humanity (including the Torah, the Psalms, the Gospel, and the Quran); belief in all messengers of God from Adam, Noah, Abraham, Moses, Jesus to Muhammad; belief in the Day of Resurrection and accountability; and belief in God\'s ultimate knowledge and decree over creation.',
      ar: 'يؤمن المسلمون بإله واحد لا شريك له، وهو الخالق الرازق الرحمن الرحيم. وتقوم العقيدة على ستة أركان: الإيمان بالله وحده، وملائكته الكرام، وكتبه السماوية الأصلية (التوراة، الزبور، الإنجيل، والقرآن الكريم)، وجميع أنبياء الله ورسله من آدم ونوح وإبراهيم وموسى وعيسى إلى محمد خاتم النبيين، واليوم الآخر للحساب والجزاء، والقدر خيره وشره بحكمة الله الشاملة.',
      es: 'Los musulmanes creen en un Dios Único, Todopoderoso y Misericordioso. La fe se articula en seis artículos: creer en Dios sin asociados; en los ángeles; en las revelaciones divinas originales; en todos los profetas desde Adán, Noé, Abraham, Moisés y Jesús hasta Muhammad; en el Día del Juicio; y en el conocimiento y decreto supremo de Dios.',
    },
  },
  {
    id: 'nm-2',
    title: {
      en: 'Who Is Allah?',
      ar: 'من هو الله؟',
      es: '¿Quién es Allah?',
    },
    excerpt: {
      en: 'Allah is simply the Arabic word for the One God worshipped by Abraham, Moses, Jesus, and Muhammad.',
      ar: 'الله هو الاسم الخاص بالخالق الأحد، وهو ذات الإله الذي عبده إبراهيم وموسى وعيسى ومحمد.',
      es: 'Allah es simplemente la palabra árabe para referirse al Dios Único venerado por Abraham, Moisés, Jesús y Muhammad.',
    },
    content: {
      en: 'Many are surprised to learn that Arabic-speaking Christians and Jews also use the word "Allah" to refer to God. Allah is not a "special Muslim deity" or an idol; it is the unique linguistic term in Arabic denoting the Supreme Creator who has neither gender, plural form, nor physical representation. In the Quran, Allah introduces Himself primarily through mercy: "In the name of God, the Lord of Mercy, the Giver of Mercy."',
      ar: 'كثير من الناس لا يعلمون أن المسيحيين واليهود الناطقين بالعربية يستخدمون لفظ الجلالة "الله" للإشارة إلى الخالق سبحانه. لفظ "الله" ليس إلهاً خاصاً بقوم دون قوم، بل هو الاسم الأعظم لخالق الكون المنزه عن الشبيه والولد والشريك. ويبدأ القرآن كل سوره تقريباً بوصف الله بالرحمة: "بسم الله الرحمن الرحيم".',
      es: 'Muchos descubren con sorpresa que los cristianos y judíos de habla árabe también usan la palabra "Allah" para referirse a Dios. No es una deidad exclusiva de los musulmanes, sino el nombre propio del Creador Supremo, sin género ni representación física. En el Corán, Dios se presenta primordialmente a través de Su infinita misericordia.',
    },
  },
  {
    id: 'nm-3',
    title: {
      en: 'Who Is Muhammad ﷺ?',
      ar: 'من هو النبي محمد ﷺ؟',
      es: '¿Quién es Muhammad ﷺ?',
    },
    excerpt: {
      en: 'A historic prophet born in Mecca in 570 CE, regarded by Muslims as the final messenger in the line of biblical prophets.',
      ar: 'نبي تاريخي وُلد في مكة المكرمة عام 570م، ويعتبره المسلمون خاتم الأنبياء والمرسلين المكمل لرسالات الأنبياء قبله.',
      es: 'Un profeta histórico nacido en La Meca en el año 570 d.C., considerado el último en la cadena de mensajeros de Dios.',
    },
    content: {
      en: 'Muslims do not worship Muhammad; they revere him as a human messenger chosen to deliver God\'s final revelation. Known throughout his youth as "Al-Amin" (The Trustworthy) for his unimpeachable integrity, he received the first verses of the Quran at age 40 in the Cave of Hira. His entire mission emphasized human equality, freeing slaves, upholding women\'s dignity, and establishing social justice. Muslims say "Peace be upon him" (ﷺ) whenever his name is mentioned as an expression of profound respect.',
      ar: 'المسلمون لا يعبدون النبي محمداً؛ بل يوقرونه ويحبونه بصفته رسولاً بشرياً اصطفاه الله لتبليغ رسالته الخاتمة. عُرف في شبابه بالصادق الأمين لأمانته ونزاهته، ونزل عليه الوحي في سن الأربعين في غار حراء. ركزت دعوته على التوحيد، والمساواة الإنسانية، وتحرير الرقاب، ونصرة الضعفاء، والعدل الاجتماعي. ويصلي المسلمون عليه احتراماً ومحبة متى ذُكر اسمه.',
      es: 'Los musulmanes no adoran a Muhammad; lo honran como un ser humano elegido para transmitir la revelación final. Reconocido desde joven como Al-Amin (El Confiable), recibió los primeros versículos coránicos a los 40 años. Su mensaje promovió la justicia social, la liberación de los oprimidos y la fraternidad universal.',
    },
  },
  {
    id: 'nm-4',
    title: {
      en: 'What Is the Quran?',
      ar: 'ما هو القرآن الكريم؟',
      es: '¿Qué es el Corán?',
    },
    excerpt: {
      en: 'The literal verbatim word of God revealed to Muhammad through the Archangel Gabriel over 23 years.',
      ar: 'كلام الله المعجز المنزل على قلب النبي محمد ﷺ بواسطة جبريل عليه السلام على مدار 23 عاماً.',
      es: 'La palabra literal de Dios revelada al profeta Muhammad a través del arcángel Gabriel a lo largo de 23 años.',
    },
    content: {
      en: 'The Quran is considered by Muslims to be the exact verbatim speech of God, preserved in its original Arabic language without a single alteration or editing across 1,400 years. It consists of 114 chapters (Surahs) addressing theology, ethics, spiritual contemplation, laws of social justice, and guidance for leading a purposeful, compassionate life. Millions of Muslims around the world memorize the entire text cover-to-cover, ensuring living oral preservation alongside written manuscripts.',
      ar: 'يعتبر القرآن الكريم كلام الله المنزل حرفياً ومعنى، المحفوظ في لغته العربية دون أي تحريف أو تبديل منذ أكثر من 1400 عام. يتألف من 114 سورة تشمل العقيدة، والتشريع، ومكارم الأخلاق، والتفكر في الكون، وإقامة العدل. ويحفظ ملايين المسلمين نصه كاملاً عن ظهر قلب جيلاً بعد جيل، مما ضمن حفظه الصوتي الشفهي بجانب المخطوطات المكتوبة.',
      es: 'El Corán es considerado la palabra exacta de Dios, preservada en su lengua árabe original sin alteraciones durante catorce siglos. Consta de 114 capítulos (suras) que abordan teología, ética, justicia social y espiritualidad. Millones de personas en todo el mundo lo memorizan de principio a fin, manteniendo viva su transmisión.',
    },
  },
  {
    id: 'nm-5',
    title: {
      en: 'Why Do Muslims Pray Five Times a Day?',
      ar: 'لماذا يصلي المسلمون خمس مرات في اليوم؟',
      es: '¿Por qué oran los musulmanes cinco veces al día?',
    },
    excerpt: {
      en: 'A spiritual rhythm anchoring the day in gratitude, peace, remembrance, and grounding amidst life\'s hectic pace.',
      ar: 'محطات روحية موزعة تنير اليوم بالشكر والسكينة والذكر والاستقرار النفسي في خضم انشغالات الحياة.',
      es: 'Un ritmo espiritual que conecta el día con la gratitud, la paz interior y el recuerdo constante del Creador.',
    },
    content: {
      en: 'Muslim prayers (Salah) are scheduled throughout the day: dawn, midday, late afternoon, sunset, and nightfall. Rather than a burden, prayer is viewed as a sanctuary—a spiritual oasis where one washes away mental clutter, physically cleanses with water (Wudu), turns toward Mecca, and speaks directly with their Creator without intermediaries. It aligns human life with divine purpose, providing emotional equilibrium and reminding individuals of their higher calling.',
      ar: 'الصلاة في الإسلام موزعة على ساعات اليوم: الفجر، الظهر، العصر، المغرب، والعشاء. وهي ليست عبئاً بل واحة سكينة ومحطة راحة روحية؛ يتطهر فيها المسلم بالماء، ويستقبل القبلة، ويخاطب ربه مباشرة دون وساطة أو حواجز. تمنح الصلاة الإنسان التوازن النفسي وتذكره دائماً بمسؤوليته وسمو غايته في هذه الحياة.',
      es: 'La oración musulmana (Salat) se distribuye a lo largo del día: al alba, mediodía, tarde, ocaso y noche. Lejos de ser una carga, es un refugio espiritual para desconectar del ajetreo material, purificarse con agua y dialogar directamente con el Creador sin intermediarios humanos.',
    },
  },
  {
    id: 'nm-6',
    title: {
      en: 'Why Do Muslims Fast During Ramadan?',
      ar: 'لماذا يصوم المسلمون في شهر رمضان؟',
      es: '¿Por qué ayunan los musulmanes en Ramadán?',
    },
    excerpt: {
      en: 'Fasting from food and drink from dawn until sunset nurtures self-discipline, gratitude, and heartfelt empathy with the hungry.',
      ar: 'الامتناع عن الطعام والشراب من الفجر حتى الغروب ينمي ضبط النفس، والشكر، والتعاطف الصادق مع الجائعين.',
      es: 'Abstenerse de comida y bebida del alba al ocaso fortalece la autodisciplina, la gratitud y la empatía con los desfavorecidos.',
    },
    content: {
      en: 'During Ramadan, healthy adult Muslims refrain from food, drink, and intimate relations from dawn until sunset for 29 or 30 days. Fasting serves multiple purposes: mastering desire, resetting physical health, intensifying spiritual reflection and Quran recitation, and experiencing voluntary hunger to awaken genuine compassion for millions who experience involuntary hunger every day. It concludes with joyful celebrations of Eid al-Fitr, accompanied by obligatory charitable gifts to the needy.',
      ar: 'في شهر رمضان، يمسك المسلم القادر عن الطعام والشراب والشهوات من الفجر حتى الغروب. وللصوم مقاصد جليلة: تدريب النفس على ضبط الرغبات، وتجديد الصحة البدنية، وتكثيف قراءة القرآن والذكر، واستشعار آلام الجوع لتعميق الرحمة بالفقراء. ويختتم الشهر بعيد الفطر السعيد وتقديم زكاة الفطر لضمان فرحة المحتاجين.',
      es: 'Durante Ramadán, los adultos sanos se abstienen de alimentos, bebidas y relaciones íntimas del alba al ocaso. El ayuno busca dominar los impulsos materiales, renovar la espiritualidad y experimentar el hambre para despertar una compasión viva por los necesitados.',
    },
  },
  {
    id: 'nm-7',
    title: {
      en: 'What Does Islam Say About Jesus (Isa)?',
      ar: 'ماذا يقول الإسلام عن عيسى بن مريم عليهما السلام؟',
      es: '¿Qué dice el Islam sobre Jesús (Isa)?',
    },
    excerpt: {
      en: 'Revered as one of God\'s greatest messengers, born of the Virgin Mary, performing miracles by God\'s permission.',
      ar: 'يُبجل كواحد من أولي العزم من الرسل، وُلد من مريم العذراء بمعجزة إلهية، وأجرى المعجزات بإذن الله.',
      es: 'Venerado como uno de los más excelsos mensajeros de Dios, nacido de la Virgen María y obrador de milagros por la voluntad divina.',
    },
    content: {
      en: 'It often surprises non-Muslims to discover that Jesus is mentioned more times by name in the Quran than Prophet Muhammad himself. Muslims believe in the virgin birth of Jesus to Mary (Maryam), who has an entire chapter of the Quran named in her honor—she is celebrated as the most virtuous woman in human history. Muslims believe Jesus performed miracles—healing the blind, curing the leper, and speaking as an infant in the cradle—all by God\'s permission. While Muslims do not believe Jesus was the literal Son of God or divine, they deeply love and honor him as a noble prophet.',
      ar: 'يُفاجأ كثيرون حين يعلمون أن اسم عيسى عليه السلام ذُكر في القرآن أكثر من اسم النبي محمد ﷺ. يؤمن المسلمون بولادته الإعجازية من مريم العذراء التي سُميت باسمها سورة كاملة في القرآن ووُصفت بأنها اصطُفيت على نساء العالمين. ويؤمنون بمعجزاته كإبراء الأكمه والأبرص بإذن الله. والمسلمون ينزهون الله عن اتخاذ الولد، لكنهم يحبون عيسى حباً جماً كرسول عظيم من أولي العزم.',
      es: 'Sorprende a muchos que Jesús sea mencionado por su nombre en el Corán más veces que el propio Profeta Muhammad. Los musulmanes creen firmemente en su nacimiento virginal de María (Maryam), quien tiene un capítulo entero dedicado en el Corán. Creen en sus milagros, realizados con el permiso de Dios, y lo honran profundamente como mensajero sublime.',
    },
  },
  {
    id: 'nm-8',
    title: {
      en: 'What Does Islam Say About Other Prophets?',
      ar: 'ماذا يقول الإسلام عن سائر الأنبياء والمرسلين؟',
      es: '¿Qué dice el Islam sobre los demás Profetas?',
    },
    excerpt: {
      en: 'Muslims revere all prophets in human history: Adam, Noah, Abraham, Moses, David, Solomon, John the Baptist, and many more.',
      ar: 'يؤمن المسلمون بجميع الأنبياء عبر التاريخ: آدم، نوح، إبراهيم، موسى، داود، سليمان، يحيى، وغيرهم كثير.',
      es: 'Los musulmanes honran a todos los profetas: Adán, Noé, Abraham, Moisés, David, Salomón, Juan el Bautista y muchos más.',
    },
    content: {
      en: 'A core tenet of Islamic faith is that God sent guidance to every nation: "We make no distinction between any of His messengers" (Quran 2:285). Stories of biblical prophets are central to Quranic teachings—Abraham\'s unwavering monotheism, Moses\' courage against Pharaonic tyranny, David\'s devotion, and Job\'s patience. Islam sees itself as the culmination of this continuous chain of prophetic guidance, confirming original truths rather than invalidating them.',
      ar: 'من أصول الإيمان في الإسلام الإقرار بجميع أنبياء الله ورسله: "لا نفرق بين أحد من رسله". وتشغل قصص الأنبياء مساحة واسعة من القرآن الكريم: إخلاص إبراهيم في التوحيد، وصمود موسى في وجه طغيان فرعون، ودعاء داود، وصبر أيوب الجميل. يرى الإسلام نفسه امتداداً وخاتمة لرسالات هؤلاء الرسل الكرام.',
      es: 'Un principio central del Islam es que Dios envió guías a todas las naciones: "No hacemos distinción entre ninguno de Sus mensajeros" (Corán 2:285). Las historias de Abraham, Moisés, David y Job ocupan un lugar central en la revelación coránica, confirmando la continuidad del mensaje divino.',
    },
  },
  {
    id: 'nm-9',
    title: {
      en: 'Common Misconceptions About Islam',
      ar: 'مفاهيم مغلوطة شائعة حول الإسلام',
      es: 'Malentendidos Comunes sobre el Islam',
    },
    excerpt: {
      en: 'Addressing persistent misconceptions about women, violence, force in religion, and modern coexistence.',
      ar: 'تصحيح الشبهات الرائجة حول وضع المرأة، والعنف، ومسألة الإكراه في الدين، والتعايش السلمي.',
      es: 'Aclaración de mitos sobre la condición de la mujer, el uso de la fuerza y la convivencia pacífica.',
    },
    content: {
      en: 'Myth 1: "Islam was spread by the sword." Historical reality and the explicit Quranic decree "There is no compulsion in religion" (2:256) demonstrate otherwise; the largest Muslim nation today, Indonesia, embraced Islam through trade and peaceful character. Myth 2: "Muslim women are oppressed." Authentic Islamic law guaranteed property ownership, divorce rights, and independent legal identity over a millennium before Western legal systems did. Myth 3: "All Muslims are Arabs." Arabs constitute less than 20% of the world\'s Muslim population.',
      ar: 'الشبهة الأولى: "الإسلام انتشر بالسيف"؛ والحقيقة التاريخية والقرآنية تؤكد "لا إكراه في الدين"؛ وإندونيسيا، أكبر دولة إسلامية، دخلها الإسلام عبر المعاملة الحسنة للتجار. الشبهة الثانية: "الإسلام يقمع المرأة"؛ والتشريع الإسلامي قرر ذمتها المالية وحقها في التعليم والتملك والكرامة منذ 14 قرناً. الشبهة الثالثة: "كل المسلمين عرب"؛ فالعرب يشكلون أقل من 20% من مسلمي العالم.',
      es: 'Mito 1: "El Islam se extendió por la espada". El Corán afirma categóricamente: "No hay coacción en la religión" (2:256); Indonesia abrazó el Islam por el comercio honesto. Mito 2: "Las mujeres están oprimidas". La ley islámica otorgó derechos de propiedad y autonomía civil siglos antes que Occidente. Mito 3: "Todos los musulmanes son árabes". Menos del 20% de los musulmanes lo son.',
    },
  },
  {
    id: 'nm-10',
    title: {
      en: 'Questions You May Have: Welcoming Your Inquiries',
      ar: 'أسئلة قد تراودك: نرحب بكل استفساراتك',
      es: 'Preguntas que puedas tener: Bienvenidas tus dudas',
    },
    excerpt: {
      en: 'Our platform welcomes your respectful questions with transparency, scholarly depth, and open arms.',
      ar: 'منصتنا ترحب بجميع تساؤلاتك واستفساراتك برحابة صدر ومسؤولية علمية وأمانة موضوعية.',
      es: 'Nuestra plataforma acoge tus preguntas con transparencia, rigor académico y respeto mutuo.',
    },
    content: {
      en: 'Whether you are an academic researcher, an interfaith explorer, a curious neighbor, or someone seeking life\'s deeper answers, our platform encourages open inquiry. There are no forbidden or silly questions when asked with sincerity and respect. Use our "Ask a Question" feature to receive reasoned, scholar-reviewed responses tailored to your inquiry.',
      ar: 'سواء كنت باحثاً أكاديمياً، أو مهتماً بالحوار بين الأديان، أو جاراً مهتماً بفهم ثقافة جيرانه، أو باحثاً عن الحقيقة، فإن منصتنا تشجع السؤال الهادف. لا توجد أسئلة محظورة متى طُرحت باحترام ورغبة صادقة في المعرفة. يمكنك استخدام قسم "اطرح سؤالاً" للتواصل المباشر مع المنصة.',
      es: 'Ya seas un investigador, estudiante o simplemente alguien interesado en conocer el Islam de primera mano, nuestra plataforma te da la bienvenida. No hay preguntas tabú cuando se formulan con respeto sincero. Utiliza nuestra sección "Haz una Pregunta" para recibir respuestas claras y fundamentadas.',
    },
  },
];

export const videosData: VideoItem[] = [
  {
    id: 'vid-1',
    title: {
      en: 'Introduction to Understanding Islam and its Core Message',
      ar: 'مدخل إلى فهم الإسلام ورسالته الأساسية للبشرية',
      es: 'Introducción para Comprender el Islam y su Mensaje Fundamental',
    },
    description: {
      en: 'A structured foundational lecture exploring the core tenets of Islamic faith, civilizational mercy, and monotheism.',
      ar: 'محاضرة تأسيسية تستعرض أركان الإيمان الإسلامي ومقاصد الرحمة والعدل في الشريعة.',
      es: 'Conferencia fundacional que explora los pilares de la fe islámica y su mensaje de misericordia universal.',
    },
    speaker: 'Dr. Mahjob Dogul',
    category: 'lectures',
    duration: '48:15',
    date: '2026-08-15',
    viewsPlaceholder: '124,500 views',
    thumbnailGradient: 'from-blue-900 to-indigo-950',
    videoUrlPlaceholder: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    timestamps: [
      { time: '00:00', label: { en: 'Welcome & Introduction', ar: 'المقدمة والترحيب', es: 'Bienvenida e Introducción' } },
      { time: '08:30', label: { en: 'What is Monotheism (Tawhid)?', ar: 'ما هو التوحيد الخالص؟', es: '¿Qué es el Monoteísmo (Tawhid)?' } },
      { time: '22:15', label: { en: 'The Role of Prophets in History', ar: 'دور الأنبياء في التاريخ الإنساني', es: 'El rol de los profetas' } },
      { time: '37:40', label: { en: 'Compassion in Everyday Conduct', ar: 'تطبيق الرحمة في السلوك اليومي', es: 'Compasión en la vida cotidiana' } },
    ],
  },
  {
    id: 'vid-2',
    title: {
      en: 'The Concept of God in Abrahamic Faiths',
      ar: 'مفهوم الإله في الرسالات الإبراهيمية: دراسة مقارنة',
      es: 'El Concepto de Dios en las Religiones Abrahámicas',
    },
    description: {
      en: 'An intellectually engaging comparative discourse highlighting shared monotheistic foundations and unique Islamic theological insights.',
      ar: 'حوار علمي مقارن يسلط الضوء على المشتركات الإيمانية والخصوصية العقدية الإسلامية.',
      es: 'Discurso comparativo que analiza los fundamentos monoteístas compartidos y la teología islámica.',
    },
    speaker: 'Dr. Mahjob Dogul',
    category: 'conversations',
    duration: '54:20',
    date: '2026-07-28',
    viewsPlaceholder: '89,300 views',
    thumbnailGradient: 'from-slate-900 to-blue-900',
    timestamps: [
      { time: '00:00', label: { en: 'The Common Abrahamic Heritage', ar: 'الإرث الإبراهيمي المشترك', es: 'El legado abrahámico' } },
      { time: '18:45', label: { en: 'Surah Al-Ikhlas and Divine Uniqueness', ar: 'سورة الإخلاص والتنزيه الإلهي', es: 'Sura Al-Ikhlas' } },
      { time: '40:10', label: { en: 'Audience Q&A', ar: 'أسئلة الحضور والنقاش', es: 'Preguntas del público' } },
    ],
  },
  {
    id: 'vid-3',
    title: {
      en: 'How to Pray: A Practical Step-by-Step Guide for Beginners',
      ar: 'كيف تصلي: دليل عملي خطوة بخطوة للمبتدئين',
      es: 'Cómo Orar: Guía Práctica Paso a Paso para Principiantes',
    },
    description: {
      en: 'Clear visual demonstration of the physical movements, recitations, and internal mindfulness required for performing daily prayer.',
      ar: 'شرح تطبيقي مصور لحركات الصلاة، وتلاوتها، وكيفية استحضار الخشوع والسكينة.',
      es: 'Demostración visual clara de las posturas, recitaciones y serenidad interior requeridas en el Salat.',
    },
    speaker: 'Dr. Mahjob Dogul',
    category: 'beginners',
    duration: '22:45',
    date: '2026-06-12',
    viewsPlaceholder: '215,800 views',
    thumbnailGradient: 'from-emerald-900 to-teal-950',
    timestamps: [
      { time: '00:00', label: { en: 'The Spiritual Meaning of Salah', ar: 'المقصد الروحي للصلاة', es: 'Sentido espiritual de la oración' } },
      { time: '05:10', label: { en: 'Ablution (Wudu) Demonstrated', ar: 'تطبيق الوضوء الصحيح', es: 'Demostración de la ablución' } },
      { time: '11:20', label: { en: 'Standing, Bowing, and Prostrating', ar: 'أركان الصلاة: القيام والركوع والسجود', es: 'Posturas de la oración' } },
    ],
  },
  {
    id: 'vid-4',
    title: {
      en: 'Women in Islamic Civilization: History vs Stereotypes',
      ar: 'المرأة في الحضارة الإسلامية: بين الحقائق التاريخية والشبهات',
      es: 'La Mujer en la Civilización Islámica: Historia vs Estereotipos',
    },
    description: {
      en: 'Uncovering the historical legal agency, educational leadership, and social contribution of Muslim women through the ages.',
      ar: 'استعراض الدور التاريخي والريادي للمرأة المسلمة في مجالات العلم والإفتاء والقيادة المجتمعية.',
      es: 'Revisión histórica de la autonomía jurídica, liderazgo educativo y aportaciones sociales de las mujeres musulmanas.',
    },
    speaker: 'Guest Educator & Dr. Mahjob Dogul',
    category: 'interviews',
    duration: '42:10',
    date: '2026-05-20',
    viewsPlaceholder: '76,400 views',
    thumbnailGradient: 'from-blue-950 to-slate-900',
  },
  {
    id: 'vid-5',
    title: {
      en: 'Short Clip: The Weight of a Single Kind Word in Islam',
      ar: 'مقطع قصير: أثر الكلمة الطيبة في الإسلام',
      es: 'Clip Corto: El Valor de una Palabra Amable en el Islam',
    },
    description: {
      en: 'A concise 3-minute reflection on the prophetic statement: "A good word is a charitable deed."',
      ar: 'تأمل موجز في ثلاث دقائق حول التوجيه النبوي: "والكلمة الطيبة صدقة".',
      es: 'Breve reflexión de 3 minutos sobre la enseñanza profética: "Una buena palabra es un acto de caridad".',
    },
    speaker: 'Dr. Mahjob Dogul',
    category: 'short-videos',
    duration: '03:45',
    date: '2026-08-01',
    viewsPlaceholder: '310,200 views',
    thumbnailGradient: 'from-blue-800 to-sky-950',
  },
  {
    id: 'vid-6',
    title: {
      en: 'Answering Difficult Questions on Destiny and Free Will',
      ar: 'الإجابة على التساؤلات العميقة حول القضاء والقدر وحرية الاختيار',
      es: 'Respondiendo Preguntas Complejas sobre Destino y Libre Albedrío',
    },
    description: {
      en: 'Deep scholarly examination of human accountability, divine knowledge, and coping with hardship.',
      ar: 'بحث علمي متأصل في التوفيق بين حرية الإنسان ومسؤوليته وبين علم الله وقدره، وكيفية مواجهة الابتلاءات.',
      es: 'Examen teológico sobre la responsabilidad humana, el conocimiento divino y la superación de adversidades.',
    },
    speaker: 'Dr. Mahjob Dogul',
    category: 'questions',
    duration: '38:50',
    date: '2026-04-18',
    viewsPlaceholder: '94,100 views',
    thumbnailGradient: 'from-slate-900 to-indigo-950',
  },
  {
    id: 'vid-7',
    title: {
      en: 'Quranic Recitation & Linguistic Reflections: Surah Ar-Rahman',
      ar: 'تلاوة ندية وتدبرات بيانية في سورة الرحمن',
      es: 'Recitación Coránica y Reflexiones: Sura Ar-Rahman',
    },
    description: {
      en: 'Soothing recitation paired with verse-by-verse contemplation of divine blessings across creation.',
      ar: 'تلاوة خاشعة تصحبها تأملات في آيات النعم الإلهية المبثوثة في الكون.',
      es: 'Recitación serena acompañada de explicaciones versículo por versículo de las bendiciones divinas.',
    },
    speaker: 'Guest Qari & Dr. Mahjob Dogul',
    category: 'quran',
    duration: '31:20',
    date: '2026-03-10',
    viewsPlaceholder: '180,000 views',
    thumbnailGradient: 'from-emerald-950 to-blue-950',
  },
  {
    id: 'vid-8',
    title: {
      en: 'Dialogue on Faith, Reason, and the Modern Scientific Worldview',
      ar: 'حوار حول الإيمان والعقل والنظرة العلمية الحديثة للكون',
      es: 'Diálogo sobre Fe, Razón y la Cosmovisión Científica Moderna',
    },
    description: {
      en: 'Full-length university symposium exploring how classical Islamic epistemologies view modern cosmology and empirical physics.',
      ar: 'ندوة فكرية موسعة تناقش كيفية رؤية المعرفة الإسلامية الكلاسيكية لعلم الكونيات والفيزياء التجريبية.',
      es: 'Simposio universitario que analiza la epistemología clásica islámica frente a la cosmología moderna.',
    },
    speaker: 'Panel with Dr. Mahjob Dogul',
    category: 'conversations',
    duration: '1:14:30',
    date: '2026-02-25',
    viewsPlaceholder: '62,800 views',
    thumbnailGradient: 'from-slate-950 to-blue-900',
  },
];

export const scholarsData: ScholarGuest[] = [
  {
    id: 'guest-1',
    name: {
      en: 'Featured Scholar (Islamic Jurisprudence)',
      ar: 'باحث مشارك (الفقه وأصوله)',
      es: 'Erudito Invitado (Jurisprudencia Islámica)',
    },
    title: {
      en: 'Visiting Educator & Senior Researcher',
      ar: 'أستاذ زائر وباحث أول في الدراسات الإسلامية',
      es: 'Profesor Visitante e Investigador Sénior',
    },
    country: {
      en: 'United Kingdom',
      ar: 'المملكة المتحدة',
      es: 'Reino Unido',
    },
    expertise: {
      en: 'Contemporary Legal Ethics & Bioethics in Islam',
      ar: 'فقه النوازل والأخلاقيات الحيوية المعاصرة',
      es: 'Bioética y Ética Jurídica Contemporánea en el Islam',
    },
    biography: {
      en: 'Dedicated to researching how traditional jurisprudential maxims (Qawaid Fiqhiyyah) address modern medical dilemmas, organ donation, and digital technologies. [Administrator can update verified details].',
      ar: 'متخصص في دراسة تطبيق القواعد الفقهية الكلية على المعضلات الطبية المعاصرة وزراعة الأعضاء والتقنيات الرقمية. [حقل قابل للتحرير والتحديث من قبل الإدارة].',
      es: 'Especialista en la aplicación de las máximas jurisprudenciales tradicionales a los dilemas médicos contemporáneos y tecnologías emergentes.',
    },
    isEditablePlaceholder: true,
    featuredTopics: {
      en: ['Bioethics & Stem Cell Research', 'Digital Currency & Commercial Ethics', 'Objectives of Sharia (Maqasid)'],
      ar: ['الأخلاقيات الحيوية وأبحاث الخلايا الجذعية', 'المعاملات المالية الرقمية', 'مقاصد الشريعة الإسلامية'],
      es: ['Bioética e Investigación Médica', 'Ética en el Comercio Digital', 'Objetivos de la Sharia'],
    },
    lecturesCount: 14,
    interviewsCount: 6,
  },
  {
    id: 'guest-2',
    name: {
      en: 'Featured Educator (Quranic Sciences)',
      ar: 'أستاذ مشارك (علوم القرآن والتفسير)',
      es: 'Educador Invitado (Ciencias del Corán)',
    },
    title: {
      en: 'Lecturer in Classical Arabic & Hermeneutics',
      ar: 'محاضر في البلاغة القرآنية ومناهج التفسير',
      es: 'Conferencista en Árabe Clásico y Hermenéutica',
    },
    country: {
      en: 'Canada',
      ar: 'كندا',
      es: 'Canadá',
    },
    expertise: {
      en: 'Linguistic Inimitability & Thematic Structure of the Quran',
      ar: 'الإعجاز البياني والوحدة البنائية في السور القرآنية',
      es: 'Inimitabilidad Lingüística y Coherencia Temática del Corán',
    },
    biography: {
      en: 'Focuses on making the linguistic beauty and structural depth of the Quran accessible to non-Arabic speaking students. [Editable placeholder field].',
      ar: 'يركز على تقريب الجمال البياني والعمق الدلالي للنظم القرآني لغير الناطقين بالعربية. [حقل قابل للتحرير من الإدارة].',
      es: 'Dedicado a transmitir la elocuencia y estructura del texto coránico a estudiantes de habla no árabe.',
    },
    isEditablePlaceholder: true,
    featuredTopics: {
      en: ['Literary Dimensions of the Quran', 'Understanding Parables in Revelation', 'Tafsir Methodology'],
      ar: ['البلاغة النظمية في القرآن', 'أمثال القرآن ومقاصدها', 'أصول وقواعد التفسير'],
      es: ['Dimensiones Literarias del Corán', 'Parábolas Coránicas', 'Metodología del Tafsir'],
    },
    lecturesCount: 22,
    interviewsCount: 9,
  },
  {
    id: 'guest-3',
    name: {
      en: 'Featured Scholar (Islamic History & Civilization)',
      ar: 'باحث مشارك (التاريخ والحضارة الإسلامية)',
      es: 'Erudito Invitado (Historia y Civilización Islámica)',
    },
    title: {
      en: 'Historian of Science & Interfaith Relations',
      ar: 'مؤرخ متخصص في تاريخ العلوم والعلاقات الحضارية',
      es: 'Historiador de la Ciencia y Relaciones Interreligiosas',
    },
    country: {
      en: 'Spain / Morocco',
      ar: 'إسبانيا / المغرب',
      es: 'España / Marruecos',
    },
    expertise: {
      en: 'Andalusian Intellectual Heritage & Cross-Mediterranean Exchange',
      ar: 'التراث الفكري الأندلسي والتبادل الحضاري المتوسطي',
      es: 'Patrimonio Intelectual Andalusí y Convivencia',
    },
    biography: {
      en: 'Researches medieval translation movements, philosophical dialogues between Cordoba, Fez, and Baghdad, and lessons for contemporary pluralism. [Editable placeholder field].',
      ar: 'متخصص في دراسة حركة الترجمة الكبرى، والمطارحات الفكرية بين الأندلس وبغداد، واستلهام دروس التعايش الحضاري. [حقل قابل للتحرير].',
      es: 'Investigador de las corrientes de traducción medieval, la filosofía andalusí y el diálogo cultural.',
    },
    isEditablePlaceholder: true,
    featuredTopics: {
      en: ['The Golden Age of Andalusia', 'Islamic Contributions to European Renaissance', 'Ethics of Governance'],
      ar: ['العصر الذهبي في الأندلس', 'إسهامات علماء المسلمين في عصر النهضة', 'أخلاقيات الحكم الرشيد'],
      es: ['La Edad de Oro en Al-Ándalus', 'Contribuciones a la Ciencia Europea', 'Ética de la Gobernanza'],
    },
    lecturesCount: 18,
    interviewsCount: 5,
  },
  {
    id: 'guest-4',
    name: {
      en: 'Featured Guest (Youth Mentorship & Dawah)',
      ar: 'داعية ومربٍ مشارك (الإرشاد الشبابي والدعوة)',
      es: 'Invitado Especial (Mentoría Juvenil y Dawah)',
    },
    title: {
      en: 'Director of Community Counseling & Family Guidance',
      ar: 'مدير برامج الإرشاد الأسري والتوجيه المجتمعي',
      es: 'Director de Orientación Familiar y Comunitaria',
    },
    country: {
      en: 'United States',
      ar: 'الولايات المتحدة الأمريكية',
      es: 'Estados Unidos',
    },
    expertise: {
      en: 'Youth Identity, Mental Well-being & Cross-Cultural Faith',
      ar: 'الهوية الإيمانية للشباب، الصحة النفسية، والاندماج الإيجابي',
      es: 'Identidad Juvenil, Salud Emocional y Fe Intercultural',
    },
    biography: {
      en: 'Works actively with college students and young professionals navigating faith, career ethics, and identity in Western societies. [Editable placeholder field].',
      ar: 'يعمل بصورة مكثفة مع طلاب الجامعات والمهنيين الشباب لتثبيت الهوية الإيمانية ومواجهة الشبهات المعاصرة. [حقل قابل للتحرير].',
      es: 'Trabaja activamente con jóvenes universitarios en el fortalecimiento de su fe y valores éticos.',
    },
    isEditablePlaceholder: true,
    featuredTopics: {
      en: ['Navigating Doubts in the Digital Age', 'Mental Health & Spiritual Solace', 'Building Positive Muslim Identity'],
      ar: ['مواجهة الشبهات في الفضاء الرقمي', 'الصحة النفسية والسكينة الإيمانية', 'بناء الهوية الإيجابية للشباب'],
      es: ['Dudas en la Era Digital', 'Salud Emocional y Paz Espiritual', 'Construyendo Identidad Positiva'],
    },
    lecturesCount: 30,
    interviewsCount: 12,
  },
];

export const questionsFaqData: QuestionFaq[] = [
  {
    id: 'faq-1',
    category: 'faith',
    question: {
      en: 'Why does God allow suffering and hardship in this world?',
      ar: 'لماذا يقدر الله وجود الابتلاءات والمعاناة في هذه الحياة الدنيا؟',
      es: '¿Por qué Dios permite el sufrimiento y la adversidad en este mundo?',
    },
    answer: {
      en: 'In Islamic theology, this earthly life is not designed as a permanent paradise, but as a purposeful testing ground (Dar al-Imtihan). Suffering serves multiple divine wisdoms: purifying the believer from sins, elevating spiritual stations, teaching profound empathy for others, and reminding human beings of their fragility and ultimate reliance upon God. Furthermore, Islam assures absolute justice in the Hereafter, where every moment of patient endurance is generously compensated.',
      ar: 'في المنظور العقدي الإسلامي، لم تُخلق الحياة الدنيا لتكون دار جزاء أو خلود، بل هي دار اختبار وابتلاء مؤقتة. وتحمل الابتلاءات حِكماً إلهية سامية: تكفير السيئات، ورفع الدرجات الإيمانية، وغرس التراحم والتعاطف بين الناس، وتذكير الإنسان بضعفه وحاجته الدائمة لخالقه. كما يرسخ الإسلام يقين العدالة الإلهية المطلقة في الدار الآخرة، حيث يُوفى الصابرون أجرهم بغير حساب.',
      es: 'En la teología islámica, esta vida terrenal no es un paraíso definitivo, sino un ámbito transitorio de prueba (Dar al-Imtihan). La adversidad encierra sabidurías profundas: purificar el alma, elevar la madurez espiritual, despertar la empatía hacia los demás y recordar la fragilidad humana. El Islam asegura una justicia absoluta en la Vida Futura, donde la paciencia será recompensada con generosidad infinita.',
    },
    answeredBy: 'Reviewed by Scholarly Panel',
    references: 'Quran 67:2, Quran 2:155-157',
    dateAnswered: '2026-08-10',
  },
  {
    id: 'faq-2',
    category: 'prophet',
    question: {
      en: 'Why do Muslims consider Muhammad ﷺ the final prophet?',
      ar: 'لماذا يعتبر المسلمون النبي محمداً ﷺ خاتم الأنبياء والمرسلين؟',
      es: '¿Por qué los musulmanes consideran a Muhammad ﷺ el último profeta?',
    },
    answer: {
      en: 'The Quran explicitly identifies Prophet Muhammad as the "Seal of the Prophets" (Khatam an-Nabiyyin, Surah 33:40). Throughout human history, earlier prophets were sent to specific communities, and their scriptures were often lost or altered over time, necessitating further messengers. Muhammad ﷺ was sent with a universal, final scripture—the Quran—which God explicitly guaranteed to preserve forever (Quran 15:9). Because the divine message is now preserved completely in its original form, humanity possesses a permanent, accessible guide until the end of time.',
      ar: 'ينص القرآن الكريم صراحة على أن النبي محمداً هو "خاتم النبيين" (سورة الأحزاب: 40). وكان الأنبياء السابقون يُبعثون إلى أقوامهم خاصة في أزمنة محددة، وكانت كتبهم تتعرض للضياع أو التحريف عبر القرون مما استدعى تجديد الرسالات. أما النبي محمد ﷺ فقد بُعث للناس كافة بالرسالة الخاتمة، وتكفل الله بحفظ كتابه الكريم إلى قيام الساعة (إنا نحن نزلنا الذكر وإنا له لحافظون). ومع حفظ الأصل القرآني، لم تعد البشرية بحاجة إلى نبوة جديدة.',
      es: 'El Corán designa explícitamente a Muhammad como el "Sello de los Profetas" (33:40). Los profetas anteriores fueron enviados a pueblos específicos. Muhammad fue enviado con un mensaje universal y una escritura protegida por Dios de toda alteración (15:9). Estando el mensaje divino plenamente preservado, la humanidad cuenta con una guía inmutable y accesible.',
    },
    answeredBy: 'Dr. Mahjob Dogul & Scholarly Board',
    references: 'Quran 33:40, Sahih Bukhari',
    dateAnswered: '2026-07-22',
  },
  {
    id: 'faq-3',
    category: 'prayer',
    question: {
      en: 'Can prayer be performed in languages other than Arabic?',
      ar: 'هل تجوز قراءة الصلاة المفروضة بغير اللغة العربية؟',
      es: '¿Se puede rezar la oración obligatoria en un idioma distinto del árabe?',
    },
    answer: {
      en: 'The ritual recitation of Quranic verses within the formal obligatory prayers (Salah) must be recited in the original Arabic words revealed by God, as translations capture meaning but are not the actual word of God. However, for a new Muslim who has not yet learned Arabic phrases, classical scholars agree they may recite simple phrases of remembrance (like Subhanallah and Alhamdulillah) or read from a transliteration card while learning. Furthermore, personal supplications (Dua)—where one speaks from the heart outside the formal prayer movements or during prostration—can be made in any language on earth.',
      ar: 'القراءة الركنية في الصلاة (كالفاتحة) تكون بألفاظ القرآن العربية المنزلة من عند الله، لأن الترجمة تفسير للمعنى وليست قرآناً بذاتها. ولكن بالنسبة للمسلم الجديد الذي لم يتعلم العربية بعد، ييسر له الشرع بذكر الله بما يستطيع (سبحان الله، الحمد لله) أو الاستعانة ببطاقة تذكيرية أثناء تعلمه. أما الدعاء والمناجاة الشخصية فللمسلم أن يدعو الله بأي لغة في أي وقت.',
      es: 'La recitación ritual del Corán en la oración formal obligatoria (Salat) se realiza en árabe, ya que una traducción es solo una aproximación. No obstante, para un nuevo musulmán, los eruditos facilitan la recitación de frases breves de alabanza o el uso de notas mientras aprende. Además, la súplica personal (Dua) se puede realizar con el corazón en cualquier idioma.',
    },
    answeredBy: 'Fiqh Inquiry Committee',
    references: 'Imam an-Nawawi, Al-Majmu',
    dateAnswered: '2026-06-15',
  },
  {
    id: 'faq-4',
    category: 'women',
    question: {
      en: 'What is the true significance of the Hijab in Islam?',
      ar: 'ما هي الدلالة الشرعية والمقصدية للحجاب في الإسلام؟',
      es: '¿Cuál es el verdadero significado del Hiyab en el Islam?',
    },
    answer: {
      en: 'The Hijab is fundamentally an act of personal devotion and obedience to God, chosen as an expression of modest dignity and spiritual identity. It is not an instrument of oppression or subjugation; rather, it de-emphasizes physical appearance and superficial sexualization, ensuring that a woman is recognized, respected, and evaluated for her intellect, moral character, and human competence. Islamic teachings also mandate that men practice modesty through lowering their gaze and maintaining respectful conduct.',
      ar: 'الحجاب في أصله عبادة إيمانية وطاعة لله عز وجل، يعبر عن العفة والكرامة والهوية الروحية للمرأة المسلمة. وهو ليس أداة للتضييق أو القهر، بل يحمي المرأة من التشييء الجسدي والنظرة السطحية، ليبرز عقلها وعلمها وخلقها وإنسانيتها. كما أن الإسلام يوجب الحشمة على الرجال أيضاً من خلال غض البصر والسلوك المهذب.',
      es: 'El Hiyab es fundamentalmente un acto de devoción a Dios y una afirmación de dignidad espiritual y modestia. Lejos de ser sumisión forzada, aleja a la mujer de la cosificación material y exige que sea valorada por su intelecto y virtud. El Islam prescribe igualmente a los hombres la modestia en la mirada y la conducta.',
    },
    answeredBy: 'Dr. Mahjob Dogul',
    references: 'Quran 24:30-31, Quran 33:59',
    dateAnswered: '2026-05-19',
  },
  {
    id: 'faq-5',
    category: 'new-muslims',
    question: {
      en: 'What are the first steps for someone who wants to embrace Islam?',
      ar: 'ما هي الخطوات الأولى لمن يرغب في اعتناق الإسلام والدخول فيه؟',
      es: '¿Cuáles son los primeros pasos para quien desea abrazar el Islam?',
    },
    answer: {
      en: 'Embracing Islam is simple and profound. One enters Islam by sincerely testifying with conviction the Shahadah: "I bear witness that there is no god worthy of worship except Allah, and I bear witness that Muhammad is the Messenger of Allah." This can be done privately between the individual and God, though doing so among community members or in a mosque provides supportive guidance. Upon entering Islam, all past mistakes are forgiven, giving the person a completely clean slate.',
      ar: 'الدخول في الإسلام يسير وعظيم في معناه؛ ويكون بالنطق الصادق بالشهادتين عن يقين وقناعة: "أشهد أن لا إله إلا الله، وأشهد أن محمداً رسول الله". ويمكن للشخص النطق بها بمفرده بينه وبين الله، ويُستحب إعلانها في مركز إسلامي أو بحضور إخوة لتقديم الدعم والترحيب. وبمجرد الدخول في الإسلام، تُغفر للإنسان كل ذنوبه السابقة ويبدأ صفحة بيضاء نقية.',
      es: 'Abrazar el Islam es un paso sencillo y trascendente. Se realiza pronunciando con convicción sincera la Shahada: "Atestiguo que no hay más divinidad digna de adoración que Allah, y atestiguo que Muhammad es el Mensajero de Allah". Esto puede hacerse en privado o en una mezquita para recibir apoyo. Al aceptar el Islam, todos los errores pasados quedan borrados.',
    },
    answeredBy: 'New Muslims Welcome Bureau',
    references: 'Authentic Sunnah, Hadith of Amr ibn al-Aas',
    dateAnswered: '2026-08-05',
  },
  {
    id: 'faq-6',
    category: 'society',
    question: {
      en: 'How should Muslims interact with non-Muslim neighbors and coworkers?',
      ar: 'كيف ينبغي للمسلم أن يتعامل مع جيرانه وزملائه في العمل من غير المسلمين؟',
      es: '¿Cómo debe interactuar un musulmán con vecinos y compañeros no musulmanes?',
    },
    answer: {
      en: 'The Quran explicitly commands Muslims to treat non-Muslim neighbors with kindness, fairness, and mutual respect: "God does not forbid you from being just and kind to those who have not fought you on account of your faith..." (Quran 60:8). The Arabic word used in this verse is "Birr"—the exact same word used for honoring one\'s parents (Birr al-Walidayn). Muslims are instructed to visit the sick, share food with neighbors, fulfill commercial promises, and be trustworthy citizens of their society.',
      ar: 'يأمر القرآن الكريم بالبر والإقساط في معاملة غير المسلمين: "لا ينهاكم الله عن الذين لم يقاتلوكم في الدين ولم يخرجوكم من دياركم أن تبروهم وتقسطوا إليهم إن الله يحب المقسطين" (الممتحنة: 8). واستخدم القرآن لفظ "البر" وهو أعلى درجات الإحسان المستخدمة في بر الوالدين. والمسلم مأمور بإكرام الجار، وعيادة المريض، والوفاء بالعقود، وأن يكون نموذجاً للنزاهة وحسن المعاملة.',
      es: 'El Corán ordena tratar a los vecinos no musulmanes con rectitud y bondad: "Dios no os prohíbe que seáis bondadosos y justos con quienes no os han combatido..." (60:8). El término coránico usado es "Birr", el mismo que designa la devoción hacia los padres. El musulmán debe ser un modelo de honestidad, solidaridad y respeto en su entorno.',
    },
    answeredBy: 'Scholarly Editorial Board',
    references: 'Quran 60:8, Sahih Muslim',
    dateAnswered: '2026-07-02',
  },
];

export const articlesData: ArticleItem[] = [
  {
    id: 'art-1',
    slug: 'foundations-of-mercy-in-prophetic-sunnah',
    title: {
      en: 'The Foundations of Universal Mercy in the Prophetic Tradition',
      ar: 'أصول الرحمة العالمية ومقاصدها في السنة النبوية الشريفة',
      es: 'Los Fundamentos de la Misericordia Universal en la Tradición Profética',
    },
    excerpt: {
      en: 'An in-depth analysis of how compassion operates not merely as a sentiment, but as the governing legal principle of Islamic ethics.',
      ar: 'تحليل علمي موسع لكيفية عمل خلق الرحمة كأصل تشريعي حاكم ومقصد كلي في الفقه والأخلاق الإسلامية.',
      es: 'Análisis detallado de cómo la compasión actúa no solo como virtud personal, sino como principio rector de la ética islámica.',
    },
    content: {
      en: 'The opening declaration of nearly every chapter in the Holy Quran begins with the attributes of divine compassion: "In the name of God, the Lord of Mercy, the Giver of Mercy." In prophetic traditions, this cosmic principle translates into tangible interpersonal responsibility. The Messenger of Allah ﷺ declared: "Those who show mercy will be shown mercy by the Most Merciful. Be merciful to those on the earth, and the One in the heavens will be merciful to you." This scholarly essay investigates how classical jurists derived legal verdicts protecting the vulnerable, regulating conduct in conflicts, safeguarding animal welfare, and maintaining environmental harmony from this singular governing ethic.',
      ar: 'تستهل سور القرآن الكريم كافة باستثناء سورة التوبة بإعلان الرحمة الإلهية: "بسم الله الرحمن الرحيم". وفي التوجيه النبوي الشريف، يتحول هذا المبدأ الكوني إلى مسؤولية عملية حية؛ يقول رسول الله ﷺ: "الراحمون يرحمهم الرحمن، ارحموا من في الأرض يرحمكم من في السماء". يستعرض هذا المقال التأصيلي كيف استنبط فقهاء الإسلام من هذا الأصل أحكاماً رائدة في حماية المستضعفين، وحقوق الأسرى، والرفق بالحيوان، وحماية البيئة.',
      es: 'Casi todos los capítulos del Sagrado Corán comienzan proclamando la misericordia divina: "En el nombre de Dios, Clemente y Misericordioso". El Profeta afirmó: "A los misericordiosos, el Misericordioso les mostrará misericordia. Sed compasivos con quienes están en la tierra, y Aquel que está en los cielos se compadecerá de vosotros". Este ensayo examina cómo los juristas clásicos derivaron de este precepto normas para proteger a los indefensos y cuidar la naturaleza.',
    },
    category: 'faith',
    author: 'Dr. Mahjob Dogul',
    date: '2026-08-14',
    readTime: '8 min read',
    tags: ['Mercy', 'Sunnah', 'Ethics', 'Theology'],
    isFeatured: true,
    mostRead: true,
  },
  {
    id: 'art-2',
    slug: 'science-and-contemplation-islamic-golden-age',
    title: {
      en: 'Faith as the Catalyst for Inquiry: Science in the Islamic Golden Age',
      ar: 'الإيمان كباعث للاستكشاف: العلوم التجريبية في العصر الذهبي الإسلامي',
      es: 'La Fe como Impulso para la Ciencia: La Edad de Oro Islámica',
    },
    excerpt: {
      en: 'How the theological concept of Tawhid inspired Muslim polymaths to formulate the modern scientific method.',
      ar: 'كيف ألهم مفهوم التوحيد والتفكر علماء المسلمين الأوائل لتأسيس المنهج التجريبي الحديث.',
      es: 'Cómo el concepto de Tawhid y la contemplación inspiraron a los eruditos musulmanes a formular el método científico.',
    },
    content: {
      en: 'Unlike civilizational narratives that pit faith and scientific inquiry against each other, the Islamic tradition viewed empirical investigation as an act of devotion. Scholars like Alhazen (Ibn al-Haytham), universally recognized as the father of modern optics and the experimental method, explicitly cited Quranic mandates to examine natural phenomena without bias as his primary motivation. This paper examines the historical intersection of astronomy, medicine, algebra, and ethical experimentation in Baghdad, Cairo, and Samarkand.',
      ar: 'خلافاً للسياقات التاريخية التي روجت للصراع بين العلم والدين، اعتبر الفكر الإسلامي البحث التجريبي لوناً من ألوان العبادة والتفكر في آيات الله. ويُعد الحسن بن الهيثم، رائد علم البصريات ومؤسس المنهج العلمي التجريبي، نموذجاً للعالم الذي صرح بأن دافعه الأول كان امتثال الأوامر القرآنية بفحص الطبيعة دون تحيز. يتناول هذا البحث إسهامات علماء المسلمين في الطب والفلك والجبر.',
      es: 'A diferencia de narrativas de conflicto entre fe y ciencia, la tradición islámica concibió la investigación empírica como un acto de adoración reflexiva. Sabios como Alhazen (Ibn al-Haitham), padre de la óptica moderna y del método experimental, citaron los versículos coránicos como su principal impulso para examinar la creación.',
    },
    category: 'history',
    author: 'Department of Research & History',
    date: '2026-07-29',
    readTime: '12 min read',
    tags: ['Science', 'History', 'Optics', 'Civilization'],
    isFeatured: false,
    mostRead: true,
  },
  {
    id: 'art-3',
    slug: 'the-art-of-respectful-dialogue-islamic-perspective',
    title: {
      en: 'Adab al-Ikhtilaf: The Islamic Art of Respectful Disagreement',
      ar: 'أدب الاختلاف وحسن الحوار في المنهج الإسلامي',
      es: 'Adab al-Ijtilaf: El Arte Islámico del Desacuerdo Respetuoso',
    },
    excerpt: {
      en: 'Rediscovering classical guidelines for navigating differing viewpoints with humility, grace, and intellectual honesty.',
      ar: 'إحياء المبادئ التراثية الرصينة لإدارة الخلاف الفكري بتواضع ورحابة صدر وأمانة علمية.',
      es: 'Pautas clásicas para gestionar la discrepancia intelectual con humildad, respeto y honestidad.',
    },
    content: {
      en: 'Classical Islamic scholarship celebrated healthy divergence of analytical interpretation (Ikhtilaf) as a mercy and testament to human intellectual dynamism. Imam al-Shafi\'i famously stated: "My opinion is correct, though it may contain error; and the opinion of my opponent is incorrect, though it may contain truth." This essay outlines the ethical protocols necessary for maintaining brotherhood, avoiding slander, and pursuing truth in modern digital discourse.',
      ar: 'احتفى تراثنا الإسلامي باختلاف الآراء الاجتهادية المعتبرة واعتبره مظهراً من مظاهر الرحمة والسعة. وقول الإمام الشافعي الشهير شاهد على ذلك: "رأيي صواب يحتمل الخطأ، ورأي غيري خطأ يحتمل الصواب". يستعرض المقال الضوابط الأخلاقية الكفيلة بحفظ الود، وتجنب الخصومات، والبحث الموضوعي عن الحق في العصر الرقمي.',
      es: 'El pensamiento islámico clásico consideró la discrepancia razonada como una muestra de riqueza intelectual. El célebre aforismo del Imam Al-Shafi\'i resume esta actitud: "Mi opinión es correcta con posibilidad de error, y la opinión de mi oponente es errónea con posibilidad de acierto". Pautas éticas para el diálogo constructivo contemporáneo.',
    },
    category: 'society',
    author: 'Dr. Mahjob Dogul',
    date: '2026-07-10',
    readTime: '7 min read',
    tags: ['Dialogue', 'Ethics', 'Ikhtilaf', 'Society'],
    isFeatured: false,
    mostRead: false,
  },
  {
    id: 'art-4',
    slug: 'journey-of-the-new-muslim-identity-and-growth',
    title: {
      en: 'The Journey of Embracing Islam: Identity, Patience, and Growth',
      ar: 'رحلة الدخول في الإسلام: بناء الهوية، الصبر، والنمو الروحي',
      es: 'El Camino al Abrazar el Islam: Identidad, Paciencia y Crecimiento',
    },
    excerpt: {
      en: 'Practical, compassionate guidance for new Muslims navigating family dynamics, lifestyle adjustments, and gradual spiritual learning.',
      ar: 'توجيهات عملية حانية للمسلمين الجدد للتعامل مع المحيط الأسري، والتدرج في التعلم، ورسوخ الإيمان.',
      es: 'Orientación práctica y compasiva para nuevos musulmanes ante cambios familiares, hábitos y aprendizaje gradual.',
    },
    content: {
      en: 'Embracing Islam is often described as a moment of profound spiritual awakening, followed by practical daily questions. How does one maintain warm, loving ties with non-Muslim family members? How does one learn prayer without feeling overwhelmed? This guide emphasizes the foundational prophetic principle of gradualism (Tadarruj)—taking one steady, joyful step at a time while staying firmly rooted in love, patience, and community mentorship.',
      ar: 'إن الدخول في الإسلام ولادة روحية جديدة، تتبعها تساؤلات حياتية يومية. كيف يحافظ المسلم الجديد على بره ومحبته لعائلته؟ وكيف يتعلم فرائض الدين دون مشقة؟ يركز هذا الدليل على منهج التدرج النبوي: خطوة بخطوة بطمأنينة وفرح، مع الاستناد إلى التوجيه الحكيم والصحبة الصالحة.',
      es: 'Abrazar el Islam es un renacimiento espiritual que plantea desafíos prácticos cotidianos. ¿Cómo mantener lazos afectivos con familiares de otra fe? ¿Cómo asimilar las prácticas gradualmente? Este artículo destaca el principio profético de la gradualidad (Tadarruy), avanzando con serenidad y alegría interior.',
    },
    category: 'new-muslims',
    author: 'Outreach & Mentorship Desk',
    date: '2026-06-25',
    readTime: '9 min read',
    tags: ['New Muslims', 'Community', 'Family', 'Guidance'],
    isFeatured: false,
    mostRead: true,
  },
];

export const eventsData: PlatformEvent[] = [
  {
    id: 'ev-1',
    title: {
      en: 'International Webinar: Introduction to Understanding Islam in the 21st Century',
      ar: 'ندوة دولية عبر الإنترنت: مدخل إلى فهم الإسلام في القرن الحادي والعشرين',
      es: 'Seminario Internacional: Introducción para Comprender el Islam en el Siglo XXI',
    },
    description: {
      en: 'A live interactive global session with Dr. Mahjob Dogul exploring core principles of faith, addressing common questions, and engaging with seekers worldwide.',
      ar: 'جلسة تفاعلية عالمية مباشرة مع د. محجوب دقل تستعرض أصول الإيمان وتجيب على الأسئلة الحوارية المباشرة.',
      es: 'Sesión interactiva en vivo con el Dr. Mahjob Dogul explorando los principios de fe y respondiendo preguntas en tiempo real.',
    },
    speaker: 'Dr. Mahjob Dogul',
    date: '2026-09-12',
    time: '18:00 - 20:00',
    timezone: 'UTC / GMT',
    location: {
      en: 'Online Global Broadcast (Zoom & Live Stream)',
      ar: 'بث مباشر عالمي عبر الإنترنت (زوم ومنصة البث)',
      es: 'Transmisión Global en Línea (Zoom y Streaming)',
    },
    status: 'upcoming',
    category: 'webinar',
    streamPlatform: 'Global Live Platform',
  },
  {
    id: 'ev-live-now',
    title: {
      en: 'LIVE Interactive Q&A: Inquiries on Faith, Science, and Human Purpose',
      ar: 'بث مباشر تفاعلي: أسئلة وأجوبة في الإيمان والعلم والغاية الإنسانية',
      es: 'EN VIVO Preguntas y Respuestas: Diálogos sobre Fe, Ciencia y Propósito',
    },
    description: {
      en: 'Currently broadcasting live! Join hundreds of active participants from over 40 countries submitting real-time questions to Dr. Mahjob Dogul.',
      ar: 'يبث الآن مباشرة! انضم إلى مئات المشاركين من أكثر من 40 دولة يطرحون أسئلتهم الحوارية على د. محجوب دقل.',
      es: '¡Transmitiendo en vivo! Únete a participantes de más de 40 países enviando preguntas en tiempo real.',
    },
    speaker: 'Dr. Mahjob Dogul & Invited Panel',
    date: 'Today',
    time: 'Broadcasting Now',
    timezone: 'Live',
    location: {
      en: 'Interactive Studio Broadcast',
      ar: 'استوديو البث التفاعلي للمنصة',
      es: 'Estudio de Transmisión Interactiva',
    },
    status: 'live',
    category: 'qa',
    liveViewerCount: '1,420 Active Viewers',
    streamPlatform: 'WebRTC / HLS Stream',
  },
  {
    id: 'ev-2',
    title: {
      en: 'Symposium: The Quranic Vision of Environmental Stewardship',
      ar: 'ندوة فكرية: الرؤية القرآنية لرعاية البيئة والمناخ',
      es: 'Simposio: La Visión Coránica de la Custodia Ambiental',
    },
    description: {
      en: 'Scholarly panel analyzing the Islamic legal and theological mandates to conserve water, avoid ecological degradation, and protect biodiversity.',
      ar: 'ندوة علمية تبحث في المقاصد الشرعية لحفظ الموارد المائية، والحد من التلوث، وحماية التنوع الحيوي.',
      es: 'Panel de expertos sobre el mandato ético de preservar el agua, evitar la degradación ecológica y proteger la biodiversidad.',
    },
    speaker: 'Guest Panel & Dr. Mahjob Dogul',
    date: '2026-09-26',
    time: '15:00 - 17:30',
    timezone: 'EST (New York)',
    location: {
      en: 'Chicago Cultural Center & Digital Stream',
      ar: 'المركز الثقافي بشيكاغو وبث رقمي مباشر',
      es: 'Centro Cultural de Chicago y Streaming Digital',
    },
    status: 'upcoming',
    category: 'conference',
  },
  {
    id: 'ev-3',
    title: {
      en: 'Past Lecture: Universal Human Brotherhood in the Farewell Sermon',
      ar: 'محاضرة أرشيفية: الأخوة الإنسانية الجامعة في خطبة الوداع',
      es: 'Conferencia Pasada: La Fraternidad Humana en el Sermón de Despedida',
    },
    description: {
      en: 'Archival recording of the widely attended international lecture deconstructing racism and nationalism in the light of the Prophet\'s final testament.',
      ar: 'تسجيل أرشيفي للمحاضرة الدولية التي تناولت تقويض النعرات العنصرية في ضوء وصايا خطبة الوداع.',
      es: 'Grabación de la conferencia sobre la erradicación del racismo a la luz del testamento final del Profeta.',
    },
    speaker: 'Dr. Mahjob Dogul',
    date: '2026-07-04',
    time: 'Recorded Session',
    timezone: 'Archived',
    location: {
      en: 'Dallas Islamic Academy & On-Demand Library',
      ar: 'أكاديمية دالاس ومكتبة المشاهدة حسب الطلب',
      es: 'Academia de Dallas y Biblioteca a la Carta',
    },
    status: 'past',
    category: 'lecture',
  },
];

export const drMahjobProfile = initialDrDogulProfile;

export const quickTopicsData = [
  {
    id: 'pillars',
    title: {
      en: 'The Five Pillars',
      ar: 'أركان الإسلام الخمسة',
      es: 'Los Cinco Pilares',
    },
    description: {
      en: 'Foundational worship and spiritual commitments uniting all Muslims.',
      ar: 'الأسس التعبدية والروحية التي توحد أمة الإسلام.',
      es: 'Fundamentos de adoración y compromiso espiritual del creyente.',
    },
    lessonCount: 6,
  },
  {
    id: 'quran',
    title: {
      en: 'The Noble Quran',
      ar: 'القرآن الكريم وعلومه',
      es: 'El Noble Corán',
    },
    description: {
      en: 'The divine revelation, historical compilation, and guiding message.',
      ar: 'الوحي الإلهي المعجز وجمعه ومقاصده الهادية للبشرية.',
      es: 'La revelación divina, preservación y mensaje orientador.',
    },
    lessonCount: 8,
  },
  {
    id: 'sunnah',
    title: {
      en: 'Prophet Muhammad ﷺ',
      ar: 'السيرة النبوية والسنّة',
      es: 'El Profeta Muhammad ﷺ',
    },
    description: {
      en: 'The living model of mercy, wisdom, and exemplary character.',
      ar: 'النموذج الحي للرحمة والحكمة ومكارم الأخلاق.',
      es: 'El modelo vivo de compasión, sabiduría y nobleza moral.',
    },
    lessonCount: 7,
  },
  {
    id: 'ethics',
    title: {
      en: 'Islamic Ethics & Justice',
      ar: 'الأخلاق والعدالة والرحمة',
      es: 'Ética y Justicia Social',
    },
    description: {
      en: 'Moral integrity, family sanctity, and universal compassion.',
      ar: 'الاستقامة الخلقية وحرمة الأسرة والتراحم الإنساني الشامل.',
      es: 'Integridad moral, valor de la familia y compasión universal.',
    },
    lessonCount: 5,
  },
  {
    id: 'contemporary',
    title: {
      en: 'Islam in the Modern World',
      ar: 'الإسلام وقضايا العصر',
      es: 'El Islam Contemporáneo',
    },
    description: {
      en: 'Engaging science, interfaith dialogue, pluralism, and contemporary thought.',
      ar: 'مطارحات العلم وحوار الأديان والتعايش الإيجابي في العصر الحديث.',
      es: 'Ciencia, diálogo interreligioso y convivencia pacífica.',
    },
    lessonCount: 6,
  },
];

// Populate compatibility fields
scholarsData.forEach((s) => {
  if (!s.bio) s.bio = s.biography;
});

lessonsData.forEach((l) => {
  if (!l.level) l.level = l.difficulty;
});

eventsData.forEach((e) => {
  if (!e.type) e.type = e.category;
});

if (videosData.length > 0) {
  videosData[0].featured = true;
}

