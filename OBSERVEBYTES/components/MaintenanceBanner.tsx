'use client';

import { AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const T = {
  fr: "Site en cours de finalisation — certains contenus sont encore en cours de mise à jour.",
  en: 'Site under final review — some content is still being updated.'
};

export function MaintenanceBanner() {
  const { lang } = useLanguage();

  return (
    <div className="bg-amber-500 text-ink">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-center gap-2 text-center">
        <AlertTriangle className="w-4 h-4 shrink-0" />
        <p className="text-xs sm:text-sm font-medium">{T[lang]}</p>
      </div>
    </div>
  );
}
