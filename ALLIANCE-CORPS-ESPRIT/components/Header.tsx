'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { nav, site } from '@/lib/site';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-sand/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl font-semibold text-ink">{site.name}</span>
          <span className="mt-0.5 text-[11px] uppercase tracking-[0.16em] text-muted">{site.practitioner}</span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`text-sm transition-colors hover:text-sage-dark ${
                isActive(item.href) ? 'font-semibold text-sage-dark' : 'text-ink/75'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-2.5">
            Prendre rendez-vous
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Navigation mobile" className="border-t border-line bg-sand md:hidden">
          <div className="container-page flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-3 text-base ${isActive(item.href) ? 'font-semibold text-sage-dark' : 'text-ink'}`}
              >
                {item.label}
              </Link>
            ))}
            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary my-3">
              Prendre rendez-vous
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
