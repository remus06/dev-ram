import Link from "next/link";
import { Band, Grid, Rule, Spread, Wrap } from "@/components/grid";
import { getAccompagnements } from "@/lib/content";

const PREVIEW_SPANS = ["1 / 5", "5 / 9", "9 / 13"];

export default function Home() {
  const accompagnementsPreview = getAccompagnements().slice(0, 3);
  return (
    <main>
      <Spread>
        <Wrap>
          <Grid>
            <Band>
              <div style={{ gridColumn: "1 / 8" }}>
                <span className="kicker">
                  Hypnose éricksonienne combinée RITMO® · Sophrologie titre
                  RNCP · Access Bars
                </span>
                <h1 className="masthead">
                  Entrer en amitié
                  <br />
                  <em>avec soi</em>
                </h1>
              </div>
              <div style={{ gridColumn: "8 / 13" }}>
                <p className="lead">
                  Accompagnement bienveillant et sur-mesure à La Destrousse,
                  près d&apos;Aubagne. Relâcher les tensions, lever un
                  blocage, retrouver un sommeil et une sérénité durables.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap",
                    marginTop: 24,
                  }}
                >
                  <Link className="btn btn-p" href="/tarifs">
                    Prendre rendez-vous
                  </Link>
                  <Link className="btn btn-s" href="/accompagnements">
                    Les accompagnements
                  </Link>
                </div>
              </div>
            </Band>
            <Rule />
            <Band>
              <div style={{ gridColumn: "1 / 4" }}>
                <span className="kicker muted">Publics</span>
                <p className="body">
                  Enfants, adolescents, adultes, seniors. Au cabinet ou en
                  visioconférence.
                </p>
              </div>
              <div style={{ gridColumn: "4 / 7" }}>
                <span className="kicker muted">Méthodes</span>
                <p className="body">
                  Hypnose éricksonienne, sophrologie RNCP, soins
                  énergétiques, VaguExpans.
                </p>
              </div>
              <div style={{ gridColumn: "7 / 10" }}>
                <span className="kicker muted">Durée</span>
                <p className="body">
                  Thérapies brèves : 3 à 8 séances en moyenne, jusqu&apos;à
                  votre autonomie.
                </p>
              </div>
              <div style={{ gridColumn: "10 / 13" }}>
                <span className="kicker muted">Cabinet</span>
                <p className="body">
                  Résidence la Verrerie, Bât. A — 13112 La Destrousse.
                </p>
              </div>
            </Band>
          </Grid>
        </Wrap>
      </Spread>

      <Spread>
        <Wrap tight>
          <Grid>
            <Band>
              <div style={{ gridColumn: "1 / 13" }}>
                <figure className="h480">
                  <div className="img-placeholder">
                    Photo du cabinet à intégrer
                  </div>
                </figure>
                <figcaption>Le cabinet — espace de consultation</figcaption>
              </div>
            </Band>
          </Grid>
        </Wrap>
      </Spread>

      <Spread variant="paper2">
        <Wrap>
          <Grid>
            <Band>
              <div style={{ gridColumn: "1 / 5" }}>
                <span className="kicker">Engagements</span>
                <h2 className="h2b">
                  Un cadre clair,
                  <br />
                  des méthodes douces
                </h2>
              </div>
              <div style={{ gridColumn: "5 / 13" }}>
                <p className="lead">
                  Aucun protocole standard : la méthode découle de
                  l&apos;entretien, jamais l&apos;inverse. L&apos;objectif
                  n&apos;est pas de vous installer dans un suivi long, mais
                  de vous rendre autonome.
                </p>
              </div>
            </Band>
            <Band>
              <div className="item" style={{ gridColumn: "1 / 4" }}>
                <span className="kicker">A</span>
                <h3>Écoute</h3>
                <p className="body">
                  Accueillir vos émotions sans jugement et cheminer à votre
                  rythme.
                </p>
              </div>
              <div className="item" style={{ gridColumn: "4 / 7" }}>
                <span className="kicker">B</span>
                <h3>Déontologie</h3>
                <p className="body">
                  Secret professionnel absolu, aucun diagnostic, aucune
                  promesse de guérison.
                </p>
              </div>
              <div className="item" style={{ gridColumn: "7 / 10" }}>
                <span className="kicker">C</span>
                <h3>Autonomie</h3>
                <p className="body">
                  Des exercices courts, réutilisables seul, partout et au
                  quotidien.
                </p>
              </div>
              <div className="item" style={{ gridColumn: "10 / 13" }}>
                <span className="kicker">D</span>
                <h3>Orientation</h3>
                <p className="body">
                  Renvoi vers un médecin ou un psychologue dès qu&apos;une
                  situation le nécessite.
                </p>
              </div>
            </Band>
          </Grid>
        </Wrap>
      </Spread>

      <Spread>
        <Wrap>
          <Grid>
            <Band>
              <div style={{ gridColumn: "1 / 7" }}>
                <span className="kicker">Accompagnements</span>
                <h2 className="h2b">Pour quel besoin venir ?</h2>
              </div>
            </Band>
            <Band>
              {accompagnementsPreview.map((item, i) => (
                <div
                  className="item"
                  style={{ gridColumn: PREVIEW_SPANS[i] }}
                  key={item.slug}
                >
                  <span className="numeral">{item.numeral}</span>
                  <h3 style={{ marginTop: 16 }}>{item.title}</h3>
                  <p className="body" style={{ marginTop: 8 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </Band>
            <Band>
              <div style={{ gridColumn: "1 / 5" }}>
                <Link className="btn btn-s" href="/accompagnements">
                  Voir les six motifs
                </Link>
              </div>
            </Band>
          </Grid>
        </Wrap>
      </Spread>

      <Spread variant="paper2">
        <Wrap>
          <Grid>
            <Band>
              <div style={{ gridColumn: "1 / 5" }}>
                <span className="kicker">Avis</span>
                <h2 className="h2b">Ce qu&apos;elles en disent</h2>
              </div>
              <div style={{ gridColumn: "5 / 13" }}>
                <p className="lead">
                  Extraits d&apos;avis publiés sur Google par des personnes
                  accompagnées au cabinet.
                </p>
              </div>
            </Band>
            <Band>
              <div className="item" style={{ gridColumn: "1 / 5" }}>
                <p className="body" style={{ color: "var(--ink)" }}>
                  « Nawal est très à l&apos;écoute et bienveillante. Je suis
                  extrêmement reconnaissante qu&apos;on me l&apos;ait
                  recommandée. Je la recommande les yeux fermés. »
                </p>
                <p className="small" style={{ marginTop: 16 }}>
                  Marion A. · Avis Google
                </p>
              </div>
              <div className="item" style={{ gridColumn: "5 / 9" }}>
                <p className="body" style={{ color: "var(--ink)" }}>
                  « Très douce, elle sait apaiser avec une thérapie bien
                  adaptée. Elle m&apos;aide énormément depuis 2019. Venez à
                  sa rencontre. »
                </p>
                <p className="small" style={{ marginTop: 16 }}>
                  Fati R. · Avis Google
                </p>
              </div>
              <div className="item" style={{ gridColumn: "9 / 13" }}>
                <p className="body" style={{ color: "var(--ink)" }}>
                  « Elle m&apos;a permis de me reconnecter à moi dans une
                  période où je m&apos;étais perdue. J&apos;utilise encore
                  les outils qu&apos;elle m&apos;a donnés. »
                </p>
                <p className="small" style={{ marginTop: 16 }}>
                  Sylvie · Avis Google
                </p>
              </div>
            </Band>
          </Grid>
        </Wrap>
      </Spread>

      <Spread variant="dark">
        <Wrap>
          <Grid>
            <Band>
              <div style={{ gridColumn: "1 / 8" }}>
                <h2 className="h2b">Faire le premier pas</h2>
                <p
                  className="lead"
                  style={{ marginTop: 16, color: "#D8C6B2" }}
                >
                  Un échange téléphonique préalable est possible si vous
                  hésitez sur la méthode adaptée à votre situation.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap",
                    marginTop: 24,
                  }}
                >
                  <Link className="btn btn-p" href="/tarifs">
                    Réserver une séance
                  </Link>
                  <a className="btn btn-s" href="tel:0676486927">
                    06 76 48 69 27
                  </a>
                </div>
              </div>
              <div style={{ gridColumn: "9 / 13" }}>
                <span className="kicker">Horaires</span>
                <p className="body" style={{ color: "#D8C6B2" }}>
                  Mardi à jeudi : 9 h – 19 h
                  <br />
                  Samedi : 9 h 30 – 18 h
                </p>
              </div>
            </Band>
          </Grid>
        </Wrap>
      </Spread>
    </main>
  );
}
