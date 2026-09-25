import type { Metadata } from "next";
import { Band, Grid, Rule, Spread, Wrap } from "@/components/grid";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Alliance Corps Esprit",
  description:
    "Politique de confidentialité et protection des données personnelles du site Alliance Corps Esprit.",
  robots: { index: false, follow: false },
};

export default function ConfidentialitePage() {
  return (
    <main>
      <Spread>
        <Wrap>
          <Grid>
            <Band>
              <div style={{ gridColumn: "1 / 8" }}>
                <span className="kicker">Vie privée</span>
                <h1 className="masthead">
                  Politique de
                  <br />
                  confidentialité
                </h1>
              </div>
            </Band>
            <Rule />
            <Band>
              <div className="prose" style={{ gridColumn: "1 / 9" }}>
                <h2>Données collectées</h2>
                <p>
                  Le formulaire de contact collecte votre nom, votre adresse
                  e-mail, votre téléphone (facultatif), le sujet de votre
                  demande et votre message. Aucune autre donnée
                  n&apos;est collectée à votre sujet ailleurs sur le site.
                </p>

                <h2>Finalité et base légale</h2>
                <p>
                  Ces informations sont utilisées uniquement pour répondre à
                  votre demande de contact ou de rendez-vous, sur la base de
                  votre consentement exprès donné lors de l&apos;envoi du
                  formulaire.
                </p>

                <h2>Destinataire et conservation</h2>
                <p>
                  Les messages sont transmis directement à Nawel Billali par
                  e-mail. Ils ne sont ni cédés, ni vendus, ni utilisés à
                  d&apos;autres fins. Ils sont conservés le temps nécessaire
                  au traitement de votre demande, puis supprimés.
                </p>

                <h2>Cookies et mesure d&apos;audience</h2>
                <p>
                  Ce site ne dépose aucun cookie non essentiel et
                  n&apos;utilise aucun outil de mesure d&apos;audience ni de
                  script tiers sans votre accord explicite. Les polices de
                  caractères sont hébergées directement sur le serveur du
                  site, sans appel à un service externe.
                </p>

                <h2>Vos droits</h2>
                <p>
                  Conformément au Règlement Général sur la Protection des
                  Données (RGPD), vous disposez d&apos;un droit
                  d&apos;accès, de rectification, d&apos;effacement et
                  d&apos;opposition concernant vos données personnelles.
                  Pour l&apos;exercer, contactez le cabinet via le{" "}
                  <a href="/contact" style={{ color: "var(--accent)" }}>
                    formulaire de contact
                  </a>{" "}
                  ou par téléphone au 06 76 48 69 27. Vous pouvez également
                  introduire une réclamation auprès de la CNIL
                  (www.cnil.fr).
                </p>
              </div>
            </Band>
          </Grid>
        </Wrap>
      </Spread>
    </main>
  );
}
