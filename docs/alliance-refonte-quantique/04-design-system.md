# 04 — Design system « de l'aube au cosmos »

Deux ambiances : **Aube** (sections claires, chaleur, corps) et **Cosmos** (sections sombres, énergie, conscience), reliées par l'**or**.
Les codes ci-dessous sont des propositions tirées de la référence, à valider sur captures {{à confirmer}}. Contrastes calculés (WCAG 2.1).

## Palette
| Rôle | Token | Hex | Usage |
|---|---|---|---|
| Principale (fond clair) | `--dawn-50` | `#fbf5ec` | Fond des sections Aube |
| Principale (fond clair 2) | `--dawn-100` | `#f4e7d6` | Alternance, cartes sur Aube |
| Pêche | `--dawn-peach` | `#f2c9a0` | Dégradés du lever de soleil (décor uniquement) |
| Secondaire (fond sombre) | `--night-900` | `#141b2b` | Fond des sections Cosmos |
| Carte sombre | `--night-700` | `#26314a` | Cartes et panneaux sur Cosmos |
| Nébuleuse | `--nebula-violet` / `--nebula-blue` | `#7b5ea7` / `#3f6fb5` | Halos et dégradés (décor uniquement) |
| Accent or | `--gold` | `#c9a45c` | Filets, icônes, boutons sur Cosmos |
| Or clair | `--gold-light` | `#e6cf9a` | Titres de piliers sur Cosmos |
| Or texte (clair) | `--gold-ink` | `#7d5f26` | Texte or sur fond Aube |
| Texte sur Aube | `--ink` / `--ink-soft` | `#1f2430` / `#5d6472` | Corps / secondaire |
| Texte sur Cosmos | `--star` / `--star-soft` | `#f3eee6` / `#a9b0c2` | Corps / secondaire |
| Succès | `--ok` | `#2f7a58` | Formulaire envoyé |
| Info | `--info` | `#3a6ea3` | Messages d'information |
| Avertissement | `--warn` | `#e9b45a` (texte `--ink`) | Avertissements |
| Erreur | `--error` | `#b5483c` | Erreurs de formulaire |

Contrastes vérifiés :
| Combinaison | Ratio | AA |
|---|---|---|
| `--ink` sur `--dawn-50` | 14,3 | ✅ |
| `--ink-soft` sur `--dawn-50` | 5,5 | ✅ |
| `--gold-ink` sur `--dawn-50` | 5,5 | ✅ |
| `--gold` sur `--dawn-50` | 2,2 | ❌ décor seulement, jamais du texte |
| `--star` sur `--night-900` | 14,9 | ✅ |
| `--star-soft` sur `--night-900` | 7,9 | ✅ |
| `--gold` sur `--night-900` | 7,3 | ✅ |
| `--gold-light` sur `--night-900` | 11,3 | ✅ |
| `--star` sur `--night-700` | 11,2 | ✅ |
| `--night-900` sur bouton `--gold` | 7,3 | ✅ |
| Blanc sur `--ok` / `--info` / `--error` | 5,2 / 5,3 / 5,3 | ✅ |

## Typographie
| Niveau | Police | Taille (mobile → ordinateur) | Interligne | Graisse |
|---|---|---|---|---|
| H1 « Thérapies » | Serif (Cormorant Garamond {{à confirmer}}) | 3,2 → 6,5 rem | 0,95 | 500 |
| Sous-titre H1 (3 lignes) | Sans fin (Jost {{à confirmer}}) | 1,4 → 2,6 rem | 1,15 | 300 |
| H2 | Serif | 2,3 → 4,2 rem | 1,05 | 500 |
| H3 / titre de pilier | Sans en capitales, espacement 0,22 em | 0,8 → 0,95 rem | 1,3 | 500 |
| Corps | Sans | 1 → 1,06 rem | 1,7 | 400 |
| Texte de pilier | Serif | 1,05 → 1,15 rem | 1,45 | 400 |
| Baseline / mots-clés | Sans en capitales, espacement 0,24 em | 0,7 → 0,78 rem | 1,9 | 400 |
| Manuscrite | Sacramento | 1,8 → 3,2 rem | 1,05 | 400 |
| Légende | Sans | 0,78 rem | 1,5 | 400 |

