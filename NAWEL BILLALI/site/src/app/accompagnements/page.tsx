import type { Metadata } from "next";
import Link from "next/link";
import { Band, Grid, Rule, Spread, Wrap } from "@/components/grid";
import { getAccompagnements } from "@/lib/content";

export const metadata: Metadata = {
  title: "Accompagnements — Alliance Corps Esprit",
  description:
    "Six motifs de consultation fréquents : hypnose, sophrologie, stress, confiance en soi, sommeil, transitions de vie.",
};

const ETAPES = [
  {
    numeral: "1",
    title: "Anamnèse",
    description:
      "Premier rendez-vous de 2 h : comprendre la demande et poser un objectif précis.",
  },
  {
    numeral: "2",
    title: "Découverte",
    description:
      "Une première pratique douce pour ressentir la méthode, sans engagement.",
  },
  {
    numeral: "3",
    title: "Séances",
    description:
      "3 à 8 séances espacées d'une à deux semaines, ajustées à votre rythme.",
  },
  {
    numeral: "4",
    title: "Autonomie",
    description:
      "Vous repartez avec des outils réutilisables seul. Le suivi s'arrête à l'objectif atteint.",
  },
];

export default function AccompagnementsPage() {
  const accompagnements = getAccompagnements();
  const [row1, row2] = [accompagnements.slice(0, 3), accompagnements.slice(3, 6)];
  const spans = ["1 / 5", "5 / 9", "9 / 13"];
  const etapeSpans = ["1 / 4", "4 / 7", "7 / 10", "10 / 13"];

  return (
    <main>
      <Spread>
        <Wrap>
          <Grid>
            <Band>
              <div style={{ gridColumn: "1 / 8" }}>
                <span className="kicker">Accompagnements</span>
                <h1 className="masthead">
                  Pour quel
                  <br />
                  besoin venir ?
                </h1>
              </div>
              <div style={{ gridColumn: "8 / 13" }}>
                <p className="lead">
                  Six motifs de consultation fréquents. La méthode —
                  hypnose, sophrologie, soin énergétique, VaguExpans — est
                  choisie ensemble.
                </p>
              </div>
            </Band>
            <Rule />
            <Band>
              {row1.map((item, i) => (
                <div
                  className="item"
                  style={{ gridColumn: spans[i] }}
                  key={item.slug}
                >
                  <span className="numeral">{item.numeral}</span>
                  <h3 style={{ marginTop: 16 }}>{item.title}</h3>
                  <p className="body" style={{ marginTop: 8 }}>
                    {item.description}
                  </p>
                  <ul className="list">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Band>
            <Band>
              {row2.map((item, i) => (
                <div
                  className="item"
                  style={{ gridColumn: spans[i] }}
                  key={item.slug}
                >
                  <span className="numeral">{item.numeral}</span>
                  <h3 style={{ marginTop: 16 }}>{item.title}</h3>
                  <p className="body" style={{ marginTop: 8 }}>
                    {item.description}
                  </p>
                  <ul className="list">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Band>
          </Grid>
        </Wrap>
      </Spread>

      <Spread variant="paper2">
        <Wrap>
          <Grid>
            <Band>
              <div style={{ gridColumn: "1 / 5" }}>
                <span className="kicker">Déroulement</span>
                <h2 className="h2b">Quatre étapes</h2>
              </div>
              <div style={{ gridColumn: "5 / 13" }}>
                <p className="lead">De la prise de contact à votre autonomie.</p>
              </div>
            </Band>
            <Band>
              {ETAPES.map((e, i) => (
                <div
                  className="item"
                  style={{ gridColumn: etapeSpans[i] }}
                  key={e.numeral}
                >
                  <span className="numeral">{e.numeral}</span>
                  <h3 style={{ marginTop: 16 }}>{e.title}</h3>
                  <p className="body" style={{ marginTop: 8 }}>
                    {e.description}
                  </p>
                </div>
              ))}
            </Band>
          </Grid>
        </Wrap>
      </Spread>

      <Spread>
        <Wrap>
          <Grid>
            <Band>
              <div style={{ gridColumn: "1 / 8" }}>
                <h2 className="h2b">Une question avant de réserver ?</h2>
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap",
                    marginTop: 24,
                  }}
                >
                  <Link className="btn btn-p" href="/tarifs">
                    Voir les tarifs
                  </Link>
                  <a className="btn btn-s" href="tel:0676486927">
                    06 76 48 69 27
                  </a>
                </div>
              </div>
            </Band>
          </Grid>
        </Wrap>
      </Spread>
    </main>
  );
}
