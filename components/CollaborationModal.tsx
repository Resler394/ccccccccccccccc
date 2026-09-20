'use client';

import React, { useState } from 'react';
import { X, Handshake, MessageCircle, Send } from 'lucide-react';

interface CollaborationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CollaborationModal({
  isOpen,
  onClose,
}: CollaborationModalProps) {
  const [name, setName] = useState('');
  const [entity, setEntity] = useState('');
  const [projectType, setProjectType] = useState('Événement sportif / Compétition');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Bonjour IRON FIT (Khemis Miliana), je souhaite discuter d'un partenariat / événement.\nNom/Entité: ${name} (${entity})\nType: ${projectType}\nDétails: ${message || 'À discuter'}`
    );
    window.open(`https://wa.me/213550000000?text=${text}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-[#111111] border border-neutral-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-black p-1.5 rounded-full hover:bg-neutral-100 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <Handshake className="w-5 h-5 text-[#ff6000]" />
          <span className="text-[11px] font-black text-[#ff6000] uppercase tracking-wider">
            IRON FIT • Partenariats & Événements
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black uppercase text-[#111111] mb-2">
          COLLABORATION SPORTIVE
        </h3>
        <p className="text-xs text-neutral-500 mb-6 font-medium">
          Organisez vos compétitions, stages techniques ou actions sportives au sein du club IRON FIT.
        </p>

        {sent ? (
          <div className="py-8 text-center space-y-2 bg-emerald-50 rounded-2xl border border-emerald-200 p-4">
            <p className="text-sm font-bold text-emerald-800">
              Message envoyé avec succès !
            </p>
            <p className="text-xs text-emerald-600">
              Notre équipe prendra contact avec vous rapidement.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
            <div>
              <label className="block font-bold uppercase tracking-wider text-neutral-700 mb-1 text-[11px]">
                Nom / Responsable
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre nom"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#ff6000]"
              />
            </div>

            <div>
              <label className="block font-bold uppercase tracking-wider text-neutral-700 mb-1 text-[11px]">
                Organisation / Club / Marque
              </label>
              <input
                type="text"
                value={entity}
                onChange={(e) => setEntity(e.target.value)}
                placeholder="Ex: Club de Judo, Marque de Nutrition..."
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#ff6000]"
              />
            </div>

            <div>
              <label className="block font-bold uppercase tracking-wider text-neutral-700 mb-1 text-[11px]">
                Type de projet
              </label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:border-[#ff6000]"
              >
                <option>Stage technique / Masterclass</option>
                <option>Compétition de force / Combat</option>
                <option>Partenariat matériel / Équipementier</option>
                <option>Autre collaboration</option>
              </select>
            </div>

            <div>
              <label className="block font-bold uppercase tracking-wider text-neutral-700 mb-1 text-[11px]">
                Détails du projet
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Précisez votre demande..."
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#ff6000] resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-black uppercase tracking-wider bg-[#ff6000] text-white hover:bg-[#ea580c] transition-colors shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Envoyer la demande</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold bg-[#171717] text-white hover:bg-[#252525] border border-neutral-700 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#ff6000]" />
                <span>WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
