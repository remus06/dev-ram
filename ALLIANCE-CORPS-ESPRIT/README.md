# Alliance Corps Esprit — site Next.js

Site vitrine du cabinet de sophrologie et d'hypnose de Nawal Billali, La Destrousse (13112).
Même stack que `OBSERVEBYTES/` : Next.js 16 (App Router, TypeScript), build `standalone`, Docker, Caddy en frontal.

Domaine : www.alliancecorpsesprit.fr — recette : `alliance.s-fservices.fr` (voir README racine).

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

## Déploiement sur le VPS OVH (Docker + Caddy)

Le `docker-compose.yml` reprend le schéma d'ObserveByte : réseau Docker externe `web` et labels `caddy` (caddy-docker-proxy gère TLS et reverse proxy).

```bash
# Recette
NEXT_PUBLIC_SITE_URL=https://alliance.s-fservices.fr \
CADDY_DOMAINS=alliance.s-fservices.fr \
docker compose up -d --build

# Production (après validation par la cliente)
NEXT_PUBLIC_SITE_URL=https://www.alliancecorpsesprit.fr \
CADDY_DOMAINS="alliancecorpsesprit.fr, www.alliancecorpsesprit.fr" \
docker compose up -d --build
```

Ou copier `.env.example` en `.env` et lancer `docker compose up -d --build`.
Port interne : 3000. Aucune clé secrète n'est nécessaire (pas de formulaire, pas d'API).

Avec Coolify : méthode de build « Dockerfile », port 3000, variable `NEXT_PUBLIC_SITE_URL` (aussi en build arg).

## Structure

```
app/            page d'accueil, pages légales, robots, sitemap, icônes
components/     en-tête (menu, réseaux, barre mobile), vidéo, effets au défilement, pied de page
lib/site.ts     toutes les données du cabinet
public/         images (hero, cabinet), image Open Graph
maquette-hero/  maquettes HTML et aperçus (non inclus dans l'image Docker)
```
