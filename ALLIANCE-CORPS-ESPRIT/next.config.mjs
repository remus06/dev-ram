const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://alliance.s-fservices.fr';
const isStaging = siteUrl.includes('s-fservices.fr') || process.env.NEXT_PUBLIC_NOINDEX === '1';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          ...(isStaging ? [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] : [])
        ]
      }
    ];
  }
};

export default nextConfig;
