# dev-ram

Un seul dépôt, un dossier par site. Chaque dossier est un projet autonome (son `package.json`, son `Dockerfile`, son `.env.example`).

| Dossier | Domaine de production | Statut |
|---|---|---|
| [`OBSERVEBYTES/`](OBSERVEBYTES/) | www.observebyte.fr | Code présent (Next.js 14) |
| [`KOUKIZ31/`](KOUKIZ31/) | www.koukiz31.fr | Code à importer (Google AI Studio) |
| [`ALLIANCE-CORPS-ESPRIT/`](ALLIANCE-CORPS-ESPRIT/) | www.alliancecorpsesprit.fr | Code présent (Next.js 16) |

## Domaine de recette : s-fservices.fr

`s-fservices.fr` sert à montrer un site au client avant mise en ligne.

1. Déployer le dossier du projet avec `NEXT_PUBLIC_SITE_URL=https://<projet>.s-fservices.fr` (un sous-domaine par projet, plusieurs clients en parallèle).
2. Le client valide.
3. Redéployer le **même dossier** avec `NEXT_PUBLIC_SITE_URL=https://www.<domaine-client>.fr` et le domaine du client.

Aucun domaine n'est codé en dur : seule la variable `NEXT_PUBLIC_SITE_URL` (et le domaine du déploiement) change.

## Ajouter un projet

1. Exporter le projet en zip (AI Studio → Download), **sans** `node_modules`, `.next`, `.git`, `.env`.
2. Déposer le zip dans Google Drive.
3. Demander à Claude Code (claude.ai/code, session sur ce dépôt) de l'importer dans son dossier et de pousser.

Ne jamais committer de `.env` : ce dépôt est public.
