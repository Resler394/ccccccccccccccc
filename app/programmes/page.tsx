'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Dumbbell, Flame, Zap, Trophy, Shield, ArrowRight, Clock, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WeeklyNutritionTip from '@/components/WeeklyNutritionTip';
import { useLanguage } from '@/lib/languageContext';

interface ProgramItem {
  id: string;
  name: string;
  discipline: 'Musculation' | 'CrossFit' | 'Combat' | 'Workout';
  intensity: 'Élevée' | 'Modérée' | 'Maximale';
  description: string;
  duration: string;
  focus: string;
}

const IRON_PROGRAMS: ProgramItem[] = [
  {
    id: '1',
    name: 'Force & Hypertrophie',
    discipline: 'Musculation',
    intensity: 'Élevée',
    description: 'Programme structuré sur charges libres, barres et haltères pour optimiser la prise de masse et l’explosivité.',
    duration: '60 – 75 min',
    focus: 'Puissance • Densité musculaire',
  },
  {
    id: '2',
    name: 'WOD CrossFit Haute Intensité',
    discipline: 'CrossFit',
    intensity: 'Maximale',
    description: 'Entraînement fonctionnel combinant mouvements polyarticulaires et cardio intensif sous encadrement qualifié.',
    duration: '50 – 60 min',
    focus: 'Cardio • Endurance • Résistance',
  },
  {
    id: '3',
    name: 'Street Workout & Calisthénie',
    discipline: 'Workout',
    intensity: 'Élevée',
    description: 'Maîtrise du poids de corps sur agrès, tractions, dips et renforcement du gainage abdominal.',
    duration: '60 min',
    focus: 'Poids de corps • Équilibre',
  },
  {
    id: '4',
    name: 'Kick Boxing — Frappe & Cardio',
    discipline: 'Combat',
    intensity: 'Maximale',
    description: 'Enchaînements pieds-poings, travail aux paos et sur sacs de frappe pour développer réflexes et puissance.',
    duration: '60 min',
    focus: 'Agilité • Précision • Explosivité',
  },
  {
    id: '5',
    name: 'Judo — Technique & Maîtrise',
    discipline: 'Combat',
    intensity: 'Élevée',
    description: 'Apprentissage des prises, projections, contrôles et respect des valeurs martiales au dojo.',
    duration: '75 min',
    focus: 'Coordination • Respect • Technique',
  },
  {
    id: '6',
    name: 'Conditionnement & Préparation Athlétique',
    discipline: 'CrossFit',
    intensity: 'Modérée',
    description: 'Séances axées sur la mobilité articulaire, l’activation musculaire et la récupération active.',
    duration: '45 min',
    focus: 'Mobilité • Récupération',
  },
];

export default function ProgrammesPage() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');
  const { t } = useLanguage();

  const filtered = selectedDiscipline === 'all'
    ? IRON_PROGRAMS
    : IRON_PROGRAMS.filter((p) => p.discipline.toLowerCase() === selectedDiscipline.toLowerCase());

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111111] flex flex-col font-sans">
      <Header forceSolid />

      <main className="grow pt-24 pb-24">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-12">
          <span className="text-xs font-black text-[#ff6000] uppercase tracking-widest block mb-2">
            Entraînement Athlétique
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#111111] tracking-tight mb-3">
            PROGRAMMES & DISCIPLINES
          </h1>
          <p className="text-xs sm:text-sm font-bold text-[#ff6000] uppercase tracking-wider mb-8 max-w-xl mx-auto">
            ENTRAÎNEZ-VOUS • PROGRESSEZ • DÉPASSEZ-VOUS
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto">
            {[
              { key: 'all', label: 'Toutes les disciplines' },
              { key: 'musculation', label: 'Musculation' },
              { key: 'crossfit', label: 'CrossFit' },
              { key: 'workout', label: 'Street Workout' },
              { key: 'combat', label: 'Sports de Combat' },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setSelectedDiscipline(tab.key)}
                className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-colors cursor-pointer ${
                  selectedDiscipline === tab.key
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* Programs Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/90 shadow-2xs hover:shadow-md hover:border-[#ff6000]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-black uppercase px-3 py-1 rounded-full bg-neutral-100 text-neutral-800">
                      {item.discipline}
                    </span>
                    <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-[#ff6000]/10 text-[#ff6000]">
                      Intensité {item.intensity}
                    </span>
                  </div>

                  <h3 className="text-lg font-black uppercase text-[#111111] mb-2 tracking-tight">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-neutral-100">
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#ff6000]" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-semibold text-neutral-700">
                      <Target className="w-3.5 h-3.5 text-[#ff6000]" />
                      <span>{item.focus}</span>
                    </div>
                  </div>

                  <Link
                    href="/abonnements"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-black uppercase tracking-wider bg-neutral-900 text-white hover:bg-[#ff6000] transition-colors"
                  >
                    <span>S’entraîner chez IRON FIT</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Weekly Nutrition Tip Section */}
        <WeeklyNutritionTip />
      </main>

      <Footer />
    </div>
  );
}
