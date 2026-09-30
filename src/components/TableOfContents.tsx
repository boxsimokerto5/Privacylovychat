import React from 'react';
import { SectionItem } from '../data/privacyContent';

interface TableOfContentsProps {
  sections: SectionItem[];
  activeSectionId: string;
  language: 'en' | 'id';
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  sections,
  activeSectionId,
  language,
}) => {
  return (
    <nav className="p-4 bg-white rounded-xl border border-emerald-100 shadow-2xs">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
        <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
          {language === 'en' ? 'Table of Contents' : 'Daftar Isi Kebijakan'}
        </h3>
        <span className="text-[11px] text-slate-400 font-medium">11 {language === 'en' ? 'Sections' : 'Bagian'}</span>
      </div>

      <ul className="space-y-1">
        {sections.map((section) => {
          const isActive = activeSectionId === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`group flex items-start gap-2.5 px-2.5 py-1.5 rounded-lg text-xs transition-all ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-800 font-semibold border-l-2 border-emerald-600'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span
                  className={`flex-shrink-0 w-4.5 h-4.5 rounded text-[10px] flex items-center justify-center font-mono mt-0.5 ${
                    isActive
                      ? 'text-white'
                      : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                  }`}
                  style={isActive ? { backgroundColor: '#23a26d' } : undefined}
                >
                  {section.number}
                </span>
                <span className="flex-1 leading-snug line-clamp-1">{section.title}</span>
                {section.number === 6 && (
                  <span className="flex-shrink-0 text-[9px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium">
                    {language === 'en' ? 'Deletion' : 'Hapus'}
                  </span>
                )}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
        <p>
          {language === 'en'
            ? 'Binding legal terms for Lovy mobile application users.'
            : 'Ketentuan hukum mengikat untuk pengguna aplikasi Lovy.'}
        </p>
      </div>
    </nav>
  );
};
