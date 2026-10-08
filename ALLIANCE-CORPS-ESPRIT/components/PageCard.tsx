import Image from 'next/image';
import Link from 'next/link';
import type { Page } from '@/lib/content';

export function PageCard({ page, href }: { page: Page; href: string }) {
  return (
    <Link href={href} className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white/60 transition-shadow hover:shadow-lg hover:shadow-ink/5">
      <div className="relative aspect-[3/2] overflow-hidden bg-shell">
        <Image
          src={page.image.src}
          alt={page.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="kicker">{page.kicker}</p>
        <h3 className="mt-2 font-display text-2xl font-medium">{page.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">{page.summary}</p>
        <span className="mt-5 text-sm font-semibold text-sage-dark">
          En savoir plus <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
