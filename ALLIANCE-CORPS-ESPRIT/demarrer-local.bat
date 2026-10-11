@echo off
title Alliance Corps Esprit - site local
cd /d "%~dp0"

rem Node.js 20+ : celui du PC s'il convient, sinon une copie portable telechargee une seule fois
rem dans AppData\Local\alliance-node (aucune installation, aucun droit administrateur).
set "NODE_PORTABLE=%LOCALAPPDATA%\alliance-node"
set "ALLIANCE_DIR=%~dp0"

where node >nul 2>nul
if errorlevel 1 goto node_portable
node -e "process.exit(Number(process.versions.node.split('.')[0]) < 20 ? 1 : 0)"
if not errorlevel 1 goto node_ok

:node_portable
if exist "%NODE_PORTABLE%\node.exe" goto node_path
echo.
echo Node.js absent de ce PC : telechargement d'une version portable, environ 35 Mo.
echo Une seule fois, rien n'est installe sur le PC.
powershell -NoProfile -ExecutionPolicy Bypass -Command "& ([scriptblock]::Create((Get-Content -Raw -LiteralPath (Join-Path $env:ALLIANCE_DIR 'scripts\node-portable.ps1'))))"
if errorlevel 1 goto node_fail

:node_path
set "PATH=%NODE_PORTABLE%;%PATH%"
if not exist "%APPDATA%\npm" mkdir "%APPDATA%\npm"

:node_ok
if exist "node_modules\next\package.json" goto deps_ok
echo.
echo Installation des dependances, premiere fois uniquement, 1 a 2 minutes...
call npm install --no-audit --no-fund
if errorlevel 1 goto npm_fail

:deps_ok
echo.
echo Site disponible sur http://localhost:3000  -  fermer cette fenetre pour l'arreter.
start "" cmd /c "timeout /t 8 >nul & start http://localhost:3000"
call npm run dev
pause
exit /b 0

:node_fail
echo.
echo Impossible de telecharger Node.js : verifier la connexion Internet et relancer ce fichier,
echo ou installer la version LTS depuis https://nodejs.org/fr/download - fichier .msi.
start "" https://nodejs.org/fr/download
pause
exit /b 1

:npm_fail
echo.
echo Echec de l'installation des dependances : verifier la connexion Internet et relancer ce fichier.
pause
exit /b 1
