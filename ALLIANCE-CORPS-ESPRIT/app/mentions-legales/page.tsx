import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { site, siteUrl } from '@/lib/site';

export const metadata: Metadata = { title: 'Mentions légales', robots: { index: false } };

export default function MentionsLegales() {
  return (
    <>
      <PageHeader kicker="Informations" title="Mentions légales" />
      <section className="container-page max-w-prose pt-12">
        <div className="prose-page">
          <h2>Éditeur du site</h2>
          <p>
            {site.practitioner} — {site.legal.status}
            <br />
            {site.address.street}, {site.address.postalCode} {site.address.city}
            <br />
            SIREN {site.legal.siren} — Code APE {site.legal.ape}
            <br />
            Téléphone : {site.phone}
          </p>
          <p>Directrice de la publication : {site.practitioner}.</p>
          <h2>Hébergement</h2>
          <p>[À compléter : nom, adresse et téléphone de l&apos;hébergeur du serveur.]</p>
          <h2>Propriété intellectuelle</h2>
          <p>
            Les textes et images de {siteUrl.replace(/^https?:\/\//, '')} sont la propriété de {site.practitioner}, sauf mention
            contraire. Toute reproduction sans autorisation est interdite.
          </p>
          <h2>Avertissement</h2>
          <p>
            Les approches présentées sur ce site sont des pratiques de bien-être et d&apos;accompagnement. Elles ne remplacent pas un
            diagnostic ni un traitement médical. {site.medicalNotice}
          </p>
        </div>
      </section>
    </>
  );
}
