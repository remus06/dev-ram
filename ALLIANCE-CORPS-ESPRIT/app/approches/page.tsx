import type { Metadata } from 'next';
import { BookingCta } from '@/components/BookingCta';
import { PageCard } from '@/components/PageCard';
import { PageHeader } from '@/components/PageHeader';
import { approches, categories } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Les approches',
  description:
    'Hypnose ericksonienne, sophrologie, méthode Vittoz, Psycho-Bio-Acupressure, EFT et Access Bars : les outils thérapeutiques du cabinet Alliance Corps Esprit à La Destrousse.',
  alternates: { canonical: '/approches' }
};

export default function ApprochesPage() {
  return (
    <>
      <PageHeader
        kicker="Les outils"
        title="Des approches qui tiennent compte de l’être dans sa globalité"
        intro="Selon votre besoin, les séances s'appuient sur des approches corporelles et sensorielles, ou sur des techniques énergétiques."
      />
      {(Object.keys(categories) as (keyof typeof categories)[]).map((key) => (
        <section key={key} className="container-page pt-16">
          <h2 className="h-display text-3xl md:text-4xl">{categories[key].title}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {approches
              .filter((a) => a.category === key)
              .map((a) => (
                <PageCard key={a.slug} page={a} href={`/approches/${a.slug}`} />
              ))}
          </div>
        </section>
      ))}
      <BookingCta />
    </>
  );
}
