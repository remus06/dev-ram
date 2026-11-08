# Cadrage : refonte « Thérapies psycho-corporelle, énergétique et quantique »

Plan de développement uniquement : aucune modification du site n'est faite à ce stade.

| Doc | Contenu |
|---|---|
| [01-prd.md](01-prd.md) | Ce qu'on construit : référence visuelle, objectifs, exigences MoSCoW, personas, métriques |
| [02-trd.md](02-trd.md) | Choix techniques et versions (relevées le 08/11/2026) |
| [03-app-flow.md](03-app-flow.md) | Écrans, états et parcours (Mermaid) |
| [04-design-system.md](04-design-system.md) | Palette aube/cosmos et contrastes, typographie, composants, mouvements |
| [05-donnees.md](05-donnees.md) | Modèle de contenu (pas de base de données), API contact, règles d'accès |
| [06-plan.md](06-plan.md) | Phases, durée estimée et 17 tâches avec critères de fin |

## Points à confirmer (cliente)
1. Textes définitifs des 3 piliers et formulation « quantique » (allégations de santé).
2. Répartition des outils entre psycho corporelle, énergétique et quantique.
3. Les 5 bienfaits du hero actuel : déplacés dans « Champs d'action » ou supprimés.
4. Vidéo (recharge Higgsfield : ≈ 4,8 crédits pour 4 s en 720p) ou mouvements en code uniquement.
5. Polices (Cormorant Garamond + Jost proposées) et palette, sur captures.
6. Options : pages par pilier (F12), mesure d'audience sans cookie (F13).
7. Toujours en attente : lien Google Agenda, photo de Nawal, e-mail de réception du formulaire, médiateur de la consommation, lien TikTok.

## Points à confirmer (technique)
- Passage à React 19 et à Node 26 (LTS active depuis octobre 2026) : maintenant ou plus tard.

## Urgent, indépendant de la refonte
- Next.js 16.4.3 → **16.4.5** (correctif de sécurité du 03/11/2026) : tâche T0.
- Déploiement : retirer l'option mot de passe SSH (règle `CLAUDE.md`) : tâche T1.
