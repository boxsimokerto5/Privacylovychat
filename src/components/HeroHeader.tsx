import React from 'react';
import { Search, Shield, Calendar, ShieldCheck, UserCheck, X } from 'lucide-react';
import { APP_DETAILS } from '../data/privacyContent';
import { LovyLogo } from './LovyLogo';

interface HeroHeaderProps {
  language: 'en' | 'id';
  searchQuery: string;
  onSearchChange: (query: string) => void;
  matchesCount: number | null;
}

export const HeroHeader: React.FC<HeroHeaderProps> = ({
  language,
  searchQuery,
  onSearchChange,
  matchesCount,
}) => {
  return (
    <div className="bg-gradient-to-b from-emerald-50/70 via-slate-50 to-slate-50 border-b border-emerald-100/80 pt-10 pb-9 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* App Logo Display matching photo */}
        <div className="flex justify-center mb-5">
          <div className="p-2 bg-white rounded-2xl border border-emerald-100 shadow-md shadow-emerald-500/10 hover:scale-105 transition-transform">
            <LovyLogo size={72} roundedClass="rounded-xl" />
          </div>
        </div>

        {/* Verification Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100/90 text-emerald-800 border border-emerald-200 mb-4 shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
          <span>
            {language === 'en'
              ? 'Google Play Store Compliant Privacy Documentation'
              : 'Dokumentasi Privasi Resmi Sesuai Kebijakan Google Play'}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          {language === 'en' ? 'Privacy Policy' : 'Kebijakan Privasi'}
        </h1>

        <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          {language === 'en' ? (
            <>
              Official privacy disclosure for <strong className="text-slate-900">{APP_DETAILS.appName}</strong> ({APP_DETAILS.altName}) by <strong className="text-emerald-700">{APP_DETAILS.developerName}</strong>. Transparent data practices, user safety, and your privacy rights.
            </>
          ) : (
            <>
              Keterbukaan privasi resmi untuk aplikasi <strong className="text-slate-900">{APP_DETAILS.appName}</strong> ({APP_DETAILS.altName}) oleh <strong className="text-emerald-700">{APP_DETAILS.developerName}</strong>. Praktik data yang transparan, keamanan pengguna, dan hak privasi Anda.
            </>
          )}
        </p>

        {/* Metadata info: Last Updated, Developer, Effective Date */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs text-slate-600 font-medium">
          <div className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              {language === 'en' ? 'Last Updated:' : 'Terakhir Diperbarui:'}{' '}
              <strong className="text-slate-800">{APP_DETAILS.effectiveDate}</strong>
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-emerald-200 shadow-2xs">
            <Shield className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              {language === 'en' ? 'Developer:' : 'Pengembang:'}{' '}
              <strong className="text-emerald-800">{APP_DETAILS.developerName}</strong>
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
            <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              {language === 'en' ? 'Age Rating:' : 'Rating Usia:'}{' '}
              <strong className="text-slate-800">{APP_DETAILS.minAge}+ Only</strong>
            </span>
          </div>
        </div>

        {/* Quick Search */}
        <div className="mt-6 max-w-lg mx-auto relative">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-emerald-600 absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={
                language === 'en'
                  ? 'Search policy (e.g., location, delete, camera, GAID, ironSource)...'
                  : 'Cari kebijakan (misal: lokasi, hapus akun, kamera, iklan)...'
              }
              className="w-full pl-10 pr-10 py-2.5 text-sm bg-white rounded-xl border border-slate-300 shadow-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-800 placeholder-slate-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 cursor-pointer"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {searchQuery.trim() !== '' && (
            <p className="mt-2 text-xs text-slate-500">
              {matchesCount !== null && matchesCount > 0 ? (
                <span className="text-emerald-700 font-medium">
                  {language === 'en'
                    ? `Found ${matchesCount} matching section${matchesCount > 1 ? 's' : ''}`
                    : `Ditemukan ${matchesCount} bagian yang cocok`}
                </span>
              ) : (
                <span className="text-amber-700">
                  {language === 'en'
                    ? 'No matching section found. Showing all sections below.'
                    : 'Tidak ada bagian yang cocok. Menampilkan seluruh isi di bawah.'}
                </span>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
