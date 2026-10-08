import Image from 'next/image';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { HeroVideo } from '@/components/HeroVideo';
import { ScrollEffects } from '@/components/ScrollEffects';
import { NavigateIcon, PinIcon } from '@/components/Icons';
import { fields, links, practices, prices, rating, reviews, site, toolGroups } from '@/lib/site';
import heroPoster from '@/public/images/hero-poster.jpg';
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
  const marquee = [...practices, ...practices];

  return (
    <>
      <SiteHeader />
      <ScrollEffects />

      <main>
        {/* ---------- HERO ---------- */}
        <section className="hero" aria-label="Accueil">
          <div className="hero__media">
            <Image
              src={heroPoster}
              alt="Une personne en relaxation allongée sur un tapis, un coussin sous les genoux, dans une pièce baignée de lumière dorée"
              priority
              fill
              sizes="100vw"
              placeholder="blur"
            />
            <HeroVideo src={site.heroVideo} poster={heroPoster.src} />
          </div>

          <div className="hero__inner">
            <div className="hero__copy">
              <h1 className="headline">
                <span className="line">
                  <span>
                    Entrer en <em>amitié</em>
                    <br className="m" /> avec soi,
                  </span>
                </span>
                <span className="line">
                  <span>ici et maintenant.</span>
                </span>
              </h1>
              <p className="hero__sub rise d8">
                Sophrologie · Hypnose ericksonienne · Soins énergétiques
                <span>{site.address.city}, près d&apos;Aubagne</span>
              </p>
            </div>
          </div>

          <div className="hero__foot rise d8" aria-hidden="true">
            <div className="breath">
              <div className="lbl">
                <span>Inspirez…</span>
                <span>Expirez…</span>
              </div>
              <div className="orb" />
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="track">
            {marquee.map((p, i) => (
              <span key={i}>
                {p}
                <i />
              </span>
            ))}
          </div>
        </div>

        {/* ---------- APPROCHE ---------- */}
        <section className="approach" id="approche">
          <div className="wrap">
            <div>
              <span className="eyebrow rv">Mon approche</span>
              <h2 className="h2 rv s1">
                Se libérer de ce qui pèse,
                <br />
                <em>retrouver son équilibre.</em>
              </h2>
            </div>
            <div>
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
                <div className="tool-grid">
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
              <a className="btn-play rv s2" href={site.booking} target="_blank" rel="noopener noreferrer">
                Réserver une séance
              </a>
            </div>
            <div className="prices__grid">
              <div className="rv">
                <h3 className="prices__title">Séances individuelles</h3>
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
                <h3 className="prices__title">Séances à partager</h3>
                <ul className="price-list">
                  {prices.shared.map((p) => (
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
              <a className="btn-line" href={links.googleReviews} target="_blank" rel="noopener noreferrer">
                Laisser un avis
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
