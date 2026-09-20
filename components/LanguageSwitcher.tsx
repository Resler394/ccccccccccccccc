'use client';

import React from 'react';
import { useLanguage, Language } from '@/lib/languageContext';

interface LanguageSwitcherProps {
  isTransparent?: boolean;
}

export default function LanguageSwitcher({ isTransparent = false }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  const languages: Language[] = ['FR', 'EN', 'AR'];

  return (
    <div
      id="lang-switcher"
      className={`inline-flex items-center rounded-full p-0.5 text-xs font-semibold transition-colors ${
        isTransparent
          ? 'bg-black/40 border border-white/20 text-white backdrop-blur-xs'
          : 'bg-neutral-100 border border-neutral-200 text-neutral-600'
      }`}
    >
      {languages.map((lang) => {
        const isActive = language === lang;
        return (
          <button
            key={lang}
            id={`lang-btn-${lang.toLowerCase()}`}
            type="button"
            onClick={() => setLanguage(lang)}
            className={`px-2.5 py-1 rounded-full text-[11px] font-black transition-all duration-150 cursor-pointer ${
              isActive
                ? 'bg-[#ff6000] text-white shadow-xs'
                : isTransparent
                ? 'text-white/80 hover:text-white'
                : 'text-neutral-600 hover:text-black'
            }`}
            aria-label={`Changer la langue en ${lang}`}
          >
            {lang}
          </button>
        );
      })}
    </div>
  );
}
