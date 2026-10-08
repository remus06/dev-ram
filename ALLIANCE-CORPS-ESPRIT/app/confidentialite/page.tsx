import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Politique de confidentialité', robots: { index: false } };

export default function Confidentialite() {
  return (
    <>
      <PageHeader kicker="Informations" title="Politique de confidentialité" />
      <section className="container-page max-w-prose pt-12">
        <div className="prose-page">
          <h2>Données collectées</h2>
          <p>
            Le formulaire de contact collecte votre nom, votre adresse e-mail, votre téléphone (facultatif) et votre message. Ces
            données servent uniquement à répondre à votre demande et ne sont ni cédées ni utilisées à des fins commerciales.
          </p>
          <h2>Responsable du traitement</h2>
          <p>
            {site.practitioner}, {site.address.street}, {site.address.postalCode} {site.address.city}.
          </p>
          <h2>Durée de conservation</h2>
          <p>Les messages sont conservés le temps nécessaire au traitement de votre demande, puis supprimés.</p>
          <h2>Transmission</h2>
          <p>
            Les messages sont acheminés par e-mail via le prestataire Resend. La prise de rendez-vous en ligne s&apos;effectue sur la
            plateforme Liberlo, soumise à sa propre politique de confidentialité.
          </p>
          <h2>Cookies</h2>
          <p>Ce site n&apos;utilise ni cookie publicitaire ni outil de mesure d&apos;audience.</p>
          <h2>Vos droits</h2>
          <p>
            Vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour l&apos;exercer, contactez
            le cabinet au {site.phone}. Vous pouvez également introduire une réclamation auprès de la CNIL (cnil.fr).
          </p>
        </div>
      </section>
    </>
  );
}
