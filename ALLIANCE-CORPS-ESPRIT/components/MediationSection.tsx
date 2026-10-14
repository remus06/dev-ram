import { legal, memberships } from '@/lib/site';

// Adhésions professionnelles et médiateur de la consommation (articles L611-1 et suivants du Code de la consommation).
export function MediationSection() {
  const { mediator } = legal;
  return (
    <>
      <h2>Adhésions professionnelles et médiation</h2>
      <p>
        {legal.owner} est membre {memberships.map((m, i) => (
          <span key={m.short}>
            {i > 0 && ' et '}
            du <a href={m.href} target="_blank" rel="noopener noreferrer">{m.name}</a> ({m.short})
          </span>
        ))}
        , et s&apos;engage à respecter leurs codes de déontologie.
      </p>
      <p>
        En cas de litige qui n&apos;aurait pas pu être résolu à l&apos;amiable, tout client peut recourir gratuitement à
        un médiateur de la consommation
        {mediator.name ? (
          <>
            {' '}: {mediator.site ? <a href={mediator.site} target="_blank" rel="noopener noreferrer">{mediator.name}</a> : mediator.name}.
          </>
        ) : (
          '.'
        )}
      </p>
    </>
  );
}
