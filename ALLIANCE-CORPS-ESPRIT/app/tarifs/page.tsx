import type { Metadata } from 'next';
import { BookingCta } from '@/components/BookingCta';
import { PageHeader } from '@/components/PageHeader';
import { tarifs } from '@/lib/content';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Tarifs & prestations',
  description: 'Tarifs des séances d’hypnose, de sophrologie, de soins énergétiques et d’Access Bars, séances à partager et ateliers, à La Destrousse.',
  alternates: { canonical: '/tarifs' }
};

function PriceList({ title, items }: { title: string; items: { label: string; duration: string; price: number }[] }) {
  return (
    <div className="rounded-3xl border border-line bg-white/60 p-6 md:p-8">
      <h2 className="font-display text-3xl font-medium">{title}</h2>
      <ul className="mt-6 divide-y divide-line">
        {items.map((t) => (
          <li key={t.label} className="flex items-baseline justify-between gap-4 py-4">
            <span>
              <span className="font-semibold">{t.label}</span>
              {t.duration && <span className="ml-2 text-sm text-muted">{t.duration}</span>}
            </span>
            <span className="font-display text-2xl font-semibold text-sage-dark">{t.price} €</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TarifsPage() {
  return (
    <>
      <PageHeader kicker="Tarifs" title="Tarifs & prestations" intro="Séances individuelles ou à partager, uniquement sur rendez-vous." />

      <section className="container-page grid gap-6 pt-16 lg:grid-cols-2">
        <PriceList title="Séance individuelle" items={tarifs.individuel} />
        <div id="ateliers" className="flex flex-col gap-6">
          <PriceList title="Séance à partager" items={tarifs.partage} />
          <div className="rounded-3xl bg-clay-light p-6 md:p-8">
            <h2 className="font-display text-2xl font-medium">Les ateliers</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {tarifs.ateliers.map((a) => (
                <li key={a} className="rounded-full bg-white/70 px-4 py-1.5 text-sm">{a}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-ink/80">
              Pour les séances à partager, ateliers et groupes, contactez-moi directement au{' '}
              <a href={site.phoneHref} className="font-semibold underline">{site.phone}</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page grid gap-10 pt-16 md:grid-cols-2">
        <div>
          <h2 className="h-display text-3xl">Informations utiles</h2>
          <div className="prose-page mt-2">
            <ul>
              {tarifs.infos.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        </div>
        <div>
          <h2 className="h-display text-3xl">Mutuelles</h2>
          <div className="prose-page mt-2">
            <p>{site.mutuelleNotice}</p>
            <p>Partenaire de Santéclair.</p>
          </div>
        </div>
      </section>

      <BookingCta />
    </>
  );
}
