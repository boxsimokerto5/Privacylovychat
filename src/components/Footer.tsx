import React from 'react';
import { ArrowUp, Printer, ShieldCheck, Mail, Trash2 } from 'lucide-react';
import { APP_DETAILS } from '../data/privacyContent';
import { LovyLogo } from './LovyLogo';

interface FooterProps {
  language: 'en' | 'id';
  onLanguageChange: (lang: 'en' | 'id') => void;
  onOpenDeletionModal: () => void;
  onPrint: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onLanguageChange,
  onOpenDeletionModal,
  onPrint,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 pt-12 pb-14 mt-16 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Brand info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <LovyLogo size={36} />
              <div>
                <span className="font-bold text-base text-white">{APP_DETAILS.appName}</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-emerald-400 font-mono ml-2 border border-slate-700">
                  {APP_DETAILS.altName}
                </span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              {language === 'en'
                ? `Lovy is developed by ${APP_DETAILS.developerName}, committed to strict privacy standards, safe social discovery, zero GPS coordinate broadcasting, and prompt user data deletion.`
                : `Lovy dikembangkan oleh ${APP_DETAILS.developerName}, berkomitmen pada standar privasi ketat, penemuan sosial yang aman, tanpa penyebaran koordinat GPS, dan penghapusan data pengguna.`}
            </p>
            <div className="mt-4 flex items-center gap-2 text-slate-300 text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>
                {language === 'en'
                  ? 'Compliant with Google Play Developer Program Policies'
                  : 'Sesuai dengan Kebijakan Program Pengembang Google Play'}
              </span>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
              {language === 'en' ? 'Quick Actions' : 'Aksi Cepat'}
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenDeletionModal}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{language === 'en' ? 'Delete Account / Data' : 'Hapus Akun / Data'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onPrint}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-400" />
                  <span>{language === 'en' ? 'Print / Export Policy' : 'Cetak / Ekspor Kebijakan'}</span>
                </button>
              </li>
              <li>
                <a
                  href="#section-2"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {language === 'en' ? 'Data We Collect' : 'Data yang Kami Kumpulkan'}
                </a>
              </li>
              <li>
                <a
                  href="#section-3"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {language === 'en' ? 'Ad Networks & GAID' : 'Jaringan Iklan & GAID'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
              {language === 'en' ? 'Official Inquiries' : 'Kontak Resmi'}
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <a
                  href={`mailto:${APP_DETAILS.primaryContactEmail}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {APP_DETAILS.primaryContactEmail}
                </a>
              </li>
              <li className="pt-1 text-slate-300">
                <span className="text-slate-500 block text-[11px]">
                  {language === 'en' ? 'Developer:' : 'Pengembang:'}
                </span>
                <strong className="text-emerald-300 font-semibold">{APP_DETAILS.developerName}</strong>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500">
            © 2026 {APP_DETAILS.appName} · {APP_DETAILS.developerName}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 rounded text-xs transition-colors cursor-pointer ${
                  language === 'en' ? 'text-white font-bold bg-slate-800' : 'text-slate-400 hover:text-white'
                }`}
              >
                English
              </button>
              <span>·</span>
              <button
                onClick={() => onLanguageChange('id')}
                className={`px-2 py-0.5 rounded text-xs transition-colors cursor-pointer ${
                  language === 'id' ? 'text-white font-bold bg-slate-800' : 'text-slate-400 hover:text-white'
                }`}
              >
                Indonesia
              </button>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors p-1 cursor-pointer"
              title="Back to Top"
            >
              <span>{language === 'en' ? 'Back to Top' : 'Ke Atas'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
