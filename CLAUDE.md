# Règles pour Claude sur ce dépôt

## Versions et sécurité
- Avant de fixer ou monter une version (Next.js, React, Node, image Docker), vérifier en ligne la dernière version corrigée et les avis de sécurité récents. Ne pas reprendre une version « de mémoire ».
- Node.js : uniquement une LTS supportée (aujourd'hui 24.x). Jamais une version en fin de vie.
- Next.js : dernière version de la branche LTS active.
- Toute modification de dépendance doit passer le workflow « Sécurité des dépendances » (npm audit high + build).
- Ne jamais committer de secret ; les accès VPS passent par les secrets GitHub Actions (clé SSH dédiée, pas de mot de passe).
