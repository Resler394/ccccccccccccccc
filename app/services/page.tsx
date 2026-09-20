'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Check,
  Clock,
  ArrowRight,
  Flame,
  Dumbbell,
  Shield,
  Trophy,
  Zap,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CollaborationModal from '@/components/CollaborationModal';
import { ACTIVITIES, BRAND_INFO } from '@/data/gymData';
import { useLanguage } from '@/lib/languageContext';

export default function ServicesPage() {
  const [collabOpen, setCollabOpen] = useState(false);
  const { t } = useLanguage();

  const musculation = ACTIVITIES.find((a) => a.id === 'musculation')!;
  const crossfit = ACTIVITIES.find((a) => a.id === 'crossfit')!;
  const workout = ACTIVITIES.find((a) => a.id === 'workout')!;
  const kickboxing = ACTIVITIES.find((a) => a.id === 'kickboxing')!;
  const judo = ACTIVITIES.find((a) => a.id === 'judo')!;

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111111] flex flex-col font-sans">
      <Header forceSolid />

      <main className="grow pt-24 pb-24">
        {/* ==================================================
            1. TOP INTRO SECTION
            ================================================== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-14">
          <span className="text-xs font-black text-[#ff6000] uppercase tracking-widest block mb-2">
            Disciplines & Entraînements
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#111111] tracking-tight mb-3">
            NOS ACTIVITÉS
          </h1>
          <p className="text-xs sm:text-sm font-bold text-[#ff6000] uppercase tracking-wider mb-8 max-w-xl mx-auto">
            ENTRAÎNEZ-VOUS • PROGRESSEZ • DÉPASSEZ-VOUS
          </p>

          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto text-xs font-bold">
            <span className="px-4 py-1.5 rounded-full bg-neutral-900 text-white">
              Musculation
            </span>
            <span className="px-4 py-1.5 rounded-full bg-neutral-900 text-white">
              CrossFit
            </span>
            <span className="px-4 py-1.5 rounded-full bg-neutral-900 text-white">
              Workout
            </span>
            <span className="px-4 py-1.5 rounded-full bg-[#ff6000] text-white">
              Kick Boxing
            </span>
            <span className="px-4 py-1.5 rounded-full bg-[#ff6000] text-white">
              Judo
            </span>
          </div>
        </section>

        {/* ==================================================
            2. FLAGSHIP SECTION: MUSCULATION
            ================================================== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-[#0e0e0e] text-white rounded-3xl overflow-hidden border border-neutral-800 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Image */}
              <div className="lg:col-span-6 relative h-[380px] sm:h-[480px] w-full">
                <Image
                  src={musculation.image}
                  alt="Musculation et Force IRON FIT"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0e0e0e]" />
              </div>

              {/* Content */}
              <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
                <div>
                  <span className="text-xs font-black text-[#ff6000] uppercase tracking-widest block mb-2">
                    Pôle Force & Performance
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
                    {musculation.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-300 font-medium mt-2 leading-relaxed">
                    Plateau complet de musculation conçu pour l’entraînement progressif, le gain de force et le développement musculaire athlétique.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ff6000] shrink-0" />
                    <span>Haltères et barres olympiques</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ff6000] shrink-0" />
                    <span>Bancs développés & racks de squat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ff6000] shrink-0" />
                    <span>Machines de musculation ciblées</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ff6000] shrink-0" />
                    <span>Conseils techniques et postures</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <Link
                    href="/abonnements"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider bg-[#ff6000] text-white hover:bg-[#ea580c] transition-colors"
                  >
                    <span>Découvrir les tarifs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            3. CROSSFIT & STREET WORKOUT
            ================================================== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="mb-8">
            <span className="text-xs font-black text-[#ff6000] uppercase tracking-widest block mb-1">
              Condition Physique & Calisthénie
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#111111]">
              CROSSFIT & WORKOUT
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-xl mt-1">
              Deux disciplines complémentaires pour varier l’effort, développer une endurance explosive et maîtriser votre poids de corps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CrossFit Card */}
            <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-xs group hover:shadow-md transition-all">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={crossfit.image}
                  alt="CrossFit IRON FIT"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-[10px] font-black uppercase text-[#ff6000] tracking-wider block">
                    {crossfit.tagline}
                  </span>
                  <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                    {crossfit.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-4">
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {crossfit.description}
                </p>
                <div className="space-y-2 text-xs text-neutral-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ff6000]" />
                    <span>Conditionnement métabolique intense</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ff6000]" />
                    <span>Kettlebells, médecine-balls & disques</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Street Workout Card */}
            <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-xs group hover:shadow-md transition-all">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={workout.image}
                  alt="Street Workout IRON FIT"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-[10px] font-black uppercase text-[#ff6000] tracking-wider block">
                    {workout.tagline}
                  </span>
                  <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                    {workout.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-4">
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {workout.description}
                </p>
                <div className="space-y-2 text-xs text-neutral-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ff6000]" />
                    <span>Barres de traction, parallèles et agrès</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ff6000]" />
                    <span>Contrôle postural, équilibre et force pure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            4. COMBAT SPORTS SECTION: KICK BOXING & JUDO
            ================================================== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="mb-8">
            <span className="text-xs font-black text-[#ff6000] uppercase tracking-widest block mb-1">
              Arts Martiaux & Sports de Combat
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#111111]">
              SPORTS DE COMBAT
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-xl mt-1">
              Pratiquez le Kick Boxing et le Judo dans un environnement rigoureux favorisant le respect mutuel et la maîtrise technique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kick Boxing */}
            <div className="bg-[#0f0f0f] text-white rounded-3xl overflow-hidden border border-neutral-800 shadow-md group hover:shadow-xl transition-all">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={kickboxing.image}
                  alt="Kick Boxing IRON FIT"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-[10px] font-black uppercase text-[#ff6000] tracking-wider block">
                    {kickboxing.tagline}
                  </span>
                  <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                    {kickboxing.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-4">
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {kickboxing.description}
                </p>
                <div className="space-y-2 text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ff6000]" />
                    <span>Travail des frappes, enchaînements et réflexes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ff6000]" />
                    <span>Développement du cardio et de la coordination</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Judo */}
            <div className="bg-[#0f0f0f] text-white rounded-3xl overflow-hidden border border-neutral-800 shadow-md group hover:shadow-xl transition-all">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={judo.image}
                  alt="Judo IRON FIT"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-[10px] font-black uppercase text-[#ff6000] tracking-wider block">
                    {judo.tagline}
                  </span>
                  <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                    {judo.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-4">
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {judo.description}
                </p>
                <div className="space-y-2 text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ff6000]" />
                    <span>Apprentissage des projections et contrôles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ff6000]" />
                    <span>Discipline martiale, honneur et respect</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-xs space-y-3">
            <span className="text-xs font-black text-[#ff6000] uppercase tracking-widest block">
              Organisations & Événements
            </span>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-neutral-900">
              Stages techniques & Événements sportifs
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto">
              Vous souhaitez organiser un stage technique de combat, une masterclass ou une session spéciale au club ?
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setCollabOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider bg-[#111111] text-white hover:bg-neutral-800 transition-colors"
              >
                <span>Proposer une collaboration</span>
                <ArrowRight className="w-4 h-4 text-[#ff6000]" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <CollaborationModal
        isOpen={collabOpen}
        onClose={() => setCollabOpen(false)}
      />
    </div>
  );
}
