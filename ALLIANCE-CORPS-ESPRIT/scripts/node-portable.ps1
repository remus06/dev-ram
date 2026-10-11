# Telecharge une copie portable de Node.js (derniere LTS) pour demarrer-local.bat.
# Rien n'est installe sur le PC et aucun droit administrateur n'est necessaire :
# tout va dans le dossier indique par la variable NODE_PORTABLE.
$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'
[Net.ServicePointManager]::SecurityProtocol = [Net.ServicePointManager]::SecurityProtocol -bor [Net.SecurityProtocolType]::Tls12

$dest = $env:NODE_PORTABLE
if (-not $dest) { throw 'Variable NODE_PORTABLE non definie.' }

$arch = 'x64'
if ($env:PROCESSOR_ARCHITECTURE -eq 'ARM64') { $arch = 'arm64' }

# Passer par une variable : Invoke-RestMethod renvoie le tableau JSON d'un seul bloc.
$releases = Invoke-RestMethod -Uri 'https://nodejs.org/dist/index.json' -UseBasicParsing
$release = $releases |
  Where-Object { $_.lts -and ($_.files -contains "win-$arch-zip") } |
  Select-Object -First 1
if (-not $release) { throw 'Version LTS introuvable sur nodejs.org.' }

$version = $release.version
$name = "node-$version-win-$arch"
Write-Host "Telechargement de Node.js $version..."

$parent = Split-Path -Parent $dest
$tmp = Join-Path $parent 'alliance-node-tmp'
$zip = Join-Path $parent "$name.zip"
New-Item -ItemType Directory -Force -Path $parent | Out-Null
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue -Path $tmp, $dest
New-Item -ItemType Directory -Force -Path $tmp | Out-Null

Invoke-WebRequest -Uri "https://nodejs.org/dist/$version/$name.zip" -OutFile $zip -UseBasicParsing

Write-Host 'Extraction...'
# tar.exe (Windows 10 et plus) est bien plus rapide qu'Expand-Archive.
$extracted = $false
$tar = $null
if ($env:SystemRoot) { $tar = Join-Path $env:SystemRoot 'System32\tar.exe' }
if ($tar -and (Test-Path $tar)) {
  & $tar -xf $zip -C $tmp
  $extracted = ($LASTEXITCODE -eq 0)
}
if (-not $extracted) { Expand-Archive -Path $zip -DestinationPath $tmp -Force }

Move-Item -Path (Join-Path $tmp $name) -Destination $dest
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue -Path $tmp, $zip
if (-not (Test-Path (Join-Path $dest 'node.exe'))) { throw 'node.exe absent apres extraction.' }
Write-Host "Node.js portable pret : $dest"
