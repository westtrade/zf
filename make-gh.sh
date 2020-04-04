#!/usr/bin/env bash

find . -maxdepth 1 -type f  \( -name "entry.*" -o -name "index.html"  \) -delete
yarn build
mv ./dist/* .
rm -r ./dist
git add --all && git commit -m 'Update gh page' && git push
find . -maxdepth 1 -type f  \( -name "entry.*" -o -name "index.html"  \) -delete
