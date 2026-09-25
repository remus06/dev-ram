import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type Accompagnement = {
  slug: string;
  numeral: string;
  title: string;
  description: string;
  bullets: string[];
};

export type Tarif = {
  title: string;
  duration: string;
  price: number;
  description: string;
  recommended?: boolean;
  note?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
  openByDefault?: boolean;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
};

export type BlogPost = BlogPostMeta & {
  html: string;
};

function readJson<T>(filename: string): T {
  const file = path.join(CONTENT_DIR, filename);
  return JSON.parse(fs.readFileSync(file, "utf8")) as T;
}

export function getAccompagnements(): Accompagnement[] {
  return readJson<Accompagnement[]>("accompagnements.json");
}

export function getAccompagnement(slug: string): Accompagnement | undefined {
  return getAccompagnements().find((item) => item.slug === slug);
}

export function getTarifs(): Tarif[] {
  return readJson<Tarif[]>("tarifs.json");
}

export function getFaq(): FaqItem[] {
  return readJson<FaqItem[]>("faq.json");
}

const BLOG_DIR = path.join(CONTENT_DIR, "blog");

export function getBlogSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getBlogPosts(): BlogPostMeta[] {
  return getBlogSlugs().map((slug) => {
    const file = path.join(BLOG_DIR, `${slug}.md`);
    const { data } = matter(fs.readFileSync(file, "utf8"));
    return {
      slug,
      title: data.title as string,
      category: data.category as string,
      excerpt: data.excerpt as string,
    };
  });
}

export function getBlogPost(slug: string): BlogPost | undefined {
  const file = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return undefined;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return {
    slug,
    title: data.title as string,
    category: data.category as string,
    excerpt: data.excerpt as string,
    html: marked.parse(content, { async: false }) as string,
  };
}
