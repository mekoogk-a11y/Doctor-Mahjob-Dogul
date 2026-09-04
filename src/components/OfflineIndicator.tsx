import React from 'react';
import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../hooks/usePWAInstall';
import { Language } from '../types';

interface Props {
  language: Language;
}

export const OfflineIndicator: React.FC<Props> = ({ language }) => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  const messages = {
    en: 'Offline Mode — Cached lessons & resources are available.',
    ar: 'وضع العمل بدون إنترنت — الدروس والموارد المحفوظة متاحة للتصفح.',
    es: 'Modo sin conexión — Lecciones y recursos en caché disponibles.',
  };

  return (
    <div
      id="offline-banner"
      className="fixed bottom-4 left-4 z-50 flex items-center gap-2.5 rounded-xl bg-amber-600/95 text-white px-4 py-2.5 text-xs font-semibold shadow-xl backdrop-blur-xs border border-amber-400/30 animate-bounce"
    >
      <WifiOff className="w-4 h-4 text-amber-100 shrink-0" />
      <span>{messages[language]}</span>
    </div>
  );
};
