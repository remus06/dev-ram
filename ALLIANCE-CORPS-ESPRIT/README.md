# Alliance Corps Esprit — site Next.js

Site vitrine du cabinet de sophrologie et d'hypnose de Nawal Billali, La Destrousse (13112).
Même stack que `OBSERVEBYTES/` : Next.js 16 (App Router, TypeScript), build `standalone`, Docker, Caddy en frontal.

Recette (par défaut) : **https://alliance.s-fservices.fr** — non indexée par Google (`noindex`).
Production, plus tard : domaine de la cliente (`NEXT_PUBLIC_SITE_URL` + `CADDY_DOMAINS`).

## Contenu

Une page d'accueil en une seule page + 2 pages légales :

| Section | Source |
|---|---|
| Hero vidéo (boucle Higgsfield) | Vidéo générée — `lib/site.ts` → `heroVideo` |
| Approche, outils, champs d'action | Ancien site Wix (textes reformulés) |
| Tarifs | Page « Tarifs & Prestations » de l'ancien site |
| Le cabinet (photo, horaires, Google Maps / Waze) | Fiche Google + photo fournie |
| Avis (5,0 / 17 avis, 8 avis cités) | Fiche Google, copie figée |
| `/mentions-legales`, `/confidentialite` | Registre RNE (infosociétés), hébergeur OVH |

Toutes les données (téléphone, adresse, horaires, réseaux, tarifs, avis) sont dans **`lib/site.ts`** : c'est le seul fichier à modifier pour les mettre à jour.

Mobile : réseaux visibles en haut à droite sur tous les écrans (en-tête fixe), menu plein écran, barre « Appeler / Prendre rendez-vous » en bas après le hero.

## À compléter avant mise en ligne

1. **Instagram et TikTok** : coller les URL des profils dans `socials` (`lib/site.ts`). Tant qu'elles sont vides, les icônes pointent vers `#`.
2. **WhatsApp** : vérifier que le +33 6 76 48 69 27 est bien sur WhatsApp.
3. **Adresse** : Google indique « Résidence La Verrerie, Bâtiment Arrerie », l'ancien site « Bât A », le registre « Rés. La Tuilerie Bât A ». À confirmer.
4. **Mentions légales** : le registre indique la SARL ALLIANCE CORPS ESPRIT (SIREN 790 479 745) avec Nawal Billali en qualité de **liquidatrice**. Si l'activité est désormais exercée sous une autre structure (EI, micro-entreprise…), remplacer `legal` dans `lib/site.ts`.
5. **Tarifs** : repris de l'ancien site, à faire valider.
6. **Vidéo du hero** : servie par le CDN Higgsfield. Pour ne plus en dépendre, télécharger le mp4 depuis le compte Higgsfield, le mettre dans `public/videos/hero.mp4` et remplacer `heroVideo` par `'/videos/hero.mp4'`.

## Développement local

```powershell
npm install
npm run dev
```

http://localhost:3000

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
public/         images (hero, cabinet), image Open Graph
maquette-hero/  maquettes HTML et aperçus (non inclus dans l'image Docker)
```
