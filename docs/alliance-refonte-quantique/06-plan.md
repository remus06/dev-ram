# 06 — Plan d'implémentation

## Consigne pour l'agent
- Lire `CLAUDE.md` et les documents 01 à 05 avant chaque tâche.
- Ne pas sortir du périmètre : tout point `{{à confirmer}}` non tranché bloque la tâche concernée, qui doit attendre la réponse.
- Une tâche = un commit sur `claude/tender-gauss-mch8iw`, avec un message qui décrit le résultat.
- Avant toute montée de version : vérifier en ligne la dernière version corrigée et les avis de sécurité (règle `CLAUDE.md`).
- Ne jamais committer de secret ni l'image de référence de la cliente (droits inconnus).

## Phases et durée estimée
| Phase | Contenu | Durée |
|---|---|---|
| Planification | Ce cadrage, validation des docs 01–05 | 0,5 j |
| Exigences | Réponses cliente : textes, répartition des outils, vidéo, options F12/F13 | 0,5 j + délai cliente |
| Design | Visuels Higgsfield, tokens, maquette du hero validée sur captures | 1 j |
| Développement | Hero, piliers, habillage de toutes les sections, SEO | 2 à 2,5 j |
| Tests et recette | Tests automatiques, Lighthouse, retours cliente, mise en recette | 1 j |
| **Total** | | **≈ 5 à 5,5 jours ouvrés**, hors attente cliente (hypothèse) |

## Tâches
| # | Objectif | Fichiers | Dépend de | Critère de fin vérifiable |
|---|---|---|---|---|
| T0 | Mettre Next.js au dernier correctif LTS (16.4.5 au 08/11/2026, à revérifier) ; vérifier si React 18 reste concerné par les avis récents | `ALLIANCE-CORPS-ESPRIT/package.json`, `package-lock.json` | — | `npm ls next` = version visée ; `npm audit --omit=dev --audit-level=high` sans alerte ; workflow « Sécurité des dépendances » vert |
| T1 | Déploiement par clé SSH dédiée seule (retirer `VPS_PASSWORD`, mettre à jour l'en-tête et le README) | `.github/workflows/deploy-alliance.yml`, `ALLIANCE-CORPS-ESPRIT/README.md` | — | Le YAML se valide ; plus aucune référence à `VPS_PASSWORD` ; secrets manquants → avertissement sans échec (comportement actuel) |
| T2 | Figer les contenus validés : textes des piliers, outils par pilier, avertissement, sort des 5 bienfaits | `docs/alliance-refonte-quantique/01-prd.md` (points ouverts soldés) | Réponses cliente | Plus aucun `{{à confirmer}}` bloquant pour T5–T8 |
| T3 | Générer les visuels : hero 16:9 et 9:16 (Seedream 5.0 Flash 2K, sans texte, zones claires et sombres réservées au texte) ; vidéo en option | `public/images/hero-cosmos.jpg`, `hero-cosmos-mobile.jpg` (+ `public/videos/` si vidéo) | T2 | Images ≤ 250 Ko chacune ; validées par la cliente sur captures ; aucun texte incrusté |
| T4 | Tokens et polices (palette, typographie, espacements du doc 04) | `app/globals.css` (`:root`), `app/layout.tsx` (`next/font`) | T2 | `npm run build` OK ; aucune couleur codée en dur hors tokens dans les nouvelles règles |
| T5 | Modèle de contenu : `hero`, `pillars`, rattachement des outils, `benefits` déplacé ou retiré | `lib/site.ts` | T2 | `npx tsc --noEmit` OK ; chaque outil appartient à un seul pilier |
| T6 | Icônes des piliers et ornements (silhouette, lotus, atome, lune, symbole vertical) | `components/Icons.tsx` | T4 | Rendu net à 24, 32 et 56 px ; `aria-hidden` sur les icônes décoratives |
| T7 | Hero : composition gauche Aube / droite Cosmos, H1 texte réel, 3 piliers reliés par le fil doré, mots-clés, phrase manuscrite ; mise en page mobile (titre en haut, piliers sous le visuel) | `app/page.tsx`, `app/globals.css` | T3–T6 | Captures 1920, 1440, 1280, 1024, 768, 390, 360 px et paysage 844×390 : aucun débordement, aucun texte sur un visage, contrastes AA |
| T8 | Mouvements du hero : champ d'étoiles (canevas, pause hors écran), orbites, cœur lumineux, sphères, ondes ; respect de « réduire les animations » | `components/HeroFx.tsx` (refait), `components/Starfield.tsx` (nouveau, client), `app/globals.css` | T7 | Animations à 60 i/s (onglet Performance) ; avec `prefers-reduced-motion`, rien ne bouge et tout reste visible |
| T9 | Section « Les 3 piliers » (remplace « Les outils ») | `app/page.tsx`, `app/globals.css` | T5, T6 | Les 3 piliers et leurs outils affichés ; ancre `#piliers` dans le menu (`navLinks`) |
| T10 | Habillage des autres sections selon l'ambiance (doc 04) : approche, champs, tarifs, cabinet, avis, contact, pied de page, menu mobile, pages légales | `app/globals.css`, composants concernés | T4 | Captures de chaque section ; formulaire : 400/429/503 testés ; liens Maps, Waze, avis et réseaux identiques à avant |
| T11 | Défilement aube → nuit (F8), avec repli statique | `app/globals.css` | T10 | Fluide sur Chromium ; navigateur sans support = couleurs fixes correctes |
| T12 | SEO et partage : titre, description, mots-clés, JSON-LD, image de partage 1200×630 | `app/layout.tsx`, `public/og-image.jpg` | T3, T5 | HTML rendu : nouveau titre et description, JSON-LD valide, `noindex` conservé en recette |
| T13 | Conformité : avertissement près des piliers, mentions et confidentialité relues (et audience si F13) | `app/page.tsx`, `app/mentions-legales/page.tsx`, `app/confidentialite/page.tsx` | T2 | Avertissement visible dans le hero ou la section piliers ; pages légales à jour |
| T14 | Tests complets | scripts Playwright (hors dépôt) | T7–T13 | `tsc` et `build` OK ; 0 erreur console ; 0 débordement ; Lighthouse mobile : Perf ≥ 90, A11y ≥ 95, SEO ≥ 95 ; aperçu hors ligne régénéré |
| T15 | Mise en recette | push de la branche | T0, T1, T14 | CI sécurité verte ; workflow de déploiement réussi (si les secrets VPS existent) ; https://alliance.s-fservices.fr répond 200 avec la nouvelle page |
| T16 | Retours de la cliente et corrections | selon retours | T15 | Validation écrite de la cliente |
| (F12) | Pages par pilier (option) | `app/psycho-corporelle/page.tsx`, `app/energetique/page.tsx`, `app/quantique/page.tsx`, `app/sitemap.ts` | T9 | Pages 200, dans le sitemap, maillées depuis la section piliers |

## Ordre conseillé
T0 → T1 (sécurité, indépendantes du design) → T2 (cliente) → T3 → T4 → T5 → T6 → T7 → T8 → T9 → T10 → T11 → T12 → T13 → T14 → T15 → T16.
