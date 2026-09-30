import React, { useState } from 'react';
import { SectionItem, APP_DETAILS } from '../data/privacyContent';
import {
  Link2,
  Check,
  ExternalLink,
  AlertCircle,
  Trash2,
  Mail,
  Copy,
  UserX,
  Flag,
  Globe
} from 'lucide-react';

interface SectionCardProps {
  section: SectionItem;
  language: 'en' | 'id';
  searchQuery: string;
  onOpenDeletionModal: () => void;
}

export const SectionCard: React.FC<SectionCardProps> = ({
  section,
  language,
  searchQuery,
  onOpenDeletionModal,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${section.id}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(id);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  // Text highlighting for search queries
  const highlightText = (text: string) => {
    if (!searchQuery.trim()) return text;
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <mark key={i} className="bg-emerald-200 text-emerald-950 rounded-xs px-0.5 font-medium">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <article
      id={section.id}
      className="scroll-mt-20 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:border-emerald-200 transition-all p-6 sm:p-7 mb-6"
    >
      {/* Section Header */}
      <div className="flex items-start justify-between gap-4 pb-4 mb-5 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <span
            className="w-8 h-8 rounded-lg text-white font-bold text-sm flex items-center justify-center font-mono shadow-xs flex-shrink-0"
            style={{ backgroundColor: '#23a26d' }}
          >
            {section.number}
          </span>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {highlightText(`${section.number}. ${section.title}`)}
              </h2>
              {section.badge && (
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {section.badge}
                </span>
              )}
            </div>
            {section.summary && (
              <p className="text-xs text-slate-500 mt-0.5">{section.summary}</p>
            )}
          </div>
        </div>

        {/* Copy Anchor Button */}
        <button
          onClick={handleCopyLink}
          className="p-2 text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer flex-shrink-0"
          title={language === 'en' ? 'Copy link to this section' : 'Salin tautan ke bagian ini'}
        >
          {copiedLink ? (
            <Check className="w-4 h-4 text-emerald-600" />
          ) : (
            <Link2 className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Paragraphs */}
      {section.content.paragraphs && (
        <div className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed">
          {section.content.paragraphs.map((p, idx) => (
            <p key={idx}>{highlightText(p)}</p>
          ))}
        </div>
      )}

      {/* Subsections (for Section 2: a, b, c, d, e) */}
      {section.content.subsections && (
        <div className="mt-6 space-y-5">
          {section.content.subsections.map((sub) => (
            <div
              key={sub.id}
              id={sub.id}
              className="scroll-mt-24 bg-slate-50/70 rounded-xl p-4 sm:p-5 border border-slate-200/80"
            >
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center uppercase">
                  {sub.letter}
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  {highlightText(`${sub.letter}. ${sub.title}`)}
                </h3>
              </div>

              {sub.description && (
                <p className="text-sm text-slate-600 mb-3">{highlightText(sub.description)}</p>
              )}

              {sub.bulletPoints && (
                <ul className="space-y-2.5 text-sm text-slate-700">
                  {sub.bulletPoints.map((bp, bpIdx) => (
                    <li key={bpIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#23a26d' }} />
                      <div className="leading-relaxed">
                        <strong className="text-slate-900 font-semibold">{highlightText(bp.label)}: </strong>
                        <span>{highlightText(bp.text)}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {/* Special Emphasis / Important Notice (e.g. for Location Section 2.c) */}
              {sub.importantNotice && (
                <div className="mt-4 p-3.5 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start gap-3 text-emerald-950 text-xs sm:text-sm">
                  <AlertCircle className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <p className="font-semibold leading-relaxed">
                    {highlightText(sub.importantNotice)}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Bullet Points */}
      {section.content.bulletPoints && (
        <ul className="mt-4 space-y-3 text-sm text-slate-700">
          {section.content.bulletPoints.map((bp, idx) => (
            <li key={idx} className="flex items-start gap-3 bg-slate-50/60 p-3 rounded-xl border border-slate-100">
              <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#23a26d' }} />
              <div className="leading-relaxed">
                {bp.label && (
                  <strong className="text-slate-900 font-semibold block sm:inline mr-1">
                    {highlightText(bp.label)}:
                  </strong>
                )}
                <span>{highlightText(bp.text)}</span>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* External Links (Section 3: Third Party Policies) */}
      {section.content.externalLinks && (
        <div className="mt-6 pt-5 border-t border-slate-100">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            {language === 'en' ? 'Third-Party Privacy Disclosures' : 'Keterbukaan Privasi Pihak Ketiga'}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {section.content.externalLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/30 transition-all text-xs font-semibold text-slate-800 group"
              >
                <div className="flex items-center gap-2 truncate">
                  <Globe className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                  <span className="truncate">{link.name}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700 flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Steps (Section 6: Account Deletion) */}
      {section.content.steps && (
        <div className="mt-5 space-y-3">
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 sm:p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-3 flex items-center gap-2">
              <Trash2 className="w-4 h-4 text-emerald-700" />
              <span>{language === 'en' ? 'Two Ways to Delete Your Data' : 'Dua Cara Menghapus Data Anda'}</span>
            </h4>
            <div className="space-y-3">
              {section.content.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-emerald-100 text-xs sm:text-sm text-slate-800 font-medium">
                  <span
                    className="w-5 h-5 rounded-full text-white font-bold text-xs flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#23a26d' }}
                  >
                    {idx + 1}
                  </span>
                  <p className="leading-relaxed flex-1">{highlightText(step)}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-emerald-200/60 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={onOpenDeletionModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white rounded-lg shadow-xs transition-all cursor-pointer hover:opacity-95"
                style={{ backgroundColor: '#23a26d' }}
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>
                  {language === 'en'
                    ? 'Open Account Deletion Assistant'
                    : 'Buka Bantuan Hapus Akun'}
                </span>
              </button>

              <a
                href={`mailto:${APP_DETAILS.deletionEmail}?subject=Request%20Account%20Deletion`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-950"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-700" />
                <span>{APP_DETAILS.deletionEmail}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Important Notice */}
      {section.content.importantNotice && (
        <div className="mt-4 p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl flex items-start gap-3 text-emerald-950 text-xs sm:text-sm">
          <AlertCircle className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
          <p className="font-semibold leading-relaxed">
            {highlightText(section.content.importantNotice)}
          </p>
        </div>
      )}

      {/* Special Highlights for Section 7: User Safety */}
      {section.number === 7 && (
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
            <UserX className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">
                {language === 'en' ? 'Instant User Blocking' : 'Pemblokiran Seketika'}
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                {language === 'en'
                  ? 'Block anyone directly from chat or profile to prevent further contact.'
                  : 'Blokir siapa saja langsung dari obrolan atau profil untuk memutus kontak.'}
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
            <Flag className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">
                {language === 'en' ? 'In-App Incident Reporting' : 'Pelaporan Pelanggaran'}
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                {language === 'en'
                  ? 'Reports trigger human moderation review and swift disciplinary action.'
                  : 'Laporan memicu peninjauan tim moderasi dan tindakan tegas.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Contact Info (Section 11) */}
      {section.content.contactInfo && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {section.content.contactInfo.map((info, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 bg-emerald-50/20 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider block mb-1">
                  {info.label}
                </span>
                <span className="text-sm font-bold text-slate-900 break-all">
                  {info.value}
                </span>
              </div>

              {info.type === 'email' && (
                <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center gap-2">
                  <a
                    href={info.link}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-900"
                  >
                    <Mail className="w-3 h-3" />
                    <span>{language === 'en' ? 'Send Email' : 'Kirim Email'}</span>
                  </a>
                  <span className="text-slate-300">·</span>
                  <button
                    onClick={() => handleCopyText(info.value, `email-${idx}`)}
                    className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    {copiedEmail === `email-${idx}` ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700">{language === 'en' ? 'Copied' : 'Tersalin'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-slate-400" />
                        <span>{language === 'en' ? 'Copy' : 'Salin'}</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </article>
  );
};
