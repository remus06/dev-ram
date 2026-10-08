import type { Metadata } from 'next';
import { PageCard } from '@/components/PageCard';
import { PageHeader } from '@/components/PageHeader';
import { articles } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Acouphènes, hyperacousie, vertiges de Ménière, fibromyalgie : comprendre ces troubles et ce que la sophrologie peut apporter.',
  alternates: { canonical: '/articles' }
};

export default function ArticlesPage() {
  return (
    <>
      <PageHeader kicker="Articles" title="Comprendre pour mieux vivre avec" intro="Quelques troubles fréquemment accompagnés au cabinet, et l'apport de la sophrologie." />
      <section className="container-page pt-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <PageCard key={a.slug} page={a} href={`/articles/${a.slug}`} />
          ))}
        </div>
      </section>
    </>
  );
}
