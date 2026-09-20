'use client';

import React from 'react';
import {
  Footprints,
  Sparkles,
  CreditCard,
  Dumbbell,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import { INTERNAL_RULES, BRAND_INFO } from '@/data/gymData';
import { useLanguage } from '@/lib/languageContext';

export default function ReglementPage() {
  const { t, isRTL } = useLanguage();

  const getRuleIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#ff6000]' };
    switch (iconName) {
      case 'Footprints':
        return <Footprints {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'CreditCard':
        return <CreditCard {...props} />;
      case 'Dumbbell':
        return <Dumbbell {...props} />;
      case 'ShieldAlert':
        return <ShieldAlert {...props} />;
      default:
        return <CheckCircle2 {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111111] flex flex-col font-sans">
      <Header forceSolid />

      <main className="grow pt-24 pb-24">
        {/* Intro */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 text-center">
          <div className="flex justify-center mb-4">
            <Logo variant="dark" />
          </div>
          <span className="text-xs font-black text-[#ff6000] uppercase tracking-widest block mb-2">
            Discipline & Respect Mutuel
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#111111] tracking-tight">
            RÈGLEMENT INTÉRIEUR
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-neutral-800 tracking-normal mt-1 font-arabic" dir="rtl">
            القانون الداخلي للقاعة
          </p>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-lg mx-auto mt-3">
            Règlement officiel affiché au sein de la salle IRON FIT à Khemis Miliana pour assurer la propreté, la sécurité et le respect entre tous les adhérents.
          </p>
        </section>

        {/* 5 Rules Presentation */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {INTERNAL_RULES.map((rule) => (
            <div
              key={rule.id}
              className={`bg-white rounded-3xl p-6 sm:p-8 border shadow-xs transition-all duration-200 hover:shadow-md ${
                rule.highlight
                  ? 'border-[#ff6000]/40 ring-1 ring-[#ff6000]/20'
                  : 'border-neutral-200/90'
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-neutral-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#0a0a0a] text-white font-black text-base flex items-center justify-center shrink-0">
                    {rule.id}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black uppercase text-[#111111] tracking-tight">
                      {rule.titleFr}
                    </h3>
                  </div>
                </div>

                <div className="text-right sm:text-right w-full sm:w-auto" dir="rtl">
                  <span className="text-base sm:text-lg font-bold text-[#ff6000] font-arabic">
                    {rule.titleAr}
                  </span>
                </div>
              </div>

              {/* Descriptions in French and Arabic */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wide">
                    Français
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                    {rule.descFr}
                  </p>
                </div>

                <div className="space-y-1 text-right" dir="rtl">
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wide block">
                    العربية
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-semibold font-arabic">
                    {rule.descAr}
                  </p>
                </div>
              </div>

              {/* Special Penalty / Infraction Note */}
              {rule.noteFr && (
                <div className="mt-5 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs sm:text-[13px] flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold">
                      Note importante : {rule.noteFr}
                    </p>
                    <p className="text-amber-800 font-semibold font-arabic" dir="rtl">
                      {rule.noteAr}
                    </p>
                  </div>
                </div>
              )}

              {rule.id === 5 && (
                <div className="mt-5 p-4 rounded-2xl bg-red-50/80 border border-red-200 text-red-900 text-xs sm:text-[13px] flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">
                      Avertissement : Les insultes et propos irrespectueux sont strictement interdits. Toute infraction entraîne l’expulsion directe et immédiate du club sans remboursement.
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Closing club commitment banner */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="text-center py-6 px-8 rounded-2xl bg-[#0a0a0a] text-white border border-neutral-800">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#ff6000]">
              {BRAND_INFO.slogan}
            </p>
            <p className="text-xs text-neutral-400 mt-1">
              IRON FIT — Club Sportif Professionnel • Khemis Miliana
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
