import type { MetadataRoute } from 'next';
import { approches, articles } from '@/lib/content';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/approches',
    ...approches.map((a) => `/approches/${a.slug}`),
    '/tarifs',
    '/articles',
    ...articles.map((a) => `/articles/${a.slug}`),
    '/contact'
  ];
  return routes.map((route) => ({ url: `${siteUrl}${route}`, changeFrequency: 'monthly', priority: route === '' ? 1 : 0.7 }));
}
