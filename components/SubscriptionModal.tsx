'use client';

import React, { useState } from 'react';
import { X, CheckCircle, MessageCircle, Phone, FileText } from 'lucide-react';
import { PricingPlan } from '@/lib/types';

interface SubscriptionModalProps {
  plan: PricingPlan | null;
  onClose: () => void;
}

export default function SubscriptionModal({
  plan,
  onClose,
}: SubscriptionModalProps) {
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  if (!plan) return null;

  const currentOption = plan.options[selectedOption] || plan.options[0];

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Bonjour IRON FIT, je souhaite m'inscrire à la formule "${plan.title}" (${plan.price || currentOption.price}). Nom: ${fullName || 'N/A'}, Tél: ${phone || 'N/A'}`
    );
    window.open(`https://wa.me/213550000000?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-plan-title"
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-[#111111] max-h-[90vh] overflow-y-auto border border-neutral-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-black p-1.5 rounded-full hover:bg-neutral-100 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <span className="text-[11px] font-black text-[#ff6000] uppercase tracking-wider">
          IRON FIT • {plan.category}
        </span>
        <h3 id="modal-plan-title" className="text-xl sm:text-2xl font-black uppercase mt-1 mb-2">
          {plan.title}
        </h3>
        <p className="text-xs text-neutral-500 mb-6 font-medium">
          Confirmez votre inscription à cette formule d’entraînement.
        </p>

        {/* Plan Highlights */}
        {plan.price && (
          <div className="bg-[#ff6000]/10 border border-[#ff6000]/30 rounded-2xl p-4 mb-6 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-neutral-600 block">Tarif officiel</span>
              <span className="text-xl font-black text-neutral-900">{plan.price}</span>
            </div>
            {plan.sessions && (
              <span className="text-xs font-black uppercase bg-[#ff6000] text-white px-3 py-1 rounded-full">
                {plan.sessions}
              </span>
            )}
          </div>
        )}

        {/* Form Inputs */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
              Nom complet
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Ex: Mohamed Amine"
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm focus:outline-none focus:border-[#ff6000] focus:ring-1 focus:ring-[#ff6000]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
              Numéro de téléphone
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Ex: 0550 00 00 00"
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm focus:outline-none focus:border-[#ff6000] focus:ring-1 focus:ring-[#ff6000]"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={handleWhatsApp}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider bg-[#ff6000] text-white hover:bg-[#ea580c] transition-colors shadow-md cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Valider sur WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 rounded-full text-xs font-bold text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}
