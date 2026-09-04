import React, { useState } from 'react';
import { Download, Smartphone, X, CheckCircle2 } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Language } from '../types';

interface Props {
  language: Language;
}

export const PWAInstallButton: React.FC<Props> = ({ language }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [justInstalled, setJustInstalled] = useState(false);

  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    const success = await install();
    if (success) {
      setJustInstalled(true);
      setTimeout(() => setJustInstalled(false), 4000);
    }
  };

  const labels = {
    en: {
      install: 'Install App',
      installed: 'App Installed',
      iosTitle: 'Install on iPhone / iPad',
      iosDesc1: '1. Tap the Share icon in Safari toolbar',
      iosDesc2: '2. Scroll down and choose "Add to Home Screen"',
      close: 'Close',
    },
    ar: {
      install: 'تثبيت التطبيق',
      installed: 'تم التثبيت',
      iosTitle: 'التثبيت على آيفون / آيباد',
      iosDesc1: '١. اضغط على زر المشاركة (Share) في متصفح سفاري',
      iosDesc2: '٢. مرر لأسفل واختر "إضافة إلى الشاشة الرئيسية"',
      close: 'إغلاق',
    },
    es: {
      install: 'Instalar App',
      installed: 'App Instalada',
      iosTitle: 'Instalar en iPhone / iPad',
      iosDesc1: '1. Toca el botón Compartir en la barra de Safari',
      iosDesc2: '2. Desplázate hacia abajo y selecciona "Agregar a inicio"',
      close: 'Cerrar',
    },
  }[language];

  if (justInstalled) {
    return (
      <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-lg border border-emerald-200">
        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
        <span>{labels.installed}</span>
      </div>
    );
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        id="pwa-install-btn"
        onClick={handleInstallClick}
        className="flex items-center gap-1.5 rounded-lg bg-[#1877F2] hover:bg-[#166FE5] text-white px-3 py-1.5 text-xs font-semibold shadow-sm transition-all active:scale-95"
        title="Install Learn Islam on your device"
      >
        <Download className="w-3.5 h-3.5" />
        <span>{labels.install}</span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          id="pwa-ios-install-btn"
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center gap-1.5 rounded-lg bg-blue-50 text-[#1877F2] hover:bg-blue-100 border border-blue-200 px-2.5 py-1.5 text-xs font-semibold transition"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>{labels.install}</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl border border-slate-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#1877F2] flex items-center justify-center text-white font-bold text-sm">
                    LI
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{labels.iosTitle}</h3>
                </div>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <p className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                  {labels.iosDesc1}
                </p>
                <p className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                  {labels.iosDesc2}
                </p>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full rounded-xl bg-[#1877F2] py-2.5 text-sm font-semibold text-white hover:bg-[#166FE5] transition"
              >
                {labels.close}
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  // Fallback indicator button for desktop/mobile browsers that haven't triggered prompt yet
  return (
    <button
      id="pwa-ambient-install-btn"
      onClick={() => {
        if ('serviceWorker' in navigator) {
          alert(
            language === 'ar'
              ? 'يمكنك تثبيت الموقع من قائمة المتصفح بالضغط على (إضافة للشاشة الرئيسية / Install App)'
              : language === 'es'
              ? 'Puedes instalar la app desde el menú de tu navegador seleccionando "Instalar aplicación"'
              : 'You can install this app directly from your browser menu ("Install App" or "Add to Home Screen").'
          );
        }
      }}
      className="hidden md:inline-flex items-center gap-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1.5 text-xs font-semibold transition"
      title="Install App"
    >
      <Download className="w-3.5 h-3.5 text-slate-500" />
      <span>{labels.install}</span>
    </button>
  );
};
