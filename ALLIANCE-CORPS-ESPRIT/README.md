# Alliance Corps Esprit — site web

Nouveau site du cabinet de Nawel Billali (hypnose, sophrologie — La Destrousse 13112).
Ancien site (Wix) : https://www.alliancecorpsesprit.com/

## Statut

Dossier créé, code source à ajouter (le site développé avec Claude Code n'a pas encore été poussé sur GitHub).

## Ajouter le code depuis le poste local (Windows / PowerShell)

```powershell
git clone https://github.com/remus06/dev-ram.git
cd dev-ram
git checkout ccr-ce66640f-ybtdl5
# copier le projet local SANS node_modules ni .next ni .git
robocopy "C:\chemin\vers\alliance-corps-esprit" ".\ALLIANCE-CORPS-ESPRIT" /E /XD node_modules .next .git
git add ALLIANCE-CORPS-ESPRIT
git commit -m "Add Alliance Corps Esprit site"
git push -u origin ccr-ce66640f-ybtdl5
```
