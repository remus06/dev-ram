import Image from 'next/image';
import Link from 'next/link';
import { Blocks } from '@/components/Blocks';
import { BookingCta } from '@/components/BookingCta';
import type { Page } from '@/lib/content';

type Props = { page: Page; back: { href: string; label: string }; related: { href: string; title: string }[] };

export function DetailPage({ page, back, related }: Props) {
  return (
    <>
      <article>
        <header className="border-b border-line bg-shell/60">
          <div className="container-page grid items-center gap-10 py-14 md:grid-cols-[1.3fr_1fr] md:py-20">
            <div>
              <Link href={back.href} className="text-sm text-muted hover:text-sage-dark">
                ← {back.label}
              </Link>
              <p className="kicker mt-6">{page.kicker}</p>
              <h1 className="h-display mt-3 text-4xl md:text-6xl">{page.title}</h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/80">{page.summary}</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-shell">
              <Image src={page.image.src} alt={page.image.alt} fill priority sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
        </header>

        <div className="container-page grid gap-12 py-16 lg:grid-cols-[1fr_260px]">
          <div className="max-w-prose">
            <Blocks blocks={page.body} />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="kicker">Voir aussi</p>
            <ul className="mt-4 space-y-3 border-l border-line pl-4">
              {related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="text-sm text-ink/80 hover:text-sage-dark">
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </article>
      <BookingCta />
    </>
  );
}
