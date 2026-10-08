# Alliance Corps Esprit — site Next.js

Refonte du site Wix www.alliancecorpsesprit.com du cabinet de Nawel Billali (hypnose, sophrologie — La Destrousse 13112).
Domaine cible : **www.alliancecorpsesprit.fr**. Recette : **alliance.s-fservices.fr**.

Stack : Next.js 16 (App Router, TypeScript), Tailwind CSS 3, Docker. Même structure que `OBSERVEBYTES/`.

## Pages

| Route | Contenu | Ancienne URL Wix (redirection 308) |
|---|---|---|
| `/` | Accueil, à propos, champs d'action, approches | `/` |
| `/approches` | Les 6 outils (corporel & énergétique) | `/copie-de-outils-therapeutiques` |
| `/approches/hypnose` | Hypnose ericksonienne | `/copie-de-sophrologie-1` |
| `/approches/sophrologie` | Sophrologie | `/copie-de-eft` |
| `/approches/methode-vittoz` | Méthode Vittoz | `/copie-de-sophrologie` |
| `/approches/psycho-bio-acupressure` | PBA | `/psycho-bio-acupressure-pba` |
| `/approches/eft` | EFT | `/eft` |
| `/approches/access-bars` | Access Bars | `/copie-de-eft-1` |
| `/articles/acouphenes` | Acouphènes | `/copie-de-hypnose-ericksonienne-et-t` |
| `/articles/hyperacousie-vertiges` | Hyperacousie, Ménière | `/copie-de-acouphènes` |
| `/articles/fibromyalgie` | Fibromyalgie | `/copie-de-hyperacousie` |
| `/tarifs` | Tarifs, ateliers, mutuelles | `/tarifs`, `/evenements` |
| `/contact` | Coordonnées, horaires, formulaire | — |
| `/mentions-legales`, `/confidentialite` | Pages légales | — |

Les redirections servent si `alliancecorpsesprit.com` est pointé vers ce serveur.

## Où modifier le contenu

- `lib/site.ts` : nom, téléphone, adresse, horaires, lien de réservation Liberlo, SIREN, réseaux.
- `lib/content.ts` : textes des approches, articles, tarifs.
- `lib/images.ts` : images.

## À faire avant mise en ligne

1. **Images** : elles sont encore chargées depuis `static.wixstatic.com`. Les télécharger dans `public/images/` et remplacer les URL dans `lib/images.ts` **avant de résilier Wix**.
2. **Hébergeur** : compléter `[À compléter]` dans `app/mentions-legales/page.tsx`.
3. **Formulaire** : renseigner `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (domaine vérifié sur Resend). Sans ces variables, le formulaire renvoie une erreur et invite à appeler.
4. **Favicon / image Open Graph** : `app/icon.png` et `public/og-image.jpg` absents.
5. Faire relire les textes par la praticienne (voir « Modifications de contenu »).

## Modifications de contenu par rapport au site Wix

- Orthographe et typographie corrigées.
- Allégations médicales retirées ou adoucies (risque juridique pour une praticienne non médecin) : PBA « capable d'annuler des états de dépression », Facelift « rajeunissement des cellules », liste hypnose (impuissance, frigidité, ulcères, asthme), fibromyalgie (« bénigne mais incurable », 3,4 %, détail des médicaments).
- Ajout d'un avertissement « ne remplace pas un avis médical » dans les mentions légales.

## Local (Windows / PowerShell)

```powershell
cd ALLIANCE-CORPS-ESPRIT
npm install
Copy-Item .env.example .env.local
npm run dev   # http://localhost:3000
```

## Déploiement (Coolify ou Docker)

- **Coolify** : nouvelle ressource → dépôt `dev-ram`, **Base Directory** `/ALLIANCE-CORPS-ESPRIT`, build **Dockerfile**, port `3000`, variables du `.env.example`.
- **Recette** : `NEXT_PUBLIC_SITE_URL=https://alliance.s-fservices.fr` → `robots.txt` bloque tout et les pages sont en `noindex`.
- **Production** : `NEXT_PUBLIC_SITE_URL=https://www.alliancecorpsesprit.fr` puis redéployer (la variable est lue au build).
- **Docker seul** : `docker compose --env-file .env.local up -d --build` (labels Caddy, `SITE_DOMAINS`).
