import React from 'react';
import { MapPinOff, Trash2, ShieldCheck, Lock, ExternalLink, ShieldAlert } from 'lucide-react';
import { APP_DETAILS } from '../data/privacyContent';

interface KeyHighlightsProps {
  language: 'en' | 'id';
  onOpenDeletionModal: () => void;
  onOpenChildSafetyModal?: () => void;
}

export const KeyHighlights: React.FC<KeyHighlightsProps> = ({
  language,
  onOpenDeletionModal,
  onOpenChildSafetyModal,
}) => {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#23a26d' }}></span>
          <span>{language === 'en' ? 'Key Privacy & Safety Commitments' : 'Komitmen Utama Privasi & Keselamatan'}</span>
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

        {/* Highlight 3: Child Safety & CSAE Zero Tolerance */}
        <div className="bg-white rounded-xl border border-rose-200 p-4.5 shadow-2xs hover:shadow-xs transition-shadow bg-gradient-to-b from-rose-50/30 to-white">
          <div className="w-9 h-9 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center mb-3">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-semibold text-slate-900 mb-1">
            {language === 'en' ? 'Child Safety & CSAE Zero Tolerance' : 'Keselamatan Anak & Nol Toleransi CSAE'}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {language === 'en'
              ? `Strict zero-tolerance against CSAM/CSAE. In-app reporting tools, contact at ${APP_DETAILS.safetyContactEmail || APP_DETAILS.primaryContactEmail}, and prompt NCMEC reporting.`
              : `Nol toleransi ketat terhadap CSAM/CSAE. Fitur pelaporan di aplikasi, kontak ${APP_DETAILS.safetyContactEmail || APP_DETAILS.primaryContactEmail}, dan pelaporan ke NCMEC.`}
          </p>
          <div className="flex items-center gap-2 mt-2.5">
            <a
              href="#section-8"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-700 hover:text-rose-800"
            >
              <span>{language === 'en' ? 'See Section 8' : 'Lihat Bagian 8'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            {onOpenChildSafetyModal && (
              <>
                <span className="text-slate-300">·</span>
                <button
                  onClick={onOpenChildSafetyModal}
                  className="text-[11px] font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  {language === 'en' ? 'Report' : 'Lapor'}
                </button>
              </>
            )}
          </div>
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
