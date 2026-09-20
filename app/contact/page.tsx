'use client';

import React, { useState } from 'react';
import { Phone, MessageCircle, Instagram, MapPin, Clock, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BRAND_INFO } from '@/data/gymData';
import { useLanguage } from '@/lib/languageContext';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Renseignement abonnement');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setPhone('');
      setMessage('');
    }, 2500);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Bonjour IRON FIT (Khemis Miliana), je vous contacte concernant : ${subject}.\nNom : ${name || 'N/A'}\nTél : ${phone || 'N/A'}\nMessage : ${message || 'Demande d’information'}`
    );
    window.open(`https://wa.me/213550000000?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111111] flex flex-col font-sans">
      <Header forceSolid />

      <main className="grow pt-24 pb-24">
        {/* Intro */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-12">
          <span className="text-xs font-black text-[#ff6000] uppercase tracking-widest block mb-2">
            Contact & Accès
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#111111] tracking-tight mb-3">
            CONTACTEZ IRON FIT
          </h1>
          <p className="text-xs sm:text-sm font-bold text-[#ff6000] uppercase tracking-wider max-w-xl mx-auto">
            CLUB SPORTIF PROFESSIONNEL • KHEMIS MILIANA
          </p>
        </section>

        {/* Contact Info Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone & WhatsApp */}
            <div className="bg-white rounded-3xl p-7 border border-neutral-200/90 shadow-2xs space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-[#ff6000]/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-[#ff6000]" />
              </div>
              <h3 className="text-base font-black uppercase text-[#111111]">
                WhatsApp & Direct
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Contactez directement notre équipe pour des renseignements sur les formules 12, 20 ou 28 séances.
              </p>
              <a
                href="https://wa.me/213550000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-black uppercase text-[#ff6000] hover:text-[#ea580c] pt-2"
              >
                <span>Écrire sur WhatsApp</span>
                <span>→</span>
              </a>
            </div>

            {/* Location */}
            <div className="bg-white rounded-3xl p-7 border border-neutral-200/90 shadow-2xs space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-[#ff6000]/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#ff6000]" />
              </div>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Localisation
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Khemis Miliana, Algérie
                <br />
                <span className="text-xs text-neutral-400">Sport and recreation</span>
              </p>
              <div className="pt-2 text-xs font-bold text-neutral-800">
                Centre d’entraînement accessible
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-3xl p-7 border border-neutral-200/90 shadow-2xs space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-[#ff6000]/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#ff6000]" />
              </div>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Horaires d’Ouverture
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Accès 6 jours / 7
                <br />
                <span className="font-bold text-neutral-900">06h00 – 22h00</span>
              </p>
              <div className="pt-2 text-xs font-semibold text-[#ff6000]">
                Flexibilité maximale pour vos séances
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Direct WhatsApp */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/90 shadow-sm">
            <div className="max-w-xl mx-auto text-center mb-8">
              <span className="text-xs font-black text-[#ff6000] uppercase tracking-widest block mb-1">
                Formulaire en ligne
              </span>
              <h2 className="text-2xl font-black uppercase text-[#111111]">
                Envoyez-nous un Message
              </h2>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-3 bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
                <p className="text-base font-bold text-emerald-800">
                  Votre message a été transmis à l’équipe IRON FIT !
                </p>
                <p className="text-xs text-emerald-600">
                  Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs sm:text-sm focus:outline-none focus:border-[#ff6000]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0550 00 00 00"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs sm:text-sm focus:outline-none focus:border-[#ff6000]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Sujet de votre demande
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-xs sm:text-sm focus:outline-none focus:border-[#ff6000]"
                  >
                    <option>Renseignement abonnement (12, 20 ou 28 séances)</option>
                    <option>Séance unique (250 DA)</option>
                    <option>Musculation & Force</option>
                    <option>CrossFit & Workout</option>
                    <option>Kick Boxing / Judo</option>
                    <option>Partenariat ou Événement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Votre message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Posez votre question à nos responsables..."
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-xs sm:text-sm focus:outline-none focus:border-[#ff6000] resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#ff6000] text-white hover:bg-[#ea580c] transition-colors shadow-md cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Envoyer le message</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectWhatsApp}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#111111] text-white hover:bg-neutral-800 border border-neutral-700 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#ff6000]" />
                    <span>WhatsApp direct</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
