import Link from "next/link";
import { Band, Grid, Rule, Spread, Wrap } from "./grid";

export function Footer() {
  return (
    <Spread variant="dark">
      <Wrap tight>
        <Grid>
          <Band>
            <div style={{ gridColumn: "1 / 5" }}>
              <span className="kicker">Alliance Corps Esprit</span>
              <p className="body" style={{ color: "#D8C6B2", marginTop: 8 }}>
                Nawel Billali — hypnologue et sophrologue à La Destrousse
                (13112), près d&apos;Aubagne. Cabinet et visioconférence.
              </p>
            </div>
            <div style={{ gridColumn: "5 / 8" }}>
              <span className="kicker">Contact</span>
              <p className="body" style={{ color: "#D8C6B2", marginTop: 8 }}>
                Résidence la Verrerie, Bât. A
                <br />
                13112 La Destrousse
                <br />
                06 76 48 69 27
                <br />
                Parking visiteur gratuit
              </p>
            </div>
            <div style={{ gridColumn: "8 / 11" }}>
              <span className="kicker">Pages</span>
              <p className="body" style={{ color: "#D8C6B2", marginTop: 8 }}>
                <Link href="/accompagnements" style={{ textDecoration: "none" }}>
                  Accompagnements
                </Link>
                <br />
                <Link href="/tarifs" style={{ textDecoration: "none" }}>
                  Tarifs &amp; RDV
                </Link>
                <br />
                <Link href="/faq" style={{ textDecoration: "none" }}>
                  FAQ
                </Link>
                <br />
                <Link href="/blog" style={{ textDecoration: "none" }}>
                  Blog
                </Link>
              </p>
            </div>
            <div style={{ gridColumn: "11 / 13" }}>
              <span className="kicker">Légal</span>
              <p className="body" style={{ color: "#D8C6B2", marginTop: 8 }}>
                <Link href="/mentions-legales" style={{ textDecoration: "none" }}>
                  Mentions légales
                </Link>
                <br />
                <Link href="/confidentialite" style={{ textDecoration: "none" }}>
                  Confidentialité
                </Link>
                <br />
                SIREN 791 220 718
                <br />
                APE 8690F
              </p>
            </div>
          </Band>
          <Rule ink />
          <Band>
            <div style={{ gridColumn: "1 / 9" }}>
              <p className="small" style={{ color: "#9C8878" }}>
                © 2026 Nawel Billali — Alliance Corps Esprit · Membre du
                SDMH et du Syndicat des Sophrologues Professionnels
              </p>
            </div>
          </Band>
        </Grid>
      </Wrap>
    </Spread>
  );
}
