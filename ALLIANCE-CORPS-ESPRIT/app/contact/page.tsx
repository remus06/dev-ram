import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { PageHeader } from '@/components/PageHeader';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact & accès',
  description: 'Cabinet Alliance Corps Esprit, Résidence la Verrerie, 13112 La Destrousse. 06 76 48 69 27. Uniquement sur rendez-vous.',
  alternates: { canonical: '/contact' }
};

export default function ContactPage() {
  return (
    <>
      <PageHeader kicker="Contact" title="Prendre rendez-vous" intro="Par téléphone, en ligne ou via le formulaire ci-dessous." />
      <section className="container-page grid gap-12 pt-16 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-8">
          <div>
            <p className="kicker">Téléphone</p>
            <a href={site.phoneHref} className="mt-2 block font-display text-4xl font-semibold hover:text-sage-dark">{site.phone}</a>
          </div>
          <div>
            <p className="kicker">Réservation en ligne</p>
            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-3">
              Réserver sur Liberlo
            </a>
          </div>
          <div>
            <p className="kicker">Adresse du cabinet</p>
            <address className="mt-2 not-italic leading-relaxed">
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
              <br />
              <span className="text-muted">{site.address.note}</span>
            </address>
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-semibold text-sage-dark hover:underline">
              Itinéraire →
            </a>
          </div>
          <div>
            <p className="kicker">Horaires</p>
            <ul className="mt-2 space-y-1">
              {site.hours.map((h) => (
                <li key={h.days}>
                  {h.days} : <strong className="font-semibold">{h.time}</strong>
                </li>
              ))}
            </ul>
            <p className="mt-1 text-muted">{site.hoursNote}</p>
          </div>
        </div>
        <div className="rounded-3xl border border-line bg-white/60 p-6 md:p-10">
          <h2 className="font-display text-3xl font-medium">Écrire un message</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
