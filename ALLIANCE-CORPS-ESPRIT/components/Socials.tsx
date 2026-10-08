import { socials } from '@/lib/site';
import { SocialIcon } from './Icons';

// Les réseaux sans URL renseignée pointent vers « # » en attendant le lien (voir lib/site.ts).
export function Socials({ className = '' }: { className?: string }) {
  return (
    <ul className={`social ${className}`}>
      {socials.map((s) => (
        <li key={s.key}>
          <a
            href={s.href || '#'}
            aria-label={s.label}
            title={s.label}
            {...(s.href ? { target: '_blank', rel: 'noopener noreferrer' } : { 'data-todo': `lien ${s.label} à renseigner` })}
          >
            <SocialIcon name={s.key} />
          </a>
        </li>
      ))}
    </ul>
  );
}
