'use client';

import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 text-white/80 hover:text-white bg-black/60 p-2 rounded-full backdrop-blur-xs transition-colors"
          aria-label="Fermer la vidéo"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative w-full aspect-video bg-black flex items-center justify-center">
          {/* Embedded YouTube or simulated high fidelity player matching Echorouk news report */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed?listType=search&list=Iron+Fit+Gym+Khemis+Miliana"
            title="IRON FIT Club Sportif Professionnel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
