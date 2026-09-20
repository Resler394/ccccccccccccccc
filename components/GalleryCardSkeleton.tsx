'use client';

import React from 'react';
import { ImageIcon } from 'lucide-react';

export default function GalleryCardSkeleton() {
  return (
    <div
      className="relative h-72 sm:h-80 rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 animate-pulse shadow-2xs"
      aria-hidden="true"
    >
      {/* Background shimmer placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950" />

      {/* Centered subtle icon placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 rounded-2xl bg-neutral-800/60 border border-neutral-700/50 flex items-center justify-center text-neutral-600">
          <ImageIcon className="w-6 h-6" />
        </div>
      </div>

      {/* Top right zoom icon placeholder */}
      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-800/80" />

      {/* Bottom text overlays */}
      <div className="absolute bottom-4 left-5 right-5 space-y-2">
        {/* Category tag skeleton */}
        <div className="h-3 w-20 rounded bg-[#ff6000]/30" />

        {/* Title skeleton lines */}
        <div className="h-4 w-4/5 rounded bg-neutral-700" />
        <div className="h-3.5 w-1/2 rounded bg-neutral-800" />
      </div>
    </div>
  );
}
