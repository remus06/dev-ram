'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { navLinks, site } from '@/lib/site';
import { Socials } from './Socials';
import { CalendarIcon, PhoneIcon } from './Icons';

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(solid);
  const [pastHero, setPastHero] = useState(solid);

  const setMenu = useCallback((next: boolean) => {
    setOpen(next);
    document.body.classList.toggle('menu-open', next);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(solid || window.scrollY > 24);
      setPastHero(solid || window.scrollY > window.innerHeight * 0.6);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenu(false);
    };
    const onResize = () => {
      if (window.innerWidth > 1180) setMenu(false);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      document.body.classList.remove('menu-open');
    };
  }, [solid, setMenu]);

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-menu' : ''}`}>
        <Link className="logo rise d1" href="/" aria-label={`${site.name} — accueil`} onClick={() => setMenu(false)}>
          Alliance <em>Corps</em> Esprit
        </Link>

        <nav className="nav__links" aria-label="Navigation principale">
          <ul>
            {navLinks.map((l, i) => (
              <li key={l.href} className={`rise d${i + 2}`}>
                <Link href={`/${l.href}`}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__right">
          <Socials className="rise d6" />
          <a className="btn-play nav__cta rise d7" href={site.booking} target="_blank" rel="noopener noreferrer">
            Prendre rendez-vous
          </a>
          <button
            className={`burger rise d7${open ? ' is-active' : ''}`}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            aria-controls="menu"
            onClick={() => setMenu(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`menu${open ? ' is-open' : ''}`} id="menu" onClick={(e) => (e.target as HTMLElement).closest('a') && setMenu(false)}>
        <nav aria-label="Navigation mobile">
          <ul className="menu__list">
            {[...navLinks, { href: '#contact', label: 'Contact' }].map((l) => (
              <li key={l.href}>
                <Link href={`/${l.href}`}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="menu__rule" />
        <div className="menu__foot">
          <a className="btn-play" href={site.booking} target="_blank" rel="noopener noreferrer">
            Prendre rendez-vous
          </a>
          <a className="tel" href={site.phone.href}>
            {site.phone.display}
          </a>
        </div>
      </div>

      <div className={`mobile-cta${pastHero && !open ? ' is-visible' : ''}`}>
        <a className="mobile-cta__call" href={site.phone.href}>
          <PhoneIcon /> Appeler
        </a>
        <a className="mobile-cta__book" href={site.booking} target="_blank" rel="noopener noreferrer">
          <CalendarIcon /> Prendre rendez-vous
        </a>
      </div>
    </>
  );
}
