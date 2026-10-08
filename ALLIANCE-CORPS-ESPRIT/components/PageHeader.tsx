export function PageHeader({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return (
    <section className="border-b border-line bg-shell/60">
      <div className="container-page py-14 md:py-20">
        <p className="kicker">{kicker}</p>
        <h1 className="h-display mt-3 max-w-3xl text-4xl md:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/80">{intro}</p>}
      </div>
    </section>
  );
}
