'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ZoomIn, ImageIcon } from 'lucide-react';

export interface GalleryItemData {
  id: string;
  title: string;
  category: 'Musculation' | 'CrossFit & Workout' | 'Combat';
  src: string;
}

interface GalleryCardProps {
  item: GalleryItemData;
  onClick: () => void;
  index?: number;
  priority?: boolean;
}

export default function GalleryCard({
  item,
  onClick,
  index = 0,
  priority = false,
}: GalleryCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      id={`gallery-card-${item.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.08, 0.4),
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={onClick}
      className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer shadow-2xs hover:shadow-xl transition-all duration-300 border border-neutral-200/80 bg-neutral-900"
    >
      {/* Loading Skeleton Backdrop */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-neutral-900 animate-pulse flex flex-col justify-between p-5 z-10"
          aria-hidden="true"
        >
          <div className="w-full h-full absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-xl bg-neutral-800/80 flex items-center justify-center text-neutral-600">
              <ImageIcon className="w-5 h-5 animate-pulse" />
            </div>
          </div>
          <div className="relative z-10 self-end w-8 h-8 rounded-full bg-neutral-800" />
          <div className="relative z-10 space-y-2 mt-auto">
            <div className="h-3 w-20 rounded bg-[#ff6000]/30" />
            <div className="h-4 w-3/4 rounded bg-neutral-700" />
          </div>
        </div>
      )}

      {/* Next.js Image with onLoad smooth transition */}
      {!hasError ? (
        <Image
          src={item.src}
          alt={item.title}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-all duration-500 ease-out group-hover:scale-105 ${
            isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-xs'
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true);
            setIsLoaded(true);
          }}
        />
      ) : (
        <div className="absolute inset-0 bg-neutral-900 flex flex-col items-center justify-center p-6 text-center text-neutral-400">
          <ImageIcon className="w-8 h-8 text-neutral-600 mb-2" />
          <span className="text-xs font-bold uppercase">{item.title}</span>
        </div>
      )}

      {/* Gradient Dark Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 ${
          isLoaded ? 'opacity-80 group-hover:opacity-95' : 'opacity-0'
        }`}
      />

      {/* Top Right Zoom Icon */}
      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 z-20 group-hover:scale-110">
        <ZoomIn className="w-4 h-4 text-[#ff6000]" />
      </div>

      {/* Bottom Text Description */}
      <div
        className={`absolute bottom-4 left-5 right-5 text-white z-20 transition-all duration-300 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <span className="text-[10px] font-black uppercase text-[#ff6000] tracking-wider block mb-1">
          {item.category}
        </span>
        <h3 className="text-sm sm:text-base font-black uppercase tracking-tight leading-snug">
          {item.title}
        </h3>
      </div>
    </motion.div>
  );
}
