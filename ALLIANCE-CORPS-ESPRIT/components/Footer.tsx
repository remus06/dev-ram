import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/lib/images';
import { nav, site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-shell">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold">{site.name}</p>
          <p className="mt-1 text-sm text-muted">
            {site.practitioner} — {site.title}
          </p>
          <p className="mt-5 font-display text-xl italic text-sage-dark">{site.tagline}</p>
          <div className="mt-6 flex items-center gap-5">
            {[images.logoSdmh, images.logoSsp].map((logo, i) => (
              <a key={logo.src} href={site.memberships[i].url} target="_blank" rel="noopener noreferrer" title={site.memberships[i].name}>
                <Image src={logo.src} alt={logo.alt} width={56} height={60} className="h-14 w-auto" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-sm">
          <p className="kicker">Cabinet</p>
          <address className="mt-3 not-italic leading-relaxed text-ink/85">
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city}
          </address>
          <a href={site.phoneHref} className="mt-3 block font-semibold text-ink hover:text-sage-dark">
            {site.phone}
          </a>
          <ul className="mt-3 space-y-1 text-ink/85">
            {site.hours.map((h) => (
              <li key={h.days}>
                {h.days} : {h.time}
              </li>
            ))}
          </ul>
          <p className="mt-1 text-muted">{site.hoursNote}</p>
        </div>

        <div className="text-sm">
          <p className="kicker">Plan du site</p>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink/85 hover:text-sage-dark">
                  {item.label}
                </Link>
              </li>
            ))}
            {site.social.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-ink/85 hover:text-sage-dark">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            <strong className="font-semibold text-ink/80">{site.medicalNotice}</strong> {site.mutuelleNotice}
          </p>
          <p className="flex shrink-0 gap-4">
            <Link href="/mentions-legales" className="hover:text-ink">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-ink">Confidentialité</Link>
            <span>© {new Date().getFullYear()} {site.practitioner}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
