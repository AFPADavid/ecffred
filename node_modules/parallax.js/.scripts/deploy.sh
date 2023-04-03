#!/bin/bash
set -e

rm -rf out || exit 0
mkdir out;

node_modules/.bin/webpack

# copy built assets
cp index.html out
cp -r dist out/dist
cp -r images out/images

cd out
git init

git config user.name "Travis CI"
git config user.email "codemobius@gmail.com"

git add .
git commit -m "Deploy to GitHub Pages"

git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
