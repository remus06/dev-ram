import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DetailPage } from '@/components/DetailPage';
import { articles } from '@/lib/content';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = articles.find((a) => a.slug === slug);
  if (!page) return {};
  return { title: page.title, description: page.description, alternates: { canonical: `/articles/${page.slug}` } };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const page = articles.find((a) => a.slug === slug);
  if (!page) notFound();
  return (
    <DetailPage
      page={page}
      back={{ href: '/articles', label: 'Tous les articles' }}
      related={articles.filter((a) => a.slug !== slug).map((a) => ({ href: `/articles/${a.slug}`, title: a.title }))}
    />
  );
}
