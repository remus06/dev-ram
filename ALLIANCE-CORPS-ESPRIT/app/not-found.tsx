import Link from 'next/link';
import { LegalLayout } from '@/components/LegalLayout';

export default function NotFound() {
  return (
    <LegalLayout title="Page introuvable">
      <p>Cette page n&apos;existe pas ou plus. Prenez une grande inspiration…</p>
      <p>
        <Link className="btn-play" href="/">
          Revenir à l&apos;accueil
        </Link>
      </p>
    </LegalLayout>
  );
}
