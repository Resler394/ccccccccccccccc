'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'FR' | 'EN' | 'AR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const TRANSLATIONS: Record<Language, Record<string, string>> = {
  FR: {
    // Nav
    nav_home: 'Accueil',
    nav_activities: 'Activités',
    nav_pricing: 'Tarifs',
    nav_services: 'Nos Services',
    nav_rules: 'Règlement Intérieur',
    nav_gallery: 'Galerie',
    nav_contact: 'Contact',
    nav_join: 'Rejoindre',
    nav_whatsapp: 'Contacter via WhatsApp',

    // Hero
    brand_sub: 'CLUB SPORTIF PROFESSIONNEL',
    hero_label: 'IRON FIT • CLUB SPORTIF PROFESSIONNEL',
    hero_h1_line1: 'VOTRE FORCE.',
    hero_h1_line2: 'VOTRE MENTAL.',
    hero_h1_line3: 'VOTRE RÉSULTAT.',
    hero_sub: 'Musculation • CrossFit • Workout • Kick Boxing • Judo',
    hero_hours: 'Accès 6j/7 • 06h00 – 22h00 • Khemis Miliana',
    hero_cta_pricing: 'Nos tarifs →',
    hero_cta_whatsapp: 'WhatsApp',
    hero_social_proof: '2 645+ abonnés sur Instagram',

    // About
    about_label: 'À PROPOS',
    about_title: 'UN CLUB SPORTIF PROFESSIONNEL.',
    about_desc: 'IRON FIT est un club sportif professionnel à Khemis Miliana dédié à la musculation, au CrossFit, au workout et aux sports de combat. Un environnement exigeant conçu pour bâtir la force, le mental et la performance.',

    // Features
    feat_1_title: 'ÉQUIPEMENT PROFESSIONNEL',
    feat_1_desc: 'Du matériel professionnel pensé pour accompagner votre entraînement.',
    feat_2_title: 'COACHS QUALIFIÉS',
    feat_2_desc: 'Un encadrement orienté progression et performance.',
    feat_3_title: 'MUSCULATION',
    feat_3_desc: 'Un environnement adapté au travail de force et au développement physique.',
    feat_4_title: 'CROSSFIT & WORKOUT',
    feat_4_desc: 'Des disciplines complémentaires pour varier et intensifier votre entraînement.',
    feat_5_title: 'SPORTS DE COMBAT',
    feat_5_desc: 'Kick Boxing et Judo au sein de l’univers sportif IRON FIT.',
    feat_6_title: 'DISCIPLINE',
    feat_6_desc: 'Un cadre sportif basé sur la régularité, le respect et l’engagement.',

    // Pricing
    pricing_heading: 'TARIFS GYM',
    pricing_sub: 'ENTRAÎNEZ-VOUS • PROGRESSEZ • DÉPASSEZ-VOUS',
    pricing_single_session: 'SÉANCE UNIQUE',
    pricing_single_price: '250 DA',
    pricing_single_desc: 'Accès libre à la salle pour une séance d’entraînement',
    pricing_debutant_title: 'OFFRE DÉBUTANT',
    pricing_debutant_sessions: '12 SÉANCES',
    pricing_debutant_price: '1700 DA',
    pricing_debutant_tag: 'IDÉAL POUR COMMENCER EN DOUCEUR !',
    pricing_standard_title: 'OFFRE STANDARD',
    pricing_standard_sessions: '20 SÉANCES',
    pricing_standard_price: '2000 DA',
    pricing_standard_tag: 'ÉQUILIBRE PARFAIT QUALITÉ & PRIX',
    pricing_standard_badge: '★ MEILLEUR CHOIX ★',
    pricing_vip_title: 'OFFRE VIP',
    pricing_vip_sessions: '28 SÉANCES',
    pricing_vip_price: '2400 DA',
    pricing_vip_tag: 'POUR LES PLUS ASSIDUS ET MOTIVÉS !',

    // Strip
    strip_equip: 'MATÉRIEL PROFESSIONNEL',
    strip_coaches: 'COACHS QUALIFIÉS',
    strip_showers: 'DOUCHES DISPONIBLES',
    strip_lockers: 'VESTIAIRES SÉCURISÉS',
    strip_hours: 'ACCÈS 6J/7 • 06H – 22H',
    slogan_banner: 'TA FORCE, TON MENTAL, TON RÉSULTAT !',

    // Rules
    rules_label: 'DISCIPLINE & RESPECT',
    rules_title: 'RÈGLEMENT INTÉRIEUR',
    rules_rule1_title: 'CHAUSSURES DE SPORT',
    rules_rule1_desc: 'Apportez des chaussures de sport propres, réservées à la salle.',
    rules_rule2_title: 'SERVIETTE PERSONNELLE',
    rules_rule2_desc: 'Chaque adhérent doit apporter sa propre serviette (usage de la serviette d’autrui interdit).',
    rules_rule3_title: 'CARTE / SHRAYHA D’ABONNEMENT',
    rules_rule3_desc: 'Ne pas oublier sa carte / puce d’abonnement.',
    rules_rule3_penalty: 'Après deux oublis de la carte d’abonnement, une pénalité de 200 DA s’applique.',
    rules_rule4_title: 'RANGEZ LE MATÉRIEL',
    rules_rule4_desc: 'Replacez le matériel d’entraînement à sa place après utilisation.',
    rules_rule5_title: 'RESPECT MUTUEL ABSOLU',
    rules_rule5_desc: 'Les insultes et propos irrespectueux sont strictement interdits. Toute infraction entraîne une expulsion directe et immédiate.',

    // Location
    location_title: 'NOTRE SALLE',
    location_city: 'Khemis Miliana',
    location_category: 'Sport et loisirs',

    // CTA
    cta_title: 'REJOIGNEZ IRON FIT',
    cta_sub: 'ENTRAÎNEZ-VOUS • PROGRESSEZ • DÉPASSEZ-VOUS',
    cta_btn_join: 'Rejoindre',
    cta_btn_whatsapp: 'WhatsApp',

    // FAQ Section
    faq_badge_label: 'QUESTIONS FRÉQUENTES',
    faq_title: 'TOUT CE QUE VOUS DEVEZ SAVOIR SUR IRON FIT',
    faq_subtitle: 'Abonnements, séances d’essai, règlement intérieur et vie du club à Khemis Miliana.',
    faq_tab_all: 'Toutes les questions',
    faq_tab_membership: 'Abonnements & Tarifs',
    faq_tab_trial: 'Séance Unique & Essai',
    faq_tab_rules: 'Règlement & Discipline',
    faq_tab_facilities: 'Installations & Horaires',
    faq_search_placeholder: 'Rechercher une question (ex: serviette, 250 DA, shrayha, horaires)...',
    faq_expand_all: 'Tout déplier',
    faq_collapse_all: 'Tout replier',
    faq_no_results: 'Aucune question trouvée pour votre recherche.',
    faq_reset_search: 'Réinitialiser la recherche',
    faq_contact_prompt: 'Une question spécifique non listée ici ?',
    faq_contact_desc: 'Notre équipe est à votre disposition 6j/7 pour vous renseigner et vous accueillir au club.',
    faq_contact_whatsapp: 'Poser une question sur WhatsApp',
    faq_view_pricing: 'Consulter nos tarifs détaillés',
    faq_view_rules: 'Consulter le règlement complet',
  },

  AR: {
    // Nav
    nav_home: 'الرئيسية',
    nav_activities: 'الأنشطة',
    nav_pricing: 'الأسعار',
    nav_services: 'خدماتنا',
    nav_rules: 'القانون الداخلي',
    nav_gallery: 'معرض الصور',
    nav_contact: 'اتصل بنا',
    nav_join: 'انضم إلينا',
    nav_whatsapp: 'تواصل عبر واتساب',

    // Hero
    brand_sub: 'نادي رياضي محترف',
    hero_label: 'IRON FIT • نادي رياضي محترف',
    hero_h1_line1: 'قوتك.',
    hero_h1_line2: 'عزيمتك.',
    hero_h1_line3: 'نتيجتك.',
    hero_sub: 'كمال الأجسام • كروس فيت • وورك آوت • كيك بوكسينغ • جودو',
    hero_hours: 'مفتوح 6 أيام/7 • من 06:00 إلى 22:00 • خميس مليانة',
    hero_cta_pricing: 'الأسعار والاشتراكات ←',
    hero_cta_whatsapp: 'واتساب',
    hero_social_proof: '2,645+ متابع على إنستغرام',

    // About
    about_label: 'عن النادي',
    about_title: 'نادي رياضي محترف.',
    about_desc: 'IRON FIT هو نادي رياضي محترف في خميس مليانة مخصص لرياضات كمال الأجسام، الكروس فيت، الوورك آوت، والرياضات القتالية. بيئة رياضية محترفة مبنية على القوة، الانضباط والتطور المستمر.',

    // Features
    feat_1_title: 'عتاد محترف',
    feat_1_desc: 'أجهزة ومعدات رياضية احترافية مخصصة لمرافقة تطوركم الرياضي.',
    feat_2_title: 'مدربون مؤهلون',
    feat_2_desc: 'إشراف وتأطير تدريبي يهدف إلى التطور وتحقيق الأداء العالي.',
    feat_3_title: 'كمال الأجسام',
    feat_3_desc: 'فضاء متكامل لبناء العضلات وتطوير القوة البدنية بأعلى المعايير.',
    feat_4_title: 'كروس فيت ووورك آوت',
    feat_4_desc: 'تمارين مكثفة ومتنوعة لرفع اللياقة والتحمل البدني.',
    feat_5_title: 'رياضات قتالية',
    feat_5_desc: 'كيك بوكسينغ وجودو ضمن فضاءات النادي الرياضية.',
    feat_6_title: 'الانضباط والالتزام',
    feat_6_desc: 'إطار رياضي محترم مبني على الاستمرارية، الاحترام والانضباط.',

    // Pricing
    pricing_heading: 'أسعار القاعة',
    pricing_sub: 'تدرّب • تطوّر • تجاوز حدودك',
    pricing_single_session: 'حصة فردية',
    pricing_single_price: '250 دج',
    pricing_single_desc: 'دخول حر للقاعة لحصة تدريبية واحدة',
    pricing_debutant_title: 'عرض المبتدئين',
    pricing_debutant_sessions: '12 حصة',
    pricing_debutant_price: '1700 دج',
    pricing_debutant_tag: 'مثالي للبداية بكل سلاسة!',
    pricing_standard_title: 'العرض القياسي',
    pricing_standard_sessions: '20 حصة',
    pricing_standard_price: '2000 دج',
    pricing_standard_tag: 'توازن مثالي بين الجودة والسعر',
    pricing_standard_badge: '★ الخيار الأفضل ★',
    pricing_vip_title: 'عرض VIP',
    pricing_vip_sessions: '28 حصة',
    pricing_vip_price: '2400 دج',
    pricing_vip_tag: 'للأكثر التزاماً وحماساً!',

    // Strip
    strip_equip: 'عتاد محترف',
    strip_coaches: 'مدربون مؤهلون',
    strip_showers: 'حمامات متوفرة',
    strip_lockers: 'غرف تبديل مؤمنة',
    strip_hours: 'مفتوح 6 أيام/7 • 06:00 – 22:00',
    slogan_banner: 'قوتك، عزيمتك، نتيجتك!',

    // Rules
    rules_label: 'الانضباط والقانون',
    rules_title: 'القانون الداخلي للقاعة',
    rules_rule1_title: 'حذاء رياضي نظيف',
    rules_rule1_desc: 'إحضار حذاء رياضي نظيف خاص بالقاعة.',
    rules_rule2_title: 'منشفة شخصية',
    rules_rule2_desc: 'إحضار منشفة شخصية (يمنع استخدام منشفة المشتركين).',
    rules_rule3_title: 'شريحة الاشتراك',
    rules_rule3_desc: 'عدم نسيان شريحة الاشتراك.',
    rules_rule3_penalty: 'ملاحظة: نسيان الشريحة مرتين يلزم عليك غرامة مالية بقيمة 200 دج.',
    rules_rule4_title: 'إرجاع المستلزمات',
    rules_rule4_desc: 'إرجاع مستلزمات التدريب إلى أماكنها بعد الاستعمال.',
    rules_rule5_title: 'الاحترام المتبادل',
    rules_rule5_desc: 'يمنع السب والشتم تماماً. مخالفة هذا البند تؤدي إلى الطرد المباشر.',

    // Location
    location_title: 'مقر القاعة',
    location_city: 'خميس مليانة',
    location_category: 'رياضة وترفيه',

    // CTA
    cta_title: 'انضم إلى IRON FIT',
    cta_sub: 'تدرّب • تطوّر • تجاوز حدودك',
    cta_btn_join: 'انضم الآن',
    cta_btn_whatsapp: 'واتساب',

    // FAQ Section
    faq_badge_label: 'الأسئلة الشائعة',
    faq_title: 'كل ما تحتاج معرفته عن نادي IRON FIT',
    faq_subtitle: 'الاشتراكات، الحصص الفردية، القانون الداخلي ومعلومات النادي في خميس مليانة.',
    faq_tab_all: 'جميع الأسئلة',
    faq_tab_membership: 'الاشتراكات والأسعار',
    faq_tab_trial: 'الحصة الفردية والتجربة',
    faq_tab_rules: 'القانون والانضباط',
    faq_tab_facilities: 'المرافق والمواعيد',
    faq_search_placeholder: 'ابحث عن سؤال (مثال: منشفة، 250 دج، الشريحة، المواعيد)...',
    faq_expand_all: 'فتح الكل',
    faq_collapse_all: 'طي الكل',
    faq_no_results: 'لم يتم العثور على أي سؤال مطابق لبحثك.',
    faq_reset_search: 'إعادة ضبط البحث',
    faq_contact_prompt: 'هل لديك استفسار آخر غير موجود هنا؟',
    faq_contact_desc: 'فريقنا متاح 6 أيام/7 للإجابة على جميع تساؤلاتك واستقبالك في القاعة.',
    faq_contact_whatsapp: 'طرح سؤال عبر واتساب',
    faq_view_pricing: 'عرض قائمة الأسعار',
    faq_view_rules: 'عرض القانون الداخلي',
  },

  EN: {
    // Nav
    nav_home: 'Home',
    nav_activities: 'Activities',
    nav_pricing: 'Pricing',
    nav_services: 'Our Services',
    nav_rules: 'Rules',
    nav_gallery: 'Gallery',
    nav_contact: 'Contact',
    nav_join: 'Join Now',
    nav_whatsapp: 'Contact via WhatsApp',

    // Hero
    brand_sub: 'PROFESSIONAL SPORTS CLUB',
    hero_label: 'IRON FIT • PROFESSIONAL SPORTS CLUB',
    hero_h1_line1: 'YOUR STRENGTH.',
    hero_h1_line2: 'YOUR MINDSET.',
    hero_h1_line3: 'YOUR RESULTS.',
    hero_sub: 'Bodybuilding • CrossFit • Workout • Kick Boxing • Judo',
    hero_hours: 'Access 6 Days/Week • 06:00 – 22:00 • Khemis Miliana',
    hero_cta_pricing: 'Our Rates →',
    hero_cta_whatsapp: 'WhatsApp',
    hero_social_proof: '2,645+ Instagram Followers',

    // About
    about_label: 'ABOUT',
    about_title: 'A PROFESSIONAL SPORTS CLUB.',
    about_desc: 'IRON FIT is a professional sports club in Khemis Miliana dedicated to bodybuilding, CrossFit, workout, and combat sports. Built for discipline and peak physical performance.',

    // Features
    feat_1_title: 'PROFESSIONAL EQUIPMENT',
    feat_1_desc: 'Commercial-grade equipment engineered for progressive heavy training.',
    feat_2_title: 'QUALIFIED COACHES',
    feat_2_desc: 'Dedicated coaching oriented toward continuous progression.',
    feat_3_title: 'BODYBUILDING',
    feat_3_desc: 'A dedicated strength floor for muscle development and power.',
    feat_4_title: 'CROSSFIT & WORKOUT',
    feat_4_desc: 'Dynamic conditioning to intensify and elevate your stamina.',
    feat_5_title: 'COMBAT SPORTS',
    feat_5_desc: 'Kick Boxing and Judo within the IRON FIT sporting arena.',
    feat_6_title: 'DISCIPLINE',
    feat_6_desc: 'A rigorous sporting atmosphere rooted in consistency and mutual respect.',

    // Pricing
    pricing_heading: 'GYM RATES',
    pricing_sub: 'TRAIN • PROGRESS • EXCEED YOUR LIMITS',
    pricing_single_session: 'SINGLE SESSION',
    pricing_single_price: '250 DA',
    pricing_single_desc: 'Full day access to the training facility for a single session',
    pricing_debutant_title: 'BEGINNER OFFER',
    pricing_debutant_sessions: '12 SESSIONS',
    pricing_debutant_price: '1700 DA',
    pricing_debutant_tag: 'IDEAL TO START SMOOTHLY & BUILD HABIT!',
    pricing_standard_title: 'STANDARD OFFER',
    pricing_standard_sessions: '20 SESSIONS',
    pricing_standard_price: '2000 DA',
    pricing_standard_tag: 'PERFECT BALANCE OF QUALITY & VALUE',
    pricing_standard_badge: '★ BEST CHOICE ★',
    pricing_vip_title: 'VIP OFFER',
    pricing_vip_sessions: '28 SESSIONS',
    pricing_vip_price: '2400 DA',
    pricing_vip_tag: 'FOR THE MOST DEDICATED ATHLETES!',

    // Strip
    strip_equip: 'PROFESSIONAL EQUIPMENT',
    strip_coaches: 'QUALIFIED COACHES',
    strip_showers: 'SHOWERS AVAILABLE',
    strip_lockers: 'SECURE CHANGING ROOMS',
    strip_hours: 'ACCESS 6 DAYS/WEEK • 06:00 – 22:00',
    slogan_banner: 'YOUR STRENGTH, YOUR MINDSET, YOUR RESULTS!',

    // Rules
    rules_label: 'DISCIPLINE & RESPECT',
    rules_title: 'INTERNAL FACILITY RULES',
    rules_rule1_title: 'CLEAN GYM SHOES',
    rules_rule1_desc: 'Bring clean sports shoes reserved strictly for the gym floor.',
    rules_rule2_title: 'PERSONAL TOWEL',
    rules_rule2_desc: 'Every member must bring their own personal towel (using another member’s towel is prohibited).',
    rules_rule3_title: 'MEMBERSHIP CARD / RFID CHIP',
    rules_rule3_desc: 'Do not forget your subscription card / RFID badge.',
    rules_rule3_penalty: 'Notice: Forgetting your badge twice incurs a 200 DA administrative fine.',
    rules_rule4_title: 'RETURN EQUIPMENT',
    rules_rule4_desc: 'Return all training equipment to its designated rack after each exercise.',
    rules_rule5_title: 'ZERO TOLERANCE FOR DISRESPECT',
    rules_rule5_desc: 'Insults and abusive language are strictly prohibited. Any violation results in immediate expulsion.',

    // Location
    location_title: 'OUR LOCATION',
    location_city: 'Khemis Miliana',
    location_category: 'Sport and Recreation',

    // CTA
    cta_title: 'JOIN IRON FIT',
    cta_sub: 'TRAIN • PROGRESS • EXCEED YOUR LIMITS',
    cta_btn_join: 'Join Now',
    cta_btn_whatsapp: 'WhatsApp',

    // FAQ Section
    faq_badge_label: 'FREQUENTLY ASKED QUESTIONS',
    faq_title: 'EVERYTHING YOU NEED TO KNOW ABOUT IRON FIT',
    faq_subtitle: 'Memberships, single passes, gym rules and athlete life in Khemis Miliana.',
    faq_tab_all: 'All Questions',
    faq_tab_membership: 'Memberships & Rates',
    faq_tab_trial: 'Single Session & Trial',
    faq_tab_rules: 'Rules & Discipline',
    faq_tab_facilities: 'Facilities & Hours',
    faq_search_placeholder: 'Search questions (e.g. towel, 250 DA, badge, hours)...',
    faq_expand_all: 'Expand All',
    faq_collapse_all: 'Collapse All',
    faq_no_results: 'No questions found matching your search.',
    faq_reset_search: 'Reset search filter',
    faq_contact_prompt: 'Have a specific question not listed here?',
    faq_contact_desc: 'Our staff is available 6 days a week to guide you and answer all inquiries.',
    faq_contact_whatsapp: 'Ask a question on WhatsApp',
    faq_view_pricing: 'View full pricing details',
    faq_view_rules: 'Read internal rules',
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'FR',
  setLanguage: () => {},
  isRTL: false,
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('ironfit_lang') as Language;
        if (saved && (saved === 'FR' || saved === 'EN' || saved === 'AR')) {
          return saved;
        }
      } catch {
        // ignore
      }
    }
    return 'FR';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('ironfit_lang', lang);
      } catch {
        // ignore
      }
    }
  };

  useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
    document.documentElement.dir = language === 'AR' ? 'rtl' : 'ltr';
  }, [language]);

  const isRTL = language === 'AR';

  const t = (key: string): string => {
    return TRANSLATIONS[language]?.[key] || TRANSLATIONS.FR[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
