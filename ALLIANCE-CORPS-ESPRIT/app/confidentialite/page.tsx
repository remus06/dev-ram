import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { legal, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  alternates: { canonical: '/confidentialite' }
};

export default function ConfidentialitePage() {
  return (
    <LegalLayout title="Confidentialité">
      <h2>Données collectées</h2>
      <p>
        Ce site ne comporte ni formulaire, ni compte utilisateur, ni outil de mesure d&apos;audience, ni cookie
        publicitaire. Aucune donnée personnelle n&apos;est collectée directement par le site.
      </p>

      <h2>Services tiers</h2>
      <ul>
        <li>
          <strong>Prise de rendez-vous :</strong> les réservations se font sur Liberlo, qui traite vos données selon sa
          propre politique de confidentialité.
        </li>
        <li>
          <strong>Itinéraire :</strong> les boutons Google Maps et Waze ouvrent ces services, soumis à leurs propres
          conditions.
        </li>
        <li>
          <strong>Réseaux sociaux et WhatsApp :</strong> les icônes sont de simples liens ; aucun module de suivi
          n&apos;est intégré au site.
        </li>
        <li>
          <strong>Vidéo d&apos;accueil :</strong> elle est diffusée depuis un réseau de diffusion de contenu (CDN), qui
          reçoit techniquement l&apos;adresse IP de votre appareil pour l&apos;afficher.
        </li>
        <li>
          <strong>Hébergement :</strong> {legal.host.name} conserve des journaux techniques (adresse IP, date, page
          demandée) à des fins de sécurité.
        </li>
      </ul>

      <h2>Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et d&apos;effacement de vos
        données. Pour toute question, contactez {site.practitioner} au{' '}
        <a href={site.phone.href}>{site.phone.display}</a>. Vous pouvez également saisir la CNIL (cnil.fr).
      </p>

      <h2>Secret professionnel</h2>
      <p>
        Les informations échangées lors des séances restent strictement confidentielles et ne transitent jamais par ce
        site.
      </p>
    </LegalLayout>
  );
}
