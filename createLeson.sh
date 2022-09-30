#!/bin/bash
mkdir $1 -p
mkdir $1/__tests__
touch $1/package.json
touch $1/Makefile
touch $1/index.js
touch $1/README.md
touch $1/__tests__/index.test.js

printf "test:\n\tNODE_OPTIONS=--experimental-vm-modules npx jest --color" > $1/Makefile
printf "{\n\t\"type\": \"module\"\n}" > $1/package.json