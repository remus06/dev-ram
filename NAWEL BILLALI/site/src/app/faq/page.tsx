import type { Metadata } from "next";
import Link from "next/link";
import { Band, Grid, Rule, Spread, Wrap } from "@/components/grid";
import { getFaq } from "@/lib/content";

export const metadata: Metadata = {
  title: "Questions fréquentes — Alliance Corps Esprit",
  description:
    "Déroulement des séances, remboursement, nombre de séances : les réponses aux questions les plus fréquentes.",
};

export default function FaqPage() {
  const faq = getFaq();

  return (
    <main>
      <Spread>
        <Wrap>
          <Grid>
            <Band>
              <div style={{ gridColumn: "1 / 8" }}>
                <span className="kicker">FAQ</span>
                <h1 className="masthead">
                  Questions
                  <br />
                  fréquentes
                </h1>
              </div>
              <div style={{ gridColumn: "8 / 13" }}>
                <p className="lead">
                  Déroulement, nombre de séances, prise en charge : les
                  réponses aux questions posées le plus souvent avant un
                  premier contact.
                </p>
              </div>
            </Band>
            <Rule />
            <Band>
              <div style={{ gridColumn: "1 / 9" }}>
                {faq.map((item) => (
                  <details key={item.question} open={item.openByDefault}>
                    <summary>{item.question}</summary>
                    <div className="ans">{item.answer}</div>
                  </details>
                ))}
              </div>
              <div style={{ gridColumn: "9 / 13" }}>
                <span className="kicker">Autre question</span>
                <p className="body" style={{ marginTop: 8 }}>
                  Écrivez au cabinet, réponse sous 48 h ouvrées.
                </p>
                <div style={{ marginTop: 24 }}>
                  <Link className="btn btn-s" href="/contact">
                    Poser une question
                  </Link>
                </div>
              </div>
            </Band>
          </Grid>
        </Wrap>
      </Spread>
    </main>
  );
}
