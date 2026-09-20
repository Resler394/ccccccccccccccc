'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

// Immutable official brand logo asset reference
export const OFFICIAL_LOGO_SRC = '/images/746648698_18032783372827003_5003944210144930484_n.jpg';

export default function Logo({
  variant = 'dark',
  className = '',
  showSubtitle = true,
}: LogoProps) {
  const isLight = variant === 'light';

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}
      id="brand-logo"
      aria-label="IRON FIT — Club Sportif Professionnel"
    >
      {/* Official immutable brand logo asset container */}
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shrink-0 shadow-md transition-transform duration-200 group-hover:scale-105 border border-white/20 bg-black flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={OFFICIAL_LOGO_SRC}
          alt="IRON FIT — Logo Officiel"
          width={44}
          height={44}
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            const target = e.currentTarget;
            // Fallback to root path if placed in /public/ directly
            if (target.src.includes('/images/')) {
              target.src = '/746648698_18032783372827003_5003944210144930484_n.jpg';
            }
          }}
        />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-tight">
        <span
          className={`text-base sm:text-lg font-black tracking-wider uppercase transition-colors duration-200 ${
            isLight ? 'text-white' : 'text-[#111111]'
          }`}
        >
          IRON <span className="text-[#ff6000]">FIT</span>
        </span>
        {showSubtitle && (
          <span className="text-[9px] sm:text-[10px] font-bold text-[#ff6000] tracking-widest uppercase">
            CLUB SPORTIF PROFESSIONNEL
          </span>
        )}
      </div>
    </Link>
  );
}
