'use client';

import { useEffect, useRef, useState } from 'react';

// La vidéo n'apparaît (fondu 1,2 s) qu'une fois des images disponibles : l'affiche porte le premier rendu.
export function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reveal = () => setReady(true);
    if (video.readyState >= 3) reveal();
    else video.addEventListener('loadeddata', reveal, { once: true });

    // Certains navigateurs mobiles bloquent l'autoplay jusqu'au premier geste.
    const kick = () => {
      const p = video.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    };
    kick();
    window.addEventListener('touchstart', kick, { once: true, passive: true });
    window.addEventListener('click', kick, { once: true });
    return () => {
      video.removeEventListener('loadeddata', reveal);
      window.removeEventListener('touchstart', kick);
      window.removeEventListener('click', kick);
    };
  }, []);

  return (
    <video
      ref={ref}
      className={ready ? 'is-ready' : undefined}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
