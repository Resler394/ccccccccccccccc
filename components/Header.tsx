'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/lib/languageContext';
import { BRAND_INFO } from '@/data/gymData';

interface HeaderProps {
  forceSolid?: boolean;
}

export default function Header({ forceSolid = false }: HeaderProps) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  const NAV_LINKS = [
    { href: '/', label: t('nav_home') },
    { href: '/services', label: t('nav_activities') },
    { href: '/abonnements', label: t('nav_pricing') },
    { href: '/reglement', label: t('nav_rules') },
    { href: '/galerie', label: t('nav_gallery') },
    { href: '/contact', label: t('nav_contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Transparent only on home page when not scrolled and not forceSolid
  const isTransparent = isHome && !scrolled && !forceSolid;

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-gradient-to-b from-black/85 via-black/50 to-transparent py-4 text-white'
          : 'bg-white/95 backdrop-blur-md shadow-xs border-b border-neutral-200/80 py-3 text-[#111111]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <Logo variant={isTransparent ? 'light' : 'dark'} />

        {/* Center: Desktop Navigation */}
        <nav
          id="desktop-nav"
          className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[13px] font-bold"
          aria-label="Navigation principale"
        >
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-colors duration-150 ${
                  isActive
                    ? isTransparent
                      ? 'text-white font-black'
                      : 'text-black font-black'
                    : isTransparent
                    ? 'text-white/80 hover:text-white'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#ff6000] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Language Switcher & Rejoindre Button */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher isTransparent={isTransparent} />

          <Link
            href="/abonnements"
            id="header-cta-rejoindre"
            className="inline-flex items-center justify-center px-5 py-2 rounded-full text-[13px] font-black tracking-wide uppercase bg-[#ff6000] text-white hover:bg-[#ea580c] transition-all duration-150 shadow-sm hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            {t('nav_join')}
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher isTransparent={isTransparent} />

          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors cursor-pointer ${
              isTransparent
                ? 'text-white hover:bg-white/10'
                : 'text-black hover:bg-neutral-100'
            }`}
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden bg-[#0c0c0c] text-white border-b border-neutral-800 px-6 py-5 shadow-2xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="pb-4 mb-3 border-b border-neutral-800/80 flex items-center justify-between">
            <Logo variant="light" />
          </div>
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-bold uppercase tracking-wider py-1.5 transition-colors ${
                    isActive ? 'text-[#ff6000]' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-neutral-800 space-y-3">
              {/* Prominent WhatsApp Lead Gen Button */}
              <a
                id="mobile-nav-whatsapp-btn"
                href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(
                  language === 'AR'
                    ? 'مرحباً IRON FIT، أود الاستفسار عن الاشتراكات والتسجيل في القاعة.'
                    : language === 'EN'
                    ? 'Hello IRON FIT, I would like to inquire about memberships and registration.'
                    : "Bonjour IRON FIT, je souhaite me renseigner sur les abonnements et m'inscrire au club."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-[#052e16] font-black uppercase tracking-wider transition-all shadow-lg shadow-[#25D366]/25 cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-black/10 flex items-center justify-center text-[#052e16] shrink-0">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div className="text-left rtl:text-right">
                    <span className="block text-[13px] font-black tracking-wide leading-tight text-[#052e16]">
                      {t('nav_whatsapp')}
                    </span>
                    <span className="block text-[10px] font-semibold text-[#064e21] tracking-normal leading-tight mt-0.5">
                      {language === 'AR'
                        ? 'رد فوري • خميس مليانة'
                        : language === 'EN'
                        ? 'Instant Reply • Khemis Miliana'
                        : 'Réponse rapide • Khemis Miliana'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 bg-white/30 px-2 py-1 rounded-full border border-white/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#052e16] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#052e16]"></span>
                  </span>
                  <span className="text-[10px] font-black text-[#052e16] uppercase tracking-wider">
                    {language === 'AR' ? 'مباشر' : 'DIRECT'}
                  </span>
                </div>
              </a>

              <Link
                href="/abonnements"
                id="mobile-nav-join-btn"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center py-2.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#ff6000] text-white hover:bg-[#ea580c] transition-colors shadow-md"
              >
                {t('nav_join')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
