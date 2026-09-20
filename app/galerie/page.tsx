'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Instagram, Loader2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryCard, { GalleryItemData } from '@/components/GalleryCard';

interface GalleryItem {
  id: string;
  title: string;
  category: 'Musculation' | 'CrossFit & Workout' | 'Combat';
  src: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Plateau Musculation & Force — Charges Lourdes',
    category: 'Musculation',
    src: '/images/ironfit/musculation.jpg',
  },
  {
    id: '2',
    title: 'Zone CrossFit & Conditionnement Métabolique',
    category: 'CrossFit & Workout',
    src: '/images/ironfit/crossfit.jpg',
  },
  {
    id: '3',
    title: 'Kick Boxing — Travail de Frappe & Explosivité',
    category: 'Combat',
    src: '/images/ironfit/kickboxing.jpg',
  },
  {
    id: '4',
    title: 'Dojo & Tatami de Judo — Technique & Projections',
    category: 'Combat',
    src: '/images/ironfit/judo.jpg',
  },
  {
    id: '5',
    title: 'Street Workout — Barres de Traction & Agrès',
    category: 'CrossFit & Workout',
    src: '/images/ironfit/workout.jpg',
  },
  {
    id: '6',
    title: 'Ambiance & Cadre d’Entraînement IRON FIT',
    category: 'Musculation',
    src: '/images/ironfit/hero.jpg',
  },
];

export default function GaleriePage() {
  const [filter, setFilter] = useState<string>('Tous');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);
  const [isLightboxImgLoaded, setIsLightboxImgLoaded] = useState<boolean>(false);

  const categories = ['Tous', 'Musculation', 'CrossFit & Workout', 'Combat'];

  const filteredItems =
    filter === 'Tous'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  const openLightbox = (item: GalleryItem) => {
    setIsLightboxImgLoaded(false);
    setActivePhoto(item);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111111] flex flex-col font-sans">
      <Header forceSolid />

      <main className="grow pt-24 pb-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-12">
          <span className="text-xs font-black text-[#ff6000] uppercase tracking-widest block mb-2">
            Visuels du Club
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#111111] tracking-tight mb-3">
            GALERIE IRON FIT
          </h1>
          <p className="text-xs sm:text-sm font-bold text-[#ff6000] uppercase tracking-wider mb-6 max-w-xl mx-auto">
            ENTRAÎNEZ-VOUS • PROGRESSEZ • DÉPASSEZ-VOUS
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 text-xs font-bold text-neutral-700 mb-8 border border-neutral-200">
            <Instagram className="w-3.5 h-3.5 text-[#ff6000]" />
            <span>2 645+ abonnés partagent l’esprit IRON FIT</span>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                id={`gallery-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-colors cursor-pointer ${
                  filter === cat
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <GalleryCard
                key={item.id}
                item={item as GalleryItemData}
                index={idx}
                priority={idx < 3}
                onClick={() => openLightbox(item)}
              />
            ))}
          </div>
        </section>

        {/* Lightbox Modal */}
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xs animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
              <button
                type="button"
                id="btn-close-lightbox"
                onClick={() => setActivePhoto(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#ff6000] p-2 cursor-pointer transition-colors"
                aria-label="Fermer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 flex items-center justify-center">
                {/* Lightbox skeleton loader */}
                {!isLightboxImgLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-900 animate-pulse text-neutral-500 gap-3">
                    <Loader2 className="w-8 h-8 animate-spin text-[#ff6000]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      Chargement de l’image...
                    </span>
                  </div>
                )}

                <Image
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  fill
                  className={`object-contain transition-opacity duration-300 ${
                    isLightboxImgLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setIsLightboxImgLoaded(true)}
                />
              </div>

              <div className="text-center mt-4">
                <span className="text-xs font-bold text-[#ff6000] uppercase tracking-wider block mb-1">
                  {activePhoto.category}
                </span>
                <h3 className="text-base font-black text-white uppercase tracking-tight">
                  {activePhoto.title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
