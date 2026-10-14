import type { BenefitIconName, SocialKey } from '@/lib/site';

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
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M4.6 9.2h3v10.3h-3V9.2Zm1.5-4.9a1.7 1.7 0 1 1 0 3.5 1.7 1.7 0 0 1 0-3.5Zm3.4 4.9h2.9v1.4c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7v5.8h-3v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.2h-2.8V9.2Z"
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

// Icônes au trait des bienfaits (hero).
export function BenefitIcon({ name }: { name: BenefitIconName }) {
  const line = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.3, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
  switch (name) {
    case 'lotus':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path {...line} d="M16 24c-3.2-2.6-4.6-6.4-4.6-10.4 0 0 2.9 1.5 4.6 4.6 1.7-3.1 4.6-4.6 4.6-4.6 0 4-1.4 7.8-4.6 10.4Z" />
          <path {...line} d="M16 24c-4.9 0-8.6-2.6-10.4-6.6 2.6-.4 5.2.2 7.3 1.9M16 24c4.9 0 8.6-2.6 10.4-6.6-2.6-.4-5.2.2-7.3 1.9" />
          <path {...line} d="M16 13.8c-.9-2-1-4.3-.1-6.6 1.2 1.6 1.6 3.4 1.2 5.3M9.5 27h13" />
        </svg>
      );
    case 'moon':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path {...line} d="M20.5 22.6A8.6 8.6 0 0 1 13.2 8a9 9 0 1 0 10.9 12.6 8.5 8.5 0 0 1-3.6 2Z" />
          <path {...line} d="M21.5 8.5v3M20 10h3M24.5 13.2v2M23.5 14.2h2" />
        </svg>
      );
    case 'mind':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path {...line} d="M11.5 26v-3.4c-2.6-1.7-4.2-4.6-4.2-7.8a8.7 8.7 0 0 1 17.2-1.9l1.7 4.2h-2.1v3.3c0 1.3-1 2.3-2.3 2.3h-2.5V26" />
          <path {...line} d="M16.3 18.4s-3.4-2-3.4-4.2a1.8 1.8 0 0 1 3.4-.9 1.8 1.8 0 0 1 3.4.9c0 2.2-3.4 4.2-3.4 4.2Z" />
        </svg>
      );
    case 'sprout':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path {...line} d="M16 26V15M16 17c0-4.4 2.8-7.6 8.2-8.1-.1 5.2-3 8.1-8.2 8.1ZM16 20.5c0-3.4-2.3-5.9-6.6-6.3.1 4 2.4 6.3 6.6 6.3Z" />
          <path {...line} d="M8 26.5c2.6-1 5.2-1.5 8-1.5s5.4.5 8 1.5" />
        </svg>
      );
    case 'sun':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <circle {...line} cx="16" cy="16" r="4.6" />
          <path {...line} d="M16 5.5v2.6M16 23.9v2.6M5.5 16h2.6M23.9 16h2.6M8.6 8.6l1.8 1.8M21.6 21.6l1.8 1.8M8.6 23.4l1.8-1.8M21.6 10.4l1.8-1.8" />
        </svg>
      );
  }
}
