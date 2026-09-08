#!/usr/bin/env bash
set -e

cd "$(dirname "$0")"

echo "==> Build del proyecto..."
npm run build

echo "==> Desplegando a triskis.surge.sh..."
surge ./dist triskis.surge.sh

echo ""
echo "✔ Publicado: https://triskis.surge.sh"
