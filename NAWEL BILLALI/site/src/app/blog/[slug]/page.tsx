import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Band, Grid, Rule, Spread, Wrap } from "@/components/grid";
import { getBlogPost, getBlogSlugs } from "@/lib/content";

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Alliance Corps Esprit`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <main>
      <Spread>
        <Wrap>
          <Grid>
            <Band>
              <div style={{ gridColumn: "1 / 9" }}>
                <Link className="back" href="/blog">
                  ← Tous les articles
                </Link>
                <span className="kicker" style={{ marginTop: 24 }}>
                  {post.category}
                </span>
                <h1
                  className="masthead"
                  style={{ fontSize: 44, lineHeight: "56px" }}
                >
                  {post.title}
                </h1>
              </div>
            </Band>
            <Rule />
            <Band>
              <div style={{ gridColumn: "1 / 9" }}>
                <div
                  className="prose"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />
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
                  <Link className="btn btn-s" href="/blog">
                    Autres articles
                  </Link>
                </div>
              </div>
              <div style={{ gridColumn: "9 / 13" }}>
                <figure className="h360">
                  <div className="img-placeholder">Image à intégrer</div>
                </figure>
              </div>
            </Band>
          </Grid>
        </Wrap>
      </Spread>
    </main>
  );
}
