'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Database, Linkedin, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { UpworkIcon } from './UpworkIcon';

const NAV = [
  { path: '/services', fr: 'Services', en: 'Services' },
  { path: '/portfolio', fr: 'Portfolio', en: 'Portfolio' },
  { path: '/a-propos', fr: 'À propos', en: 'About' }
];

export function Header() {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-paper/95 backdrop-blur border-b border-line">
      <div className="bg-ink text-paper py-3 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="p-1.5 bg-accent rounded-md">
              <Database className="text-paper w-4 h-4" />
            </div>
            <span className="font-display font-semibold text-lg tracking-tight">
              Observe<span className="text-accent-light">Byte</span>
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center bg-black/30 rounded-md p-0.5 border border-white/10">
              <button
                onClick={() => setLang('fr')}
                className={`px-2 py-1 text-[11px] font-semibold rounded transition-colors ${lang === 'fr' ? 'bg-accent text-paper' : 'text-white/50 hover:text-white'}`}
              >
                FR
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-1 text-[11px] font-semibold rounded transition-colors ${lang === 'en' ? 'bg-accent text-paper' : 'text-white/50 hover:text-white'}`}
              >
                EN
              </button>
            </div>

            <a href="https://www.linkedin.com/in/ramy-mahdjoubi" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 bg-white/5 hover:bg-accent rounded-full transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://www.upwork.com/freelancers/~0142354e34b6c25d71" target="_blank" rel="noreferrer" aria-label="Upwork" className="p-2 bg-white/5 hover:bg-[#14a800] rounded-full transition-colors">
              <UpworkIcon className="w-4 h-4" />
            </a>
            <a href="https://wa.me/33753131897" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="p-2 bg-white/5 hover:bg-emerald-600 rounded-full transition-colors">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-paper overflow-x-auto no-scrollbar">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between py-3 min-w-max">
            <div className="flex items-center gap-1">
              <Link
                href="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/') ? 'text-accent' : 'text-muted hover:text-ink'}`}
              >
                {lang === 'fr' ? 'Accueil' : 'Home'}
              </Link>
              {NAV.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.path) ? 'text-accent' : 'text-muted hover:text-ink'}`}
                >
                  {lang === 'fr' ? link.fr : link.en}
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              className={`ml-4 flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive('/contact') ? 'bg-ink text-paper' : 'bg-accent text-paper hover:bg-accent-dark'
              }`}
            >
              <Send className="w-3.5 h-3.5" />
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
