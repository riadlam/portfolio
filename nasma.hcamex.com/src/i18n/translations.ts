export type Lang = "en" | "ar";

export type Journey = {
  id: string;
  region: "gulf" | "europe" | "asia" | "africa" | "islands";
  image: string;
  imageAlt: string;
  durationEn: string;
  durationAr: string;
  priceEn: string;
  priceAr: string;
  nameEn: string;
  nameAr: string;
  descEn: string;
  descAr: string;
  includesEn: string;
  includesAr: string;
};

export const journeys: Journey[] = [
  {
    id: "maldives-quiet",
    region: "islands",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Overwater villa in the Maldives",
    durationEn: "7 nights",
    durationAr: "7 ليالٍ",
    priceEn: "From AED 28,000",
    priceAr: "من 28,000 درهم",
    nameEn: "Maldives Quiet Waters",
    nameAr: "مالديف المياه الهادئة",
    descEn:
      "A private-island retreat with lagoon villas, sunrise breakfasts, and unhurried days on the water.",
    descAr:
      "ملاذ جزيرة خاصة مع فلل البحيرة وإفطارات الشروق وأيام هادئة على الماء.",
    includesEn: "Seaplane · Villa · Half board · Spa credit",
    includesAr: "طائرة مائية · فيلا · نصف إقامة · رصيد سبا",
  },
  {
    id: "santorini-light",
    region: "europe",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Santorini cliffs at golden hour",
    durationEn: "6 nights",
    durationAr: "6 ليالٍ",
    priceEn: "From AED 19,500",
    priceAr: "من 19,500 درهم",
    nameEn: "Santorini Light",
    nameAr: "سانتوريني الضوء",
    descEn:
      "Caldera suites, private sunset terraces, and slow evenings above the Aegean.",
    descAr:
      "أجنحة الكالديرا وشرفات غروب خاصة وأمسيات بطيئة فوق بحر إيجة.",
    includesEn: "Boutique hotel · Transfers · Breakfast · Yacht half-day",
    includesAr: "فندق بوتيك · تنقلات · إفطار · يخت نصف يوم",
  },
  {
    id: "bali-ritual",
    region: "asia",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Bali temple and tropical landscape",
    durationEn: "8 nights",
    durationAr: "8 ليالٍ",
    priceEn: "From AED 16,800",
    priceAr: "من 16,800 درهم",
    nameEn: "Bali Ritual",
    nameAr: "طقوس بالي",
    descEn:
      "Jungle villas, temple mornings, and wellness days paced to the island’s softer rhythm.",
    descAr:
      "فلل الأدغال وصباحات المعابد وأيام عافية بإيقاع الجزيرة الأنعم.",
    includesEn: "Private villa · Driver · Wellness · Culinary walk",
    includesAr: "فيلا خاصة · سائق · عافية · جولة طهي",
  },
  {
    id: "marrakech-souk",
    region: "africa",
    image:
      "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Marrakech architecture and warm light",
    durationEn: "5 nights",
    durationAr: "5 ليالٍ",
    priceEn: "From AED 12,400",
    priceAr: "من 12,400 درهم",
    nameEn: "Marrakech Courtyards",
    nameAr: "ساحات مراكش",
    descEn:
      "A restored riad, Atlas day journey, and evenings scented with orange blossom.",
    descAr:
      "رياض مرمم ورحلة يوم للأطلس وأمسيات برائحة زهر البرتقال.",
    includesEn: "Riad suite · Guide · Atlas day · Airport transfers",
    includesAr: "جناح رياض · مرشد · يوم أطلس · تنقلات المطار",
  },
  {
    id: "dubai-desert",
    region: "gulf",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Dubai skyline at dusk",
    durationEn: "4 nights",
    durationAr: "4 ليالٍ",
    priceEn: "From AED 9,800",
    priceAr: "من 9,800 درهم",
    nameEn: "Dubai & Empty Quarter",
    nameAr: "دبي والربع الخالي",
    descEn:
      "City refinement paired with a desert camp under open stars — designed for hosts and visitors alike.",
    descAr:
      "رقي المدينة مع مخيم صحراوي تحت نجوم مفتوحة — مصمم للمضيفين والزوار معاً.",
    includesEn: "5★ hotel · Desert night · Private guide · Dining",
    includesAr: "فندق 5 نجوم · ليلة صحراوية · مرشد خاص · طعام",
  },
  {
    id: "amalfi-coast",
    region: "europe",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Amalfi coastal town",
    durationEn: "7 nights",
    durationAr: "7 ليالٍ",
    priceEn: "From AED 22,000",
    priceAr: "من 22,000 درهم",
    nameEn: "Amalfi Quiet Coast",
    nameAr: "ساحل أمالفي الهادئ",
    descEn:
      "Cliffside rooms, lemon-grove lunches, and boat days between hidden coves.",
    descAr:
      "غرف على الجرف وغداء بساتين الليمون وأيام قارب بين خلجان مخفية.",
    includesEn: "Cliff hotel · Boat day · Transfers · Breakfast",
    includesAr: "فندق الجرف · يوم قارب · تنقلات · إفطار",
  },
  {
    id: "kyoto-season",
    region: "asia",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Kyoto temple path in autumn",
    durationEn: "6 nights",
    durationAr: "6 ليالٍ",
    priceEn: "From AED 24,500",
    priceAr: "من 24,500 درهم",
    nameEn: "Kyoto Season",
    nameAr: "موسم كيوتو",
    descEn:
      "A ryokan stay, tea ceremony, and temple routes timed to the softest light of the season.",
    descAr:
      "إقامة ريوكان ومراسم شاي ومسارات معابد بتوقيت أنعم ضوء في الموسم.",
    includesEn: "Ryokan · Rail passes · Tea ritual · Guide",
    includesAr: "ريوكان · تذاكر قطار · طقس شاي · مرشد",
  },
  {
    id: "seychelles-blue",
    region: "islands",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Turquoise tropical beach",
    durationEn: "8 nights",
    durationAr: "8 ليالٍ",
    priceEn: "From AED 31,000",
    priceAr: "من 31,000 درهم",
    nameEn: "Seychelles Blue",
    nameAr: "سيشل الأزرق",
    descEn:
      "Granite shores, ocean villas, and days measured only by tide and appetite.",
    descAr:
      "شواطئ غرانيت وفلل المحيط وأيام تُقاس بالمد والجزر والشهية فقط.",
    includesEn: "Ocean villa · Flights assist · Snorkel · Half board",
    includesAr: "فيلا محيط · مساعدة طيران · غطس · نصف إقامة",
  },
  {
    id: "oman-mountains",
    region: "gulf",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Mountain landscape at sunrise",
    durationEn: "5 nights",
    durationAr: "5 ليالٍ",
    priceEn: "From AED 11,200",
    priceAr: "من 11,200 درهم",
    nameEn: "Oman Highlands",
    nameAr: "مرتفعات عُمان",
    descEn:
      "Mountain lodges, wadi walks, and frankincense evenings away from the coastline rush.",
    descAr:
      "نُزل جبلية ومشي في الأودية وأمسيات لبَان بعيداً عن صخب الساحل.",
    includesEn: "Lodge · 4×4 · Guide · Meals",
    includesAr: "نُزل · دفع رباعي · مرشد · وجبات",
  },
  {
    id: "swiss-alpine",
    region: "europe",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Alpine road trip scenery",
    durationEn: "6 nights",
    durationAr: "6 ليالٍ",
    priceEn: "From AED 21,800",
    priceAr: "من 21,800 درهم",
    nameEn: "Swiss Alpine Quiet",
    nameAr: "جبال سويسرا الهادئة",
    descEn:
      "Lake hotels, train journeys, and mountain air for travellers who prefer stillness to spectacle.",
    descAr:
      "فنادق البحيرة ورحلات القطار وهواء الجبل لمن يفضّلون السكون على الضجيج.",
    includesEn: "Lake hotel · Scenic rail · Transfers · Breakfast",
    includesAr: "فندق بحيرة · قطار بانورامي · تنقلات · إفطار",
  },
  {
    id: "paris-atelier",
    region: "europe",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Paris city view",
    durationEn: "5 nights",
    durationAr: "5 ليالٍ",
    priceEn: "From AED 18,900",
    priceAr: "من 18,900 درهم",
    nameEn: "Paris Atelier Days",
    nameAr: "أيام مشغل باريس",
    descEn:
      "A Left Bank hotel, private museum hours, and dinners chosen for atmosphere over trend.",
    descAr:
      "فندق الضفة اليسرى وساعات متحف خاصة وعشاءات مختارة للأجواء لا للموضة.",
    includesEn: "Design hotel · Museum access · Concierge · Breakfast",
    includesAr: "فندق تصميم · دخول متاحف · كونسيرج · إفطار",
  },
  {
    id: "safari-dawn",
    region: "africa",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Safari landscape at dawn",
    durationEn: "7 nights",
    durationAr: "7 ليالٍ",
    priceEn: "From AED 34,000",
    priceAr: "من 34,000 درهم",
    nameEn: "Safari at Dawn",
    nameAr: "سفاري عند الفجر",
    descEn:
      "Tent camps, dawn drives, and evenings around firelight — crafted with expert conservation partners.",
    descAr:
      "مخيمات خيام وجولات فجر وأمسيات حول ضوء النار — مع شركاء حفظ موثوقين.",
    includesEn: "Luxury camp · Flights internal · Drives · Full board",
    includesAr: "مخيم فاخر · طيران داخلي · جولات · إقامة كاملة",
  },
];

