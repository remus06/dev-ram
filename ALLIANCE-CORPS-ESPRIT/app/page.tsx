import Image, { getImageProps } from 'next/image';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { HeroVideo } from '@/components/HeroVideo';
import { ScrollEffects } from '@/components/ScrollEffects';
import { ContactSection } from '@/components/ContactSection';
import { HeroFx } from '@/components/HeroFx';
import { BenefitIcon, NavigateIcon, PinIcon } from '@/components/Icons';
import { benefits, bookingLink, fields, links, prices, rating, reviews, site, toolGroups } from '@/lib/site';
import heroMobile from '@/public/images/hero-zen-mobile.jpg';
import heroDesktop from '@/public/images/hero-zen.jpg';
import cabinetPhoto from '@/public/images/cabinet.jpg';

function Stars({ label }: { label: string }) {
  return (
    <div className="stars" role="img" aria-label={label}>
      ★★★★★
    </div>
  );
}

function ReviewCard({ author, text, hidden }: { author: string; text: string; hidden?: boolean }) {
  return (
    <figure className="review" aria-hidden={hidden || undefined}>
      <Stars label="5 étoiles sur 5" />
      <blockquote>« {text} »</blockquote>
      <figcaption>
        {author}
        <span>Avis Google</span>
      </figcaption>
    </figure>
  );
}

