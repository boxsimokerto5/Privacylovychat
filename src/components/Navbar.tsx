import React from 'react';
import { Printer, Trash2, Mail, ShieldAlert } from 'lucide-react';
import { APP_DETAILS } from '../data/privacyContent';
import { LovyLogo } from './LovyLogo';

interface NavbarProps {
  language: 'en' | 'id';
  onLanguageChange: (lang: 'en' | 'id') => void;
  onOpenDeletionModal: () => void;
  onPrint: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  onOpenDeletionModal,
  onPrint,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-2xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3 group">
          <LovyLogo size={42} className="group-hover:scale-105 transition-transform" />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                {APP_DETAILS.appName}
              </span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Official
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              {language === 'en' ? 'Privacy Policy · by geccko creator' : 'Kebijakan Privasi · oleh geccko creator'}
            </p>
          </div>
        </a>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <div className="flex items-center rounded-lg border border-slate-200 p-0.5 bg-slate-100">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('id')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                language === 'id'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Ganti ke Bahasa Indonesia"
            >
              ID
            </button>
          </div>

          {/* Print button */}
          <button
            onClick={onPrint}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all shadow-xs cursor-pointer"
            title={language === 'en' ? 'Print or save as PDF' : 'Cetak atau simpan sebagai PDF'}
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span>{language === 'en' ? 'Print / PDF' : 'Cetak PDF'}</span>
          </button>

          {/* Child Safety link */}
          <a
            href="#section-8"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-rose-800 bg-rose-50 border border-rose-200 rounded-lg hover:bg-rose-100 transition-all shadow-xs"
            title={language === 'en' ? 'Child Safety & CSAE Policy (Section 8)' : 'Kebijakan Keselamatan Anak (Bagian 8)'}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
            <span>{language === 'en' ? 'Child Safety' : 'Keselamatan Anak'}</span>
          </a>

          {/* Account Deletion Assistant Button */}
          <button
            onClick={onOpenDeletionModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-all shadow-xs cursor-pointer"
            title={language === 'en' ? 'Request Account Deletion (Section 6)' : 'Permintaan Hapus Akun (Bagian 6)'}
          >
            <Trash2 className="w-3.5 h-3.5 text-emerald-700" />
            <span className="hidden sm:inline">
              {language === 'en' ? 'Delete Account' : 'Hapus Akun'}
            </span>
            <span className="sm:hidden text-xs">
              {language === 'en' ? 'Delete' : 'Hapus'}
            </span>
          </button>

          {/* Contact link */}
          <a
            href="#section-11"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white rounded-lg transition-all shadow-xs"
            style={{ backgroundColor: '#23a26d' }}
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{language === 'en' ? 'Contact' : 'Kontak'}</span>
          </a>
        </div>
      </div>
    </header>
  );
};
