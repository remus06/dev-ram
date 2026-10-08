'use client';

import { useEffect } from 'react';

// Apparitions au défilement (.rv, .cab-media) et léger parallaxe de la photo du cabinet.
export function ScrollEffects() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.rv, .cab-media'));
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let io: IntersectionObserver | undefined;
    if (reduced || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
    } else {
      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              io?.unobserve(e.target);
            }
          }),
        { threshold: 0.15, rootMargin: '0px 0px -5% 0px' }
      );
      els.forEach((el) => io!.observe(el));
    }

    const media = document.querySelector<HTMLElement>('.cab-media');
    const img = media?.querySelector<HTMLElement>('img');
    const parallax = () => {
      if (!media || !img || reduced) return;
      const r = media.getBoundingClientRect();
      const k = Math.max(-1, Math.min(1, (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight));
      img.style.transform = `translateY(${k * -40}px)`;
    };
    parallax();
    window.addEventListener('scroll', parallax, { passive: true });

    return () => {
      io?.disconnect();
      window.removeEventListener('scroll', parallax);
    };
  }, []);

  return null;
}