## Espacements, rayons, ombres
- Échelle 4/8 px : 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 ; marge latérale `clamp(1.25rem, 4vw, 3.6rem)` (inchangée).
- Rayons : 999 px (boutons), 20 px (cartes), 50 % (icônes).
- Ombres Aube : `0 18px 40px -30px rgba(31,36,48,.35)`. Sur Cosmos, un halo plutôt qu'une ombre : `0 0 24px rgba(201,164,92,.25)`.

## Icônes
SVG inline au trait (1,3 px, couleur `--gold`, cercle doré de 56 px) dans `components/Icons.tsx`. À créer : silhouette (psycho corporelle), lotus (énergétique), atome (quantique), lune, symbole vertical. Les icônes existantes (réseaux, téléphone, calendrier, repère, navigation) sont conservées.

## Composants
| Composant | Spécification |
|---|---|
| Bouton principal | Aube : fond `--ink`, texte `--dawn-50` ; Cosmos : fond `--gold`, texte `--night-900` ; hauteur ≥ 44 px |
| Bouton secondaire | Contour 1 px (`--ink` à 22 % ou `--gold` à 40 %) ; survol : rempli |
| Bouton tertiaire | Lien souligné au survol |
| Bouton icône | 44 × 44 px (réseaux, burger) |
| Champs | Formulaire actuel (nom, téléphone, e-mail, message), focus `--gold-ink` |
| Case à cocher | Consentement RGPD, `accent-color` or |
| Carte pilier | Fond `--night-700` à 60 %, bordure 1 px or à 30 %, icône cerclée, titre en capitales, texte serif, fil doré vertical entre les cartes |
| Liste | Tarifs (pointillés), outils par pilier |
| Navigation | En-tête fixe transparent → plein ; texte clair sur Cosmos, foncé sur Aube |
| Feuille / menu | Menu mobile plein écran (existant), fond Cosmos |
| Barre mobile | « Appeler / Prendre rendez-vous » (existante) |
| Non utilisés | Onglets, interrupteurs, curseurs, barres de progression, dialogues : sans objet sur un site vitrine |

## Retours (formulaire)
Succès (`--ok`), information (`--info`), avertissement (`--warn`), erreur (`--error`) : bandeau arrondi de 12 px, texte ≥ 4,5:1, `role="status"` ou `role="alert"`.

## Mouvements
| Effet | Détail | Mouvement réduit |
|---|---|---|
| Apparition du visuel | Flou → net, 1,9 s | Visuel affiché directement |
| Champ d'étoiles | Canevas, scintillement lent, densité adaptée à l'écran | Désactivé |
| Orbites dorées | SVG, tracé qui se dessine puis circule lentement | Statique |
| Cœur lumineux | Halo qui respire (10 s) | Statique |
| Sphères et galets | Flottement de ±8 px, 12–16 s | Statique |
| Ondes sur l'eau | Ellipses qui s'élargissent | Masquées |
| Titre et piliers | Montée des lignes, piliers un par un (120 ms) | Affichés directement |
| Défilement aube → nuit | Fond qui glisse de `--dawn-50` à `--night-900` | Couleur fixe par section |
Durées : 0,6 s (UI), 1,2 s (entrées), 10–28 s (ambiance) ; courbe `cubic-bezier(0.22, 1, 0.36, 1)`.

## Ambiance par section
Hero : Aube (gauche) + Cosmos (droite) · Piliers : Cosmos · Mon approche : Aube · Champs d'action : Aube 2 · Tarifs : Aube · Cabinet : Aube · Avis : Cosmos · Contact : Aube · Pied de page : Cosmos.
