'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, X, Target, Compass, Binary, TrendingUp, Send } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { getProjects } from '@/lib/projects';
import { Project } from '@/lib/types';

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const { lang } = useLanguage();
  const [imgIndex, setImgIndex] = useState(0);
  const [challenge, vision, approach] = project.story.split('||');
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-ink/90 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.2 }}
    >
      <motion.div
        className="bg-paper w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row relative"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: reduceMotion ? 0 : 16, scale: reduceMotion ? 1 : 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: reduceMotion ? 0 : 16, scale: reduceMotion ? 1 : 0.98 }}
        transition={{ duration: reduceMotion ? 0 : 0.25, ease: 'easeOut' }}
      >
        <button
          onClick={onClose}
          aria-label={lang === 'fr' ? 'Fermer' : 'Close'}
          className="absolute top-5 right-5 z-20 p-2.5 bg-white/90 hover:bg-ink hover:text-paper text-ink rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-full lg:w-2/5 h-56 lg:h-auto relative bg-ink overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={imgIndex}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.3 }}
            >
              <Image src={project.gallery[imgIndex]} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            {project.status === 'in-progress' && (
              <span className="inline-block mb-3 px-2.5 py-1 bg-clay text-white text-[10px] font-semibold uppercase rounded">
                {lang === 'fr' ? 'En cours' : 'In progress'}
              </span>
            )}
            <h3 className="text-white font-display text-2xl leading-tight">{project.title}</h3>
            <p className="text-white/60 text-sm mt-1">{project.category}</p>
          </div>
          {project.gallery.length > 1 && (
            <div className="absolute top-6 left-6 flex gap-1.5">
              {project.gallery.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImgIndex(i)}
                  aria-label={`Image ${i + 1}`}
                  className={`h-1 rounded-full transition-all ${i === imgIndex ? 'bg-white w-8' : 'bg-white/30 w-3'}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="w-full lg:w-3/5 p-8 lg:p-10 overflow-y-auto">
          <div className="space-y-8">
            <section>
              <h4 className="flex items-center gap-2 text-ink font-medium text-sm mb-3">
                <Target className="w-4 h-4 text-clay" />
                {lang === 'fr' ? 'Le défi' : 'The challenge'}
              </h4>
              <p className="text-muted text-sm leading-relaxed">{challenge}</p>
            </section>

            <section>
              <h4 className="flex items-center gap-2 text-ink font-medium text-sm mb-3">
                <Compass className="w-4 h-4 text-accent" />
                {lang === 'fr' ? 'La vision' : 'The vision'}
              </h4>
              <p className="text-muted text-sm leading-relaxed">{vision}</p>
            </section>

            <section>
              <h4 className="flex items-center gap-2 text-accent font-medium text-sm mb-3">
                <Binary className="w-4 h-4" />
                {lang === 'fr' ? "L'approche technique" : 'The build'}
              </h4>
              <div className="bg-white border border-line p-5 rounded-lg">
                <p className="text-ink text-sm leading-relaxed">{approach}</p>
              </div>
            </section>

            <section className="bg-ink p-6 rounded-lg text-paper">
              <h4 className="flex items-center gap-2 text-accent-light font-medium text-sm mb-3">
                <TrendingUp className="w-4 h-4" />
                {lang === 'fr' ? 'Résultat & impact' : 'Result & impact'}
              </h4>
              <p className="text-lg font-display leading-snug">{project.results}</p>
            </section>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/contact"
                className="flex-grow flex items-center justify-center gap-2 py-3.5 bg-accent text-paper rounded-md font-medium hover:bg-accent-dark transition-colors text-sm"
              >
                <Send className="w-4 h-4" />
                {lang === 'fr' ? 'Lancer un projet similaire' : 'Start a similar project'}
              </Link>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 border border-ink text-ink font-medium rounded-md hover:bg-ink hover:text-paper transition-colors text-sm"
                >
                  {lang === 'fr' ? 'Visiter' : 'Visit'} <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const { lang } = useLanguage();
  return (
    <div className="bg-white border border-line rounded-2xl overflow-hidden flex flex-col h-full group">
      <button onClick={onOpen} className="relative w-full h-56 text-left">
        <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
        <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/30 transition-colors" />
        <div className="absolute top-5 left-5 flex gap-2">
          <span className="px-3 py-1 bg-white/95 text-ink text-[11px] font-medium rounded-full">{project.category}</span>
          {project.status === 'in-progress' && (
            <span className="px-3 py-1 bg-clay text-white text-[11px] font-medium rounded-full">
              {lang === 'fr' ? 'En cours' : 'In progress'}
            </span>
          )}
        </div>
      </button>

      <div className="p-7 flex flex-col flex-grow">
        <h3 className="font-display text-xl text-ink mb-2">{project.title}</h3>
        <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-5">{project.context}</p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.slice(0, 4).map((tech, i) => (
            <span key={i} className="px-2.5 py-1 bg-paper border border-line rounded text-[11px] text-muted">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto pt-5 border-t border-line">
          <button onClick={onOpen} className="text-sm font-medium text-ink hover:text-accent transition-colors">
            {lang === 'fr' ? "L'histoire du projet" : 'Project story'} →
          </button>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" aria-label="Visiter" className="p-2 bg-paper border border-line rounded-md hover:bg-ink hover:text-paper transition-colors">
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function PortfolioContent() {
  const { lang } = useLanguage();
  const [selected, setSelected] = useState<Project | null>(null);
  const projects = getProjects(lang);

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-accent mb-4">
            {lang === 'fr' ? 'Réalisations' : 'Portfolio'}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-ink mb-6">
            {lang === 'fr' ? (
              <>L&rsquo;impact par <em className="not-italic text-accent">la donnée</em>.</>
            ) : (
              <>Impact through <em className="not-italic text-accent">data</em>.</>
            )}
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            {lang === 'fr'
              ? "L'histoire derrière chaque projet, de l'ingénierie environnementale aux solutions digitales sur mesure."
              : 'The story behind every project, from environmental engineering to tailored digital solutions.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={() => setSelected(p)} />
          ))}
        </div>

        <AnimatePresence>
          {selected && <ProjectModal key={selected.id} project={selected} onClose={() => setSelected(null)} />}
        </AnimatePresence>

        <div className="mt-24 p-12 lg:p-16 bg-ink rounded-2xl text-center">
          <h2 className="font-display text-3xl lg:text-4xl text-paper mb-6">
            {lang === 'fr' ? 'On lance votre projet ?' : 'Shall we start your project?'}
          </h2>
          <p className="text-paper/60 text-lg mb-10 max-w-xl mx-auto">
            {lang === 'fr'
              ? 'Confiez-moi vos défis data ou web pour transformer votre vision en réalité technique.'
              : 'Trust me with your data or web challenges to turn your vision into technical reality.'}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-dark text-paper font-medium rounded-md transition-colors"
          >
            <Send className="w-4 h-4" />
            {lang === 'fr' ? 'Me contacter' : 'Contact me'}
          </Link>
        </div>
      </div>
    </div>
  );
}
