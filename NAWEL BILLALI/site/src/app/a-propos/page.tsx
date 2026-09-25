import type { Metadata } from "next";
import { Band, Grid, Rule, Spread, Wrap } from "@/components/grid";

export const metadata: Metadata = {
  title: "À propos — Nawel Billali",
  description:
    "Nawel Billali, hypnologue et sophrologue à La Destrousse : parcours, formations et déontologie.",
};

const FORMATIONS = [
  {
    year: "2018",
    school: "ARCHE",
    diploma: "Praticienne en hypnose éricksonienne",
  },
  {
    year: "2017",
    school: "École de sophrologie PACA",
    diploma: "Diplôme de praticien en sophrologie",
  },
  {
    year: "2017",
    school: "ARCHE",
    diploma: "Technicienne en hypnose éricksonienne",
  },
  {
    year: "2015",
    school: "Formation Patricia Grévin",
    diploma: "Sophrologie et acouphènes",
  },
  {
    year: "2012",
    school: "Société Française de Sophrologie",
    diploma: "Sophrologue praticien RNCP",
  },
];

export default function AProposPage() {
  return (
    <main>
      <Spread>
        <Wrap>
          <Grid>
            <Band>
              <div style={{ gridColumn: "1 / 8" }}>
                <span className="kicker">À propos</span>
                <h1 className="masthead">Nawel Billali</h1>
              </div>
              <div style={{ gridColumn: "8 / 13" }}>
                <p className="lead">
                  Hypnologue et sophrologue installée à La Destrousse
                  depuis plus de dix ans. J&apos;accompagne enfants,
                  adolescents, adultes et seniors.
                </p>
              </div>
            </Band>
            <Rule />
            <Band>
              <div style={{ gridColumn: "1 / 7" }}>
                <figure className="h432">
                  <div className="img-placeholder">
                    Photo de la salle d&apos;attente à intégrer
                  </div>
                </figure>
              </div>
              <div style={{ gridColumn: "7 / 13" }}>
                <h2 className="h2b">Ma façon de travailler</h2>
                <p className="body" style={{ marginTop: 16 }}>
                  Chaque accompagnement démarre par un entretien approfondi
                  — l&apos;anamnèse — pour comprendre votre situation,
                  cerner le besoin réel et définir ensemble un objectif
                  clair. La méthode choisie découle de cet échange.
                </p>
                <p className="body" style={{ marginTop: 24 }}>
                  Les séances relèvent des thérapies brèves. L&apos;objectif
                  est de vous rendre autonome avec des outils réutilisables
                  seul, chez vous, dans les transports ou avant une échéance
                  difficile.
                </p>
                <p className="small" style={{ marginTop: 24 }}>
                  Ces pratiques sont des accompagnements de bien-être :
                  elles ne remplacent ni un diagnostic, ni un traitement
                  médical.
                </p>
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
                <span className="kicker">Parcours</span>
                <h2 className="h2b">
                  Formations
                  <br />
                  &amp; certifications
                </h2>
              </div>
            </Band>
            {FORMATIONS.map((f, i) => (
              <Band key={i}>
                <div style={{ gridColumn: "1 / 3" }}>
                  <span
                    className="numeral"
                    style={{ fontSize: 28, lineHeight: "24px" }}
                  >
                    {f.year}
                  </span>
                </div>
                <div style={{ gridColumn: "3 / 7" }}>
                  <h3>{f.school}</h3>
                </div>
                <div style={{ gridColumn: "7 / 13" }}>
                  <p className="body">{f.diploma}</p>
                </div>
              </Band>
            ))}
          </Grid>
        </Wrap>
      </Spread>

      <Spread>
        <Wrap>
          <Grid>
            <Band>
              <div style={{ gridColumn: "1 / 5" }}>
                <span className="kicker">Cadre</span>
                <h2 className="h2b">Déontologie</h2>
              </div>
              <div style={{ gridColumn: "5 / 13" }}>
                <p className="lead">
                  Secret professionnel absolu sur tout ce qui est confié en
                  séance. Aucune promesse de guérison, aucun diagnostic
                  médical, aucune interruption de traitement conseillée.
                  Respect du rythme et du consentement à chaque étape.
                </p>
              </div>
            </Band>
          </Grid>
        </Wrap>
      </Spread>
    </main>
  );
}
