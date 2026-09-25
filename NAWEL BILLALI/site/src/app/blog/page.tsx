import type { Metadata } from "next";
import Link from "next/link";
import { Band, Grid, Rule, Spread, Wrap } from "@/components/grid";
import { getBlogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog & dossiers — Alliance Corps Esprit",
  description:
    "Articles de fond sur le stress, le sommeil et les blocages émotionnels, écrits à partir de ce qui revient le plus souvent en cabinet.",
};

const SPANS = ["1 / 4", "4 / 7", "7 / 10", "10 / 13"];

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main>
      <Spread>
        <Wrap>
          <Grid>
            <Band>
              <div style={{ gridColumn: "1 / 8" }}>
                <span className="kicker">Blog &amp; dossiers</span>
                <h1 className="masthead">
                  Dossiers
                  <br />
                  thématiques
                </h1>
              </div>
              <div style={{ gridColumn: "8 / 13" }}>
                <p className="lead">
                  Des articles de fond sur le stress, le sommeil et les
                  blocages émotionnels, écrits à partir de ce qui revient
                  le plus souvent en cabinet.
                </p>
              </div>
            </Band>
            <Rule />
            <Band>
              {posts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="item"
                  style={{
                    gridColumn: SPANS[i % SPANS.length],
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <figure className="h240">
                    <div className="img-placeholder">Image à intégrer</div>
                  </figure>
                  <span className="kicker" style={{ marginTop: 16 }}>
                    {post.category}
                  </span>
                  <h3 style={{ marginTop: 8 }}>{post.title}</h3>
                  <p className="body" style={{ marginTop: 8 }}>
                    {post.excerpt}
                  </p>
                  <p className="small" style={{ marginTop: 8 }}>
                    Article existant
                  </p>
                </Link>
              ))}
            </Band>
          </Grid>
        </Wrap>
      </Spread>
    </main>
  );
}
