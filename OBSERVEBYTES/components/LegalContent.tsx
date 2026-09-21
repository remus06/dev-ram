'use client';

import { useLanguage } from '@/lib/language-context';

export function LegalContent() {
  const { lang } = useLanguage();

  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="font-display text-4xl text-ink mb-10">
          {lang === 'fr' ? 'Mentions légales' : 'Legal notice'}
        </h1>

        <div className="prose-sm space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="font-display text-xl text-ink mb-3">
              {lang === 'fr' ? 'Éditeur du site' : 'Site publisher'}
            </h2>
            <ul className="space-y-1">
              <li><strong className="text-ink">{lang === 'fr' ? 'Nom' : 'Name'} :</strong> Ramy MAHDJOUBI</li>
              <li><strong className="text-ink">{lang === 'fr' ? 'Statut' : 'Status'} :</strong> {lang === 'fr' ? 'Entreprise individuelle (EI)' : 'Sole trader (EI)'}</li>
              <li><strong className="text-ink">SIREN :</strong> 100 774 579</li>
              <li><strong className="text-ink">{lang === 'fr' ? 'Activité' : 'Activity'} (NAF) :</strong> 6201Z — {lang === 'fr' ? 'Programmation informatique' : 'Computer programming'}</li>
              <li><strong className="text-ink">TVA :</strong> {lang === 'fr' ? 'Non applicable, art. 293 B du CGI' : 'Not applicable, art. 293 B of the French tax code'}</li>
              <li><strong className="text-ink">{lang === 'fr' ? 'Adresse' : 'Address'} :</strong> {lang === 'fr' ? '[Adresse complète à compléter] — Blagnac (31700)' : '[Full address to complete] — Blagnac, France (31700)'}</li>
              <li><strong className="text-ink">Email :</strong> ramy.mahdjoubi@gmail.com</li>
              <li><strong className="text-ink">{lang === 'fr' ? 'Téléphone' : 'Phone'} :</strong> 07 53 13 18 97</li>
              <li><strong className="text-ink">{lang === 'fr' ? 'Directeur de publication' : 'Publication director'} :</strong> Ramy MAHDJOUBI</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">
              {lang === 'fr' ? 'Hébergement' : 'Hosting'}
            </h2>
            <p>
              {lang === 'fr'
                ? '[Nom de l\u2019hébergeur, adresse et contact à compléter selon le VPS retenu (OVH ou Hetzner).]'
                : '[Hosting provider name, address and contact to complete depending on the chosen VPS (OVH or Hetzner).]'}
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">
              {lang === 'fr' ? 'Propriété intellectuelle' : 'Intellectual property'}
            </h2>
            <p>
              {lang === 'fr'
                ? 'L\u2019ensemble des contenus de ce site (textes, visuels, code) est la propriété de Ramy MAHDJOUBI, sauf mention contraire, et ne peut être reproduit sans autorisation préalable.'
                : 'All content on this site (text, visuals, code) is the property of Ramy MAHDJOUBI, unless stated otherwise, and may not be reproduced without prior authorization.'}
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink mb-3">
              {lang === 'fr' ? 'Responsabilité' : 'Liability'}
            </h2>
            <p>
              {lang === 'fr'
                ? 'ObserveByte s\u2019efforce d\u2019assurer l\u2019exactitude des informations diffusées sur ce site, mais ne saurait être tenu responsable des erreurs, omissions ou indisponibilités du site.'
                : 'ObserveByte strives to ensure the accuracy of the information published on this site, but cannot be held liable for errors, omissions or unavailability of the site.'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
