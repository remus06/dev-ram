import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { MediationSection } from '@/components/MediationSection';
import { legal, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  alternates: { canonical: '/confidentialite' }
};

export default function ConfidentialitePage() {
  const booking: string = site.booking;
  const heroVideo: string = site.heroVideo;
  return (
    <LegalLayout title="Confidentialité">
      <h2>Responsable du traitement</h2>
      <p>
        {legal.owner} — {legal.tradeName}, {site.address.street}, {site.address.postalCode} {site.address.city} —{' '}
        <a href={site.phone.href}>{site.phone.display}</a>.
      </p>

      <h2>Formulaire de contact</h2>
      <p>
        Le formulaire recueille votre nom, votre adresse e-mail, votre téléphone (facultatif) et votre message, avec
        votre accord, dans le seul but de répondre à votre demande. Ces informations sont transmises par e-mail à{' '}
        {site.practitioner} par l&apos;intermédiaire du prestataire d&apos;envoi Resend ; elles ne sont ni revendues, ni
        utilisées à des fins publicitaires, et sont supprimées au plus tard 3 ans après le dernier échange.
      </p>
      <p>
        Le site ne comporte ni compte utilisateur, ni outil de mesure d&apos;audience, ni cookie publicitaire.
      </p>

      <h2>Services tiers</h2>
      <ul>
        {booking ? (
          <li>
            <strong>Prise de rendez-vous :</strong> les réservations se font sur Google Agenda, qui traite vos données
            selon sa propre politique de confidentialité.
          </li>
        ) : null}
        <li>
          <strong>Itinéraire et avis :</strong> les boutons Google Maps, Waze et avis Google ouvrent ces services,
          soumis à leurs propres conditions.
        </li>
        <li>
          <strong>Réseaux sociaux et WhatsApp :</strong> les icônes sont de simples liens ; aucun module de suivi
          n&apos;est intégré au site.
        </li>
        {heroVideo ? (
          <li>
            <strong>Vidéo d&apos;accueil :</strong> elle est diffusée depuis un réseau de diffusion de contenu (CDN), qui
            reçoit techniquement l&apos;adresse IP de votre appareil pour l&apos;afficher.
          </li>
        ) : null}
        <li>
          <strong>Hébergement :</strong> {legal.host.name} conserve des journaux techniques (adresse IP, date, page
          demandée) à des fins de sécurité.
        </li>
      </ul>

      <h2>Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement et
        d&apos;opposition sur vos données. Pour l&apos;exercer, contactez {site.practitioner} au{' '}
        <a href={site.phone.href}>{site.phone.display}</a> ou via le <a href="/#contact">formulaire de contact</a>. Vous
        pouvez également adresser une réclamation à la CNIL (cnil.fr).
      </p>

      <h2>Secret professionnel</h2>
      <p>
        Les informations échangées lors des séances restent strictement confidentielles et ne transitent jamais par ce
        site.
      </p>

      <MediationSection />
    </LegalLayout>
  );
}
