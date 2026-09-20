'use client';

import React, { useState } from 'react';
import {
  Salad,
  Apple,
  Droplets,
  Flame,
  Sparkles,
  CheckCircle2,
  Calendar,
  ChevronRight,
  Info,
  Lightbulb,
} from 'lucide-react';
import { useLanguage } from '@/lib/languageContext';

interface NutritionTip {
  id: string;
  goalKey: 'hypertrophy' | 'fatloss' | 'hydration' | 'preworkout';
  icon: 'Apple' | 'Salad' | 'Droplets' | 'Flame';
  badgeColor: string;
  titleFr: string;
  titleAr: string;
  titleEn: string;
  goalFr: string;
  goalAr: string;
  goalEn: string;
  summaryFr: string;
  summaryAr: string;
  summaryEn: string;
  actionableStepsFr: string[];
  actionableStepsAr: string[];
  actionableStepsEn: string[];
  localFoodTipFr: string;
  localFoodTipAr: string;
  localFoodTipEn: string;
  keyStatFr: string;
  keyStatAr: string;
  keyStatEn: string;
}

const NUTRITION_TIPS: NutritionTip[] = [
  {
    id: 'post-workout-protein',
    goalKey: 'hypertrophy',
    icon: 'Apple',
    badgeColor: '#ff6000',
    titleFr: 'Protéines post-effort : optimiser la reconstruction musculaire',
    titleAr: 'البروتين بعد التمرين: تحفيز البناء والاسترجاع العضلي',
    titleEn: 'Post-Workout Protein: Maximizing Muscle Repair',
    goalFr: 'Prise de masse & Récupération',
    goalAr: 'زيادة الكتلة العضلية والاسترجاع',
    goalEn: 'Muscle Hypertrophy & Recovery',
    summaryFr: 'Dans les 45 à 60 minutes qui suivent votre séance chez IRON FIT, vos fibres musculaires ont un besoin critique d’acides aminés pour réparer les microlésions et relancer la synthèse protéique.',
    summaryAr: 'خلال 45 إلى 60 دقيقة بعد حصتك في IRON FIT، تحتاج أليافك العضلية بشدة للأحماض الأمينية لترميم التمزقات الدقيقة وبدء البناء العضلي الفعلي.',
    summaryEn: 'Within 45 to 60 minutes following your workout at IRON FIT, your muscle fibers require essential amino acids to repair micro-tears and stimulate protein synthesis.',
    actionableStepsFr: [
      'Visez 25g à 35g de protéines de haute valeur biologique.',
      'Associez avec un glucide rapide (dattes, banane) pour recharger le glycogène.',
      'Hydratez-vous avec au moins 500 ml d’eau fraîche.',
    ],
    actionableStepsAr: [
      'استهدف ما بين 25 إلى 35 غراماً من البروتين عالي الجودة.',
      'ادمج مع مصدر كربوهيدرات سريع (تمر، موزة) لتعويض مخزون الجليكوجين.',
      'اشرب نصف لتر على الأقل من الماء النقي فور انتهاء الحصة.',
    ],
    actionableStepsEn: [
      'Aim for 25g to 35g of high-biological-value protein.',
      'Pair with fast-digesting carbs (dates, banana) to replenish glycogen stores.',
      'Drink at least 500 ml of clean water immediately post-workout.',
    ],
    localFoodTipFr: 'Exemple local : 3 blancs d’œufs + 1 œuf entier avec 3 dattes de Biskra ou un verre de leben naturel.',
    localFoodTipAr: 'اقتراح محلي: 3 بياض بيض + بيضة كاملة مع 3 حبات تمر بسكرة أو كأس لبن طبيعي طازج.',
    localFoodTipEn: 'Local snack: 3 egg whites + 1 whole egg with 3 Biskra dates or fresh natural curd milk.',
    keyStatFr: '1.6 à 2.0g de protéines / kg / jour',
    keyStatAr: '1.6 إلى 2.0غ بروتين / كغ / يومياً',
    keyStatEn: '1.6 to 2.0g protein / kg / day',
  },
  {
    id: 'intra-hydration',
    goalKey: 'hydration',
    icon: 'Droplets',
    badgeColor: '#3b82f6',
    titleFr: 'Hydratation & Électrolytes pendant les séances d’intensité',
    titleAr: 'الترطيب والأملاح المعدنية خلال الحصص المكثفة',
    titleEn: 'Hydration & Electrolytes During High-Intensity Sessions',
    goalFr: 'Endurance & Prévention des Crampes',
    goalAr: 'القدرة على التحمل والوقاية من التشنجات',
    goalEn: 'Endurance & Cramp Prevention',
    summaryFr: 'Une baisse de seulement 2% du niveau d’hydratation entraîne une perte de 15% de force maximale et d’explosivité lors de vos séries de squat ou sur le tatami.',
    summaryAr: 'نقص 2% فقط من نسبة ترطيب الجسم يؤدي لانخفاض 15% من القوة العضلية والسرعة في تمارين الحديد أو على بساط القتال.',
    summaryEn: 'A drop of merely 2% in body hydration reduces peak strength and explosiveness by up to 15% during squats or combat drills.',
    actionableStepsFr: [
      'Buvez 150 à 200 ml toutes les 15 minutes d’entraînement.',
      'Ajoutez une pincée de sel marin et un filet de citron à votre gourde.',
      'Évitez les boissons gazeuses sucrées avant l’entraînement.',
    ],
    actionableStepsAr: [
      'اشرب من 150 إلى 200 مل كل 15 دقيقة أثناء التدريب.',
      'أضف رشة خفيفة من الملح الطبيعي مع قطرات ليمون إلى قارورة الماء.',
      'تجنب المشروبات الغازية السكرية تماماً قبل الحصة.',
    ],
    actionableStepsEn: [
      'Sip 150 to 200 ml every 15 minutes of training.',
      'Add a small pinch of natural sea salt and lemon juice to your water bottle.',
      'Avoid sugary carbonated sodas prior to your workout.',
    ],
    localFoodTipFr: 'Astuce coach : Préparez une gourde d’eau minérale fraîche avec jus de citron pressé et une cuillère de miel pur.',
    localFoodTipAr: 'نصيحة المدرب: جهز قارورة ماء معدني مع عصير نصف ليمونة وملعقة عسل طبيعي لطاقة مستمرة.',
    localFoodTipEn: 'Coach tip: Mix fresh water with half a squeezed lemon and a spoon of pure honey.',
    keyStatFr: 'Minimum 2.5 à 3 Litres / jour',
    keyStatAr: '2.5 إلى 3 لترات ماء يومياً على الأقل',
    keyStatEn: 'Minimum 2.5 to 3 Liters / day',
  },
  {
    id: 'pre-workout-fuel',
    goalKey: 'preworkout',
    icon: 'Flame',
    badgeColor: '#ef4444',
    titleFr: 'Le bon carburant avant une séance lourde ou CrossFit',
    titleAr: 'الوجبة المناسبة قبل التمارين الشاقة أو الكروس فيت',
    titleEn: 'Smart Pre-Workout Fuel for Heavy Lifts & CrossFit',
    goalFr: 'Énergie Maximale & Concentration',
    goalAr: 'أقصى طاقة وتركيز ذهني',
    goalEn: 'Peak Energy & Mental Focus',
    summaryFr: 'S’entraîner le ventre vide ou trop lourdement chargé nuit directement à vos performances. Consommez un repas digeste 90 minutes avant ou une collation légère 30 minutes avant.',
    summaryAr: 'التدريب ببطن فارغة تماماً أو بمعدة ممتلئة بأطعمة دسمة يقلل من أدائك. تناول وجبة خفيفة قبل 90 دقيقة أو وجبة سريعة قبل 30 دقيقة.',
    summaryEn: 'Training completely fasted or with heavy greasy foods impairs your output. Consume an easily digestible meal 90 minutes prior or a quick snack 30 minutes before.',
    actionableStepsFr: [
      'Privilégiez les glucides à index glycémique modéré (avoine, riz complet).',
      'Consommez 1 café noir sans sucre 30 min avant pour le boost de vigilance.',
      'Bannissez les fritures et sauces grasses avant la séance.',
    ],
    actionableStepsAr: [
      'فضّل الكربوهيدرات ذات الامتصاص المعتدل (الشوفان، الأرز).',
      'تناول فنجان قهوة سوداء بدون سكر قبل 30 دقيقة لزيادة التركيز.',
      'ابتعد عن المقليات والأطعمة الدسمة قبل التوجه للقاعة.',
    ],
    actionableStepsEn: [
      'Favor complex carbs with moderate glycemic index (oats, whole rice).',
      'Take 1 black unsweetened coffee 30 mins prior for alertness.',
      'Avoid fried and heavy oily dishes completely before the gym.',
    ],
    localFoodTipFr: 'Collation idéale : Bol de flocons d’avoine avec du lait tiède, une poignée d’amandes et quelques dattes.',
    localFoodTipAr: 'وجبة مثالية: وعاء شوفان مع حليب دافئ، حفنة لوز محلي و3 حبات تمر.',
    localFoodTipEn: 'Ideal snack: Warm oatmeal bowl with milk, a handful of almonds, and chopped dates.',
    keyStatFr: 'Consommation 60–90 min avant la barre',
    keyStatAr: 'التناول قبل 60 إلى 90 دقيقة من التمرين',
    keyStatEn: 'Eat 60–90 minutes before your workout',
  },
  {
    id: 'fatloss-deficit',
    goalKey: 'fatloss',
    icon: 'Salad',
    badgeColor: '#10b981',
    titleFr: 'Sèche & Définition : maintenir la masse maigre en déficit',
    titleAr: 'التنشيف والتحديد: الحفاظ على العضلات أثناء حرق الدهون',
    titleEn: 'Cutting & Leaning Out: Preserving Muscle in a Deficit',
    goalFr: 'Sèche & Perte de Masse Grasse',
    goalAr: 'حرق الدهون وإبراز العضلات',
    goalEn: 'Fat Loss & Muscle Definition',
    summaryFr: 'Pour perdre du gras sans perdre de muscle, créez un léger déficit calorique (300 à 400 kcal) tout en maintenant un apport en protéines élevé et des séances intenses de musculation.',
    summaryAr: 'لحرق الدهون مع الحفاظ على الكتلة العضلية، اعتمد عجزاً معتدلاً في السعرات (300 إلى 400 سعرة) مع إبقاء نسبة البروتين عالية والاستمرار في رفع الأوزان.',
    summaryEn: 'To shed body fat without sacrificing lean muscle, maintain a moderate deficit (300–400 kcal) paired with elevated protein and heavy compound resistance training.',
    actionableStepsFr: [
      'Remplissez la moitié de votre assiette de légumes verts cuits ou crus.',
      'Ne supprimez pas totalement les glucides : gardez-les autour de l’entraînement.',
      'Dormez 7 à 8 heures par nuit pour réguler le cortisol et l’appétit.',
    ],
    actionableStepsAr: [
      'املأ نصف صحنك بالخضار الخضراء الطازجة أو المطهوة على البخار.',
      'لا تقطع الكربوهيدرات كلياً: ركز استهلاكها قبل وبعد التمارين فقط.',
      'نم 7 إلى 8 ساعات يومياً لتنظيم هرمونات الشبع والتوتر.',
    ],
    actionableStepsEn: [
      'Fill half your plate with raw or steamed fresh greens and vegetables.',
      'Do not cut carbs completely: time them around your training window.',
      'Sleep 7 to 8 hours nightly to balance cortisol and appetite hormones.',
    ],
    localFoodTipFr: 'Plat recommandé : Blanc de poulet rôti au four, salade verte à l’huile d’olive vierge et patates douces au four.',
    localFoodTipAr: 'وجبة مقترحة: صدر دجاج مشوي مع سلطة خضراء بزيت الزيتون وقليل من البطاطا الحلوة.',
    localFoodTipEn: 'Recommended meal: Oven-grilled chicken breast, fresh green salad with virgin olive oil, and sweet potato.',
    keyStatFr: 'Déficit contrôlé : -300 à -400 kcal/jour',
    keyStatAr: 'عجز معتدل: -300 إلى -400 سعرة حرارية/يوم',
    keyStatEn: 'Controlled deficit: -300 to -400 kcal/day',
  },
];