export default function HomePage() {
  const heroVideo: string = site.heroVideo;
  const portrait: string = site.portrait;

  // Hero : visuel en double exposition (profil serein et paysage), cadrage horizontal sur ordinateur, vertical sur mobile.
  const heroAlt = 'Un visage paisible, les yeux fermés, dont la chevelure se fond dans un paysage de montagnes et de lac au lever du soleil';
  const { props: desktopProps } = getImageProps({ src: heroDesktop, alt: heroAlt, sizes: '100vw', priority: true });
  const { props: mobileProps } = getImageProps({ src: heroMobile, alt: heroAlt, sizes: '100vw', priority: true });

  return (
    <>
      <SiteHeader />
      <ScrollEffects />

      <main>
        {/* ---------- HERO ---------- */}
        <section className="hero" aria-label="Accueil">
          <div className="hero__media">
            <div className="hero__art">
              <picture>
                <source
                  media="(min-width: 901px), (orientation: landscape)"
                  srcSet={desktopProps.srcSet}
                  sizes={desktopProps.sizes}
                />
                {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                <img {...mobileProps} />
              </picture>
              {heroVideo ? <HeroVideo src={heroVideo} poster={heroDesktop.src} /> : null}
              <HeroFx />
            </div>
          </div>

          <div className="hero__inner">
            <p className="hero__kicker rise d3">Entrer en amitié avec soi, ici et maintenant</p>
            <span className="hero__rule rise d4" aria-hidden="true" />
            <h1 className="hero__title">
              <span className="line">
                <span>Sophrologie</span>
              </span>
              <span className="line">
                <span>
                  <em>&amp;</em> Hypnose
                </span>
              </span>
              <span className="sr-only"> à {site.address.city}, près d&apos;Aubagne</span>
            </h1>
            <p className="hero__keys rise d8">Apaisement · Équilibre · Mieux-être</p>
          </div>

          <ul className="benefits" aria-label="Ce que les séances peuvent vous apporter">
            {benefits.map((b, i) => (
              <li className="benefit" key={b.label} style={{ animationDelay: `${1.25 + i * 0.12}s` }}>
                <span className="benefit__icon" style={{ background: b.tone }}>
                  <BenefitIcon name={b.icon} />
                </span>
                <span className="benefit__label">{b.label}</span>
              </li>
            ))}
          </ul>

          <p className="hero__script" aria-label="Respirez, relâchez, avancez">
            <span aria-hidden="true">Respirez…</span>
            <span aria-hidden="true">Relâchez…</span>
            <span aria-hidden="true">Avancez…</span>
          </p>
        </section>

        {/* ---------- APPROCHE ---------- */}
        <section className="approach" id="approche">
          <div className="wrap">
            <figure className="portrait rv">
              {portrait ? (
                <Image src={portrait} alt={`Portrait de ${site.practitioner}`} fill sizes="(max-width: 900px) 100vw, 40vw" />
              ) : (
                // Emplacement réservé tant que la photo n'est pas fournie (site.portrait dans lib/site.ts).
                <div className="portrait__empty">
                  <span aria-hidden="true">NB</span>
                  <small>Photo à venir</small>
                </div>
              )}
            </figure>
            <div>
              <span className="eyebrow rv">Mon approche</span>
              <h2 className="h2 rv s1">
                Se libérer de ce qui pèse,
                <br />
                <em>retrouver son équilibre.</em>
              </h2>
              <p className="lead rv s1">
                J&apos;accompagne celles et ceux qui ressentent le besoin de se libérer de schémas limitants, de tensions
                enfouies et de blocages émotionnels. Praticienne en thérapie brève orientée solution et en relation
                d&apos;aide, j&apos;ai d&apos;abord rencontré la sophrologie pour mes propres douleurs : un meilleur
                sommeil, moins de stress, un corps apaisé.
              </p>
              <p className="quote rv s2">« {site.tagline}. »</p>
              <p className="lead rv s3">
                Je continue à me former pour vous proposer des outils justes et utiles, qui tiennent compte de l&apos;être
                dans sa globalité et respectent votre rythme.
              </p>
              <div className="sign rv s4">
                <b>{site.practitioner}</b>
                <span>{site.role}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- OUTILS ---------- */}
        <section className="tools" id="outils">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow rv">Les outils</span>
                <h2 className="h2 rv s1">
                  Des approches <em>complémentaires</em>
                </h2>
              </div>
              <p className="lead rv s2">Choisies avec vous selon votre demande, pour agir sur le corps, les émotions et l&apos;énergie.</p>
            </div>
            {toolGroups.map((g) => (
              <div className="tool-group" key={g.title}>
                <h3 className="tool-group__title rv">{g.title}</h3>
                <div className={`tool-grid${g.tools.length > 3 ? ' tool-grid--4' : ''}`}>
                  {g.tools.map((t, i) => (
                    <article className={`tool rv s${i + 1}`} key={t.name}>
                      <h4>{t.name}</h4>
                      <p>{t.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- CHAMPS D'ACTION ---------- */}
        <section className="fields" id="champs">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow rv">Champs d&apos;action</span>
                <h2 className="h2 rv s1">
                  Ce que nous pouvons
                  <br />
                  <em>travailler ensemble</em>
                </h2>
              </div>
              <p className="lead rv s2">Chaque accompagnement commence par un premier échange pour comprendre votre demande.</p>
            </div>
            {fields.map((f, i) => (
              <div className={`row rv${i ? ` s${i}` : ''}`} key={f.title}>
                <span className="num">0{i + 1}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                <span className="go" aria-hidden="true">
                  →
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- TARIFS ---------- */}
        <section className="prices" id="tarifs">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow rv">Tarifs</span>
                <h2 className="h2 rv s1">
                  Séances & <em>prestations</em>
                </h2>
              </div>
              <a className="btn-play rv s2" {...bookingLink}>
                Réserver une séance
              </a>
            </div>
            <div className="prices__grid">
              <div className="rv">
                <h3 className="prices__title">Séances</h3>
                <ul className="price-list">
                  {prices.individual.map((p) => (
                    <li key={p.name}>
                      <span className="price-list__name">
                        {p.name}
                        {p.duration && <small>{p.duration}</small>}
                      </span>
                      <span className="price-list__dots" aria-hidden="true" />
                      <span className="price-list__price">{p.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <aside className="notes rv s2" aria-label="Informations utiles">
                <h3>Bon à savoir</h3>
                <ul>
                  {prices.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        {/* ---------- CABINET ---------- */}
        <section className="cabinet" id="cabinet">
          <div className="wrap">
            <div className="cab-media">
              <Image
                src={cabinetPhoto}
                alt="Le cabinet à La Destrousse : table de soin, orchidée, plantes et lumière douce"
                sizes="(max-width: 900px) 100vw, 50vw"
                placeholder="blur"
              />
              <div className="cab-tag">
                <b>Le cabinet</b>
                {site.address.city} · près d&apos;Aubagne
              </div>
            </div>
            <div>
              <span className="eyebrow rv">Le lieu</span>
              <h2 className="h2 rv s1">
                Un espace calme,
                <br />
                <em>pour se déposer.</em>
              </h2>
              <p className="lead rv s2">Un cabinet lumineux et apaisant, avec {site.parking.toLowerCase()}, à quelques minutes d&apos;Aubagne.</p>
              <dl className="info rv s3">
                <div>
                  <dt>Adresse</dt>
                  <dd>
                    {site.address.street}
                    <br />
                    {site.address.postalCode} {site.address.city}
                  </dd>
                </div>
                <div>
                  <dt>Horaires</dt>
                  <dd>
                    {site.hours.map((h) => (
                      <span key={h.label}>
                        {h.label} : {h.value}
                        <br />
                      </span>
                    ))}
                    Uniquement sur rendez-vous
                  </dd>
                </div>
                <div>
                  <dt>Téléphone</dt>
                  <dd>
                    <a href={site.phone.href}>{site.phone.display}</a>
                  </dd>
                </div>
                <div>
                  <dt>Stationnement</dt>
                  <dd>{site.parking}</dd>
                </div>
              </dl>
              <div className="go-btns rv s4">
                <a className="btn-line" href={links.maps} target="_blank" rel="noopener noreferrer">
                  <PinIcon /> Itinéraire Google Maps
                </a>
                <a className="btn-line" href={links.waze} target="_blank" rel="noopener noreferrer">
                  <NavigateIcon /> Ouvrir dans Waze
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- AVIS ---------- */}
        <section className="reviews" id="avis">
          <div className="wrap">
            <span className="eyebrow rv">Avis Google</span>
            <h2 className="h2 rv s1">
              Ils en <em>parlent</em> mieux que moi.
            </h2>
            <div className="score rv s2">
              <b>{rating.value}</b>
              <div>
                <Stars label={`Note moyenne ${rating.value} sur 5`} />
                <small>{rating.count} avis sur Google</small>
              </div>
            </div>
          </div>
          <div className="rtrack-wrap rv s3">
            <div className="rtrack">
              {reviews.map((r) => (
                <ReviewCard key={r.author} {...r} />
              ))}
              {reviews.map((r) => (
                <ReviewCard key={`${r.author}-dup`} {...r} hidden />
              ))}
            </div>
          </div>
          <div className="wrap">
            <div className="go-btns go-btns--center rv">
              <a className="btn-line" href={links.googleReviews} target="_blank" rel="noopener noreferrer">
                Lire tous les avis sur Google →
              </a>
              <a className="btn-line" href={links.writeReview} target="_blank" rel="noopener noreferrer">
                Laisser un avis
              </a>
            </div>
          </div>
        </section>
        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
