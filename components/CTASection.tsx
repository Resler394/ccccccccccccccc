'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/lib/languageContext';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section id="cta-section" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-neutral-800 shadow-2xl px-6 py-12 sm:px-12 sm:py-16">
        {/* Atmospheric background with subtle ironfit hero overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity pointer-events-none"
          style={{ backgroundImage: `url('/images/ironfit/hero.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60 pointer-events-none" />

        {/* Decorative Orange Glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#ff6000]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-black uppercase tracking-widest text-[#ff6000] inline-block">
              IRON FIT • Khemis Miliana
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight leading-tight">
              {t('cta_title')}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-semibold tracking-wide">
              {t('cta_sub')}
            </p>
            <p className="text-xs text-neutral-500 font-medium">
              Accès 6j/7 • 06h00 – 22h00 • Séances dès 250 DA
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
            <Link
              href="/abonnements"
              id="cta-abonnements-btn"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-black uppercase tracking-wide bg-[#ff6000] text-white hover:bg-[#ea580c] transition-all duration-200 shadow-lg hover:shadow-[#ff6000]/25 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>{t('cta_btn_join')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/213550000000?text=Bonjour%20IRON%20FIT%2C%20je%20souhaite%20des%20renseignements%20sur%20les%20abonnements."
              target="_blank"
              rel="noopener noreferrer"
              id="cta-whatsapp-btn"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#171717] hover:bg-[#222222] border border-neutral-700 text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 text-[#ff6000]" />
              <span>{t('cta_btn_whatsapp')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
