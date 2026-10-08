import type { SocialKey } from '@/lib/site';

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6 } as const;

export function SocialIcon({ name }: { name: SocialKey }) {
  switch (name) {
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" {...stroke} />
          <circle cx="12" cy="12" r="4.1" {...stroke} />
          <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16.4 3c.3 2.1 1.7 3.6 3.6 3.8v3a6.9 6.9 0 0 1-3.6-1.1v6.4A5.9 5.9 0 1 1 10.5 9.2c.3 0 .6 0 .9.1v3.2a2.7 2.7 0 1 0 1.9 2.6V3h3.1Z"
          />
        </svg>
      );
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M13.6 21v-7.6h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.1H8v3h2.6V21h3Z"
          />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...stroke} strokeLinejoin="round" d="M4 20l1.2-3.9A8.4 8.4 0 1 1 8.3 19L4 20Z" />
          <path
            fill="currentColor"
            d="M9.2 7.6c.3-.3.8-.3 1 .1l.9 1.9c.1.3 0 .6-.2.8l-.6.7c.6 1.2 1.6 2.2 2.8 2.8l.7-.6c.2-.2.5-.3.8-.2l1.9.9c.4.2.5.7.2 1l-.8.9c-.4.4-1 .6-1.6.4-2.8-.9-5-3.1-5.9-5.9-.2-.6 0-1.2.4-1.6l.4-.2Z"
          />
        </svg>
      );
  }
}

export function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...stroke} d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" {...stroke} />
    </svg>
  );
}

export function NavigateIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...stroke} strokeLinejoin="round" d="M20 4 4 10.5l7 2.5 2.5 7L20 4Z" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        {...stroke}
        strokeLinejoin="round"
        d="M6.6 3.8h2.6l1.4 3.6-1.8 1.2a10 10 0 0 0 4.6 4.6l1.2-1.8 3.6 1.4v2.6c0 1-.8 1.8-1.8 1.8A14.2 14.2 0 0 1 4.8 5.6c0-1 .8-1.8 1.8-1.8Z"
      />
    </svg>
  );
}

export function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="3" {...stroke} />
      <path {...stroke} d="M3.5 10h17M8 3v4M16 3v4" />
    </svg>
  );
}
