#!/usr/bin/env bash
set -e

echo "→ Removing .next and node_modules..."
rm -rf .next
rm -rf node_modules

echo "→ Installing dependencies..."
npm install

echo "→ Running production build..."
npm run build

echo "✓ Clean build complete."
