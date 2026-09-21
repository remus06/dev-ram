'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { BarChart3, Zap, Layout, Briefcase, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { ExpertiseShowcase } from '@/components/ExpertiseShowcase';

const fadeUp = (reduceMotion: boolean | null, delay = 0) => ({
  initial: { opacity: 0, y: reduceMotion ? 0 : 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : delay, ease: 'easeOut' as const }
});

const CONTENT = {
  fr: {
    badge: 'Ramy MAHDJOUBI — Ingénieur freelance, Toulouse',
    titleA: 'Valorisez vos données',
    titleHighlight: 'métier',
    titleB: 'par l\u2019intelligence digitale.',
    description:
      'ObserveByte transforme vos flux complexes en outils de décision : dashboards interactifs, automatisation de processus et présence web sur mesure.',
    ctaPortfolio: 'Voir le portfolio',
    ctaServices: 'Les services',
    features: [
      { title: 'Dashboards BI', desc: 'Pilotage en temps réel de votre activité via Power BI ou Tableau. Visualisez vos indicateurs essentiels.', icon: BarChart3 },
      { title: 'Automatisation', desc: 'Libérez-vous des tâches répétitives grâce à des scripts Python et SQL qui fluidifient vos processus métier.', icon: Zap },
      { title: 'Présence digitale', desc: 'Sites vitrines modernes, rapides et sécurisés pour indépendants, TPE et PME.', icon: Layout }
    ],
    stats: [
      { label: "Années d'expérience", value: '5+' },
      { label: 'Missions Data & BI', value: '10+' },
      { label: 'Secteurs couverts', value: 'Multi-secteur' }
    ]
  },
  en: {
    badge: 'Ramy MAHDJOUBI — Freelance engineer, Toulouse',
    titleA: 'Turn your business',
    titleHighlight: 'data',
    titleB: 'into digital intelligence.',
    description:
      'ObserveByte transforms complex flows into decision-making tools: interactive dashboards, process automation and a tailored web presence.',
    ctaPortfolio: 'View portfolio',
    ctaServices: 'Services',
    features: [
      { title: 'BI dashboards', desc: 'Real-time monitoring of your business via Power BI or Tableau. Visualize the KPIs that matter.', icon: BarChart3 },
      { title: 'Automation', desc: 'Free yourself from repetitive tasks with Python and SQL scripts that streamline your workflows.', icon: Zap },
      { title: 'Digital presence', desc: 'Modern, fast and secure websites for freelancers and small businesses.', icon: Layout }
    ],
    stats: [
      { label: 'Years of experience', value: '5+' },
      { label: 'Data & BI projects', value: '10+' },
      { label: 'Sectors covered', value: 'Multi-sector' }
    ]
  }
};

export default function HomePage() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];
  const reduceMotion = useReducedMotion();

  return (
    <div>
      <section className="border-b border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="max-w-2xl">
            <motion.p className="text-sm font-medium text-accent mb-6" {...fadeUp(reduceMotion, 0)}>
              {t.badge}
            </motion.p>
            <motion.h1 className="font-display text-4xl sm:text-6xl leading-[1.05] text-ink mb-8" {...fadeUp(reduceMotion, 0.08)}>
              {t.titleA} <em className="not-italic text-accent">{t.titleHighlight}</em> {t.titleB}
            </motion.h1>
            <motion.p className="text-lg text-muted leading-relaxed mb-10 max-w-xl" {...fadeUp(reduceMotion, 0.16)}>
              {t.description}
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-3" {...fadeUp(reduceMotion, 0.24)}>
              <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ink text-paper rounded-md font-medium hover:bg-black transition-colors">
                <Briefcase className="w-4 h-4" />
                {t.ctaPortfolio}
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-line text-ink rounded-md font-medium hover:border-accent hover:text-accent transition-colors">
                {t.ctaServices}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.features.map((f, idx) => {
              const Icon = f.icon;
              return (
                <div key={idx} className="border border-line rounded-lg p-8 bg-white/40">
                  <Icon className="w-8 h-8 text-accent mb-6" />
                  <h3 className="font-display text-xl text-ink mb-3">{f.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ExpertiseShowcase />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            {t.stats.map((stat, i) => (
              <div key={i}>
                <p className="font-mono text-3xl text-ink mb-2">{stat.value}</p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
