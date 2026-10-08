import Link from 'next/link';
import { links, site } from '@/lib/site';
import { Socials } from './Socials';

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="contact" id="contact">
      <div className="wrap">
        <div className="top">
          <div>
            <span className="eyebrow rv">Contact</span>
            <h2 className="h2 rv s1">
              Prenons le temps
              <br />
              d&apos;un <em>premier échange</em>.
            </h2>
            <a className="btn-play rv s2" href={site.booking} target="_blank" rel="noopener noreferrer">
              Prendre rendez-vous en ligne
            </a>
          </div>
          <div className="col rv s2">
            <span className="eyebrow">Le cabinet</span>
            <span className="big">{site.address.city}</span>
            <p>
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
            </p>
            <div className="go-btns">
              <a className="btn-line" href={links.maps} target="_blank" rel="noopener noreferrer">
                Google Maps
              </a>
              <a className="btn-line" href={links.waze} target="_blank" rel="noopener noreferrer">
                Waze
              </a>
            </div>
          </div>
          <div className="col rv s3">
            <span className="eyebrow">Me joindre</span>
            <a className="big" href={site.phone.href}>
              {site.phone.display}
            </a>
            <p>
              {site.hours.map((h) => (
                <span key={h.label}>
                  {h.label} : {h.value}
                  <br />
                </span>
              ))}
              Uniquement sur rendez-vous
            </p>
            <Socials className="social--footer" />
          </div>
        </div>
        <div className="giant" aria-hidden="true">
          Corps <em>&amp;</em> Esprit
        </div>
        <p className="disclaimer">
          Les accompagnements proposés relèvent du bien-être et ne se substituent pas à un diagnostic ou à un traitement
          médical. Poursuivez tout traitement en cours et consultez votre médecin si nécessaire.
        </p>
        <div className="foot">
          <span>
            © {year} {site.name} — {site.practitioner}, {site.role.toLowerCase()}
          </span>
          <span>
            <Link href="/mentions-legales">Mentions légales</Link> · <Link href="/confidentialite">Confidentialité</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
