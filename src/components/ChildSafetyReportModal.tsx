import React, { useState } from 'react';
import { X, ShieldAlert, Mail, AlertTriangle, Check, Copy, ExternalLink, Flag } from 'lucide-react';
import { APP_DETAILS } from '../data/privacyContent';

interface ChildSafetyReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'id';
}

export const ChildSafetyReportModal: React.FC<ChildSafetyReportModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [suspectIdentifier, setSuspectIdentifier] = useState('');
  const [incidentType, setIncidentType] = useState('csam_csae');
  const [details, setDetails] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const emailSubject = 'URGENT: Child Safety & CSAE Report - Lovy Chat';

  const emailBodyEn = `URGENT CHILD SAFETY REPORT
To: Lovy Designated Safety Point of Contact (${APP_DETAILS.safetyContactEmail || APP_DETAILS.primaryContactEmail})
Application: ${APP_DETAILS.appName} (${APP_DETAILS.altName})

Report Details:
- Suspected Account Username / ID: ${suspectIdentifier || '[Username, Display Name, or Profile Link]'}
- Nature of Concern: ${incidentType === 'csam_csae' ? 'Child Sexual Abuse Material (CSAM) / Child Sexual Exploitation and Abuse (CSAE)' : incidentType === 'underage' ? 'Underage User (Under 18)' : 'Harmful or Predatory Behavior toward Minors'}
- Description of Incident:
${details || '[Please describe what was observed, including chat messages, photos, or timeline]'}

Timestamp of Incident: ${new Date().toISOString()}

Note: Lovy maintains a strict zero-tolerance policy against CSAM and CSAE. Confirmed violations will be reported to law enforcement and NCMEC.`;

  const emailBodyId = `LAPORAN MENDESAK KESELAMATAN ANAK
Kepada: Kontak Resmi Keselamatan Lovy (${APP_DETAILS.safetyContactEmail || APP_DETAILS.primaryContactEmail})
Aplikasi: ${APP_DETAILS.appName} (${APP_DETAILS.altName})

Rincian Laporan:
- Akun / Nama Pengguna yang Dicurigai: ${suspectIdentifier || '[Nama Pengguna, Profil, atau ID Akun]'}
- Jenis Kekhawatiran: ${incidentType === 'csam_csae' ? 'Materi Pelecehan Seksual Anak (CSAM) / Eksploitasi Seksual Anak (CSAE)' : incidentType === 'underage' ? 'Pengguna di Bawah Umur (Di bawah 18 Tahun)' : 'Perilaku Berbahaya atau Membahayakan Anak'}
- Keterangan Kejadian:
${details || '[Jelaskan apa yang Anda lihat, termasuk waktu, pesan, atau foto yang bersangkutan]'}

Waktu Laporan: ${new Date().toISOString()}

Catatan: Lovy menerapkan kebijakan tanpa toleransi (zero-tolerance) terhadap CSAM dan CSAE. Pelanggaran yang terkonfirmasi akan segera dilaporkan kepada penegak hukum dan NCMEC.`;

  const activeEmailBody = language === 'en' ? emailBodyEn : emailBodyId;
  const safetyEmail = APP_DETAILS.safetyContactEmail || APP_DETAILS.primaryContactEmail;
  const mailtoLink = `mailto:${safetyEmail}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(activeEmailBody)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `To: ${safetyEmail}\nSubject: ${emailSubject}\n\n${activeEmailBody}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-rose-200 shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-50 via-red-50 to-white p-5 border-b border-rose-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl text-white flex items-center justify-center shadow-sm bg-rose-600">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-slate-900">
                  {language === 'en' ? 'Child Safety & CSAE Reporting' : 'Laporan Keselamatan Anak & CSAE'}
                </h2>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-rose-100 text-rose-800 border border-rose-300">
                  {language === 'en' ? 'Zero Tolerance' : 'Nol Toleransi'}
                </span>
              </div>
              <p className="text-xs text-rose-800 font-medium">
                {language === 'en'
                  ? 'Immediate priority review · Designated safety point of contact'
                  : 'Tinjauan prioritas segera · Kontak resmi keselamatan anak'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-white/80 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Policy Summary Callout */}
        <div className="p-5 bg-rose-50/50 border-b border-rose-100">
          <p className="text-xs text-rose-900 leading-relaxed font-medium">
            {language === 'en'
              ? 'Lovy maintains a strict zero-tolerance policy against Child Sexual Abuse Material (CSAM) and Child Sexual Exploitation and Abuse (CSAE). We do not permit any content or behavior that harms or exploits children. Confirmed violations are promptly reported to law enforcement and relevant authorities, including NCMEC.'
              : 'Lovy menerapkan kebijakan tanpa toleransi (zero-tolerance) yang ketat terhadap Materi Pelecehan Seksual Anak (CSAM) dan Eksploitasi serta Pelecehan Seksual Anak (CSAE). Kami tidak mengizinkan konten atau perilaku apa pun yang membahayakan atau mengeksploitasi anak. Pelanggaran yang terkonfirmasi segera dilaporkan ke penegak hukum dan NCMEC.'}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-5 text-xs sm:text-sm text-slate-700">
          {/* Method 1: In-App reporting */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Flag className="w-4 h-4 text-rose-600" />
              <span>{language === 'en' ? 'Method 1: In-App Reporting Tool (Fastest)' : 'Cara 1: Fitur Pelaporan di Dalam Aplikasi (Tercepat)'}</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-2">
              {language === 'en'
                ? 'Inside Lovy, tap the three dots (⋮) on any user profile or message, tap "Report", and select "Child Safety / CSAE Concern". The account is immediately queued for high-priority review and the user will be blocked from contacting you.'
                : 'Di aplikasi Lovy, ketuk ikon titik tiga (⋮) pada profil atau pesan, pilih "Laporkan", lalu pilih "Keselamatan Anak / Masalah CSAE". Akun tersebut akan segera masuk ke antrean prioritas tinggi dan diblokir dari Anda.'}
            </p>
          </div>

          {/* Method 2: Direct Email to Designated Safety Contact */}
          <div className="border border-rose-200 bg-white rounded-xl p-4 space-y-3 shadow-2xs">
            <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5 text-rose-900">
              <Mail className="w-4 h-4 text-rose-600" />
              <span>{language === 'en' ? 'Method 2: Contact Designated Safety Lead' : 'Cara 2: Kontak Langsung Penanggung Jawab Keselamatan'}</span>
            </h3>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {language === 'en' ? 'Report Category' : 'Kategori Laporan'}
              </label>
              <select
                value={incidentType}
                onChange={(e) => setIncidentType(e.target.value)}
                className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-rose-500"
              >
                <option value="csam_csae">
                  {language === 'en'
                    ? 'Child Sexual Abuse Material (CSAM) / Child Sexual Exploitation & Abuse (CSAE)'
                    : 'Materi Pelecehan Seksual Anak (CSAM) / Eksploitasi & Pelecehan Seksual Anak (CSAE)'}
                </option>
                <option value="underage">
                  {language === 'en' ? 'Underage User on Lovy (Under 18)' : 'Pengguna di Bawah Umur (Di bawah 18 tahun)'}
                </option>
                <option value="predatory">
                  {language === 'en' ? 'Predatory or Harmful Behavior towards Minors' : 'Perilaku Berbahaya atau Membahayakan Anak'}
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {language === 'en' ? 'Suspect Display Name / Username / Link (Optional)' : 'Nama Pengguna / Akun yang Dilaporkan (Opsional)'}
              </label>
              <input
                type="text"
                value={suspectIdentifier}
                onChange={(e) => setSuspectIdentifier(e.target.value)}
                placeholder={language === 'en' ? 'e.g., user_123 or profile screenshot' : 'contoh: nama pengguna atau tangkapan layar'}
                className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-rose-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {language === 'en' ? 'Description of Concern' : 'Keterangan Pelanggaran'}
              </label>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={3}
                placeholder={
                  language === 'en'
                    ? 'Provide any context, messages, or descriptions to help our safety team act immediately.'
                    : 'Berikan kronologi atau konteks agar tim keselamatan kami dapat segera mengambil tindakan.'
                }
                className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-rose-500"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={mailtoLink}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg transition-colors shadow-xs"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Send Report to eccko.w4@gmail.com' : 'Kirim Laporan ke eccko.w4@gmail.com'}</span>
              </a>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">{language === 'en' ? 'Template Copied' : 'Tersalin'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>{language === 'en' ? 'Copy Template' : 'Salin Draf'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* External Reporting: NCMEC */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
            <div>
              <span className="font-semibold text-slate-900 block">
                {language === 'en' ? 'Direct NCMEC CyberTipline Reporting' : 'Pelaporan Langsung ke NCMEC CyberTipline'}
              </span>
              <span className="text-slate-500 text-[11px]">
                {language === 'en'
                  ? 'National Center for Missing & Exploited Children'
                  : 'Pusat Nasional untuk Anak Hilang & Dieksploitasi'}
              </span>
            </div>
            <a
              href="https://report.cybertip.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-rose-700 hover:text-rose-900 font-semibold"
            >
              <span>report.cybertip.org</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {language === 'en' ? 'Close' : 'Tutup'}
          </button>
        </div>
      </div>
    </div>
  );
};
