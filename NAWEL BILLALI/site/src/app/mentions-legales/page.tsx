import type { Metadata } from "next";
import { Band, Grid, Rule, Spread, Wrap } from "@/components/grid";

export const metadata: Metadata = {
  title: "Mentions légales — Alliance Corps Esprit",
  description: "Mentions légales du site Alliance Corps Esprit — Nawel Billali.",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <main>
      <Spread>
        <Wrap>
          <Grid>
            <Band>
              <div style={{ gridColumn: "1 / 8" }}>
                <span className="kicker">Informations légales</span>
                <h1 className="masthead">Mentions légales</h1>
              </div>
            </Band>
            <Rule />
            <Band>
              <div className="prose" style={{ gridColumn: "1 / 9" }}>
                <h2>Éditrice du site</h2>
                <p>
                  Nawel Billali — entrepreneure individuelle
                  <br />
                  SIREN : 791 220 718
                  <br />
                  APE : 8690F (activités de santé humaine non classées
                  ailleurs)
                  <br />
                  Adresse : Résidence la Verrerie, Bât. A — 13112 La
                  Destrousse
                  <br />
                  Téléphone : 06 76 48 69 27
                  <br />
                  Contact : via le{" "}
                  <a href="/contact" style={{ color: "var(--accent)" }}>
                    formulaire de contact
                  </a>{" "}
                  du site — aucune adresse e-mail publique
                  <br />
                  Directrice de la publication : Nawel Billali
                </p>
                <p className="small">
                  Statut juridique et régime de TVA applicable : à compléter
                  par la cliente avant la mise en ligne définitive.
                </p>

                <h2>Hébergement</h2>
                <p>
                  OVH SAS
                  <br />
                  2 rue Kellermann, 59100 Roubaix, France
                  <br />
                  www.ovh.com
                </p>
                <p className="small">
                  Le site est actuellement hébergé sur un nom de domaine
                  provisoire, réservé à la validation du projet avant
                  migration vers le domaine définitif.
                </p>

                <h2>Propriété intellectuelle</h2>
                <p>
                  L&apos;ensemble des contenus de ce site (textes, visuels,
                  code) est la propriété de Nawel Billali, sauf mention
                  contraire, et ne peut être reproduit sans autorisation
                  préalable.
                </p>

                <h2>Responsabilité</h2>
                <p>
                  Les informations diffusées sur ce site le sont à titre
                  informatif. Elles ne remplacent ni un diagnostic, ni un
                  avis médical. Nawel Billali s&apos;efforce d&apos;assurer
                  l&apos;exactitude des informations publiées, mais ne
                  saurait être tenue responsable des erreurs, omissions ou
                  indisponibilités du site.
                </p>
              </div>
            </Band>
          </Grid>
        </Wrap>
      </Spread>
    </main>
  );
}
