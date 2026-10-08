import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-page py-28 text-center">
      <p className="kicker">Erreur 404</p>
      <h1 className="h-display mt-3 text-5xl">Cette page n&apos;existe pas</h1>
      <Link href="/" className="btn-primary mt-8">Retour à l&apos;accueil</Link>
    </section>
  );
}
