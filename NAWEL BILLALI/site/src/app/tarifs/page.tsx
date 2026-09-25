import type { Metadata } from "next";
import { Band, Grid, Rule, Spread, Wrap } from "@/components/grid";
import { getTarifs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tarifs & rendez-vous — Alliance Corps Esprit",
  description:
    "Tarifs des séances d'hypnose, de sophrologie et de soins énergétiques à La Destrousse. Prise de rendez-vous en ligne ou par téléphone.",
};

export default function TarifsPage() {
  const tarifs = getTarifs();
  const pairs: [typeof tarifs[number], typeof tarifs[number] | undefined][] =
    [];
  for (let i = 0; i < tarifs.length; i += 2) {
    pairs.push([tarifs[i], tarifs[i + 1]]);
  }

  return (
    <main>
      <Spread>
        <Wrap>
          <Grid>
            <Band>
              <div style={{ gridColumn: "1 / 8" }}>
                <span className="kicker">Tarifs &amp; rendez-vous</span>
                <h1 className="masthead">
                  Des tarifs
                  <br />
                  sans surprise
                </h1>
              </div>
              <div style={{ gridColumn: "8 / 13" }}>
                <p className="lead">
                  La première séance commence toujours par une anamnèse.
                  Règlement en espèces, chèque ou virement ; une facture est
                  remise à chaque consultation.
                </p>
              </div>
            </Band>
            <Rule />
            {pairs.map(([a, b], i) => (
              <Band key={i}>
                <div style={{ gridColumn: "1 / 7" }}>
                  <div className={`price${a.recommended ? " price-reco" : ""}`}>
                    <div>
                      <h3>{a.title}</h3>
                      <span className="dur">{a.duration}</span>
                    </div>
                    <span className="numeral">
                      {a.price}
                      <span style={{ fontSize: 20 }}> €</span>
                    </span>
                  </div>
                  <p className="body" style={{ marginTop: 16 }}>
                    {a.description}
                  </p>
                  {a.note && (
                    <p className="kicker" style={{ marginTop: 8 }}>
                      {a.note}
                    </p>
                  )}
                </div>
                {b && (
                  <div style={{ gridColumn: "7 / 13" }}>
                    <div className={`price${b.recommended ? " price-reco" : ""}`}>
                      <div>
                        <h3>{b.title}</h3>
                        <span className="dur">{b.duration}</span>
                      </div>
                      <span className="numeral">
                        {b.price}
                        <span style={{ fontSize: 20 }}> €</span>
                      </span>
                    </div>
                    <p className="body" style={{ marginTop: 16 }}>
                      {b.description}
                    </p>
                    {b.note && (
                      <p className="kicker" style={{ marginTop: 8 }}>
                        {b.note}
                      </p>
                    )}
                  </div>
                )}
              </Band>
            ))}
            <Band>
              <div style={{ gridColumn: "1 / 9" }}>
                <p className="small">
                  Le premier rendez-vous dure 2 h. * Une séance de soins
                  énergétiques peut dépasser 1 h 30 selon ce que le corps a
                  à libérer : le tarif évolue alors sans jamais dépasser
                  100 €, toute heure commencée étant due. Séances non
                  remboursées par la Sécurité sociale ; de nombreuses
                  mutuelles prennent en charge tout ou partie du montant —
                  partenaire exclusive Santéclair.
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
                <span className="kicker">Réserver</span>
                <h2 className="h2b">
                  Prendre
                  <br />
                  rendez-vous
                </h2>
              </div>
              <div style={{ gridColumn: "5 / 9" }}>
                <h3>En ligne</h3>
                <p className="body" style={{ marginTop: 8 }}>
                  Choisissez votre créneau depuis l&apos;agenda,
                  confirmation immédiate par e-mail.
                </p>
                <div style={{ marginTop: 24 }}>
                  <a className="btn btn-p" href="#">
                    Ouvrir l&apos;agenda
                  </a>
                </div>
              </div>
              <div style={{ gridColumn: "9 / 13" }}>
                <h3>Par téléphone</h3>
                <p className="body" style={{ marginTop: 8 }}>
                  Mardi à jeudi 9 h – 19 h, samedi 9 h 30 – 18 h. Message
                  vocal possible en dehors.
                </p>
                <div style={{ marginTop: 24 }}>
                  <a className="btn btn-s" href="tel:0676486927">
                    06 76 48 69 27
                  </a>
                </div>
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
                <h3>Mutuelles</h3>
                <p className="body" style={{ marginTop: 8 }}>
                  La facture remise après chaque séance permet de demander
                  un remboursement à votre complémentaire santé, sous forme
                  de forfait annuel ou par séance selon les contrats.
                </p>
              </div>
              <div style={{ gridColumn: "7 / 13" }}>
                <h3>Annulation</h3>
                <p className="body" style={{ marginTop: 8 }}>
                  Merci de prévenir au moins 24 h à l&apos;avance en cas
                  d&apos;empêchement, afin que le créneau puisse être
                  proposé à une autre personne.
                </p>
              </div>
            </Band>
          </Grid>
        </Wrap>
      </Spread>
    </main>
  );
}
