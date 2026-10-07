export type Lang = "en" | "ar";

export type Product = {
  id: string;
  category: "seating" | "tables" | "storage" | "lighting" | "bedroom";
  image: string;
  imageAlt: string;
  priceEn: string;
  priceAr: string;
  nameEn: string;
  nameAr: string;
  descEn: string;
  descAr: string;
  materialsEn: string;
  materialsAr: string;
  colors: string[];
  sizeOptions: { en: string; ar: string }[];
};

export const products: Product[] = [
  {
    id: "sofa-solace",
    category: "seating",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Deep green velvet sofa",
    priceEn: "From AED 18,500",
    priceAr: "من 18,500 درهم",
    nameEn: "Solace Sofa",
    nameAr: "أريكة سولاس",
    descEn:
      "A low, generous sofa upholstered in performance velvet — shaped for long evenings and quiet conversation.",
    descAr:
      "أريكة منخفضة وواسعة مكسوّة بمخمل عملي — مصممة للأمسيات الطويلة والحديث الهادئ.",
    materialsEn: "Kiln-dried oak · Performance velvet · Feather-blend cushions",
    materialsAr: "بلوط مجفف · مخمل عملي · وسائد بخليط الريش",
    colors: ["#2F4F3E","#C4B8A8","#1A1A1A"],
    sizeOptions: [{"en":"2.5m","ar":"2.5م"},{"en":"3m","ar":"3م"},{"en":"Corner","ar":"زاوية"}],
  },
  {
    id: "chair-aria",
    category: "seating",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Mustard lounge chair",
    priceEn: "From AED 6,200",
    priceAr: "من 6,200 درهم",
    nameEn: "Aria Lounge",
    nameAr: "كرسي آريا",
    descEn:
      "Sculptural lounge seating with a soft silhouette and hand-finished timber legs.",
    descAr:
      "مقعد استرخاء منحوت بخطوط ناعمة وأرجل خشبية مشغولة يدوياً.",
    materialsEn: "Solid ash · Bouclé wool blend · Brass feet",
    materialsAr: "خشب الدردار · مزيج صوف بوكليه · أقدام نحاسية",
    colors: ["#C4A35A","#E8DFD2","#5C4033"],
    sizeOptions: [{"en":"One size","ar":"مقاس واحد"}],
  },
  {
    id: "chair-nord",
    category: "seating",
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern orange accent chair",
    priceEn: "From AED 4,800",
    priceAr: "من 4,800 درهم",
    nameEn: "Nord Accent Chair",
    nameAr: "كرسي نورد",
    descEn:
      "A precise accent piece for reading corners and entry rooms — compact, confident, refined.",
    descAr:
      "قطعة مميزة لزوايا القراءة ومداخل البيوت — مدمجة وواثقة ومصقولة.",
    materialsEn: "Walnut frame · Leather upholstery · Hidden swivel base",
    materialsAr: "إطار جوز · تنجيد جلد · قاعدة دوّارة مخفية",
    colors: ["#C45C26","#2C2C2C","#8B7355"],
    sizeOptions: [{"en":"One size","ar":"مقاس واحد"}],
  },
  {
    id: "sofa-linen",
    category: "seating",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Neutral linen living room sofa",
    priceEn: "From AED 21,000",
    priceAr: "من 21,000 درهم",
    nameEn: "Linen Atelier Sofa",
    nameAr: "أريكة الكتان",
    descEn:
      "Deep seating in washed linen — understated luxury for open living spaces.",
    descAr:
      "جلوس عميق بكتان مغسول — فخامة هادئة للمساحات المفتوحة.",
    materialsEn: "European linen · Softwood frame · Removable covers",
    materialsAr: "كتان أوروبي · إطار خشب ليّن · أغطية قابلة للإزالة",
    colors: ["#D8CFC0","#A89F91","#F5F1EB"],
    sizeOptions: [{"en":"2.2m","ar":"2.2م"},{"en":"2.8m","ar":"2.8م"},{"en":"3.2m","ar":"3.2م"}],
  },
  {
    id: "table-orb",
    category: "tables",
    image:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Wooden dining table setting",
    priceEn: "From AED 14,200",
    priceAr: "من 14,200 درهم",
    nameEn: "Orb Dining Table",
    nameAr: "طاولة أورب",
    descEn:
      "A quiet dining centrepiece in solid walnut with softened edges and generous proportion.",
    descAr:
      "قطعة طعام هادئة من الجوز الصلب بحواف ناعمة ونسب سخية.",
    materialsEn: "Solid walnut · Natural oil finish · Seats 8",
    materialsAr: "جوز صلب · تشطيب زيتي طبيعي · تتسع لـ 8",
    colors: ["#5C4033","#3E2723","#8D6E63"],
    sizeOptions: [{"en":"180","ar":"180"},{"en":"220","ar":"220"},{"en":"260 cm","ar":"260 سم"}],
  },
  {
    id: "table-mesa",
    category: "tables",
    image:
      "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Marble coffee table",
    priceEn: "From AED 5,600",
    priceAr: "من 5,600 درهم",
    nameEn: "Mesa Coffee Table",
    nameAr: "طاولة ميسا",
    descEn:
      "Calacatta marble over a brushed brass plinth — cool stone, warm metal.",
    descAr:
      "رخام كالاكاتا فوق قاعدة نحاسية مطحونة — حجر بارد ومعدن دافئ.",
    materialsEn: "Calacatta marble · Brushed brass · Felt pads",
    materialsAr: "رخام كالاكاتا · نحاس مطحون · وسائد لباد",
    colors: ["#F2EDE6","#B08D57","#2A2A2A"],
    sizeOptions: [{"en":"90 × 90","ar":"90 × 90"},{"en":"120 × 70","ar":"120 × 70"}],
  },
  {
    id: "table-side",
    category: "tables",
    image:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Wooden side table with lamp",
    priceEn: "From AED 2,900",
    priceAr: "من 2,900 درهم",
    nameEn: "Halo Side Table",
    nameAr: "طاولة هالو",
    descEn:
      "A slender companion table for sofas and beds — light enough to move, solid enough to last.",
    descAr:
      "طاولة رفيقة نحيلة للأرائك والأسرة — خفيفة للنقل وصلبة للبقاء.",
    materialsEn: "White oak · Matte lacquer · Rounded top",
    materialsAr: "بلوط أبيض · طلاء مطفي · سطح مستدير",
    colors: ["#EDE6DB","#A1887F","#D7CCC8"],
    sizeOptions: [{"en":"Dia 45","ar":"قطر 45"},{"en":"Dia 55","ar":"قطر 55"}],
  },
  {
    id: "storage-cabinet",
    category: "storage",
    image:
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Wooden storage cabinet",
    priceEn: "From AED 11,800",
    priceAr: "من 11,800 درهم",
    nameEn: "Archive Cabinet",
    nameAr: "خزانة أرشيف",
    descEn:
      "Tall storage with quiet hardware and soft-close doors — designed to disappear into architecture.",
    descAr:
      "تخزين مرتفع بأدوات هادئة وأبواب إغلاق ناعم — مصممة لتندمج مع العمارة.",
    materialsEn: "Oak veneer · Soft-close hinges · Adjustable shelves",
    materialsAr: "قشرة بلوط · مفصلات إغلاق ناعم · أرفف قابلة للتعديل",
    colors: ["#8D6E63","#5D4037","#D7CCC8"],
    sizeOptions: [{"en":"H 180","ar":"ارتفاع 180"},{"en":"W 90","ar":"عرض 90"}],
  },
  {
    id: "storage-console",
    category: "storage",
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern console and living room",
    priceEn: "From AED 8,400",
    priceAr: "من 8,400 درهم",
    nameEn: "Line Console",
    nameAr: "كونسول لاين",
    descEn:
      "A horizontal console for entries and galleries — sculpted drawers, floating silhouette.",
    descAr:
      "كونسول أفقي للمداخل والمعارض — أدراج منحوتة وهيئة عائمة.",
    materialsEn: "Smoked oak · Leather pulls · Cable-ready rear",
    materialsAr: "بلوط مدخّن · مقابض جلد · خلفية مهيأة للكابلات",
    colors: ["#3E2723","#6D4C41","#BCAAA4"],
    sizeOptions: [{"en":"140","ar":"140"},{"en":"180 cm","ar":"180 سم"}],
  },
  {
    id: "light-pendant",
    category: "lighting",
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Warm living room lighting",
    priceEn: "From AED 3,750",
    priceAr: "من 3,750 درهم",
    nameEn: "Glow Pendant",
    nameAr: "تعليقة غلو",
    descEn:
      "Hand-blown glass pendant that pools warm light over dining and lounge tables.",
    descAr:
      "تعليقة زجاج منفوخ يدوياً تسكب ضوءاً دافئاً فوق طاولات الطعام والجلوس.",
    materialsEn: "Mouth-blown glass · Antique brass · Dimmable LED",
    materialsAr: "زجاج منفوخ · نحاس عتيق · إضاءة LED قابلة للتعتيم",
    colors: ["#F5F0E8","#B08D57","#1A1A1A"],
    sizeOptions: [{"en":"S","ar":"ص"},{"en":"M","ar":"م"},{"en":"L","ar":"ك"}],
  },
  {
    id: "light-floor",
    category: "lighting",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Interior with floor lamp",
    priceEn: "From AED 4,100",
    priceAr: "من 4,100 درهم",
    nameEn: "Arc Floor Lamp",
    nameAr: "مصباح آرك",
    descEn:
      "A sweeping floor lamp that frames seating without crowding the room.",
    descAr:
      "مصباح أرضي مقوّس يؤطر الجلوس دون أن يزدحم الغرفة.",
    materialsEn: "Powder-coated steel · Linen shade · Marble base",
    materialsAr: "فولاذ مطلي · ظل كتان · قاعدة رخام",
    colors: ["#2C2C2C","#B08D57","#E8DFD2"],
    sizeOptions: [{"en":"H 165 cm","ar":"ارتفاع 165 سم"}],
  },
  {
    id: "bed-calm",
    category: "bedroom",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Luxury bedroom interior",
    priceEn: "From AED 16,900",
    priceAr: "من 16,900 درهم",
    nameEn: "Calm Platform Bed",
    nameAr: "سرير كالم",
    descEn:
      "A low platform bed with upholstered headboard — rest as an intentional ritual.",
    descAr:
      "سرير منصة منخفض مع لوح رأس منجّد — الراحة كطقس مقصود.",
    materialsEn: "Upholstered headboard · Oak platform · King & Queen",
    materialsAr: "لوح رأس منجّد · منصة بلوط · كينغ وكوين",
    colors: ["#D8CFC0","#8D6E63","#2F4F3E"],
    sizeOptions: [{"en":"Queen","ar":"كوين"},{"en":"King","ar":"كينغ"}],
  },
  {
    id: "bed-suite",
    category: "bedroom",
    image:
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Neutral bedroom suite",
    priceEn: "From AED 24,500",
    priceAr: "من 24,500 درهم",
    nameEn: "Suite Bedroom Set",
    nameAr: "طقم غرفة سويت",
    descEn:
      "Bed, nightstands, and dresser composed as one quiet suite in matching timber.",
    descAr:
      "سرير وطاولات جانبية وخزانة مكوّنة كطقم هادئ بخشب متطابق.",
    materialsEn: "American walnut · Soft-close drawers · Optional leather tops",
    materialsAr: "جوز أمريكي · أدراج إغلاق ناعم · أسطح جلد اختيارية",
    colors: ["#5C4033","#A89F91","#EDE6DB"],
    sizeOptions: [{"en":"Queen","ar":"طقم كوين"},{"en":"King suite","ar":"كينغ"}],
  },
  {
    id: "sofa-lounge",
    category: "seating",
    image:
      "https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Contemporary lounge seating",
    priceEn: "From AED 12,700",
    priceAr: "من 12,700 درهم",
    nameEn: "Terrace Modular",
    nameAr: "تيراس موديولار",
    descEn:
      "Modular lounge pieces that reconfigure with how you live — indoors or covered terrace.",
    descAr:
      "قطع جلوس معيارية تتكيّف مع أسلوب حياتك — داخل البيت أو الشرفة المغطاة.",
    materialsEn: "Outdoor-grade fabric · Aluminium frame · Quick-dry foam",
    materialsAr: "قماش للخارج · إطار ألمنيوم · رغوة سريعة الجفاف",
    colors: ["#6B7B6A","#C4B8A8","#2A2A2A"],
    sizeOptions: [{"en":"Modular units","ar":"وحدات معيارية"}],
  },
  {
    id: "room-living",
    category: "seating",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Styled living room composition",
    priceEn: "Curated set",
    priceAr: "طقم منسّق",
    nameEn: "Living Room Composition",
    nameAr: "تكوين غرفة المعيشة",
    descEn:
      "A full living composition styled by our atelier — sofa, tables, lighting, and textiles.",
    descAr:
      "تكوين معيشة كامل منسّق من مشغلنا — أريكة وطاولات وإضاءة وأنسجة.",
    materialsEn: "Bespoke mix · Showroom ready · Design consultation included",
    materialsAr: "مزيج حسب الطلب · جاهز للعرض · استشارة تصميم مشمولة",
    colors: ["#C4B8A8","#5C6B5A","#B08D57"],
    sizeOptions: [{"en":"Curated set","ar":"طقم منسّق"}],
  },
  {
    id: "room-interior",
    category: "storage",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Minimal interior with shelving",
    priceEn: "From AED 9,600",
    priceAr: "من 9,600 درهم",
    nameEn: "Gallery Shelf System",
    nameAr: "نظام أرفف غاليري",
    descEn:
      "Wall shelving that treats books and objects as architecture, not clutter.",
    descAr:
      "أرفف جدارية تعامل الكتب والأغراض كعمارة لا كفوضى.",
    materialsEn: "Powder steel uprights · Oak shelves · Modular spans",
    materialsAr: "قوائم فولاذ · أرفف بلوط · امتدادات معيارية",
    colors: ["#2A2A2A","#E8DFD2","#8D6E63"],
    sizeOptions: [{"en":"Custom span","ar":"امتداد مخصص"}],
  },
];

