'use client';

import React, { useState } from 'react';
import { Dumbbell, ShieldCheck, Clock, Check, Sparkles, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';
import SubscriptionModal from '@/components/SubscriptionModal';
import { IRON_FIT_PLANS, PRICING_STRIP, BRAND_INFO } from '@/data/gymData';
import { PricingPlan } from '@/lib/types';
import { useLanguage } from '@/lib/languageContext';

export default function AbonnementsPage() {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const { t } = useLanguage();

  const singlePlan = IRON_FIT_PLANS[0];
  const tierPlans = IRON_FIT_PLANS.slice(1);

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111111] flex flex-col font-sans">
      <Header forceSolid />

      <main className="grow pt-24 pb-24">
        {/* ==================================================
            1. TOP INTRO SECTION
            ================================================== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-10">
          <span className="text-xs font-black text-[#ff6000] uppercase tracking-widest block mb-2">
            Tarification Officielle
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#111111] tracking-tight mb-3">
            {t('pricing_heading')}
          </h1>
          <p className="text-xs sm:text-sm font-bold text-[#ff6000] uppercase tracking-wider mb-8 max-w-xl mx-auto">
            {t('pricing_sub')}
          </p>
        </section>

        {/* ==================================================
            2. SÉANCE UNIQUE — PROMINENT FEATURED CARD
            ================================================== */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-[#0c0c0c] text-white rounded-3xl p-6 sm:p-8 border border-neutral-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-[#ff6000]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-14 h-14 rounded-2xl bg-[#ff6000] flex items-center justify-center shrink-0 shadow-lg shadow-[#ff6000]/30">
                <Dumbbell className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#ff6000] block">
                  Accès ponctuel sans engagement
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                  {singlePlan.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-1 max-w-md">
                  Accès libre à tous les plateaux d’entraînement pour une séance unique complète avec vestiaires et douches inclus.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <div className="text-center sm:text-right">
                <span className="text-3xl sm:text-4xl font-black text-[#ff6000] block">
                  {singlePlan.price}
                </span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wide">
                  Par séance
                </span>
              </div>
              <button
                type="button"
                id="btn-single-session"
                onClick={() => setSelectedPlan(singlePlan)}
                className="px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider bg-white text-black hover:bg-neutral-100 transition-colors shadow-md cursor-pointer"
              >
                Réserver
              </button>
            </div>
          </div>
        </section>

        {/* ==================================================
            3. THREE MAIN TIER CARDS (12, 20, 28 SÉANCES)
            ================================================== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
            {tierPlans.map((plan, idx) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                index={idx}
                onSelect={(p) => setSelectedPlan(p)}
              />
            ))}
          </div>
        </section>

        {/* ==================================================
            4. PRICING INFORMATION STRIP (5 ICONS FROM POSTER)
            ================================================== */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-neutral-200/90 shadow-sm">
            <h3 className="text-xs font-black text-[#ff6000] uppercase tracking-widest text-center mb-6">
              SERVICES INCLUS DANS TOUTES NOS FORMULES
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
              {PRICING_STRIP.map((item) => (
                <div key={item.id} className="space-y-1.5 p-2">
                  <span className="text-xs font-black text-neutral-900 block uppercase tracking-tight">
                    {item.label}
                  </span>
                  <span className="text-[11px] text-neutral-500 block leading-snug">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            5. BRAND SLOGAN BANNER
            ================================================== */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-6 px-8 rounded-2xl bg-[#0a0a0a] border border-neutral-800 shadow-md">
            <span className="text-xs font-black text-neutral-400 uppercase tracking-widest block mb-1">
              Devise Officielle
            </span>
            <p className="text-base sm:text-xl font-black uppercase tracking-wider text-[#ff6000]">
              {BRAND_INFO.slogan}
            </p>
          </div>
        </section>
      </main>

      <Footer />

      {/* Subscription Modal */}
      <SubscriptionModal
        plan={selectedPlan}
        onClose={() => setSelectedPlan(null)}
      />
    </div>
  );
}
