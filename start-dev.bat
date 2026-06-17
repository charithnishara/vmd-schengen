@echo off
set NODE="C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VisualStudio\NodeJs\node.exe"
set NPM="C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VisualStudio\NodeJs\node_modules\npm\bin\npm-cli.js"
set PATH=C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VisualStudio\NodeJs;%PATH%

cd /d "%~dp0client"

echo Starting API server on port 3001...
start "VMD API Server" %NODE% server.js

echo Starting Vite dev server on port 5173...
echo Open http://localhost:5173 in your browser
%NODE% %NPM% run dev
