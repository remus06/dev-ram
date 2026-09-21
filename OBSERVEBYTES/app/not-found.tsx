import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="py-32 text-center max-w-xl mx-auto px-4">
      <p className="font-mono text-accent mb-4">404</p>
      <h1 className="font-display text-3xl text-ink mb-6">Page introuvable</h1>
      <p className="text-muted mb-8">Cette page n&rsquo;existe pas ou plus.</p>
      <Link href="/" className="inline-flex items-center px-6 py-3 bg-ink text-paper rounded-md font-medium">
        Retour à l&rsquo;accueil
      </Link>
    </div>
  );
}
