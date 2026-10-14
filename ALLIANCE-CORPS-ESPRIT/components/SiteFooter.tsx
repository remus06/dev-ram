import Image from 'next/image';
import Link from 'next/link';
import { bookingLink, links, memberships, site } from '@/lib/site';
import { Socials } from './Socials';

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="contact" id="coordonnees">
      <div className="wrap">
        <div className="top">
          <div>
            <span className="eyebrow rv">{site.name}</span>
            <h2 className="h2 rv s1">
              Le chemin pour entrer en <em>amitié avec soi</em>.
            </h2>
            <a className="btn-play rv s2" {...bookingLink}>
              Prendre rendez-vous
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

        <div className="members">
          <span className="eyebrow">Membre de</span>
          <ul>
            {memberships.map((m) => (
              <li key={m.short}>
                <a href={m.href} target="_blank" rel="noopener noreferrer" title={m.name}>
                  <Image src={m.logo} alt={m.name} width={m.width} height={m.height} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="giant" aria-hidden="true">
          Corps <em>&amp;</em> Esprit
        </div>
        <p className="disclaimer">
          Les accompagnements proposés relèvent du bien-être et ne se substituent pas à un diagnostic ou à un traitement
          médical. Ne jamais interrompre un traitement en cours sans l&apos;avis de votre médecin.
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