export const translations = {
  en: {
    brand: "Nasma Journeys",
    nav: {
      home: "Home",
      about: "About",
      journeys: "Journeys",
      contact: "Contact",
      plan: "Plan a journey",
      menu: "Toggle menu",
      primary: "Primary",
    },
    lang: { en: "EN", ar: "ع", switchTo: "Switch language" },
    footer: {
      blurb:
        "A travel atelier in Dubai composing calm, considered journeys across the world.",
      explore: "Explore",
      atelier: "Atelier",
      connect: "Connect",
      address: "DIFC · Dubai, UAE",
      hours: "Sat – Thu · 09:00 – 19:00",
    },
    home: {
      slides: [
        {
          image:
            "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=80",
          alt: "Traveller overlooking a mountain lake",
          headline: "Journeys composed, not booked",
          support:
            "Private itineraries shaped around pace, place, and the quieter kind of luxury.",
          primaryLabel: "Explore journeys",
          primaryTo: "/journeys",
          secondaryLabel: "Our atelier",
          secondaryTo: "/about",
        },
        {
          image:
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=2000&q=80",
          alt: "Tropical coastline from above",
          headline: "Islands that restore",
          support:
            "From the Maldives to Seychelles — villas, tide tables, and days without urgency.",
          primaryLabel: "Island journeys",
          primaryTo: "/journeys",
          secondaryLabel: "Speak with us",
          secondaryTo: "/contact",
        },
        {
          image:
            "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=80",
          alt: "Luggage and travel essentials",
          headline: "Travel with a clearer mind",
          support:
            "We handle the architecture of the trip so you arrive present, not exhausted.",
          primaryLabel: "Plan a journey",
          primaryTo: "/contact",
          secondaryLabel: "View collection",
          secondaryTo: "/journeys",
        },
        {
          image:
            "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&w=2000&q=80",
          alt: "Desert dunes under soft light",
          headline: "Gulf roots, global reach",
          support:
            "Based in Dubai — designing escapes across Europe, Asia, Africa, and the islands.",
          primaryLabel: "Discover more",
          primaryTo: "/about",
          secondaryLabel: "Browse journeys",
          secondaryTo: "/journeys",
        },
      ],
      craftEyebrow: "The craft",
      craftTitle: "Travel designed with intention",
      craftLead:
        "Every itinerary is edited for rhythm — arrival soft, days spacious, evenings memorable.",
      craftAlt: "Open travel journal and map",
      craftItems: [
        {
          title: "Private pacing",
          text: "We protect empty hours as carefully as we book signature experiences.",
        },
        {
          title: "Places with soul",
          text: "Hotels and guides chosen for character, hospitality, and lasting memory.",
        },
        {
          title: "One atelier",
          text: "From first conversation to return flight — a single team that knows your journey.",
        },
      ],
      featuredEyebrow: "Featured",
      featuredTitle: "Journeys from the current season",
      featuredLead: "A selection of escapes ready to refine around your dates and preferences.",
      viewAll: "View all journeys",
      regionsEyebrow: "Regions",
      regionsTitle: "Where we take you",
      regionsLead: "Five geographies we know deeply — and return to with care.",
      regions: [
        {
          title: "Islands",
          text: "Quiet waters and villas above the reef.",
          image:
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=80",
          alt: "Tropical island aerial",
        },
        {
          title: "Europe",
          text: "Cities and coasts with refined stillness.",
          image:
            "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1400&q=80",
          alt: "European cityscape",
        },
        {
          title: "The Gulf",
          text: "Desert, sea, and city hospitality close to home.",
          image:
            "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1400&q=80",
          alt: "Dubai skyline",
        },
      ],
      ctaTitle: "Ready to begin?",
      ctaText: "Tell us how you travel — we will compose a journey that fits.",
      ctaButton: "Plan with Nasma",
    },
    about: {
      heroAlt: "Travel planning atmosphere",
      heroTitle: "About Nasma",
      heroLead:
        "Nasma means breeze in Arabic — the soft shift that arrives before a change of scene.",
      storyEyebrow: "Our story",
      storyTitle: "An atelier for considered travel",
      storyP1:
        "We began in Dubai for families and travellers who wanted fewer, better journeys — planned with the same care as a private home.",
      storyP2:
        "Today our specialists design itineraries across islands, cities, highlands, and safaris, with partners we visit ourselves.",
      storyAlt: "Luxury hotel corridor with warm light",
      valuesEyebrow: "Principles",
      valuesTitle: "How we travel",
      values: [
        {
          title: "Calm over clutter",
          text: "We remove noise from the itinerary so presence can return.",
        },
        {
          title: "Local intelligence",
          text: "Guides and hosts who know the place beyond the postcard.",
        },
        {
          title: "Discreet care",
          text: "Support that stays near without interrupting the journey.",
        },
      ],
      processEyebrow: "Process",
      processTitle: "From conversation to departure",
      process: [
        { step: "01", title: "Listen", text: "We learn how you rest, celebrate, and move." },
        { step: "02", title: "Compose", text: "A draft itinerary with space to breathe." },
        { step: "03", title: "Refine", text: "Hotels, timing, and details until it feels right." },
        { step: "04", title: "Depart", text: "We stay reachable from takeoff to return." },
      ],
      galleryEyebrow: "Atmosphere",
      galleryTitle: "Moments we design toward",
    },
    journeysPage: {
      heroAlt: "Open road through dramatic landscape",
      heroTitle: "Journeys",
      heroLead:
        "Browse our collection. Each journey is a starting composition — enquire to tailor dates, hotels, and pace. Online booking is not available.",
      all: "All",
      regions: {
        gulf: "Gulf",
        europe: "Europe",
        asia: "Asia",
        africa: "Africa",
        islands: "Islands",
      },
      duration: "Duration",
      includes: "Includes",
      enquire: "Enquire about this journey",
      close: "Close",
      note: "Prices are starting guides for two travellers. Final quotation follows season and preferences.",
      empty: "No journeys in this region yet.",
      viewDetails: "View details",
    },
    contact: {
      heroAlt: "Modern travel destination architecture",
      heroTitle: "Contact",
      heroLead: "Share your dates and destinations — we reply within one working day.",
      eyebrow: "Atelier",
      title: "Let us plan with you",
      lead: "Whether you need a honeymoon, a family escape, or a quiet week alone — begin here.",
      visit: "Visit",
      address: "Nasma Journeys\nDIFC\nDubai, United Arab Emirates",
      email: "Email",
      phone: "Phone",
      hours: "Hours",
      hoursValue: "Saturday – Thursday · 09:00 – 19:00",
      firstName: "First name",
      lastName: "Last name",
      emailLabel: "Email",
      phoneLabel: "Phone",
      interest: "I am interested in",
      options: {
        tailor: "A tailored journey",
        package: "A journey from the collection",
        honeymoon: "Honeymoon",
        family: "Family travel",
      },
      message: "Message",
      send: "Send message",
      success: "Thank you — we have received your message and will reply shortly.",
      mapAlt: "Luxury resort pool at dusk",
      mapTitle: "DIFC",
      mapCity: "Dubai, UAE",
    },
  },
  ar: {
    brand: "نسمات للرحلات",
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      journeys: "الرحلات",
      contact: "تواصل",
      plan: "خطّط رحلة",
      menu: "فتح القائمة",
      primary: "القائمة الرئيسية",
    },
    lang: { en: "EN", ar: "ع", switchTo: "تغيير اللغة" },
    footer: {
      blurb:
        "مشغل سفر في دبي يؤلّف رحلات هادئة ومدروسة حول العالم.",
      explore: "استكشف",
      atelier: "المشغل",
      connect: "تواصل",
      address: "مركز دبي المالي · دبي، الإمارات",
      hours: "السبت – الخميس · 09:00 – 19:00",
    },
    home: {
      slides: [
        {
          image:
            "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=80",
          alt: "مسافر يطل على بحيرة جبلية",
          headline: "رحلات تُؤلَّف لا تُحجز فقط",
          support:
            "مسارات خاصة تُشكَّل حول الإيقاع والمكان والفخامة الهادئة.",
          primaryLabel: "استكشف الرحلات",
          primaryTo: "/journeys",
          secondaryLabel: "مشغلنا",
          secondaryTo: "/about",
        },
        {
          image:
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=2000&q=80",
          alt: "ساحل استوائي من الأعلى",
          headline: "جزر تُرمّم",
          support:
            "من المالديف إلى سيشل — فلل وجداول المد وأيام بلا استعجال.",
          primaryLabel: "رحلات الجزر",
          primaryTo: "/journeys",
          secondaryLabel: "تحدث معنا",
          secondaryTo: "/contact",
        },
        {
          image:
            "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=80",
          alt: "حقائب ومستلزمات سفر",
          headline: "سافر بعقل أوضح",
          support:
            "نتولى هندسة الرحلة لتصل حاضراً لا مرهقاً.",
          primaryLabel: "خطّط رحلة",
          primaryTo: "/contact",
          secondaryLabel: "عرض المجموعة",
          secondaryTo: "/journeys",
        },
        {
          image:
            "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&w=2000&q=80",
          alt: "كثبان صحراوية بضوء ناعم",
          headline: "جذور خليجية وأفق عالمي",
          support:
            "مقرنا دبي — نصمّم ملاذات عبر أوروبا وآسيا وأفريقيا والجزر.",
          primaryLabel: "اكتشف المزيد",
          primaryTo: "/about",
          secondaryLabel: "تصفح الرحلات",
          secondaryTo: "/journeys",
        },
      ],
      craftEyebrow: "الحرفة",
      craftTitle: "سفر يُصمَّم بقصد",
      craftLead:
        "كل مسار يُحرَّر للإيقاع — وصول ناعم وأيام فسيحة وأمسيات لا تُنسى.",
      craftAlt: "دفتر سفر وخريطة مفتوحة",
      craftItems: [
        {
          title: "إيقاع خاص",
          text: "نحمي الساعات الفارغة بعناية حجز التجارب المميزة.",
        },
        {
          title: "أماكن بروح",
          text: "فنادق ومرشدون يُختارون للطابع والضيافة والذكرى.",
        },
        {
          title: "مشغل واحد",
          text: "من أول حديث حتى رحلة العودة — فريق واحد يعرف مساركم.",
        },
      ],
      featuredEyebrow: "مختارات",
      featuredTitle: "رحلات من الموسم الحالي",
      featuredLead: "تشكيلة ملاذات جاهزة للصقل حول تواريخكم وتفضيلاتكم.",
      viewAll: "عرض كل الرحلات",
      regionsEyebrow: "المناطق",
      regionsTitle: "إلى أين نأخذكم",
      regionsLead: "خمس جغرافيات نعرفها بعمق — ونعود إليها بعناية.",
      regions: [
        {
          title: "الجزر",
          text: "مياه هادئة وفلل فوق الشعاب.",
          image:
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=80",
          alt: "جزيرة استوائية من الجو",
        },
        {
          title: "أوروبا",
          text: "مدن وسواحل بسكون راقٍ.",
          image:
            "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1400&q=80",
          alt: "أفق مدينة أوروبية",
        },
        {
          title: "الخليج",
          text: "صحراء وبحر وضيافة مدينة قريبة من البيت.",
          image:
            "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1400&q=80",
          alt: "أفق دبي",
        },
      ],
      ctaTitle: "هل أنتم مستعدون للبداية؟",
      ctaText: "أخبرونا كيف تسافرون — سنؤلّف رحلة تناسبكم.",
      ctaButton: "خطّط مع نسمات",
    },
    about: {
      heroAlt: "أجواء تخطيط السفر",
      heroTitle: "عن نسمات",
      heroLead:
        "نسمة بالعربية تعني النسيم — التحوّل الناعم قبل تغيّر المشهد.",
      storyEyebrow: "قصتنا",
      storyTitle: "مشغل للسفر المدروس",
      storyP1:
        "بدأنا في دبي لعائلات ومسافرين أرادوا رحلات أقل وأفضل — تُخطَّط بعناية منزل خاص.",
      storyP2:
        "اليوم يصمّم متخصصونا مسارات عبر الجزر والمدن والمرتفعات والسفاري، مع شركاء نزورهم بأنفسنا.",
      storyAlt: "ممر فندق فاخر بضوء دافئ",
      valuesEyebrow: "المبادئ",
      valuesTitle: "كيف نسافر",
      values: [
        {
          title: "الهدوء لا الفوضى",
          text: "نزيل الضجيج من المسار ليعود الحضور.",
        },
        {
          title: "معرفة محلية",
          text: "مرشدون ومضيفون يعرفون المكان أبعد من البطاقة البريدية.",
        },
        {
          title: "رعاية هادئة",
          text: "دعم يبقى قريباً دون أن يقاطع الرحلة.",
        },
      ],
      processEyebrow: "المسار",
      processTitle: "من الحديث إلى المغادرة",
      process: [
        { step: "01", title: "نستمع", text: "نتعلّم كيف ترتاحون وتحتفلون وتتحركون." },
        { step: "02", title: "نؤلّف", text: "مسودة مسار فيها مساحة للتنفّس." },
        { step: "03", title: "نصقل", text: "فنادق وتوقيت وتفاصيل حتى تشعروا بالصواب." },
        { step: "04", title: "تغادرون", text: "نبقى متاحين من الإقلاع حتى العودة." },
      ],
      galleryEyebrow: "الأجواء",
      galleryTitle: "لحظات نصمّم نحوها",
    },
    journeysPage: {
      heroAlt: "طريق مفتوح عبر منظر درامي",
      heroTitle: "الرحلات",
      heroLead:
        "تصفّحوا مجموعتنا. كل رحلة تكوين ابتدائي — استفسروا لتخصيص التواريخ والفنادق والإيقاع. الحجز عبر الإنترنت غير متاح.",
      all: "الكل",
      regions: {
        gulf: "الخليج",
        europe: "أوروبا",
        asia: "آسيا",
        africa: "أفريقيا",
        islands: "الجزر",
      },
      duration: "المدة",
      includes: "يشمل",
      enquire: "استفسر عن هذه الرحلة",
      close: "إغلاق",
      note: "الأسعار إرشادية لبداية مسافرَين. العرض النهائي يعتمد على الموسم والتفضيلات.",
      empty: "لا توجد رحلات في هذه المنطقة بعد.",
      viewDetails: "عرض التفاصيل",
    },
    contact: {
      heroAlt: "عمارة وجهة سفر حديثة",
      heroTitle: "تواصل معنا",
      heroLead: "شاركوا تواريخكم ووجهاتكم — نرد خلال يوم عمل واحد.",
      eyebrow: "المشغل",
      title: "دعونا نخطّط معكم",
      lead: "سواء احتجتم شهر عسل أو ملاذ عائلة أو أسبوعاً هادئاً وحدكم — ابدأوا هنا.",
      visit: "الزيارة",
      address: "نسمات للرحلات\nمركز دبي المالي العالمي\nدبي، الإمارات العربية المتحدة",
      email: "البريد",
      phone: "الهاتف",
      hours: "الساعات",
      hoursValue: "السبت – الخميس · 09:00 – 19:00",
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف",
      interest: "أنا مهتم بـ",
      options: {
        tailor: "رحلة مخصصة",
        package: "رحلة من المجموعة",
        honeymoon: "شهر عسل",
        family: "سفر عائلي",
      },
      message: "الرسالة",
      send: "إرسال الرسالة",
      success: "شكراً لكم — استلمنا رسالتكم وسنرد قريباً.",
      mapAlt: "مسبح منتجع فاخر عند الغسق",
      mapTitle: "مركز دبي المالي",
      mapCity: "دبي، الإمارات",
    },
  },
} as const;
