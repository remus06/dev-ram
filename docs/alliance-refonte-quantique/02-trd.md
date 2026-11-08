# 02 — TRD : choix techniques

Principe : garder la stack en place (elle répond au besoin) et ne changer que l'habillage, le contenu et les dépendances de sécurité.
Versions relevées le 08/11/2026 sur les sources officielles ; **à revérifier en ligne au moment de la tâche** (règle `CLAUDE.md`).

| Couche | Choix | Justification | Alternative écartée |
|---|---|---|---|
| Framework | Next.js 16 (App Router), sortie `standalone` | Déjà en place ; **16.4.5** = Active LTS, correctif de sécurité du 03/11/2026 (7 avis). Le projet est en 16.4.3 → à monter en premier (T0). | Astro / site statique : réécriture complète inutile |
| UI | React 18.3.1 (installé) | Compatible avec Next 16 (`^18.2 \|\| ^19`) ; la refonte n'exige pas React 19. Passage en 19.3 à décider {{à confirmer}} | React 19 imposé tout de suite : risque de régression sans gain pour la refonte |
| Langage | TypeScript (strict actuel) | Déjà en place | — |
| Runtime | Node.js **24.x LTS** (24.22.2 du 27/10/2026, inclut les correctifs sécurité du 21/10) ; Docker `node:24-alpine` | Imposé par `CLAUDE.md` (« aujourd'hui 24.x »). Node 26 est LTS active depuis octobre 2026 : migration à planifier {{à confirmer}} | Node 20 : fin de vie |
| Styles | CSS global + variables (tokens du doc 04), sans framework | Cohérent avec l'existant, zéro dépendance | Tailwind : migration de tout le CSS sans bénéfice |
| Mouvements | CSS (keyframes, `transform`/`opacity`), SVG (`stroke-dashoffset`) et **un** canevas 2D léger pour le champ d'étoiles (`requestAnimationFrame`, pause hors écran et onglet caché, densité limitée) ; défilement aube → nuit en CSS (`animation-timeline: scroll()` avec repli statique) | Rendu fluide, aucune librairie, compatible « réduire les animations » | GSAP / Framer Motion : dépendances en plus ; Three.js / WebGL : trop lourd pour mobile |
| Visuels | Higgsfield : Seedream 5.0 Flash 2K (0,5 crédit/image) pour le hero 16:9 et 9:16 ; vidéo en option : Seedance 1.5 720p 4 s (≈ 4,8 crédits, recharge nécessaire) | Déjà utilisé, rendu proche de la référence, coût faible | Banques d'images : style « cosmos » introuvable tel quel |
| Livraison des images | JPEG optimisés dans `public/images`, servis par `next/image` (AVIF/WebP), `<picture>` ordinateur/mobile | Déjà en place (`getImageProps`) | — |
| Polices | `next/font/google` (auto-hébergées au build) : titres serif type **Cormorant Garamond**, sous-titres sans-serif fin type **Jost**, manuscrite **Sacramento** (déjà chargée) {{à confirmer}} | Proches de la référence, pas de requête vers Google en production | Garder Instrument Serif/Sans : moins proche du visuel |
| Contenu | `lib/site.ts` typé (aucun CMS) | Mises à jour rares, faites par le développeur | CMS headless : coût et maintenance |
| API | Route Next `POST /api/contact` (existante) | Seul besoin serveur | — |
| E-mails | Resend (secrets `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`) | Même principe qu'observebyte.fr | SMTP OVH : identifiants à gérer |
| Base de données | Aucune (voir doc 05) | Rien à stocker | — |
| Hébergement | VPS OVH : Docker + Caddy (caddy-docker-proxy, HTTPS auto) ; recette `alliance.s-fservices.fr` non indexée | Déjà en place, partagé avec observebyte.fr | Vercel : changement d'hébergeur sans besoin |
| CI | `securite.yml` (npm audit high + build, à chaque push et chaque lundi) | Imposé par `CLAUDE.md` | — |
| CD | `deploy-alliance.yml` (SSH → `docker compose up --build`) ; **à mettre en conformité : clé SSH dédiée seule, retirer `VPS_PASSWORD`** | Règle `CLAUDE.md` | Mot de passe SSH : interdit |
| Tests | `tsc`, `next build`, Playwright (Chromium préinstallé) : captures, débordement, contrastes, mouvement réduit, API ; Lighthouse | Outillage déjà utilisé | — |
| Suivi | Journaux du conteneur, contrôle HTTP en fin de workflow ; sauvegarde = Git (code et images) | Pas de données à sauvegarder | — |

## Risques techniques
- **Poids du hero** (image + effets) : budget ≤ 250 Ko par image, effets en CSS ; canevas désactivé sur appareils lents ou en mouvement réduit.
- **Lisibilité sur fond cosmique** : texte uniquement sur les zones sombres unies du panneau droit ; contrastes vérifiés (doc 04).
- **`animation-timeline`** pas encore géré partout : repli = fond fixe par section, sans casse.
- **Crédits Higgsfield** (plan gratuit) : 2 images ≈ 1 crédit ; une vidéo nécessite une recharge.