export default function WeeklyNutritionTip() {
  const { language, isRTL } = useLanguage();
  const [selectedTipIndex, setSelectedTipIndex] = useState(0);

  const activeTip = NUTRITION_TIPS[selectedTipIndex];

  const getTitle = (t: NutritionTip) => {
    if (language === 'AR') return t.titleAr;
    if (language === 'EN') return t.titleEn;
    return t.titleFr;
  };

  const getGoal = (t: NutritionTip) => {
    if (language === 'AR') return t.goalAr;
    if (language === 'EN') return t.goalEn;
    return t.goalFr;
  };

  const getSummary = (t: NutritionTip) => {
    if (language === 'AR') return t.summaryAr;
    if (language === 'EN') return t.summaryEn;
    return t.summaryFr;
  };

  const getSteps = (t: NutritionTip) => {
    if (language === 'AR') return t.actionableStepsAr;
    if (language === 'EN') return t.actionableStepsEn;
    return t.actionableStepsFr;
  };

  const getLocalTip = (t: NutritionTip) => {
    if (language === 'AR') return t.localFoodTipAr;
    if (language === 'EN') return t.localFoodTipEn;
    return t.localFoodTipFr;
  };

  const getKeyStat = (t: NutritionTip) => {
    if (language === 'AR') return t.keyStatAr;
    if (language === 'EN') return t.keyStatEn;
    return t.keyStatFr;
  };

  const renderIcon = (iconName: string, className = 'w-5 h-5') => {
    switch (iconName) {
      case 'Apple':
        return <Apple className={className} />;
      case 'Droplets':
        return <Droplets className={className} />;
      case 'Flame':
        return <Flame className={className} />;
      case 'Salad':
        return <Salad className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  // Label translations
  const sectionLabel =
    language === 'AR'
      ? 'التغذية الرياضية ونمط الحياة'
      : language === 'EN'
      ? 'SPORTS NUTRITION & LIFESTYLE'
      : 'NUTRITION SPORTIVE & HYGIÈNE DE VIE';

  const sectionHeading =
    language === 'AR'
      ? 'نصيحة الأسبوع الغذائية'
      : language === 'EN'
      ? 'WEEKLY NUTRITION TIP'
      : 'CONSEIL NUTRITION DE LA SEMAINE';

  const sectionSub =
    language === 'AR'
      ? 'تغذيتك تشكل 70% من نتائجك البدنية. نصائح أسبوعية معتمدة من طاقم تدريب IRON FIT لمساعدتك على بلوغ هدفك.'
      : language === 'EN'
      ? 'Your nutrition dictates 70% of your results. Actionable weekly advice curated by IRON FIT coaches to accelerate your goals.'
      : 'L’entraînement stimule, la nutrition construit. Découvrez chaque semaine les recommandations de nos coachs IRON FIT pour maximiser vos résultats.';

  const coachSnackLabel =
    language === 'AR'
      ? 'اقتراح الوجبة من المدرب'
      : language === 'EN'
      ? 'Coach Meal Suggestion'
      : 'Idée Collation du Coach';

  const targetGoalLabel =
    language === 'AR'
      ? 'الهدف التدريبي :'
      : language === 'EN'
      ? 'Fitness Goal:'
      : 'Objectif Fitness :';

  const weekBadge =
    language === 'AR'
      ? 'نصيحة هذا الأسبوع'
      : language === 'EN'
      ? 'Featured This Week'
      : 'En vedette cette semaine';

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-14">
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-neutral-200/90 shadow-2xs relative overflow-hidden">
        {/* Subtle accent corner glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff6000]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-neutral-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6000]/10 border border-[#ff6000]/20 text-[#ff6000] text-[11px] font-black uppercase tracking-wider mb-2">
              <Salad className="w-3.5 h-3.5 text-[#ff6000]" />
              <span>{sectionLabel}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#111111] tracking-tight">
              {sectionHeading}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl mt-1 leading-relaxed">
              {sectionSub}
            </p>
          </div>

          {/* Goal Selector Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 shrink-0">
            {NUTRITION_TIPS.map((tip, idx) => {
              const isSelected = selectedTipIndex === idx;
              return (
                <button
                  key={tip.id}
                  type="button"
                  onClick={() => setSelectedTipIndex(idx)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#111111] text-white shadow-xs'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200/70 border border-transparent'
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: tip.badgeColor }}
                  />
                  <span>{getGoal(tip)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Weekly Tip Card */}
        <div className="pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left side: Main Tip Card */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
              <div>
                {/* Meta badges */}
                <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-[11px] font-black uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{weekBadge}</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-500">
                    <span className="text-neutral-400">{targetGoalLabel}</span>
                    <span
                      className="font-black px-2 py-0.5 rounded-md text-[11px] uppercase tracking-wide"
                      style={{
                        backgroundColor: `${activeTip.badgeColor}15`,
                        color: activeTip.badgeColor,
                      }}
                    >
                      {getGoal(activeTip)}
                    </span>
                  </div>
                </div>

                {/* Title with icon */}
                <div className="flex items-start gap-4 mb-3">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 mt-1 shadow-2xs"
                    style={{
                      backgroundColor: `${activeTip.badgeColor}18`,
                      color: activeTip.badgeColor,
                      border: `1px solid ${activeTip.badgeColor}35`,
                    }}
                  >
                    {renderIcon(activeTip.icon, 'w-6 h-6')}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#111111] leading-tight">
                      {getTitle(activeTip)}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                      {getSummary(activeTip)}
                    </p>
                  </div>
                </div>

                {/* Actionable Rules / Checkpoints */}
                <div className="space-y-2.5 pt-2 pl-0 sm:pl-16">
                  {getSteps(activeTip).map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: activeTip.badgeColor }}
                      />
                      <span className="leading-relaxed font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coach Snack Suggestion */}
              <div className="bg-neutral-50 rounded-2xl p-4 sm:p-5 border border-neutral-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#ff6000]/10 flex items-center justify-center shrink-0 text-[#ff6000] mt-0.5">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-neutral-500 block">
                      {coachSnackLabel}
                    </span>
                    <p className="text-xs font-semibold text-neutral-800 leading-snug mt-0.5">
                      {getLocalTip(activeTip)}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 self-start sm:self-auto bg-white px-3 py-2 rounded-xl border border-neutral-200 text-center">
                  <span className="text-[10px] font-bold text-neutral-400 block uppercase tracking-wider">
                    Repère Clé
                  </span>
                  <span className="text-xs font-black text-[#ff6000] block mt-0.5 whitespace-nowrap">
                    {getKeyStat(activeTip)}
                  </span>
                </div>
              </div>
            </div>

            {/* Right side: 3 quick mini cards showcasing complementary nutrition principles */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-3 bg-[#fafafa] rounded-2xl p-5 border border-neutral-200/80">
              <div className="flex items-center gap-2 pb-2 border-b border-neutral-200/80">
                <Info className="w-4 h-4 text-[#ff6000]" />
                <span className="text-xs font-black uppercase tracking-wider text-neutral-800">
                  Piliers Alimentaires IRON FIT
                </span>
              </div>

              <div className="space-y-3 my-2">
                {/* Mini card 1 */}
                <div className="bg-white rounded-xl p-3.5 border border-neutral-200/80 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-lg bg-orange-100 flex items-center justify-center text-[#ff6000]">
                      <Flame className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-black uppercase text-neutral-900">
                      Régularité des repas
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 leading-normal">
                    3 repas complets + 1 collation ciblée autour de l’entraînement pour stabiliser l’énergie.
                  </p>
                </div>

                {/* Mini card 2 */}
                <div className="bg-white rounded-xl p-3.5 border border-neutral-200/80 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                      <Droplets className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-black uppercase text-neutral-900">
                      Zéro déshydratation
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 leading-normal">
                    Consommez de l’eau tout au long de la journée, pas seulement pendant la séance.
                  </p>
                </div>

                {/* Mini card 3 */}
                <div className="bg-white rounded-xl p-3.5 border border-neutral-200/80 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <Apple className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-black uppercase text-neutral-900">
                      Aliments bruts & locaux
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 leading-normal">
                    Privilégiez les œufs frais, le poulet, l’huile d’olive, les dattes et les céréales non raffinées.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-[10px] text-neutral-400 border-t border-neutral-200/80 text-center">
                * Conseils élaborés pour les adhérents du club IRON FIT Khemis Miliana.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
