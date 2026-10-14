import { socials } from '@/lib/site';
import { SocialIcon } from './Icons';

// Seuls les réseaux dont l'URL est renseignée (lib/site.ts) sont affichés.
export function Socials({ className = '' }: { className?: string }) {
  return (
    <ul className={`social ${className}`}>
      {socials
        .filter((s) => s.href)
        .map((s) => (
          <li key={s.key}>
            <a href={s.href} aria-label={s.label} title={s.label} target="_blank" rel="noopener noreferrer">
              <SocialIcon name={s.key} />
            </a>
          </li>
        ))}
    </ul>
  );
}
