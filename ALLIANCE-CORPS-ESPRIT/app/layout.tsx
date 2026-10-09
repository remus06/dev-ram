import type { Metadata, Viewport } from 'next';
import { Instrument_Sans, Instrument_Serif } from 'next/font/google';
import { isStaging, site, siteUrl, socials } from '@/lib/site';
import './globals.css';

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap'
});

const sans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
  display: 'swap'
});

const title = `${site.name} — Sophrologie & hypnose à La Destrousse`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  keywords: [
    'sophrologue La Destrousse',
    'hypnose ericksonienne Aubagne',
    'sophrologie Aubagne',
    'hypnothérapeute Bouches-du-Rhône',
    'méthode Vittoz',
    'Access Bars',
    'gestion du stress',
    'sommeil',
    'Nawal Billali'
  ],
  authors: [{ name: site.practitioner }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: site.name,
    title,
    description: site.description,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Relaxation dans une pièce baignée de lumière dorée' }]
  },
  twitter: { card: 'summary_large_image', title, description: site.description, images: ['/og-image.jpg'] },
  robots: isStaging ? { index: false, follow: false } : { index: true, follow: true },
  formatDetection: { telephone: false }
};

export const viewport: Viewport = {
  themeColor: '#e9dccb',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: site.name,
    description: site.description,
    url: siteUrl,
    image: `${siteUrl}/images/cabinet.jpg`,
    telephone: site.phone.e164,
    founder: { '@type': 'Person', name: site.practitioner, jobTitle: site.role },
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    openingHoursSpecification: site.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes
    })),
    sameAs: socials.filter((s) => s.href && s.key !== 'whatsapp').map((s) => s.href)
  };

  return (
    <html lang="fr" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
