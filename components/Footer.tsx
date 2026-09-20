'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, MapPin, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '@/lib/languageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="main-footer" className="bg-[#080808] text-neutral-400 text-xs sm:text-sm pt-16 pb-10 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 pb-14 border-b border-neutral-800/80">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Logo variant="light" />
            <p className="text-neutral-400 text-xs sm:text-[13px] leading-relaxed max-w-md pt-2">
              Club sportif professionnel à Khemis Miliana. Espace dédié à la musculation, au CrossFit, au workout et aux sports de combat (Kick Boxing & Judo).
            </p>
            <div className="pt-2 space-y-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#ff6000] shrink-0" />
                <span className="font-semibold text-white">Khemis Miliana, Algérie</span>
                <span className="text-neutral-500">• Sport & loisirs</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#ff6000] shrink-0" />
                <span>Accès 6 jours / 7 • 06h00 – 22h00</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-white font-black tracking-wider uppercase text-xs">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t('nav_home')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  {t('nav_activities')}
                </Link>
              </li>
              <li>
                <Link href="/abonnements" className="hover:text-white transition-colors">
                  {t('nav_pricing')}
                </Link>
              </li>
              <li>
                <Link href="/reglement" className="hover:text-[#ff6000] transition-colors flex items-center gap-1">
                  <span>{t('nav_rules')}</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#ff6000]" />
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="hover:text-white transition-colors">
                  {t('nav_gallery')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t('nav_contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Disciplines & Community Column */}
          <div className="space-y-3">
            <h4 className="text-white font-black tracking-wider uppercase text-xs">
              Disciplines & Communauté
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li className="text-neutral-300 font-semibold">• Musculation & Force</li>
              <li className="text-neutral-300 font-semibold">• CrossFit Conditionnel</li>
              <li className="text-neutral-300 font-semibold">• Street Workout</li>
              <li className="text-neutral-300 font-semibold">• Kick Boxing</li>
              <li className="text-neutral-300 font-semibold">• Judo</li>
            </ul>

            <div className="pt-3">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white hover:border-[#ff6000]/50 transition-colors text-xs"
              >
                <Instagram className="w-4 h-4 text-[#ff6000]" />
                <span>2 645+ abonnés</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Slogan Banner & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p className="font-bold text-[#ff6000] tracking-wider uppercase text-center sm:text-left">
            TA FORCE, TON MENTAL, TON RÉSULTAT !
          </p>
          <p className="text-center sm:text-right">
            © 2026 IRON FIT — Club Sportif Professionnel. Khemis Miliana. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
