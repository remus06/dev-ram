'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';

const GROUPS = {
  fr: [
    {
      title: 'Data & bases de données',
      skills: ['SQL', 'PostgreSQL', 'PostGIS', 'DuckDB', 'Pandas']
    },
    {
      title: 'BI & visualisation',
      skills: ['Power BI', 'Tableau', 'Grafana', 'Dashboards']
    },
    {
      title: 'Automatisation',
      skills: ['Python', 'Scripts ETL', 'Excel avancé', 'API']
    },
    {
      title: 'Web',
      skills: ['Next.js', 'React', 'SEO technique', 'Sites vitrines']
    }
  ],
  en: [
    { title: 'Data & databases', skills: ['SQL', 'PostgreSQL', 'PostGIS', 'DuckDB', 'Pandas'] },
    { title: 'BI & visualization', skills: ['Power BI', 'Tableau', 'Grafana', 'Dashboards'] },
    { title: 'Automation', skills: ['Python', 'ETL scripts', 'Advanced Excel', 'API'] },
    { title: 'Web', skills: ['Next.js', 'React', 'Technical SEO', 'Showcase sites'] }
  ]
};

const COMMANDS = [
  'python pipeline_etl.py --run',
  "SELECT kpi FROM production WHERE year = 2026;",
  'power-bi refresh --dataset ventes',
  'next build && next start'
];

export function ExpertiseShowcase() {
  const { lang } = useLanguage();
  const groups = GROUPS[lang];
  const [cmdIndex, setCmdIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setCmdIndex((i) => (i + 1) % COMMANDS.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 border-b border-line overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: 'easeOut' }}
        >
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-medium text-accent mb-4">
              {lang === 'fr' ? 'Expertise' : 'Expertise'}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink mb-4">
              {lang === 'fr' ? 'Ce que je fais tourner au quotidien.' : 'What runs behind the scenes, daily.'}
            </h2>
            <p className="text-muted leading-relaxed">
              {lang === 'fr'
                ? "Une double compétence technique : traitement de la donnée et mise en forme décisionnelle, du script Python au dashboard livré."
                : 'A dual technical skillset: data processing and decision-ready output, from the Python script to the delivered dashboard.'}
            </p>
          </div>

          {/* Bandeau terminal — un seul élément animé, pas de cascade par carte */}
          <div className="bg-ink rounded-xl p-5 mb-12 font-mono text-sm flex items-center gap-3 max-w-xl">
            <span className="text-accent-light shrink-0">$</span>
            <span className="text-paper/90 truncate" aria-live="polite">
              {COMMANDS[cmdIndex]}
            </span>
            <span className="w-2 h-4 bg-accent-light shrink-0 animate-pulse" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {groups.map((group, i) => (
              <div key={i} className="border border-line rounded-lg p-6 bg-white/40">
                <h3 className="text-sm font-medium text-ink mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span key={skill} className="px-2.5 py-1 bg-paper border border-line rounded text-xs text-muted">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
