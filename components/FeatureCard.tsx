'use client';

import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Dumbbell, Flame, Trophy, Heart, Users, Shield } from 'lucide-react';
import { Feature } from '@/lib/types';

interface FeatureCardProps {
  feature: Feature;
  index?: number;
}

export default function FeatureCard({ feature, index = 0 }: FeatureCardProps) {
  const renderIcon = () => {
    const iconProps = { className: 'w-5 h-5 text-[#ff6000]' };
    switch (feature.icon) {
      case 'GraduationCap':
        return <GraduationCap {...iconProps} />;
      case 'Dumbbell':
        return <Dumbbell {...iconProps} />;
      case 'Flame':
        return <Flame {...iconProps} />;
      case 'Trophy':
        return <Trophy {...iconProps} />;
      case 'Heart':
        return <Heart {...iconProps} />;
      case 'Users':
        return <Users {...iconProps} />;
      case 'Shield':
        return <Shield {...iconProps} />;
      default:
        return <Dumbbell {...iconProps} />;
    }
  };

  return (
    <motion.div
      id={`feature-card-${feature.id}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.08, 0.45),
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="bg-white p-5 sm:p-6 rounded-2xl border border-neutral-200/80 shadow-2xs hover:shadow-md hover:border-[#ff6000]/40 transition-shadow duration-200 flex flex-col justify-start group"
    >
      <div className="w-10 h-10 rounded-full bg-[#ff6000]/10 border border-[#ff6000]/20 flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110">
        {renderIcon()}
      </div>
      <h3 className="text-base font-black uppercase text-[#111111] mb-2 tracking-tight">
        {feature.title}
      </h3>
      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
        {feature.description}
      </p>
    </motion.div>
  );
}

