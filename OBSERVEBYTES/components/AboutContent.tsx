'use client';

import { Anchor, BadgeCheck, Database, Search } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export function AboutContent() {
  const { lang } = useLanguage();

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-medium text-accent mb-4">
              {lang === 'fr' ? "L'ADN d'ObserveByte" : "ObserveByte's DNA"}
            </p>
            <h1 className="font-display text-4xl text-ink mb-8">
              {lang === 'fr' ? "L'expertise de terrain au service de la donnée." : 'Field expertise serving your data.'}
            </h1>

            <div className="space-y-5 text-muted leading-relaxed">
              <p>
                {lang === 'fr'
                  ? 'Fondé par Ramy MAHDJOUBI, ObserveByte est né d\u2019un constat : la technologie ne sert à rien sans une compréhension profonde du métier.'
                  : 'Founded by Ramy MAHDJOUBI, ObserveByte was born from a simple realization: technology is useless without a deep understanding of the business.'}
              </p>
              <p>
                {lang === 'fr'
                  ? "Mon parcours est ancré dans des secteurs exigeants : 3 ans dans la data, 3 ans en aquaculture, et un CMAS*** en plongée sous-marine."
                  : 'My background is rooted in demanding sectors: 3 years as a data analyst, 3 years in aquaculture, and a CMAS*** scuba diving certification.'}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-white border border-line rounded-xl">
                <Database className="text-ink w-6 h-6 mb-3" />
                <h4 className="font-medium text-ink">{lang === 'fr' ? 'Ingénierie data' : 'Data engineering'}</h4>
              </div>
              <div className="p-6 bg-white border border-line rounded-xl">
                <Search className="text-accent w-6 h-6 mb-3" />
                <h4 className="font-medium text-ink">{lang === 'fr' ? 'Analyse métier' : 'Business analysis'}</h4>
              </div>
            </div>
          </div>

          <div className="bg-ink rounded-2xl p-10 text-paper">
            <h2 className="font-display text-2xl mb-8">{lang === 'fr' ? "Champs d'action" : 'Scope of action'}</h2>
            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shrink-0">
                  <Anchor className="w-5 h-5 text-paper" />
                </div>
                <div>
                  <h4 className="font-medium">{lang === 'fr' ? 'Secteur primaire' : 'Primary sector'}</h4>
                  <p className="text-sm text-paper/60 mt-1">{lang === 'fr' ? 'Aquaculture & élevage.' : 'Aquaculture & farming.'}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-clay rounded-lg flex items-center justify-center shrink-0">
                  <BadgeCheck className="w-5 h-5 text-paper" />
                </div>
                <div>
                  <h4 className="font-medium">{lang === 'fr' ? 'Environnement' : 'Environment'}</h4>
                  <p className="text-sm text-paper/60 mt-1">{lang === 'fr' ? 'Données air & SIG.' : 'Air data & GIS.'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
