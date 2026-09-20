'use client';

import React, { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronDown,
  Search,
  X,
  CreditCard,
  Dumbbell,
  Footprints,
  ShieldCheck,
  ShieldAlert,
  Clock,
  Sparkles,
  Users,
  MessageCircle,
  ArrowRight,
  HelpCircle,
  SlidersHorizontal,
} from 'lucide-react';
import { FAQ_ITEMS, BRAND_INFO } from '@/data/gymData';
import { FAQItem } from '@/lib/types';
import { useLanguage } from '@/lib/languageContext';

export default function FAQSection() {
  const { t, language, isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openItemIds, setOpenItemIds] = useState<string[]>(['faq-plans', 'faq-single-session']);

  const getIcon = (iconName: string) => {
    const props = { className: 'w-4 h-4 text-[#ff6000]' };
    switch (iconName) {
      case 'CreditCard':
        return <CreditCard {...props} />;
      case 'Dumbbell':
        return <Dumbbell {...props} />;
      case 'Footprints':
        return <Footprints {...props} />;
      case 'ShieldAlert':
        return <ShieldAlert {...props} />;
      case 'Clock':
        return <Clock {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Users':
        return <Users {...props} />;
      default:
        return <ShieldCheck {...props} />;
    }
  };

  const getQuestion = useCallback((item: FAQItem) => {
    if (language === 'AR') return item.questionAr;
    if (language === 'EN') return item.questionEn;
    return item.questionFr;
  }, [language]);

  const getAnswer = useCallback((item: FAQItem) => {
    if (language === 'AR') return item.answerAr;
    if (language === 'EN') return item.answerEn;
    return item.answerFr;
  }, [language]);

  const getBadge = useCallback((item: FAQItem) => {
    if (language === 'AR') return item.badgeAr || 'معلومات';
    if (language === 'EN') return item.badgeEn || 'Club Info';
    return item.badgeFr || 'Info Club';
  }, [language]);

  const categories = [
    { key: 'all', label: t('faq_tab_all') },
    { key: 'membership', label: t('faq_tab_membership') },
    { key: 'trial', label: t('faq_tab_trial') },
    { key: 'rules', label: t('faq_tab_rules') },
    { key: 'facilities', label: t('faq_tab_facilities') },
  ];

  const filteredItems = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const question = getQuestion(item).toLowerCase();
      const answer = getAnswer(item).toLowerCase();
      const badge = (getBadge(item) || '').toLowerCase();

      return question.includes(q) || answer.includes(q) || badge.includes(q);
    });
  }, [selectedCategory, searchQuery, getQuestion, getAnswer, getBadge]);

  const toggleItem = (id: string) => {
    setOpenItemIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenItemIds(filteredItems.map((item) => item.id));
  };

  const collapseAll = () => {
    setOpenItemIds([]);
  };

  return (
    <section
      id="faq-section"
      className="py-20 lg:py-28 bg-[#fafafa] border-t border-neutral-200/80 relative overflow-hidden"
    >
      {/* Subtle background ambient radial accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff6000]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neutral-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Title */}
        <div className="text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff6000]/10 border border-[#ff6000]/20 text-[#ff6000] text-xs font-black uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t('faq_badge_label')}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#111111] tracking-tight">
            {t('faq_title')}
          </h2>

          <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            {t('faq_subtitle')}
          </p>
        </div>

        {/* Search Bar & Controls Bar */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-2xl mx-auto">
            <div className={`absolute top-1/2 -translate-y-1/2 text-neutral-400 ${isRTL ? 'right-4' : 'left-4'}`}>
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              id="faq-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('faq_search_placeholder')}
              className={`w-full py-3.5 rounded-2xl bg-white border border-neutral-200/90 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 shadow-2xs focus:outline-none focus:border-[#ff6000] focus:ring-2 focus:ring-[#ff6000]/20 transition-all ${
                isRTL ? 'pr-11 pl-11' : 'pl-11 pr-11'
              }`}
            />
            {searchQuery && (
              <button
                type="button"
                id="btn-clear-faq-search"
                onClick={() => setSearchQuery('')}
                className={`absolute top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 p-1 rounded-full hover:bg-neutral-100 cursor-pointer ${
                  isRTL ? 'left-3' : 'right-3'
                }`}
                aria-label="Effacer la recherche"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills & Toggle All Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    id={`faq-tab-${cat.key}`}
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#111111] text-white shadow-xs'
                        : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300 hover:text-neutral-900'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-neutral-500">
              <button
                type="button"
                id="btn-expand-all-faq"
                onClick={expandAll}
                className="hover:text-[#ff6000] transition-colors cursor-pointer"
              >
                {t('faq_expand_all')}
              </button>
              <span>•</span>
              <button
                type="button"
                id="btn-collapse-all-faq"
                onClick={collapseAll}
                className="hover:text-[#ff6000] transition-colors cursor-pointer"
              >
                {t('faq_collapse_all')}
              </button>
            </div>
          </div>
        </div>

        {/* Accordion List */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 text-center border border-neutral-200 shadow-2xs max-w-xl mx-auto space-y-3">
            <HelpCircle className="w-10 h-10 text-neutral-300 mx-auto" />
            <p className="text-sm font-bold text-neutral-800">
              {t('faq_no_results')}
            </p>
            <button
              type="button"
              id="btn-reset-faq-filter"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider bg-neutral-900 text-white hover:bg-[#ff6000] transition-colors cursor-pointer"
            >
              {t('faq_reset_search')}
            </button>
          </div>
        ) : (
          <div className="space-y-3.5">
            {filteredItems.map((item, idx) => {
              const isOpen = openItemIds.includes(item.id);
              const question = getQuestion(item);
              const answer = getAnswer(item);
              const badge = getBadge(item);

              return (
                <div
                  key={item.id}
                  id={`faq-card-${item.id}`}
                  className={`bg-white rounded-2xl sm:rounded-3xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-[#ff6000]/40 shadow-md ring-1 ring-[#ff6000]/15'
                      : 'border-neutral-200/90 hover:border-neutral-300 shadow-2xs'
                  }`}
                >
                  {/* Accordion Trigger Header */}
                  <button
                    type="button"
                    id={`faq-btn-${item.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${item.id}`}
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6000]"
                  >
                    <div className="flex items-start sm:items-center gap-3.5 grow min-w-0">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isOpen
                            ? 'bg-[#ff6000] text-white shadow-sm shadow-[#ff6000]/30'
                            : 'bg-neutral-100 text-neutral-700'
                        }`}
                      >
                        {getIcon(item.icon)}
                      </div>

                      <div className="space-y-1 grow min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          {badge && (
                            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-700 border border-neutral-200/70">
                              {badge}
                            </span>
                          )}
                          {item.highlight && (
                            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#ff6000]/10 text-[#ff6000]">
                              Populaire
                            </span>
                          )}
                        </div>

                        <h3
                          className={`text-sm sm:text-base font-black tracking-tight uppercase leading-snug transition-colors ${
                            isOpen ? 'text-[#ff6000]' : 'text-neutral-900'
                          }`}
                        >
                          {question}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-[#ff6000]/10 text-[#ff6000]'
                          : 'bg-neutral-100 text-neutral-500'
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion Expanded Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-content-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-btn-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-[13px] text-neutral-600 leading-relaxed border-t border-neutral-100">
                          <p className="mt-3 font-normal">{answer}</p>

                          {/* Context action buttons for relevant FAQ topics */}
                          {item.category === 'membership' && (
                            <div className="mt-4 pt-3 flex flex-wrap items-center gap-3">
                              <Link
                                href="/abonnements"
                                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#ff6000] hover:text-[#ea580c] transition-colors"
                              >
                                <span>{t('faq_view_pricing')}</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          )}

                          {item.category === 'rules' && (
                            <div className="mt-4 pt-3 flex flex-wrap items-center gap-3">
                              <Link
                                href="/reglement"
                                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#ff6000] hover:text-[#ea580c] transition-colors"
                              >
                                <span>{t('faq_view_rules')}</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          )}

                          {item.category === 'trial' && (
                            <div className="mt-4 pt-3 flex flex-wrap items-center gap-3">
                              <a
                                href="https://wa.me/213550000000?text=Bonjour%20IRON%20FIT%2C%20je%20souhaite%20venir%20pour%20une%20s%C3%A9ance%20unique%20%C3%A0%20250%20DA."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-900 text-white hover:bg-[#ff6000] text-xs font-bold transition-colors"
                              >
                                <MessageCircle className="w-3.5 h-3.5" />
                                <span>Réserver une séance unique (250 DA)</span>
                              </a>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Contact Assistance Card */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-black uppercase text-neutral-900 tracking-tight">
              {t('faq_contact_prompt')}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500">
              {t('faq_contact_desc')}
            </p>
          </div>

          <a
            href="https://wa.me/213550000000?text=Bonjour%20IRON%20FIT%20(Khemis%20Miliana)%2C%20j%27ai%20une%20question%20suppl%C3%A9mentaire%20%C3%A0%20vous%20poser."
            target="_blank"
            rel="noopener noreferrer"
            id="btn-faq-whatsapp-support"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#ff6000] text-white hover:bg-[#ea580c] transition-all shadow-md shadow-[#ff6000]/20 shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t('faq_contact_whatsapp')}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
