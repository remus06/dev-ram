# ObserveByte — site Next.js

Refonte du site vitrine (ex-export AI Studio/React) en Next.js 14 (App Router, TypeScript, Tailwind).

## Ce qui a changé par rapport à la version précédente

- **Chatbot Gemini supprimé.** La clé API était injectée en clair dans le bundle client (`process.env.API_KEY` exposé via `vite.config.ts`) — faille de sécurité critique. Aucune dépendance `@google/genai` ne reste dans le projet.
- **Formulaire de contact fonctionnel.** L'ancien formulaire affichait un message de succès sans rien envoyer nulle part. Il envoie maintenant un email réel via l'API Resend (`app/api/contact/route.ts`), avec honeypot anti-spam et validation côté serveur.
- **Routage réel.** `HashRouter` (`/#/services`) remplacé par le routage fichiers de Next.js (`/services`, `/portfolio`, etc.) — meilleur pour le SEO et les liens partagés.
- **SEO technique** : `metadata` par page, Open Graph, `robots.txt` et `sitemap.xml` générés, JSON-LD `ProfessionalService`.
- **Build maîtrisé** : plus de Tailwind CDN ni de React chargé depuis `esm.sh` en runtime — tout est buildé et optimisé (`next build`, images via `next/image`).
- **Pages légales ajoutées** : `/mentions-legales` et `/confidentialite` (le formulaire collecte des données personnelles, ces pages sont obligatoires).
- **Bannière "en construction" retirée** et excès d'UI (majuscules/tracking partout) allégé pour un rendu plus sobre.
- Design revu : typographie Fraunces (titres) + Inter (texte), palette encre/papier/pétrole au lieu du bleu SaaS générique — cohérent avec l'exigence d'un rendu "propre, non vibe-coding".

## À compléter avant mise en ligne

1. **`/mentions-legales`** : adresse postale complète et nom de l'hébergeur (`components/LegalContent.tsx`, champs `[À compléter]`).
2. **Envoi d'email** : créer un compte [Resend](https://resend.com), vérifier un domaine, renseigner `RESEND_API_KEY` et `CONTACT_FROM_EMAIL` dans `.env.local` (voir `.env.example`). Je n'ai pas inventé ce service à ta place — dis-moi si tu préfères SMTP/un autre prestataire, j'adapte `app/api/contact/route.ts`.
3. **`public/favicon.ico`** et **`public/og-image.jpg`** (1200×630) à ajouter — actuellement absents.
4. **`NEXT_PUBLIC_SITE_URL`** : mettre le vrai nom de domaine dans `.env.local`.

## Installation locale (Windows / PowerShell)

```powershell
cd observebyte-next
npm install
Copy-Item .env.example .env.local
# éditer .env.local (clé Resend, etc.)
npm run dev
```

Site disponible sur http://localhost:3000.

## Build de production

```powershell
npm run build
npm run start
```

## Déploiement Docker (VPS OVH/Hetzner)

Build et lancement local du conteneur :

```powershell
docker compose up -d --build
```

Le site écoute sur le port 3000 (à mettre derrière un reverse proxy avec TLS — Traefik/Coolify ou Nginx).

### Avec Coolify

1. Nouveau projet → **Dockerfile** comme méthode de build (le `Dockerfile` à la racine suffit, pas de configuration supplémentaire).
2. Renseigner les variables d'environnement dans l'UI Coolify : `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `NEXT_PUBLIC_SITE_URL`.
3. Port interne : `3000`. Coolify gère le certificat TLS et le reverse proxy automatiquement.
4. Activer les sauvegardes du volume/registre selon la configuration standard Coolify du VPS.

### Sans Coolify (Docker seul sur le VPS)

```bash
docker compose --env-file .env.local up -d --build
```

Ajouter Nginx ou Traefik en frontal pour le TLS (Let's Encrypt).

## Structure

```
app/            routes (App Router) — une page = un dossier
components/     composants client (langue FR/EN, formulaire, cartes portfolio…)
lib/            contexte langue, données portfolio, types
```

## Prochaine étape suggérée

Aperçu visuel à valider avant tout déploiement (voir l'artifact envoyé dans la conversation). Une fois validé, je peux préparer le guide Word de déploiement pas-à-pas.
