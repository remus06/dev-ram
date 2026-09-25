# Alliance Corps Esprit — site vitrine

Site de Nawel Billali, hypnologue et sophrologue à La Destrousse (13112).
Client final non technique. Remplace un site Wix existant.

## Stack imposée

- Next.js 15, App Router, **export statique** (`output: 'export'`) sauf la route du formulaire.
- TypeScript, CSS natif (pas de Tailwind : la maquette est déjà écrite en CSS custom properties).
- Contenu en fichiers versionnés : `content/*.json` pour les tarifs, la FAQ, les accompagnements ; `content/blog/*.md` pour les articles. Pas de base de données, pas de CMS pour l'instant.
- Docker multi-stage, servi par nginx. Déploiement Coolify sur VPS OVH 2 vCPU / 4 Go.
- Dépôt Git privé, `main` déployée automatiquement.

## Référence visuelle — à respecter, pas à réinterpréter

`design/apercu-site-v20.html` est la maquette validée. Reprendre tel quel :

- Grille modulaire 12 colonnes, ligne de base 8 px, interligne 24 px, gouttière 24, marge 48, largeur max 1240. Sous 860 px : 4 colonnes, tout passe pleine largeur.
- Toutes les hauteurs de ligne sont des multiples de 8. Ne jamais introduire une valeur qui casse la ligne de base.
- Jetons de couleur : papier `#FAF6EF`, papier secondaire `#F1E7D8`, encre `#241C17`, encre douce `#7A6959`, filet `#DFD0BB`, accent terre cuite `#9E5631`.
- Typographie : Inter (400/500/600) et IBM Plex Mono (400/500) pour les intitulés en capitales. **Auto-héberger les fontes** (`next/font/local`, woff2 dans le dépôt) — pas d'appel à Google Fonts, pour le RGPD et pour ne pas dépendre du réseau au build.
- Pas d'emoji, pas de dégradé, pas d'ombre portée, pas de coin arrondi hors cadres d'appareil.
- Conserver l'alignement optique des grands titres et le bouton d'affichage de grille (touche G) en développement ; le retirer du build de production.

## Pages

`/`, `/a-propos`, `/accompagnements`, `/blog`, `/blog/[slug]`, `/tarifs`, `/faq`, `/contact`.
Vraies routes, vraies URL. Le contenu de chaque page est dans la maquette.

## Formulaire de contact

- Route serveur, envoi **SMTP** via nodemailer. **Aucun webhook** — ne pas en inventer un, ne pas passer par un service tiers.
- Identifiants en variables d'environnement Coolify, jamais dans le dépôt : `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `MAIL_FROM`, `MAIL_TO`. Boîte OVH, à fournir par le client.
- Protection : champ piège invisible, limitation par IP, validation côté serveur, journalisation de la demande en cas d'échec d'envoi.

## SEO et conformité

- Métadonnées par page, Open Graph, `sitemap.xml` et `robots.txt` générés — ne lister que des URL qui existent réellement.
- Données structurées JSON-LD `LocalBusiness` avec adresse, horaires et téléphone.
- Redirections 301 depuis les anciennes URL Wix (liste à récupérer avant la migration).
- Mentions légales et politique de confidentialité obligatoires.
- Plan d'accès : OpenStreetMap, pas Google Maps (évite le bandeau cookies).
- Aucun cookie non essentiel, aucun script tiers de mesure sans accord explicite du client.

## Interdits et pièges connus

- Les photos de `design/images/` sont des visuels générés, provisoires. **L'une montre une personne qui n'est pas la cliente** : ne jamais l'utiliser. Attendre les vraies photos.
- Identité exacte, à ne pas altérer : Nawel BILLALI, SIREN 791 220 718, APE 8690F, Résidence la Verrerie Bât. A, 13112 La Destrousse, 06 76 48 69 27. Membre du SDMH et du Syndicat des Sophrologues Professionnels.
- Aucune adresse e-mail publique connue à ce jour : ne pas en inventer. Le formulaire écrit vers `MAIL_TO`, non affiché sur le site.
- Réseaux : instagram.com/sante_physique_et_mentale, facebook.com/nawel.billali (une page pro « Alliance Corps Esprit » existe aussi, arbitrage client en attente), linkedin.com/in/nawel-billali-02a59422. Un compte X existe, non repris.
- Le domaine actuel est un Wix sur `alliancecorpsesprit.com` : c'est lui qu'on migre, il n'y a pas de `.fr`.
- Les quatre articles réels à migrer : acouphènes, hyperacousie, vertiges de Menière, fibromyalgie. Reprendre le texte existant, ne rien inventer sur le plan médical.
- Formulations sanitaires : la cliente écrit « psychothérapie » sur l'ancien site. Terme réservé et risqué — le signaler, ne pas le reprendre sans son accord explicite.
- Les tarifs affichés sont ceux du client, validés : 60 / 80 / 80 / 80 / 80 / 70 / 35 / 90 €. Ne pas les modifier.

## Qualité attendue

- Lighthouse : performance et accessibilité ≥ 95 en production.
- Vérification de la grille : harnais Puppeteer du skill `müller-brockmann-grid-systems`, adhérence 0 px sur 1440 / 1024 / 390.
- README avec la procédure de déploiement reproductible, et un guide Word simple pour la cliente (comment modifier un texte, un tarif, publier un article).

## Étapes

1. Échafaudage + jetons + grille, page d'accueil fidèle à la maquette.
2. Les six autres pages.
3. Formulaire SMTP + pages légales.
4. Dockerfile + déploiement Coolify sur `preview.alliancecorpsesprit.com`, protégé par mot de passe et `noindex`.
5. Captures fidèles des sept pages pour le dossier de validation client.
6. Après validation : migration du domaine, redirections, mise en ligne.
