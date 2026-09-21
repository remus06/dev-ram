'use client';

import { Monitor, Settings2, PieChart, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const SERVICES = {
  fr: [
    {
      title: 'BI & Dashboards',
      icon: PieChart,
      description: 'Tableaux de bord interactifs (Power BI) pour piloter vos indicateurs en temps réel.',
      benefits: ['Aide à la décision', 'Suivi automatique', 'Visualisation claire'],
      example: 'Suivi des ventes ou indicateurs environnementaux.',
      targets: ['PME', 'Collectivités']
    },
    {
      title: 'Automatisation',
      icon: Settings2,
      description: 'Automatisation de vos tâches répétitives via Python ou Excel.',
      benefits: ['Gain de productivité', 'Zéro erreur humaine', 'Flux fluides'],
      example: 'Robot de mise à jour de fichiers de suivi.',
      targets: ['Tous secteurs']
    },
    {
      title: 'Sites vitrines & SEO',
      icon: Monitor,
      description: 'Sites web modernes, sécurisés et optimisés pour le référencement naturel.',
      benefits: ['Visibilité professionnelle', 'Acquisition clients', 'Responsive'],
      example: "Site vitrine pour bureau d'études ou artisan.",
      targets: ['Indépendants', 'TPE']
    }
  ],
  en: [
    {
      title: 'BI & Dashboards',
      icon: PieChart,
      description: 'Interactive dashboards (Power BI) to monitor your KPIs in real time.',
      benefits: ['Decision support', 'Automatic tracking', 'Clear visualization'],
      example: 'Sales tracking or environmental indicators.',
      targets: ['SME', 'Public sector']
    },
    {
      title: 'Automation',
      icon: Settings2,
      description: 'Automation of repetitive tasks via Python or Excel.',
      benefits: ['Productivity gain', 'Zero human error', 'Seamless flows'],
      example: 'Tracking file update bot.',
      targets: ['All sectors']
    },
    {
      title: 'Websites & SEO',
      icon: Monitor,
      description: 'Modern, secure websites optimized for organic search ranking.',
      benefits: ['Professional presence', 'Client acquisition', 'Responsive design'],
      example: 'Showcase site for consulting firms or craftspeople.',
      targets: ['Freelancers', 'Small business']
    }
  ]
};

export function ServicesContent() {
  const { lang } = useLanguage();
  const services = SERVICES[lang];

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-16">
          <h1 className="font-display text-4xl sm:text-5xl text-ink mb-4">
            {lang === 'fr' ? 'Services' : 'Services'}
          </h1>
          <p className="text-lg text-muted">
            {lang === 'fr'
              ? 'Une expertise hybride pour vos besoins de suivi et de visibilité.'
              : 'Hybrid expertise for your tracking and visibility needs.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="border border-line rounded-lg p-8 bg-white/40 flex flex-col">
                <Icon className="w-8 h-8 text-accent mb-6" />
                <h3 className="font-display text-2xl text-ink mb-3">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6">{s.description}</p>

                <div className="mb-6">
                  <h4 className="flex items-center gap-2 text-sm font-medium text-ink mb-3">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    {lang === 'fr' ? 'Bénéfices' : 'Benefits'}
                  </h4>
                  <ul className="space-y-1.5">
                    {s.benefits.map((b, j) => (
                      <li key={j} className="text-sm text-muted flex items-center gap-2">
                        <span className="w-1 h-1 bg-accent rounded-full" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-paper border border-line rounded-md mt-auto">
                  <p className="text-sm text-ink/80 italic">« {s.example} »</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {s.targets.map((tg, j) => (
                    <span key={j} className="px-2.5 py-1 border border-line text-xs text-muted rounded">
                      {tg}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
