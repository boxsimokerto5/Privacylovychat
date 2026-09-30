import React, { useState } from 'react';
import { X, Trash2, Mail, Smartphone, Check, Copy, AlertTriangle, ShieldCheck, ExternalLink } from 'lucide-react';
import { APP_DETAILS } from '../data/privacyContent';

interface AccountDeletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'id';
}

export const AccountDeletionModal: React.FC<AccountDeletionModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [reason, setReason] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const emailBodyEn = `Dear Lovy Support Team,

I am writing to formally request the permanent deletion of my Lovy account and all associated personal data (profile, messages, photos, and stored data) under Section 6 of your Privacy Policy.

Account Details:
- Registered Google Email: ${userEmail || '[Your Google Account Email]'}
- Lovy Username / Display Name: ${userName || '[Your Username / Display Name]'}
${reason ? `- Reason for Deletion: ${reason}\n` : ''}
I understand that once verified, my account and data will be permanently purged from your active databases within 30 days.

Thank you.`;

  const emailBodyId = `Yth. Tim Dukungan Lovy,

Saya ingin mengajukan permohonan resmi untuk penghapusan permanen akun Lovy saya beserta seluruh data pribadi terkait (profil, pesan, foto, dan data yang tersimpan) sesuai Bagian 6 Kebijakan Privasi Anda.

Rincian Akun:
- Email Google Terdaftar: ${userEmail || '[Email Akun Google Anda]'}
- Nama Pengguna / Display Name di Lovy: ${userName || '[Nama Akun Lovy Anda]'}
${reason ? `- Alasan Penghapusan: ${reason}\n` : ''}
Saya memahami bahwa setelah diverifikasi, akun dan data saya akan dimusnahkan secara permanen dari basis data aktif dalam kurun waktu 30 hari.

Terima kasih.`;

  const activeEmailBody = language === 'en' ? emailBodyEn : emailBodyId;
  const subjectLine = 'Request Account Deletion';
  const mailtoLink = `mailto:${APP_DETAILS.deletionEmail}?subject=${encodeURIComponent(
    subjectLine
  )}&body=${encodeURIComponent(activeEmailBody)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `To: ${APP_DETAILS.deletionEmail}\nSubject: ${subjectLine}\n\n${activeEmailBody}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-emerald-100 shadow-xl overflow-hidden my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-white p-5 border-b border-emerald-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl text-white flex items-center justify-center shadow-sm"
              style={{ backgroundColor: '#23a26d' }}
            >
              <Trash2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                {language === 'en' ? 'Account & Data Deletion Assistant' : 'Bantuan Hapus Akun & Data'}
              </h2>
              <p className="text-xs text-emerald-800 font-medium">
                {language === 'en'
                  ? 'Official compliance with Google Play User Data Deletion requirements'
                  : 'Sesuai dengan ketentuan Penghapusan Data Pengguna Google Play'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-white/80 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Guarantee notice */}
          <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-3.5 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-emerald-950 leading-relaxed">
              {language === 'en' ? (
                <>
                  <strong>30-Day Permanent Purge Guarantee:</strong> Upon verification, your profile, chat messages, shared photos, and stored data will be permanently wiped from our active databases within 30 days.
                </>
              ) : (
                <>
                  <strong>Jaminan Pembersihan Permanen 30 Hari:</strong> Setelah diverifikasi, profil, pesan obrolan, foto yang dibagikan, dan data yang tersimpan akan dihapus permanen dari basis data aktif dalam waktu 30 hari.
                </>
              )}
            </p>
          </div>

          {/* Option 1: In-App Method */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-white text-xs flex items-center justify-center font-bold">
                1
              </span>
              <Smartphone className="w-4 h-4 text-slate-700" />
              <h3 className="text-sm font-bold text-slate-900">
                {language === 'en' ? 'Instant In-App Deletion' : 'Penghapusan Langsung di Dalam Aplikasi'}
              </h3>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 ml-auto">
                {language === 'en' ? 'Fastest' : 'Tercepat'}
              </span>
            </div>
            <p className="text-xs text-slate-600 mb-3">
              {language === 'en'
                ? 'You can delete your account directly inside the Lovy app without waiting for email verification:'
                : 'Anda dapat menghapus akun secara langsung di dalam aplikasi Lovy tanpa menunggu verifikasi email:'}
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-white p-2.5 rounded-lg border border-slate-200">
              <span className="text-emerald-700">Profile (Profil)</span>
              <span className="text-slate-400">→</span>
              <span className="text-emerald-700">Settings (Pengaturan)</span>
              <span className="text-slate-400">→</span>
              <span className="text-rose-600 underline">Delete Account (Hapus Akun)</span>
            </div>
          </div>

          {/* Option 2: Email Request Generator */}
          <div className="border border-emerald-100 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-white text-xs flex items-center justify-center font-bold">
                2
              </span>
              <Mail className="w-4 h-4 text-slate-700" />
              <h3 className="text-sm font-bold text-slate-900">
                {language === 'en' ? 'Request Deletion via Support Email' : 'Kirim Permintaan via Email Dukungan'}
              </h3>
            </div>
            <p className="text-xs text-slate-600 mb-3">
              {language === 'en'
                ? `Send an email from your registered Google account to ${APP_DETAILS.deletionEmail} with the subject "Request Account Deletion". You can fill out the form below to auto-generate your request:`
                : `Kirim email dari akun Google Anda yang terdaftar ke ${APP_DETAILS.deletionEmail} dengan subjek "Request Account Deletion". Anda dapat mengisi form di bawah untuk otomatis menyiapkan draf email:`}
            </p>

            <div className="space-y-3 bg-slate-50/70 p-3.5 rounded-xl border border-slate-100">
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  {language === 'en' ? 'Your Registered Google Email:' : 'Email Google yang Terdaftar:'}
                </label>
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="e.g. user@gmail.com"
                  className="w-full text-xs px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  {language === 'en' ? 'Lovy Username / Display Name (Optional):' : 'Nama Tampilan di Lovy (Opsional):'}
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="e.g. Alex"
                  className="w-full text-xs px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  {language === 'en' ? 'Reason or Comments (Optional):' : 'Alasan atau Pesan Tambahan (Opsional):'}
                </label>
                <input
                  type="text"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder={
                    language === 'en' ? 'e.g. No longer using the service' : 'misal: Sudah tidak menggunakan layanan'
                  }
                  className="w-full text-xs px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <a
                  href={mailtoLink}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white rounded-lg shadow-sm transition-all hover:opacity-95"
                  style={{ backgroundColor: '#23a26d' }}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Open Email Draft' : 'Buka Draf Email'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">{language === 'en' ? 'Copied!' : 'Tersalin!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>{language === 'en' ? 'Copy Text & Address' : 'Salin Teks & Alamat'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{language === 'en' ? 'Verified Deletion Pipeline' : 'Jalur Penghapusan Terverifikasi'}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-all cursor-pointer"
          >
            {language === 'en' ? 'Close' : 'Tutup'}
          </button>
        </div>
      </div>
    </div>
  );
};
