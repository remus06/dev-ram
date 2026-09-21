import type { Metadata } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import { Providers } from '@/components/Providers';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz']
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500']
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://observebyte.fr';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ObserveByte | Data, BI & solutions digitales — Toulouse',
    template: '%s | ObserveByte'
  },
  description:
    "Ramy MAHDJOUBI, ingénieur freelance à Toulouse : dashboards BI (Power BI, Tableau), automatisation Python/SQL et sites web sur mesure pour indépendants et PME.",
  keywords: ['data', 'BI', 'Power BI', 'automatisation Python', 'freelance data Toulouse', 'site web sur mesure', 'SQL'],
  authors: [{ name: 'Ramy MAHDJOUBI' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'ObserveByte',
    title: 'ObserveByte | Data, BI & solutions digitales',
    description: "Dashboards BI, automatisation et sites web sur mesure — freelance à Toulouse.",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ObserveByte | Data, BI & solutions digitales',
    description: "Dashboards BI, automatisation et sites web sur mesure — freelance à Toulouse."
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'ObserveByte — Ramy MAHDJOUBI',
    founder: 'Ramy MAHDJOUBI',
    url: siteUrl,
    email: 'ramy.mahdjoubi@gmail.com',
    telephone: '+33753131897',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Blagnac',
      addressRegion: 'Occitanie',
      addressCountry: 'FR'
    },
    areaServed: 'FR',
    sameAs: [
      'https://www.linkedin.com/in/ramy-mahdjoubi',
      'https://www.upwork.com/freelancers/~0142354e34b6c25d71'
    ]
  };

  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
