window.TIMP_DATA = {
  "events": [
    {
      "id": "ev1",
      "region": "north",
      "type": "Investment Forum",
      "title": "North Africa Investment Forum",
      "theme": "Industrialisation & value chains",
      "venue": "Cairo",
      "date": "2026-04-22",
      "time": "10:00",
      "status": "Published"
    },
    {
      "id": "ev2",
      "region": "ang_west",
      "type": "Roadshow",
      "title": "West Africa Trade Roadshow",
      "theme": "Trade facilitation & MSME financing",
      "venue": "Lagos",
      "date": "2026-05-18",
      "time": "09:30",
      "status": "Draft"
    },
    {
      "id": "ev3",
      "region": "east",
      "type": "Investment Forum",
      "title": "East Africa Investor Roundtable",
      "theme": "Agro-processing & logistics",
      "venue": "Nairobi",
      "date": "2026-06-10",
      "time": "11:00",
      "status": "Published"
    }
  ],
  "registrations": [
    {
      "id": "r1",
      "event_id": "ev1",
      "name": "Amina Diallo",
      "org": "Sahel Capital",
      "title": "Investment Director",
      "email": "amina@example.com",
      "state": "Approved"
    },
    {
      "id": "r2",
      "event_id": "ev1",
      "name": "Kwame Mensah",
      "org": "PanAfrica DFI",
      "title": "Principal",
      "email": "kwame@example.com",
      "state": "Pending"
    },
    {
      "id": "r3",
      "event_id": "ev3",
      "name": "Lina Haddad",
      "org": "BlueHarbor Fund",
      "title": "Partner",
      "email": "lina@example.com",
      "state": "Approved"
    }
  ],
  "deals": [
    {
      "id": "d1",
      "region": "east",
      "country": "Kenya",
      "sector": "Agri-processing",
      "ticket_usd_m": 45,
      "stage": "Screening",
      "warmth": "Warm",
      "owner": "Project Sponsor A",
      "summary": "Integrated agro-processing zone with cold-chain logistics.",
      "video": "Video pitch (demo)"
    },
    {
      "id": "d2",
      "region": "north",
      "country": "Egypt",
      "sector": "Manufacturing",
      "ticket_usd_m": 120,
      "stage": "Due Diligence",
      "warmth": "Hot",
      "owner": "Project Sponsor B",
      "summary": "Industrial park expansion with export-oriented tenants.",
      "video": "Video pitch (demo)"
    },
    {
      "id": "d3",
      "region": "ang_west",
      "country": "Nigeria",
      "sector": "Energy",
      "ticket_usd_m": 80,
      "stage": "Origination",
      "warmth": "Warm",
      "owner": "Project Sponsor C",
      "summary": "Gas-to-power midscale plant with PPP structure.",
      "video": "Video pitch (demo)"
    },
    {
      "id": "d4",
      "region": "southern",
      "country": "South Africa",
      "sector": "Logistics",
      "ticket_usd_m": 60,
      "stage": "Term Sheet",
      "warmth": "Hot",
      "owner": "Project Sponsor D",
      "summary": "Dry port + rail connectivity upgrade.",
      "video": "Video pitch (demo)"
    }
  ],
  "investors": [
    {
      "id": "i1",
      "name": "Sovereign Wealth Fund X",
      "focus": [
        "Manufacturing",
        "Energy"
      ],
      "ticket_min": 50,
      "ticket_max": 200,
      "region_pref": [
        "north",
        "ang_west"
      ]
    },
    {
      "id": "i2",
      "name": "Pension Fund Y",
      "focus": [
        "Logistics",
        "Agri-processing"
      ],
      "ticket_min": 20,
      "ticket_max": 80,
      "region_pref": [
        "east",
        "southern"
      ]
    },
    {
      "id": "i3",
      "name": "DFI Z",
      "focus": [
        "Energy",
        "Agri-processing",
        "Manufacturing"
      ],
      "ticket_min": 30,
      "ticket_max": 150,
      "region_pref": [
        "north",
        "east",
        "ang_west"
      ]
    }
  ],
  "meetings": [
    {
      "id": "m1",
      "deal_id": "d2",
      "investor_id": "i1",
      "datetime": "2026-04-22 14:00",
      "mode": "Physical",
      "status": "Scheduled"
    },
    {
      "id": "m2",
      "deal_id": "d1",
      "investor_id": "i2",
      "datetime": "2026-06-10 15:30",
      "mode": "Virtual",
      "status": "Requested"
    }
  ],
  "booths": [
    {
      "id": "b1",
      "region": "east",
      "org": "Trade Promotion Org \u2013 Kenya",
      "catalog": "Product catalog (demo)",
      "offers": "Exporter onboarding + market access"
    },
    {
      "id": "b2",
      "region": "ang_west",
      "org": "Exporter Hub \u2013 Nigeria",
      "catalog": "Catalog (demo)",
      "offers": "Processed foods + packaging"
    },
    {
      "id": "b3",
      "region": "north",
      "org": "Industrial Zone Authority \u2013 Egypt",
      "catalog": "Investment brochure (demo)",
      "offers": "Land, utilities, permits support"
    }
  ]
};
window.TIMP_I18N = {
  "en": {
    "timp": "Trade & Investment Management Portal (TIMP)",
    "subtitle": "Demo prototype • Public portal + Admin console • Region-segregated • Multilingual",
    "public": "Public Portal",
    "admin": "Admin Console",
    "region": "Region",
    "language": "Language",
    "sign_in": "Demo Sign-In",
    "events": "Events",
    "deal_room": "Deal Room",
    "opportunities": "Opportunities",
    "exhibition": "Virtual Exhibition",
    "archive": "Archive",
    "profile": "My Profile",
    "create_event": "Create / Edit Event",
    "registrations": "Registrations",
    "dealbook": "Deal Book",
    "matchmaking": "Matchmaking",
    "region_profiles": "Region Profiles",
    "users_rbac": "Users & RBAC",
    "analytics": "Analytics",
    "quick_demo": "Quick demo storyline",
    "cta_public": "Enter Public Portal",
    "cta_admin": "Enter Admin Console"
  },
  "fr": {
    "timp": "Portail de Gestion du Commerce & de l’Investissement (TIMP)",
    "subtitle": "Prototype de démo • Portail public + console admin • Par région • Multilingue",
    "public": "Portail Public",
    "admin": "Console Admin",
    "region": "Région",
    "language": "Langue",
    "sign_in": "Connexion Démo",
    "events": "Événements",
    "deal_room": "Salle des Deals",
    "opportunities": "Opportunités",
    "exhibition": "Exposition Virtuelle",
    "archive": "Archives",
    "profile": "Mon Profil",
    "create_event": "Créer / Modifier Événement",
    "registrations": "Inscriptions",
    "dealbook": "Deal Book",
    "matchmaking": "Mise en relation",
    "region_profiles": "Profils Régionaux",
    "users_rbac": "Utilisateurs & RBAC",
    "analytics": "Analytique",
    "quick_demo": "Scénario rapide",
    "cta_public": "Accéder au Portail Public",
    "cta_admin": "Accéder à la Console Admin"
  },
  "ar": {
    "timp": "بوابة إدارة التجارة والاستثمار (TIMP)",
    "subtitle": "نموذج عرض • بوابة عامة + لوحة إدارة • حسب الأقاليم • متعددة اللغات",
    "public": "البوابة العامة",
    "admin": "لوحة الإدارة",
    "region": "الإقليم",
    "language": "اللغة",
    "sign_in": "تسجيل دخول تجريبي",
    "events": "الفعاليات",
    "deal_room": "غرفة الصفقات",
    "opportunities": "الفرص",
    "exhibition": "المعرض الافتراضي",
    "archive": "الأرشيف",
    "profile": "ملفي",
    "create_event": "إنشاء/تعديل فعالية",
    "registrations": "التسجيلات",
    "dealbook": "كتاب الصفقات",
    "matchmaking": "المطابقة",
    "region_profiles": "ملفات الأقاليم",
    "users_rbac": "المستخدمون وRBAC",
    "analytics": "التحليلات",
    "quick_demo": "سيناريو عرض سريع",
    "cta_public": "الدخول للبوابة العامة",
    "cta_admin": "الدخول للوحة الإدارة"
  },
  "pt": {
    "timp": "Portal de Gestão de Comércio & Investimento (TIMP)",
    "subtitle": "Protótipo de demonstração • Portal público + consola admin • Por região • Multilíngue",
    "public": "Portal Público",
    "admin": "Consola Admin",
    "region": "Região",
    "language": "Idioma",
    "sign_in": "Login de Demonstração",
    "events": "Eventos",
    "deal_room": "Sala de Negócios",
    "opportunities": "Oportunidades",
    "exhibition": "Exposição Virtual",
    "archive": "Arquivo",
    "profile": "Meu Perfil",
    "create_event": "Criar / Editar Evento",
    "registrations": "Registos",
    "dealbook": "Deal Book",
    "matchmaking": "Matchmaking",
    "region_profiles": "Perfis Regionais",
    "users_rbac": "Utilizadores & RBAC",
    "analytics": "Analytics",
    "quick_demo": "Roteiro rápido",
    "cta_public": "Entrar no Portal Público",
    "cta_admin": "Entrar na Consola Admin"
  }
};
window.TIMP_REGIONS = [
  {
    "id": "north",
    "name": {
      "en": "North Africa",
      "fr": "Afrique du Nord",
      "ar": "شمال أفريقيا",
      "pt": "África do Norte"
    }
  },
  {
    "id": "east",
    "name": {
      "en": "East Africa",
      "fr": "Afrique de l'Est",
      "ar": "شرق أفريقيا",
      "pt": "África Oriental"
    }
  },
  {
    "id": "central",
    "name": {
      "en": "Central Africa",
      "fr": "Afrique Centrale",
      "ar": "وسط أفريقيا",
      "pt": "África Central"
    }
  },
  {
    "id": "southern",
    "name": {
      "en": "Southern Africa",
      "fr": "Afrique Australe",
      "ar": "الجنوب الأفريقي",
      "pt": "África Austral"
    }
  },
  {
    "id": "fr_west",
    "name": {
      "en": "Francophone West Africa",
      "fr": "Afrique de l'Ouest Francophone",
      "ar": "غرب أفريقيا الفرنكوفونية",
      "pt": "África Ocidental Francófona"
    }
  },
  {
    "id": "ang_west",
    "name": {
      "en": "Anglophone West Africa",
      "fr": "Afrique de l'Ouest Anglophone",
      "ar": "غرب أفريقيا الأنجلوفونية",
      "pt": "África Ocidental Anglófona"
    }
  },
  {
    "id": "caribbean",
    "name": {
      "en": "Caribbean Office",
      "fr": "Bureau Caraïbes",
      "ar": "مكتب الكاريبي",
      "pt": "Escritório das Caraíbas"
    }
  },
  {
    "id": "non_reg",
    "name": {
      "en": "Non-Regional",
      "fr": "Non-Régional",
      "ar": "غير إقليمي",
      "pt": "Não Regional"
    }
  }
];
