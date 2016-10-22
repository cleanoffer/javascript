#! /bin/sh

find . -not -path '**/node_modules/*' -name package.json -execdir npm --no-git-tag-version -f version $1  \;
