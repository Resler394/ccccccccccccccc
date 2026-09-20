'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ShieldCheck,
  Instagram,
  Clock,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Sparkles,
  Footprints,
  CreditCard,
  Dumbbell,
  ShieldAlert,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { OFFICIAL_LOGO_SRC } from '@/components/Logo';
import FeatureCard from '@/components/FeatureCard';
import SpaceCard from '@/components/SpaceCard';
import PricingCard from '@/components/PricingCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import SubscriptionModal from '@/components/SubscriptionModal';
import CollaborationModal from '@/components/CollaborationModal';
import FAQSection from '@/components/FAQSection';
import {
  FEATURES,
  IRON_FIT_PLANS,
  PRICING_STRIP,
  INTERNAL_RULES,
  TESTIMONIALS,
  BRAND_INFO,
} from '@/data/gymData';
import { PricingPlan } from '@/lib/types';
import { useLanguage } from '@/lib/languageContext';

export default function HomePage() {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [collabModalOpen, setCollabModalOpen] = useState(false);
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111111] flex flex-col font-sans">
      <Header />

      <main className="grow">
        {/* ==================================================
            1. HERO SECTION
            ================================================== */}
        <section
          id="hero-section"
          className="relative min-h-[92vh] sm:min-h-[96vh] flex items-center justify-center text-center overflow-hidden bg-black text-white px-4 sm:px-6 pt-24 pb-16"
        >
          {/* Background Image with Dark Cinematic Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/ironfit/hero.jpg"
              alt="IRON FIT Club Sportif Professionnel Khemis Miliana"
              fill
              priority
              className="object-cover object-center opacity-45 scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-black/95" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,96,0,0.12)_0%,transparent_70%)] pointer-events-none" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            {/* Official Logo Emblem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-5"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden p-1 bg-black/80 border-2 border-[#ff6000] shadow-2xl shadow-[#ff6000]/25 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={OFFICIAL_LOGO_SRC}
                  alt="IRON FIT — Logo Officiel"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover rounded-full"
                  loading="eager"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.includes('/images/')) {
                      target.src = '/746648698_18032783372827003_5003944210144930484_n.jpg';
                    }
                  }}
                />
              </div>
            </motion.div>

            {/* Small accent label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#ff6000]/60 bg-black/60 backdrop-blur-xs text-[#ff6000] text-[11px] sm:text-xs font-black uppercase tracking-widest mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6000] animate-pulse" />
              <span>{t('hero_label')}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[70px] font-black uppercase tracking-tight leading-[1.08] text-white max-w-3xl mb-5 select-none"
            >
              <span>{t('hero_h1_line1')}</span>
              <br />
              <span className="text-[#ff6000]">{t('hero_h1_line2')}</span>
              <br />
              <span>{t('hero_h1_line3')}</span>
            </motion.h1>

            {/* Disciplines Outline Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-xs sm:text-sm md:text-base text-neutral-200 font-bold uppercase tracking-wider mb-3 max-w-2xl"
            >
              {t('hero_sub')}
            </motion.p>

            {/* Hours & City badge */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-xs sm:text-[13px] text-neutral-400 font-medium tracking-normal mb-8 max-w-xl flex items-center justify-center gap-2"
            >
              <Clock className="w-3.5 h-3.5 text-[#ff6000]" />
              <span>{t('hero_hours')}</span>
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap items-center justify-center gap-3.5 mb-8"
            >
              <Link
                href="/abonnements"
                id="hero-btn-abonnements"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider bg-[#ff6000] text-white hover:bg-[#ea580c] transition-all duration-200 shadow-xl shadow-[#ff6000]/25 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>{t('hero_cta_pricing')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/213550000000?text=Bonjour%20IRON%20FIT%2C%20je%20souhaite%20m%27informer%20sur%20les%20abonnements."
                target="_blank"
                rel="noopener noreferrer"
                id="hero-btn-whatsapp"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-black/50 hover:bg-black/80 border border-neutral-600 text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                {t('hero_cta_whatsapp')}
              </a>
            </motion.div>

            {/* Social Proof Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex items-center gap-2.5 text-xs sm:text-[13px] text-neutral-300"
            >
              <div className="w-5 h-5 rounded-full bg-[#ff6000]/20 flex items-center justify-center border border-[#ff6000]/40">
                <Instagram className="w-3 h-3 text-[#ff6000]" />
              </div>
              <span className="font-bold text-white">{t('hero_social_proof')}</span>
              <span className="text-neutral-400">· Khemis Miliana</span>
            </motion.div>
          </div>
        </section>

        {/* ==================================================
            2. ABOUT SECTION & 6 CORE VALUE CARDS
            ================================================== */}
        <section id="about-section" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left column */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-black text-[#ff6000] uppercase tracking-widest block">
                {t('about_label')}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#111111] leading-tight tracking-tight">
                {t('about_title')}
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed pt-2">
                {t('about_desc')}
              </p>

              <div className="pt-4 flex flex-wrap gap-2 text-xs font-bold">
                <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200">
                  Musculation
                </span>
                <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200">
                  CrossFit
                </span>
                <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200">
                  Street Workout
                </span>
                <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200">
                  Kick Boxing
                </span>
                <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200">
                  Judo
                </span>
              </div>
            </div>

            {/* Right column: 6 Feature Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {FEATURES.map((feature, idx) => (
                <FeatureCard key={feature.id} feature={feature} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            3. CORE SPACES & DISCIPLINES
            ================================================== */}
        <section id="disciplines-section" className="bg-[#111111] text-white py-20 lg:py-28 border-y border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-xs font-black text-[#ff6000] uppercase tracking-widest block mb-2">
                Pôles d’Entraînement
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
                NOS DISCIPLINES ATHLÉTIQUES
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 font-normal mt-2 max-w-xl mx-auto">
                Des zones spécialisées pour chaque objectif : force pure, conditionnement métabolique et maîtrise du combat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <SpaceCard
                id="musculation"
                title="MUSCULATION & FORCE"
                tagline="Force • Hypertrophie • Rigueur"
                description="Bancs de développé, charges guidées et libres, barres olympiques pour bâtir un physique puissant."
                imageSrc="/images/ironfit/musculation.jpg"
                linkHref="/services"
              />

              <SpaceCard
                id="crossfit"
                title="CROSSFIT & WORKOUT"
                tagline="Intensité • Vitesse • Calisthénie"
                description="WOD, anneaux, barres de traction, kettlebells et conditionnement cardio haute intensité."
                imageSrc="/images/ironfit/crossfit.jpg"
                linkHref="/services"
              />

              <SpaceCard
                id="combat"
                title="SPORTS DE COMBAT"
                tagline="Kick Boxing • Judo"
                description="Espace dojo et sacs de frappe pour développer agilité, précision, réflexes et maîtrise martiale."
                imageSrc="/images/ironfit/kickboxing.jpg"
                linkHref="/services"
              />
            </div>
          </div>
        </section>

        {/* ==================================================
            4. PRICING PREVIEW (FROM VERIFIED POSTER)
            ================================================== */}
        <section id="pricing-preview" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-12">
            <span className="text-xs font-black text-[#ff6000] uppercase tracking-widest block mb-2">
              Tarification Officielle
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#111111] tracking-tight">
              {t('pricing_heading')}
            </h2>
            <p className="text-xs sm:text-sm font-bold text-[#ff6000] uppercase tracking-wider mt-1">
              {t('pricing_sub')}
            </p>
          </div>

          {/* Prominent Single Session Bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto mb-10"
          >
            <div className="bg-[#0f0f0f] text-white rounded-2xl p-5 sm:p-6 border border-neutral-800 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="w-12 h-12 rounded-full bg-[#ff6000] flex items-center justify-center shrink-0">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight">
                    {t('pricing_single_session')}
                  </h3>
                  <p className="text-xs text-neutral-400">
                    {t('pricing_single_desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl sm:text-3xl font-black text-[#ff6000]">
                  {t('pricing_single_price')}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedPlan(IRON_FIT_PLANS[0])}
                  className="px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Choisir
                </button>
              </div>
            </div>
          </motion.div>

          {/* 3 Main Tier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch mb-12">
            {IRON_FIT_PLANS.slice(1).map((plan, idx) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                index={idx}
                onSelect={(p) => setSelectedPlan(p)}
              />
            ))}
          </div>

          {/* Pricing Information Strip */}
          <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs mb-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
              {PRICING_STRIP.map((item) => (
                <div key={item.id} className="p-2 space-y-1">
                  <span className="text-xs font-black text-neutral-900 block uppercase">
                    {item.label}
                  </span>
                  <span className="text-[11px] text-neutral-500 block">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Slogan Banner */}
          <div className="max-w-3xl mx-auto text-center py-4 px-6 rounded-xl bg-[#ff6000]/10 border border-[#ff6000]/20">
            <p className="text-sm sm:text-base font-black uppercase tracking-wider text-[#ff6000]">
              {t('slogan_banner')}
            </p>
          </div>
        </section>

        {/* ==================================================
            5. INTERNAL RULES PREVIEW
            ================================================== */}
        <section id="rules-preview" className="bg-[#f2f2f2] py-20 lg:py-24 border-y border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-black text-[#ff6000] uppercase tracking-widest block mb-2">
                {t('rules_label')}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#111111] tracking-tight">
                {t('rules_title')}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto mt-2">
                Les règles fondamentales affichées au club pour garantir un cadre d’entraînement propre, discipliné et respectueux.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-10">
              {INTERNAL_RULES.map((rule) => (
                <div
                  key={rule.id}
                  className={`bg-white rounded-2xl p-5 border shadow-2xs flex flex-col justify-between ${
                    rule.highlight ? 'border-[#ff6000]/50 ring-1 ring-[#ff6000]/20' : 'border-neutral-200'
                  }`}
                >
                  <div>
                    <div className="w-8 h-8 rounded-full bg-neutral-900 text-white font-black text-xs flex items-center justify-center mb-3">
                      {rule.id}
                    </div>
                    <h4 className="text-xs font-black uppercase tracking-tight text-neutral-900 mb-1.5">
                      {rule.titleFr}
                    </h4>
                    <p className="text-[11px] text-neutral-600 leading-relaxed">
                      {rule.descFr}
                    </p>
                  </div>

                  {rule.noteFr && (
                    <div className="mt-3 pt-2 border-t border-neutral-100 text-[10px] font-bold text-amber-700">
                      ⚠ {rule.noteFr}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/reglement"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-[#ff6000] hover:text-[#ea580c] transition-colors"
              >
                <span>Consulter le règlement intérieur officiel complet</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ==================================================
            6. TESTIMONIALS & ATHLETE COMMUNITY
            ================================================== */}
        <section id="testimonials-section" className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-2 mb-12">
              <span className="text-xs font-black text-[#ff6000] uppercase tracking-widest block">
                Communauté Sportive
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#111111] tracking-tight">
                L’ESPRIT DU CLUB IRON FIT
              </h2>
              <p className="text-sm text-neutral-500 font-normal max-w-lg mx-auto">
                Des pratiquants engagés et déterminés qui s’entraînent chaque semaine à Khemis Miliana.
              </p>
              <div className="flex items-center justify-center gap-2 pt-2 text-xs sm:text-sm">
                <Instagram className="w-4 h-4 text-[#ff6000]" />
                <span className="font-bold text-[#111111]">2 645+ abonnés sur Instagram</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {TESTIMONIALS.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            7. FAQ (FOIRE AUX QUESTIONS & ACCORDION)
            ================================================== */}
        <FAQSection />

        {/* ==================================================
            8. FINAL CTA
            ================================================== */}
        <CTASection />
      </main>

      <Footer />

      {/* Modals */}
      <SubscriptionModal
        plan={selectedPlan}
        onClose={() => setSelectedPlan(null)}
      />

      <CollaborationModal
        isOpen={collabModalOpen}
        onClose={() => setCollabModalOpen(false)}
      />
    </div>
  );
}
