'use client';

import Link from 'next/link';
import { Database, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="bg-ink text-paper/70 py-16 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-paper font-display font-semibold text-xl flex items-center gap-2">
              <Database className="w-5 h-5 text-accent-light" />
              ObserveByte
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              {lang === 'fr'
                ? 'Expertise Data, BI & automatisation. Faire parler la donnée pour vos métiers.'
                : 'Data, BI & automation expertise. Making data speak for your business.'}
            </p>
            <div className="space-y-2 pt-2">
              <a href="mailto:ramy.mahdjoubi@gmail.com" className="flex items-center gap-3 text-sm hover:text-paper transition-colors">
                <Mail className="w-4 h-4 text-accent-light" />
                ramy.mahdjoubi@gmail.com
              </a>
              <a href="tel:0033753131897" className="flex items-center gap-3 text-sm hover:text-paper transition-colors">
                <Phone className="w-4 h-4 text-accent-light" />
                07 53 13 18 97
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-paper font-semibold mb-4 text-sm">{lang === 'fr' ? 'Navigation' : 'Explore'}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-paper transition-colors">{lang === 'fr' ? 'Accueil' : 'Home'}</Link></li>
              <li><Link href="/services" className="hover:text-paper transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-paper transition-colors">Portfolio</Link></li>
              <li><Link href="/a-propos" className="hover:text-paper transition-colors">{lang === 'fr' ? 'À propos' : 'About'}</Link></li>
              <li><Link href="/contact" className="hover:text-paper transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-paper font-semibold mb-4 text-sm">{lang === 'fr' ? 'Informations légales' : 'Legal information'}</h4>
            <div className="text-sm space-y-2">
              <p className="flex justify-between border-b border-white/10 pb-2">
                <span>{lang === 'fr' ? 'Raison sociale' : 'Legal name'}</span>
                <span className="text-paper/90">Ramy MAHDJOUBI</span>
              </p>
              <p className="flex justify-between border-b border-white/10 pb-2">
                <span>SIREN</span>
                <span className="text-paper/90">100 774 579</span>
              </p>
              <p className="flex justify-between pb-2">
                <span>{lang === 'fr' ? 'Localisation' : 'Location'}</span>
                <span className="text-paper/90">Blagnac (Toulouse)</span>
              </p>
              <div className="flex gap-4 pt-2">
                <Link href="/mentions-legales" className="underline hover:text-paper transition-colors">
                  {lang === 'fr' ? 'Mentions légales' : 'Legal notice'}
                </Link>
                <Link href="/confidentialite" className="underline hover:text-paper transition-colors">
                  {lang === 'fr' ? 'Confidentialité' : 'Privacy'}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-paper/40">
          <p>&copy; {new Date().getFullYear()} ObserveByte — Ramy MAHDJOUBI.</p>
          <p>{lang === 'fr' ? 'TVA non applicable, art. 293 B du CGI' : 'VAT not applicable, art. 293 B of the CGI'}</p>
        </div>
      </div>
    </footer>
  );
}
