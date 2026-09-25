import type { MetadataRoute } from "next";
import { getBlogSlugs } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://s-fservices.fr";

const STATIC_ROUTES = [
  "",
  "/a-propos",
  "/accompagnements",
  "/blog",
  "/tarifs",
  "/faq",
  "/contact",
  "/mentions-legales",
  "/confidentialite",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${siteUrl}${route}`,
  }));
  const blogEntries = getBlogSlugs().map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
  }));
  return [...staticEntries, ...blogEntries];
}
