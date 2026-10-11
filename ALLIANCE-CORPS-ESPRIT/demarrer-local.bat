@echo off
title Alliance Corps Esprit - site local
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo Node.js nest pas installe sur ce PC.
  echo Telecharger la version LTS sur https://nodejs.org puis relancer ce fichier.
  start "" https://nodejs.org
  pause
  exit /b 1
)

if not exist node_modules (
  echo Installation des dependances, premiere fois uniquement...
  call npm install --no-audit --no-fund
  if errorlevel 1 ( pause & exit /b 1 )
)

echo.
echo Site disponible sur http://localhost:3000  -  fermer cette fenetre pour larreter.
start "" cmd /c "timeout /t 8 >nul & start http://localhost:3000"
call npm run dev
pause
