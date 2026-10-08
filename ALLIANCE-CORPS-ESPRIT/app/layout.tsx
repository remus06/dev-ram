import type { Metadata } from 'next';
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { isStaging, site, siteUrl } from '@/lib/site';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap'
});

const source = Source_Sans_3({ subsets: ['latin'], variable: '--font-source', display: 'swap' });

const description =
  "Nawel Billali, hypnologue et sophrologue à La Destrousse (13112), région d'Aubagne : hypnose ericksonienne, sophrologie, méthode Vittoz, EFT, PBA et Access Bars. Sur rendez-vous.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | Hypnose & sophrologie à La Destrousse`,
    template: `%s | ${site.name}`
  },
  description,
  authors: [{ name: site.practitioner }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} | Hypnose & sophrologie à La Destrousse`,
    description
  },
  robots: isStaging ? { index: false, follow: false } : { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: `${site.name} — ${site.practitioner}`,
    url: siteUrl,
    telephone: '+33676486927',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: 'FR'
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'], opens: '09:00', closes: '19:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:30', closes: '18:00' }
    ],
    sameAs: site.social.map((s) => s.url)
  };

  return (
    <html lang="fr" className={`${cormorant.variable} ${source.variable}`}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#contenu" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
