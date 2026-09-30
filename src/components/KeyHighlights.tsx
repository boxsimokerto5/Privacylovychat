import React from 'react';
import { MapPinOff, Trash2, ShieldCheck, Lock, ExternalLink } from 'lucide-react';
import { APP_DETAILS } from '../data/privacyContent';

interface KeyHighlightsProps {
  language: 'en' | 'id';
  onOpenDeletionModal: () => void;
}

export const KeyHighlights: React.FC<KeyHighlightsProps> = ({
  language,
  onOpenDeletionModal,
}) => {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#23a26d' }}></span>
          <span>{language === 'en' ? 'Key Privacy Commitments' : 'Komitmen Utama Privasi'}</span>
        </h2>
        <span className="text-xs text-slate-400">
          {language === 'en' ? 'Quick Summary' : 'Ringkasan Cepat'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Highlight 1: No GPS Sharing */}
        <div className="bg-white rounded-xl border border-emerald-100 p-4.5 shadow-2xs hover:shadow-xs transition-shadow">
          <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
            <MapPinOff className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-semibold text-slate-900 mb-1">
            {language === 'en' ? 'Zero GPS Coordinate Sharing' : 'Tanpa Berbagi Koordinat GPS'}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {language === 'en'
              ? 'Your exact GPS coordinates are NEVER displayed or shared with other users. Only approximate relative distances (e.g. "500 m") appear in People Nearby.'
              : 'Koordinat GPS persis Anda TIDAK PERNAH ditampilkan atau dibagikan ke pengguna lain. Hanya perkiraan jarak relatif (misal "500 m") yang muncul.'}
          </p>
          <a
            href="#section-2c"
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 mt-2.5"
          >
            <span>{language === 'en' ? 'See Section 2.c' : 'Lihat Bagian 2.c'}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Highlight 2: Account Deletion */}
        <div className="bg-white rounded-xl border border-emerald-200/90 p-4.5 shadow-2xs hover:shadow-xs transition-shadow bg-gradient-to-b from-emerald-50/30 to-white">
          <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
            <Trash2 className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-semibold text-slate-900 mb-1">
            {language === 'en' ? '30-Day Permanent Deletion' : 'Penghapusan Permanen 30 Hari'}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {language === 'en'
              ? `Delete your account anytime in-app (Settings > Delete Account) or by emailing ${APP_DETAILS.deletionEmail}. Data purged in 30 days.`
              : `Hapus akun kapan saja di dalam aplikasi atau kirim email ke ${APP_DETAILS.deletionEmail}. Data dihapus permanen dalam 30 hari.`}
          </p>
          <button
            onClick={onOpenDeletionModal}
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 mt-2.5 cursor-pointer"
          >
            <span>{language === 'en' ? 'Request Deletion Now' : 'Ajukan Hapus Akun'}</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>

        {/* Highlight 3: 18+ & Safety */}
        <div className="bg-white rounded-xl border border-emerald-100 p-4.5 shadow-2xs hover:shadow-xs transition-shadow">
          <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-semibold text-slate-900 mb-1">
            {language === 'en' ? '18+ Only & Instant Blocking' : 'Khusus 18+ & Blokir Seketika'}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {language === 'en'
              ? 'Lovy strictly prohibits minors under 18. Users can block abusive individuals at any time and report misconduct for prompt moderator action.'
              : 'Lovy melarang keras anak di bawah 18 tahun. Pengguna dapat memblokir pelaku kapan saja dan melaporkan konten untuk ditindak moderator.'}
          </p>
          <a
            href="#section-7"
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 mt-2.5"
          >
            <span>{language === 'en' ? 'See Sections 7 & 8' : 'Lihat Bagian 7 & 8'}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Highlight 4: Security & Ad Compliance */}
        <div className="bg-white rounded-xl border border-emerald-100 p-4.5 shadow-2xs hover:shadow-xs transition-shadow">
          <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-semibold text-slate-900 mb-1">
            {language === 'en' ? 'HTTPS Encryption & No Data Sale' : 'Enkripsi HTTPS & Tidak Menjual Data'}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {language === 'en'
              ? 'We never sell personal data. Media stored securely on Cloudflare R2, authenticated via Google Identity, and protected with HTTPS in transit.'
              : 'Kami tidak pernah menjual data pribadi. Media disimpan aman di Cloudflare R2, otentikasi via Google, dan dienkripsi HTTPS saat transmisi.'}
          </p>
          <a
            href="#section-3"
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 mt-2.5"
          >
            <span>{language === 'en' ? 'See Section 3 & 9' : 'Lihat Bagian 3 & 9'}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
