import type { Block } from '@/lib/content';

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-page">
      {blocks.map((b, i) => {
        if ('h' in b) return <h2 key={i}>{b.h}</h2>;
        if ('p' in b) return <p key={i}>{b.p}</p>;
        if ('ul' in b)
          return (
            <ul key={i}>
              {b.ul.map((li) => <li key={li}>{li}</li>)}
            </ul>
          );
        return (
          <ol key={i}>
            {b.ol.map((li) => <li key={li}>{li}</li>)}
          </ol>
        );
      })}
    </div>
  );
}
