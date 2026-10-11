@echo off
title Alliance Corps Esprit - site local
cd /d "%~dp0"

rem Cherche Node.js 20+ : PATH, dossiers d'installation habituels, puis dossiers node-v*
rem decompresses (Telechargements, Documents, Bureau, OneDrive). Sinon, telecharge une copie
rem portable dans AppData\Local\alliance-node : aucune installation, aucun droit administrateur.
set "NODE_PORTABLE=%LOCALAPPDATA%\alliance-node"
set "ALLIANCE_DIR=%~dp0"
set "NODE_DIR="

where node >nul 2>nul
if errorlevel 1 goto search_node
node -e "process.exit(Number(process.versions.node.split('.')[0]) < 20 ? 1 : 0)" >nul 2>nul
if not errorlevel 1 goto node_ok

:search_node
call :try_dir "%ProgramFiles%\nodejs"
if not defined NODE_DIR call :try_dir "%ProgramFiles(x86)%\nodejs"
if not defined NODE_DIR call :try_dir "%LOCALAPPDATA%\Programs\nodejs"
if not defined NODE_DIR call :try_dir "%NODE_PORTABLE%"
if not defined NODE_DIR echo Recherche de Node.js sur le PC...
if not defined NODE_DIR call :try_tree "%USERPROFILE%\Downloads"
if not defined NODE_DIR call :try_tree "%USERPROFILE%\Documents"
if not defined NODE_DIR call :try_tree "%USERPROFILE%\Desktop"
if not defined NODE_DIR call :try_tree "%USERPROFILE%\OneDrive"
if defined NODE_DIR goto node_path

echo.
echo Node.js introuvable : telechargement d'une version portable, environ 35 Mo.
echo Une seule fois, rien n'est installe sur le PC.
"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -ExecutionPolicy Bypass -Command "& ([scriptblock]::Create((Get-Content -Raw -LiteralPath (Join-Path $env:ALLIANCE_DIR 'scripts\node-portable.ps1'))))"
if errorlevel 1 goto node_fail
call :try_dir "%NODE_PORTABLE%"
if not defined NODE_DIR goto node_fail

:node_path
set "PATH=%NODE_DIR%;%PATH%"
if not exist "%APPDATA%\npm" mkdir "%APPDATA%\npm"

:node_ok
for /f "delims=" %%v in ('node -v') do echo Node.js %%v
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
echo ------------------------------------------------------------------
echo Node.js introuvable et telechargement impossible.
echo Faire une capture de cette fenetre et l'envoyer.
echo Autre solution : installer Node.js LTS, fichier .msi, depuis
echo https://nodejs.org/fr/download puis redemarrer le PC et relancer ce fichier.
echo ------------------------------------------------------------------
pause
exit /b 1

:npm_fail
echo.
echo Echec de l'installation des dependances : verifier la connexion Internet et relancer ce fichier.
pause
exit /b 1

rem ---- Sous-programmes ----

rem Retient le dossier %1 s'il contient node.exe en version 20 ou plus.
:try_dir
if not exist "%~1\node.exe" exit /b 1
"%~1\node.exe" -e "process.exit(Number(process.versions.node.split('.')[0]) < 20 ? 1 : 0)" >nul 2>nul
if errorlevel 1 exit /b 1
set "NODE_DIR=%~f1"
exit /b 0

rem Cherche node.exe dans tout le dossier %1.
:try_tree
if not exist "%~1" exit /b 1
for /r "%~1" %%f in (node.ex?) do if not defined NODE_DIR call :try_dir "%%~dpf."
exit /b 0
