# Alliance Corps Esprit — site vitrine

Site de Nawel Billali (hypnologue et sophrologue, La Destrousse). Next.js 15,
App Router, TypeScript, CSS natif. Détails du projet dans
`../CLAUDE.md`.

## Installation locale

```bash
npm install
cp .env.example .env.local
# éditer .env.local si besoin (formulaire SMTP notamment)
npm run dev
```

Site disponible sur http://localhost:3000.

## Contenu éditable sans toucher au code

- `content/tarifs.json`, `content/faq.json`, `content/accompagnements.json`
- `content/blog/*.md` (un fichier = un article, front-matter `title` /
  `category` / `excerpt` + texte en Markdown)

## Build de production

```bash
npm run build
npm run start
```

## Déploiement Docker (VPS OVH)

Le site tourne en mode Next.js *standalone* (serveur Node réel dans le
conteneur — nécessaire pour la route API du formulaire de contact), derrière
un reverse proxy [Caddy](https://caddyserver.com/) qui gère le certificat TLS
automatiquement via son intégration Docker (labels `caddy:` /
`caddy.reverse_proxy`, réseau externe `web` partagé avec le conteneur Caddy
du VPS — même pattern que le projet ObserveByte).

### Variables d'environnement (voir `.env.example`)

| Variable | Rôle |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL publique du site (metadata, sitemap) — `https://s-fservices.fr` en aperçu, domaine définitif à la migration |
| `SITE_DOMAIN` | Domaine annoncé à Caddy pour router vers ce conteneur |
| `NEXT_PUBLIC_ALLOW_INDEXING` | `false` tant que le site n'est pas validé (ajoute `noindex` partout + `robots.txt` bloquant) ; passer à `true` seulement à la mise en ligne définitive |
| `BASIC_AUTH_USER` / `BASIC_AUTH_PASS` | Protège tout le site par mot de passe pendant la phase d'aperçu ; laisser vide pour désactiver |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` | Identifiants de la boîte mail OVH de la cliente |
| `MAIL_FROM` / `MAIL_TO` | Expéditeur et destinataire des messages du formulaire de contact |

### Avec Coolify

1. Nouveau projet → méthode de build **Dockerfile** (celui à la racine
   suffit, pas de configuration supplémentaire).
2. Renseigner les variables ci-dessus dans l'UI Coolify.
3. Port interne : `3000`.
4. Domaine : `s-fservices.fr` en aperçu, puis le domaine définitif
   (`alliancecorpsesprit.com`) une fois la cliente validée — voir l'étape 6
   du brief pour la migration (redirections 301 depuis l'ancien Wix).

### Docker Compose + Caddy manuel (sans Coolify)

Le conteneur Caddy (avec le plugin
[`caddy-docker-proxy`](https://github.com/lucaslorentz/caddy-docker-proxy))
doit déjà tourner sur le VPS avec un réseau externe nommé `web` :

```bash
docker network create web   # une seule fois, si pas déjà fait
docker compose --env-file .env up -d --build
```

Caddy détecte automatiquement les labels du service et obtient son
certificat Let's Encrypt pour le domaine indiqué.

## Structure

```
src/app/            routes (App Router) — une page = un dossier
src/app/api/contact route serveur du formulaire (SMTP via nodemailer)
src/components/      composants partagés (header, footer, grille, formulaire)
src/lib/             chargement du contenu JSON/Markdown, rate-limit
content/              contenu éditable (tarifs, FAQ, accompagnements, articles)
```
