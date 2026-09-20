'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ImageIcon } from 'lucide-react';

interface SpaceCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  linkHref: string;
  tagline?: string;
  priority?: boolean;
}

export default function SpaceCard({
  id,
  title,
  description,
  imageSrc,
  linkHref,
  tagline,
  priority = false,
}: SpaceCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Link
      href={linkHref}
      id={`space-card-${id}`}
      className="group relative block overflow-hidden rounded-2xl h-[340px] sm:h-[400px] w-full shadow-md border border-neutral-800/40 bg-neutral-950"
    >
      {/* Background Image Loading Skeleton */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-neutral-900 animate-pulse flex items-center justify-center z-0"
          aria-hidden="true"
        >
          <div className="w-full h-full absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950" />
          <ImageIcon className="w-8 h-8 text-neutral-700 animate-pulse" />
        </div>
      )}

      {/* Next.js Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        onLoad={() => setIsLoaded(true)}
        className={`object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 group-hover:from-black/98 transition-all duration-300 z-10" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 text-white z-20">
        {tagline && (
          <span className="text-[11px] font-bold text-[#ff6000] tracking-wider uppercase mb-1">
            {tagline}
          </span>
        )}
        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-neutral-300 mb-5 font-normal leading-relaxed line-clamp-2 max-w-md">
          {description}
        </p>
        <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white group-hover:text-[#ff6000] transition-colors">
          <span>Découvrir l’activité</span>
          <ArrowRight className="w-4 h-4 text-[#ff6000] transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

