export type Lang = "en" | "ar";

export type Practice = {
  id: string;
  image: string;
  nameEn: string;
  nameAr: string;
  summaryEn: string;
  summaryAr: string;
  detailEn: string;
  detailAr: string;
};

export const practices: Practice[] = [
  {
    id: "corporate",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    nameEn: "Corporate & Commercial",
    nameAr: "الشركات والتجارة",
    summaryEn: "Entity formation, shareholder arrangements, and day-to-day commercial counsel.",
    summaryAr: "تأسيس الكيانات وترتيبات المساهمين والاستشارات التجارية اليومية.",
    detailEn:
      "We advise boards and founders on governance, contracts, joint ventures, and cross-border structuring with a preference for clarity over complexity.",
    detailAr:
      "نقدم المشورة لمجالس الإدارة والمؤسسين حول الحوكمة والعقود والمشاريع المشتركة والهياكل عبر الحدود مع تفضيل الوضوح على التعقيد.",
  },
  {
    id: "disputes",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=80",
    nameEn: "Dispute Resolution",
    nameAr: "فض المنازعات",
    summaryEn: "Litigation and arbitration conducted with strategy, composure, and precision.",
    summaryAr: "تقاضي وتحكيم يُداران باستراتيجية ورباطة جأش ودقة.",
    detailEn:
      "From DIFC and onshore courts to regional arbitration seats, we protect commercial interests while keeping reputational risk firmly in view.",
    detailAr:
      "من محاكم مركز دبي المالي والأسواق المحلية إلى مراكز التحكيم الإقليمية، نحمي المصالح التجارية مع إبقاء المخاطر السمعية في الاعتبار.",
  },
  {
    id: "real-estate",
    image:
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1400&q=80",
    nameEn: "Real Estate & Construction",
    nameAr: "العقارات والإنشاءات",
    summaryEn: "Acquisitions, development agreements, and construction claims across the UAE.",
    summaryAr: "استحواذات واتفاقيات تطوير ومطالبات إنشائية عبر الإمارات.",
    detailEn:
      "Developers, funds, and landowners instruct us on title, joint development, and dispute avoidance throughout the project lifecycle.",
    detailAr:
      "يستعين بنا المطورون والصناديق وملاك الأراضي في الملكية والتطوير المشترك وتجنب النزاعات عبر دورة حياة المشروع.",
  },
  {
    id: "employment",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80",
    nameEn: "Employment & Executive",
    nameAr: "العمل والتنفيذيون",
    summaryEn: "Sensitive employment counsel for employers and senior executives.",
    summaryAr: "استشارات عمل دقيقة لأصحاب العمل وكبار التنفيذيين.",
    detailEn:
      "We handle contracts, exits, non-competes, and workplace investigations with discretion suited to leadership teams.",
    detailAr:
      "نتولى العقود والمغادرات وقيود المنافسة وتحقيقات بيئة العمل بسرية تلائم فرق القيادة.",
  },
  {
    id: "private-client",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
    nameEn: "Private Client",
    nameAr: "العملاء الخاصون",
    summaryEn: "Family wealth, succession, and personal matters handled with care.",
    summaryAr: "ثروة العائلة والخلافة والشؤون الشخصية بعناية.",
    detailEn:
      "Families and principals trust us with wills, structures, and confidential personal mandates across jurisdictions.",
    detailAr:
      "تثق بنا العائلات والشخصيات في الوصايا والهياكل والتكليفات الشخصية السرية عبر الولايات القضائية.",
  },
  {
    id: "regulatory",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
    nameEn: "Regulatory & Compliance",
    nameAr: "التنظيم والامتثال",
    summaryEn: "Licensing, investigations, and governance frameworks for regulated sectors.",
    summaryAr: "تراخيص وتحقيقات وأطر حوكمة للقطاعات المنظمة.",
    detailEn:
      "We guide financial, technology, and professional services clients through evolving UAE regulatory expectations.",
    detailAr:
      "نرشد عملاء المالية والتقنية والخدمات المهنية عبر التوقعات التنظيمية المتطورة في الإمارات.",
  },
];

