/** @type {import('next').NextConfig} */

// Anciennes URL du site Wix → nouvelles pages (garde le référencement si alliancecorpsesprit.com pointe ici).
const legacy = {
  '/copie-de-outils-therapeutiques': '/approches',
  '/copie-de-sophrologie-1': '/approches/hypnose',
  '/copie-de-eft': '/approches/sophrologie',
  '/copie-de-sophrologie': '/approches/methode-vittoz',
  '/psycho-bio-acupressure-pba': '/approches/psycho-bio-acupressure',
  '/eft': '/approches/eft',
  '/copie-de-eft-1': '/approches/access-bars',
  '/copie-de-hypnose-ericksonienne-et-t': '/articles/acouphenes',
  '/copie-de-acouph%C3%A8nes': '/articles/hyperacousie-vertiges',
  '/copie-de-hyperacousie': '/articles/fibromyalgie',
  '/evenements': '/tarifs'
};

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'static.wixstatic.com', pathname: '/media/**' }]
  },
  async redirects() {
    return Object.entries(legacy).map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' }
        ]
      }
    ];
  }
};

export default nextConfig;
