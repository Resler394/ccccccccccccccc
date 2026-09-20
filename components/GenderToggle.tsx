'use client';

import React from 'react';

interface GenderToggleProps {
  selected: 'Hommes' | 'Femmes';
  onChange: (value: 'Hommes' | 'Femmes') => void;
  className?: string;
}

export default function GenderToggle({
  selected,
  onChange,
  className = '',
}: GenderToggleProps) {
  return (
    <div
      id="gender-toggle-wrapper"
      className={`inline-flex items-center p-1 rounded-full bg-white border border-neutral-200/90 shadow-2xs ${className}`}
      role="tablist"
      aria-label="Sélectionner espace homme ou femme"
    >
      <button
        id="toggle-hommes-btn"
        type="button"
        role="tab"
        aria-selected={selected === 'Hommes'}
        onClick={() => onChange('Hommes')}
        className={`px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
          selected === 'Hommes'
            ? 'bg-[#f59e0b] text-white shadow-xs'
            : 'text-neutral-700 hover:text-black hover:bg-neutral-50'
        }`}
      >
        Hommes
      </button>

      <button
        id="toggle-femmes-btn"
        type="button"
        role="tab"
        aria-selected={selected === 'Femmes'}
        onClick={() => onChange('Femmes')}
        className={`px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
          selected === 'Femmes'
            ? 'bg-[#f59e0b] text-white shadow-xs'
            : 'text-neutral-700 hover:text-black hover:bg-neutral-50'
        }`}
      >
        Femmes
      </button>
    </div>
  );
}
