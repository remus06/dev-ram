# Alliance Corps Esprit — site Next.js

Site vitrine du cabinet de sophrologie et d'hypnose de Nawal Billali, La Destrousse (13112).
Même stack que `OBSERVEBYTES/` : Next.js 16 (App Router, TypeScript), build `standalone`, Docker, Caddy en frontal.

Recette (par défaut) : **https://alliance.s-fservices.fr** — non indexée par Google (`noindex`).
Production, plus tard : domaine de la cliente (`NEXT_PUBLIC_SITE_URL` + `CADDY_DOMAINS`).

## Contenu

Une page d'accueil en une seule page + 2 pages légales :

| Section | Source |
|---|---|
| Hero : séance vue de dos, sans visage, dans le style du vrai cabinet (ordinateur) ; vis-à-vis (mobile) — images Higgsfield animées en CSS | `public/images/hero-mains.jpg`, `hero-seance.jpg` — vidéo possible via `heroVideo` |
| Mon approche (+ emplacement du portrait), outils, champs d'action | Ancien site Wix (textes reformulés) |
| Tarifs et « Bon à savoir » | Notes de la cliente du 14/10/2026 |
| Le cabinet (photo, horaires, Google Maps / Waze) | Fiche Google + photo fournie |
| Avis (5,0 / 18 avis, 8 avis cités, « Laisser un avis » direct) | Fiche Google, copie figée |
| Contact : formulaire (envoi par e-mail via Resend) | `app/api/contact/route.ts` |
| Pied de page : logos SSP et SDMH (fiches d'adhérente) | Ancien site |
| `/mentions-legales`, `/confidentialite` | EI SIREN 791 220 718 (registre RNE), hébergeur OVH |

Toutes les données (téléphone, adresse, horaires, réseaux, tarifs, avis, mentions) sont dans **`lib/site.ts`** : c'est le seul fichier à modifier pour les mettre à jour.

Mobile : réseaux visibles en haut à droite sur tous les écrans (en-tête fixe), menu plein écran, barre « Appeler / Prendre rendez-vous » en bas après le hero.

## À compléter avant mise en ligne

1. **Prise de rendez-vous** : coller le lien de la page de réservation Google Agenda dans `site.booking`. Tant qu'il est vide, les boutons « Prendre rendez-vous » mènent au formulaire de contact.
2. **Portrait de Nawal** (section « Mon approche ») : déposer la photo dans `public/images/` et indiquer son chemin dans `site.portrait`.
3. **Formulaire de contact** : créer les secrets GitHub `RESEND_API_KEY`, `CONTACT_TO_EMAIL` (adresse de la praticienne) et `CONTACT_FROM_EMAIL` (adresse d'un domaine vérifié sur Resend). Sans eux, le formulaire affiche le téléphone et WhatsApp.
4. **Médiateur de la consommation** (obligatoire) : renseigner `legal.mediator` (nom et site de l'organisme auquel la praticienne a adhéré ; le SDMH propose Médiation Consommation Développement).
5. **TikTok** : coller l'URL du profil dans `socials` pour faire apparaître l'icône (les réseaux sans URL sont masqués).
6. **WhatsApp** : vérifier que le +33 6 76 48 69 27 est bien sur WhatsApp.
7. **Adresse** : Google indique « Résidence La Verrerie, Bâtiment Arrerie », l'ancien site « Bât A ». À confirmer.
8. **À faire valider** : texte « Déprogrammation psycho-émotionnelle », tarif étudiant (70 €), durée de conservation des messages (3 ans, page Confidentialité).

## Développement local

Windows : double-cliquer sur **`demarrer-local.bat`** (installe les dépendances la première fois, lance le site et ouvre http://localhost:3000).
Il trouve Node.js 20+ même hors du PATH (Program Files, dossier `node-v*` décompressé dans Téléchargements, Documents, Bureau ou OneDrive). À défaut, il télécharge une copie portable de la dernière LTS dans `AppData\Local\alliance-node` (`scripts/node-portable.ps1`) : aucune installation, aucun droit administrateur.

Ou en ligne de commande :

```powershell
npm install
npm run dev
```

## Déploiement sans ligne de commande (GitHub Actions)

Le workflow `.github/workflows/deploy-alliance.yml` se connecte au VPS en SSH et fait tout :
installe Docker si besoin, crée le réseau `web`, lance le reverse proxy Caddy partagé
(`infra/caddy/`, HTTPS automatique), récupère le code dans `/opt/dev-ram` et lance le site.
Il se déclenche à chaque push sur la branche qui touche `ALLIANCE-CORPS-ESPRIT/`.

Une seule fois, depuis un navigateur :

1. **DNS (OVH)** : zone DNS de `s-fservices.fr` → entrée **A**, sous-domaine `alliance`, cible = IPv4 du VPS.
2. **Secrets (GitHub)** : dépôt → *Settings → Secrets and variables → Actions → New repository secret* :
   - `VPS_HOST` : IPv4 du VPS
   - `VPS_USER` : utilisateur SSH (`ubuntu`, `debian` ou `root` selon l'image OVH)
   - `VPS_PASSWORD` : son mot de passe (ou `VPS_SSH_KEY` avec une clé privée)
3. **Lancer** : onglet *Actions* → « Déployer Alliance Corps Esprit (recette) » → dernière exécution → *Re-run all jobs*.

Le site est alors sur https://alliance.s-fservices.fr (certificat HTTPS généré au premier accès).

## Déploiement manuel (SSH)

```bash
docker network create web                                   # une seule fois
docker compose -f ../infra/caddy/docker-compose.yml up -d   # si Caddy n'est pas déjà lancé
docker compose up -d --build                                # recette alliance.s-fservices.fr par défaut
```

Production (après validation) : `NEXT_PUBLIC_SITE_URL=https://www.<domaine> CADDY_DOMAINS="<domaine>, www.<domaine>" docker compose up -d --build`.
Port interne : 3000. Aucune clé secrète n'est nécessaire (pas de formulaire, pas d'API).

## Structure

```
app/            page d'accueil, pages légales, robots, sitemap, icônes
components/     en-tête (menu, réseaux, barre mobile), vidéo, effets au défilement, pied de page
lib/site.ts     toutes les données du cabinet
public/         images (hero, cabinet, logos des syndicats), image Open Graph
maquette-hero/  maquettes HTML et aperçus (non inclus dans l'image Docker)
```
