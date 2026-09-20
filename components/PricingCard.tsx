'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Check, Star, Crown, Dumbbell, UserCheck, Flame } from 'lucide-react';
import { PricingPlan } from '@/lib/types';
import PricingCardSkeleton from './PricingCardSkeleton';

interface PricingCardProps {
  plan: PricingPlan;
  onSelect: (plan: PricingPlan) => void;
  index?: number;
  isLoading?: boolean;
}

export default function PricingCard({ plan, onSelect, index = 0, isLoading = false }: PricingCardProps) {
  if (isLoading) {
    return <PricingCardSkeleton isHighlight={plan.highlight} />;
  }

  const isHighlight = plan.highlight;

  const renderTopIcon = () => {
    switch (plan.iconType) {
      case 'star':
        return <Star className="w-5 h-5 text-[#ff6000] fill-[#ff6000]" />;
      case 'crown':
        return <Crown className="w-5 h-5 text-red-500" />;
      case 'figure':
        return <UserCheck className="w-5 h-5 text-emerald-500" />;
      default:
        return <Dumbbell className="w-5 h-5 text-[#ff6000]" />;
    }
  };

  return (
    <motion.div
      id={`pricing-card-${plan.id}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.12, 0.4),
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: isHighlight ? -8 : -5 }}
      className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
        isHighlight
          ? 'bg-[#0f0f0f] text-white border-[#ff6000] shadow-xl shadow-[#ff6000]/10'
          : 'bg-white text-[#111111] border-neutral-200/90 shadow-sm hover:shadow-md'
      }`}
    >
      {/* Top Badge for Meilleur Choix */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ff6000] text-white text-[11px] font-black uppercase px-4 py-1 rounded-full shadow-md tracking-wider flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-white" />
          <span>{plan.badge}</span>
        </div>
      )}

      <div>
        {/* Header with Icon and Title */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2.5">
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                isHighlight ? 'bg-neutral-800' : 'bg-neutral-100'
              }`}
            >
              {renderTopIcon()}
            </div>
            <div>
              <span className="block text-[11px] font-black uppercase tracking-wider text-[#ff6000]">
                {plan.category}
              </span>
              <h3
                className={`text-lg sm:text-xl font-black uppercase tracking-tight ${
                  isHighlight ? 'text-white' : 'text-[#111111]'
                }`}
              >
                {plan.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Sessions Highlight if defined */}
        {plan.sessions && (
          <div className="mt-4 mb-2">
            <span className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 dark:text-white">
              <span className={isHighlight ? 'text-white' : 'text-neutral-900'}>
                {plan.sessions}
              </span>
            </span>
          </div>
        )}

        {/* Price Block */}
        {plan.price && (
          <div className="my-3">
            <div
              className={`inline-block px-4 py-1.5 rounded-xl font-black text-2xl sm:text-3xl tracking-tight ${
                isHighlight
                  ? 'bg-[#ff6000] text-white'
                  : plan.accentColor === '#16a34a'
                  ? 'bg-emerald-600 text-white'
                  : plan.accentColor === '#dc2626'
                  ? 'bg-red-600 text-white'
                  : 'bg-neutral-900 text-white'
              }`}
            >
              {plan.price}
            </div>
          </div>
        )}

        {/* Support Message */}
        {plan.supportMessage && (
          <div
            className={`text-xs font-bold uppercase tracking-wider py-2 px-3 rounded-lg my-3 ${
              isHighlight
                ? 'bg-neutral-800/80 text-orange-400 border border-[#ff6000]/30'
                : plan.accentColor === '#16a34a'
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : plan.accentColor === '#dc2626'
                ? 'bg-red-50 text-red-700 border border-red-200'
                : 'bg-neutral-100 text-neutral-700'
            }`}
          >
            ✓ {plan.supportMessage}
          </div>
        )}

        {/* Subtitle if present */}
        {plan.subtitle && (
          <p
            className={`text-xs my-2 font-medium ${
              isHighlight ? 'text-neutral-400' : 'text-neutral-500'
            }`}
          >
            {plan.subtitle}
          </p>
        )}

        {/* Options list */}
        <div className="space-y-3 my-6 pt-2 border-t border-neutral-100 dark:border-neutral-800">
          {plan.options.map((opt, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between text-xs sm:text-[13px] gap-2"
            >
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#ff6000] shrink-0 stroke-[2.5]" />
                <span className={isHighlight ? 'text-neutral-300' : 'text-neutral-600'}>
                  {opt.name}
                </span>
              </div>
              <span
                className={`font-black shrink-0 ${
                  isHighlight ? 'text-white' : 'text-[#111111]'
                }`}
              >
                {opt.price}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <button
        type="button"
        id={`btn-plan-${plan.id}`}
        onClick={() => onSelect(plan)}
        className={`w-full py-3 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-200 cursor-pointer text-center ${
          isHighlight
            ? 'bg-[#ff6000] text-white hover:bg-[#ea580c] shadow-md shadow-[#ff6000]/30'
            : 'bg-[#111111] text-white hover:bg-neutral-800'
        }`}
      >
        {plan.buttonText || 'Rejoindre'}
      </button>
    </motion.div>
  );
}