export const translations = {
  en: {
    brand: "Mizan Chambers",
    brandShort: "Mizan",
    nav: {
      home: "Home",
      about: "About",
      practice: "Practice",
      contact: "Contact",
      consult: "Request counsel",
      menu: "Toggle menu",
      primary: "Primary",
    },
    lang: { en: "EN", ar: "عربي", switchTo: "Switch language" },
    footer: {
      blurb:
        "A Dubai law firm advising corporations and families with clarity, composure, and discretion.",
      explore: "Explore",
      chambers: "Chambers",
      connect: "Connect",
      address: "DIFC Gate Village · Dubai, UAE",
      hours: "Sun – Thu · 09:00 – 18:00",
    },
    home: {
      eyebrow: "Dubai · DIFC",
      headline: "Counsel that holds its balance",
      support:
        "Mizan Chambers advises on complex commercial and personal matters with measured judgment and quiet authority.",
      ctaPractice: "Our practice",
      ctaConsult: "Arrange a meeting",
      heroAlt: "Lady Justice holding the scales of balance",
      stats: [
        { value: "20+", label: "Years of counsel" },
        { value: "6", label: "Practice areas" },
        { value: "DIFC", label: "Based in Dubai" },
        { value: "2", label: "Languages advised" },
      ],
      principleEyebrow: "Principles",
      principleTitle: "Law practised with restraint",
      principles: [
        {
          num: "01",
          title: "Clarity first",
          text: "Advice written so boards and families can act — without unnecessary ornament.",
        },
        {
          num: "02",
          title: "Composed advocacy",
          text: "We advance positions firmly, never theatrically, in court and in negotiation.",
        },
        {
          num: "03",
          title: "Confidential by design",
          text: "Sensitive mandates are handled with the discretion they require.",
        },
      ],
      practiceEyebrow: "Practice areas",
      practiceTitle: "Where we focus",
      practiceLead: "Six disciplines. One standard of care.",
      viewAll: "View full practice",
      trustEyebrow: "Approach",
      trustTitle: "Partnership beyond the brief",
      trustLead:
        "We stay close to the commercial reality behind every instruction — so legal advice lands where decisions are made.",
      trustAlt: "Modern law office meeting room",
      trustPoints: [
        "Partners personally engaged on every material matter",
        "Bilingual counsel across Arabic and English",
        "Strong relationships with regional counsel and experts",
      ],
      ctaTitle: "Discuss your matter",
      ctaText: "Share a confidential outline — we respond within one working day.",
      ctaButton: "Contact the chambers",
    },
    about: {
      heroTitle: "About the chambers",
      heroLead:
        "Mizan — the scale — names our commitment to proportion, fairness, and carefully weighed advice.",
      storyEyebrow: "Our story",
      storyTitle: "Built for considered counsel",
      storyP1:
        "Founded in Dubai for clients who want partner-led advice without the noise of an oversized firm. We combine courtroom discipline with commercial pragmatism.",
      storyP2:
        "Our lawyers work across DIFC, onshore UAE, and cross-border mandates, supported by a culture that values preparation over performance.",
      storyAlt: "Professional handshake in a corporate setting",
      valuesEyebrow: "Standards",
      valuesTitle: "What we refuse to compromise",
      values: [
        {
          title: "Independence",
          text: "Recommendations follow the law and the client’s best interest — not convenience.",
        },
        {
          title: "Preparation",
          text: "Every hearing and negotiation is built on records that hold up under pressure.",
        },
        {
          title: "Access",
          text: "You speak with the lawyers doing the work, not a revolving cast of intermediaries.",
        },
      ],
      teamEyebrow: "Leadership",
      teamTitle: "Partners who stay in the work",
      team: [
        {
          name: "Layla Al Qasimi",
          role: "Managing Partner",
          bio: "Corporate and disputes counsel with two decades across the UAE and London.",
        },
        {
          name: "James Merrow",
          role: "Head of Disputes",
          bio: "Arbitration specialist focused on construction and shareholder conflicts.",
        },
        {
          name: "Omar Hassan",
          role: "Head of Corporate",
          bio: "Advises founders and family groups on governance and cross-border growth.",
        },
      ],
    },
    practicePage: {
      heroTitle: "Practice",
      heroLead:
        "Select a discipline to learn how we advise — then enquire for a confidential consultation. This is a counsel showcase, not an online filing desk.",
      open: "Read more",
      close: "Close",
      enquire: "Enquire about this practice",
      includes: "How we help",
    },
    contact: {
      heroTitle: "Contact",
      heroLead: "Tell us about your matter. All enquiries are treated as confidential.",
      eyebrow: "Chambers",
      title: "Request a consultation",
      lead: "Share as much context as you are comfortable providing. We will confirm next steps promptly.",
      visit: "Visit",
      address: "Mizan Chambers\nDIFC Gate Village\nDubai, United Arab Emirates",
      email: "Email",
      phone: "Phone",
      hours: "Hours",
      hoursValue: "Sunday – Thursday · 09:00 – 18:00",
      firstName: "First name",
      lastName: "Last name",
      emailLabel: "Email",
      phoneLabel: "Phone",
      interest: "Matter type",
      options: {
        corporate: "Corporate & commercial",
        disputes: "Dispute resolution",
        realEstate: "Real estate",
        employment: "Employment",
        private: "Private client",
        other: "Other / confidential",
      },
      message: "Message",
      send: "Send enquiry",
      success: "Thank you — your enquiry has been received. A partner will respond shortly.",
      mapAlt: "Contemporary office interior",
      mapTitle: "DIFC Gate Village",
      mapCity: "Dubai, UAE",
    },
  },
  ar: {
    brand: "ميزان للشؤون القانونية",
    brandShort: "ميزان",
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      practice: "الممارسات",
      contact: "تواصل",
      consult: "طلب استشارة",
      menu: "فتح القائمة",
      primary: "القائمة الرئيسية",
    },
    lang: { en: "EN", ar: "عربي", switchTo: "تغيير اللغة" },
    footer: {
      blurb:
        "مكتب محاماة في دبي يقدم المشورة للشركات والعائلات بوضوح ورباطة جأش وسرية.",
      explore: "استكشف",
      chambers: "المكتب",
      connect: "تواصل",
      address: "قرية البوابة · مركز دبي المالي · دبي",
      hours: "الأحد – الخميس · 09:00 – 18:00",
    },
    home: {
      eyebrow: "دبي · مركز دبي المالي",
      headline: "مشورة تحفظ توازنها",
      support:
        "يقدم ميزان المشورة في الشؤون التجارية والشخصية المعقدة بحكم متزن وهيبة هادئة.",
      ctaPractice: "ممارساتنا",
      ctaConsult: "رتّب اجتماعاً",
      heroAlt: "تمثال العدالة يحمل ميزان التوازن",
      stats: [
        { value: "20+", label: "عاماً من المشورة" },
        { value: "6", label: "مجالات ممارسة" },
        { value: "DIFC", label: "مقرنا دبي" },
        { value: "2", label: "لغات للاستشارة" },
      ],
      principleEyebrow: "المبادئ",
      principleTitle: "قانون يُمارس باعتدال",
      principles: [
        {
          num: "01",
          title: "الوضوح أولاً",
          text: "مشورة تُكتب لتمكّن المجالس والعائلات من التصرف — بلا زخرفة زائدة.",
        },
        {
          num: "02",
          title: "مرافعة رصينة",
          text: "نقدّم المواقف بحزم لا بمسرحة، في المحكمة وفي التفاوض.",
        },
        {
          num: "03",
          title: "سرية بالتصميم",
          text: "التكليفات الحساسة تُعالَج بالتحفظ الذي تتطلبه.",
        },
      ],
      practiceEyebrow: "مجالات الممارسة",
      practiceTitle: "أين نركّز",
      practiceLead: "ستة تخصصات. معيار رعاية واحد.",
      viewAll: "عرض الممارسات كاملة",
      trustEyebrow: "النهج",
      trustTitle: "شراكة أبعد من الملف",
      trustLead:
        "نبقى قريبين من الواقع التجاري خلف كل تكليف — لتصل المشورة حيث تُتخذ القرارات.",
      trustAlt: "قاعة اجتماعات في مكتب قانوني حديث",
      trustPoints: [
        "شركاء منخرطون شخصياً في كل مسألة جوهرية",
        "مشورة ثنائية اللغة بالعربية والإنجليزية",
        "علاقات قوية مع مستشارين وخبراء إقليميين",
      ],
      ctaTitle: "ناقشوا مسألتكم",
      ctaText: "شاركوا ملخصاً سرياً — نرد خلال يوم عمل واحد.",
      ctaButton: "تواصل مع المكتب",
    },
    about: {
      heroTitle: "عن المكتب",
      heroLead:
        "ميزان — الميزان — يسمي التزامنا بالتناسب والعدل والمشورة الموزونة بعناية.",
      storyEyebrow: "قصتنا",
      storyTitle: "بُني للمشورة المدروسة",
      storyP1:
        "تأسس في دبي لعملاء يريدون مشورة يقودها الشركاء دون ضجيج مكتب متضخم. نجمع انضباط قاعة المحكمة مع براغماتية تجارية.",
      storyP2:
        "يعمل محامونا عبر مركز دبي المالي والإمارات البرية والتكليفات عبر الحدود، في ثقافة تقدّر الإعداد على العرض.",
      storyAlt: "مصافحة مهنية في بيئة شركات",
      valuesEyebrow: "المعايير",
      valuesTitle: "ما لا نساوم عليه",
      values: [
        {
          title: "الاستقلال",
          text: "التوصيات تتبع القانون ومصلحة العميل — لا الراحة.",
        },
        {
          title: "الإعداد",
          text: "كل جلسة وتفاوض يُبنيان على سجلات تصمد تحت الضغط.",
        },
        {
          title: "الوصول",
          text: "تتكلمون مع المحامين الذين يؤدون العمل لا مع وسطاء متبدلين.",
        },
      ],
      teamEyebrow: "القيادة",
      teamTitle: "شركاء يبقون في العمل",
      team: [
        {
          name: "ليلى القاسمي",
          role: "الشريكة المديرة",
          bio: "مستشارة شركات ومنازعات بخبرة عقدين عبر الإمارات ولندن.",
        },
        {
          name: "جيمس ميرو",
          role: "رئيس فض المنازعات",
          bio: "متخصص تحكيم يركز على الإنشاءات ونزاعات المساهمين.",
        },
        {
          name: "عمر حسن",
          role: "رئيس الشركات",
          bio: "يقدم المشورة للمؤسسين والمجموعات العائلية في الحوكمة والنمو عبر الحدود.",
        },
      ],
    },
    practicePage: {
      heroTitle: "الممارسات",
      heroLead:
        "اختاروا تخصصاً لمعرفة كيف نقدم المشورة — ثم استفسروا لاستشارة سرية. هذا عرض للمشورة لا مكتب تقديم عبر الإنترنت.",
      open: "اقرأ المزيد",
      close: "إغلاق",
      enquire: "استفسر عن هذه الممارسة",
      includes: "كيف نساعد",
    },
    contact: {
      heroTitle: "تواصل",
      heroLead: "أخبرونا عن مسألتكم. جميع الاستفسارات تُعامل بسرية.",
      eyebrow: "المكتب",
      title: "اطلبوا استشارة",
      lead: "شاركوا ما يناسبكم من السياق. سنؤكد الخطوات التالية بسرعة.",
      visit: "الزيارة",
      address: "ميزان للشؤون القانونية\nقرية البوابة · مركز دبي المالي\nدبي، الإمارات العربية المتحدة",
      email: "البريد",
      phone: "الهاتف",
      hours: "الساعات",
      hoursValue: "الأحد – الخميس · 09:00 – 18:00",
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف",
      interest: "نوع المسألة",
      options: {
        corporate: "الشركات والتجارة",
        disputes: "فض المنازعات",
        realEstate: "العقارات",
        employment: "العمل",
        private: "عميل خاص",
        other: "أخرى / سرية",
      },
      message: "الرسالة",
      send: "إرسال الاستفسار",
      success: "شكراً لكم — تم استلام استفساركم. سيرد شريك قريباً.",
      mapAlt: "داخل مكتب معاصر",
      mapTitle: "قرية البوابة · مركز دبي المالي",
      mapCity: "دبي، الإمارات",
    },
  },
} as const;
