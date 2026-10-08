import type { Metadata } from 'next';
import { LegalLayout } from '@/components/LegalLayout';
import { legal, site, siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Mentions légales',
  alternates: { canonical: '/mentions-legales' }
};

export default function MentionsLegalesPage() {
  return (
    <LegalLayout title="Mentions légales">
      <h2>Éditeur du site</h2>
      <ul>
        <li><strong>Raison sociale :</strong> {legal.company}</li>
        <li><strong>Forme juridique :</strong> {legal.form}</li>
        <li><strong>SIREN :</strong> {legal.siren} — <strong>SIRET :</strong> {legal.siret}</li>
        <li><strong>TVA intracommunautaire :</strong> {legal.vat}</li>
        <li><strong>Code APE :</strong> {legal.ape}</li>
        <li><strong>Siège social :</strong> {legal.registeredOffice}</li>
        <li><strong>Lieu de consultation :</strong> {site.address.street}, {site.address.postalCode} {site.address.city}</li>
        <li><strong>Téléphone :</strong> <a href={site.phone.href}>{site.phone.display}</a></li>
        <li><strong>Directrice de la publication :</strong> {legal.director}</li>
      </ul>

      <h2>Hébergement</h2>
      <p>
        {legal.host.name} — {legal.host.address} — <a href={legal.host.site}>{legal.host.site.replace('https://', '')}</a>
      </p>

      <h2>Nature des prestations</h2>
      <p>
        Les séances de sophrologie, d&apos;hypnose et de soins énergétiques proposées par {site.practitioner} relèvent du
        bien-être et de l&apos;accompagnement. Elles ne constituent pas des actes médicaux et ne se substituent en aucun
        cas à un diagnostic, un traitement ou un suivi médical. Ne modifiez jamais un traitement en cours sans l&apos;avis
        de votre médecin.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus de ce site ({siteUrl.replace('https://', '')}) — textes, photographies, vidéo,
        identité visuelle — est la propriété de {legal.company} ou utilisé avec autorisation, et ne peut être reproduit
        sans accord préalable. Les avis clients cités proviennent de la fiche Google publique du cabinet.
      </p>

      <h2>Responsabilité</h2>
      <p>
        L&apos;éditeur s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées (tarifs, horaires,
        adresse) mais ne saurait être tenu responsable d&apos;erreurs, d&apos;omissions ou d&apos;une indisponibilité du
        site. Les liens vers des sites tiers (prise de rendez-vous, cartographie, réseaux sociaux) n&apos;engagent pas
        l&apos;éditeur.
      </p>
    </LegalLayout>
  );
}
