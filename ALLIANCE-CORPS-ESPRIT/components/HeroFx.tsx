// Mouvements du hero, dessinés en CSS/SVG par-dessus l'image (aucune vidéo à charger) :
// lignes de souffle dorées, halo du soleil qui respire, poussières de lumière, ondes autour des galets, feuilles.
// Les positions sont en % de l'image (cadre .hero__art), avec une variante pour l'image mobile.
export function HeroFx() {
  return (
    <div className="fx" aria-hidden="true">
      <svg className="fx__breath fx__breath--desk" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path pathLength={1} d="M35 58 C 40 63, 33 70, 40 74 S 52 78, 56 86" />
        <path pathLength={1} d="M37 62 C 44 66, 40 74, 47 77 S 58 80, 64 88" />
        <path pathLength={1} d="M33 64 C 36 72, 30 79, 37 84 S 47 90, 50 97" />
      </svg>
      <svg className="fx__breath fx__breath--mob" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path pathLength={1} d="M56 54 C 63 56, 60 62, 68 63 S 80 62, 88 67" />
        <path pathLength={1} d="M55 58 C 62 61, 58 66, 66 68 S 78 69, 84 75" />
      </svg>
      <span className="fx__glow" />
      <span className="fx__dust">
        {Array.from({ length: 12 }, (_, i) => (
          <i key={i} />
        ))}
      </span>
      <span className="fx__ripples">
        <i />
        <i />
        <i />
      </span>
      {[1, 2, 3, 4].map((n) => (
        <svg key={n} className={`fx__leaf fx__leaf--${n}`} viewBox="0 0 40 40">
          <path d="M6 34C6 18 16 7 34 6c0 17-10 28-28 28Z" />
          <path className="vein" d="M7 33 27 13" />
        </svg>
      ))}
    </div>
  );
}
