import type { Metadata } from "next";
import { Band, Grid, Rule, Spread, Wrap } from "@/components/grid";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact & accès — Alliance Corps Esprit",
  description:
    "Cabinet de Nawel Billali, Résidence la Verrerie Bât. A, 13112 La Destrousse. Formulaire de contact et informations d'accès.",
};

export default function ContactPage() {
  return (
    <main>
      <Spread>
        <Wrap>
          <Grid>
            <Band>
              <div style={{ gridColumn: "1 / 8" }}>
                <span className="kicker">Contact &amp; accès</span>
                <h1 className="masthead">
                  Venir
                  <br />
                  au cabinet
                </h1>
              </div>
              <div style={{ gridColumn: "8 / 13" }}>
                <p className="lead">
                  Résidence la Verrerie, Bât. A — 13112 La Destrousse, à
                  quinze minutes d&apos;Aubagne. Stationnement gratuit sur
                  place.
                </p>
              </div>
            </Band>
            <Rule />
            <Band>
              <div style={{ gridColumn: "1 / 7" }}>
                <h2 className="h2b">Écrire au cabinet</h2>
                <p className="body" style={{ marginTop: 16 }}>
                  Réponse sous 48 h ouvrées. Pour une demande urgente,
                  privilégiez le téléphone.
                </p>
                <ContactForm />
              </div>
              <div style={{ gridColumn: "7 / 13" }}>
                <div className="map">
                  Plan d&apos;accès — carte à intégrer
                  <br />
                  OpenStreetMap, sans cookie tiers
                </div>
                <ul className="infos" style={{ marginTop: 24 }}>
                  <li>
                    <span className="k">Adresse</span>
                    <span className="v">
                      Résidence la Verrerie, Bât. A
                      <br />
                      13112 La Destrousse
                    </span>
                  </li>
                  <li>
                    <span className="k">Horaires</span>
                    <span className="v">
                      Mardi à jeudi : 9 h – 19 h
                      <br />
                      Samedi : 9 h 30 – 18 h
                    </span>
                  </li>
                  <li>
                    <span className="k">Téléphone</span>
                    <span className="v">
                      <a
                        href="tel:0676486927"
                        style={{
                          color: "var(--accent)",
                          textDecoration: "none",
                        }}
                      >
                        06 76 48 69 27
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="k">Sur RDV</span>
                    <span className="v">
                      Uniquement sur rendez-vous, par téléphone ou via le
                      formulaire.
                    </span>
                  </li>
                  <li>
                    <span className="k">Accès</span>
                    <span className="v">
                      Stationnement gratuit devant la résidence, accès de
                      plain-pied.
                    </span>
                  </li>
                </ul>
              </div>
            </Band>
          </Grid>
        </Wrap>
      </Spread>
    </main>
  );
}
