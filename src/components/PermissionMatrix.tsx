import React from 'react';
import { Camera, Image, Mic, MapPin, ShieldAlert, CheckCircle2, Sliders } from 'lucide-react';
import { PERMISSION_LIST } from '../data/privacyContent';

interface PermissionMatrixProps {
  language: 'en' | 'id';
}

export const PermissionMatrix: React.FC<PermissionMatrixProps> = ({ language }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera':
        return <Camera className="w-4 h-4 text-emerald-700" />;
      case 'Image':
        return <Image className="w-4 h-4 text-teal-700" />;
      case 'Mic':
        return <Mic className="w-4 h-4 text-emerald-600" />;
      case 'MapPin':
        return <MapPin className="w-4 h-4 text-emerald-700" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-4 h-4 text-amber-600" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-emerald-100 p-5 shadow-2xs mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-emerald-100 text-emerald-800">
              <Sliders className="w-3.5 h-3.5" />
            </span>
            <h3 className="text-sm font-bold text-slate-900">
              {language === 'en'
                ? 'Device Permissions & User Control Overview'
                : 'Ikhtisar Izin Perangkat & Kendali Pengguna'}
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {language === 'en'
              ? 'Lovy operates on a principle of least privilege. Permissions are requested contextually and can be revoked at any time in your phone Settings.'
              : 'Lovy beroperasi dengan prinsip izin minimal. Izin hanya diminta saat diperlukan dan dapat dicabut kapan saja melalui Pengaturan ponsel Anda.'}
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-50 text-[11px] text-emerald-800 border border-emerald-200 font-medium self-start sm:self-auto">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>{language === 'en' ? 'Revocable Anytime' : 'Dapat Dicabut Kapan Saja'}</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500">
              <th className="pb-2.5 font-semibold">{language === 'en' ? 'Permission' : 'Izin'}</th>
              <th className="pb-2.5 font-semibold hidden md:table-cell">Android Manifest Key</th>
              <th className="pb-2.5 font-semibold">{language === 'en' ? 'Why It Is Used' : 'Tujuan Penggunaan'}</th>
              <th className="pb-2.5 font-semibold text-right">{language === 'en' ? 'Status' : 'Sifat'}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {PERMISSION_LIST.map((perm, idx) => (
              <tr key={idx} className="hover:bg-emerald-50/30 transition-colors">
                <td className="py-3 pr-3 font-medium text-slate-900">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-emerald-50/80 border border-emerald-100 flex-shrink-0">
                      {getIcon(perm.icon)}
                    </span>
                    <span>{perm.name}</span>
                  </div>
                </td>
                <td className="py-3 pr-3 text-slate-500 font-mono text-[11px] hidden md:table-cell">
                  {perm.androidName}
                </td>
                <td className="py-3 pr-3 text-slate-600 leading-relaxed max-w-md">
                  {language === 'en' ? perm.purposeEn : perm.purposeId}
                </td>
                <td className="py-3 text-right">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600">
                    {language === 'en' ? 'Optional / Contextual' : 'Opsional / Sesuai Aksi'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-slate-500 gap-2">
        <span>
          💡{' '}
          {language === 'en'
            ? 'To modify permissions on Android: Settings > Apps > Lovy > Permissions.'
            : 'Untuk mengubah izin di Android: Pengaturan > Aplikasi > Lovy > Izin.'}
        </span>
        <a
          href="#section-2"
          className="text-emerald-700 font-semibold hover:underline self-end sm:self-auto"
        >
          {language === 'en' ? 'Read full data collection details ->' : 'Baca rincian lengkap pengumpulan data ->'}
        </a>
      </div>
    </div>
  );
};
