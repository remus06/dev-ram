import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { ScrollEffects } from './ScrollEffects';

export function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <SiteHeader solid />
      <ScrollEffects />
      <main className="legal">
        <div className="wrap">
          <h1>{title}</h1>
          {children}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
