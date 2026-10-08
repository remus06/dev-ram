import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DetailPage } from '@/components/DetailPage';
import { approches } from '@/lib/content';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return approches.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = approches.find((a) => a.slug === slug);
  if (!page) return {};
  return { title: page.title, description: page.description, alternates: { canonical: `/approches/${page.slug}` } };
}

export default async function ApprochePage({ params }: Props) {
  const { slug } = await params;
  const page = approches.find((a) => a.slug === slug);
  if (!page) notFound();
  return (
    <DetailPage
      page={page}
      back={{ href: '/approches', label: 'Toutes les approches' }}
      related={approches.filter((a) => a.slug !== slug).map((a) => ({ href: `/approches/${a.slug}`, title: a.title }))}
    />
  );
}