export const translations = {
  en: {
    brand: "Maison Aura",
    nav: {
      home: "Home",
      about: "About",
      store: "Store",
      contact: "Contact",
      visit: "Book a visit",
      menu: "Toggle menu",
      primary: "Primary",
    },
    lang: { en: "EN", ar: "ع", switchTo: "Switch language" },
    footer: {
      blurb:
        "A furniture atelier in Dubai composing calm interiors with enduring materials.",
      explore: "Explore",
      atelier: "Atelier",
      connect: "Connect",
      address: "Al Quoz Creative Zone · Dubai, UAE",
      hours: "Sat – Thu · 10:00 – 20:00",
    },
    home: {
      slides: [
        {
          image:
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=80",
          alt: "Premium living room styled by Maison Aura",
          headline: "Furniture that holds the quiet",
          support:
            "Bespoke and curated pieces for homes that value craft, proportion, and lasting calm.",
          primaryLabel: "Explore the store",
          primaryTo: "/store",
          secondaryLabel: "Our atelier",
          secondaryTo: "/about",
        },
        {
          image:
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2000&q=80",
          alt: "Elegant seating collection in natural light",
          headline: "Living rooms made to linger",
          support:
            "Sofas, lounges, and tables composed for conversation, rest, and everyday ritual.",
          primaryLabel: "View seating",
          primaryTo: "/store",
          secondaryLabel: "Book a visit",
          secondaryTo: "/contact",
        },
        {
          image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80",
          alt: "Warm dining interior with crafted table",
          headline: "Dining shaped for gathering",
          support:
            "Solid timber tables and soft lighting for evenings that stretch longer than planned.",
          primaryLabel: "See dining pieces",
          primaryTo: "/store",
          secondaryLabel: "Talk to design",
          secondaryTo: "/contact",
        },
        {
          image:
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=2000&q=80",
          alt: "Calm luxury bedroom by Maison Aura",
          headline: "Rest as an intentional ritual",
          support:
            "Low platforms, soft textiles, and quiet materials for bedrooms that restore.",
          primaryLabel: "Browse bedroom",
          primaryTo: "/store",
          secondaryLabel: "Visit showroom",
          secondaryTo: "/contact",
        },
      ],
      craftEyebrow: "The craft",
      craftTitle: "Materials chosen to age with grace",
      craftLead:
        "Solid timbers, natural stone, and textiles selected for touch — finished by hand in our Dubai atelier.",
      craftAlt: "Detail of finely crafted furniture wood",
      craftItems: [
        {
          title: "Honest materials",
          text: "Walnut, oak, marble, brass, and linen — chosen for integrity, not trend.",
        },
        {
          title: "Measured proportion",
          text: "Every silhouette is refined until it feels inevitable in the room.",
        },
        {
          title: "Quiet luxury",
          text: "Nothing shouts. Presence comes from craft, light, and restraint.",
        },
      ],
      featuredEyebrow: "Featured",
      featuredTitle: "Pieces from the current collection",
      featuredLead: "A selection of seating, tables, and lighting ready to view in our showroom.",
      viewAll: "View full store",
      spacesEyebrow: "Spaces",
      spacesTitle: "Rooms composed, not decorated",
      spacesLead:
        "We design living rooms, dining halls, and bedrooms as complete atmospheres.",
      spaces: [
        {
          title: "Living",
          text: "Sofas, lounges, and tables that invite lingering.",
          image:
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80",
          alt: "Elegant living room interior",
        },
        {
          title: "Dining",
          text: "Tables and lighting for gatherings that linger.",
          image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
          alt: "Dining space with warm light",
        },
        {
          title: "Rest",
          text: "Bedrooms shaped for stillness and soft light.",
          image:
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1400&q=80",
          alt: "Calm bedroom interior",
        },
      ],
      ctaTitle: "Visit the showroom",
      ctaText: "Walk the collection, feel the materials, and speak with our design team.",
      ctaButton: "Book a private visit",
    },
    about: {
      heroAlt: "Atelier workshop and materials",
      heroTitle: "About the atelier",
      heroLead:
        "Maison Aura was founded to bring European craft discipline to Gulf homes — patient, precise, and personal.",
      storyEyebrow: "Our story",
      storyTitle: "Built around the room, not the catalogue",
      storyP1:
        "We began as a small studio in Al Quoz, designing furniture for clients who wanted fewer pieces and better ones. Today our showroom holds a curated collection alongside fully bespoke commissions.",
      storyP2:
        "Designers, makers, and finishers work under one roof. That proximity is how we keep quality visible — from the first sketch to the final oil on timber.",
      storyAlt: "Interior design detail with natural light",
      valuesEyebrow: "Principles",
      valuesTitle: "How we work",
      values: [
        {
          title: "Fewer, finer",
          text: "We refuse excess. Every piece must earn its place in the home.",
        },
        {
          title: "Local presence",
          text: "Showroom, atelier, and aftercare are based in Dubai — always near.",
        },
        {
          title: "Enduring finish",
          text: "We finish for decades of use, not a single season of display.",
        },
      ],
      processEyebrow: "Process",
      processTitle: "From visit to placement",
      process: [
        {
          step: "01",
          title: "Visit",
          text: "Tour the showroom and discuss how you live.",
        },
        {
          step: "02",
          title: "Compose",
          text: "We propose pieces or a bespoke plan for your rooms.",
        },
        {
          step: "03",
          title: "Craft",
          text: "Selected works are finished, fitted, and prepared for delivery.",
        },
        {
          step: "04",
          title: "Place",
          text: "Our team installs with care so every line sits true.",
        },
      ],
      galleryEyebrow: "Atelier",
      galleryTitle: "Inside Maison Aura",
    },
    store: {
      heroAlt: "Furniture collection display",
      heroTitle: "Store",
      heroLead:
        "Browse our collection. This is a showcase — enquire to reserve a viewing or request details. Online ordering is not available.",
      all: "All",
      categories: {
        seating: "Seating",
        tables: "Tables",
        storage: "Storage",
        lighting: "Lighting",
        bedroom: "Bedroom",
      },
      materials: "Materials",
      enquire: "Enquire about this piece",
      close: "Close",
      note: "Prices shown are starting guides. Final quotation follows materials and finish.",
      empty: "No pieces in this category yet.",
      viewDetails: "View details",
      colors: "Colours",
      sizes: "Sizes",
    },
    contact: {
      heroAlt: "Dubai skyline and architecture",
      heroTitle: "Contact",
      heroLead: "Request a showroom visit or ask about a piece from the collection.",
      eyebrow: "Showroom",
      title: "We are here to guide you",
      lead: "Share a little about your project. Our team replies within one working day.",
      visit: "Visit",
      address: "Maison Aura\nAl Quoz Creative Zone\nDubai, United Arab Emirates",
      email: "Email",
      phone: "Phone",
      hours: "Hours",
      hoursValue: "Saturday – Thursday · 10:00 – 20:00",
      firstName: "First name",
      lastName: "Last name",
      emailLabel: "Email",
      phoneLabel: "Phone",
      interest: "I am interested in",
      options: {
        visit: "Showroom visit",
        piece: "A specific piece",
        bespoke: "Bespoke commission",
        interiors: "Full room design",
      },
      message: "Message",
      send: "Send message",
      success: "Thank you — we have received your message and will reply shortly.",
      mapAlt: "Modern architectural interior",
      mapTitle: "Al Quoz Creative Zone",
      mapCity: "Dubai, UAE",
    },
  },
  ar: {
    brand: "ميزون أورا",
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      store: "المتجر",
      contact: "تواصل",
      visit: "احجز زيارة",
      menu: "فتح القائمة",
      primary: "القائمة الرئيسية",
    },
    lang: { en: "EN", ar: "ع", switchTo: "تغيير اللغة" },
    footer: {
      blurb:
        "مشغل أثاث في دبي يؤلّف مساحات هادئة بمواد تدوم.",
      explore: "استكشف",
      atelier: "المشغل",
      connect: "تواصل",
      address: "منطقة القوز الإبداعية · دبي، الإمارات",
      hours: "السبت – الخميس · 10:00 – 20:00",
    },
    home: {
      slides: [
        {
          image:
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=80",
          alt: "غرفة معيشة فاخرة من تنسيق ميزون أورا",
          headline: "أثاث يحفظ الهدوء",
          support:
            "قطع مختارة ومخصصة للمنازل التي تقدّر الحرفة والنسب والهدوء الدائم.",
          primaryLabel: "استكشف المتجر",
          primaryTo: "/store",
          secondaryLabel: "مشغلنا",
          secondaryTo: "/about",
        },
        {
          image:
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2000&q=80",
          alt: "مجموعة جلوس أنيقة بضوء طبيعي",
          headline: "غرف معيشة تدعو للبقاء",
          support:
            "أرائك ومقاعد وطاولات مؤلَّفة للحديث والراحة وطقوس اليوم.",
          primaryLabel: "عرض المقاعد",
          primaryTo: "/store",
          secondaryLabel: "احجز زيارة",
          secondaryTo: "/contact",
        },
        {
          image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80",
          alt: "مساحة طعام دافئة مع طاولة مشغولة",
          headline: "طعام شُكّل للّقاء",
          support:
            "طاولات خشب صلب وإضاءة ناعمة لأمسيات تدوم أطول مما خُطّط له.",
          primaryLabel: "قطع الطعام",
          primaryTo: "/store",
          secondaryLabel: "تحدث مع التصميم",
          secondaryTo: "/contact",
        },
        {
          image:
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=2000&q=80",
          alt: "غرفة نوم هادئة فاخرة من ميزون أورا",
          headline: "الراحة كطقس مقصود",
          support:
            "منصات منخفضة وأنسجة ناعمة ومواد هادئة لغرف نوم تُرمّم.",
          primaryLabel: "تصفح غرف النوم",
          primaryTo: "/store",
          secondaryLabel: "زُر الصالة",
          secondaryTo: "/contact",
        },
      ],
      craftEyebrow: "الحرفة",
      craftTitle: "مواد تشيخ برقي",
      craftLead:
        "أخشاب صلبة وحجر طبيعي وأنسجة مختارة للمس — تُنهى يدوياً في مشغلنا بدبي.",
      craftAlt: "تفاصيل خشب أثاث مشغول بعناية",
      craftItems: [
        {
          title: "مواد صادقة",
          text: "الجوز والبلوط والرخام والنحاس والكتان — مختارة للنزاهة لا للموضة.",
        },
        {
          title: "نسب مدروسة",
          text: "كل هيئة تُصقَل حتى تبدو حتمية في الغرفة.",
        },
        {
          title: "فخامة هادئة",
          text: "لا شيء يصرخ. الحضور يأتي من الحرفة والضوء والاعتدال.",
        },
      ],
      featuredEyebrow: "مختارات",
      featuredTitle: "قطع من المجموعة الحالية",
      featuredLead: "تشكيلة من المقاعد والطاولات والإضاءة جاهزة للمعاينة في صالة العرض.",
      viewAll: "عرض المتجر كاملاً",
      spacesEyebrow: "المساحات",
      spacesTitle: "غرف مؤلَّفة لا مزيّنة",
      spacesLead:
        "نصمّم غرف المعيشة وقاعات الطعام وغرف النوم كأجواء كاملة.",
      spaces: [
        {
          title: "المعيشة",
          text: "أرائك ومقاعد وطاولات تدعو للبقاء.",
          image:
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80",
          alt: "غرفة معيشة أنيقة",
        },
        {
          title: "الطعام",
          text: "طاولات وإضاءة للّقاءات التي تدوم.",
          image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
          alt: "مساحة طعام بضوء دافئ",
        },
        {
          title: "الراحة",
          text: "غرف نوم شُكّلت للسكون والضوء الناعم.",
          image:
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1400&q=80",
          alt: "غرفة نوم هادئة",
        },
      ],
      ctaTitle: "زوروا صالة العرض",
      ctaText: "تجوّلوا في المجموعة، المسوا المواد، وتحدّثوا مع فريق التصميم.",
      ctaButton: "احجزوا زيارة خاصة",
    },
    about: {
      heroAlt: "مشغل ومواد العمل",
      heroTitle: "عن المشغل",
      heroLead:
        "تأسست ميزون أورا لتجلب انضباط الحرفة الأوروبية إلى منازل الخليج — بصبر ودقة وخصوصية.",
      storyEyebrow: "قصتنا",
      storyTitle: "نبنى حول الغرفة لا حول الكتالوج",
      storyP1:
        "بدأنا كاستوديو صغير في القوز، نصمّم أثاثاً لعملاء أرادوا قطعاً أقل وأفضل. اليوم تضم صالة عرضنا مجموعة مختارة إلى جانب طلبات مخصصة بالكامل.",
      storyP2:
        "يعمل المصممون والحرفيون والمُنهِّون تحت سقف واحد. هذا القرب هو كيف نبقي الجودة مرئية — من أول رسمة إلى آخر زيت على الخشب.",
      storyAlt: "تفاصيل تصميم داخلي بضوء طبيعي",
      valuesEyebrow: "المبادئ",
      valuesTitle: "كيف نعمل",
      values: [
        {
          title: "أقل وأرقى",
          text: "نرفض الإفراط. كل قطعة يجب أن تستحق مكانها في المنزل.",
        },
        {
          title: "حضور محلي",
          text: "صالة العرض والمشغل والرعاية اللاحقة في دبي — دائماً قريبون.",
        },
        {
          title: "تشطيب يدوم",
          text: "نُنهي لعقود من الاستخدام لا لموسم واحد من العرض.",
        },
      ],
      processEyebrow: "المسار",
      processTitle: "من الزيارة إلى التركيب",
      process: [
        {
          step: "01",
          title: "زيارة",
          text: "تجوّلوا في الصالة وناقشوا أسلوب حياتكم.",
        },
        {
          step: "02",
          title: "تأليف",
          text: "نقترح قطعاً أو خطة مخصصة لغرفكم.",
        },
        {
          step: "03",
          title: "حرفة",
          text: "تُنهى القطع المختارة وتُجهَّز للتسليم.",
        },
        {
          step: "04",
          title: "تركيب",
          text: "يركب فريقنا بعناية حتى يستقر كل خط في مكانه.",
        },
      ],
      galleryEyebrow: "المشغل",
      galleryTitle: "داخل ميزون أورا",
    },
    store: {
      heroAlt: "عرض مجموعة الأثاث",
      heroTitle: "المتجر",
      heroLead:
        "تصفّحوا مجموعتنا. هذا عرض للقطع — استفسروا لحجز معاينة أو طلب التفاصيل. الطلب عبر الإنترنت غير متاح.",
      all: "الكل",
      categories: {
        seating: "المقاعد",
        tables: "الطاولات",
        storage: "التخزين",
        lighting: "الإضاءة",
        bedroom: "غرف النوم",
      },
      materials: "المواد",
      enquire: "استفسر عن هذه القطعة",
      close: "إغلاق",
      note: "الأسعار المعروضة إرشادية للبداية. العرض النهائي يعتمد على المواد والتشطيب.",
      empty: "لا توجد قطع في هذه الفئة بعد.",
      viewDetails: "عرض التفاصيل",
      colors: "الألوان",
      sizes: "المقاسات",
    },
    contact: {
      heroAlt: "أفق دبي والعمارة",
      heroTitle: "تواصل معنا",
      heroLead: "اطلبوا زيارة لصالة العرض أو اسألوا عن قطعة من المجموعة.",
      eyebrow: "صالة العرض",
      title: "نحن هنا لإرشادكم",
      lead: "شاركوا قليلاً عن مشروعكم. يرد فريقنا خلال يوم عمل واحد.",
      visit: "الزيارة",
      address: "ميزون أورا\nمنطقة القوز الإبداعية\nدبي، الإمارات العربية المتحدة",
      email: "البريد",
      phone: "الهاتف",
      hours: "الساعات",
      hoursValue: "السبت – الخميس · 10:00 – 20:00",
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف",
      interest: "أنا مهتم بـ",
      options: {
        visit: "زيارة صالة العرض",
        piece: "قطعة محددة",
        bespoke: "طلب مخصص",
        interiors: "تصميم غرفة كاملة",
      },
      message: "الرسالة",
      send: "إرسال الرسالة",
      success: "شكراً لكم — استلمنا رسالتكم وسنرد قريباً.",
      mapAlt: "داخل معماري حديث",
      mapTitle: "منطقة القوز الإبداعية",
      mapCity: "دبي، الإمارات",
    },
  },
} as const;
