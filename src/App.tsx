/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeroHeader } from './components/HeroHeader';
import { KeyHighlights } from './components/KeyHighlights';
import { TableOfContents } from './components/TableOfContents';
import { PermissionMatrix } from './components/PermissionMatrix';
import { SectionCard } from './components/SectionCard';
import { AccountDeletionModal } from './components/AccountDeletionModal';
import { Footer } from './components/Footer';
import {
  PRIVACY_CONTENT_EN,
  PRIVACY_CONTENT_ID,
  APP_DETAILS,
  SectionItem
} from './data/privacyContent';
import { Mail, Trash2, ArrowRight } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'id'>('en');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSectionId, setActiveSectionId] = useState('section-1');
  const [isDeletionModalOpen, setIsDeletionModalOpen] = useState(false);

  const sections: SectionItem[] = useMemo(() => {
    return language === 'en' ? PRIVACY_CONTENT_EN : PRIVACY_CONTENT_ID;
  }, [language]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSectionId(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // Filter sections based on search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sections;
    const q = searchQuery.toLowerCase();

    return sections.filter((s) => {
      const inTitle = s.title.toLowerCase().includes(q);
      const inSummary = s.summary?.toLowerCase().includes(q);
      const inParagraphs = s.content.paragraphs?.some((p) => p.toLowerCase().includes(q));
      const inSubsections = s.content.subsections?.some(
        (sub) =>
          sub.title.toLowerCase().includes(q) ||
          sub.bulletPoints?.some(
            (bp) => bp.label.toLowerCase().includes(q) || bp.text.toLowerCase().includes(q)
          ) ||
          sub.importantNotice?.toLowerCase().includes(q)
      );
      const inBulletPoints = s.content.bulletPoints?.some(
        (bp) => bp.label?.toLowerCase().includes(q) || bp.text.toLowerCase().includes(q)
      );
      const inNotice = s.content.importantNotice?.toLowerCase().includes(q);

      return inTitle || inSummary || inParagraphs || inSubsections || inBulletPoints || inNotice;
    });
  }, [sections, searchQuery]);

  const matchesCount = searchQuery.trim() ? filteredSections.length : null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <div id="top" />

      {/* Navbar */}
      <div className="no-print">
        <Navbar
          language={language}
          onLanguageChange={setLanguage}
          onOpenDeletionModal={() => setIsDeletionModalOpen(true)}
          onPrint={handlePrint}
        />
      </div>

      {/* Hero Header */}
      <HeroHeader
        language={language}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        matchesCount={matchesCount}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Key Highlights row */}
        <div className="no-print">
          <KeyHighlights
            language={language}
            onOpenDeletionModal={() => setIsDeletionModalOpen(true)}
          />
        </div>

        {/* Permission Transparency Matrix */}
        <div className="no-print">
          <PermissionMatrix language={language} />
        </div>

        {/* 2-Column Layout: Sidebar + Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Table of Contents & Quick Action Widget */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-22 space-y-4 no-print">
            <TableOfContents
              sections={sections}
              activeSectionId={activeSectionId}
              language={language}
            />

            {/* Quick Account Deletion Card */}
            <div className="p-4.5 rounded-xl border border-emerald-200/90 bg-gradient-to-b from-emerald-50/40 to-white shadow-2xs">
              <div className="flex items-center gap-2 mb-2 text-emerald-800 font-bold">
                <Trash2 className="w-4 h-4 text-emerald-700" />
                <h4 className="text-xs uppercase tracking-wider">
                  {language === 'en' ? 'User Data Rights' : 'Hak Data Pengguna'}
                </h4>
              </div>
              <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                {language === 'en'
                  ? 'Request deletion of your account and all associated messages, photos, and records within 30 days.'
                  : 'Ajukan penghapusan akun serta seluruh riwayat pesan, foto, dan data Anda dalam 30 hari.'}
              </p>
              <button
                onClick={() => setIsDeletionModalOpen(true)}
                className="w-full py-2 px-3 text-xs font-semibold text-white rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer hover:opacity-95"
                style={{ backgroundColor: '#23a26d' }}
              >
                <span>{language === 'en' ? 'Delete Account Assistant' : 'Bantuan Hapus Akun'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Support / Contact Card */}
            <div className="p-4.5 rounded-xl border border-slate-200 bg-white shadow-2xs text-xs">
              <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold">
                <Mail className="w-4 h-4 text-emerald-700" />
                <span>{language === 'en' ? 'Official Privacy Contact' : 'Kontak Resmi Privasi'}</span>
              </div>
              <p className="text-slate-600 mb-2 leading-relaxed">
                {language === 'en'
                  ? `For any questions or privacy inquiries for ${APP_DETAILS.appName}, contact developer ${APP_DETAILS.developerName}:`
                  : `Untuk pertanyaan privasi seputar ${APP_DETAILS.appName}, hubungi pengembang ${APP_DETAILS.developerName}:`}
              </p>
              <a
                href={`mailto:${APP_DETAILS.primaryContactEmail}`}
                className="font-semibold text-emerald-700 hover:text-emerald-900 break-all block"
              >
                {APP_DETAILS.primaryContactEmail}
              </a>
            </div>
          </aside>

          {/* Right Column: Sections */}
          <div className="lg:col-span-8">
            {filteredSections.length > 0 ? (
              filteredSections.map((section) => (
                <SectionCard
                  key={section.id}
                  section={section}
                  language={language}
                  searchQuery={searchQuery}
                  onOpenDeletionModal={() => setIsDeletionModalOpen(true)}
                />
              ))
            ) : (
              <div className="p-8 text-center bg-white rounded-2xl border border-slate-200">
                <p className="text-slate-600 text-sm mb-3">
                  {language === 'en'
                    ? 'No sections matched your search criteria.'
                    : 'Tidak ada bagian yang cocok dengan kriteria pencarian Anda.'}
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-3.5 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 rounded-lg hover:bg-emerald-100 cursor-pointer"
                >
                  {language === 'en' ? 'Reset Search' : 'Atur Ulang Pencarian'}
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Account Deletion Assistant Modal */}
      <AccountDeletionModal
        isOpen={isDeletionModalOpen}
        onClose={() => setIsDeletionModalOpen(false)}
        language={language}
      />

      {/* Footer */}
      <Footer
        language={language}
        onLanguageChange={setLanguage}
        onOpenDeletionModal={() => setIsDeletionModalOpen(true)}
        onPrint={handlePrint}
      />
    </div>
  );
}
