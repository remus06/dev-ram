# 01 — PRD : refonte « Thérapies psycho-corporelle, énergétique et quantique »

Projet : site vitrine Alliance Corps Esprit (`ALLIANCE-CORPS-ESPRIT/`, recette https://alliance.s-fservices.fr).
Demande : la cliente veut un site « de ce genre » à partir d'un nouveau visuel de référence (fourni dans la conversation, non versionné : droits inconnus).

## Référence visuelle (description)
- Une femme émerge d'un lac, tête renversée, yeux fermés ; lever de soleil à gauche, reflet dans l'eau.
- La moitié droite du corps se transforme en cosmos : galaxie, étoiles, nébuleuse violette et bleue, sphères flottantes, orbites dorées, foyer lumineux au cœur avec filaments d'énergie ; feuillage sur l'épaule ; galets flottants.
- À gauche, sur fond d'aube (crème, pêche) : « Thérapies » en serif, « Psycho Corporelle / Énergétique / et Quantique » en sans-serif fin, filet doré, « Reconnecter votre corps, vos émotions et votre énergie à votre potentiel » en capitales espacées, écriture manuscrite « Une approche globale, créative et sur mesure ».
- À droite, panneau nuit cosmique : 3 piliers reliés par un fil doré vertical, chaque pilier avec une icône au trait dans un cercle doré, un titre en capitales et un texte :
  - **Psycho corporelle** : « Libérer les mémoires du corps, retrouver la fluidité du mouvement et de l'émotion. »
  - **Énergétique** : « Harmoniser vos énergies, réveiller votre vitalité, rééquilibrer vos centres. »
  - **Quantique** : « Explorer d'autres possibles, reprogrammer en profondeur, activer votre potentiel. »
- En bas à droite : lune, symbole vertical, mots-clés « Corps · Énergie · Conscience · Équilibre · Liberté ».

## 1. Aperçu
- **Problème** : le site présente « Sophrologie & Hypnose » (hero vert sauge) ; la cliente veut mettre en avant une approche globale en trois piliers et une ambiance plus spirituelle.
- **Solution** : refonte visuelle et éditoriale du site one-page existant autour des trois piliers, ambiance « de l'aube au cosmos », en gardant tout le fonctionnel (tarifs, cabinet, avis, contact, pages légales).
- **Utilisateurs** : visiteurs de La Destrousse / Aubagne qui cherchent un accompagnement bien-être ; la cliente, qui valide les contenus (mise à jour par le développeur dans `lib/site.ts`).

## 2. Objectifs et cibles
| # | Objectif | Cible mesurable |
|---|---|---|
| O1 | Identité conforme à la référence | Captures ordinateur + mobile validées par la cliente |
| O2 | Approche comprise en quelques secondes | Les 3 piliers visibles sans défiler sur ordinateur, juste sous le titre sur mobile |
| O3 | Performance et accessibilité conservées | Lighthouse mobile : Performance ≥ 90, Accessibilité ≥ 95 ; LCP < 2,5 s ; CLS < 0,1 |
| O4 | Demandes de contact | Mesure {{à confirmer}} : aucun outil d'audience aujourd'hui (voir F13) |
| O5 | Sécurité | Dépendances au dernier correctif (Next.js ≥ 16.4.5), workflow « Sécurité des dépendances » vert |

**Hors périmètre** : blog, prise de rendez-vous intégrée ou paiement, espace client, CMS, version anglaise, nouveau logo.

## 3. Exigences fonctionnelles (MoSCoW)
| ID | Priorité | User story | Critères d'acceptation |
|---|---|---|---|
| F1 | Must | En tant que visiteur, je comprends dès l'arrivée l'approche en trois piliers et l'ambiance. | H1 en texte réel « Thérapies psycho-corporelle, énergétique et quantique » ; baseline ; 3 piliers (icône, titre, texte) ; mots-clés ; phrase manuscrite ; visuel 16:9 (ordinateur) et 9:16 (mobile) sans texte incrusté ; mouvements actifs, arrêtés si « réduire les animations » est activé. |
| F2 | Must | Je découvre les outils de chaque pilier. | Section « Les 3 piliers » (remplace « Les outils ») ; chaque outil existant rattaché à un pilier ; répartition validée {{à confirmer}}. |
| F3 | Must | Le site entier garde la même ambiance. | Sections alternées « aube » (claires) et « cosmos » (sombres) ; couleurs uniquement issues des tokens du doc 04 ; contrastes AA. |
| F4 | Must | Je retrouve tarifs, cabinet, avis, contact et pages légales. | Tarifs, Maps/Waze, « Lire / Laisser un avis », formulaire (réponses 200/400/429/503), mentions, confidentialité, médiation, logos SSP/SDMH, réseaux, barre mobile « Appeler / Prendre rendez-vous » : tout fonctionne comme aujourd'hui. |
| F5 | Must | Sur mobile, tout est lisible et utilisable. | Aucun débordement de 360 à 1920 px ; menu burger ; icônes réseaux visibles en haut à droite. |
| F6 | Must | Le site est à jour en sécurité. | Next.js au dernier correctif LTS vérifié en ligne ; Node LTS supportée ; CI verte ; déploiement par clé SSH seule (règle `CLAUDE.md`). |
| F7 | Should | Le visuel d'accueil est vivant. | Vidéo en boucle 4–8 s si crédits Higgsfield {{à confirmer}}, sinon mouvements CSS/SVG/canvas (étoiles, orbites dorées, cœur lumineux, ondes). |
| F8 | Should | En défilant, je passe de l'aube à la nuit. | Fond qui glisse de l'aube au cosmos entre le hero et la section piliers ; fluide ; désactivé en mouvement réduit. |
| F9 | Should | Je réserve en ligne. | Lien Google Agenda dans `site.booking` (fourni par la cliente) ; sinon renvoi vers le formulaire (comportement actuel). |
| F10 | Should | Je vois qui m'accompagne. | Portrait de Nawal dans « Mon approche » (photo fournie par la cliente). |
| F11 | Should | Le site est bien référencé sur le nouveau positionnement. | Titre, description, mots-clés, JSON-LD et image de partage mis à jour. |
| F12 | Could | Une page par pilier. | `/psycho-corporelle`, `/energetique`, `/quantique` avec contenu propre et sitemap. |
| F13 | Could | La cliente mesure les visites sans cookie. | Outil d'audience sans cookie {{à confirmer}} ; page confidentialité mise à jour. |
| — | Won't | Blog, paiement, espace client, CMS, multilingue. | — |

## 4. Exigences non fonctionnelles
- **Performance** : images via `next/image` (AVIF/WebP), hero ≤ 250 Ko par format ; pas de vidéo chargée sur mobile en données (image fixe) ; animations limitées à `transform` et `opacity` ; canevas d'étoiles mis en pause hors écran ou onglet caché.
- **Accessibilité** : WCAG 2.1 AA, un seul H1, textes alternatifs, focus visible, `prefers-reduced-motion` respecté.
- **Sécurité** : règles de `CLAUDE.md` (versions vérifiées en ligne, audit npm « high » bloquant, aucun secret dans le dépôt, accès VPS par clé SSH dédiée).
- **RGPD** : aucun cookie ; consentement sur le formulaire ; page confidentialité à jour.
- **Allégations** : formulations sans promesse de guérison (« quantique », « reprogrammer », « libérer les mémoires ») ; mention « pratiques de bien-être, ne remplacent pas un avis ni un traitement médical » visible près des piliers ; textes finaux validés par la cliente {{à confirmer}}. Risque : les allégations de santé non démontrées sont encadrées (pratiques commerciales trompeuses).

## 5. Expérience utilisateur
Personas (hypothèses {{à confirmer}}) :
- **Adulte stressé·e** (30–55 ans), sur mobile près d'Aubagne : veut comprendre vite et appeler.
- **Parent** d'un enfant ou d'un étudiant : cherche les tarifs adaptés.
- **Curieux·se des approches énergétiques** : veut comprendre les piliers avant de réserver.

Parcours principaux :
1. Hero → 3 piliers → tarifs → avis → contact ou appel.
2. Mobile : hero → barre « Appeler / Prendre rendez-vous » dès le premier défilement.
3. Moteur de recherche → accueil (ou page pilier, F12) → contact.

## 6. Métriques de succès
| Métrique | Cible | Mesure |
|---|---|---|
| Conformité visuelle | Validée | Captures 8 tailles d'écran envoyées à la cliente |
| Lighthouse mobile | Perf ≥ 90, A11y ≥ 95, SEO ≥ 95 | Lighthouse en local (Chromium) avant chaque mise en recette |
| Core Web Vitals | LCP < 2,5 s, CLS < 0,1 | Lighthouse / PageSpeed sur la recette |
| Demandes de contact | {{à confirmer}} | Journal des envois Resend (nombre par semaine) |
| Appels | {{à confirmer}} | Déclaratif cliente (pas de suivi des clics sans outil d'audience) |

## Points ouverts
- Textes définitifs des 3 piliers (repris de la référence) et formulation « quantique ».
- Répartition des outils (hypnose, sophrologie, Vittoz, PBA, EFT, Access Bars, déprogrammation psycho-émotionnelle, VaguExpans, DEEPLI…) entre les 3 piliers.
- Garder ou non les 5 bienfaits actuels du hero (ailleurs sur la page ?).
- Vidéo ou mouvements en code (crédits Higgsfield).
- Pages par pilier (F12) et mesure d'audience (F13) : oui / non.
