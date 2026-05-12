#!/usr/bin/env bash
# Workaround for Next.js bug: the metadata-route loader (sitemap/robots/icon) cannot
# parse a project path that contains an apostrophe (e.g. "Pat's Pressure Washing").
# Bug confirmed in Next 14.2.15 -> 15.0.3 at minimum. This script mirrors the project
# to a clean path, builds there, then rsyncs the .next output back.
#
# Long-term fix: rename the project directory to remove the apostrophe.
#
# Usage:
#   bash scripts/build-safepath.sh
#
# This is invoked by `npm run build:safepath`. The normal `npm run build` works fine
# from any path without an apostrophe.
set -euo pipefail

SRC="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Choose a clean mirror directory based on the project name from package.json.
# Read via a heredoc that pipes JSON to node, so the source path (which may contain
# an apostrophe) is not embedded in a shell-quoted JS string.
PROJECT_NAME="$(cat "$SRC/package.json" | node -e 'let s=""; process.stdin.on("data",d=>s+=d); process.stdin.on("end",()=>{console.log(JSON.parse(s).name)})')"
MIRROR="${TMPDIR:-/tmp}/${PROJECT_NAME}-build"

echo "[safepath] mirror: $MIRROR"
rm -rf "$MIRROR"
mkdir -p "$MIRROR"

# Mirror sources without node_modules / .next
rsync -a --delete \
  --exclude='node_modules' \
  --exclude='.next' \
  --exclude='.lighthouseci' \
  --exclude='playwright-report' \
  --exclude='test-results' \
  "$SRC/" "$MIRROR/"

# Install + build at the mirror
cd "$MIRROR"
npm install --no-audit --no-fund --loglevel=error
npm run build

# Sync build outputs back to the original path. Under `output: 'export'` the
# static site lives in `out/`; `.next/` is still useful for inspection.
rsync -a --delete "$MIRROR/.next/" "$SRC/.next/"
if [ -d "$MIRROR/out" ]; then
  rsync -a --delete "$MIRROR/out/" "$SRC/out/"
  echo "[safepath] done. .next and out copied back to $SRC"
else
  echo "[safepath] done. .next copied back to $SRC/.next (no out/ produced)"
fi
