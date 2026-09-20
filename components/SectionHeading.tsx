import React from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`space-y-2.5 ${isCenter ? 'text-center mx-auto' : 'text-left'} ${className}`}>
      {label && (
        <span className="inline-block text-[11px] sm:text-xs font-bold text-[#f59e0b] tracking-wider uppercase">
          {label}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] uppercase tracking-tight leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-neutral-500 max-w-xl mx-auto font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
