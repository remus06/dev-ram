import Image from 'next/image';
import Link from 'next/link';
import { BookingCta } from '@/components/BookingCta';
import { PageCard } from '@/components/PageCard';
import { approches, champsAction } from '@/lib/content';
import { images } from '@/lib/images';
import { site } from '@/lib/site';

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container-page grid items-center gap-12 py-16 md:grid-cols-[1.15fr_1fr] md:py-24">
          <div>
            <p className="kicker">La Destrousse · région d&apos;Aubagne</p>
            <h1 className="h-display mt-4 text-5xl md:text-7xl">
              {site.title}
            </h1>
            <p className="mt-5 font-display text-2xl italic text-sage-dark md:text-3xl">{site.tagline}</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">
              {site.subtitle}. {site.methods}.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Prendre rendez-vous
              </a>
              <Link href="/approches" className="btn-ghost">
                Découvrir les approches
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-shell">
              <Image src={images.cabinet.src} alt={images.cabinet.alt} fill priority sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-line bg-sand px-5 py-4 shadow-lg shadow-ink/5 sm:block">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">Sur rendez-vous</p>
              <a href={site.phoneHref} className="mt-1 block font-display text-2xl font-semibold text-ink">{site.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white/50">
        <div className="container-page grid gap-12 py-20 md:grid-cols-[280px_1fr] md:gap-16">
          <div className="relative mx-auto aspect-[227/243] w-56 overflow-hidden rounded-full bg-shell md:mx-0 md:w-full">
            <Image src={images.portrait.src} alt={images.portrait.alt} fill sizes="280px" className="object-cover" />
          </div>
          <div>
            <p className="kicker">À propos</p>
            <h2 className="h-display mt-3 text-4xl md:text-5xl">{site.practitioner}</h2>
            <p className="mt-2 text-muted">Praticienne de thérapie brève orientée solution et de relation d&apos;aide, hypnologue & sophrologue</p>
            <div className="prose-page mt-6 max-w-prose">
              <p>
                J&apos;ai plaisir à accompagner la personne en quête d&apos;authenticité pour retrouver un équilibre et une relation
                harmonieuse avec elle-même et le monde qui l&apos;entoure, devenir sujet, vivre ce qui est, ici et maintenant…
              </p>
              <p>
                Ma première rencontre fut avec la sophrologie. Au début, cette technique m&apos;a semblé absurde, mais je me suis prêtée au
                jeu et, au bout de quelques séances, j&apos;ai réalisé que mon sommeil était de meilleure qualité, que je stressais moins et,
                plus étonnant encore, que je ne ressentais plus les douleurs physiques qui m&apos;avaient poussée à chercher une solution.
                Cette expérience a remis en question toutes mes croyances : j&apos;ai décidé d&apos;aller plus loin et de me former.
              </p>
              <p>
                Le sophrologue est un enseignant ; mais la sophrologie n&apos;est pas une simple méthode de relaxation : des émotions et des
                problématiques peuvent émerger. D&apos;où mon intérêt à compléter ma formation par la relation d&apos;aide, pour
                apprendre l&apos;écoute active, et par d&apos;autres techniques d&apos;autonomisation : la méthode Vittoz et l&apos;hypnose
                ericksonienne du côté psycho-corporel et sensoriel, et des techniques dites énergétiques.
              </p>
              <p>
                Soucieuse d&apos;apporter une aide juste et utile aux personnes qui me font confiance, je continue à me former et à
                chercher des outils qui tiennent compte de l&apos;être dans sa globalité.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <p className="kicker">Champs d&apos;action</p>
        <h2 className="h-display mt-3 max-w-2xl text-4xl md:text-5xl">Pour qui, pour quoi ?</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {champsAction.map((c, i) => (
            <div key={c.title} className="rounded-2xl border border-line bg-white/60 p-6">
              <span className="font-display text-4xl text-clay">0{i + 1}</span>
              <h3 className="mt-3 font-display text-2xl font-medium">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="kicker">Les outils</p>
            <h2 className="h-display mt-3 text-4xl md:text-5xl">Six approches complémentaires</h2>
          </div>
          <Link href="/approches" className="text-sm font-semibold text-sage-dark hover:underline">
            Toutes les approches →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {approches.map((a) => (
            <PageCard key={a.slug} page={a} href={`/approches/${a.slug}`} />
          ))}
        </div>
      </section>

      <BookingCta />
    </>
  );
}
